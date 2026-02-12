import { Bell, ZoomIn, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Notice {
  id: number;
  title: string;
  image?: string;
  link?: string;
  date?: string;
}

export default function NoticesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const notices: Notice[] = [
    {
      id: 5,
      title: 'Internal Examination Notice',
      link: 'https://drive.google.com/file/d/1xxM-_Y5uPqOCLSBlFZZVGqRoasnkmK8F/view?usp=drive_link',
      date: 'New'
    },
    {
      id: 1,
      title: 'Important Notice',
      image: '/notice/Notice.jpeg',
    },
    {
      id: 2,
      title: 'General Announcement',
      image: '/notice/notice2.jpeg',
    },
    {
      id: 3,
      title: 'Official Notice 1',
      link: 'https://drive.google.com/file/d/1dTf9qRnyD0TFFAePLlYkP56eqVsAIhhX/view?usp=sharing',
      date: 'New'
    },
    {
      id: 4,
      title: 'Official Notice 2',
      link: 'https://drive.google.com/file/d/1rTWokM3KLaY3Jk5RLAZifxvcQYwuOW42/view?usp=sharing',
      date: 'New'
    },
  ];

  const getPreviewUrl = (url: string) => {
    return url.replace(/\/view.*/, '/preview');
  };

  return (
    <div className="py-16 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-orange-500 p-3 rounded-lg">
            <Bell className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Notices</h1>
            <p className="text-gray-600 mt-1">Stay updated with important announcements</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notices.map((notice) => (
            notice.image ? (
              <div
                key={notice.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImage(notice.image!)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-white">
                  <img
                    src={notice.image}
                    alt={notice.title}
                    className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full flex items-center gap-2">
                      <ZoomIn className="w-5 h-5 text-gray-900" />
                      <span className="font-medium text-gray-900">View Full Size</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    {notice.title}
                  </h3>
                </div>
              </div>
            ) : (
              <div
                key={notice.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group bg-white flex flex-col h-full"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-white">
                  <iframe 
                    src={getPreviewUrl(notice.link!)}
                    title={notice.title}
                    className="w-full h-full border-0"
                    allow="autoplay"
                  />
                  {/* Overlay to prevent interaction with iframe if desired, or let user interact */}
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                   <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                     {notice.title}
                   </h3>
                   <div className="flex items-center justify-center gap-2">
                    {notice.date && (
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                        {notice.date}
                        </span>
                    )}
                   </div>
                   <a 
                    href={notice.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                   >
                    <span>View Document</span>
                    <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Notice Full View"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-700">
            For more information about specific notices, please contact the institute office or check the student portal.
          </p>
        </div>
      </div>
    </div>
  );
}
