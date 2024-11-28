// src/api/index.js

import categories from '../data/categories';
import businesses from '../data/businesses';

const MOCK_DELAY = 800; // Simulate network delay

// src/api/index.js
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';


const mockApiCall = async (response, delay = 800) => {
  await new Promise(resolve => setTimeout(resolve, delay));
  return response;
}

export const api = {
  // Auth
  sendOTP: async (phone) => {
    return mockApiCall({ success: true, message: 'OTP sent successfully' });
  },

  verifyOTP: async (phone, otp) => {
    return mockApiCall({ token: 'mock-jwt-token' });
  },

  // User
  updateUser: async (data) => {
    return mockApiCall({ success: true, data });
  },

  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    return mockApiCall({ imageUrl: URL.createObjectURL(file) });
  },

  // Business
  getBusinesses: async (category) => {
    return mockApiCall(businesses.filter(b => !category || b.category === category));
  },

  getBusiness: async (id) => {
    return mockApiCall(businesses.find(b => b.id === parseInt(id)));
  },

  // Reviews
  addReview: async (businessId, review) => {
    return mockApiCall({ success: true, review });
  },

};


export const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, MOCK_DELAY);
  });
};

export const fetchBusinessesByCategory = (categorySlug) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredBusinesses = businesses.filter(
        (business) => business.category.toLowerCase() === categorySlug.toLowerCase()
      );
      resolve(filteredBusinesses);
    }, MOCK_DELAY);
  });
};