// src/components/common/Footer.jsx
import React from 'react';
import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://www.facebook.com/profile.php?id=61567406970212',
      icon: Facebook,
      label: 'Facebook',
    },
    {
      href: 'https://twitter.com/khamgaononline',
      icon: Twitter,
      label: 'Twitter',
    },
    {
      href: 'https://www.instagram.com/khamgaon.online',
      icon: Instagram,
      label: 'Instagram',
    },
  ];

  const navigationLinks = [
    { to: '/terms', label: 'Terms of Service' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer
      className="w-full bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50 py-12 px-4 text-center"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto">
        {/* Social Media Links */}
        <SocialLinks links={socialLinks} />

        {/* Navigation Links */}
        <NavLinks links={navigationLinks} />

        {/* Company Information */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm">
            Khamgaon, located in Maharashtra, is renowned for its rich agricultural heritage and vibrant community. Known as the &apos;Cotton City,&apos; Khamgaon plays a pivotal role in the cotton industry of India. The town boasts a blend of traditional charm and modern amenities, offering residents and visitors alike a welcoming environment with numerous local businesses, cultural events, and essential services.
            <br />
            <br />
            Khamgaon Online connects the Khamgaon community with local businesses, events, and essential services. Stay informed and engaged with our platform.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Khamgaon Online. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;