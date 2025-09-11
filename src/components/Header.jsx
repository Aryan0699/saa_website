import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import ThemeBtn from "./ThemeBtn";
import logo from "../assets/saa_logo_no_background.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-1 z-50 bg-white/80 dark:bg-slate-500/10 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
      <div className="text-gray-900 dark:text-white text-2xl flex items-center">
        <img
          src={logo}
          alt="SAA logo"
          className="dark:invert w-[100px] h-[100px]"
        />
        <Typewriter
          words={["Society of Alumni Affairs"]}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
          loop={0}
        />
      </div>

      <nav className="absolute left-1/2 transform -translate-x-1/2 xl:flex hidden space-x-3 bg-gradient-to-r from-gray-100/80 to-gray-50/80 dark:bg-[radial-gradient(ellipse_80%_60%_at_top,rgba(255,255,255,0.1),#18181b)] border border-gray-300/50 dark:border-[#2c2c2e] px-2 py-1 rounded-full shadow-md text-sm backdrop-blur-sm">
        <Link
          to="/"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] border border-transparent hover:border-gray-300/50 dark:hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          Home
        </Link>
        <Link
          to="/teams"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] border border-transparent hover:border-gray-300/50 dark:hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          Team
        </Link>
        <Link
          to="/initiatives"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] border border-transparent hover:border-gray-300/50 dark:hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          Initiatives
        </Link>
        <Link
          to="/visitIITJ"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] border border-transparent hover:border-gray-300/50 dark:hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          VisitIITJ
        </Link>
        <Link
          to="/quickAccess"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] border border-transparent hover:border-gray-300/50 dark:hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          QuickAccess
        </Link>
        <Link
          to="/alumniMap"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] border border-transparent hover:border-gray-300/50 dark:hover:border-[#3d3d3d] px-4 py-2 rounded-full"
        >
          Map
        </Link>
      </nav>

      <div className="flex items-center space-x-3">
        <ThemeBtn />
        <button
          type="button"
          aria-label="Menu"
          className="mr-3 p-2 xl:hidden rounded text-gray-700 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 dark:focus:ring-[#3d3d3d] mb-1.5"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}