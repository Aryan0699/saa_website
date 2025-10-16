import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
      className="relative rounded-lg md:rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ 
        width: '100%', 
        height: 'auto',
        maxWidth: 600, 
        margin: '0 auto',
        willChange: 'transform'
      }}
    >
      {/* folded corner */}
      <div
        className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#4f46e5] rotate-45 transition-all duration-300"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
      />
      {/* header */}
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 pt-3 sm:pt-4 relative z-10">
        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-sm overflow-hidden border border-gray-200 dark:border-gray-600 bg-white shrink-0">
          <img 
            src={src} 
            alt={`${title} thumb`} 
            className="w-full h-full object-cover bg-white"
            loading="lazy"
          />
        </div>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-[#4f46e5] px-2 sm:px-3 py-1 rounded-md truncate">
          {title}
        </h3>
      </div>

      {/* image */}
      <div className="px-3 sm:px-4 pt-3 sm:pt-4">
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 bg-white">
          <img
            src={src}
            alt={title}
            className="w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover bg-white"
            loading="lazy"
          />
        </div>
      </div>

      {/* caption */}
      {caption && (
        <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 sm:pt-3">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 line-clamp-2">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}

function EventDeck({ title, images, captions = [] }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative mx-auto w-full px-2 sm:px-4">
      <style dangerouslySetInnerHTML={{
        __html: `
          .gallery-swiper .swiper-pagination {
            bottom: 10px !important;
            text-align: center;
            z-index: 10;
          }
          .gallery-swiper .swiper-pagination-bullet {
            background: #4f46e5 !important;
            opacity: 0.4 !important;
            width: 10px !important;
            height: 10px !important;
            margin: 0 6px !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            transition: all 0.3s ease;
          }
          @media (min-width: 640px) {
            .gallery-swiper .swiper-pagination-bullet {
              width: 12px !important;
              height: 12px !important;
              margin: 0 8px !important;
            }
          }
          .gallery-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
            transform: scale(1.2);
          }
          .gallery-swiper {
            padding-bottom: 60px;
          }
          .gallery-swiper .swiper-slide {
            transition: transform 0.3s ease, opacity 0.3s ease;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery-swiper .swiper-slide-active {
            z-index: 2;
          }
          .gallery-swiper .swiper-slide-prev,
          .gallery-swiper .swiper-slide-next {
            opacity: 0.85;
          }
        `
      }} />

      <div className="mx-auto gallery-swiper" style={{ maxWidth: 700 }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
          onSwiper={setSwiperInstance}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8
            },
            480: { 
              slidesPerView: 1.1,
              spaceBetween: 10
            },
            640: { 
              slidesPerView: 1.15,
              spaceBetween: 12
            },
            768: { 
              slidesPerView: 1.2,
              spaceBetween: 16
            },
            1024: { 
              slidesPerView: 1.3,
              spaceBetween: 20
            },
            1280: { 
              slidesPerView: 1.4,
              spaceBetween: 24
            },
          }}
          spaceBetween={8}
          loop={true}
          loopAdditionalSlides={2}
          loopedSlides={images.length}
          watchSlidesProgress={true}
          grabCursor={true}
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          resistanceRatio={0.85}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
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