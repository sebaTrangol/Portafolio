import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsCarousel({ children }) {
  const [current, setCurrent] = useState(0);
  const total = children.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative">
      {/* Carousel Content */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children.map((child, i) => (
            <div key={i} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows + Dots — below the card */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 mt-5 sm:mt-6 md:mt-7 p-2">
          <button
            onClick={prev}
            className="bg-primary-800 hover:bg-primary-700 text-primary-500 p-3 sm:p-3 md:p-3 rounded-full transition-all shadow-lg border-2 border-primary-500/50"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={24} className="sm:w-6 sm:h-6 md:w-6 md:h-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2 sm:gap-3 md:gap-3">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-primary-500 h-3 sm:h-3 md:h-3 w-10 sm:w-10 md:w-10'
                    : 'bg-primary-700 hover:bg-primary-600 h-3 sm:h-3 md:h-3 w-3 sm:w-3 md:w-3'
                }`}
                aria-label={`Ir al proyecto ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="bg-primary-800 hover:bg-primary-700 text-primary-500 p-3 sm:p-3 md:p-3 rounded-full transition-all shadow-lg border-2 border-primary-500/50"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight size={24} className="sm:w-6 sm:h-6 md:w-6 md:h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
