// src/components/common/NavLinks.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLinks = ({ links }) => (
  <nav aria-label="Footer Navigation" className="flex justify-center flex-wrap space-x-4 mb-6">
    {links.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors mx-2"
      >
        {link.label}
      </Link>
    ))}
  </nav>
);

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavLinks;