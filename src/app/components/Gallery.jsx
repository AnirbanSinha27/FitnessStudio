"use client";

import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/gallery1.png' },
  { src: '/gallery2.png' },
  { src: '/gallery3.png' },
  { src: '/gallery4.png' },
  { src: '/gallery5.png' },
  { src: '/gallery6.png' }
];

const Gallery = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Studio Gallery</h2>
          <div className="h-1 w-20 md:w-24 bg-[#FF6B6B] mx-auto rounded-full"></div>
        </div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 md:mb-16">
          Take a look inside our state-of-the-art facility
        </p>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-0 h-[900px]">
          {/* Column 1 - Tall Image */}
          <motion.div 
            className="relative col-span-1 h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 z-10" />
            <img 
              src={galleryImages[0].src} 
              alt="Studio interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Column 2 - Two Stacked Images */}
          <div className="col-span-1 flex flex-col h-full">
            {[galleryImages[1], galleryImages[2]].map((img, i) => (
              <motion.div 
                key={i}
                className="relative h-1/2"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 z-10" />
                <img 
                  src={img.src} 
                  alt={`Gallery ${i + 2}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Column 3 - Tall Image */}
          <motion.div 
            className="relative col-span-1 h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 z-10" />
            <img 
              src={galleryImages[3].src} 
              alt="Group class" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Column 4 - Two Stacked Images */}
          <div className="col-span-1 flex flex-col h-full">
            {[galleryImages[4], galleryImages[5]].map((img, i) => (
              <motion.div 
                key={i}
                className="relative h-1/2"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 z-10" />
                <img 
                  src={img.src} 
                  alt={`Gallery ${i + 5}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              className="relative h-64"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 z-10" />
              <img 
                src={img.src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;