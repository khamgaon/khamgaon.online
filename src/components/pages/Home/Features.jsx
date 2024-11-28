// src/components/pages/Home/Features.jsx
import React from 'react';
import Section from 'components/common/Section';
import Card from 'components/common/Card';
import { Text } from 'design-system/components/Text';
import { 
  People, 
  Briefcase, 
  Calendar, 
  Newspaper, 
  Shop, 
  Chat 
} from 'react-bootstrap-icons';

const Features = () => {
  const features = [
    {
      icon: <People />,
      title: 'Community Engagement',
      description: 'Join discussions, share insights, and connect with fellow Khamgaon residents.',
      gradientClass: 'gradient-icon-1',
    },
    {
      icon: <Briefcase />,
      title: 'Local Business Directory',
      description: 'Explore and support local businesses and professionals in Khamgaon.',
      gradientClass: 'gradient-icon-2',
    },
    {
      icon: <Calendar />,
      title: 'Local Events',
      description: 'Stay updated with upcoming events, festivals, and gatherings in Khamgaon.',
      gradientClass: 'gradient-icon-3',
    },
    {
      icon: <Newspaper />,
      title: 'News & Updates',
      description: 'Get the latest news and updates about Khamgaon and surrounding areas.',
      gradientClass: 'gradient-icon-4',
    },
    {
      icon: <Shop />,
      title: 'Marketplace',
      description: 'Buy, sell, or rent items within the Khamgaon community.',
      gradientClass: 'gradient-icon-5',
    },
    {
      icon: <Chat />,
      title: 'Discussion Forums',
      description: 'Participate in community discussions and share your thoughts.',
      gradientClass: 'gradient-icon-6',
    },
  ];

  return (
    <Section className="block-bg-gray" ariaLabel="Key Features">
      <div className="text-center mb-12">
        <Text variant="h2" className="mb-4">
          Khamgaon Online is your one-stop platform for exploring Khamgaon.
        </Text>
        <Text variant="body">
          From local businesses and professionals to community events, we aim to connect residents and foster community engagement.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            variant="elevated"
            size="lg"
            animation="hover"
            gradientClass={feature.gradientClass}
            className="h-full"
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;