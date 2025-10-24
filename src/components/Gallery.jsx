import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// ============================================
// IMPORT YOUR IMAGES HERE - ONE BY ONE
// ============================================
// Dashak Event Images
import dashak_1 from '../assets/dashak_1.jpg';
import dashak_2 from '../assets/dashak_2.jpg';
import dashak_3 from '../assets/dashak_3.jpg';
import dashak_4 from '../assets/dashak_4.jpg';
import dashak_5 from '../assets/dashak_5.jpg';
import dashak_6 from '../assets/dashak_6.jpg';

// Convocation Event Images
import convocation_1 from '../assets/convocation_1.jpg';
import convocation_2 from '../assets/convocation_2.jpg';
import convocation_3 from '../assets/convocation_3.jpg';
import convocation_4 from '../assets/convocation_4.jpg';
import convocation_5 from '../assets/convocation_5.jpg';
import convocation_6 from '../assets/convocation_6.jpg';
import convocation_7 from '../assets/convocation_7.jpg';
import convocation_8 from '../assets/convocation_8.jpg';
import convocation_9 from '../assets/convocation_9.jpg';
// Farewell Event Images
import farewell_1 from '../assets/farewell_1.jpeg';
import farewell_2 from '../assets/farewell_2.jpeg';
import farewell_3 from '../assets/farewell_3.jpeg';
import farewell_4 from '../assets/farewell_4.jpeg';
import farewell_5 from '../assets/farewell_5.jpeg';
import farewell_6 from '../assets/farewell_6.jpeg';

import alt_1 from '../assets/alt_1.jpg';
import alt_2 from '../assets/alt_2.jpg';
import alt_3 from '../assets/alt_3.jpg';
import alt_4 from '../assets/alt_4.jpg';
import alt_5 from '../assets/alt_5.jpg';
import alt_6 from '../assets/alt_6.jpg';
import alt_7 from '../assets/alt_7.jpg';
import alt_8 from '../assets/alt_8.jpg';
import alt_9 from '../assets/alt_9.jpg';
import alt_10 from '../assets/alt_10.jpg';
import alt_11 from '../assets/alt_11.jpg';
import alt_12 from '../assets/alt_12.jpg';
import alt_13 from '../assets/alt_13.jpg';
import alt_14 from '../assets/alt_14.jpg';
import alt_15 from '../assets/alt_15.jpg';
import alt_16 from '../assets/alt_16.jpg';
import alt_17 from '../assets/alt_17.jpg';
import alt_18 from '../assets/alt_18.jpg';
import alt_19 from '../assets/alt_19.jpg';
import alt_20 from '../assets/alt_20.jpg';
import alt_21 from '../assets/alt_21.jpg';
import alt_22 from '../assets/alt_22.jpg';
import alt_23 from '../assets/alt_23.jpg';
import alt_24 from '../assets/alt_24.jpg';
import alt_25 from '../assets/alt_25.jpg';
import alt_26 from '../assets/alt_26.jpg';
import alt_27 from '../assets/alt_27.jpg';
import alt_28 from '../assets/alt_28.jpg';

// ============================================
// IMAGE MAPPING OBJECT
// ============================================
// Add each imported image here with its key name
const IMAGE_MAP = {
  // Dashak images
  dashak_1: dashak_1,
  dashak_2: dashak_2,
  dashak_3: dashak_3,
  dashak_4: dashak_4,
  dashak_5: dashak_5,
  dashak_6: dashak_6,
  
  // Convocation images
  convocation_1: convocation_1,
  convocation_2: convocation_2,
  convocation_3: convocation_3,
  convocation_4: convocation_4,
  convocation_5: convocation_5,
  convocation_6: convocation_6,
  convocation_7: convocation_7,
  convocation_8: convocation_8,
  convocation_9: convocation_9,
  
  // Farewell images
  farewell_1: farewell_1,
  farewell_2: farewell_2,
  farewell_3: farewell_3,
  farewell_4: farewell_4,
  farewell_5: farewell_5,
  farewell_6: farewell_6,

  //Insti
  alt_1: alt_1,
  alt_2: alt_2,
  alt_3: alt_3,
  alt_4: alt_4,
  alt_5: alt_5,
  alt_6: alt_6,
  alt_7: alt_7,
  alt_8: alt_8,
  alt_9: alt_9,
  alt_10: alt_10,
  alt_11: alt_11,
  alt_12: alt_12,
  alt_13: alt_13,
  alt_14: alt_14,
  alt_15: alt_15,
  alt_16: alt_16,
  alt_17: alt_17,
  alt_18: alt_18,
  alt_19: alt_19,
  alt_20: alt_20,
  alt_21: alt_21,
  alt_22: alt_22,
  alt_23: alt_23,
  alt_24: alt_24,
  alt_25: alt_25,
  alt_26: alt_26,
  alt_27: alt_27,
  alt_28: alt_28,

};

// ============================================
// GALLERY DATA CONFIGURATION
// ============================================
// Reference images by their key names from IMAGE_MAP
const galleryData = [
  {
    id: 'dashak',
    title: 'Dashak',
    images: ['dashak_1', 'dashak_2', 'dashak_3', 'dashak_4', 'dashak_5', 'dashak_6'],
  },
  {
    id: 'convocation',
    title: 'Convocation Ceremony',
    images: ['convocation_1', 'convocation_2', 'convocation_3','convocation_4', 'convocation_5', 'convocation_6','convocation_7', 'convocation_8', 'convocation_9'],
  },
  {
    id: 'farewell',
    title: 'Farewell',
    images: ['farewell_1', 'farewell_2', 'farewell_3','farewell_4', 'farewell_5', 'farewell_6'],
  },
  {
    id: 'Insti',
    title: 'Insti',
    images: ['alt_1','alt_2','alt_3','alt_4','alt_5','alt_6','alt_7','alt_8','alt_9','alt_10','alt_11','alt_12','alt_13','alt_14','alt_15','alt_16','alt_17','alt_18','alt_19','alt_20','alt_21','alt_22','alt_23','alt_24','alt_25','alt_26','alt_27','alt_28'],
  },
];

