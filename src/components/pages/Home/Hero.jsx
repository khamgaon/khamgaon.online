import React from 'react';
import logo from 'assets/images/logos/logo-short.png';

const Hero = () => {
    return (      
    <header 
        className="bg-gradient-to-br from-violet-200/80 to-bg-white/80 w-full min-h-[60vh] py-16 px-4 text-center relative flex items-center justify-center overflow-hidden"
        role="banner"
      >
        {/* Abstract SVG Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute -top-24 -right-24 w-96 h-96 text-blue-200" viewBox="0 0 200 200">
            <path fill="currentColor" d="M45,-78.2C58.3,-71.3,69.3,-58.6,77.6,-44.2C85.9,-29.8,91.5,-14.9,90.2,-0.7C88.9,13.4,80.8,26.8,72.3,39.8C63.8,52.8,55,65.3,42.8,73.1C30.6,80.9,15.3,83.9,0.1,83.7C-15,83.5,-30.1,80.2,-43.5,72.8C-56.9,65.4,-68.5,54,-76.3,40.4C-84,26.8,-87.8,13.4,-87.1,0.4C-86.4,-12.7,-81.2,-25.3,-73.3,-36.3C-65.4,-47.2,-54.8,-56.4,-42.6,-63.8C-30.4,-71.2,-15.2,-76.8,0.6,-77.8C16.4,-78.9,32.7,-75.4,45,-78.2Z" transform="translate(100 100)" />
          </svg>
          
          <svg className="absolute -bottom-16 -left-16 w-64 h-64 text-purple-200" viewBox="0 0 200 200">
            <path fill="currentColor" d="M38.1,-64.3C51.1,-56.7,64.9,-49.5,72.5,-37.8C80.2,-26.1,81.7,-13.1,79.8,-1.1C77.9,10.9,72.6,21.8,66.5,32.5C60.3,43.2,53.3,53.8,43.1,62.5C32.9,71.2,16.4,78.1,0.6,77.2C-15.3,76.3,-30.6,67.6,-43.5,58.1C-56.4,48.6,-66.9,38.2,-74.1,25.1C-81.3,11.9,-85.2,-4,-81.8,-18.1C-78.5,-32.2,-67.9,-44.5,-55.5,-52.2C-43,-59.9,-28.7,-63,-15.3,-64.8C-1.9,-66.6,11.6,-67.1,24.7,-69.1C37.8,-71.1,50.6,-74.7,38.1,-64.3Z" transform="translate(100 100)" />
          </svg>
          
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-pink-200" viewBox="0 0 200 200">
            <path fill="currentColor" d="M39.3,-66.7C50.9,-61.3,60.2,-49.8,67.2,-37.1C74.1,-24.4,78.7,-10.4,77.9,3.4C77,17.3,70.8,31,62.4,43.2C54,55.4,43.4,66.1,30.6,71.7C17.8,77.3,2.8,77.8,-12.9,76.1C-28.7,74.3,-45.3,70.4,-57.8,60.8C-70.3,51.2,-78.7,36,-81.9,19.8C-85,-3.6,-82.8,-28,-73.3,-43.9C-63.8,-59.8,-47,-67.2,-31.5,-70.4C-16,-73.5,-1.8,-72.4,11.1,-69.6C24,-66.8,47.9,-62.4,39.3,-66.7Z" transform="translate(100 100)" />
          </svg>
        </div>
      
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              alt="Khamgaon Online"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl mx-auto shadow-xl hover:shadow-2xl transition-all duration-300"
              fetchPriority="high"
            />
          </div>
          
          <h1 className="text-4xl mb-4 font-light">
            Khamgaon Online
          </h1>
          
          <h2 className="text-2xl font-light text-gray-700 mx-auto">
            Connecting Khamgaon like never before!
          </h2>
        </div>
      </header> 
)}

export default Hero;