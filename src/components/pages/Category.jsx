// src/components/pages/Category.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '../common/PageWrapper';
import Loading from '../common/Loading';
import Error from '../common/Error';
import BusinessCard from '../common/BusinessCard';
import { fetchBusinessesByCategory } from '../../api/businesses'; // Update the path as per your project structure

/**
 * CategoryPage Component
 *
 * Fetches and displays a list of businesses under a specific category.
 *
 * @returns {JSX.Element} The rendered component.
 */
const CategoryPage = () => {
  const { slug } = useParams();
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const data = await fetchBusinessesByCategory(slug); // Ensure this API function is defined and imported correctly
        setBusinesses(data);
      } catch (err) {
        setError('Failed to load businesses.');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, [slug]);

  /**
   * Renders the main content based on the current state.
   *
   * @returns {JSX.Element} The content to render.
   */
  const renderContent = () => {
    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    );
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4 capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>
          {!loading && !error && (
            <p className="text-lg text-gray-600 font-light">
              {businesses.length} {businesses.length === 1 ? 'business' : 'businesses'} found in this category
            </p>
          )}
        </header>

        {renderContent()}
      </div>
    </PageWrapper>
  );
};

/**
 * PropTypes for CategoryPage
 *
 * Since CategoryPage does not receive any props directly (it uses hooks),
 * there's no need for PropTypes here.
 */

// Removed PropTypes as they are not used

export default CategoryPage;