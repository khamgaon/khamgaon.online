// src/components/common/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from 'design-system/foundations/ThemeProvider';
import { Text } from 'design-system/components/Text';

const VARIANTS = {
  default: 'bg-white',
  outlined: 'bg-white border border-gray-200',
  elevated: 'bg-white shadow-md hover:shadow-lg',
  gradient: 'bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50'
};

const SIZES = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
};

const ANIMATIONS = {
  none: '',
  hover: 'transition-all duration-300 hover:-translate-y-1',
  scale: 'transition-transform duration-300 hover:scale-105'
};

const Card = ({
  icon,
  title,
  description,
  gradientClass,
  link,
  children,
  variant = 'default',
  size = 'md',
  animation = 'none',
  className = '',
  onClick
}) => {
  const theme = useTheme();

  const baseStyles = `
    rounded-lg 
    text-center
    ${VARIANTS[variant]}
    ${SIZES[size]}
    ${ANIMATIONS[animation]}
    ${className}
  `;

  const iconStyles = `
    text-white 
    text-xl 
    rounded-full 
    w-16 
    h-16 
    flex 
    items-center 
    justify-center 
    mx-auto 
    mb-4 
    transform
    transition-all
    duration-300
    hover:scale-110
    ${gradientClass}
  `;

  const Content = (
    <>
      {icon && (
        <div className={iconStyles}>
          {icon}
        </div>
      )}
      
      {title && (
        <Text 
          variant="h3"
        >
          {title}
        </Text>
      )}

      {description && (
        <Text 
          variant="body"
          className="text-gray-600"
        >
          {description}
        </Text>
      )}

      {children}
    </>
  );

  if (link) {
    return (
      <Link
        to={link}
        className={baseStyles}
        onClick={onClick}
      >
        {Content}
      </Link>
    );
  }

  return (
    <div 
      className={baseStyles}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
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
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  animation: PropTypes.oneOf(Object.keys(ANIMATIONS)),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Card;