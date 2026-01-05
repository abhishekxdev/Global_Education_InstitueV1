import { Linkedin, Twitter, Facebook, GraduationCap, Users, Globe } from 'lucide-react';

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

        {/* Vision and Mission Section */}
        <div className="mb-20">
          
          <div className="flex flex-col md:flex-row relative">
            {/* Center Divider - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

            {/* Vision */}
            <div className="md:w-1/2 md:pr-12 pb-12 md:pb-0">
              <div className="flex justify-end mb-8">
                 <h3 className="text-3xl font-serif border-b-2 border-gray-300 pb-2 inline-block">Vision</h3>
              </div>
              <ul className="space-y-6 text-gray-600 text-right mb-8">
                <li className="flex items-center justify-end gap-4">
                  <span>Foster an inclusive and dynamic learning environment.</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
                </li>
                <li className="flex items-center justify-end gap-4">
                  <span>Inspire intellectual curiosity, innovation, and ethical leadership</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
                </li>
                <li className="flex items-center justify-end gap-4">
                  <span>Empower individuals for excellence and societal impact.</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
                </li>
                <li className="flex items-center justify-end gap-4">
                  <span>Develop global citizens with a positive influence.</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
                </li>
              </ul>

            </div>

            {/* Mission */}
            <div className="md:w-1/2 md:pl-12 pt-12 md:pt-0 border-t md:border-t-0 border-gray-300">
              <div className="flex justify-start mb-8">
                 <h3 className="text-3xl font-serif border-b-2 border-gray-300 pb-2 inline-block">Mission</h3>
              </div>
              <ul className="space-y-6 text-gray-600 text-left mb-8">
                <li className="flex items-center justify-start gap-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
                  <span>Deliver transformative education through innovative curriculum.</span>
                </li>
                <li className="flex items-center justify-start gap-4">
                   <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
                   <span>Cultivate holistic development, values, and resilience.</span>
                </li>
                <li className="flex items-center justify-start gap-4">
                   <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
                   <span>Drive research, innovation, and academic excellence.</span>
                </li>
                <li className="flex items-center justify-start gap-4">
                   <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
                   <span>Foster a culture of lifelong learning and societal impact.</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
