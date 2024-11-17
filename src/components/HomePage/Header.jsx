import React from 'react';
import logo from '../../assets/images/logos/logo.png';
import { ReactComponent as SvgTopLeft } from '../../assets/svgs/svg-top-left.svg';

const Header = () => {
  return (
    <header className="block-bg-white w-full text-center relative" role="banner">
      <div className="logo-container">
        <img
          src={logo}
          alt="Khamgaon Online"
          className="rounded-lg mx-auto"
          fetchpriority="high"
        />
      </div>
      <h2 className="text-lg sm:text-3xl font-light" id="header-title">
        Connecting Khamgaon like never before!
      </h2>
      <div className="svg-container" aria-hidden="true">
        <SvgTopLeft className="abstract-svg svg-top-left" alt="Top Left Abstract Design" width="100" height="100" />
      </div>
    </header>
  );
};

export default Header; 