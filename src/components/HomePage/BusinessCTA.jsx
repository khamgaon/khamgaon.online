import React from 'react';

const BusinessCTA = () => {
  return (
    <section className="block-bg-gray text-center w-full relative py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-normal mb-4">
          Own a Business in Khamgaon?
        </h3>
        <p className="text-lg mb-4 font-light">
          Get ready to showcase your business to the entire Khamgaon community. Register your interest now!
        </p>
        <a
          href="https://wa.me/message/XAHXJJJMHUKLD1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-white text-blue-600 rounded hover:bg-blue-50 transition-colors shadow-md"
        >
          Register your interest on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default BusinessCTA; 