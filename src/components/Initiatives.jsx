import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import about1 from "../assets/about_1.jpg";
import about2 from "../assets/about_2.jpg";
import about3 from "../assets/about_3.jpg";
import g9 from "../assets/g9.png";
import ParticlesBg from "./ParticlesBg";

export default function Initiatives() {
  const images = [about1, about2, about3];

  const initiatives = [
    { title: "Alumni Mentorship Program", desc: "Pairing experienced alumni with current students to provide guidance, career advice, and networking opportunities.", link: "/asmp" },
    { title: "Mock Interviews", desc: "Helping students prepare for placements and internships with realistic interview simulations by alumni and professionals.", link: "/mi" },
    { title: "Legacy", desc: "A long-term impact program: caution depot, money donation, reading rooms, co-working spaces, and game rooms for the IITJ community.", link: "/legacy" },
    { title: "Roommate Rewind", desc: "A new tradition where juniors host their seniors, reliving memories, gaining guidance, and fostering heartfelt reunions.", link: "/rr" },
    { title: "Intern Bridge", desc: "Bridging academic learning with real-world experience through daily updates, opportunities, and guidance for career readiness.", link: "/ib" },
    { title: "Memoirs Lane", desc: "Celebrating the memories of our graduating batch—friendships, experiences, and stories that shaped their IITJ journey.", link: "/ml" },
    { title: "Dashak", desc: "Our flagship alumni festival bringing together the IITJ family for celebrations, networking, and cultural exchange.", link: "/dashak" },
    { title: "Convocation", desc: "A milestone event honoring our graduates as they step into the next chapter of their journey with pride and achievement.", link: "/convocation" },
    { title: "Farewell", desc: "A heartfelt send-off for our graduating students, filled with nostalgia, celebration, and wishes for a bright future ahead.", link: "/farewell" },
    { title: "Alumni Induction Dinner", desc: "A special dinner welcoming graduating students into the alumni community, fostering connections and celebrating their journey.", link: "/aid" },
    { title: "Alumni Sessions", desc: "Interactive talks and networking opportunities where distinguished alumni share career insights, experiences, and guidance with current students.", link: "/as" },
  ];

  function InitiativeCard({ item, image, delay }) {
    const cardRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const [isFocused, setIsFocused] = useState(false);

    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const rotateY = useTransform(px, [-1, 1], [18, -18]);
    const rotateX = useTransform(py, [-1, 1], [-12, 12]);
    const rY = useSpring(rotateY, { stiffness: 140, damping: 18 });
    const rX = useSpring(rotateX, { stiffness: 140, damping: 18 });

    function handleMove(e) {
      if (!cardRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      px.set((x - 0.5) * 2);
      py.set((y - 0.5) * 2);
    }

    function handleLeave() {
      px.set(0);
      py.set(0);
    }

    const cardVariants = {
      rest: { scale: 1 },
      hover: { scale: 1.03 },
    };

    const descVariants = {
      rest: { opacity: 0, y: 8, pointerEvents: "none" },
      hover: { opacity: 1, y: 0, pointerEvents: "auto" },
    };

    const overlayTransition = { duration: shouldReduceMotion ? 0 : 0.28 };

    return (
      <Link to={item.link} className="block"> {/* ✅ Make card clickable */}
        <motion.article
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay * 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          animate={isFocused ? "hover" : "rest"}
          whileHover="hover"
          variants={cardVariants}
          onMouseMove={shouldReduceMotion ? undefined : handleMove}
          onMouseLeave={shouldReduceMotion ? undefined : handleLeave}
          onTouchMove={shouldReduceMotion ? undefined : handleMove}
          onTouchStart={() => setIsFocused(true)}
          onTouchEnd={() => {
            handleLeave();
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          role="article"
          aria-label={item.title}
          style={{
            rotateX: shouldReduceMotion ? 0 : rX,
            rotateY: shouldReduceMotion ? 0 : rY,
            transformStyle: "preserve-3d",
          }}
          className="group relative rounded-2xl bg-white/80 dark:bg-[#18181b]/80 shadow-md hover:shadow-2xl border border-white/50 dark:border-white/10 overflow-hidden transform-gpu transition-shadow duration-300 hover:scale-105 hover:-translate-y-2 z-10"
        >
          <div className="relative w-full h-60 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img
              src={image}
              alt={item.title}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute left-0 right-0 bottom-0 h-28 pointer-events-none">
              <motion.p
                variants={descVariants}
                transition={overlayTransition}
                className="absolute left-4 right-4 bottom-12 text-sm text-gray-200"
                aria-hidden={!isFocused}
              >
                {item.desc}
              </motion.p>
              <div className="absolute left-4 right-4 bottom-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0))",
              transform: "translateZ(20px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300"></div>
        </motion.article>
      </Link>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBg />

      <div className="relative z-10 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="relative w-full overflow-hidden">
          <img
            src={g9}
            alt="IITJ campus hero"
            className="w-full h-64 md:h-80 lg:h-[520px] object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none" />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.15) 50%, rgba(99,102,241,0.15) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
                style={{
                  textShadow: "0 8px 30px rgba(0,0,0,0.6)",
                }}
              >
                Our Initiatives
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="mt-4 text-base sm:text-lg md:text-xl text-white/90"
                style={{
                  textShadow: "0 6px 24px rgba(0,0,0,0.5)",
                }}
              >
                Connecting alumni, fostering collaboration, and driving impact
                through innovative programs, events, and traditions.
              </motion.p>
            </div>
          </div>
        </header>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12"
          >
            Our Key Initiatives & Events
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {initiatives.map((item, idx) => {
              const image = images[idx % images.length];
              return (
                <InitiativeCard
                  key={idx}
                  item={item}
                  image={image}
                  delay={idx % 3}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
