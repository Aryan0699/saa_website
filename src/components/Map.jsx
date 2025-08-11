"use client"
import axios from "axios"
import { json } from "d3-fetch";
import { useEffect, useRef, useState,useMemo } from "react"
import Globe from "react-globe.gl";
import * as topojson from "topojson-client"



export default function Alumni_Map() {
    const [data, setData] = useState([]);
    const globeRef = useRef();
    const [countries, setCountries] = useState([]);
    const [arcs, setArcs] = useState([]);

    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>`;


    useEffect(() => {
        axios.get("/api/alumni_data") //response you get already json
            .then((res) => {
                console.log(res.data)
                setData(res.data);
                const arcData = res.data.map((alumni) =>
                (
                    {
                        city: alumni.city,
                        startLat: 26.4708,
                        startLng: 73.1169,
                        endLat: alumni.lat,
                        endLng: alumni.lng,
                    }
                ))
                setArcs(arcData);
            }
            )
            .catch((err) => {
                console.log("Cannot Fetch Details", err)
            })


    }, [])

    //Need to grp those alumni in same city
   const [sameCity, cityPoints] = useMemo(() => {
  const group = {};
  data.forEach((alumni) => {
    const key = `${alumni.lat}_${alumni.lng}`;
    if (!group[key]) {
      group[key] = {
        city: alumni.city,
        lat: alumni.lat,
        lng: alumni.lng,
        alumni: [],
      };
    }
    group[key].alumni.push(alumni.label);
  });
  return [group, Object.values(group)];
}, [data]);



    useEffect(() => {
        if (!globeRef.current?.controls()) return;
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.6;
    }, [])

    //autofocus if iitj
    useEffect(() => {
        const timeout = setTimeout(() => {
            globeRef.current?.pointOfView(
                { lat: 26.4708, lng: 73.1169, altitude: 2.5 },
                1500 //kitne time me vaha mve karega
            );
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);


    // Load country borders
    useEffect(() => {
        //Topo Json File having having country shapes 
        json("https://unpkg.com/world-atlas@2.0.2/countries-110m.json").then(
            (topology) => {
                //topology.objects.countries -- country goemtry data
                //convert topojson to geojson -- both are for geographic data (topoJson is compact)
                const geojson = topojson.feature(topology, topology.objects.countries);
                // Each feature is a GeoJSON object representing a country — with properties like geometry and id.
                setCountries(geojson.features);
            }
        );
    }, []);

    return (
        <div id="Globe" className="min-h-[100vh] bg-black">
            {/* Div to show Alumni Details */}
            <div id="alumniDetails" className="absolute hidden z-[1000] max-w-[400px] text-sm leading-snug px-3 py-2 rounded-md shadow-lg bg-[rgba(30,30,30,0.9)] text-[#f0f0f0] pointer-events-none backdrop-blur-sm border border-white/10 transition-opacity duration-200 tracking-wider"></div>

            <Globe
                ref={globeRef}
                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png"

                //render custom html elements like map
                //d is indivisual cityPoint
                htmlElementsData={cityPoints}
                htmlElement={(d) => {
                    const element = document.createElement("div")
                    element.innerHTML = markerSvg;
                    element.className = "w-[15px] text-red-500 drop-shadow cursor-pointer transition-opacity duration-200 pointer-events-auto";
                    const tooltip = document.getElementById("alumniDetails");
                    if (!tooltip) return element;

                    element.addEventListener("mouseenter", (e) => {
                        tooltip.classList.remove("hidden")
                        tooltip.classList.add("block")
                        tooltip.innerText = `Alumni in ${d.city}:\u000A${d.alumni.join("\u000A")}`;

                    })

                    element.addEventListener("mousemove", (e) => {
                        tooltip.style.left = `${e.clientX + 10}px`;
                        tooltip.style.top = `${e.clientY + 10}px`;
                    });
                    element.addEventListener("mouseleave", () => {
                        tooltip.classList.remove("block");
                        tooltip.classList.add("hidden");
                    });
                    return element;

                }
                }
                htmlElementVisibilityModifier={(element, isVisible) => (element.style.opacity = isVisible ? 1 : 0)}

                arcsData={arcs}
                arcStartLat={(d) => d.startLat}
                arcStartLng={(d) => d.startLng}
                arcEndLat={(d) => d.endLat}
                arcEndLng={(d) => d.endLng}
                arcColor={(d) => {
                    const count = sameCity[`${d.endLat}_${d.endLng}`]?.alumni.length || 1;
                    if (count <= 2) return ['#00ffff', '#00ff00'];    // Cyan → Lime
                    if (count <= 4) return ['#00ff00', '#ffff00'];    // Lime → Yellow
                    if (count <= 6) return ['#ffff00', '#ff8c00'];    // Yellow → Dark Orange
                    return ['#ff0000', '#8b0000'];

                }}
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={1500}
                arcStroke={0.6}
                arcLabel={(d) => d.city}

                //countryBorder
                polygonsData={countries}
                polygonCapColor={"rgba(255, 255, 255, 0)"}
                polygonSideColor={"rgba(255, 255, 255, 0.03)"}
                polygonStrokeColor={"#00ffff"}
                polygonStrokeWidth={0.5}

                //ring around cities
                ringsData={cityPoints}
                ringMaxRadius={(d) => Math.min(1 + d.alumni.length * 0.2, 3)}             // Bigger ripples
                ringResolution={64}           // Smooth edges
                ringPropagationSpeed={1.5}    // Graceful spread
                ringRepeatPeriod={1000}
                ringColor={(d) => {
                    const count = d.alumni.length;
                    if (count <= 2) return '#00ffff';        // Cyan
                    if (count <= 4) return '#00ff00';        // Lime
                    if (count <= 6) return '#ffff00';        // Yellow
                    return '#ff0000';                        // Red
                }}
            ></Globe>

        </div>

    )
}