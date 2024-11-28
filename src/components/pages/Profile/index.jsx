// src/components/pages/Profile/index.jsx
import React, { useState } from 'react';
import PageWrapper from 'components/common/PageWrapper';
import { Text } from 'design-system/components/Text';
import { HeartFill, StarFill, Person } from 'react-bootstrap-icons';
import Button from 'components/common/Button';
import Card from 'components/common/Card';
import BusinessCard from 'components/common/BusinessCard';
import { ProfileHeader } from './ProfileHeader';
import { ProfileTabs } from './ProfileTabs';
import { ReviewCard } from './ReviewCard';
import './profile.css';
import { uploadImage } from 'utils/imageUpload';

import { EditProfileModal } from './EditProfileModal';
import { useUser } from 'context/UserContext';
import { useGlobal } from 'context/GlobalContext';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');


  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { user, updateUser } = useUser();
  const { addNotification } = useGlobal();

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = async (data) => {
    try {
      await updateUser(data);
      addNotification('Profile updated successfully', 'success');
    } catch (error) {
      addNotification('Failed to update profile', 'error');
    }
  };

  const handleShareProfile = async () => {
    const shareData = {
      title: `${user.name}'s Profile`,
      text: `Check out ${user.name}'s profile on our platform!`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        // TODO: Show toast notification
        alert('Profile link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleUpdateImage = async (type, image) => {
    try {
      const imageUrl = await uploadImage(image);
      setUser(prev => ({
        ...prev,
        [type === 'profile' ? 'profilePicture' : 'coverPhoto']: imageUrl
      }));
    } catch (error) {
      console.error('Error updating image:', error);
      // TODO: Show error toast
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">

        <ProfileHeader user={user} onUpdateImage={handleUpdateImage} />

        <Card className="mb-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <Text variant="h1" className="text-2xl font-bold mb-1">{user.name}</Text>
              <Text variant="body" className="text-gray-600 text-left">@{user.username}</Text>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={handleEditProfile}>Edit Profile</Button>
              <Button variant="primary" onClick={handleShareProfile}>Share Profile</Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 py-4 border-y border-gray-100">
            {Object.entries(user.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <Text variant="h4" className="font-bold">{value}</Text>
                <Text variant="body" className="text-gray-600 capitalize">{key}</Text>
              </div>
            ))}
          </div>
        </Card>

        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-8">
          {activeTab === 'about' && (
            <div className="space-y-8">
              <Card align='left'>
                <Text variant="h3" className="mb-4">About</Text>
                <Text variant="body">{user.about}</Text>
              </Card>

              <Card align='left'>
                <Text variant="h3" className="mb-4">Contact Information</Text>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Person className="text-gray-400" />
                    <Text variant="body">Member since January 2024</Text>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.favorites.length > 0 ? (
                user.favorites.map(business => (
                  <BusinessCard key={business.id} {...business} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <HeartFill className="mx-auto mb-4 text-gray-300" size={48} />
                  <Text variant="body" className="text-gray-500">No favorites yet</Text>
                </div>
              )}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {user.reviews.length > 0 ? (
                user.reviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))
              ) : (
                <div className="text-center py-12">
                  <StarFill className="mx-auto mb-4 text-gray-300" size={48} />
                  <Text variant="body" className="text-gray-500">No reviews yet</Text>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={handleSaveProfile}
      />
    </PageWrapper>
  );
};

export default Profile;