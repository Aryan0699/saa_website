import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import about1 from '../assets/about_1.jpg';
import about2 from '../assets/about_2.jpg';
import about3 from '../assets/about_3.jpg';
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipHeading = ({ text }) => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h2 className="relative text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 lg:mb-12 leading-tight text-gray-900 dark:text-white">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden h-[1.2em] w-fit align-middle"
        >
          <motion.span
            initial={false}
            animate={{ y: flip ? '-1.2em' : '0em' }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="block"
          >
            <span className="block">{char === ' ' ? '\u00A0' : char}</span>
            <span className="block">{char === ' ' ? '\u00A0' : char}</span>
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
};

const EventCard = ({
  event,
  index,
  setCardRef,
  style,
  onMouseMove,
  onMouseLeave,
}) => {
  const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: '-10% 0px',
    });

  return (
    <Link to={event.link} className="block group">
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 ${
          !event.imageFirst ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Image Container */}
        <div
          ref={setCardRef(index)}
          style={style}
          onMouseMove={(e) => onMouseMove(e, index)}
          onMouseLeave={() => onMouseLeave(index)}
          className="w-full lg:w-[45%] xl:w-[40%] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 dark:from-purple-600 dark:via-blue-600 dark:to-pink-600 bg-[length:200%_200%] animate-[gradient_5s_ease_infinite] p-0.5 group-hover:scale-105"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden relative w-full h-[200px] sm:h-[220px] lg:h-[200px] xl:h-[220px]">
            <img
              src={event.image}
              alt={event.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-[50%] xl:w-[55%] text-center lg:text-left px-2 sm:px-4 py-2">
          <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {event.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
            {event.description}
          </p>
          
          {/* Call to action indicator */}
          <div className="mt-4 flex items-center justify-center lg:justify-start">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
              Learn more →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function FlagshipEvents() {
  const cardRefs = useRef([]);
  const [styles, setStyles] = useState([{}, {}, {}]);

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / 20).toFixed(2);
    const rotateY = ((x - rect.width / 2) / -20).toFixed(2);

    const newStyles = [...styles];
    newStyles[index] = {
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      transition: 'transform 0.15s ease',
    };
    setStyles(newStyles);
  };

  const handleMouseLeave = (index) => {
    const newStyles = [...styles];
    newStyles[index] = {
      transform: 'perspective(800px) rotateX(0) rotateY(0) scale(1)',
      transition: 'transform 0.4s ease',
    };
    setStyles(newStyles);
  };

  const events = [
    {
      title: 'Dashak',
      description:
        "Annual alumni gathering fostering interactions, celebrating IITJ's journey with community and enthusiasm.",
      image: about1,
      link: '/Dashak',
      imageFirst: true,
    },
    {
      title: 'Convocation',
      description:
        'Celebrating academic milestones and officially welcoming graduates into the alumni family.',
      image: about2,
      link: '/events',
      imageFirst: false,
    },
    {
      title: 'Farewell',
      description:
        'Heartfelt send-off to graduates, cherishing memories and celebrating new beginnings.',
      image: about3,
      link: '/events',
      imageFirst: true,
    },
  ];

  return (
    <section className="mt-10 light:bg-gradient-to-br rounded-lg  from-gray-50/10 to-blue-50/20 dark:bg-[#18181b]/20 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <FlipHeading text="Flagship Events of SAA" />
          
        {/* Events Grid */}
        <div className="flex flex-col gap-8 lg:gap-12 xl:gap-16">
          {events.map((event, index) => (
            <div key={index} className="w-full">
              <EventCard
                event={event}
                index={index}
                setCardRef={setCardRef}
                style={styles[index]}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              
              {/* Separator line (except for last item) */}
              {index < events.length - 1 && (
                <div className="mt-8 lg:mt-12 w-full max-w-xs mx-auto">
                  <div className="h-[3px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-900 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600">
            <div className="w-3 h-3 bg-white dark:bg-gray-100 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}