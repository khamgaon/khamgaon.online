// src/components/common/FAQ.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import Card from './Card';
import { Text } from 'design-system/components/Text';
import {
  InfoCircle,
  Briefcase, 
  CheckCircle,
  ShieldLock,
  QuestionCircle,
  ChevronDown,
} from 'react-bootstrap-icons';

const FAQItem = ({ icon: Icon, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      variant="elevated"
      size="md"
      animation="hover"
      className="transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div className="gradient-icon-2 rounded-full p-3 mr-4 flex items-center justify-center">
            <Icon size={24} className="text-white" />
          </div>
          <Text variant="h3" className="text-gray-800">
            {question}
          </Text>
        </div>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <Text variant="body" className="mt-2 pl-16 text-left">
          {answer}
        </Text>
      )}
    </Card>
  );
};

FAQItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

const FAQ = ({ showTitle = true }) => {
  const faqs = [
    {
      icon: InfoCircle,
      question: 'When will Khamgaon.online launch?',
      answer: "We're working hard to bring you the best experience. Stay tuned for our launch announcement! Follow us on social media or subscribe to our updates to be the first to know.",
      gradientClass: 'gradient-icon-1'
    },
    {
      icon: Briefcase,
      question: 'How can businesses get listed?',
      answer: "Business owners can register their interest through our WhatsApp contact. We'll reach out with more details about the listing process, requirements, and benefits of joining Khamgaon.online.",
      gradientClass: 'gradient-icon-2'
    },
    {
      icon: CheckCircle,
      question: 'Is listing free for businesses?',
      answer: 'Yes, basic listing will be free for all businesses in Khamgaon. Premium features and enhanced visibility options will be available for businesses looking to stand out.',
      gradientClass: 'gradient-icon-3'
    },
    {
      icon: ShieldLock,
      question: 'How secure is the platform?',
      answer: 'We prioritize the security of our users and businesses. The platform will implement industry-standard security measures, including data encryption and secure payment processing.',
      gradientClass: 'gradient-icon-4'
    },
    {
      icon: QuestionCircle,
      question: 'How can I contact support?',
      answer: 'You can reach our support team through WhatsApp or email. We aim to respond to all queries within 24 hours. During the pre-launch phase, WhatsApp is the fastest way to get in touch with us.',
      gradientClass: 'gradient-icon-5'
    },
  ];

  return (
    <Section ariaLabel="Frequently Asked Questions">
      {showTitle && (
        <div className="text-center mb-12">
          <Text variant="h2" className="mb-4">
            Frequently Asked Questions
          </Text>
          <Text variant="body">
            Find answers to common questions about Khamgaon Online
          </Text>
        </div>
      )}
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </Section>
  );
};

export default FAQ;