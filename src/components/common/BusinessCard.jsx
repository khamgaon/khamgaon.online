// src/components/common/BusinessCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Phone, GeoAlt, Globe } from 'react-bootstrap-icons';

/**
 * BusinessCard Component
 *
 * Displays information about a single business.
 *
 * @param {object} props - The props object.
 * @param {object} props.business - The business data.
 * @param {string} props.business.name - The name of the business.
 * @param {string} props.business.description - A brief description of the business.
 * @param {string} [props.business.image] - URL to the business image.
 * @param {string} [props.business.phone] - Business contact phone number.
 * @param {string} [props.business.address] - Business address.
 * @param {string} [props.business.website] - Business website URL.
 * @returns {JSX.Element} The rendered component.
 */
const BusinessCard = ({ business }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    {business.image && (
      <div className="h-48 overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">{business.name}</h2>
      <p className="text-gray-600 mb-6 line-clamp-2 font-light">{business.description}</p>

      <div className="space-y-3">
        {business.phone && (
          <div className="flex items-center text-gray-600">
            <Phone className="mr-3 flex-shrink-0" />
            <span className="font-light">{business.phone}</span>
          </div>
        )}
        {business.address && (
          <div className="flex items-center text-gray-600">
            <GeoAlt className="mr-3 flex-shrink-0" />
            <span className="font-light">{business.address}</span>
          </div>
        )}
        {business.website && (
          <div className="flex items-center">
            <Globe className="mr-3 flex-shrink-0" />
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-light"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

BusinessCard.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export default BusinessCard;