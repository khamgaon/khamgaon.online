import React from 'react';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, description, gradientClass }) => {
  return (
    <article className="image-container shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="p-6">
        <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${gradientClass}`}>
          <span className="material-icons text-white text-2xl">
            {icon}
          </span>
        </div>
        <h4 className="font-semibold text-lg mb-3">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </article>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gradientClass: PropTypes.string.isRequired
};

export default FeatureCard; 