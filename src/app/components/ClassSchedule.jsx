'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ClassCard from './ClassCard';

const ClassSchedule = () => {
  const classes = [
    { title: 'Yoga', description: 'Monday (Online) at 11:30 AM; Thursday at 10:00 AM', image: '/yoga.png' },
    { title: 'Pilates', description: 'Tuesday at 11:30 AM', image: '/pilates.png' },
    { title: 'Toning', description: 'Wednesday at 6:20 PM', image: '/toning.png' },
    { title: 'Body Sculpt', description: 'Tue & Thu at 5:30 PM; Sat at 9:15 AM', image: '/bodysculpt.png' },
    { title: 'Pound', description: 'Weekend special class', image: '/pound.png' },
    { title: 'Tai Chi', description: 'Beginners Fri at 10:30 AM; Advanced Tue at 10:00 AM', image: '/taichi.png' },
    { title: 'Body Design', description: 'Monday at 6:20 PM', image: '/bodydesign.png' },
    { title: 'Zumba', description: 'Monday & Wednesday at 5:30 PM', image: '/zumba.png' },
    { title: 'Aqua Fitness', description: 'Mon & Thu at 6:15 PM; Wed at 11:30 AM', image: '/aqua.png' },
    { title: 'Fencing', description: 'Thursday nights (separate fee)', image: '/fencing.png' },
    { title: 'Cardio Tennis', description: 'Tuesday at 5:45 PM (outdoors)', image: '/tennis.png' },
    { title: 'Cycle Fit', description: 'Beginner classes - call for times', image: '/cycle.png' },
    { title: 'Outdoor Fit', description: 'Summer sessions starting in May', image: '/outdoor.png' },
    { title: 'Senior Fitness', description: 'Thursday at 10:30 AM', image: '/senior.png' },
    { title: 'Personal Training', description: 'Customized one-on-one sessions', image: '/personal.png' },
    { title: 'CPR & First Aid', description: 'Weekly certification classes', image: '/cpr.png' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // Start with mobile default

  useEffect(() => {
    // This code runs only on client-side after hydration
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);   // mobile
      else if (window.innerWidth < 1024) setVisibleCount(2);  // sm
      else setVisibleCount(4);                                // lg+
    };

    // Set initial value
    updateVisibleCount();

    // Add event listener for window resize
    window.addEventListener('resize', updateVisibleCount);

    // Cleanup
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    if (startIndex + visibleCount < classes.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleClasses = classes.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="classes" className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold mb-2">Our Class Offerings</h2>
            <div className="h-1 w-24 bg-[#FF6B6B] mx-auto rounded-full"></div>
          </div>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            Diverse classes tailored to all fitness levels and interests
          </p>
        </AnimatedSection>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-[#FF6B6B] hover:bg-red-500 text-white p-2 rounded-full shadow-lg disabled:opacity-30 sm:left-4"
            disabled={startIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-4 sm:mx-12">
            {visibleClasses.map((cls, index) => (
              <ClassCard
                key={index}
                title={cls.title}
                description={cls.description}
                image={cls.image}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-[#FF6B6B] hover:bg-red-500 text-white p-2 rounded-full shadow-lg disabled:opacity-30 sm:right-4"
            disabled={startIndex + visibleCount >= classes.length}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;