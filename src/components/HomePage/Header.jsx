import React from 'react';

const Header = () => {
  return (
    <header className="block-bg-white w-full text-center relative">
      <div className="logo-container">
        <img
          src="images/logos/logo.png"
          alt="Khamgaon Online"
          className="rounded-lg mx-auto"
          fetchpriority="high"
        />
      </div>
      <h2 className="text-lg sm:text-3xl font-light">
        Connecting Khamgaon like never before!
      </h2>
      <div className="svg-container" aria-hidden="true">
        <object
          data="svgs/svg-top-left.svg"
          type="image/svg+xml"
          className="abstract-svg svg-top-left"
          width="100"
          height="100"
        ></object>
      </div>
    </header>
  );
};

export default Header; 