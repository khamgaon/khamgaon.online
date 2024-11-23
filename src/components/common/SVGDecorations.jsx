// src/components/common/SVGDecorations.jsx
import React from 'react';
import { ReactComponent as SvgTopRight } from 'assets/svgs/svg-top-right.svg';
import { ReactComponent as SvgBottomLeft } from 'assets/svgs/svg-bottom-left.svg';

const SVGDecorations = () => (
  <>
    <SvgTopRight
      className="absolute top-0 right-0 w-64 h-64 text-blue-200/30"
      aria-hidden="true"
    />
    <SvgBottomLeft
      className="absolute bottom-0 left-0 w-64 h-64 text-purple-200/30"
      aria-hidden="true"
    />
  </>
);

export default SVGDecorations;