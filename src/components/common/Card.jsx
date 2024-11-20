import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ icon, title, description, gradientClass, isFeature, link }) => {
  const CardContent = (
    <div className="p-6">
      <div className={`text-white text-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${gradientClass}`}>
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
      {isFeature && <p className="text-gray-600">{description}</p>}
    </div>
  );

  return link ? (
    <Link to={link} className="block-bg-white shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {CardContent}
    </Link>
  ) : (
    <div className="block-bg-white shadow text-center">
      {CardContent}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  gradientClass: PropTypes.string.isRequired,
  isFeature: PropTypes.bool,
  link: PropTypes.string
};

export default Card;
