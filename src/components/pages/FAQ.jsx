// src/components/pages/FAQ.jsx
import React from 'react';
import PageWrapper from 'components/common/PageWrapper';
import FAQContent from 'components/common/FAQ';
import { SvgPattern2 } from 'components/common/Svgs';

const FAQPage = () => {
  return (
    <PageWrapper
      className="bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50"
      topSvg={SvgPattern2}
      bottomSvg={SvgPattern2}
    >
      <FAQContent />
    </PageWrapper>
  );
};

export default FAQPage;