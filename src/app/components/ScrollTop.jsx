'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 200px
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-[#FF6B6B] text-white rounded-full shadow-lg hover:bg-red-500 transition z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTop;
