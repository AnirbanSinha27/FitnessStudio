'use client'
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#F7F9FC]">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E3A59] relative inline-block pb-3">
              About Our Studio
              <span className="block h-1 w-24 bg-[#FF6B6B] mx-auto mt-3 rounded-full"></span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <AnimatedSection delay={0.2} className="md:w-1/2">
            <div className="rounded-md overflow-hidden shadow-lg">
              <img
                src="/about-studio.png"
                alt="Inside Fitness Studio"
                className="w-full h-96 object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.4} className="md:w-1/2">
            <p className="text-lg text-[#4B5563] mb-4 leading-relaxed">
              Located at <span className="font-semibold">10226 Coldwater Road, Fort Wayne</span>,
              Fitness Studio by CHP Inc. is your destination for a fun, inclusive, and empowering
              workout experience.
            </p>
            <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
              Led by <span className="font-semibold">Natalie Fish</span>, a certified trainer with
              over 20 credentials in health, fitness, and safety—our studio offers a welcoming
              space for group classes, personal training, and community wellness.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: '3,000 sq ft', desc: 'State-of-the-art facility' },
                { label: '12+', desc: 'Certified instructors' },
                { label: '20+', desc: 'Fitness certifications' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[170px]"
                >
                  <h3 className="font-bold text-[#FF6B6B] text-lg">{item.label}</h3>
                  <p className="text-[#4B5563] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
