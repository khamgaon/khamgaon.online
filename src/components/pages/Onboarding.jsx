import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../common/PageWrapper';
import Card from '../common/Card';
import Input from '../common/Input';
import Button from '../common/Button';
import { Person } from 'react-bootstrap-icons';
import { ReactComponent as SvgPattern1 } from 'assets/svgs/svg-bottom-left.svg';

const Onboarding = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    profilePicture: null
  });
  const [errors, setErrors] = useState({});
  const [previewUrl, setPreviewUrl] = useState('');

  const generateUsername = (name) => {
    return name.toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .substring(0, 15) + Math.floor(Math.random() * 1000);
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setFormData(prev => ({
      ...prev,
      name,
      username: generateUsername(name)
    }));
    setErrors(prev => ({ ...prev, name: '' }));
  };

  const handleUsernameChange = (e) => {
    setFormData(prev => ({
      ...prev,
      username: e.target.value
    }));
    setErrors(prev => ({ ...prev, username: '' }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, profilePicture: 'Image must be less than 5MB' }));
        return;
      }
      setFormData(prev => ({ ...prev, profilePicture: file }));
      setPreviewUrl(URL.createObjectURL(file));
      setErrors(prev => ({ ...prev, profilePicture: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!/^[a-z0-9]{3,15}$/.test(formData.username)) {
      newErrors.username = 'Username must be 3-15 characters long and contain only letters and numbers';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      // TODO: API call to save user profile
      // const formDataToSend = new FormData();
      // formDataToSend.append('name', formData.name);
      // formDataToSend.append('username', formData.username);
      // if (formData.profilePicture) {
      //   formDataToSend.append('profilePicture', formData.profilePicture);
      // }
      // await saveUserProfile(formDataToSend);
      
      navigate('/'); // Redirect to home after successful onboarding
    } catch (error) {
      setErrors({ submit: 'Failed to save profile. Please try again.' });
    }
    setLoading(false);
  };

  return (
    <PageWrapper
      className="bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50"
      topSvg={SvgPattern1}
      bottomSvg={SvgPattern1}
    >
      <div className="max-w-md mx-auto py-12 px-4">
        <Card
          title="Complete Your Profile"
          description="Let's set up your profile to get started"
          gradientClass="gradient-icon-1"
        >
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-200">
                  {previewUrl ? (
                    <img 
                      src={previewUrl}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Person className="w-full h-full text-gray-400 p-4" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </label>
              </div>
            </div>
            {errors.profilePicture && (
              <p className="text-red-500 text-sm text-center">{errors.profilePicture}</p>
            )}

            <Input
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={handleNameChange}
              placeholder="Enter your full name"
              error={errors.name}
            />

            <Input
              label="Username"
              type="text"
              value={formData.username}
              onChange={handleUsernameChange}
              placeholder="Choose a username"
              error={errors.username}
            />

            {errors.submit && (
              <p className="text-red-500 text-sm">{errors.submit}</p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Complete Profile'}
            </Button>
          </form>
        </Card>
      </div>
    </PageWrapper>
  );
};

export default Onboarding;