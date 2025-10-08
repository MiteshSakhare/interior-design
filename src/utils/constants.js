// App Configuration
export const APP_CONFIG = {
  name: 'AP Interior Hub',
  version: '1.0.0',
  description: 'AP Interior Hub - Design & Construction, Consulting, Interior Material Supplier, Wholesale & Retail',
  author: 'ER. AKSHAY PIMPALE',
  email: 'apdesignandconstruction1@gmail.com',
  phone: '+919175899989',
  address: {
    street: 'Warehouse no 8, Burudgaon rd, Near Bhoslay Lawns',
    city: 'Ahmednagar',
    state: 'Maharashtra',
    zip: '414001',
    country: 'India'
  }
};

// NEW: Centralized Company Contact Information from the business card
export const COMPANY_CONTACT_INFO = {
  owner: "ER. AKSHAY PIMPALE",
  phoneNumbers: ["8087999989", "9175899989"],
  email: "apdesignandconstruction1@gmail.com",
  instagram: "ap_design_construction",
  address: "Warehouse no 8, Burudgaon rd, Near Bhoslay Lawns, Ahmednagar 414001",
  googleMapsLink: "https://maps.google.com/?q=Burudgaon+rd,+Near+Bhoslay+Lawns,+Ahmednagar+414001", // Example link - replace with actual
  whatsappNumber: "918087999989", // Format with country code for wa.me links
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/', exact: true },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

// Service Categories
export const SERVICE_CATEGORIES = [
  'Residential Design',
  'Commercial Design',
  'Office Design',
  'Restaurant Design',
  'Hotel Design',
  'Retail Design',
  'Space Planning',
  '3D Visualization',
  'Color Consultation',
  'Lighting Design',
  'Furniture Selection',
  'Sustainable Design'
];

// Project Categories
export const PROJECT_CATEGORIES = [
  'All',
  'Residential',
  'Commercial',
  'Office',
  'Restaurant',
  'Hotel',
  'Retail'
];

// Services Data
export const SERVICES_DATA = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'Complete home interior design solutions tailored to your lifestyle and preferences.',
    features: [
      'Space planning and layout',
      'Color scheme development',
      'Furniture selection and placement',
      '3D visualization and renderings',
      'Project management and coordination'
    ],
    price: '20,000',
    popular: true
  },
  {
    id: 2,
    title: 'Commercial Design',
    description: 'Professional commercial spaces that enhance productivity and brand image.',
    features: [
      'Brand-aligned design concepts',
      'Ergonomic workspace planning',
      'Lighting and acoustics optimization',
      'Material and finish selection',
      'Code compliance assurance'
    ],
    price: '50,000'
  },
  {
    id: 3,
    title: 'Space Planning',
    description: 'Optimize your space utilization with expert planning and layout design.',
    features: [
      'Traffic flow analysis',
      'Functional zone planning',
      'Storage optimization',
      'Accessibility considerations',
      'Future flexibility planning'
    ],
    price: '15,000'
  },
  {
    id: 4,
    title: '3D Visualization',
    description: 'Bring your design ideas to life with photorealistic 3D renderings.',
    features: [
      'Photorealistic renderings',
      'Virtual reality experiences',
      'Multiple design options',
      'Material and lighting simulation',
      'Interactive walkthroughs'
    ],
    price: '8,000'
  },
  {
    id: 5,
    title: 'Color Consultation',
    description: 'Expert color advice to create the perfect atmosphere for your space.',
    features: [
      'Color psychology application',
      'Mood board creation',
      'Paint and finish recommendations',
      'Lighting impact analysis',
      'Seasonal color variations'
    ],
    price: '4,000'
  },
  {
    id: 6,
    title: 'Lighting Design',
    description: 'Comprehensive lighting solutions for ambiance, functionality, and efficiency.',
    features: [
      'Natural light optimization',
      'Artificial lighting planning',
      'Smart lighting integration',
      'Energy efficiency solutions',
      'Mood and task lighting'
    ],
    price: '12,000'
  }
];

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/interiordesign',
    icon: 'Facebook'
  },
  {
    name: 'Instagram',
    url: `https://instagram.com/${COMPANY_CONTACT_INFO.instagram}`,
    icon: 'Instagram'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/interiordesign',
    icon: 'Twitter'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/interiordesign',
    icon: 'LinkedIn'
  },
  {
    name: 'Pinterest',
    url: 'https://pinterest.com/interiordesign',
    icon: 'Pinterest'
  }
];

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// Form Validation Rules
export const VALIDATION_RULES = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    }
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters'
    }
  },
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters'
    }
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^[\+]?[1-9][\d]{0,15}$/,
      message: 'Invalid phone number'
    }
  }
};

// Theme Colors
export const THEME_COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  }
};

export const CALCULATOR_DATA = {
  propertyTypes: {
    '1BHK': {
      name: '1 BHK',
      rooms: ['Kitchen', 'Living Room', 'Bedroom 1', 'Bathroom 1']
    },
    '2BHK': {
      name: '2 BHK',
      rooms: ['Kitchen', 'Living Room', 'Bedroom 1', 'Bedroom 2', 'Bathroom 1', 'Bathroom 2']
    },
    '3BHK': {
      name: '3 BHK',
      rooms: ['Kitchen', 'Living Room', 'Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Bathroom 1', 'Bathroom 2']
    },
    '4BHK': {
      name: '4 BHK / Villa',
      rooms: ['Kitchen', 'Living Room', 'Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Bedroom 4', 'Bathroom 1', 'Bathroom 2', 'Bathroom 3']
    }
  },
  packages: {
    Essentials: {
      name: 'Essentials',
      description: 'Functional and durable materials for a clean, modern look.',
      multiplier: 1.0,
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80',
      perks: [
        'Standard Quality Materials',
        'Basic False Ceiling',
        'Essential Lighting Fixtures',
        '2 Year Warranty'
      ]
    },
    Premium: {
      name: 'Premium',
      description: 'High-quality materials and finishes for a stylish, elegant space.',
      multiplier: 1.5,
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
      perks: [
        'High-Quality Materials',
        'Designer False Ceiling',
        'Advanced Lighting Fixtures',
        'Branded Fittings',
        '5 Year Warranty'
      ]
    },
    Luxe: {
      name: 'Luxe',
      description: 'Top-of-the-line materials and bespoke finishes for ultimate luxury.',
      multiplier: 2.2,
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80',
      perks: [
        'Luxury & Imported Materials',
        'Bespoke False Ceiling Designs',
        'Smart Lighting & Automation',
        'Premium Branded Fittings',
        '10 Year Warranty'
      ]
    }
  },
  basePrices: {
    Kitchen: 80000,
    'Living Room': 60000,
    'Bedroom 1': 50000,
    'Bedroom 2': 45000,
    'Bedroom 3': 45000,
    'Bedroom 4': 45000,
    'Bathroom 1': 35000,
    'Bathroom 2': 30000,
    'Bathroom 3': 30000
  }
};

export default {
  APP_CONFIG,
  COMPANY_CONTACT_INFO,
  NAV_LINKS,
  SERVICE_CATEGORIES,
  PROJECT_CATEGORIES,
  SERVICES_DATA,
  SOCIAL_LINKS,
  ANIMATION_VARIANTS,
  VALIDATION_RULES,
  THEME_COLORS,
  CALCULATOR_DATA
};