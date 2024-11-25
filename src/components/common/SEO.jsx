// src/components/common/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * SEO Component
 *
 * This component sets up the SEO metadata for a page using react-helmet-async.
 *
 * @param {object} props - The props for the component.
 * @param {string} props.title - The title of the page.
 * @param {string} props.description - The meta description of the page.
 * @param {string} props.image - The URL to the image used for social sharing.
 * @param {string} props.url - The canonical URL of the page.
 * @returns {JSX.Element} The SEO component.
 */
const SEO = ({ title, description, image, url }) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  image: '/images/logos/logo.png', // Replace with your default image path
};

export default SEO;