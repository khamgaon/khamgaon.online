// src/components/common/IconButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ 
  icon: Icon,
  onClick,
  className = '',
  label,
  size = 20,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`
        inline-flex items-center justify-center
        p-1.5 transition-all duration-300
        hover:scale-110 active:scale-95
        focus:outline-none
        ${className}
      `}
      style={{ height: size + 16 }} // Match Button height
    >
      <Icon size={size} />
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default IconButton;