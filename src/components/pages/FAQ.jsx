// src/components/pages/FAQ.jsx
import React from 'react';
import FAQ from 'components/common/FAQ';
import { ReactComponent as SvgTopRight } from 'assets/svgs/svg-top-right.svg';
import { ReactComponent as SvgBottomLeft } from 'assets/svgs/svg-bottom-left.svg';

const FAQPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50 py-12 px-4 relative overflow-hidden">
      {/* SVG Decorations */}
      <SvgTopRight
        className="absolute top-0 right-0 w-64 h-64 text-blue-200/30"
        aria-hidden="true"
      />
      <SvgBottomLeft
        className="absolute bottom-0 left-0 w-64 h-64 text-purple-200/30"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <FAQ />
      </div>
    </main>
  );
};

export default FAQPage;