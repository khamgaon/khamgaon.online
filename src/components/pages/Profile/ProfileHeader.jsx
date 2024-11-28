// src/components/pages/Profile/ProfileHeader.jsx
import React, { useRef, useState } from 'react';
import { PencilSquare, Camera } from 'react-bootstrap-icons';
import ImageUploadModal from './ImageUploadModal';

export const ProfileHeader = ({ user, onUpdateImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageType, setImageType] = useState(null); // 'profile' or 'cover'
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image must be less than 5MB');
        return;
      }
      setSelectedImage(URL.createObjectURL(file));
      setIsModalOpen(true);
    }
  };
  
  const handleImageClick = (type) => {
    setImageType(type);
    fileInputRef.current.click();
  };


  return (
    <div className="relative h-80">
      <div className="absolute inset-0">
        <img
          src={user.coverPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Cover photo edit button */}
        <button 
          onClick={() => handleImageClick('cover')}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <Camera size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-8 flex items-end gap-6">
        <div className="relative">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <button 
            onClick={() => handleImageClick('profile')}
            className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700 transition-colors"
          >
            <PencilSquare size={16} />
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedImage(null);
        }}
        onSave={(croppedImage) => {
          onUpdateImage(imageType, croppedImage);
          setIsModalOpen(false);
          setSelectedImage(null);
        }}
        imageType={imageType}
        image={selectedImage}
      />
    </div>
  );
};