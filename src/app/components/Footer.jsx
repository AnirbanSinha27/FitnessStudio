'use client'
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Fitness Studio Logo" className="h-10 rounded-full" />
              <span className="ml-2 text-xl font-bold">Fitness Studio</span>
            </div>
            <p className="text-gray-300 mb-4">
              Making fitness fun and accessible for all in Fort Wayne, Indiana.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/fw.fitness.studio" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-gray-300 hover:text-[#FF6B6B] transition-colors" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-gray-300 hover:text-[#FF6B6B] transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">About Us</a></li>
              <li><a href="#classes" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Classes</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>10226 Coldwater Road</li>
              <li>Fort Wayne, IN 46748</li>
              <li>(260) 637-2474</li>
              <li>chpinc@prodigy.net</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Mon-Sat:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>By Appointment</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Fitness Studio by CHP Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;