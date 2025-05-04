
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularDestinations from '@/components/PopularDestinations';
import Services from '@/components/Services';
import FeaturedTours from '@/components/FeaturedTours';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <Services />
      <FeaturedTours />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
