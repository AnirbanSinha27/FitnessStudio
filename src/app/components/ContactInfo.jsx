'use client';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Instagram, Facebook } from 'lucide-react'; // ⬅️ Add this at the top with other imports


const ContactInfo = () => {
  return (
    <section id="contact" className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
          <div className="h-1 w-24 bg-[#FF6B6B] mx-auto mb-6"></div>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Get in touch or visit our studio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-gray-900 shadow-xl p-8">
              <div className="flex items-start mb-8">
                <MapPin className="text-[#FF6B6B] mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-300">
                    10226 Coldwater Road<br />
                    Fort Wayne, Indiana 46748
                  </p>
                  <div className="mt-4">
                    <iframe
                      title="Studio Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.0930713298853!2d-85.13138272413363!3d41.171076809033215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815f5959b9304df%3A0x7ae98b58097a63a6!2s10226%20Coldwater%20Rd%2C%20Fort%20Wayne%2C%20IN%2046825%2C%20USA!5e0!3m2!1sen!2sin!4v1717490182941!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Phone className="text-[#FF6B6B] mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-300">(260) 637-2474</p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Mail className="text-[#FF6B6B] mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-300">chpinc@prodigy.net</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-[#FF6B6B] mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Hours</h3>
                  <p className="text-gray-300">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

              <div className="mt-8">
  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a
      href="https://www.instagram.com/fw.fitness.studio"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-700 p-3 rounded-full shadow-md hover:bg-[#FF6B6B] transition"
    >
      <Instagram className="h-6 w-6 text-white" />
    </a>
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-700 p-3 rounded-full shadow-md hover:bg-[#FF6B6B] transition"
    >
      <Facebook className="h-6 w-6 text-white" />
    </a>
  </div>
</div>

            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-gray-900 shadow-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-4">Membership Options</h3>

              <div className="space-y-6">
                <div className="bg-[#1A1A1A] p-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg">Zoom-Only Classes</h4>
                    <span className="font-bold text-[#FF6B6B]">$25 / 4 weeks</span>
                  </div>
                  <p className="text-gray-300 mt-2">Access all our online classes via Zoom</p>
                </div>

                <div className="bg-[#1A1A1A] p-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg">Studio & Zoom Unlimited</h4>
                    <span className="font-bold text-[#FF6B6B]">$60 / 4 weeks</span>
                  </div>
                  <p className="text-gray-300 mt-2">Unlimited access to both in-studio and online classes</p>
                </div>

                <div className="bg-[#1A1A1A] p-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg">Drop-In Fee</h4>
                    <span className="font-bold text-[#FF6B6B]">$10</span>
                  </div>
                  <p className="text-gray-300 mt-2">Pay per class (subject to space availability)</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">Payment Options</h4>
                <p className="text-gray-300">Payments can be made through our online app or directly at the studio.</p>
                <button className="mt-6 px-6 py-3 bg-[#FF6B6B] text-white font-bold rounded-full hover:bg-red-500 transition">
                  Download Our App
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
