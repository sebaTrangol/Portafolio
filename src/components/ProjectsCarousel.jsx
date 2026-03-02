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
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-6">
          <button
            onClick={prev}
            className="bg-primary-800/80 hover:bg-primary-700 text-primary-500 p-1.5 sm:p-2 md:p-3 rounded-full transition-all shadow-lg border border-primary-500/30"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={18} className="sm:w-6 sm:h-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2 sm:gap-3">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-primary-500 w-8 sm:w-10'
                    : 'bg-primary-700 hover:bg-primary-600 w-2 sm:w-3'
                }`}
                aria-label={`Ir al proyecto ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="bg-primary-800/80 hover:bg-primary-700 text-primary-500 p-1.5 sm:p-2 md:p-3 rounded-full transition-all shadow-lg border border-primary-500/30"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight size={18} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