// ============================================
// CARD COMPONENT
// ============================================
function Card({ title, src }) {
  // Debug: Log if image source is missing
  if (!src) {
    console.error(`Missing image source for card: ${title}`);
  }

  return (
    <div
      className="relative rounded-lg md:rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ 
        width: '100%',
        maxWidth: 600, 
        margin: '0 auto',
        willChange: 'transform',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      {/* Folded corner */}
      <div
        className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#4f46e5] rotate-45 transition-all duration-300 pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
      />
      
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 pt-3 sm:pt-4 relative z-10 pointer-events-none">
        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-sm overflow-hidden border border-gray-200 dark:border-gray-600 bg-white shrink-0">
          <img 
            src={src} 
            alt={`${title} thumb`} 
            className="w-full h-full object-cover bg-white"
            loading="lazy"
            draggable="false"
            onError={(e) => {
              console.error(`Failed to load thumbnail image: ${src}`);
              e.target.style.backgroundColor = '#f3f4f6';
            }}
          />
        </div>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-[#4f46e5] px-2 sm:px-3 py-1 rounded-md truncate">
          {title}
        </h3>
      </div>

      {/* Main Image */}
      <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 pointer-events-none">
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 bg-white">
          <img
            src={src}
            alt={title}
            className="w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover bg-white"
            loading="lazy"
            draggable="false"
            onError={(e) => {
              console.error(`Failed to load main image: ${src}`);
              e.target.style.backgroundColor = '#f3f4f6';
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ============================================
// EVENT DECK COMPONENT
// ============================================
function EventDeck({ title, images }) {
  // Debug: Log event deck info
  console.log(`EventDeck: ${title}, Images count: ${images.length}`);
  
  // Duplicate slides to ensure proper infinite looping
  const minimumSlides = 9;
  const duplicatedImages = [];
  
  while (duplicatedImages.length < minimumSlides) {
    images.forEach((imgKey) => {
      duplicatedImages.push(imgKey);
    });
  }

  return (
    <div className="relative mx-auto w-full px-2 sm:px-4">
      <style dangerouslySetInnerHTML={{
        __html: `
          .gallery-swiper {
            padding-bottom: 20px;
            overflow: visible !important;
          }
          .gallery-swiper .swiper-wrapper {
            align-items: center;
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
          .gallery-swiper .swiper-button-next,
          .gallery-swiper .swiper-button-prev {
            background: rgba(79, 70, 229, 0.9);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: white !important;
            transition: all 0.3s ease;
          }
          .gallery-swiper .swiper-button-next:hover,
          .gallery-swiper .swiper-button-prev:hover {
            background: rgba(79, 70, 229, 1);
            transform: scale(1.1);
          }
          .gallery-swiper .swiper-button-next::after,
          .gallery-swiper .swiper-button-prev::after {
            font-size: 18px;
            font-weight: bold;
          }
          @media (max-width: 640px) {
            .gallery-swiper .swiper-button-next,
            .gallery-swiper .swiper-button-prev {
              width: 32px;
              height: 32px;
            }
            .gallery-swiper .swiper-button-next::after,
            .gallery-swiper .swiper-button-prev::after {
              font-size: 14px;
            }
          }
        `
      }} />

      <div className="mx-auto gallery-swiper" style={{ maxWidth: 700 }}>
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          centeredSlides={true}
          slidesPerView="auto"
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
          loopedSlides={minimumSlides}
          loopAdditionalSlides={3}
          slideToClickedSlide={true}
          watchSlidesProgress={true}
          watchOverflow={false}
          grabCursor={true}
          touchRatio={1.5}
          touchAngle={45}
          threshold={10}
          longSwipesRatio={0.3}
          longSwipesMs={150}
          shortSwipes={true}
          resistanceRatio={0.5}
          allowTouchMove={true}
          simulateTouch={true}
          touchStartPreventDefault={false}
          touchMoveStopPropagation={false}
          preventInteractionOnTransition={false}
          runCallbacksOnInit={true}
          observer={true}
          observeParents={true}
          observeSlideChildren={true}
          updateOnWindowResize={true}
          resizeObserver={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          speed={600}
          className="w-full"
        >
          {duplicatedImages.map((imageKey, idx) => {
            const src = IMAGE_MAP[imageKey];
            
            // Debug: Log if image is missing from IMAGE_MAP
            if (!src) {
              console.error(`Image key "${imageKey}" not found in IMAGE_MAP`);
            }
            
            return (
              <SwiperSlide key={`${title}-slide-${idx}-${imageKey}`}>
                <Card title={title} src={src} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

// ============================================
// MAIN GALLERY COMPONENT
// ============================================
export default function Gallery() {
  // Debug: Log gallery data on mount
  React.useEffect(() => {
    console.log('Gallery Data:', galleryData);
    console.log('Image Map Keys:', Object.keys(IMAGE_MAP));
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Background can be added here */}
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {galleryData.map((event) => (
          <section key={event.id} className="space-y-6">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              {event.title}
            </h2>

            <EventDeck title={event.title} images={event.images} />
          </section>
        ))}
      </div>
    </div>
  );
}