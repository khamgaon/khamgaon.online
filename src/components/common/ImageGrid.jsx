// src/components/common/ImageGrid.jsx
import React from 'react';
import { Image, X, Star, StarFill } from 'react-bootstrap-icons';

const ImageGrid = ({ images, onAdd, onRemove, onSetCover, inputId }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((image, idx) => (
            <div key={idx} className="relative group">
                <img
                    src={image.preview}
                    alt={`Preview ${idx + 1}`}
                    className={`h-32 w-full object-cover rounded-lg ${image.isCover ? 'ring-2 ring-blue-500' : ''
                        }`}
                />
                <div className="absolute -top-2 -right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        type="button"
                        onClick={() => onSetCover(idx)}
                        className={`${image.isCover ? 'bg-blue-500' : 'bg-gray-700'
                            } text-white rounded-full p-1.5 hover:bg-blue-600`}
                        title={image.isCover ? 'Cover Image' : 'Set as Cover'}
                    >
                        {image.isCover ? <StarFill size={12} /> : <Star size={12} />}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            URL.revokeObjectURL(image.preview);
                            onRemove(idx);
                        }}
                        className="bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600"
                    >
                        <X size={12} />
                    </button>
                </div>
            </div>
        ))}

        <label
            htmlFor={inputId}
            className="flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500"
        >
            <Image size={24} className="text-gray-400" />
            <span className="mt-1 text-sm text-gray-500">Add Images</span>
        </label>
    </div>
);

export default ImageGrid;