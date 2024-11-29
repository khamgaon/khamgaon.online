// src/components/common/Combobox.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Combobox = ({
    options,
    value,
    onChange,
    onAddNew,
    label,
    error,
    required
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setIsOpen(true);
    };

    const handleSelect = (option) => {
        setInputValue(option);
        onChange(option);
        setIsOpen(false);
    };

    const handleAddNew = () => {
        onAddNew(inputValue);
        setIsOpen(false);
    };

    const filteredOptions = options.filter(opt =>
        opt.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className="relative">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={() => setIsOpen(true)}
                className={`
          w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
          ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500 border-gray-300'}
        `}
            />
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
                    {filteredOptions.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                        >
                            {option}
                        </div>
                    ))}
                    {inputValue && !filteredOptions.includes(inputValue) && (
                        <div
                            onClick={handleAddNew}
                            className="px-4 py-2 text-blue-600 hover:bg-blue-50 cursor-pointer border-t"
                        >
                            Add "{inputValue}" as new category
                        </div>
                    )}
                </div>
            )}
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

Combobox.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onAddNew: PropTypes.func.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    required: PropTypes.bool
};

export default Combobox;