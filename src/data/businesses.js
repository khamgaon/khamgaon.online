// src/data/businesses.js

const businesses = [
  {
    id: 1,
    name: 'The Gourmet Kitchen',
    description: 'Experience fine dining with an exquisite menu crafted by top chefs.',
    category: 'restaurants',
    address: '45 Culinary Avenue, Khamgaon, Maharashtra, India',
    phone: ['9876543210', '9123456780'],
    email: 'contact@gourmetkitchen.com',
    operatingHours: {
      monday_to_friday: '12:00 PM - 11:00 PM',
      weekends: '12:00 PM - 1:00 AM',
    },
    images: [
      'https://images.unsplash.com/photo-1555992336-03a23c7d8a0c',
      'https://images.unsplash.com/photo-1541542680-1128a1a0b1d6',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Aisha Khan',
        rating: 5,
        comment: 'Absolutely loved the ambiance and the food was superb!',
      },
      {
        user: 'Rajiv Menon',
        rating: 4,
        comment: 'Great service, but the desserts could be better.',
      },
    ],
    specialOffers: [
      {
        title: 'Summer Fiesta',
        description: 'Enjoy a complimentary appetizer with every main course.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=45+Culinary+Avenue,+Khamgaon,+Maharashtra',
    services: ['Dine-in', 'Takeaway', 'Home Delivery'],
    faqs: [
      {
        question: 'Do you offer vegetarian options?',
        answer: 'Yes, we have a wide range of vegetarian dishes available.',
      },
      {
        question: 'Is there a dress code?',
        answer: 'Smart casual attire is recommended.',
      },
    ],
    owner: {
      name: 'Chef Anil Sharma',
      position: 'Executive Chef',
      bio: 'Chef Anil Sharma brings over 15 years of culinary expertise to The Gourmet Kitchen.',
    },
    testimonials: [
      {
        user: 'Meera Joshi',
        comment: 'A delightful dining experience every time!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1555992336-03a23c7d8a0c',
      'https://images.unsplash.com/photo-1541542680-1128a1a0b1d6',
    ],
    certifications: ['ISO 22000 Certified', 'Health Department Approved'],
    pricing: [
      {
        service: 'Main Course',
        price: '₹800 - ₹1500',
      },
      {
        service: 'Desserts',
        price: '₹200 - ₹500',
      },
    ],
    contactForm: true,
  },
  {
    id: 2,
    name: 'Bella Italia',
    description: 'Authentic Italian cuisine with a modern twist.',
    category: 'restaurants',
    address: '78 Piazza Road, Khamgaon, Maharashtra, India',
    phone: ['8765432109'],
    email: 'info@bellaitalia.com',
    operatingHours: {
      monday_to_friday: '11:00 AM - 10:00 PM',
      weekends: '11:00 AM - 11:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1529042410759-befb1204b468',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    ],
    ratings: 4.5,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Best pizza in town! Highly recommend the Margherita.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Great atmosphere and delicious pasta.',
      },
    ],
    specialOffers: [
      {
        title: 'Weekend Brunch',
        description: 'Buy one get one free on select brunch items every weekend.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=78+Piazza+Road,+Khamgaon,+Maharashtra',
    services: ['Dine-in', 'Takeaway', 'Online Orders'],
    faqs: [
      {
        question: 'Do you accommodate large groups?',
        answer: 'Yes, please call ahead to reserve a large table.',
      },
      {
        question: 'Is parking available?',
        answer: 'Yes, we have ample parking space for our guests.',
      },
    ],
    owner: {
      name: 'Maria Rossi',
      position: 'Managing Director',
      bio: 'Maria Rossi has a passion for Italian cuisine and over 20 years in the restaurant industry.',
    },
    testimonials: [
      {
        user: 'Karan Mehta',
        comment: 'A slice of Italy in Khamgaon. Exceptional service!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1529042410759-befb1204b468',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    ],
    certifications: ['Certified Italian Restaurant'],
    pricing: [
      {
        service: 'Pizza',
        price: '₹300 - ₹700',
      },
      {
        service: 'Pasta',
        price: '₹250 - ₹600',
      },
    ],
    contactForm: true,
  },
  {
    id: 3,
    name: 'Spice Symphony',
    description: 'A vibrant place offering a diverse range of spicy delicacies.',
    category: 'restaurants',
    address: '22 Spice Street, Khamgaon, Maharashtra, India',
    phone: ['9345678901', '9123456782'],
    email: 'hello@spicesymphony.com',
    operatingHours: {
      monday_to_saturday: '10:00 AM - 10:00 PM',
      sunday: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1576990954653-c482c3a4e1d4',
      'https://images.unsplash.com/photo-1555992336-03a23c7d8a0c',
    ],
    ratings: 4.6,
    reviews: [
      {
        user: 'Neha Gupta',
        rating: 5,
        comment: 'The biryani is out of this world. Will visit again!',
      },
      {
        user: 'Vikram Singh',
        rating: 4,
        comment: 'Great variety of spicy dishes.',
      },
    ],
    specialOffers: [
      {
        title: 'Loyalty Program',
        description: 'Earn points with every order and redeem exciting rewards.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=22+Spice+Street,+Khamgaon,+Maharashtra',
    services: ['Dine-in', 'Takeaway', 'Catering'],
    faqs: [
      {
        question: 'Do you offer vegetarian options?',
        answer: 'Yes, we have a wide selection of vegetarian dishes.',
      },
      {
        question: 'Can I host an event here?',
        answer: 'Absolutely! Contact us for event bookings and catering services.',
      },
    ],
    owner: {
      name: 'Arjun Verma',
      position: 'Founder & Head Chef',
      bio: 'Arjun Verma specializes in traditional Indian spices with a modern culinary approach.',
    },
    testimonials: [
      {
        user: 'Priya Desai',
        comment: 'A must-visit for spice lovers. Delicious and authentic!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576990954653-c482c3a4e1d4',
      'https://images.unsplash.com/photo-1555992336-03a23c7d8a0c',
    ],
    certifications: ['Hygiene Certified'],
    pricing: [
      {
        service: 'Main Course',
        price: '₹400 - ₹1200',
      },
      {
        service: 'Appetizers',
        price: '₹150 - ₹400',
      },
    ],
    contactForm: true,
  },
  {
    id:4,
    name: 'Ocean Breeze',
    description: 'Fresh seafood and a relaxing seaside ambiance.',
    category: 'restaurants',
    address: '89 Beachside Road, Khamgaon, Maharashtra, India',
    phone: ['9988776655'],
    email: 'reservations@oceanbreeze.com',
    operatingHours: {
      monday_to_friday: '5:00 PM - 12:00 AM',
      weekends: '12:00 PM - 1:00 AM',
    },
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Rahul Sharma',
        rating: 5,
        comment: 'Amazing seafood and the view is breathtaking!',
      },
      {
        user: 'Sonia Kapoor',
        rating: 5,
        comment: 'Perfect place for a romantic dinner.',
      },
    ],
    specialOffers: [
      {
        title: 'Happy Hours',
        description: 'Enjoy 20% off on all appetizers and drinks from 5 PM to 7 PM.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=89+Beachside+Road,+Khamgaon,+Maharashtra',
    services: ['Dine-in', 'Takeaway', 'Outdoor Seating'],
    faqs: [
      {
        question: 'Do you have outdoor seating?',
        answer: 'Yes, we offer a beautiful outdoor seating area with a sea view.',
      },
      {
        question: 'Do you take reservations?',
        answer: 'Yes, you can reserve a table by contacting us via email or phone.',
      },
    ],
    owner: {
      name: 'Emily Johnson',
      position: 'General Manager',
      bio: 'Emily brings a wealth of experience in managing upscale seafood restaurants.',
    },
    testimonials: [
      {
        user: 'Deepak Rao',
        comment: 'The freshest seafood and excellent service.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9',
    ],
    certifications: ['Seafood Safety Certified'],
    pricing: [
      {
        service: 'Seafood Platter',
        price: '₹1500 - ₹3000',
      },
      {
        service: 'Drinks',
        price: '₹200 - ₹800',
      },
    ],
    contactForm: true,
  },
  {
    id:5,
    name: 'Green Leaf Cafe',
    description: 'A cozy spot offering healthy and organic meals.',
    category: 'restaurants',
    address: '33 Evergreen Street, Khamgaon, Maharashtra, India',
    phone: ['9123984756'],
    email: 'hello@greenleafcafe.com',
    operatingHours: {
      monday_to_saturday: '8:00 AM - 8:00 PM',
      sunday: '9:00 AM - 6:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Anita Singh',
        rating: 5,
        comment: 'Best place for healthy breakfast and coffee.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Love their vegan options and the ambiance is lovely.',
      },
    ],
    specialOffers: [
      {
        title: 'Morning Special',
        description: 'Get a free smoothie with any breakfast order before 10 AM.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=33+Evergreen+Street,+Khamgaon,+Maharashtra',
    services: ['Dine-in', 'Takeaway', 'Outdoor Seating'],
    faqs: [
      {
        question: 'Do you offer gluten-free options?',
        answer: 'Yes, we have a variety of gluten-free dishes available.',
      },
      {
        question: 'Is there free Wi-Fi?',
        answer: 'Yes, complimentary Wi-Fi is available for all our guests.',
      },
    ],
    owner: {
      name: 'Samantha Lee',
      position: 'Owner & Head Chef',
      bio: 'Samantha is passionate about organic food and creating a welcoming cafe environment.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A perfect place to relax and enjoy a healthy meal.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    ],
    certifications: ['Organic Certified'],
    pricing: [
      {
        service: 'Breakfast Set',
        price: '₹350 - ₹700',
      },
      {
        service: 'Smoothies',
        price: '₹150 - ₹300',
      },
    ],
    contactForm: true,
  },
  {
    id:6,
    name: 'Fusion Fiesta',
    description: 'A unique blend of international cuisines in a vibrant setting.',
    category: 'restaurants',
    address: '56 Global Avenue, Khamgaon, Maharashtra, India',
    phone: ['9234567890', '9345678901'],
    email: 'contact@fusionfiesta.com',
    operatingHours: {
      monday_to_friday: '12:00 PM - 12:00 AM',
      weekends: '11:00 AM - 1:00 AM',
    },
    images: [
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9',
      'https://images.unsplash.com/photo-1529042410759-befb1204b468',
    ],
    ratings: 4.6,
    reviews: [
      {
        user: 'Riya Sharma',
        rating: 5,
        comment: 'Amazing fusion dishes that are both innovative and delicious.',
      },
      {
        user: 'Amit Verma',
        rating: 4,
        comment: 'Great place for group outings with a diverse menu.',
      },
    ],
    specialOffers: [
      {
        title: 'Happy Hour',
        description: 'Enjoy 25% off on selected appetizers and drinks from 6 PM to 8 PM.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=56+Global+Avenue,+Khamgaon,+Maharashtra',
    services: ['Dine-in', 'Takeaway', 'Private Events'],
    faqs: [
      {
        question: 'Do you host private events?',
        answer: 'Yes, please contact us for bookings and catering options.',
      },
      {
        question: 'Is there a dress code?',
        answer: 'Smart casual attire is preferred.',
      },
    ],
    owner: {
      name: 'Liam O\'Connor',
      position: 'Head Chef',
      bio: 'Liam brings international culinary expertise to Fusion Fiesta, creating a memorable dining experience.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful mix of flavors and a lively atmosphere.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9',
      'https://images.unsplash.com/photo-1529042410759-befb1204b468',
    ],
    certifications: ['FSSAI Certified'],
    pricing: [
      {
        service: 'Appetizers',
        price: '₹250 - ₹600',
      },
      {
        service: 'Main Course',
        price: '₹500 - ₹1500',
      },
    ],
    contactForm: true,
  },
];

export default businesses;