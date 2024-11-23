// src/components/common/PageWrapper.jsx
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const variants = [
  {
    gradient: 'from-violet-200 via-purple-50/90 to-white',
    svg1: { color: 'text-blue-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-purple-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-pink-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-blue-200 via-purple-50/90 to-pink-100',
    svg1: { color: 'text-indigo-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-violet-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-purple-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-pink-200 via-violet-50/90 to-blue-100',
    svg1: { color: 'text-rose-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-blue-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-violet-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-violet-200 via-pink-50/90 to-blue-100',
    svg1: { color: 'text-purple-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-indigo-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-pink-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-indigo-200 via-purple-50/90 to-pink-100',
    svg1: { color: 'text-violet-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-rose-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-purple-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-fuchsia-200 via-purple-50/90 to-blue-100',
    svg1: { color: 'text-pink-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-indigo-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-violet-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-pink-200 via-fuchsia-50/90 to-violet-100',
    svg1: { color: 'text-purple-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-blue-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-rose-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-violet-200 via-blue-50/90 to-pink-100',
    svg1: { color: 'text-indigo-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-rose-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-purple-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-blue-200 via-violet-50/90 to-indigo-100',
    svg1: { color: 'text-purple-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-pink-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-blue-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  },
  {
    gradient: 'from-purple-200 via-pink-50/90 to-blue-100',
    svg1: { color: 'text-violet-200/60', position: '-top-24 -right-24 w-96 h-96' },
    svg2: { color: 'text-indigo-200/70', position: '-bottom-16 -left-16 w-64 h-64' },
    svg3: { color: 'text-rose-200/50', position: 'top-1/2 left-1/2 w-full h-full' }
  }
];

const PageWrapper = ({ children, className }) => {
  const location = useLocation();
  
  const variant = useMemo(() => {
    const pathHash = location.pathname.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return variants[Math.abs(pathHash) % variants.length];
  }, [location.pathname]);

  return (
    <main
      className={`bg-gradient-to-br ${variant.gradient} w-full min-h-screen py-16 px-4 relative flex justify-center overflow-hidden ${className}`}
      role="main"
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg className={`absolute ${variant.svg1.position} w-96 h-96 ${variant.svg1.color}`} viewBox="0 0 200 200">
          <path fill="currentColor" d="M45,-78.2C58.3,-71.3,69.3,-58.6,77.6,-44.2C85.9,-29.8,91.5,-14.9,90.2,-0.7C88.9,13.4,80.8,26.8,72.3,39.8C63.8,52.8,55,65.3,42.8,73.1C30.6,80.9,15.3,83.9,0.1,83.7C-15,83.5,-30.1,80.2,-43.5,72.8C-56.9,65.4,-68.5,54,-76.3,40.4C-84,26.8,-87.8,13.4,-87.1,0.4C-86.4,-12.7,-81.2,-25.3,-73.3,-36.3C-65.4,-47.2,-54.8,-56.4,-42.6,-63.8C-30.4,-71.2,-15.2,-76.8,0.6,-77.8C16.4,-78.9,32.7,-75.4,45,-78.2Z" transform="translate(100 100)" />
        </svg>

        <svg className={`absolute ${variant.svg2.position} w-64 h-64 ${variant.svg2.color}`} viewBox="0 0 200 200">
          <path fill="currentColor" d="M38.1,-64.3C51.1,-56.7,64.9,-49.5,72.5,-37.8C80.2,-26.1,81.7,-13.1,79.8,-1.1C77.9,10.9,72.6,21.8,66.5,32.5C60.3,43.2,53.3,53.8,43.1,62.5C32.9,71.2,16.4,78.1,0.6,77.2C-15.3,76.3,-30.6,67.6,-43.5,58.1C-56.4,48.6,-66.9,38.2,-74.1,25.1C-81.3,11.9,-85.2,-4,-81.8,-18.1C-78.5,-32.2,-67.9,-44.5,-55.5,-52.2C-43,-59.9,-28.7,-63,-15.3,-64.8C-1.9,-66.6,11.6,-67.1,24.7,-69.1C37.8,-71.1,50.6,-74.7,38.1,-64.3Z" transform="translate(100 100)" />
        </svg>

        <svg className={`absolute -translate-x-1/2 -translate-y-1/2 w-full h-full ${variant.svg3.color}`} viewBox="0 0 200 200">
          <path fill="currentColor" d="M39.3,-66.7C50.9,-61.3,60.2,-49.8,67.2,-37.1C74.1,-24.4,78.7,-10.4,77.9,3.4C77,17.3,70.8,31,62.4,43.2C54,55.4,43.4,66.1,30.6,71.7C17.8,77.3,2.8,77.8,-12.9,76.1C-28.7,74.3,-45.3,70.4,-57.8,60.8C-70.3,51.2,-78.7,36,-81.9,19.8C-85,-3.6,-82.8,-28,-73.3,-43.9C-63.8,-59.8,-47,-67.2,-31.5,-70.4C-16,-73.5,-1.8,-72.4,11.1,-69.6C24,-66.8,47.9,-62.4,39.3,-66.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="w-full mx-auto relative z-10">
        {children}
      </div>
    </main>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PageWrapper.defaultProps = {
  className: '',
};

export default PageWrapper;