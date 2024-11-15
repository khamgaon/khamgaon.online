import React from 'react';

const CategoryItem = ({ icon, title, gradientClass }) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
        <div className="relative">
          <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto ${gradientClass} group-hover:scale-110 transition-transform`}>
            <span className="material-icons text-white">{icon}</span>
          </div>
        </div>
        <p className="mt-2 font-medium group-hover:text-blue-600">{title}</p>
      </div>
    </div>
  );
};

const Categories = () => {
  const categories = [
    { icon: 'local_hospital', title: 'Hospitals', gradientClass: 'gradient-icon-1' },
    { icon: 'restaurant', title: 'Restaurants', gradientClass: 'gradient-icon-3' },
    { icon: 'school', title: 'Schools', gradientClass: 'gradient-icon-5' },
    { icon: 'park', title: 'Parks', gradientClass: 'gradient-icon-2' },
    { icon: 'shopping_cart', title: 'Shops', gradientClass: 'gradient-icon-6' },
    { icon: 'store', title: 'Stores', gradientClass: 'gradient-icon-4' },
    { icon: 'hotel', title: 'Hotels', gradientClass: 'gradient-icon-2' },
    { icon: 'fitness_center', title: 'Gyms', gradientClass: 'gradient-icon-1' },
    { icon: 'content_cut', title: 'Beauty Salons', gradientClass: 'gradient-icon-3' },
    { icon: 'local_pharmacy', title: 'Pharmacies', gradientClass: 'gradient-icon-4' },
    { icon: 'pets', title: 'Pet Services', gradientClass: 'gradient-icon-5' },
    { icon: 'home_repair_service', title: 'Home Services', gradientClass: 'gradient-icon-6' }
  ];

  return (
    <section className="block-bg-white w-full relative py-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-gray-700 text-2xl mb-2">
          Explore Categories on Khamgaon.online
        </h3>
        <p className="text-center text-gray-700 font-light text-lg mb-8">
          Uncover the rich array of services, businesses, and iconic landmarks that Khamgaon has to offer.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {categories.map((category, index) => (
            <CategoryItem key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 