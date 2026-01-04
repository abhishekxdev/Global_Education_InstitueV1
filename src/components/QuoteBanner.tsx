import { Quote, ChevronRight } from 'lucide-react';

export default function QuoteBanner() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-wide mb-2">
            Welcome to Global Education Institute
          </h2>
          <div className="flex justify-center items-center gap-2 flex-wrap">
             <Quote className="w-6 h-6 text-blue-600 rotate-180 hidden md:block" />
             <p className="text-xl md:text-2xl font-medium text-blue-800">
               Mission to Innovate Technology for Society
             </p>
             <Quote className="w-6 h-6 text-blue-600 hidden md:block" />
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 shadow-2xl rounded-lg overflow-hidden">
          {/* Vision Section */}
          <div className="bg-blue-600 text-white p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-center border-b border-white/30 pb-4 mb-6 tracking-wider">VISION</h3>
              <Quote className="w-12 h-12 text-white/20 mb-4" />
              <p className="text-lg leading-relaxed font-medium">
                "To create world class quality Engineers and Technocrats capable of providing leadership in all spheres of life and society"
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
              <div className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-xl overflow-hidden mb-3 transition-transform group-hover:scale-105 duration-300">
                <img 
                  src="/surendraimg.jpg" 
                  alt="Dr. Surendra Vishnoi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900">Dr. Surendra Vishnoi</h4>
                <p className="text-sm text-blue-600 font-medium">Founder & Director</p>
              </div>
            </div>

            {/* Mr. Anil K Vishnoi */}
            <div className="flex flex-col items-center group">
              <div className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-xl overflow-hidden mb-3 transition-transform group-hover:scale-105 duration-300">
                <img 
                  src="/anilkbishnoi.jpg" 
                  alt="Mr. Anil K Vishnoi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900">Mr. Anil K Vishnoi</h4>
                <p className="text-sm text-blue-600 font-medium">Co Founder & Chairman</p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gray-700 text-white p-8">
             <h3 className="text-2xl font-bold text-center border-b border-gray-500 pb-4 mb-6 tracking-wider">MISSION</h3>
             <ul className="space-y-6">
               <li className="flex items-start gap-3 group">
                 <div className="mt-1 p-1 bg-white/10 rounded-full group-hover:bg-blue-500 transition-colors flex-shrink-0">
                   <ChevronRight className="w-4 h-4" />
                 </div>
                 <p className="text-gray-100 text-sm leading-relaxed">To provide quality education in technical and allied disciplines.</p>
               </li>
               <li className="flex items-start gap-3 group">
                 <div className="mt-1 p-1 bg-white/10 rounded-full group-hover:bg-blue-500 transition-colors flex-shrink-0">
                   <ChevronRight className="w-4 h-4" />
                 </div>
                 <p className="text-gray-100 text-sm leading-relaxed">To organize and arrange innovative courses in Engineering and Technology.</p>
               </li>
               <li className="flex items-start gap-3 group">
                 <div className="mt-1 p-1 bg-white/10 rounded-full group-hover:bg-blue-500 transition-colors flex-shrink-0">
                   <ChevronRight className="w-4 h-4" />
                 </div>
                 <p className="text-gray-100 text-sm leading-relaxed">To arrange vocational courses in the upcoming fields and innovative subjects to meet global advancement.</p>
               </li>
               <li className="flex items-start gap-3 group">
                 <div className="mt-1 p-1 bg-white/10 rounded-full group-hover:bg-blue-500 transition-colors flex-shrink-0">
                   <ChevronRight className="w-4 h-4" />
                 </div>
                 <p className="text-gray-100 text-sm leading-relaxed">To promote research in the fields of Technology and Science.</p>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
