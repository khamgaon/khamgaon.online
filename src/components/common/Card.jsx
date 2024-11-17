import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon, title, description, gradientClass, isFeature }) => {
  return (
    <article className={`image-container shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
      <div className="p-6">
        <div className={`text-white text-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${gradientClass}`}>
          {icon}
        </div>
        <h4 className="font-semibold text-lg mb-3">{title}</h4>
        {isFeature && <p className="text-gray-600">{description}</p>}
      </div>
    </article>
  );
};

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  gradientClass: PropTypes.string.isRequired,
  isFeature: PropTypes.bool
};

export default Card;
