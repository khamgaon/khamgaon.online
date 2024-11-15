import React from 'react';

const FAQItem = ({ icon, question, answer }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start">
        <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
          </svg>
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
      icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      question: "When will Khamgaon.online launch?",
      answer: "We're working hard to bring you the best experience. Stay tuned for our launch announcement! Follow us on social media or subscribe to our updates to be the first to know."
    },
    {
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      question: "How can businesses get listed?",
      answer: "Business owners can register their interest through our WhatsApp contact. We'll reach out with more details about the listing process, requirements, and benefits of joining Khamgaon.online."
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      question: "Is listing free for businesses?",
      answer: "Yes, basic listing will be free for all businesses in Khamgaon. Premium features and enhanced visibility options will be available for businesses looking to stand out."
    },
    {
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      question: "How secure is the platform?",
      answer: "We prioritize the security of our users and businesses. The platform will implement industry-standard security measures, including data encryption and secure payment processing."
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      question: "How can I contact support?",
      answer: "You can reach our support team through WhatsApp or email. We aim to respond to all queries within 24 hours. During the pre-launch phase, WhatsApp is the fastest way to get in touch with us."
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
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
