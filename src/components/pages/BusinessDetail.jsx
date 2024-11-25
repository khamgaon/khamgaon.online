// src/components/pages/BusinessDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import businesses from '../../data/businesses';
import PageWrapper from '../common/PageWrapper';
import { Phone, GeoAlt, Envelope, Clock, Star } from 'react-bootstrap-icons';

const BusinessDetail = () => {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === parseInt(id));

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold mb-6">{business.business_name}</h1>
        <p className="text-gray-700 mb-6">{business.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {business.images.map((image, index) => (
            <img key={index} src={image} alt={`${business.business_name} ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
          ))}
        </div>

        <div className="space-y-4">
          {business.phone_numbers && business.phone_numbers.length > 0 && (
            <div className="flex items-center text-gray-600">
              <Phone className="mr-3 flex-shrink-0" />
              {business.phone_numbers.map((phone, index) => (
                <span key={index} className="font-light mr-2">{phone}</span>
              ))}
            </div>
          )}
          {business.address && (
            <div className="flex items-center text-gray-600">
              <GeoAlt className="mr-3 flex-shrink-0" />
              <span className="font-light">{business.address}</span>
            </div>
          )}
          {business.email && (
            <div className="flex items-center text-gray-600">
              <Envelope className="mr-3 flex-shrink-0" />
              <span className="font-light">{business.email}</span>
            </div>
          )}
          {business.working_hours && (
            <div className="flex items-center text-gray-600">
              <Clock className="mr-3 flex-shrink-0" />
              <span className="font-light">
                {Object.entries(business.working_hours).map(([key, hours], idx) => (
                  <span key={idx}>
                    {key.replace(/_/g, ' ')}: {hours}{idx < Object.entries(business.working_hours).length -1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            </div>
          )}
          {business.ratings && (
            <div className="flex items-center text-gray-600">
              <Star className="mr-3 flex-shrink-0" />
              <span className="font-light">{business.ratings} / 5</span>
            </div>
          )}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="list-disc list-inside">
            {business.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          {business.faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          {/* Implement a contact form here */}
        </div>
      </div>
    </PageWrapper>
  );
};

export default BusinessDetail;