import React from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61567406970212",
      icon: Facebook,
      label: "Facebook"
    },
    {
      href: "https://x.com/khamgaononline",
      icon: Twitter,
      label: "Twitter"
    },
    {
      href: "https://www.instagram.com/khamgaon.online",
      icon: Instagram,
      label: "Instagram"
    }
  ];

  return (
    <footer className="block-bg-white text-center w-full relative py-8">
      <div className="max-w-3xl mx-auto px-4">
        <p className="mb-2">Follow us on social media:</p>
        <div className="flex justify-center mt-4 space-x-4 content">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
              aria-label={`Follow us on ${social.label}`}
            >
              <social.icon size={32} />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <a
            className="text-gray-400 hover:text-gray-600"
            href="terms.html"
            target="_blank"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <span className="text-gray-400 mx-2">|</span>
          <a
            className="text-gray-400 hover:text-gray-600"
            href="privacy.html"
            target="_blank"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 