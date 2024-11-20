import React from 'react';
import Features from './Features';
import Categories from 'components/common/Categories';
import FAQ from 'components/common/FAQ';

import WhatsApp from './WhatsApp';
import BusinessCTA from './BusinessCTA';
import logo from 'assets/images/logos/logo-short.png';

const HomePage = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <header className="w-full py-12 px-4 text-center relative bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <img
              src={logo}
              alt="Khamgaon Online"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300"
              fetchpriority="high"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-thin tracking-tight text-gray-800">
            Khamgaon Online
          </h1>
          
          <h2 className="text-lg sm:text-xl font-light text-gray-600 max-w-2xl mx-auto" id="header-title">
            Connecting Khamgaon like never before!
          </h2>
        </div>
      </header>      <Features />
      <Categories showTitle limit={11}/>
      <FAQ />
      <WhatsApp />
      <BusinessCTA />
    </div>
  );
};

export default HomePage;