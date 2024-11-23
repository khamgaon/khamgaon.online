// src/components/common/SocialLinks.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SocialLinks = ({ links }) => (
  <div className="flex justify-center space-x-6 mb-8">
    {links.map((social) => (
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
);

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialLinks;