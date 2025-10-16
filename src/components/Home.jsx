
import Navbar from './Header';
import Background from './BackgroundLines';
import ParticlesBg from './ParticlesBg';
import { motion } from 'motion/react'; // correct package for animation
import logo from "../assets/saa_logo_no_background.png"

import AlumniChannelSection from './AlumniChannel';
import AlumniMemoir from './AlumniMemoir';
import FlagshipEvents from './FlagshipEvents';
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-500/10 to-blue-50/10 dark:bg-transparent flex flex-col items-center px-4 sm:px-6 lg:px-8">

        <div className="relative w-full max-w-6xl pb-6 sm:pb-8 mt-20 sm:mt-24 lg:mt-32 rounded-2xl sm:rounded-3xl dark:border-white/10 
                bg-white dark:bg-[#18181b] text-gray-900 dark:text-white 
                 dark:shadow-black/90 
                overflow-hidden z-10 backdrop-blur-md dark:ring-white/10">
          <Background />
          <div className="flex items-center justify-center flex-col overflow-hidden px-4 sm:px-6 lg:px-8">
            <img
              src={logo}
              alt="SAA logo"
              width={400}
              height={400}
              className="dark:invert mt-4 sm:mt-6 lg:mt-7 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            />
            <p className="w-full max-w-4xl text-sm sm:text-[14px] md:text-[16px] text-gray-600 dark:text-[#A7ADBE] text-center mx-auto mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              The SAA community enhances the institute and student growth through organizing events like Senate Introduction, Prometeo X SAA, Convocation & Alumni Induction Dinner, Dashak 3.0 + Alumni Day, graduating batch see-off ceremony, Soon to be Alumnus, and Ask an Alumnus. The society fosters strong connections and facilitates continuous improvement and development.
            </p>
          </div>
        </div>
        
        <div className="w-full max-w-7xl">
          <FlagshipEvents/>
        </div>

        <div className="w-full max-w-7xl">
          <AlumniChannelSection />
        </div>
        
        <div className="w-full max-w-7xl">
          <AlumniMemoir />
        </div>
        
      </div>
    </motion.div>
  );
};

export default Home;