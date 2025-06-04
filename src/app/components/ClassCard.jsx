'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ClassCard = ({ title, description, image }) => {
  return (
    <motion.div
      className="bg-white rounded-md shadow-lg overflow-hidden w-full"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#2E3A59] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ClassCard;
