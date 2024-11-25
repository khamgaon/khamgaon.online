// Updated BusinessDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Phone,
  GeoAlt,
  Envelope,
  Clock,
  StarFill,
  HeartFill,
  Heart,
  Share,
  Whatsapp,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'react-bootstrap-icons';
import businesses from '../../data/businesses';
import PageWrapper from '../common/PageWrapper';
import IconButton from '../common/IconButton';
import Button from '../common/Button';
import Loading from '../common/Loading';

const BusinessDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(true);
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    // Fetch business data
    const fetchBusiness = async () => {
      // Simulate API fetch
      setTimeout(() => {
        const found = businesses.find((b) => b.id === parseInt(id));
        setBusiness(found);
        setLoading(false);
      }, 500);
    };
    fetchBusiness();

    // Check if favorited
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.includes(parseInt(id)));
  }, [id]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: business.name,
        text: business.description,
        url: window.location.href,
      });
    } catch (error) {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard');
    }
  };

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorited) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter((fid) => fid !== business.id))
      );
    } else {
      favorites.push(business.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorited(!isFavorited);
  };

  if (loading) return <Loading />;
  if (!business) {
    return (
      <PageWrapper>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium text-gray-800 mb-2">
              Business not found
            </h1>
            <p className="text-gray-600 mb-4">
              The business you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-700">
              Return Home
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  const totalImages = business.images.length;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const HeartIcon = isFavorited ? HeartFill : Heart;

  return (
    <PageWrapper>
      <div className="lg:px-6">
      <div className="relative h-[50vh] max-w-7xl mx-auto px-6">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <img
            src={business.images[0]}
            alt={business.name}
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end pb-6">
          {/* Row Container */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end space-y-4 md:space-y-0">
            {/* Left Side Content */}
            <div className="flex flex-col">
              {/* Metadata Row */}
              <div className="flex items-center gap-3 text-white/90 mb-3">
                <div className="flex items-center gap-1">
                  <StarFill className="text-yellow-400" size={18} />
                  <span className="font-medium">{business.ratings.toFixed(1)}</span>
                </div>
                <span className="text-sm">•</span>
                <span className="capitalize">{business.category}</span>
                {business.isVerified && (
                  <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs">
                    <Check size={10} />
                    <span className="font-medium">Verified</span>
                  </span>
                )}
              </div>

              {/* Business Name */}
              <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
                {business.name}
              </h1>

              {/* Description */}
              <p className="text-md text-white/80 max-w-xl">
                {business.tagline || `${business.description.substring(0, 100)}...`}
              </p>
            </div>

            {/* Right Side Content - Action Buttons */}
            <div className="flex space-x-2">
              <IconButton
                icon={HeartIcon}
                onClick={handleFavorite}
                className={`
                  ${isFavorited ? 'text-red-500' : 'text-gray-200'}
                  hover:text-red-600 transition-colors
                `}
                ariaLabel={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
              />
              <IconButton
                icon={Share}
                onClick={handleShare}
                className="text-gray-200 hover:text-blue-600 transition-colors"
                ariaLabel="Share"
              />
              {/* WhatsApp Icon Removed */}
            </div>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-white rounded-xl p-8 mb-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">About</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {business.description}
              </p>
            </div>


            {/* Services Section */}
            {business.services && (
              <div className="bg-white rounded-xl p-8 mb-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-medium text-gray-800 mb-6">Services</h2>
                <div className="flex flex-wrap gap-3">
                  {business.services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Section */}
            {business.gallery && business.gallery.length > 0 && (
              <div className="bg-white rounded-xl p-8 mb-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-medium text-gray-800 mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {business.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    />
                  ))}
                </div>
              </div>
            )}


            {/* FAQs Section */}
            {business.faqs && (
              <div className="bg-white rounded-xl p-8 mb-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-medium text-gray-800 mb-6">FAQs</h2>
                <div className="space-y-4">
                  {business.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-gray-50 rounded-lg"
                    >
                      <h4 className="font-medium text-gray-800 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Section */}
            {business.reviews && (
              <div className="bg-white rounded-xl p-8 mb-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-medium text-gray-800 mb-6">Reviews</h2>
                <div className="space-y-6">
                  {business.reviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-800">{review.user}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarFill
                              key={i}
                              className={
                                i < review.rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-200'
                              }
                              size={16}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-4">Business Information</h3>

              <div className="space-y-4">
                {business.address && (
                  <div className="flex gap-3 items-start">
                    <GeoAlt className="text-gray-400 mt-1" size={20} />
                    <span className="text-gray-600 text-sm">
                      {business.address}
                    </span>
                  </div>
                )}

                {business.phone && (
                  <div className="flex gap-3 items-start">
                    <Phone className="text-gray-400 mt-1" size={20} />
                    <div className="space-y-1">
                      {business.phone.map((num) => (
                        <a
                          key={num}
                          href={`tel:${num}`}
                          className="block text-gray-600 text-sm hover:text-blue-600"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {business.email && (
                  <div className="flex gap-3 items-start">
                    <Envelope className="text-gray-400 mt-1" size={20} />
                    <a
                      href={`mailto:${business.email}`}
                      className="text-gray-600 text-sm hover:text-blue-600"
                    >
                      {business.email}
                    </a>
                  </div>
                )}

                {business.operatingHours && (
                  <div className="flex gap-3">
                    <Clock className="text-gray-400 mt-1" size={20} />
                    <div className="space-y-1">
                      {Object.entries(business.operatingHours).map(
                        ([day, hours]) => (
                          <div key={day} className="text-sm">
                            <span className="text-gray-500 capitalize">
                              {day.replace(/_/g, ' ')}:{' '}
                            </span>
                            <span className="text-gray-600">{hours}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {business.locationMap && (
                  <div className="mt-4">
                    <iframe
                      title="location-map"
                      src={business.locationMap}
                      width="100%"
                      height="200"
                      allowFullScreen=""
                      loading="lazy"
                      className="rounded-lg border-0"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>

            {business.pricing && (
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Pricing</h3>
                <div className="space-y-2">
                  {business.pricing.map((item) => (
                    <div
                      key={item.service}
                      className="flex justify-between border-b pb-2"
                    >
                      <span className="text-gray-600">{item.service}</span>
                      <span className="text-gray-800 font-medium">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {business.specialOffers && business.specialOffers.length > 0 && (
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Special Offers</h3>
                <div className="space-y-2">
                  {business.specialOffers.map((offer, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="text-gray-800 font-medium">
                        {offer.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {offer.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {business.contactForm && (
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  ></textarea>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </PageWrapper>
  );
};

export default BusinessDetail;