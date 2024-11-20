// src/api/index.js
import categories from '../data/categories';
import businesses from '../data/businesses';

const MOCK_DELAY = 800; // Simulate network delay

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
        business => business.category === categorySlug
      );
      resolve(filteredBusinesses);
    }, MOCK_DELAY);
  });
};