// src/components/common/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ icon, title, description, gradientClass, link, children }) => {
  const Content = (
    <div className="p-6">
      {icon && (
        <div
          className={`text-white text-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${gradientClass}`}
        >
          {icon}
        </div>
      )}
      {title && <h3 className="font-bold text-lg mb-1">{title}</h3>}
      {description && <p className="text-gray-600">{description}</p>}
      {children}
    </div>
  );

  return link ? (
    <Link
      to={link}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
    >
      {Content}
    </Link>
  ) : (
    <div className="bg-white rounded-lg shadow-md text-center">
      {Content}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  gradientClass: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  icon: null,
  title: '',
  description: '',
  gradientClass: '',
  link: '',
  children: null,
};

export default Card;