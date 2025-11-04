import React from 'react';
import BounceCards from './BounceCards';

// ============================================
// IMPORT YOUR IMAGES HERE - ONE BY ONE
// ============================================
// Dashak Event Images
import dashak_1 from '../assets/dashak_1.JPG';
import dashak_2 from '../assets/dashak_2.JPG';
import dashak_3 from '../assets/dashak_3.JPG';
import dashak_4 from '../assets/dashak_4.JPG';
import dashak_5 from '../assets/dashak_5.JPG';
import dashak_6 from '../assets/dashak_6.JPG';

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
// EVENT DECK COMPONENT
// ============================================
function EventDeck({ images }) {
  // Take first 5 images for bounce cards display
  const displayImages = images.slice(0, 5).map(imgKey => IMAGE_MAP[imgKey]);
  
  // Responsive transform styles
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <div className="relative mx-auto w-full px-2 sm:px-4 py-8">
      <BounceCards
        className="custom-bounceCards"
        images={displayImages}
        containerWidth={600}
        containerHeight={300}
        animationDelay={0.3}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={transformStyles}
        enableHover={true}
      />
    </div>
  );
}

// ============================================
// MAIN GALLERY COMPONENT
// ============================================
export default function Gallery() {
  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Background can be added here */}
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {galleryData.map((event) => (
          <section key={event.id} className="space-y-6">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white hover-underline-animation">
              {event.title}
            </h2>

            <EventDeck images={event.images} />
          </section>
        ))}
      </div>
    </div>
  );
}