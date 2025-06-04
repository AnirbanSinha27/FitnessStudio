import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import AboutSection from '../app/components/AboutSection';
import ClassSchedule from '../app/components/ClassSchedule';
import PricingCard from '../app/components/PricingCard';
import USP from '../app/components/USP';
import Testimonials from '../app/components/Testimonials';
import Gallery from '../app/components/Gallery';
import ContactInfo from '../app/components/ContactInfo';
import Footer from '../app/components/Footer';
import ScrollToTop from './components/ScrollTop';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ClassSchedule />
      
      <section id="pricing" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-4">
      <h2 className="text-4xl font-bold text-[#2E3A59] mb-2">Membership Options</h2>
      <div className="h-1 w-24 bg-[#FF6B6B] mx-auto rounded-full"></div>
    </div>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
      Flexible pricing to fit your fitness journey
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <PricingCard 
        title="Online Access" 
        price="25" 
        features={[
          'Zoom classes only',
          'Access to all online sessions',
          'Recorded sessions available'
        ]} 
      />
      <PricingCard 
        title="Unlimited Studio" 
        price="60" 
        features={[
          'Unlimited studio classes',
          'Unlimited Zoom access',
          'Priority booking',
          'Free guest passes'
        ]} 
        popular={true}
      />
      <PricingCard 
        title="Drop-In" 
        price="10" 
        features={[
          'Single class access',
          'No commitment',
          'Subject to availability'
        ]} 
      />
    </div>
  </div>
</section>

      
      <USP />
      <Testimonials />
      <Gallery />
      <ContactInfo />
      <ScrollToTop/>
      <Footer />
    </div>
  );
}