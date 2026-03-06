'use client';
import { useRef } from 'react';

export default function ScrollCarousel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (ref.current) {
      const amount = ref.current.clientWidth * 0.8;
      ref.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div ref={ref} className="scroll-container">
        {children}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-actual-dark/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Scroll left"
      >
        ‹
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-actual-dark/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
}
