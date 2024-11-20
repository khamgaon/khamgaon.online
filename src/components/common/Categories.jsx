// src/components/common/Categories.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-bootstrap-icons';
import Card from '../common/Card';
import { fetchCategories } from '../../api';
import { importIcon } from '../../utils/importIcon';

const Categories = React.memo(({ showTitle, limit }) => {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[...Array(limit || 6)].map((_, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-xl">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  const displayCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <section className="w-full relative py-8" aria-labelledby="categories-title">
      <div className="max-w-7xl mx-auto px-4">
        {showTitle && (
          <>
            <h3 className="text-center text-gray-700 text-2xl mb-2" id="categories-title">
              Explore Categories on Khamgaon.online
            </h3>
            <p className="text-center text-gray-700 font-light text-lg mb-8">
              Uncover the rich array of services, businesses, and iconic landmarks that Khamgaon has to offer.
            </p>
          </>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {displayCategories.map((category) => {
            const IconComponent = importIcon(category.icon);
            return (
              <Card 
                key={category.id}
                icon={<IconComponent />}
                title={category.title}
                gradientClass={category.gradientClass}
                link={`/category/${category.slug}`}
                isFeature={false}
              />
            );
          })}
          
          {limit && categories.length > limit && (
                          <Card 
              key="view-all"
              icon={<ChevronRight className="text-gray-500" />}
              title="View All"
              gradientClass="bg-gradient-to-br from-gray-100 to-gray-200"
              link="/categories"
              isFeature={false}
/>
          )}
        </div>
      </div>
    </section>
  );
});

Categories.propTypes = {
  showTitle: PropTypes.bool,
  limit: PropTypes.number
};

Categories.displayName = 'Categories';

export default Categories;