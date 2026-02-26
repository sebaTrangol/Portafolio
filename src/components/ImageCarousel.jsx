import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const handleDotClick = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-primary-950 rounded-lg overflow-hidden group p-4">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain drop-shadow-2xl transition-opacity duration-300"
      />

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary-500 w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
