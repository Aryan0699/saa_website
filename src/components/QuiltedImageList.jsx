import React from 'react';

export default function QuiltedImageList({ images, className = '' }) {
  // Create a quilted pattern where some images span multiple rows/columns
  const getImageStyle = (index) => {
    // Simplified pattern that works well with 2-3 column grid
    const patterns = [
      { cols: 1, rows: 2 }, // Tall image (1x2)
      { cols: 1, rows: 1 }, // Small image (1x1)
      { cols: 1, rows: 1 }, // Small image (1x1)
      { cols: 1, rows: 2 }, // Tall image (1x2)
      { cols: 1, rows: 1 }, // Small image (1x1)
      { cols: 1, rows: 1 }, // Small image (1x1)
      { cols: 2, rows: 1 }, // Wide image (2x1) - spans full width on 2-col grid
      { cols: 1, rows: 1 }, // Small image (1x1)
    ];

    const pattern = patterns[index % patterns.length];
    return {
      gridColumn: `span ${pattern.cols}`,
      gridRow: `span ${pattern.rows}`,
    };
  };

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-[100px] sm:auto-rows-[120px] md:auto-rows-[150px] lg:auto-rows-[180px] ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
          style={getImageStyle(index)}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}