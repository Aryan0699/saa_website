'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g9 from "../assets/g9.png";
import g10 from "../assets/g10.jpg";
import VisitIITj from "../assets/Visitiitj.jpg";
import ParticlesBg from './ParticlesBg';
import mahi from '../../asset/mahi_team.jpg'
import raghuveer from '../../asset/raghuveer_team.jpg'

// Inline CSS for FlipCard, Bloom Effect, and SAATeam
const styles = `
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 16rem;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner,
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
}

.flip-card-back {
  background-color: #1e3a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  transform: rotateY(180deg);
}

/* Bloom effect animation */
@keyframes bloom {
  0% {
    transform: scale(0.8);
    opacity: 0;
    filter: brightness(0.8) blur(4px);
  }
  60% {
    transform: scale(1.05);
    opacity: 1;
    filter: brightness(1.2) blur(0);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    filter: brightness(1);
  }
}

.bloom-effect {
  animation: bloom 1.2s ease-out forwards;
}

/* Custom CSS for SAATeam removed as it's now handled by Tailwind */
`;

// Sample team data
const teamData = [
  {
        name: 'Raghuveer Kulkarni',
        role:'Vice President',
        img: raghuveer,
        instagram: 'https://www.instagram.com/raghuveerkulkarni007/',
        linkedin: 'https://www.linkedin.com/in/raghuveer-kulkarni-185450281/',
        github: 'https://github.com/rahulmehta'
      },
  {
        name: 'Mahi Chouhan',
        role: 'Overall Coordinator',
        img: mahi,
        instagram: 'https://www.instagram.com/mahi_06chouhan/',
        linkedin: 'https://www.linkedin.com/in/mahi-chouhan-50579728a/',
        github: 'https://github.com/rahulmehta'
      },
];

// Social Media Icons Components
const InstagramIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 " fill="#25D366" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.470 3.516z"/>
  </svg>
);

const SAATeam = () => {
  return (
    <section className="mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 lg:mt-12 lg:mb-12 rounded-2xl sm:rounded-3xl dark:ring-white/10">
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-screen-xl text-center relative overflow-hidden">
          
          <h1 className="text-4xl font-extrabold text-black dark:text-white">
            Normal Visit
          </h1>
    
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-600 dark:text-[#A7ADBE] sm:px-8 md:px-16 lg:px-32 xl:px-48 leading-relaxed max-w-6xl mx-auto">
            Contact Us.
          </p>
        </div>

{/* Team Cards Grid - Centered */}
<div className="relative z-10 flex justify-center w-full">
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl">
    {teamData.map((member, idx) => (
      <div
        key={idx}
        className="group relative bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-full sm:w-80 md:w-72 lg:w-80 min-h-[400px]"
      >
        {/* Decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 animate-pulse"></div>
            
            <img
              className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 shadow-xl group-hover:ring-blue-200 dark:group-hover:ring-blue-600 transition-all duration-300"
              src={member.img}
              alt={member.name}
            />
          </div>

          {/* Name and Role */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
              {member.role}
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon relative p-2 sm:p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <InstagramIcon />
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
            </a>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon relative p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <LinkedInIcon />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
            </a>

            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon relative p-2 sm:p-3 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white rounded-full hover:from-gray-800 hover:to-black dark:hover:from-gray-700 dark:hover:to-gray-900 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <GitHubIcon />
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
            </a>
          </div>
        </div>

        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300"></div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

// FlipCard and VisitIITJ components remain unchanged as they were not the source of the issues.

function FlipCard({ imageSrc, name }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
        <div className="flip-card-back">{name}</div>
      </div>
    </div>
  );
}

export default function VisitIITJ() {
  const cards = [
    { imageSrc: g1, name: 'Clock Tower' },
    { imageSrc: g2, name: 'Campus Life' },
    { imageSrc: g3, name: 'Cafeteria' },
    { imageSrc: g4, name: 'Sports Facilities' },
    { imageSrc: g5, name: 'Fountain' },
    { imageSrc: g6, name: 'Knowledge Tree' },
    { imageSrc: g7, name: 'Sports Facilities' },
    { imageSrc: g8, name: 'PRITHVI DRDO' },
    { imageSrc: g10, name: 'Green Spaces' },
  ];

  return (
    <>
      <Helmet>
        <title>Visit IIT Jodhpur</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <style>{styles}</style>

      {/* Hero Section */}
      <section className="text-black dark:text-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 justify-items-center">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 mt-24 flex justify-center md:block lg:mt-0 text-5xl tracking-tight font-semibold text-black dark:text-white">
              Visit IIT Jodhpur
            </h2>
            <p className="mb-6 font-light text-xl text-center md:text-start md:text-2xl text-gray-950 dark:text-gray-200">
              We invite you to tour IIT Jodhpur’s impressive and picturesque campus, where you can see the foundation of our impactful endeavors.
            </p>
          </div>
          <div className="box" style={{ animation: 'circle 1.5s', clipPath: 'circle(75%)' }}>
            <img
              src={VisitIITj}
              alt="dashboard image"
              className="rounded-2xl shadow-lg bloom-effect mt-16"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Flip Card Carousel */}
      <section className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-black dark:text-white">Our Campus Highlights</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Tap or hover to flip and explore</p>
        </div>
        <div className="w-full max-w-7xl mx-auto overflow-hidden px-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            loopAdditionalSlides={2}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            grabCursor={true}
            touchRatio={1}
            threshold={5}
            speed={600}
            breakpoints={{
              480: { 
                slidesPerView: 1.3,
                spaceBetween: 20
              },
              640: { 
                slidesPerView: 1.5,
                spaceBetween: 24
              },
              768: { 
                slidesPerView: 2.2,
                spaceBetween: 28
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 32
              }
            }}
            className="!overflow-visible"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="h-auto">
                <FlipCard imageSrc={card.imageSrc} name={card.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Team Section */}
      <SAATeam />
    </>
  );
}