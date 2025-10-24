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
import mahi from '../../asset/mahi_team.jpg';
import raghuveer from '../../asset/raghuveer_team.jpg';

// Inline CSS for FlipCard, Bloom Effect
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

/* Responsive icon fixes */
@media (max-width: 640px) {
  .social-icon-container {
    width: 2.5rem !important;
    height: 2.5rem !important;
    padding: 0.5rem !important;
  }
  
  .social-icon {
    width: 1rem !important;
    height: 1rem !important;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .social-icon-container {
    width: 3rem !important;
    height: 3rem !important;
    padding: 0.75rem !important;
  }
  
  .social-icon {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }
}
`;

// Sample team data with mailto
const teamData = [
  {
    name: 'Raghuveer Kulkarni',
    role: 'Vice President',
    img: raghuveer,
    instagram: 'https://www.instagram.com/raghuveerkulkarni007/',
    linkedin: 'https://www.linkedin.com/in/raghuveer-kulkarni-185450281/',
    mailto: 'mailto:b23es1020@iitj.ac.in'
  },
  {
    name: 'Mahi Chouhan',
    role: 'Overall Coordinator',
    img: mahi,
    instagram: 'https://www.instagram.com/mahi_06chouhan/',
    linkedin: 'https://www.linkedin.com/in/mahi-chouhan-50579728a/',
    mailto: 'mailto:b23ee1038@iitj.ac.in'
  },
];

// ========================
// UPDATED Social Media Icons - FIXED RESPONSIVENESS
// ========================

const InstagramIcon = ({ className = "" }) => (
  <svg className={`social-icon w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = ({ className = "" }) => (
  <svg className={`social-icon w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065  0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Email Icon (Replace with your final SVG later)
const EmailIcon = ({ className = "" }) => (
  <svg className={`social-icon w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// ========================
// UPDATED SAATeam Section - FIXED ICON RESPONSIVENESS
// ========================

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

      {/* Team Cards Grid */}
      <div className="relative z-10 flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-full sm:w-80 md:w-72 lg:w-80 min-h-[400px]"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center h-full">
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
                <div className="mb-4 sm:mb-6 flex-grow flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* UPDATED Social Icons - FIXED RESPONSIVENESS */}
                <div className="flex items-center justify-center space-x-3 sm:space-x-4 mt-auto">
                  {/* Instagram */}
                  {member.instagram && member.instagram !== '#' && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-container group/icon relative bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
                      aria-label={`Follow ${member.name} on Instagram`}
                    >
                      <InstagramIcon />
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
                    </a>
                  )}

                  {/* LinkedIn */}
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-container group/icon relative bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <LinkedInIcon />
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
                    </a>
                  )}

                  {/* Email */}
                  {member.mailto && (
                    <a
                      href={member.mailto}
                      className="social-icon-container group/icon relative bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
                      aria-label={`Email ${member.name}`}
                    >
                      <EmailIcon />
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FlipCard Component
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

// Main Component
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
              We invite you to tour IIT Jodhpur's impressive and picturesque campus, where you can see the foundation of our impactful endeavors.
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
              480: { slidesPerView: 1.3, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              768: { slidesPerView: 2.2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3.2, spaceBetween: 32 }
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