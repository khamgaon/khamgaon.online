import React from 'react';
import { 
  InfoCircle, 
  Briefcase, 
  CheckCircle, 
  ShieldLock, 
  QuestionCircle, 
  ChevronDown 
} from 'react-bootstrap-icons';

const FAQItem = ({ icon: Icon, question, answer }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start">
        <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4 flex items-center justify-center">
          <Icon size={32} color="white" />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">{question}</h4>
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
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
    <section className="block-bg-gray w-full relative py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-normal text-center mb-12">
          Frequently Asked Questions
        </h3>
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
