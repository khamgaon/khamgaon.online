import React from 'react';

const Header = () => {
  return (
    <header className="block-bg-white w-full text-center relative">
      <div className="logo-container mb-6">
        <img
          src="images/logo.png"
          alt="Khamgaon.online Logo"
          width="200"
          height="200"
          className="rounded-lg mx-auto"
          fetchpriority="high"
        />
      </div>
      <h1 className="text-4xl font-light mb-4">Khamgaon Online</h1>
      <h2 className="text-2xl font-thin">
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