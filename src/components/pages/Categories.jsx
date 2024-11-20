// src/components/CategoriesPage.jsx
import React from 'react';
import Categories from 'components/common/Categories';
import { ReactComponent as SvgTopRight } from 'assets/svgs/svg-top-right.svg';

const CategoriesPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            Explore Khamgaon
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Discover the diverse businesses, services, and attractions that make Khamgaon unique.
          </p>
        </div>
        <Categories />
        <SvgTopRight className="absolute top-0 right-0 w-48 h-48 text-blue-100 opacity-50" />
      </div>
    </main>
  );
};

export default CategoriesPage;