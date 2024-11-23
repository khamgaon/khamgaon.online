// src/components/pages/Categories.jsx
import React from 'react';
import Categories from 'components/common/Categories';
import PageWrapper from 'components/common/PageWrapper';
import { SvgPattern3 } from 'components/common/Svgs';

const CategoriesPage = () => {
  return (
    <PageWrapper
      className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      topSvg={SvgPattern3}
      bottomSvg={SvgPattern3}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          Explore Khamgaon
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
          Discover the diverse businesses, services, and attractions that make Khamgaon unique.
        </p>
      </div>
      <Categories />
    </PageWrapper>
  );
};

export default CategoriesPage;