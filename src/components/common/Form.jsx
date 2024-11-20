// src/components/common/Form.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, onSubmit, submitLabel = 'Submit' }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {children}
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {submitLabel}
      </button>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
};

export default Form;