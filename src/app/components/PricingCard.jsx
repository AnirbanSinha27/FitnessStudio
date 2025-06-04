'use client'
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PricingCard = ({ title, price, features, popular }) => {
  return (
    <motion.div 
      className={`bg-white rounded-2xl shadow-xl p-8 relative ${
        popular ? 'border-4 border-[#FF6B6B]' : 'border-2 border-gray-100'
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF6B6B] text-white px-6 py-1 rounded-full font-bold">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-center text-[#2E3A59] mb-4">{title}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-[#FF6B6B]">${price}</span>
        <span className="text-gray-600"> / 4 weeks</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        className={`w-full py-3 rounded-full font-bold transition-all duration-300 shadow-md ${
          popular
            ? 'bg-[#FF6B6B] text-white hover:bg-red-500'
            : 'bg-[#4ECDC4] text-white hover:bg-teal-600'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};

export default PricingCard;
