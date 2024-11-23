// src/components/common/Categories.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import Card from './Card';
import { ChevronRight } from 'react-bootstrap-icons';
import { fetchCategories } from '../../api';
import { importIcon } from '../../utils/importIcon';
import Loading from './Loading';
import Error from './Error';

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

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const displayCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <Section ariaLabel="Categories on Khamgaon.online">
      {showTitle && (
        <>
          <h3 className="text-center text-gray-700 text-2xl mb-2">
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
          />
        )}
      </div>
    </Section>
  );
};

Categories.propTypes = {
  showTitle: PropTypes.bool,
  limit: PropTypes.number,
};

Categories.defaultProps = {
  showTitle: false,
  limit: null,
};

export default Categories;