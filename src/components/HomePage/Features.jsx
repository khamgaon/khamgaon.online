import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: 'people',
      title: 'Community Engagement',
      description: 'Join discussions, share insights, and connect with fellow Khamgaon residents.',
      gradientClass: 'gradient-icon-1'
    },
    {
      icon: 'business',
      title: 'Local Business Directory',
      description: 'Explore and support local businesses and professionals in Khamgaon.',
      gradientClass: 'gradient-icon-2'
    },
    {
      icon: 'event',
      title: 'Local Events',
      description: 'Stay updated with upcoming events, festivals, and gatherings in Khamgaon.',
      gradientClass: 'gradient-icon-3'
    },
    {
      icon: 'newspaper',
      title: 'News & Updates',
      description: 'Get the latest news and updates about Khamgaon and surrounding areas.',
      gradientClass: 'gradient-icon-4'
    },
    {
      icon: 'store',
      title: 'Marketplace',
      description: 'Buy, sell, or rent items within the Khamgaon community.',
      gradientClass: 'gradient-icon-5'
    },
    {
      icon: 'forum',
      title: 'Discussion Forums',
      description: 'Participate in community discussions and share your thoughts.',
      gradientClass: 'gradient-icon-6'
    }
  ];

  return (
    <section className="block-bg-gray w-full relative py-12" role="region" aria-label="Key Features">
      <div className="max-w-7xl mx-auto px-4">
        <div className="my-8">
          <h3 className="text-center text-gray-700 text-2xl mb-2">
            Khamgaon Online is your one-stop platform for exploring Khamgaon.
          </h3>
          <p className="text-center text-gray-700 font-light text-lg">
            From local businesses and professionals to community events, we aim to connect residents and foster community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradientClass={feature.gradientClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 