// src/components/common/RatingInput.jsx
import React from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';

const RatingInput = ({ value, onChange }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="flex gap-1">
            {stars.map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => onChange(star)}
                    className="text-yellow-400 hover:scale-110 transition-transform"
                >
                    {star <= value ? <StarFill size={24} /> : <Star size={24} />}
                </button>
            ))}
        </div>
    );
};

export default RatingInput;