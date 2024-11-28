// src/components/pages/Profile/EditProfileModal.jsx
import React, { useState } from 'react';
import Modal from 'components/common/Modal';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

export const EditProfileModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    about: user.about
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Profile">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
        />
        <Input
          label="Username"
          value={formData.username}
          onChange={(e) => setFormData(prev => ({...prev, username: e.target.value}))}
        />
        <Input
          label="About"
          type="textarea"
          value={formData.about}
          onChange={(e) => setFormData(prev => ({...prev, about: e.target.value}))}
        />
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Modal>
  );
};