// src/components/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl px-4 py-12 text-center">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <p className="text-lg mb-6">
          We'd love to hear from you! Reach out to us through any of the methods below.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:info@khamgaon.online" className="text-blue-600">info@khamgaon.online</a>
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> <a href="tel:+917038778801" className="text-blue-600">+91-7038778801</a>
          </p>
          <p className="text-gray-700">
            <strong>WhatsApp:</strong> <a href="https://wa.me/message/XAHXJJJMHUKLD1" target="_blank" rel="noopener noreferrer" className="text-blue-600">Chat with us</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;