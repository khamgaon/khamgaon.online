import React from 'react';
import { 
  Hospital, 
  Basket, 
  Book, 
  Tree, 
  Cart, 
  Shop, 
  House, 
  Heart, 
  Scissors, 
  Shield, 
  Hammer 
} from 'react-bootstrap-icons';
import { ReactComponent as SvgTopRight } from '../../assets/svgs/svg-top-right.svg';
import Card from '../common/Card';

const Categories = () => {
  const categories = [
    { icon: <Hospital />, title: 'Hospitals', gradientClass: 'gradient-icon-1' },
    { icon: <Basket />, title: 'Restaurants', gradientClass: 'gradient-icon-3' },
    { icon: <Book />, title: 'Schools', gradientClass: 'gradient-icon-5' },
    { icon: <Tree />, title: 'Parks', gradientClass: 'gradient-icon-2' },
    { icon: <Cart />, title: 'Shops', gradientClass: 'gradient-icon-6' },
    { icon: <Shop />, title: 'Stores', gradientClass: 'gradient-icon-4' },
    { icon: <House />, title: 'Hotels', gradientClass: 'gradient-icon-2' },
    { icon: <Heart />, title: 'Gyms', gradientClass: 'gradient-icon-1' },
    { icon: <Scissors />, title: 'Beauty Salons', gradientClass: 'gradient-icon-3' },
    { icon: <Shield />, title: 'Health Services', gradientClass: 'gradient-icon-4' },
    { icon: <Hammer />, title: 'Home Services', gradientClass: 'gradient-icon-6' }
  ];

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
          {categories.map((category, index) => (
            <Card 
              key={index}
              icon={category.icon}
              title={category.title}
              gradientClass={category.gradientClass}
              isFeature={false}
            />
          ))}
        </div>
      </div>
      <SvgTopRight className="abstract-svg svg-top-right" alt="Abstract Design" loading="lazy" />
    </section>
  );
};

export default Categories; 