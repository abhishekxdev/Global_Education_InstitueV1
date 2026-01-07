import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

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
    <section className="bg-white mt-6 md:mt-8">
      {/* Text Section */}
      <div className="text-center px-6 py-8">
        <h2 className="text-3xl md:text-5xl font-bold text-orange-900 uppercase tracking-wide mb-4">
          Welcome to <span className="text-blue-700">Global Education</span> <span className="text-orange-600">Institute</span>
        </h2>
        <div className="flex justify-center items-center gap-2 flex-wrap mb-4">
           <Quote className="w-6 h-6 text-orange-600 rotate-180 hidden md:block" />
           <p className="text-xl md:text-3xl font-medium text-orange-800">
             Mission to Empower Society through Education
           </p>
           <Quote className="w-6 h-6 text-orange-600 hidden md:block" />
        </div>
        <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
      </div>

      {/* Image Section */}
      <div className="relative h-[750px] overflow-hidden">
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
      </div>
    </section>
  );
}
