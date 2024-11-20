// src/components/common/FAQ.jsx
import React, { useState } from 'react';
import { 
  InfoCircle, 
  Briefcase, 
  CheckCircle, 
  ShieldLock, 
  QuestionCircle, 
  ChevronDown 
} from 'react-bootstrap-icons';

const FAQItem = ({ icon: Icon, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4 flex items-center justify-center">
            <Icon size={24} color="white" />
          </div>
          <h4 className="font-semibold text-lg text-gray-800">{question}</h4>
        </div>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      icon: InfoCircle,
      question: "When will Khamgaon.online launch?",
      answer: "We're working hard to bring you the best experience. Stay tuned for our launch announcement! Follow us on social media or subscribe to our updates to be the first to know."
    },
    {
      icon: Briefcase,
      question: "How can businesses get listed?",
      answer: "Business owners can register their interest through our WhatsApp contact. We'll reach out with more details about the listing process, requirements, and benefits of joining Khamgaon.online."
    },
    {
      icon: CheckCircle,
      question: "Is listing free for businesses?",
      answer: "Yes, basic listing will be free for all businesses in Khamgaon. Premium features and enhanced visibility options will be available for businesses looking to stand out."
    },
    {
      icon: ShieldLock,
      question: "How secure is the platform?",
      answer: "We prioritize the security of our users and businesses. The platform will implement industry-standard security measures, including data encryption and secure payment processing."
    },
    {
      icon: QuestionCircle,
      question: "How can I contact support?",
      answer: "You can reach our support team through WhatsApp or email. We aim to respond to all queries within 24 hours. During the pre-launch phase, WhatsApp is the fastest way to get in touch with us."
    },
    {
      icon: ChevronDown,
      question: "What features will be available at launch?",
      answer: "The initial launch will include business listings, community engagement features, event announcements, and direct messaging capabilities. We'll continuously add new features based on community feedback."
    }
  ];

  return (
    <section className="w-full relative py-12" aria-labelledby="faq-title">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8" id="faq-title">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;