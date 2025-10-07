'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';



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
    <div
      className="relative rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg"
      style={{ width: '100%', height: 420, maxWidth: 720, margin: '0 auto' }}
    >
      {/* folded corner */}
      <div
        className="absolute -top-5 -right-5 w-20 h-20 bg-[#4f46e5] rotate-45"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
      />
      {/* header */}
      <div className="flex items-center gap-3 px-5 pt-5">
        <div className="h-12 w-12 rounded-sm overflow-hidden border border-gray-200 bg-white">
          <img src={src} alt={`${title} thumb`} className="w-full h-full object-cover bg-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white bg-[#4f46e5] px-3 py-1 rounded-md">
          {title}
        </h3>
      </div>

      {/* image */}
      <div className="px-5 pt-4">
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
          <img
            src={src}
            alt={title}
            className="w-full h-[230px] sm:h-[260px] md:h-[280px] object-cover bg-white"
          />
        </div>
      </div>

      {/* caption */}
      {caption && (
        <div className="px-5 pb-4 pt-3">
          <p className="text-gray-700">{caption}</p>
        </div>
      )}
    </div>
  );
}

function EventDeck({ title, images, captions = [] }) {
  return (
    <div className="relative mx-auto w-full px-2 sm:px-4">
      <style jsx>{`
        .swiper-pagination {
          bottom: 10px !important;
          text-align: center;
        }
        .swiper-pagination-bullet {
          background: #4f46e5 !important;
          opacity: 0.4 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 8px !important;
          border-radius: 50% !important;
          cursor: pointer !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2);
        }
        .deck-swiper {
          padding-bottom: 60px;
        }
      `}</style>

      <div className="mx-auto deck-swiper" style={{ maxWidth: 860 }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 12,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={true}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.25 },
            768: { slidesPerView: 1.35 },
            1024: { slidesPerView: 1.5 },
            1280: { slidesPerView: 1.6 },
          }}
          spaceBetween={24}
          loop={true}
          // ADD THIS LINE: It helps Swiper calculate the loop correctly with few slides.
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
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-0 -z-10 pointer-events-none">
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {galleryData.map((event) => (
          <section key={event.id} className="space-y-6">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              {event.title}
            </h2>

            <EventDeck title={event.title} images={event.images} captions={event.captions} />
          </section>
        ))}
      </div>
    </div>
  );
}