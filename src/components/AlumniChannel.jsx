// components/AlumniChannelSection.js


import "../styles/AlumniChannel-ltr.css"
import "../styles/AlumniChannel.css"
import nirmal from '../assets/AlumniChannel/marquee_nirmal.jpeg'
import aditya from '../assets/AlumniChannel/marquee_aditya.jpeg'
import darshan from '../assets/AlumniChannel/marquee_darshan.jpeg'
import gurjot from '../assets/AlumniChannel/marquee_gurjot.jpeg'
import himanshu from '../assets/AlumniChannel/marquee_himanshu.jpeg'
import lalchand from '../assets/AlumniChannel/marquee_lalChand.jpeg'
import manu from '../assets/AlumniChannel/marquee_manu.jpeg'
import shivam from '../assets/AlumniChannel/marquee_shivam.jpeg'
import shobhit from '../assets/AlumniChannel/marquee_shobhit.jpeg'
import siddharth from '../assets/AlumniChannel/marquee_siddharth.jpeg'
import suraj from '../assets/AlumniChannel/marquee_suraj.jpeg'
import tanmay from '../assets/AlumniChannel/marquee_tanmay.jpeg'
import tapish from '../assets/AlumniChannel/marquee_tapish.jpeg'
import utkarsh from '../assets/AlumniChannel/marquee_utkarsh.jpeg'
import vikas from '../assets/AlumniChannel/marquee_vikas.jpeg'
import vinod from '../assets/AlumniChannel/marquee_vinod.jpeg'
import downArrow from "../assets/right_DownArrow.svg"
import channelArt from "../assets/channelArt.jpg"
const AlumniChannelSection = () => {
  return (
    <div className="px-10">
      <div className="grid max-w-screen-xl mt-12 px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:px-0.5 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white ">
            Dashak 5.0 — Coming Soon
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-white/20">
            Gear up for the 5th edition of Dashak — our flagship event that blends innovation, inspiration, and impact. Stay tuned for the launch and join a legacy of brilliance and celebration!
          </p>
          <div className="event-link event-link-ltr animate-pulse">
            <a href="#">
              <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Notify Me
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={channelArt}
            alt="Distinguished Alumni"
            className="h-full w-full rounded-xl shadow-xl animate-fade-in"
            width={800}
            height={600}
          />
        </div>
      </div>
      
      <div id="companies-title" className="flex justify-center gap-2 mb-6 mt-2">
        <img
          className="translate-y-2 dark:invert"
          src={downArrow}
          alt=""
        />
        <span className="font-extrabold text-gray-900 dark:text-white text-2xl text-center">OUR ESTEEMED ALUMNI</span>
        <img
          className="-scale-x-100 translate-y-2 dark:invert"
          src={downArrow}
          alt=""
        />
      </div>
      
      <div className="wrapper-rtl  ">
        <div className="item-rtl item-rtl1">
          <div className="image-holder">
            <a href="https://www.instagram.com/techhacksbyn.nirmal/">
              <img className="image"  src={nirmal} alt="Nirmal Kumawat"/>
            </a>
          </div>
          <div className="Text ">
            <h3 className="text-xl font-bold tracking-tight  text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Nirmal Kumawat</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Computer Scientist-II Adobe
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl2 ">
          <div className="image-holder">
            <a href="https://www.instagram.com/lalchandbisu/">
              <img className="image" src={lalchand} alt="Lal Chand Bisu"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Lal Chand Bisu</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Co-Founder & CEO at Kuku FM
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl3">
          <div className="image-holder">
            <a href="https://www.instagram.com/_vinod92/">
              <img className="image" src={vinod} alt="Vinod Kumar Meena" />
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Vinod Kumar Meena</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">Co-Founder at Kuku FM</span>
          </div>
        </div>

        <div className="item-rtl item-rtl4">
          <div className="image-holder">
            <a href="https://www.instagram.com/_vikasgoyal/">
              <img className="image" src={vikas} alt="Vikas Goyal"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Vikas Goyal</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Co-founder, CTO-Kuku FM
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl5">
          <div className="image-holder">
            <a href="https://www.linkedin.com/in/tapishr?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjFBrZYcFR3%2BJ8fZ8isjksA%3D%3D">
              <img className="image" src={tapish} alt="Tapish Rathore"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tapish Rathore</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Co-founder & CTO @ Vibinex
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl6">
          <div className="image-holder">
            <a href="https://www.linkedin.com/in/hustler-utkarsh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdzCE2Yl3QpWbWfKxhSft8w%3D%3D">
              <img className="image" src={utkarsh} alt="Utkarsh Trivedi"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Utkarsh Trivedi</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Co-Founder @Verifast AI
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl7">
          <div className="image-holder">
            <a href="https://www.instagram.com/sethi.tanmay/">
              <img className="image" src={tanmay} alt="Tanmay Sethi" />
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tanmay sethi</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">Co-Founder @Verifast</span>
          </div>
        </div>

        <div className="item-rtl item-rtl9">
          <div className="image-holder">
            <a href="https://www.linkedin.com/in/himanshujaiswal1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BV8T7zjq7Se6NWWj12grYpA%3D%3D">
              <img className="image" src={himanshu} alt="Himanshu Jaiswal"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Himanshu Jaiswal</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Senior Product Manager @ Visa Inc
            </span>
          </div>
        </div>
      </div>
      
      <div className="wrapper-ltr">
        <div className="item-ltr item-ltr1">
          <div className="image-holder">
            <a href="linkedin.com/in/gsmanu007">
              <img className="image" src={gurjot} alt="Gurjot Singh"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Gurjot Singh </a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              VP, Quant at Deutsche Bank
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr2">
          <div className="image-holder">
            <a href="linkedin.com/in/sinisterlight">
              <img className="image" src={shobhit} alt="Shobit Srivastava"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shobhit Srivastava</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Co-Founder at Shovel Company
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr3">
          <div className="image-holder">
            <a href="linkedin.com/in/darshan-joshi-5947033b">
              <img className="image" src={darshan} alt="Darshan Joshi"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Darshan Joshi</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Partner at McKinsey & Company
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr4">
          <div className="image-holder">
            <a href="linkedin.com/in/surajn-ai">
              <img className="image" src={suraj} alt="Suraj Nadipelly"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Suraj Nadipelly</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Partner at AlphaAdvisors
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr5">
          <div className="image-holder">
            <a href="linkedin.com/in/siddarthjn">
              <img className="image" src={siddharth}  alt="Siddharth Jain"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Siddharth Jain</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Summer associate @ McKinsey
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr6">
          <div className="image-holder">
            <a href="linkedin.com/in/manu-agarwal-21b2964b">
              <img className="image" src={manu}  alt="Manu Agrawal"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Manu Agrawal</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              Software Engineer @Google
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr7">
          <div className="image-holder">
            <a href="linkedin.com/in/shivamverma1006">
              <img className="image" src={shivam}  alt="Shivan Verma"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shivam Verma</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">Co-founder & CTO @ Chat360</span>
          </div>
        </div>

        <div className="item-ltr item-ltr9">
          <div className="image-holder">
            <a href="linkedin.com/in/aditya-ranjan-77305571">
              <img className="image" src={aditya}  alt="Aditya Ranjan"/>
            </a>
          </div>
          <div className="Text ">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Aditya Ranjan</a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
            Lead - Customer Experience @ IDfy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniChannelSection;