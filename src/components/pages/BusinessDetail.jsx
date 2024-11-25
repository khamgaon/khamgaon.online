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
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto relative h-[60vh] bg-gray-100">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <img
          src={business.images[activeImage]}
          alt={business.name}
          className="w-full h-full object-cover transition-transform duration-700"
        />

        {/* Image Navigation */}
        {totalImages > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/70 text-gray-700 hover:bg-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/70 text-gray-700 hover:bg-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 pb-6 px-6 bg-gradient-to-t from-black via-transparent to-transparent">
          <div className="max-w-7xl mx-auto text-white">
            <h1 className="text-4xl font-semibold mb-3">{business.name}</h1>
            <div className="flex items-center gap-4">
              <span className="capitalize text-lg">{business.category}</span>
              {business.ratings && (
                <div className="flex items-center">
                  <StarFill className="text-yellow-400 mr-1" size={20} />
                  <span>{business.ratings.toFixed(1)}</span>
                </div>
              )}
              {business.isVerified && (
                <span className="inline-flex items-center bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                  <Check size={14} className="mr-1" />
                  Verified
                </span>
              )}
            </div>
            <div className="flex gap-4 mt-4">
              <IconButton
                icon={HeartIcon}
                onClick={handleFavorite}
                label="Toggle favorite"
                className={`${
                  isFavorited ? 'text-red-500' : 'text-white'
                } hover:text-red-600 transition-colors`}
                size={28}
              />
              <IconButton
                icon={Share}
                onClick={handleShare}
                label="Share business"
                className="text-white hover:text-blue-300 transition-colors"
                size={28}
              />
              {business.phone && business.phone.length > 0 && (
                <Button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${business.phone[0].replace(/\D/g, '')}`,
                      '_blank'
                    )
                  }
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center"
                >
                  <Whatsapp className="mr-2" size={24} />
                  WhatsApp
                </Button>
              )}
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