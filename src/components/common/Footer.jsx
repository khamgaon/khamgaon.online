// src/components/common/Footer.jsx
import React from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgBottomRight } from 'assets/svgs/svg-bottom-right.svg';

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61567406970212",
      icon: Facebook,
      label: "Facebook"
    },
    {
      href: "https://twitter.com/khamgaononline",
      icon: Twitter,
      label: "Twitter"
    },
    {
      href: "https://www.instagram.com/khamgaon.online",
      icon: Instagram,
      label: "Instagram"
    }
  ];

  const navigationLinks = [
    { to: "/terms", label: "Terms of Service" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <footer
      className="w-full bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50 py-12 px-4 text-center relative overflow-hidden"
      role="contentinfo"
    >
      {/* Decorative SVG */}
      <SvgBottomRight
        className="absolute bottom-0 right-0 w-64 h-64 text-purple-200/30"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label={`Follow us on ${social.label}`}
            >
              <social.icon size={24} aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer Navigation" className="flex justify-center flex-wrap space-x-4 mb-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors mx-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Company Information */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm">
          Khamgaon, located in Maharashtra, is renowned for its rich agricultural heritage and vibrant community. Known as the 'Cotton City,' Khamgaon plays a pivotal role in the cotton industry of India. The town boasts a blend of traditional charm and modern amenities, offering residents and visitors alike a welcoming environment with numerous local businesses, cultural events, and essential services.
          <br/><br/>

          Khamgaon Online connects the Khamgaon community with local businesses, events, and essential services. Stay informed and engaged with our platform.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Khamgaon Online. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;