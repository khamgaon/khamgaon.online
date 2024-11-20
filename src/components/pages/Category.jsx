// src/components/CategoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBusinessesByCategory } from 'api';
import { ReactComponent as SvgTopRight } from 'assets/svgs/svg-top-right.svg';
import { ReactComponent as SvgBottomLeft } from 'assets/svgs/svg-bottom-left.svg';
import { Link, Phone, GeoAlt, Globe } from 'react-bootstrap-icons';

const BusinessCard = ({ business }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
    {business.image && (
      <div className="image-container h-48 overflow-hidden">
        <img 
          src={business.image} 
          alt={business.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-3">{business.name}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{business.description}</p>
      
      <div className="space-y-2">
        {business.phone && (
          <div className="flex items-center text-gray-600">
            <Phone className="mr-2" />
            <span>{business.phone}</span>
          </div>
        )}
        {business.address && (
          <div className="flex items-center text-gray-600">
            <GeoAlt className="mr-2" />
            <span>{business.address}</span>
          </div>
        )}
        {business.website && (
          <div className="flex items-center">
            <Globe className="mr-2" />
            <a 
              href={business.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

const CategoryPage = () => {
  const { slug } = useParams();
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBusinesses = async () => {
      try {
        setLoading(true);
        const data = await fetchBusinessesByCategory(slug);
        setBusinesses(data);
      } catch (err) {
        setError('Failed to load businesses');
      } finally {
        setLoading(false);
      }
    };

    loadBusinesses();
  }, [slug]);

  if (loading) return (
    <div className="block-bg-white min-h-screen flex items-center justify-center">
      <div className="text-xl text-gray-600">Loading businesses...</div>
    </div>
  );

  if (error) return (
    <div className="block-bg-white min-h-screen flex items-center justify-center">
      <div className="text-xl text-red-500">{error}</div>
    </div>
  );

  return (
    <div className="block-bg-gray min-h-screen w-full relative py-12">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-semibold mb-3 capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>
          <p className="text-gray-600 text-lg">
            {businesses.length} {businesses.length === 1 ? 'business' : 'businesses'} found in this category
          </p>
        </header>

        {businesses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-xl text-gray-500">No businesses found in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </div>
      
      <SvgTopRight className="abstract-svg svg-top-right" aria-hidden="true" />
      <SvgBottomLeft className="abstract-svg svg-bottom-left" aria-hidden="true" />
    </div>
  );
};

export default CategoryPage;