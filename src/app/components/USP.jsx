'use client'
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const USP = () => {
  const features = [
    {
      title: 'Inclusive Environment',
      description: 'Welcoming individuals aged 10 and above, catering to both co-ed and youth-friendly classes.',
      icon: '👪'
    },
    {
      title: 'State-of-the-Art Facility',
      description: 'Featuring a 3,000-square-foot studio with bamboo suspension flooring for reduced impact.',
      icon: '🏢'
    },
    {
      title: 'Experienced Instructors',
      description: 'A team of 12 instructors with diverse backgrounds and certifications.',
      icon: '👩‍🏫'
    },
    {
      title: 'Community Engagement',
      description: 'Active participation in local events and strong online presence.',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-[#2E3A59] mb-2">Why Choose Us</h2>
            <div className="h-1 w-24 bg-[#FF6B6B] mx-auto rounded-full"></div>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            What makes Fitness Studio by CHP Inc. stand out
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div 
                className="bg-[#F7F9FC] border-2 rounded-2xl p-8 shadow-lg h-full flex flex-col"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#2E3A59] mb-3">{feature.title}</h3>
                <p className="text-gray-700 flex-grow">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
