'use client';
import { useEffect, useState } from 'react';

const images = [
  '/S1 (2).png',
  '/S2 (1).png'
];

export default function AutoImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[96%] h-[500px]  overflow-hidden rounded-lg shadow-xl">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Slide ${i + 1}`}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${i === index ? 'opacity-100 ' : 'opacity-0 z-0'}
          `}
        />
      ))}
    </div>
  );
}
