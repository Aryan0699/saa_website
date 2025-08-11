
import Navbar from './Header';
import Background from './BackgroundLines';
import ParticlesBg from './ParticlesBg';
import { motion } from 'motion/react'; // correct package for animation
import logo from "../assets/saa_logo_no_background.png"

import AlumniChannelSection from './AlumniChannel';
import AlumniMemoir from './AlumniMemoir';
import FlagshipEvents from './FlagshipEvents';
import Footer from './Footer';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-screen min-h-screen bg-gradient-to-br from-slate-500/10 to-blue-50/10 dark:bg-transparent flex flex-col items-center">

        <div className="relative w-10/12 pb-8 mt-32 lg:mt-28 rounded-3xl  dark:border-white/10 
                bg-white dark:bg-[#18181b] text-gray-900 dark:text-white 
                 dark:shadow-black/90 
                overflow-hidden z-10 backdrop-blur-md dark:ring-white/10">
          <Background />
          <div className="flex items-center justify-center flex-col overflow-hidden">
            <img
              src={logo}
              alt="SAA logo"
              width={400}
              height={400}
              className="dark:invert mt-7"
            />
            <p className="w-3/5 text-[14px] md:text-[16px] text-gray-600 dark:text-[#A7ADBE] text-center mx-auto">
              The SAA community enhances the institute and student growth through organizing events like Senate Introduction, Prometeo X SAA, Convocation & Alumni Induction Dinner, Dashak 3.0 + Alumni Day, graduating batch see-off ceremony, Soon to be Alumnus, and Ask an Alumnus. The society fosters strong connections and facilitates continuous improvement and development.
            </p>
          </div>
        </div>
        <div>
          <FlagshipEvents/>
        </div>

        <div>
          <AlumniChannelSection />
        </div>
        <div>
          <AlumniMemoir />
        </div>
        
      </div>
    </motion.div>
  );
};

export default Home;
