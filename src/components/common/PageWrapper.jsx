// src/components/common/PageWrapper.jsx
import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({ children, className, topSvg: TopSvg, bottomSvg: BottomSvg }) => (
  <main className={`min-h-screen py-12 px-4 relative overflow-hidden ${className}`}>
    {/* Conditional SVG Decorations */}
    {TopSvg && (
      <TopSvg
        className="absolute top-0 right-0 w-64 h-64 opacity-30"
        aria-hidden="true"
      />
    )}
    {BottomSvg && (
      <BottomSvg
        className="absolute bottom-0 left-0 w-64 h-64 opacity-30"
        aria-hidden="true"
      />
    )}
    <div className="max-w-7xl mx-auto relative z-10">
      {children}
    </div>
  </main>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  topSvg: PropTypes.elementType,
  bottomSvg: PropTypes.elementType,
};

PageWrapper.defaultProps = {
  className: '',
  topSvg: null,
  bottomSvg: null,
};

export default PageWrapper;