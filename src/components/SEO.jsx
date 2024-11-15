import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

// Import fonts via npm package instead of CDN
import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';

const SEO = ({ title, description, image, url }) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="keywords" content="Khamgaon, online directory, local business, community events, Maharashtra" />
      <meta name="author" content="Khamgaon.online" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SEO; 