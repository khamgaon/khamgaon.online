// src/components/pages/Category.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBusinessesByCategory } from 'api';
import { Phone, GeoAlt, Globe } from 'react-bootstrap-icons';
import PageWrapper from 'components/common/PageWrapper';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import Card from 'components/common/Card';


const BusinessCard = ({ business }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    {business.image && (
      <div className="h-48 overflow-hidden">
        <img 
          src={business.image} 
          alt={business.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">{business.name}</h2>
      <p className="text-gray-600 mb-6 line-clamp-2 font-light">{business.description}</p>
      
      <div className="space-y-3">
        {business.phone && (
          <div className="flex items-center text-gray-600">
            <Phone className="mr-3 flex-shrink-0" />
            <span className="font-light">{business.phone}</span>
          </div>
        )}
        {business.address && (
          <div className="flex items-center text-gray-600">
            <GeoAlt className="mr-3 flex-shrink-0" />
            <span className="font-light">{business.address}</span>
          </div>
        )}
        {business.website && (
          <div className="flex items-center">
            <Globe className="mr-3 flex-shrink-0" />
            <a 
              href={business.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-light"
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

  const content = () => {
    if (loading) {
      return <Loading />;
    }
  
    if (error) {
      return <Error message={error} />;
    }
  
    return businesses.length === 0 ? (
      <Card className="text-center">
        <p className="text-xl text-gray-600 font-light">
          No businesses found in this category yet.
        </p>
      </Card>
    ) : (
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

        {content()}
      </div>
    </PageWrapper>
  );
};

export default CategoryPage;