// src/components/common/Section.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, className, id, ariaLabel }) => (
  <section
    className={`w-full relative py-12 ${className}`}
    id={id}
    aria-label={ariaLabel}
  >
    <div className="max-w-7xl mx-auto px-4">
      {children}
    </div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
};

Section.defaultProps = {
  className: '',
  id: null,
  ariaLabel: null,
};

export default Section;