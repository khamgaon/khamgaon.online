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
  {
    id: 7,
    name: 'Khamgaon General Hospital',
    description: 'Providing comprehensive healthcare services with state-of-the-art facilities.',
    category: 'hospitals',
    address: '123 Health Street, Khamgaon, Maharashtra, India',
    phone: ['9123456790', '9123456791'],
    email: 'contact@khamgaongeneral.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1580281657523-99c2f5f6c9d0',
      'https://images.unsplash.com/photo-1576765607922-fb6a8bcf1a8f',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Dr. Neha Gupta',
        rating: 5,
        comment: 'Exceptional medical staff and facilities.',
      },
      {
        user: 'Amit Verma',
        rating: 4,
        comment: 'Good services, but waiting time can be improved.',
      },
    ],
    specialOffers: [
      {
        title: 'Health Checkup Package',
        description: 'Comprehensive health checkups at discounted rates.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=123+Health+Street,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Cardiology'],
    faqs: [
      {
        question: 'Do you offer emergency services?',
        answer: 'Yes, our emergency department is open 24/7.',
      },
      {
        question: 'Is there parking available?',
        answer: 'Yes, ample parking space is available for patients and visitors.',
      },
    ],
    owner: {
      name: 'Dr. Rajesh Singh',
      position: 'Chief Medical Officer',
      bio: 'Dr. Rajesh Singh has over 20 years of experience in healthcare management.',
    },
    testimonials: [
      {
        user: 'Sunita Rao',
        comment: 'Highly professional and caring staff.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1580281657523-99c2f5f6c9d0',
      'https://images.unsplash.com/photo-1576765607922-fb6a8bcf1a8f',
    ],
    certifications: ['JCI Accredited', 'ISO 9001 Certified'],
    pricing: [
      {
        service: 'General Consultation',
        price: '₹500 - ₹1500',
      },
      {
        service: 'Surgery',
        price: '₹50,000 - ₹200,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 8,
    name: 'Mercy Hospital',
    description: 'Committed to providing compassionate and quality healthcare.',
    category: 'hospitals',
    address: '456 Care Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456792', '9123456793'],
    email: 'info@mercyhospital.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550831107-155ef1b0a4b3',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Anjali Mehta',
        rating: 5,
        comment: 'The staff are extremely helpful and knowledgeable.',
      },
      {
        user: 'Rohit Sharma',
        rating: 4,
        comment: 'Good facilities, but the cafeteria needs improvement.',
      },
    ],
    specialOffers: [
      {
        title: 'Free Vaccination Camp',
        description: 'Free vaccination for children under 5 years old.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=456+Care+Avenue,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Orthopedics', 'Neurology', 'Oncology'],
    faqs: [
      {
        question: 'Do you provide specialized treatments?',
        answer: 'Yes, we offer a wide range of specialized medical treatments.',
      },
      {
        question: 'Can I schedule an appointment online?',
        answer: 'Yes, appointments can be booked through our website or mobile app.',
      },
    ],
    owner: {
      name: 'Dr. Anil Deshmukh',
      position: 'Director of Medical Services',
      bio: 'Dr. Anil Deshmukh specializes in internal medicine and healthcare administration.',
    },
    testimonials: [
      {
        user: 'Priya Sharma',
        comment: 'Responsive and efficient healthcare professionals.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550831107-155ef1b0a4b3',
    ],
    certifications: ['ISO 13485 Certified', ' NABH Accredited'],
    pricing: [
      {
        service: 'MRI Scan',
        price: '₹10,000 - ₹25,000',
      },
      {
        service: 'Physiotherapy',
        price: '₹800 - ₹2000',
      },
    ],
    contactForm: true,
  },
  {
    id: 9,
    name: 'CityCare Hospital',
    description: 'Advanced medical care with a patient-centric approach.',
    category: 'hospitals',
    address: '789 Wellness Road, Khamgaon, Maharashtra, India',
    phone: ['9123456794', '9123456795'],
    email: 'support@citycarehospital.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1580281657523-99c2f5f6c9d0',
      'https://images.unsplash.com/photo-1576765607922-fb6a8bcf1a8f',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Karan Malhotra',
        rating: 5,
        comment: 'Excellent facilities and personnel.',
      },
      {
        user: 'Sonia Kapoor',
        rating: 5,
        comment: 'Perfect place for a romantic dinner.',
      },
    ],
    specialOffers: [
      {
        title: 'Annual Health Package',
        description: 'Comprehensive health checkups at an affordable price.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=789+Wellness+Road,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Cardiology', 'Dermatology', 'Gastroenterology'],
    faqs: [
      {
        question: 'Do you offer telemedicine services?',
        answer: 'Yes, virtual consultations are available for all departments.',
      },
      {
        question: 'Is there a cafeteria in the hospital?',
        answer: 'Yes, we have a fully equipped cafeteria open 24/7.',
      },
    ],
    owner: {
      name: 'Dr. Meera Joshi',
      position: 'Chief Executive Officer',
      bio: 'Dr. Meera Joshi is a renowned cardiologist with over 25 years of experience.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for spice lovers. Delicious and authentic!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1580281657523-99c2f5f6c9d0',
      'https://images.unsplash.com/photo-1576765607922-fb6a8bcf1a8f',
    ],
    certifications: ['NABH Accredited', 'ISO 9001 Certified'],
    pricing: [
      {
        service: 'General Consultation',
        price: '₹600 - ₹1600',
      },
      {
        service: 'Surgical Procedures',
        price: '₹60,000 - ₹250,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 10,
    name: 'LifeLine Hospital',
    description: 'Dedicated to delivering exceptional healthcare services.',
    category: 'hospitals',
    address: '321 Health Plaza, Khamgaon, Maharashtra, India',
    phone: ['9123456796', '9123456797'],
    email: 'contact@lifelinehospital.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550824738-43e5eaa3e0be',
    ],
    ratings: 4.6,
    reviews: [
      {
        user: 'Deepak Rao',
        rating: 5,
        comment: 'The freshest seafood and excellent service.',
      },
      {
        user: 'Rajiv Kumar',
        rating: 4,
        comment: 'Great place for group outings with a diverse menu.',
      },
    ],
    specialOffers: [
      {
        title: 'New Patient Discount',
        description: '10% off on all services for new patients.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=321+Health+Plaza,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Neurology', 'Orthopedics', 'Oncology'],
    faqs: [
      {
        question: 'Do you have a pharmacy on-site?',
        answer: 'Yes, our pharmacy is open 24/7.',
      },
      {
        question: 'Are your doctors available for home visits?',
        answer: 'Yes, select doctors offer home visit services.',
      },
    ],
    owner: {
      name: 'Dr. Suresh Patel',
      position: 'Medical Director',
      bio: 'Dr. Suresh Patel is an experienced neurologist committed to patient care.',
    },
    testimonials: [
      {
        user: 'Anita Sharma',
        comment: 'Best place for healthy breakfast and coffee.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Love their vegan options and the ambiance is lovely.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550824738-43e5eaa3e0be',
    ],
    certifications: ['JCI Accredited', 'ISO 14001 Certified'],
    pricing: [
      {
        service: 'Physiotherapy',
        price: '₹900 - ₹2200',
      },
      {
        service: 'Diagnostic Tests',
        price: '₹300 - ₹1000',
      },
    ],
    contactForm: true,
  },
  {
    id: 11,
    name: 'CareFirst Hospital',
    description: 'Leading the way in advanced medical treatments and patient care.',
    category: 'hospitals',
    address: '654 Wellness Way, Khamgaon, Maharashtra, India',
    phone: ['9123456798', '9123456799'],
    email: 'support@carefirsthospital.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550831107-155ef1b0a4b3',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Rahul Sharma',
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
        title: 'Winter Wellness Package',
        description: 'Comprehensive health screenings at special rates.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=654+Wellness+Way,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Cardiology', 'Dermatology', 'Gastroenterology'],
    faqs: [
      {
        question: 'Do you offer maternity services?',
        answer: 'Yes, we have a dedicated maternity ward with specialist care.',
      },
      {
        question: 'Is there an ICU available?',
        answer: 'Yes, our ICU is equipped with the latest medical technology.',
      },
    ],
    owner: {
      name: 'Dr. Maya Verma',
      position: 'Chief Surgeon',
      bio: 'Dr. Maya Verma is a renowned surgeon with expertise in cardiac surgeries.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful mix of flavors and a lively atmosphere.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550831107-155ef1b0a4b3',
    ],
    certifications: ['NABH Accredited', 'ISO 27001 Certified'],
    pricing: [
      {
        service: 'Cardiac Surgery',
        price: '₹200,000 - ₹500,000',
      },
      {
        service: 'Neurological Consultation',
        price: '₹1000 - ₹3000',
      },
    ],
    contactForm: true,
  },
  {
    id: 12,
    name: 'Khamgaon General Hospital',
    description: 'Providing comprehensive healthcare services with state-of-the-art facilities.',
    category: 'hospitals',
    address: '123 Health Street, Khamgaon, Maharashtra, India',
    phone: ['9123456790', '9123456791'],
    email: 'contact@khamgaongeneral.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1580281657523-99c2f5f6c9d0',
      'https://images.unsplash.com/photo-1576765607922-fb6a8bcf1a8f',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Dr. Neha Gupta',
        rating: 5,
        comment: 'Exceptional medical staff and facilities.',
      },
      {
        user: 'Amit Verma',
        rating: 4,
        comment: 'Good services, but waiting time can be improved.',
      },
    ],
    specialOffers: [
      {
        title: 'Health Checkup Package',
        description: 'Comprehensive health checkups at discounted rates.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=123+Health+Street,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Cardiology'],
    faqs: [
      {
        question: 'Do you offer emergency services?',
        answer: 'Yes, our emergency department is open 24/7.',
      },
      {
        question: 'Is there parking available?',
        answer: 'Yes, ample parking space is available for patients and visitors.',
      },
    ],
    owner: {
      name: 'Dr. Rajesh Singh',
      position: 'Chief Medical Officer',
      bio: 'Dr. Rajesh Singh has over 20 years of experience in healthcare management.',
    },
    testimonials: [
      {
        user: 'Sunita Rao',
        comment: 'Highly professional and caring staff.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1580281657523-99c2f5f6c9d0',
      'https://images.unsplash.com/photo-1576765607922-fb6a8bcf1a8f',
    ],
    certifications: ['JCI Accredited', 'ISO 9001 Certified'],
    pricing: [
      {
        service: 'General Consultation',
        price: '₹500 - ₹1500',
      },
      {
        service: 'Surgery',
        price: '₹50,000 - ₹200,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 13,
    name: 'Mercy Hospital',
    description: 'Committed to providing compassionate and quality healthcare.',
    category: 'hospitals',
    address: '456 Care Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456792', '9123456793'],
    email: 'info@mercyhospital.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550831107-155ef1b0a4b3',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Anjali Mehta',
        rating: 5,
        comment: 'The staff are extremely helpful and knowledgeable.',
      },
      {
        user: 'Rohit Sharma',
        rating: 4,
        comment: 'Good facilities, but the cafeteria needs improvement.',
      },
    ],
    specialOffers: [
      {
        title: 'Free Vaccination Camp',
        description: 'Free vaccination for children under 5 years old.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=456+Care+Avenue,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Orthopedics', 'Neurology', 'Oncology'],
    faqs: [
      {
        question: 'Do you provide specialized treatments?',
        answer: 'Yes, we offer a wide range of specialized medical treatments.',
      },
      {
        question: 'Can I schedule an appointment online?',
        answer: 'Yes, appointments can be booked through our website or mobile app.',
      },
    ],
    owner: {
      name: 'Dr. Anil Deshmukh',
      position: 'Director of Medical Services',
      bio: 'Dr. Anil Deshmukh specializes in internal medicine and healthcare administration.',
    },
    testimonials: [
      {
        user: 'Priya Sharma',
        comment: 'Responsive and efficient healthcare professionals.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550831107-155ef1b0a4b3',
    ],
    certifications: ['ISO 13485 Certified', 'NABH Accredited'],
    pricing: [
      {
        service: 'MRI Scan',
        price: '₹10,000 - ₹25,000',
      },
      {
        service: 'Physiotherapy',
        price: '₹800 - ₹2000',
      },
    ],
    contactForm: true,
  },
  {
    id: 14,
    name: 'CityCare Hospital',
    description: 'Advanced medical care with a patient-centric approach.',
    category: 'hospitals',
    address: '789 Wellness Road, Khamgaon, Maharashtra, India',
    phone: ['9123456794', '9123456795'],
    email: 'support@citycarehospital.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1580281657523-99c2f5f6c9d0',
      'https://images.unsplash.com/photo-1576765607922-fb6a8bcf1a8f',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Karan Malhotra',
        rating: 5,
        comment: 'Excellent facilities and personnel.',
      },
      {
        user: 'Sonia Kapoor',
        rating: 5,
        comment: 'Perfect place for a romantic dinner.',
      },
    ],
    specialOffers: [
      {
        title: 'Annual Health Package',
        description: 'Comprehensive health checkups at an affordable price.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=789+Wellness+Road,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Cardiology', 'Dermatology', 'Gastroenterology'],
    faqs: [
      {
        question: 'Do you offer telemedicine services?',
        answer: 'Yes, virtual consultations are available for all departments.',
      },
      {
        question: 'Is there a cafeteria in the hospital?',
        answer: 'Yes, we have a fully equipped cafeteria open 24/7.',
      },
    ],
    owner: {
      name: 'Dr. Meera Joshi',
      position: 'Chief Executive Officer',
      bio: 'Dr. Meera Joshi is a renowned cardiologist with over 25 years of experience.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for spice lovers. Delicious and authentic!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1580281657523-99c2f5f6c9d0',
      'https://images.unsplash.com/photo-1576765607922-fb6a8bcf1a8f',
    ],
    certifications: ['NABH Accredited', 'ISO 9001 Certified'],
    pricing: [
      {
        service: 'General Consultation',
        price: '₹600 - ₹1600',
      },
      {
        service: 'Surgical Procedures',
        price: '₹60,000 - ₹250,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 15,
    name: 'LifeLine Hospital',
    description: 'Dedicated to delivering exceptional healthcare services.',
    category: 'hospitals',
    address: '321 Health Plaza, Khamgaon, Maharashtra, India',
    phone: ['9123456796', '9123456797'],
    email: 'contact@lifelinehospital.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550824738-43e5eaa3e0be',
    ],
    ratings: 4.6,
    reviews: [
      {
        user: 'Deepak Rao',
        rating: 5,
        comment: 'Amazing fusion dishes that are both innovative and delicious.',
      },
      {
        user: 'Rajiv Kumar',
        rating: 4,
        comment: 'Great place for group outings with a diverse menu.',
      },
    ],
    specialOffers: [
      {
        title: 'New Patient Discount',
        description: '10% off on all services for new patients.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=321+Health+Plaza,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Neurology', 'Orthopedics', 'Oncology'],
    faqs: [
      {
        question: 'Do you have a pharmacy on-site?',
        answer: 'Yes, our pharmacy is open 24/7.',
      },
      {
        question: 'Are your doctors available for home visits?',
        answer: 'Yes, select doctors offer home visit services.',
      },
    ],
    owner: {
      name: 'Dr. Suresh Patel',
      position: 'Medical Director',
      bio: 'Dr. Suresh Patel is an experienced neurologist committed to patient care.',
    },
    testimonials: [
      {
        user: 'Anita Sharma',
        comment: 'Best place for healthy breakfast and coffee.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Love their vegan options and the ambiance is lovely.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550824738-43e5eaa3e0be',
    ],
    certifications: ['JCI Accredited', 'ISO 14001 Certified'],
    pricing: [
      {
        service: 'Physiotherapy',
        price: '₹900 - ₹2200',
      },
      {
        service: 'Diagnostic Tests',
        price: '₹300 - ₹1000',
      },
    ],
    contactForm: true,
  },
  {
    id: 16,
    name: 'CareFirst Hospital',
    description: 'Leading the way in advanced medical treatments and patient care.',
    category: 'hospitals',
    address: '654 Wellness Way, Khamgaon, Maharashtra, India',
    phone: ['9123456798', '9123456799'],
    email: 'support@carefirsthospital.com',
    operatingHours: {
      monday_to_sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550831107-155ef1b0a4b3',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Rahul Sharma',
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
        title: 'Winter Wellness Package',
        description: 'Comprehensive health screenings at special rates.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=654+Wellness+Way,+Khamgaon,+Maharashtra',
    services: ['Emergency', 'Cardiology', 'Dermatology', 'Gastroenterology'],
    faqs: [
      {
        question: 'Do you offer maternity services?',
        answer: 'Yes, we have a dedicated maternity ward with specialist care.',
      },
      {
        question: 'Is there an ICU available?',
        answer: 'Yes, our ICU is equipped with the latest medical technology.',
      },
    ],
    owner: {
      name: 'Dr. Maya Verma',
      position: 'Chief Surgeon',
      bio: 'Dr. Maya Verma is a renowned surgeon with expertise in cardiac surgeries.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful mix of flavors and a lively atmosphere.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      'https://images.unsplash.com/photo-1550831107-155ef1b0a4b3',
    ],
    certifications: ['NABH Accredited', 'ISO 27001 Certified'],
    pricing: [
      {
        service: 'Cardiac Surgery',
        price: '₹200,000 - ₹500,000',
      },
      {
        service: 'Neurological Consultation',
        price: '₹1000 - ₹3000',
      },
    ],
    contactForm: true,
  },

  // Category: Furniture
  {
    id: 17,
    name: 'Comfort Home Furniture',
    description: 'High-quality furniture for your home and office.',
    category: 'furniture',
    address: '101 Furniture Street, Khamgaon, Maharashtra, India',
    phone: ['9123456806'],
    email: 'contact@comforthome.com',
    operatingHours: {
      monday_to_saturday: '9:00 AM - 8:00 PM',
      sunday: '10:00 AM - 6:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9',
      'https://images.unsplash.com/photo-1533750349088-cd871a1ae39d',
    ],
    ratings: 4.6,
    reviews: [
      {
        user: 'Radha Rao',
        rating: 5,
        comment: 'Excellent quality and great customer service!',
      },
      {
        user: 'Vikram Desai',
        rating: 4,
        comment: 'Good selection, but delivery was delayed.',
      },
    ],
    specialOffers: [
      {
        title: 'New Year Sale',
        description: 'Up to 25% off on all sofas and chairs.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=101+Furniture+Street,+Khamgaon,+Maharashtra',
    services: ['Delivery', 'Customization', 'Assembly'],
    faqs: [
      {
        question: 'Do you offer home delivery?',
        answer: 'Yes, we offer free home delivery for orders above ₹10,000.',
      },
      {
        question: 'Can I customize my furniture?',
        answer: 'Yes, we provide customization options upon request.',
      },
    ],
    owner: {
      name: 'Mr. Sameer Patil',
      position: 'Owner',
      bio: 'Mr. Sameer Patil has been in the furniture business for over 15 years.',
    },
    testimonials: [
      {
        user: 'Anita Sharma',
        comment: 'My new sofa is perfect! Highly recommended.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9',
      'https://images.unsplash.com/photo-1533750349088-cd871a1ae39d',
    ],
    certifications: ['ISO 9001 Certified'],
    pricing: [
      {
        service: 'Sofa',
        price: '₹15,000 - ₹50,000',
      },
      {
        service: 'Dining Table',
        price: '₹10,000 - ₹30,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 18,
    name: 'Elegant Interiors',
    description: 'Stylish and modern furniture to enhance your living spaces.',
    category: 'furniture',
    address: '102 Elegant Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456807'],
    email: 'sales@elegantinteriors.com',
    operatingHours: {
      monday_to_saturday: '10:00 AM - 7:00 PM',
      sunday: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1567016551879-9b7cb7c85a8d',
      'https://images.unsplash.com/photo-1602524205089-d7db16997246',
    ],
    ratings: 4.5,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Beautiful designs and very comfortable.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Great quality, but prices are a bit high.',
      },
    ],
    specialOffers: [
      {
        title: 'Spring Collection Launch',
        description: 'Exclusive discounts on our new spring collection.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=102+Elegant+Avenue,+Khamgaon,+Maharashtra',
    services: ['Custom Design', 'Home Decor Consultation', 'Installation'],
    faqs: [
      {
        question: 'Do you offer custom furniture?',
        answer: 'Yes, we specialize in custom furniture tailored to your needs.',
      },
      {
        question: 'What payment methods are accepted?',
        answer: 'We accept cash, credit cards, and online payments.',
      },
    ],
    owner: {
      name: 'Ms. Anjali Mehta',
      position: 'Creative Director',
      bio: 'Ms. Anjali Mehta has a keen eye for design and over 10 years in the industry.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for stylish home furnishings!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1567016551879-9b7cb7c85a8d',
      'https://images.unsplash.com/photo-1602524205089-d7db16997246',
    ],
    certifications: ['Certified Interior Designer'],
    pricing: [
      {
        service: 'Custom Sofa',
        price: '₹20,000 - ₹60,000',
      },
      {
        service: 'Dining Set',
        price: '₹15,000 - ₹40,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 19,
    name: 'Home Comforts',
    description: 'Affordable and stylish furniture for every room.',
    category: 'furniture',
    address: '103 Comfort Lane, Khamgaon, Maharashtra, India',
    phone: ['9123456808'],
    email: 'info@homecomforts.com',
    operatingHours: {
      monday_to_saturday: '9:00 AM - 8:00 PM',
      sunday: '10:00 AM - 6:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1582719478250-7d3bff3b60f3',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    ],
    ratings: 4.4,
    reviews: [
      {
        user: 'Rahul Desai',
        rating: 5,
        comment: 'Excellent variety and fast delivery.',
      },
      {
        user: 'Sonia Kapoor',
        rating: 4,
        comment: 'Good prices and quality.',
      },
    ],
    specialOffers: [
      {
        title: 'Black Friday Deals',
        description: 'Massive discounts on selected items.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=103+Comfort+Lane,+Khamgaon,+Maharashtra',
    services: ['Delivery', 'Warranties', 'Financing Options'],
    faqs: [
      {
        question: 'Do you offer financing?',
        answer: 'Yes, financing options are available for large purchases.',
      },
      {
        question: 'Is installation included?',
        answer: 'Yes, free installation is provided for all purchases.',
      },
    ],
    owner: {
      name: 'Mr. Rajiv Kumar',
      position: 'Sales Manager',
      bio: 'Mr. Rajiv Kumar has extensive experience in retail and customer service.',
    },
    testimonials: [
      {
        user: 'Anita Sharma',
        comment: 'Great selection and very affordable!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-7d3bff3b60f3',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    ],
    certifications: ['ISO 14001 Certified'],
    pricing: [
      {
        service: 'Bed Set',
        price: '₹25,000 - ₹70,000',
      },
      {
        service: 'Office Chair',
        price: '₹5,000 - ₹15,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 20,
    name: 'Urban Living Furniture',
    description: 'Modern furniture solutions for urban lifestyles.',
    category: 'furniture',
    address: '104 Urban Street, Khamgaon, Maharashtra, India',
    phone: ['9123456809'],
    email: 'sales@urbanliving.com',
    operatingHours: {
      monday_to_saturday: '10:00 AM - 9:00 PM',
      sunday: '11:00 AM - 7:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    ratings: 4.5,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Stylish designs and excellent craftsmanship.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Beautiful pieces, but a bit pricey.',
      },
    ],
    specialOffers: [
      {
        title: 'Festive Season Discounts',
        description: 'Special discounts during the festive season.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=104+Urban+Street,+Khamgaon,+Maharashtra',
    services: ['Design Consultation', 'Customization', 'Express Delivery'],
    faqs: [
      {
        question: 'Can I customize my order?',
        answer: 'Yes, customization services are available.',
      },
      {
        question: 'What is your return policy?',
        answer: 'Returns are accepted within 30 days of purchase.',
      },
    ],
    owner: {
      name: 'Ms. Riya Sharma',
      position: 'Creative Director',
      bio: 'Ms. Riya Sharma specializes in modern furniture design.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for contemporary furniture lovers!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    certifications: ['Certified Interior Designer'],
    pricing: [
      {
        service: 'Coffee Table',
        price: '₹8,000 - ₹20,000',
      },
      {
        service: 'Wardrobe',
        price: '₹15,000 - ₹50,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 21,
    name: 'Classic Woodworks',
    description: 'Handcrafted wooden furniture blending tradition with elegance.',
    category: 'furniture',
    address: '105 Heritage Road, Khamgaon, Maharashtra, India',
    phone: ['9123456810'],
    email: 'info@classicwoodworks.com',
    operatingHours: {
      monday_to_saturday: '9:00 AM - 7:00 PM',
      sunday: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Beautiful craftsmanship and durable materials.',
      },
      {
        user: 'Kumar Patel',
        rating: 4,
        comment: 'Lovely pieces, but customization took longer than expected.',
      },
    ],
    specialOffers: [
      {
        title: 'Anniversary Sale',
        description: 'Exclusive deals to celebrate our anniversary.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=105+Heritage+Road,+Khamgaon,+Maharashtra',
    services: ['Custom Orders', 'Repairs', 'Restoration'],
    faqs: [
      {
        question: 'Do you offer restoration services?',
        answer: 'Yes, we specialize in restoring antique furniture.',
      },
      {
        question: 'Can I place bulk orders?',
        answer: 'Yes, bulk orders are welcome with special discounts.',
      },
    ],
    owner: {
      name: 'Mr. Arjun Mehta',
      position: 'Owner & Master Carpenter',
      bio: 'Mr. Arjun Mehta has a passion for woodworking and over 20 years of experience.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for exquisite wooden furniture.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    certifications: ['ISO 9001 Certified'],
    pricing: [
      {
        service: 'Dining Table',
        price: '₹20,000 - ₹60,000',
      },
      {
        service: 'Bookshelf',
        price: '₹10,000 - ₹30,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 22,
    name: 'Modern Living',
    description: 'Contemporary furniture designs for the modern home.',
    category: 'furniture',
    address: '106 Modern Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456811'],
    email: 'contact@modernliving.com',
    operatingHours: {
      monday_to_saturday: '10:00 AM - 8:00 PM',
      sunday: '11:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    ratings: 4.5,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Sleek designs and very comfortable.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Great quality, but could offer more color options.',
      },
    ],
    specialOffers: [
      {
        title: 'Summer Refresh Sale',
        description: 'Refresh your home with our summer discounts.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=106+Modern+Avenue,+Khamgaon,+Maharashtra',
    services: ['Design Consultation', 'Customization', 'Express Delivery'],
    faqs: [
      {
        question: 'Do you offer express delivery?',
        answer: 'Yes, express delivery is available for an additional fee.',
      },
      {
        question: 'Can I customize the dimensions of furniture?',
        answer: 'Yes, we offer customization services to fit your space.',
      },
    ],
    owner: {
      name: 'Ms. Shreya Gupta',
      position: 'Design Lead',
      bio: 'Ms. Shreya Gupta is a creative designer with a passion for modern aesthetics.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for contemporary furniture lovers!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    certifications: ['Certified Interior Designer'],
    pricing: [
      {
        service: 'Sofa',
        price: '₹18,000 - ₹55,000',
      },
      {
        service: 'Coffee Table',
        price: '₹7,000 - ₹25,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 23,
    name: 'Eco Furniture',
    description: 'Sustainable and eco-friendly furniture options.',
    category: 'furniture',
    address: '107 Green Street, Khamgaon, Maharashtra, India',
    phone: ['9123456812'],
    email: 'info@ecofurniture.com',
    operatingHours: {
      monday_to_saturday: '9:00 AM - 7:00 PM',
      sunday: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Love the eco-friendly materials and designs.',
      },
      {
        user: 'Kumar Patel',
        rating: 4,
        comment: 'Great selection, but prices are slightly higher.',
      },
    ],
    specialOffers: [
      {
        title: 'Earth Day Special',
        description: 'Special discounts on all eco-friendly products.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=107+Green+Street,+Khamgaon,+Maharashtra',
    services: ['Sustainable Materials', 'Customization', 'Recycling Program'],
    faqs: [
      {
        question: 'Are your materials certified?',
        answer: 'Yes, all our materials are certified for sustainability.',
      },
      {
        question: 'Do you offer recycling services?',
        answer: 'Yes, we help recycle old furniture when you purchase new ones.',
      },
    ],
    owner: {
      name: 'Mr. Rajeev Menon',
      position: 'Founder',
      bio: 'Mr. Rajeev Menon is dedicated to promoting sustainable living through eco-friendly furniture.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for environmentally conscious furniture shoppers.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    certifications: ['FSC Certified', 'GreenGuard Certified'],
    pricing: [
      {
        service: 'Recycled Wood Table',
        price: '₹12,000 - ₹35,000',
      },
      {
        service: 'Organic Cotton Sofa',
        price: '₹20,000 - ₹60,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 24,
    name: 'Heritage Furnishings',
    description: 'Classic and timeless furniture pieces for every home.',
    category: 'furniture',
    address: '108 Heritage Lane, Khamgaon, Maharashtra, India',
    phone: ['9123456813'],
    email: 'sales@heritagefurnishings.com',
    operatingHours: {
      monday_to_saturday: '10:00 AM - 8:00 PM',
      sunday: '11:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Beautiful classic designs and sturdy build.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Great quality, but customization options are limited.',
      },
    ],
    specialOffers: [
      {
        title: 'Anniversary Sale',
        description: 'Exclusive deals to celebrate our anniversary.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=108+Heritage+Lane,+Khamgaon,+Maharashtra',
    services: ['Antique Restoration', 'Custom Orders', 'Free Delivery'],
    faqs: [
      {
        question: 'Do you restore antique furniture?',
        answer: 'Yes, we offer restoration services for antique pieces.',
      },
      {
        question: 'Can I book a consultation?',
        answer: 'Yes, consultations can be scheduled via our contact form.',
      },
    ],
    owner: {
      name: 'Ms. Nisha Verma',
      position: 'Director',
      bio: 'Ms. Nisha Verma has a passion for preserving heritage through furniture design.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for lovers of classic furniture!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    certifications: ['ISO 9001 Certified'],
    pricing: [
      {
        service: 'Antique Chair',
        price: '₹25,000 - ₹70,000',
      },
      {
        service: 'Oak Dining Set',
        price: '₹30,000 - ₹80,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 25,
    name: 'Urban Nest',
    description: 'Stylish and functional furniture for modern urban living.',
    category: 'furniture',
    address: '109 Urban Nest Street, Khamgaon, Maharashtra, India',
    phone: ['9123456814'],
    email: 'info@urbannest.com',
    operatingHours: {
      monday_to_saturday: '9:00 AM - 9:00 PM',
      sunday: '10:00 AM - 6:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    ratings: 4.6,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Modern designs that fit perfectly in my apartment.',
      },
      {
        user: 'Kumar Patel',
        rating: 4,
        comment: 'Great quality and timely delivery.',
      },
    ],
    specialOffers: [
      {
        title: 'Summer Refresh Sale',
        description: 'Refresh your home with our summer discounts.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=109+Urban+Nest+Street,+Khamgaon,+Maharashtra',
    services: ['Interior Design', 'Customization', 'Express Delivery'],
    faqs: [
      {
        question: 'Do you offer interior design services?',
        answer: 'Yes, our experts can help design your space.',
      },
      {
        question: 'What is the delivery time?',
        answer: 'Standard delivery takes 2-4 weeks.',
      },
    ],
    owner: {
      name: 'Mr. Amit Verma',
      position: 'Founder & CEO',
      bio: 'Mr. Amit Verma is dedicated to creating functional and stylish living spaces.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for modern furniture shoppers.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    certifications: ['Certified Interior Designer'],
    pricing: [
      {
        service: 'Modular Sofa',
        price: '₹22,000 - ₹60,000',
      },
      {
        service: 'Coffee Table',
        price: '₹9,000 - ₹28,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 26,
    name: 'Home Essentials',
    description: 'Essential furniture pieces for a comfortable home.',
    category: 'furniture',
    address: '110 Essentials Road, Khamgaon, Maharashtra, India',
    phone: ['9123456815'],
    email: 'contact@homeessentials.com',
    operatingHours: {
      monday_to_saturday: '8:00 AM - 8:00 PM',
      sunday: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    ratings: 4.4,
    reviews: [
      {
        user: 'Rahul Desai',
        rating: 5,
        comment: 'Affordable prices and good quality furniture.',
      },
      {
        user: 'Sonia Kapoor',
        rating: 4,
        comment: 'Great selection for essentials.',
      },
    ],
    specialOffers: [
      {
        title: 'Bulk Purchase Discount',
        description: 'Special discounts on bulk furniture purchases.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=110+Essentials+Road,+Khamgaon,+Maharashtra',
    services: ['Bulk Orders', 'Delivery', 'Installation'],
    faqs: [
      {
        question: 'Do you offer bulk purchase discounts?',
        answer: 'Yes, discounts are available for bulk orders.',
      },
      {
        question: 'Is installation included?',
        answer: 'Yes, free installation is provided for all furniture.',
      },
    ],
    owner: {
      name: 'Ms. Tina Sharma',
      position: 'Sales Manager',
      bio: 'Ms. Tina Sharma has extensive experience in retail and customer service.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for affordable home essentials!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1549187774-b4b8a3f4283c',
    ],
    certifications: ['ISO 14001 Certified'],
    pricing: [
      {
        service: 'Bed Frame',
        price: '₹12,000 - ₹40,000',
      },
      {
        service: 'Wardrobe',
        price: '₹14,000 - ₹35,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 27,
    name: 'Luxury Home Decor',
    description: 'Premium furniture and decor to elevate your living spaces.',
    category: 'furniture',
    address: '111 Luxury Lane, Khamgaon, Maharashtra, India',
    phone: ['9123456816'],
    email: 'sales@luxuryhomedecor.com',
    operatingHours: {
      monday_to_saturday: '10:00 AM - 9:00 PM',
      sunday: '11:00 AM - 7:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1550824738-43e5eaa3e0be',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Luxurious designs and top-notch quality.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Beautiful pieces, but delivery was a bit slow.',
      },
    ],
    specialOffers: [
      {
        title: 'Exclusive New Arrivals',
        description: 'First look at our latest furniture collections.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=111+Luxury+Lane,+Khamgaon,+Maharashtra',
    services: ['Design Consultation', 'Customization', 'Premium Delivery'],
    faqs: [
      {
        question: 'Do you offer design consultations?',
        answer: 'Yes, our designers are available for personalized consultations.',
      },
      {
        question: 'What is the warranty period?',
        answer: 'All products come with a one-year warranty.',
      },
    ],
    owner: {
      name: 'Mr. Rohan Mehta',
      position: 'Founder & CEO',
      bio: 'Mr. Rohan Mehta is passionate about luxury interior design and furniture.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for high-end furniture shoppers.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1550824738-43e5eaa3e0be',
    ],
    certifications: ['Certified Interior Designer'],
    pricing: [
      {
        service: 'Luxury Sofa',
        price: '₹30,000 - ₹100,000',
      },
      {
        service: 'Designer Wardrobe',
        price: '₹25,000 - ₹80,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 28,
    name: 'Voyage Automotives',
    description: 'Reliable automotive services and quality vehicle parts.',
    category: 'automotive',
    address: '112 Motorway, Khamgaon, Maharashtra, India',
    phone: ['9123456817'],
    email: 'contact@voyageautomotives.com',
    operatingHours: {
      monday_to_saturday: '8:00 AM - 7:00 PM',
      sunday: '9:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    ],
    ratings: 4.5,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Fast and reliable service.',
      },
      {
        user: 'Kumar Patel',
        rating: 4,
        comment: 'Good prices and quality parts.',
      },
    ],
    specialOffers: [
      {
        title: 'Summer Maintenance Package',
        description: 'Comprehensive vehicle checkup at discounted rates.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=112+Motorway,+Khamgaon,+Maharashtra',
    services: ['Repairs', 'Maintenance', 'Parts Sales'],
    faqs: [
      {
        question: 'Do you offer emergency repairs?',
        answer: 'Yes, emergency repair services are available 24/7.',
      },
      {
        question: 'Can I book an appointment online?',
        answer: 'Yes, appointments can be booked through our website.',
      },
    ],
    owner: {
      name: 'Mr. Rajeev Kumar',
      position: 'Owner & Lead Mechanic',
      bio: 'Mr. Rajeev Kumar has over 20 years of experience in automotive services.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for all automotive needs!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    ],
    certifications: ['ASE Certified', 'ISO 9001 Certified'],
    pricing: [
      {
        service: 'Engine Repair',
        price: '₹25,000 - ₹100,000',
      },
      {
        service: 'Brake Replacement',
        price: '₹5,000 - ₹20,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 29,
    name: 'AutoCare Hub',
    description: 'Comprehensive automotive services for all vehicle types.',
    category: 'automotive',
    address: '113 Auto Plaza, Khamgaon, Maharashtra, India',
    phone: ['9123456818'],
    email: 'info@autocarehub.com',
    operatingHours: {
      monday_to_saturday: '7:00 AM - 8:00 PM',
      sunday: '8:00 AM - 6:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1514525253161-7a40d515f9be',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Professional staff and timely service.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Great services, but the waiting area could be improved.',
      },
    ],
    specialOffers: [
      {
        title: 'Winter Service Discount',
        description: 'Get 15% off on all maintenance services during winter.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=113+Auto+Plaza,+Khamgaon,+Maharashtra',
    services: ['Oil Change', 'Tire Services', 'Battery Replacement'],
    faqs: [
      {
        question: 'Do you offer roadside assistance?',
        answer: 'Yes, roadside assistance is available 24/7.',
      },
      {
        question: 'What brands do you service?',
        answer: 'We service all major automotive brands.',
      },
    ],
    owner: {
      name: 'Ms. Neha Gupta',
      position: 'Manager',
      bio: 'Ms. Neha Gupta oversees daily operations with a focus on customer satisfaction.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for all automotive needs.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514525253161-7a40d515f9be',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    ],
    certifications: ['Certified Automotive Technician'],
    pricing: [
      {
        service: 'Oil Change',
        price: '₹1,500 - ₹3,000',
      },
      {
        service: 'Tire Replacement',
        price: '₹5,000 - ₹20,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 30,
    name: 'Prime Motors',
    description: 'Leading automotive dealership offering a wide range of vehicles.',
    category: 'automotive',
    address: '114 Prime Street, Khamgaon, Maharashtra, India',
    phone: ['9123456819'],
    email: 'sales@primemotors.com',
    operatingHours: {
      monday_to_saturday: '10:00 AM - 8:00 PM',
      sunday: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1518045417-8f12b8cce604',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Wide selection of vehicles and excellent customer support.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Purchased my dream car here. Highly recommended!',
      },
    ],
    specialOffers: [
      {
        title: 'New Year Deal',
        description: 'Special financing options available for new car purchases.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=114+Prime+Street,+Khamgaon,+Maharashtra',
    services: ['Sales', 'Financing', 'After-Sales Service'],
    faqs: [
      {
        question: 'Do you offer test drives?',
        answer: 'Yes, test drives can be scheduled through our website.',
      },
      {
        question: 'Can I trade in my old vehicle?',
        answer: 'Yes, we accept trade-ins with competitive offers.',
      },
    ],
    owner: {
      name: 'Mr. Rohan Singh',
      position: 'Sales Director',
      bio: 'Mr. Rohan Singh leads the sales team with a focus on customer satisfaction.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for anyone looking to buy a new vehicle!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518045417-8f12b8cce604',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    ],
    certifications: ['Authorized Dealer'],
    pricing: [
      {
        service: 'Sedan',
        price: '₹10,00,000 - ₹25,00,000',
      },
      {
        service: 'SUV',
        price: '₹15,00,000 - ₹35,00,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 31,
    name: 'AutoZone',
    description: 'Your trusted partner for all automotive parts and accessories.',
    category: 'automotive',
    address: '115 Parts Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456820'],
    email: 'support@autozone.com',
    operatingHours: {
      monday_to_saturday: '9:00 AM - 7:00 PM',
      sunday: '10:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1518045417-8f12b8cce604',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    ],
    ratings: 4.6,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Excellent range of parts and prompt delivery.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Good prices and knowledgeable staff.',
      },
    ],
    specialOffers: [
      {
        title: 'Bulk Purchase Discount',
        description: 'Get discounts on bulk orders of automotive parts.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=115+Parts+Avenue,+Khamgaon,+Maharashtra',
    services: ['Parts Sales', 'Installation Services', 'Technical Support'],
    faqs: [
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, international shipping is available.',
      },
      {
        question: 'Can I return defective parts?',
        answer: 'Yes, defective parts can be returned within 15 days.',
      },
    ],
    owner: {
      name: 'Ms. Neha Gupta',
      position: 'Operations Manager',
      bio: 'Ms. Neha Gupta oversees operations ensuring quality and customer satisfaction.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for all automotive part needs.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518045417-8f12b8cce604',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    ],
    certifications: ['ISO 9001 Certified'],
    pricing: [
      {
        service: 'Brake Pads',
        price: '₹1,500 - ₹5,000',
      },
      {
        service: 'Air Filters',
        price: '₹800 - ₹2,000',
      },
    ],
    contactForm: true,
  },
  // Category: Pet Services
  {
    id: 32,
    name: 'Happy Paws Pet Care',
    description: 'Comprehensive pet care services including grooming and boarding.',
    category: 'pet-services',
    address: '116 Pet Lane, Khamgaon, Maharashtra, India',
    phone: ['9123456821'],
    email: 'info@happypawspetcare.com',
    operatingHours: {
      monday_to_saturday: '8:00 AM - 8:00 PM',
      sunday: '9:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a',
      'https://images.unsplash.com/photo-1558788353-f76d92427f16',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Exceptional care for my pets. Highly recommended!',
      },
      {
        user: 'Kumar Patel',
        rating: 4,
        comment: 'Great services, but the boarding area could be larger.',
      },
    ],
    specialOffers: [
      {
        title: 'First-Time Grooming Discount',
        description: 'Get 20% off on your first grooming session.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=116+Pet+Lane,+Khamgaon,+Maharashtra',
    services: ['Grooming', 'Boarding', 'Veterinary Services'],
    faqs: [
      {
        question: 'Do you provide veterinary services?',
        answer: 'Yes, our in-house veterinarians are available for consultations.',
      },
      {
        question: 'Can I visit my pet while boarding?',
        answer: 'Yes, visiting hours are available for pet owners.',
      },
    ],
    owner: {
      name: 'Ms. Riya Sharma',
      position: 'Owner & Lead Groomer',
      bio: 'Ms. Riya Sharma is passionate about pet care with over 10 years of experience.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for all pet care needs!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a',
      'https://images.unsplash.com/photo-1558788353-f76d92427f16',
    ],
    certifications: ['Certified Pet Groomer'],
    pricing: [
      {
        service: 'Dog Grooming',
        price: '₹1,000 - ₹3,000',
      },
      {
        service: 'Cat Boarding',
        price: '₹800 - ₹2,500 per day',
      },
    ],
    contactForm: true,
  },
  {
    id: 33,
    name: 'Paws & Claws Veterinary Clinic',
    description: 'Professional veterinary services for your beloved pets.',
    category: 'pet-services',
    address: '117 Veterinary Street, Khamgaon, Maharashtra, India',
    phone: ['9123456822'],
    email: 'contact@pawsclawsvet.com',
    operatingHours: {
      monday_to_saturday: '7:00 AM - 7:00 PM',
      sunday: '8:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Highly skilled veterinarians and compassionate staff.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 5,
        comment: 'My pets are always well taken care of here.',
      },
    ],
    specialOffers: [
      {
        title: 'Vaccination Campaign',
        description: 'Free vaccinations for pets during the campaign period.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=117+Veterinary+Street,+Khamgaon,+Maharashtra',
    services: ['Vaccinations', 'Surgery', 'Dental Care'],
    faqs: [
      {
        question: 'Do you offer emergency services?',
        answer: 'Yes, emergency services are available 24/7.',
      },
      {
        question: 'Can I schedule regular check-ups?',
        answer: 'Yes, regular check-ups can be scheduled through our online system.',
      },
    ],
    owner: {
      name: 'Dr. Anjali Verma',
      position: 'Lead Veterinarian',
      bio: 'Dr. Anjali Verma is dedicated to animal health with over 12 years of experience.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for all veterinary needs.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    certifications: ['Certified Veterinary Surgeon'],
    pricing: [
      {
        service: 'General Consultation',
        price: '₹500 - ₹1500',
      },
      {
        service: 'Surgery',
        price: '₹10,000 - ₹50,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 34,
    name: 'Furry Friends Grooming',
    description: 'Professional grooming services for dogs and cats.',
    category: 'pet-services',
    address: '118 Grooming Lane, Khamgaon, Maharashtra, India',
    phone: ['9123456823'],
    email: 'info@furryfriendsgrooming.com',
    operatingHours: {
      monday_to_saturday: '8:00 AM - 6:00 PM',
      sunday: '9:00 AM - 4:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'My dog looks fantastic after every visit!',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Great service and friendly staff.',
      },
    ],
    specialOffers: [
      {
        title: 'Summer Grooming Package',
        description: 'Special packages for summer grooming needs.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=118+Grooming+Lane,+Khamgaon,+Maharashtra',
    services: ['Bathing', 'Haircut', 'Nail Trimming'],
    faqs: [
      {
        question: 'Do you handle aggressive dogs?',
        answer: 'Yes, our groomers are trained to handle all temperaments.',
      },
      {
        question: 'Can I bring my cat for grooming?',
        answer: 'Yes, we offer grooming services for both dogs and cats.',
      },
    ],
    owner: {
      name: 'Ms. Tina Deshmukh',
      position: 'Grooming Specialist',
      bio: 'Ms. Tina Deshmukh is a certified groomer with a love for animals.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for quality pet grooming services!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    certifications: ['Certified Pet Groomer'],
    pricing: [
      {
        service: 'Dog Bath',
        price: '₹700 - ₹1,500',
      },
      {
        service: 'Cat Grooming',
        price: '₹600 - ₹1,200',
      },
    ],
    contactForm: true,
  },
  {
    id: 35,
    name: 'Pet Paradise Boarding',
    description: 'Safe and comfortable boarding facilities for your pets.',
    category: 'pet-services',
    address: '119 Paradise Road, Khamgaon, Maharashtra, India',
    phone: ['9123456824'],
    email: 'contact@petparadise.com',
    operatingHours: {
      monday_to_saturday: '24/7',
      sunday: '24/7',
    },
    images: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Peace of mind knowing my pet is well cared for.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Exceptional facilities and friendly staff.',
      },
    ],
    specialOffers: [
      {
        title: 'Off-Season Discount',
        description: 'Get 15% off on boarding during off-peak seasons.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=119+Paradise+Road,+Khamgaon,+Maharashtra',
    services: ['Boarding', 'Daycare', 'Playtime'],
    faqs: [
      {
        question: 'Do you have trained staff?',
        answer: 'Yes, all our staff are trained in animal care.',
      },
      {
        question: 'Can I visit my pet during boarding?',
        answer: 'Yes, visiting hours are available upon request.',
      },
    ],
    owner: {
      name: 'Ms. Sneha Gupta',
      position: 'Owner & Manager',
      bio: 'Ms. Sneha Gupta ensures the highest standards of pet care.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for my pets to stay!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    certifications: ['Certified Pet Care Provider'],
    pricing: [
      {
        service: 'Standard Boarding',
        price: '₹1,000 per day',
      },
      {
        service: 'Premium Boarding',
        price: '₹1,500 per day',
      },
    ],
    contactForm: true,
  },
  {
    id: 36,
    name: 'Purrfect Paws Clinic',
    description: 'Expert veterinary care for your feline friends.',
    category: 'pet-services',
    address: '120 Paws Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456825'],
    email: 'info@purrfectpaws.com',
    operatingHours: {
      monday_to_saturday: '8:00 AM - 6:00 PM',
      sunday: '9:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    ratings: 5.0,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'The best clinic for my cat. Highly skilled veterinarians.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 5,
        comment: 'Exceptional care and gentle handling of pets.',
      },
    ],
    specialOffers: [
      {
        title: 'Kitten Vaccination Drive',
        description: 'Free vaccinations for kittens under 6 months.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=120+Paws+Avenue,+Khamgaon,+Maharashtra',
    services: ['Vaccinations', 'Health Check-ups', 'Surgery'],
    faqs: [
      {
        question: 'Do you handle emergency cases?',
        answer: 'Yes, emergency consultations are available.',
      },
      {
        question: 'Can I schedule regular check-ups?',
        answer: 'Yes, regular health check-ups can be scheduled online.',
      },
    ],
    owner: {
      name: 'Dr. Maya Menon',
      position: 'Lead Veterinarian',
      bio: 'Dr. Maya Menon specializes in feline health and wellness.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit clinic for all cat owners!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    certifications: ['Certified Feline Veterinarian'],
    pricing: [
      {
        service: 'Feline Vaccination',
        price: '₹800 - ₹1,500',
      },
      {
        service: 'Dental Cleaning',
        price: '₹2,000 - ₹5,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 37,
    name: 'Canine Corner',
    description: 'Dedicated grooming and training services for dogs.',
    category: 'pet-services',
    address: '121 Canine Street, Khamgaon, Maharashtra, India',
    phone: ['9123456826'],
    email: 'contact@caninecorner.com',
    operatingHours: {
      monday_to_saturday: '7:00 AM - 7:00 PM',
      sunday: '8:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'My dog always looks great after a visit here.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Excellent training programs. Highly effective!',
      },
    ],
    specialOffers: [
      {
        title: 'Summer Grooming Special',
        description: 'Free nail trimming with every grooming session.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=121+Canine+Street,+Khamgaon,+Maharashtra',
    services: ['Grooming', 'Training', 'Daycare'],
    faqs: [
      {
        question: 'Do you offer training for aggressive dogs?',
        answer: 'Yes, specialized training programs are available.',
      },
      {
        question: 'Can I observe the grooming process?',
        answer: 'Yes, observation is welcome during grooming sessions.',
      },
    ],
    owner: {
      name: 'Mr. Arjun Sharma',
      position: 'Grooming Specialist',
      bio: 'Mr. Arjun Sharma is a certified dog trainer with a passion for animal behavior.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for dog grooming and training.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    certifications: ['Certified Dog Trainer', 'Health Department Approved'],
    pricing: [
      {
        service: 'Dog Grooming',
        price: '₹1,200 - ₹3,000',
      },
      {
        service: 'Obedience Training',
        price: '₹2,500 - ₹5,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 38,
    name: 'Feline Fine',
    description: 'Premium grooming services tailored for cats.',
    category: 'pet-services',
    address: '122 Feline Lane, Khamgaon, Maharashtra, India',
    phone: ['9123456827'],
    email: 'info@felinefine.com',
    operatingHours: {
      monday_to_saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 4:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'My cat feels comfortable and looks stunning after grooming.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Professional staff and gentle handling.',
      },
    ],
    specialOffers: [
      {
        title: 'Kitten First Groom',
        description: 'Free grooming session for first-time kitten grooming.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=122+Feline+Lane,+Khamgaon,+Maharashtra',
    services: ['Bathing', 'Hair Trimming', 'Feline Massage'],
    faqs: [
      {
        question: 'Do you handle aggressive cats?',
        answer: 'Yes, our groomers are trained to handle all temperaments.',
      },
      {
        question: 'Can I schedule a grooming session online?',
        answer: 'Yes, bookings can be made through our website.',
      },
    ],
    owner: {
      name: 'Ms. Sneha Verma',
      position: 'Grooming Manager',
      bio: 'Ms. Sneha Verma specializes in feline grooming techniques.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for all cat grooming needs.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    ],
    certifications: ['Certified Cat Groomer'],
    pricing: [
      {
        service: 'Cat Bath',
        price: '₹800 - ₹2,000',
      },
      {
        service: 'Hair Trimming',
        price: '₹1,000 - ₹2,500',
      },
    ],
    contactForm: true,
  },

  // Category: Financial Services
  {
    id: 39,
    name: 'SecureBank Financial Services',
    description: 'Comprehensive financial solutions for individuals and businesses.',
    category: 'financial-services',
    address: '123 Finance Street, Khamgaon, Maharashtra, India',
    phone: ['9123456828'],
    email: 'contact@securebank.com',
    operatingHours: {
      monday_to_friday: '9:00 AM - 5:00 PM',
      weekends: '10:00 AM - 2:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Excellent financial advice and customer service.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 5,
        comment: 'Reliable and trustworthy financial partners.',
      },
    ],
    specialOffers: [
      {
        title: 'New Account Bonus',
        description: 'Get a ₹5,000 bonus when you open a new savings account.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=123+Finance+Street,+Khamgaon,+Maharashtra',
    services: ['Personal Loans', 'Investment Planning', 'Retirement Services'],
    faqs: [
      {
        question: 'What types of loans do you offer?',
        answer: 'We offer personal, home, and business loans.',
      },
      {
        question: 'Do you provide investment advice?',
        answer: 'Yes, our financial advisors assist with tailored investment plans.',
      },
    ],
    owner: {
      name: 'Mr. Rakesh Kumar',
      position: 'Chief Financial Officer',
      bio: 'Mr. Rakesh Kumar has over 25 years of experience in financial management.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for all financial needs.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    certifications: ['Certified Financial Planner', 'ISO 9001 Certified'],
    pricing: [
      {
        service: 'Personal Loan',
        price: '₹50,000 - ₹5,00,000',
      },
      {
        service: 'Investment Planning',
        price: '₹1,000 - ₹10,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 40,
    name: 'WealthWise Investments',
    description: 'Strategic investment solutions to grow your wealth.',
    category: 'financial-services',
    address: '124 Wealth Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456829'],
    email: 'info@wealthwise.com',
    operatingHours: {
      monday_to_friday: '10:00 AM - 6:00 PM',
      weekends: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Outstanding investment strategies and excellent support.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Highly knowledgeable and reliable advisors.',
      },
    ],
    specialOffers: [
      {
        title: 'Free Consultation',
        description: 'Get a free investment consultation for new clients.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=124+Wealth+Avenue,+Khamgaon,+Maharashtra',
    services: ['Mutual Funds', 'Stock Trading', 'Retirement Planning'],
    faqs: [
      {
        question: 'What investment products do you offer?',
        answer: 'We offer mutual funds, stocks, bonds, and retirement plans.',
      },
      {
        question: 'Do you provide online investment tracking?',
        answer: 'Yes, our platform allows you to track your investments in real-time.',
      },
    ],
    owner: {
      name: 'Ms. Neha Gupta',
      position: 'Investment Director',
      bio: 'Ms. Neha Gupta is a certified investment advisor with a focus on sustainable investing.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for strategic investment planning!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    certifications: ['Certified Financial Planner'],
    pricing: [
      {
        service: 'Mutual Fund Consultation',
        price: '₹1,500 - ₹4,000',
      },
      {
        service: 'Retirement Planning',
        price: '₹3,000 - ₹10,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 41,
    name: 'InvestSmart Solutions',
    description: 'Innovative financial solutions for modern investors.',
    category: 'financial-services',
    address: '125 Smart Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456830'],
    email: 'contact@investsmart.com',
    operatingHours: {
      monday_to_friday: '9:00 AM - 5:00 PM',
      weekends: '10:00 AM - 4:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Innovative solutions that truly benefit investors.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 4,
        comment: 'Great services with personalized attention.',
      },
    ],
    specialOffers: [
      {
        title: 'Referral Bonus',
        description: 'Refer a friend and earn ₹2,000 towards your next investment.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=125+Smart+Avenue,+Khamgaon,+Maharashtra',
    services: ['Portfolio Management', 'Financial Advisory', 'Estate Planning'],
    faqs: [
      {
        question: 'What is portfolio management?',
        answer: 'We manage your investment portfolio to maximize returns and minimize risks.',
      },
      {
        question: 'Do you offer estate planning?',
        answer: 'Yes, we provide comprehensive estate planning services.',
      },
    ],
    owner: {
      name: 'Mr. Rohan Singh',
      position: 'Chief Investment Officer',
      bio: 'Mr. Rohan Singh specializes in portfolio management and financial strategies.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for all financial needs.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    certifications: ['Certified Financial Analyst'],
    pricing: [
      {
        service: 'Portfolio Management',
        price: '₹5,000 - ₹50,000',
      },
      {
        service: 'Estate Planning',
        price: '₹10,000 - ₹40,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 42,
    name: 'FinanceForward',
    description: 'Empowering your financial future with expert guidance.',
    category: 'financial-services',
    address: '126 Forward Street, Khamgaon, Maharashtra, India',
    phone: ['9123456831'],
    email: 'info@financeforward.com',
    operatingHours: {
      monday_to_friday: '8:00 AM - 6:00 PM',
      weekends: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Exceptional financial planning services.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Highly knowledgeable and trustworthy advisors.',
      },
    ],
    specialOffers: [
      {
        title: 'Free Financial Assessment',
        description: 'Get a free assessment of your financial health.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=126+Forward+Street,+Khamgaon,+Maharashtra',
    services: ['Retirement Planning', 'Tax Advisory', 'Investment Strategies'],
    faqs: [
      {
        question: 'What is retirement planning?',
        answer: 'We help you plan and save for a comfortable retirement.',
      },
      {
        question: 'Do you offer tax advisory?',
        answer: 'Yes, our experts provide comprehensive tax advisory services.',
      },
    ],
    owner: {
      name: 'Ms. Neha Gupta',
      position: 'Senior Financial Advisor',
      bio: 'Ms. Neha Gupta is dedicated to helping clients achieve financial independence.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for strategic financial planning!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    certifications: ['Certified Tax Advisor'],
    pricing: [
      {
        service: 'Retirement Planning',
        price: '₹7,000 - ₹25,000',
      },
      {
        service: 'Investment Strategy',
        price: '₹5,000 - ₹20,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 43,
    name: 'Elite Financial Group',
    description: 'Premium financial services for discerning clients.',
    category: 'financial-services',
    address: '127 Elite Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456832'],
    email: 'support@elitefinancial.com',
    operatingHours: {
      monday_to_friday: '9:00 AM - 5:00 PM',
      weekends: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Top-notch financial services with personalized attention.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 5,
        comment: 'Highly recommend for all financial needs.',
      },
    ],
    specialOffers: [
      {
        title: 'VIP Membership',
        description: 'Exclusive benefits for VIP members.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=127+Elite+Avenue,+Khamgaon,+Maharashtra',
    services: ['Wealth Management', 'Private Banking', 'Estate Planning'],
    faqs: [
      {
        question: 'What is wealth management?',
        answer: 'Comprehensive financial services to grow and protect your wealth.',
      },
      {
        question: 'Do you offer private banking?',
        answer: 'Yes, tailored banking services for high-net-worth individuals.',
      },
    ],
    owner: {
      name: 'Mr. Rohan Singh',
      position: 'Managing Director',
      bio: 'Mr. Rohan Singh leads the team with a focus on excellence and client satisfaction.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for premium financial services.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    certifications: ['Certified Wealth Manager'],
    pricing: [
      {
        service: 'Wealth Management',
        price: '₹20,000 - ₹1,00,000',
      },
      {
        service: 'Estate Planning',
        price: '₹15,000 - ₹50,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 44,
    name: 'Future Finance',
    description: 'Innovative financial solutions for the modern era.',
    category: 'financial-services',
    address: '128 Future Road, Khamgaon, Maharashtra, India',
    phone: ['9123456833'],
    email: 'info@futurefinance.com',
    operatingHours: {
      monday_to_friday: '8:00 AM - 6:00 PM',
      weekends: '9:00 AM - 5:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    ratings: 4.7,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Forward-thinking financial solutions tailored to my needs.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Exceptional service and innovative products.',
      },
    ],
    specialOffers: [
      {
        title: 'Early Bird Investment',
        description: 'Exclusive rates for early investors.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=128+Future+Road,+Khamgaon,+Maharashtra',
    services: ['Digital Banking', 'Investment Funds', 'Savings Plans'],
    faqs: [
      {
        question: 'What is digital banking?',
        answer: 'Convenient banking services accessible online and via mobile apps.',
      },
      {
        question: 'Do you offer high-yield savings accounts?',
        answer: 'Yes, we offer several high-yield savings options.',
      },
    ],
    owner: {
      name: 'Ms. Neha Gupta',
      position: 'Chief Technology Officer',
      bio: 'Ms. Neha Gupta integrates technology with financial services for better client experiences.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for modern financial solutions!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    certifications: ['Certified Digital Banker'],
    pricing: [
      {
        service: 'Investment Fund',
        price: '₹10,000 - ₹2,00,000',
      },
      {
        service: 'Savings Plan',
        price: '₹5,000 - ₹1,00,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 45,
    name: 'Golden Age Investments',
    description: 'Trusted financial advisors for a prosperous future.',
    category: 'financial-services',
    address: '129 Golden Avenue, Khamgaon, Maharashtra, India',
    phone: ['9123456834'],
    email: 'contact@goldenageinvestments.com',
    operatingHours: {
      monday_to_friday: '9:00 AM - 5:00 PM',
      weekends: '10:00 AM - 4:00 PM',
    },
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    ratings: 4.9,
    reviews: [
      {
        user: 'Suresh Patel',
        rating: 5,
        comment: 'Incredible insights and excellent financial planning.',
      },
      {
        user: 'Lakshmi Rao',
        rating: 5,
        comment: 'Highly recommend for comprehensive investment services.',
      },
    ],
    specialOffers: [
      {
        title: 'Referral Program',
        description: 'Refer a client and earn attractive bonuses.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=129+Golden+Avenue,+Khamgaon,+Maharashtra',
    services: ['Financial Planning', 'Investment Advisory', 'Tax Planning'],
    faqs: [
      {
        question: 'What is financial planning?',
        answer: 'Strategizing your finances to achieve your life goals.',
      },
      {
        question: 'Do you offer tax planning services?',
        answer: 'Yes, we provide expert tax planning to maximize savings.',
      },
    ],
    owner: {
      name: 'Mr. Rohan Singh',
      position: 'Chief Financial Advisor',
      bio: 'Mr. Rohan Singh is dedicated to helping clients achieve financial prosperity.',
    },
    testimonials: [
      {
        user: 'Priya Kapoor',
        comment: 'A delightful place for all financial needs.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    certifications: ['Certified Financial Planner'],
    pricing: [
      {
        service: 'Financial Planning',
        price: '₹8,000 - ₹30,000',
      },
      {
        service: 'Tax Planning',
        price: '₹5,000 - ₹20,000',
      },
    ],
    contactForm: true,
  },
  {
    id: 46,
    name: 'Capital Growth Advisors',
    description: 'Expert advice for growth-oriented investments.',
    category: 'financial-services',
    address: '130 Growth Street, Khamgaon, Maharashtra, India',
    phone: ['9123456835'],
    email: 'info@capitalgrowth.com',
    operatingHours: {
      monday_to_friday: '8:00 AM - 6:00 PM',
      weekends: 'Closed',
    },
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    ratings: 4.8,
    reviews: [
      {
        user: 'Anita Sharma',
        rating: 5,
        comment: 'Outstanding investment strategies and excellent support.',
      },
      {
        user: 'Kumar Patel',
        rating: 5,
        comment: 'Highly knowledgeable and reliable advisors.',
      },
    ],
    specialOffers: [
      {
        title: 'Investment Starter Kit',
        description: 'Free consultation for new investors.',
      },
    ],
    locationMap: 'https://maps.google.com/?q=130+Growth+Street,+Khamgaon,+Maharashtra',
    services: ['Wealth Management', 'Portfolio Analysis', 'Retirement Planning'],
    faqs: [
      {
        question: 'What is portfolio analysis?',
        answer: 'Assessing your investment portfolio to optimize performance.',
      },
      {
        question: 'Do you offer retirement planning?',
        answer: 'Yes, comprehensive plans tailored to your retirement goals.',
      },
    ],
    owner: {
      name: 'Ms. Neha Gupta',
      position: 'Senior Advisor',
      bio: 'Ms. Neha Gupta specializes in wealth management and portfolio optimization.',
    },
    testimonials: [
      {
        user: 'Vivek Desai',
        comment: 'A must-visit for strategic investment planning!',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    ],
    certifications: ['Certified Investment Manager'],
    pricing: [
      {
        service: 'Wealth Management',
        price: '₹10,000 - ₹1,20,000',
      },
      {
        service: 'Portfolio Analysis',
        price: '₹3,000 - ₹15,000',
      },
    ],
    contactForm: true,
  },


];

export default businesses;