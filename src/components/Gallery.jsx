'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import ParticlesBg from './ParticlesBg';

import about1 from '../assets/about_1.jpg';
import about2 from '../assets/about_2.jpg';
import about3 from '../assets/about_3.jpg';

const IMG = { about1, about2, about3 };

const galleryData = [
  {
    id: 'dashak',
    title: 'Dashak',
    images: ['about1', 'about2', 'about3'],
    captions: ['Opening ceremony', 'Alumni interactions', 'Cultural evening'],
  },
  {
    id: 'convocation',
    title: 'Convocation Ceremony',
    images: ['about1', 'about1', 'about2'],
    captions: ['Graduation walk', 'Ceremony moments', 'Keynote address'],
  },
  {
    id: 'farewell',
    title: 'Farewell',
    images: ['about3', 'about2', 'about1'],
    captions: ['Stage & speeches', 'Memories wall', 'Closing notes'],
  },
];

function Card({ title, src, caption }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-lg w-full mx-auto" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* folded corner */}
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 overflow-hidden">
        <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 rotate-45" />
      </div>
      
      {/* header */}
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 pt-4 sm:pt-5 relative z-10">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-sm overflow-hidden border border-gray-200 bg-white flex-shrink-0">
          <img src={src} alt={`${title} thumb`} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-white bg-indigo-600 px-2 sm:px-3 py-1 rounded-md truncate">
          {title}
        </h3>
      </div>

      {/* image */}
      <div className="px-3 sm:px-5 pt-3 sm:pt-4">
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
          <img
            src={src}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
          />
        </div>
      </div>

      {/* caption */}
      {caption && (
        <div className="px-3 sm:px-5 pb-3 sm:pb-4 pt-2 sm:pt-3">
          <p className="text-sm sm:text-base text-gray-700">{caption}</p>
        </div>
      )}
    </div>
  );
}

function EventDeck({ title, images, captions = [] }) {
  return (
    <div className="relative mx-auto w-full px-2 sm:px-4">
      <style>{`
        .swiper-pagination {
          bottom: 10px !important;
          text-align: center;
        }
        .swiper-pagination-bullet {
          background: #4f46e5 !important;
          opacity: 0.4 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 6px !important;
          border-radius: 50% !important;
          cursor: pointer !important;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            margin: 0 8px !important;
          }
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2);
        }
        .deck-swiper {
          padding-bottom: 50px;
        }
        @media (min-width: 640px) {
          .deck-swiper {
            padding-bottom: 60px;
          }
        }
      `}</style>

      <div className="mx-auto deck-swiper" style={{ maxWidth: 860 }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 8,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={true}
          slidesPerView={1.1}
          breakpoints={{
            480: { slidesPerView: 1.15, coverflowEffect: { depth: 140 } },
            640: { slidesPerView: 1.25, coverflowEffect: { depth: 160 } },
            768: { slidesPerView: 1.35, coverflowEffect: { depth: 180 } },
            1024: { slidesPerView: 1.5 },
            1280: { slidesPerView: 1.6 },
          }}
          spaceBetween={16}
          loop={images.length >= 3}
          loopedSlides={images.length}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          className="w-full"
        >
          {images.map((key, idx) => {
            const src = IMG[key];
            const caption = captions[idx] || '';
            return (
              <SwiperSlide key={`${title}-${idx}`}>
                <Card title={title} src={src} caption={caption} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="relative min-h-screen pt-20 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ParticlesBg />
      </div>

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {galleryData.map((event) => (
          <section key={event.id} className="space-y-4 sm:space-y-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              {event.title}
            </h2>

            <EventDeck title={event.title} images={event.images} captions={event.captions} />
          </section>
        ))}
      </div>
    </div>
  );
}