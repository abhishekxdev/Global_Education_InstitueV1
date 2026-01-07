import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const activityImages = [
    '/activity/day-activity-globalsanchore-01-250x150.jpg',
    '/activity/day-activity-globalsanchore-02-250x150.jpg',
    '/activity/day-activity-globalsanchore-03.jpg',
    '/activity/day-activity-globalsanchore-04-250x150.jpg',
    '/activity/day-activity-globalsanchore-05-250x150.jpg',
    '/activity/day-activity-globalsanchore-06-250x150.jpg',
    '/activity/day-activity-globalsanchore-07-250x150.jpg',
    '/activity/day-activity-globalsanchore-08-250x150.jpg',
    '/activity/day-activity-globalsanchore-09-250x150.jpg',
    '/activity/day-activity-globalsanchore-10-250x150.jpg',
    '/activity/day-activity-globalsanchore-11-250x150.jpg',
    '/activity/day-activity-globalsanchore-12-250x150.jpg',
    '/activity/day-activity-globalsanchore-13-250x150.jpg',
    '/activity/day-activity-globalsanchore-14-250x150.jpg',
    '/activity/day-activity-globalsanchore-15-250x150.jpg',
    '/activity/day-activity-globalsanchore-16-250x150.jpg',
    '/activity/day-activity-globalsanchore-17-250x150.jpg',
    '/activity/day-activity-globalsanchore-18-250x150.jpg',
    '/activity/day-activity-globalsanchore-19-250x150.jpg',
    '/activity/day-activity-globalsanchore-20-250x150.jpg',
    '/activity/day-activity-globalsanchore-21-250x150.jpg',
    '/activity/day-activity-globalsanchore-22-250x150.jpg',
    '/activity/day-activity-globalsanchore-23-250x150.jpg',
    '/activity/day-activity-globalsanchore-24-250x150.jpg',
    '/activity/day-activity-globalsanchore-25-250x150.jpg',
    '/activity/day-activity-globalsanchore-26-250x150.jpg',
    '/activity/day-activity-globalsanchore-27-250x150.jpg',
    '/activity/day-activity-globalsanchore-28-250x150.jpg',
    '/activity/day-activity-globalsanchore-29-250x150.jpg',
    '/activity/day-activity-globalsanchore-30-250x150.jpg',
    '/activity/day-activity-globalsanchore-31-250x150.jpg',
    '/activity/day-activity-globalsanchore-32-250x150.jpg',
    '/activity/day-activity-globalsanchore-33-250x150.jpg',
    '/activity/day-activity-globalsanchore-34-250x150.jpg',
    '/activity/day-activity-globalsanchore-35-250x150.jpg',
    '/activity/day-activity-globalsanchore-36-250x150.jpg',
    '/activity/day-activity-globalsanchore-37-250x150.jpg',
    '/activity/day-activity-globalsanchore-38-250x150.jpg',
    '/activity/day-activity-globalsanchore-39-250x150.jpg',
    '/activity/day-activity-globalsanchore-40-250x150.jpg',
    '/activity/day-activity-globalsanchore-41-250x150.jpg',
    '/activity/day-activity-globalsanchore-42-250x150.jpg',
    '/activity/day-activity-globalsanchore-43-250x150.jpg',
    '/activity/day-activity-globalsanchore-44-250x150.jpg',
    '/activity/day-activity-globalsanchore-45-250x150.jpg',
    '/activity/day-activity-globalsanchore-46-250x150.jpg',
    '/activity/day-activity-globalsanchore-47-250x150.jpg',
    '/activity/newyear1.jpeg',
    '/activity/newyear2.jpeg',
    '/activity/newyear3.jpeg'
  ];

  const sportsImages = [
    '/playground/play-ground1-250x150.jpg',
    '/playground/play-ground2-250x150.jpg',
    '/playground/play-ground3-250x150.jpg',
    '/playground/play-ground5-250x150.jpg',
    '/playground/play-ground6-250x150.jpg',
   
  ];

  const newsImages = [
    '/news/media1-250x150.jpg',
    '/news/media2-250x150.jpg',
    '/news/media3-250x150.jpg',
    '/news/media4-250x150.jpg',
    '/news/media5-250x150.jpg',
    '/news/media6-250x150.jpg',
    '/news/media7-250x150.jpg',
    '/news/media8-250x150.jpg',
    '/news/media9-250x150.jpg',
    '/news/media10-250x150.jpg',
    '/news/news51.jpeg',
    '/news/news52.jpeg',
    '/news/news53.jpeg',
    '/news/news54.jpeg',
    '/news/newsscout.jpeg',
    '/news/newsscout2.jpeg',
    '/news/newsscout4.jpeg',
    '/news/newsscout5.jpeg'
  ];

  const socialImages = [
    '/social/Global-sanchore-social-activity-1.jpg',
    '/social/Global-sanchore-social-activity-2.jpg',
    '/social/Global-sanchore-social-activity-3.jpg',
    '/social/Global-sanchore-social-activity-4.jpg'
  ];

  const foundersImages = [
    '/surendraimg.jpg',
    '/anilkbishnoi.jpg'
  ];

  const scoutImages = [
    '/scout/scout1.jpeg',
    '/scout/scout2.jpeg',
    '/scout/scout3.jpeg',
    '/scout/scout4.jpeg',
    '/scout/scout5.jpeg',
    '/scout/scout6.jpeg',
    '/scout/scout7.jpeg',
    '/scout/scout8.jpeg',
    '/scout/scout9.jpeg',
    '/scout/scout10.jpeg',
    '/scout/scout11.jpeg',
  ];

  const galleryItems = [
    { title: 'Activity', image: activityImages[0], images: activityImages },
    { title: 'Sports', image: sportsImages[0], images: sportsImages },
    { title: 'News', image: newsImages[0], images: newsImages },
    { title: 'Social Activities', image: socialImages[0], images: socialImages },
    { title: 'Founders', image: foundersImages[0], images: foundersImages },
    { title: 'Campus', image: '/collegecamous.png', images: ['/collegecamous.png'] },
    { title: 'Scout', image: scoutImages[0], images: scoutImages },
  ];

  const openGallery = (categoryIndex: number) => {
    setSelectedCategory(galleryItems[categoryIndex].title);
    setCurrentImageIndex(null);
  };

  const closeGallery = () => {
    setSelectedCategory(null);
    setCurrentImageIndex(null);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentCategory = galleryItems.find(item => item.title === selectedCategory);
    if (currentCategory && currentImageIndex !== null) {
      setCurrentImageIndex((prev) => 
        prev === null ? null : (prev + 1) % currentCategory.images.length
      );
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentCategory = galleryItems.find(item => item.title === selectedCategory);
    if (currentCategory && currentImageIndex !== null) {
      setCurrentImageIndex((prev) => 
        prev === null ? null : (prev - 1 + currentCategory.images.length) % currentCategory.images.length
      );
    }
  };

  const getBentoClass = (index: number) => {
    // Pattern for visual interest
    const pattern = index % 10;
    if (pattern === 0) return 'md:col-span-2 md:row-span-2'; // Large square
    if (pattern === 5) return 'md:col-span-2'; // Wide
    if (pattern === 8) return 'md:row-span-2'; // Tall
    return 'col-span-1';
  };

  const currentCategoryData = galleryItems.find(item => item.title === selectedCategory);

  return (
    <main className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {galleryItems.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openGallery(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.images.length} Photos</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {galleryItems.slice(4).map((item, index) => (
            <div
              key={index + 4}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openGallery(index + 4)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.images.length} Photo{item.images.length !== 1 ? 's' : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Grid View Modal */}
      {selectedCategory && currentCategoryData && (
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 overflow-y-auto">
          <div className="min-h-screen px-6 py-12">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm py-4">
                <h2 className="text-3xl font-bold text-white">{selectedCategory}</h2>
                <button 
                  onClick={closeGallery}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-dense">
                {currentCategoryData.images.map((img, index) => (
                  <div 
                    key={index} 
                    className={`relative group overflow-hidden rounded-xl cursor-pointer ${getBentoClass(index)}`}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={img}
                      alt={`${selectedCategory} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Lightbox */}
      {selectedCategory && currentCategoryData && currentImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
          >
            <X size={32} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 z-50 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full flex flex-col items-center">
            <img 
              src={currentCategoryData.images[currentImageIndex]} 
              alt={`${selectedCategory} - ${currentImageIndex + 1}`}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-[-40px] text-white text-lg font-medium">
              {currentImageIndex + 1} / {currentCategoryData.images.length}
            </div>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 z-50 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </main>
  );
}
