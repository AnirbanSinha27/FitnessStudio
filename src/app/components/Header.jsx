'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed w-full bg-white bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Fitness Studio Logo" className="h-12 rounded-full" />
          <span className="ml-2 text-xl font-bold text-[#2E3A59]">Fitness Studio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[#2E3A59] hover:text-[#FF6B6B] transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-[#FF6B6B] hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#2E3A59] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#F7F9FC]"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[#2E3A59] hover:text-[#FF6B6B] transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-[#FF6B6B] hover:bg-red-500 text-white text-center px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
