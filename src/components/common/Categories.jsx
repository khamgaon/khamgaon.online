// src/components/common/Categories.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import Card from './Card';
import { Text } from 'design-system/components/Text';
import { ChevronRight } from 'react-bootstrap-icons';
import { fetchCategories } from '../../api';
import { importIcon } from '../../utils/importIcon';
import Loading from './Loading';
import Error from './Error';

const CategorySkeleton = () => (
  <div className="animate-pulse">
    <Card
      variant="default"
      size="md"
      className="h-40"
    >
      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4" />
      <div className="h-4 bg-gray-200 rounded w-20 mx-auto" />
    </Card>
  </div>
);

const Categories = ({ showTitle, limit }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

  if (error) return <Error message={error} />;

  const displayCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <Section ariaLabel="Categories on Khamgaon.online">
      {showTitle && (
        <div className="text-center mb-8">
          <Text variant="h2">
            Explore Categories on Khamgaon.online
          </Text>
          <Text variant="body" className="mt-2">
            Uncover the rich array of services, businesses, and iconic landmarks that Khamgaon has to offer.
          </Text>
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {loading ? (
          Array(limit || 6).fill(null).map((_, index) => (
            <CategorySkeleton key={index} />
          ))
        ) : (
          <>
            {displayCategories.map((category) => {
              const IconComponent = importIcon(category.icon);
              return (
                <Card
                  key={category.id}
                  icon={<IconComponent />}
                  title={category.title}
                  variant="elevated"
                  animation="hover"
                  size="md"
                  gradientClass={category.gradientClass}
                  link={`/category/${category.slug}`}
                />
              );
            })}
            
            {limit && categories.length > limit && (
              <Card
                icon={<ChevronRight />}
                title="View All"
                variant="outlined"
                animation="scale"
                size="md"
                link="/categories"
                className="text-blue-600 hover:text-blue-700"
                gradientClass='gradient-icon-1'
              />
            )}
          </>
        )}
      </div>
    </Section>
  );
};

Categories.propTypes = {
  showTitle: PropTypes.bool,
  limit: PropTypes.number
};

export default Categories;