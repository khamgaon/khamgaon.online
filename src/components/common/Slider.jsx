// src/components/common/Slider.jsx
import React from 'react';

export const Slider = ({ min, max, step, value, onChange }) => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        style={{
          background: `linear-gradient(to right, #2563eb ${(value - min) / (max - min) * 100}%, #e5e7eb ${(value - min) / (max - min) * 100}%)`
        }}
      />
      <span className="text-sm text-gray-600 min-w-[3ch]">
        {value.toFixed(1)}
      </span>
    </div>
  );
};