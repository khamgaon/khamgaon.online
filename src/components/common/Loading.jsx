// src/components/common/Loading.jsx
import React from 'react';

const Loading = () => (
  <div className="text-center py-8">
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Loading;