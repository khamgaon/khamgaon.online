// src/components/common/BusinessCard.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GeoAlt, Clock, Star, Check, Share, Whatsapp, Heart, HeartFill } from 'react-bootstrap-icons';
import Button from './Button';
import IconButton from './IconButton';

const BusinessImage = ({ src, name, isVerified, isFeatured, onFavorite, onShare, isFavorited }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const HeartIcon = isFavorited ? HeartFill : Heart;

  return (
    <div className="relative h-52 overflow-hidden bg-gray-100">
      <img
        src={src}
        alt={name}
        className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />

      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <div className="absolute top-3 right-3 flex gap-2">
        <div className="flex gap-2">
          <IconButton
            icon={HeartIcon}
            onClick={onFavorite}
            label="Add to favorites"
            className={`${isFavorited ? 'text-rose-500' : 'text-gray-400'} hover:text-rose-600 transition-colors`}
            size={20}
          />
          <IconButton
            icon={Share}
            onClick={onShare}
            label="Share business"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
            size={20}
          />
        </div>
        {isVerified && (
          <span className="bg-green-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center shadow-sm">
            <Check size={12} className="mr-1" />
            Verified
          </span>
        )}
        {isFeatured && (
          <span className="bg-blue-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full shadow-sm">
            Featured
          </span>
        )}
      </div>
    </div>
  );
};

const BusinessInfo = ({ name, category, description, ratings, phone, address, operatingHours }) => (
  <div className="p-6">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
          {name}
        </h2>
        <p className="text-sm text-gray-500 capitalize">{category}</p>
      </div>
      {ratings && (
        <div className="flex items-center bg-gray-50 px-2.5 py-1.5 rounded-lg">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span className="font-medium text-gray-700">
            {ratings.toFixed(1)}
          </span>
        </div>
      )}
    </div>

    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
      {description}
    </p>

    <div className="space-y-2.5">
      {address && (
        <div className="flex items-center text-gray-600 text-sm">
          <GeoAlt className="mr-2.5 flex-shrink-0 text-gray-400" size={14} />
          <span className="line-clamp-1">{address}</span>
        </div>
      )}

      {operatingHours && (
        <div className="flex items-center text-gray-600 text-sm">
          <Clock className="mr-2.5 flex-shrink-0 text-gray-400" size={14} />
          <span className="line-clamp-1">
            {Object.entries(operatingHours)[0][1]}
          </span>
        </div>
      )}
    </div>

    <div className="pt-4 mt-4 border-t border-gray-100">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          className="group/btn bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600"
        >
          View Details
          <svg
            className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Button>

        <div className="flex items-center">
          {phone?.length > 0 && (
            <IconButton
              icon={Whatsapp}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(`https://wa.me/${phone[0].replace(/\D/g, '')}`, '_blank');
              }}
              label="Contact on WhatsApp"
              className="text-green-500 hover:text-green-600"
              size={20}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

const BusinessCard = ({ business }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorited) {
      localStorage.setItem('favorites', JSON.stringify(favorites.filter(id => id !== business.id)));
    } else {
      favorites.push(business.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const shareUrl = `${window.location.origin}/business/${business.id}`;
    const shareData = {
      title: business.name,
      text: `Check out ${business.name} on Khamgaon Online!`,
      url: shareUrl,
    };

    try {
      await navigator.share(shareData);
    } catch (error) {
      if(error.name !== 'AbortError') {
        // Final fallback to copy link
        try {
          await navigator.clipboard.writeText(shareUrl);
          alert('Link copied to clipboard!');
        } catch (clipboardError) {
          console.error('Copying link failed:', clipboardError);
          alert('Could not share. Please try again.');
        }
      }
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.includes(business.id));
  }, [business.id]);

  return (
    <Link
      to={`/business/${business.id}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`View details of ${business.name}`}
    >
      {business.images?.length > 0 && (
        <BusinessImage
          src={business.images[0]}
          name={business.name}
          isVerified={business.isVerified}
          isFeatured={business.isFeatured}
          onFavorite={handleFavorite}
          onShare={handleShare}
          isFavorited={isFavorited}
        />
      )}
      <BusinessInfo {...business} />
    </Link>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.arrayOf(PropTypes.string),
    operatingHours: PropTypes.object,
    images: PropTypes.arrayOf(PropTypes.string),
    ratings: PropTypes.number,
    isVerified: PropTypes.bool,
    isFeatured: PropTypes.bool,
  }).isRequired,
};

BusinessImage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  isFeatured: PropTypes.bool,
  onFavorite: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  isFavorited: PropTypes.bool.isRequired,
};

BusinessInfo.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  description: PropTypes.string.isRequired,
  ratings: PropTypes.number,
  phone: PropTypes.arrayOf(PropTypes.string),
  address: PropTypes.string,
  operatingHours: PropTypes.object,
};

export default BusinessCard;