import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import { fetchCategories } from '../../api';
import { importIcon } from '../../utils/importIcon';

const Categories = () => {
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

  if (loading) return <div className="text-center py-8">Loading categories...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <section className="block-bg-white w-full relative py-8" aria-labelledby="categories-title">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-gray-700 text-2xl mb-2" id="categories-title">
          Explore Categories on Khamgaon.online
        </h3>
        <p className="text-center text-gray-700 font-light text-lg mb-8">
          Uncover the rich array of services, businesses, and iconic landmarks that Khamgaon has to offer.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {categories.map((category) => {
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
        </div>
      </div>
    </section>
  );
};

export default Categories;