import React from 'react';
import logo from '../../assets/images/logos/logo.png';
import svgTopLeft from '../../assets/svgs/svg-top-left.svg';

const Header = () => {
  return (
    <header className="block-bg-white w-full text-center relative">
      <div className="logo-container">
        <img
          src={logo}
          alt="Khamgaon Online"
          className="rounded-lg mx-auto"
          fetchpriority="high"
        />
      </div>
      <h2 className="text-lg sm:text-3xl font-light">
        Connecting Khamgaon like never before!
      </h2>
      <div className="svg-container" aria-hidden="true">
        <img
          src={svgTopLeft}
          alt="Top Left Abstract Design"
          className="abstract-svg svg-top-left"
          width="100"
          height="100"
        />
      </div>
    </header>
  );
};

export default Header; 