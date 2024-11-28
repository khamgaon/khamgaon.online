// src/components/pages/FAQ.jsx
import React from 'react';
import PageWrapper from 'components/common/PageWrapper';
import FAQContent from 'components/common/FAQ';
import { Text } from 'design-system/components/Text';
import { SvgPattern2 } from 'components/common/Svgs';

const FAQPage = () => {
  return (
    <PageWrapper
      className="bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50"
      topSvg={SvgPattern2}
      bottomSvg={SvgPattern2}
    >
      <div className="text-center mb-12">
        <Text variant="h1" className="mb-4">
          How Can We Help?
        </Text>
        <Text variant="body" className="max-w-2xl mx-auto">
          Got questions about Khamgaon Online? We've got answers. Browse through our frequently asked questions or reach out to us directly.
        </Text>
      </div>
      <FAQContent showTitle={false} />
    </PageWrapper>
  );
};

export default FAQPage;