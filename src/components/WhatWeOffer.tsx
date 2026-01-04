import { GraduationCap } from 'lucide-react';

export default function WhatWeOffer() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Image with Shape */}
          <div className="w-full lg:w-1/2 relative">
            {/* Orange Hexagon Background Shape */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-orange-500 fill-current opacity-90">
                 <path d="M45.7,-76.3C58.9,-69.3,69.1,-55.5,77.3,-40.8C85.5,-26.1,91.7,-10.5,89.5,4.1C87.3,18.7,76.7,32.3,65.6,44.4C54.5,56.5,42.9,67.1,29.3,73.6C15.7,80.1,0.1,82.5,-14.8,80.4C-29.7,78.3,-43.9,71.7,-55.8,62.2C-67.7,52.7,-77.3,40.3,-82.1,26.4C-86.9,12.5,-86.9,-2.9,-81.7,-16.9C-76.5,-30.9,-66.1,-43.5,-53.8,-50.9C-41.5,-58.3,-27.3,-60.5,-13.6,-61.8C0.1,-63.1,13.8,-63.5,32.5,-83.3" transform="translate(100 100)" />
               </svg>
            </div>
            
            {/* Student Image */}
            <div className="relative z-10">
              <img 
                src="/student.jpg" 
                alt="Student with books" 
                className="w-full max-w-md mx-auto object-cover relative z-10 rounded-b-full"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 bg-orange-500 text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-lg z-20 animate-spin-slow">
                 <div className="text-xs font-semibold uppercase tracking-widest border-b border-white/50 pb-1 mb-1">Estd.</div>
                 <div className="text-2xl font-bold">2013</div>
                 <div className="text-[10px] mt-1">Excellence in Education</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
               <GraduationCap className="w-6 h-6 text-orange-500" />
               <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">knowledge meets innovation</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              Why Choose <br/>
              <span className="text-blue-900">Global Education Institute?</span>
            </h2>

            <div className="space-y-6">
               <div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">Welcome to Global Education Institute!</h3>
                 <p className="text-gray-600 leading-relaxed">
                   We are excited to share with you the incredible opportunities that our esteemed institute offers to all those aspiring for higher education. Established in 2013 and affiliated with Jai Narain Vyas University, Jodhpur, Global Education Institute provides a wide range of programs in Arts, Science, and Education, tailored to suit your interests.
                 </p>
               </div>

               <p className="text-gray-600 leading-relaxed">
                 Our lush green campus, nestled in the beautiful natural surroundings of Sanchore, Rajasthan, is situated on the National Highway and has easy and hassle-free access. Our dedicated faculty members, who are experts in their fields, are committed to providing excellent education to students. We offer merit scholarships and financial aid options to help you achieve your academic goals.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
