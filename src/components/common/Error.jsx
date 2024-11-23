// src/components/common/Error.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className="text-center py-8">
    <p className="text-red-500 mb-4">{message}</p>
    <button
      onClick={() => window.location.reload()}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Try Again
    </button>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;