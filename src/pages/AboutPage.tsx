import { Linkedin, Twitter, Facebook, GraduationCap, Users, Globe, Quote, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-20">
          <div className="md:w-1/3 flex justify-center md:justify-end">
             <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight text-center md:text-right border-r-0 md:border-r-2 border-gray-200 pr-0 md:pr-12 pb-4 md:pb-0">
               About<br/>Institute
             </h1>
          </div>
          <div className="md:w-2/3 pl-0 md:pl-4">
             <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
               The mission of Global Education Institute, Sanchore, is to provide
               high-quality education that fosters academic excellence, intellectual
               growth, and ethical values among students. The institute is
               committed to creating a dynamic learning environment that
               encourages critical thinking, creativity, and innovation.
             </p>
             <p className="text-gray-600 text-lg leading-relaxed text-justify">
               By offering well-structured programs in various disciplines, it aims to equip
               students with the knowledge, skills, and confidence needed to excel
               in their careers and contribute meaningfully to society. With a strong
               emphasis on holistic development, the institute nurtures leadership,
               social responsibility, and lifelong learning, ensuring that students are
               prepared to meet the challenges of an evolving world.
             </p>
          </div>
        </div>

        {/* Stats and Image Section */}
        <div className="flex flex-col gap-8 mb-20">
          {/* Top Image */}
          <div className="w-full relative min-h-[400px]">
            <img 
              src="/Global1.png" 
              alt="Students" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Bottom Stats */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-6">
            <div className="bg-orange-500 p-8 rounded-lg text-white flex items-center justify-between shadow-lg transform hover:scale-105 transition-transform flex-1">
              <div>
                <h3 className="text-4xl font-bold mb-2">400+</h3>
                <p className="text-white/90">undergraduate and graduate students</p>
              </div>
              <GraduationCap className="w-12 h-12 opacity-90" />
            </div>

            <div className="bg-orange-500 p-8 rounded-lg text-white flex items-center justify-between shadow-lg transform hover:scale-105 transition-transform flex-1">
              <div>
                <h3 className="text-4xl font-bold mb-2">25+</h3>
                <p className="text-white/90">Global Education Institute Faculty and Staff</p>
              </div>
              <Users className="w-12 h-12 opacity-90" />
            </div>

            <div className="bg-orange-500 p-8 rounded-lg text-white flex items-center justify-between shadow-lg transform hover:scale-105 transition-transform flex-1">
              <div>
                <h3 className="text-4xl font-bold mb-2">5000+</h3>
                <p className="text-white/90">Global Alumni Worldwide</p>
              </div>
              <Globe className="w-12 h-12 opacity-90" />
            </div>
          </div>
        </div>

        {/* Vision, Founders, and Mission Section (Moved from QuoteBanner) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 shadow-2xl rounded-lg overflow-hidden">
            {/* Vision Section */}
            <div className="bg-orange-600 text-white p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center border-b border-white/30 pb-4 mb-6 tracking-wider">VISION</h3>
                <Quote className="w-12 h-12 text-white/20 mb-4" />
                <p className="text-lg leading-relaxed font-medium">
                  "To create world class quality professionals and educators capable of providing leadership in all spheres of life and society"
                </p>
                <div className="flex justify-end">
                  <Quote className="w-8 h-8 text-white/20 mt-4" />
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            </div>

            {/* Center Image Section */}
            <div className="bg-gray-100 p-6 flex flex-col md:flex-row lg:flex-col items-center justify-center gap-6">
              {/* Dr. Surendra Vishnoi */}
              <div className="flex flex-col items-center group">
                <div className="w-40 h-40 rounded-full border-4 border-orange-600 shadow-xl overflow-hidden mb-3 transition-transform group-hover:scale-105 duration-300">
                  <img 
                    src="/surendraimg.jpg" 
                    alt="Dr. Surendra Vishnoi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-900">Dr. Surendra Vishnoi</h4>
                  <p className="text-sm text-orange-600 font-medium">Founder & Director</p>
                </div>
              </div>

              {/* Mr. Anil K Vishnoi */}
              <div className="flex flex-col items-center group">
                <div className="w-40 h-40 rounded-full border-4 border-orange-600 shadow-xl overflow-hidden mb-3 transition-transform group-hover:scale-105 duration-300">
                  <img 
                    src="/anilkbishnoi.jpg" 
                    alt="Mr. Anil K Vishnoi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-900">Mr. Anil K Vishnoi</h4>
                  <p className="text-sm text-orange-600 font-medium">Co Founder & Chairman</p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gray-700 text-white p-8">
               <h3 className="text-2xl font-bold text-center border-b border-gray-500 pb-4 mb-6 tracking-wider">MISSION</h3>
               <ul className="space-y-6">
                 <li className="flex items-start gap-3 group">
                   <div className="mt-1 p-1 bg-white/10 rounded-full group-hover:bg-orange-500 transition-colors flex-shrink-0">
                     <ChevronRight className="w-4 h-4" />
                   </div>
                   <p className="text-gray-100 text-sm leading-relaxed">To provide quality education in Arts, Science, and Teacher Training disciplines.</p>
                 </li>
                 <li className="flex items-start gap-3 group">
                   <div className="mt-1 p-1 bg-white/10 rounded-full group-hover:bg-orange-500 transition-colors flex-shrink-0">
                     <ChevronRight className="w-4 h-4" />
                   </div>
                   <p className="text-gray-100 text-sm leading-relaxed">To organize and arrange innovative courses in Higher Education and Professional Development.</p>
                 </li>
                 <li className="flex items-start gap-3 group">
                   <div className="mt-1 p-1 bg-white/10 rounded-full group-hover:bg-orange-500 transition-colors flex-shrink-0">
                     <ChevronRight className="w-4 h-4" />
                   </div>
                   <p className="text-gray-100 text-sm leading-relaxed">To arrange vocational courses in the upcoming fields and innovative subjects to meet global advancement.</p>
                 </li>
                 <li className="flex items-start gap-3 group">
                   <div className="mt-1 p-1 bg-white/10 rounded-full group-hover:bg-orange-500 transition-colors flex-shrink-0">
                     <ChevronRight className="w-4 h-4" />
                   </div>
                   <p className="text-gray-100 text-sm leading-relaxed">To promote research in the fields of Humanities, Sciences, and Education.</p>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
