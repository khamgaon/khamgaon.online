// src/components/common/Form.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Form = ({ children, onSubmit, submitLabel = 'Submit' }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 text-left">
      {children}
      <Button 
  type="submit"
  variant="primary"
  fullWidth
>
        {submitLabel}
      </Button>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
};

export default Form;