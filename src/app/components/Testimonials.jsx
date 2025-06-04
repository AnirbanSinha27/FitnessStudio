'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Yoga Enthusiast',
    content: 'The yoga classes at Fitness Studio have transformed my life. Natalie is an incredible instructor who pays attention to every detail. I feel stronger and more centered after each session.',
    image: '/test1.png'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Personal Training Client',
    content: "I've been training with the team for 6 months and have seen amazing results. Their personalized approach and nutritional guidance helped me lose 25lbs and gain muscle!",
    image: '/test2.png'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Zumba Regular',
    content: "The energy in the Zumba classes is electric! I look forward to every session. It doesn't even feel like exercise because we're having so much fun.",
    image: '/test3.png'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold mb-2">What Our Members Say</h2>
          <div className="h-1 w-24 bg-[#FF6B6B] mx-auto rounded-full"></div>
        </div>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Hear from our happy community members
        </p>

        <div className="relative h-96 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="relative bg-[#1A1A1A] text-white rounded-2xl p-8 w-full h-full flex flex-col items-center justify-center">
                <Quote className="text-[#FF6B6B]  opacity-60 absolute top-1 left-2" size={50} />

                <div className="relative z-10 text-center">
                  <p className="text-lg md:text-xl text-gray-200 mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-4 border-[#FF6B6B]">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-[#FF6B6B]' : 'bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
