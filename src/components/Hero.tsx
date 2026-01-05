import { useState, useEffect } from 'react';

const images = [
  '/Global2.png',
  '/Global1.png',
  '/main2.png',
  '/global3.jpeg',
  '/global5.jpeg',
  '/global4.jpeg'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden mt-6 md:mt-8 bg-white">
      <div className="absolute inset-0 bg-white">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="College Building"
            className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 z-10"></div>
      </div>

      <div className="relative h-full flex items-center justify-center z-20">
        <div className="text-center text-white px-6">
        </div>
      </div>
    </section>
  );
}
