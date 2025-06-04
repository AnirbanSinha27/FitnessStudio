'use client'
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Fitness Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fitness Studio by CHP Inc.
        </motion.h1>
        <motion.p 
          className="text-md md:text-xl text-white max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Making fitness fun and accessible for all in Fort Wayne, Indiana
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="border-2 font-extrabold border-[#FF6B6B] text-[#FF6B6B] px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#FF6B6B] hover:text-white shadow-md"
          >
            Join Us Today
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 z-10 text-[#FF6B6B] hover:text-white transition duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </button>
    </section>
  );
};

export default Hero;
