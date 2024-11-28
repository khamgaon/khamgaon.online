import React from 'react';
import Features from './Features';
import Categories from 'components/common/Categories';
import FAQ from 'components/common/FAQ';

import WhatsApp from './WhatsApp';
import BusinessCTA from './BusinessCTA';
import Hero from './Hero';
import Section from 'components/common/Section';

const HomePage = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <Hero />
      
      <Features />
      <Categories showTitle limit={11}/>
      <Section className="block-bg-gray" ariaLabel="FAQ">
        <FAQ />
      </Section>
      <WhatsApp />
      <BusinessCTA />
    </div>
  );
};

export default HomePage;