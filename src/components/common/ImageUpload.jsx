// src/components/common/ImageUpload.jsx
import React, { useRef } from 'react';
import { Image, X } from 'react-bootstrap-icons';

const ImageUpload = ({ images, onChange, error }) => {
    const fileInputRef = useRef();

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const validFiles = files.filter(file =>
            file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024
        );

        if (validFiles.length < files.length) {
            alert('Some files were skipped. Please upload images under 5MB.');
        }

        const newImages = validFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));

        onChange([...images, ...newImages]);
    };

    const removeImage = (index) => {
        const newImages = [...images];
        URL.revokeObjectURL(newImages[index].preview);
        newImages.splice(index, 1);
        onChange(newImages);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">
                    Business Images <span className="text-red-500">*</span>
                </label>
                <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
                >
                    Add Images
                </button>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="hidden"
            />

            <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={image.preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>
                    </div>
                ))}
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default ImageUpload;