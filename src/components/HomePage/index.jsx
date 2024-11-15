import React from 'react';
import Head from './Head';
import Banner from './Banner';
import Header from './Header';
import Features from './Features';
import Categories from './Categories';
import FAQ from './FAQ';
import WhatsApp from './WhatsApp';
import BusinessCTA from './BusinessCTA';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Head />
      <body className="text-gray-800">
        <Banner />
        <Header />
        <Features />
        <Categories />
        <FAQ />
        <WhatsApp />
        <BusinessCTA />
        <Footer />
      </body>
    </div>
  );
};

export default HomePage; 