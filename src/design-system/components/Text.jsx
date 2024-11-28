import React from 'react';
import PropTypes from 'prop-types';

const variants = {
  h1: 'text-4xl font-light mb-4',
  h2: 'text-2xl font-medium mb-3',
  h3: 'text-lg font-medium mb-2',
  body: 'text-base leading-relaxed',
  caption: 'text-sm text-gray-600'
};

export const Text = ({ 
  variant = 'body',
  children,
  className = '',
  ...props 
}) => {
  const Component = variant.startsWith('h') ? variant : 'p';
  
  return (
    <Component 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};