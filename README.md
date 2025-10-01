# 🏠 Interior Design Studio - Professional Web Application

A modern, responsive interior design website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. This professional-grade application showcases interior design services with stunning animations, dark/light mode, and a comprehensive project portfolio.

---

## ✨ Features

### 🎨 Design & UI
- **Modern Glassmorphism Design** with gradient backgrounds
- **Dark/Light Mode Toggle** with smooth transitions
- **Fully Responsive** design for all devices
- **Professional Animations** using Framer Motion
- **Clean Typography** with Google Fonts (Inter & Poppins)

### 🚀 Core Functionality
- **Hero Carousel** with auto-slide and navigation controls
- **Project Gallery** with filtering and grid/list views
- **Service Showcase** with interactive cards and pricing
- **Testimonial Carousel** with client reviews
- **Contact Forms** with validation and error handling
- **Authentication Pages** (Login/Register) with social login UI

### 📱 Technical Features
- **React Router** for seamless navigation
- **Framer Motion** for professional animations
- **React Hook Form** for form validation
- **Material-UI Icons** for consistent iconography
- **Intersection Observer** for scroll-triggered animations
- **Theme Context** for global state management

### 🛡️ Quality & Performance
- **TypeScript Ready** configuration
- **ESLint** for code quality
- **Optimized Images** with lazy loading
- **SEO Optimized** with proper meta tags
- **Accessibility Compliant** with ARIA labels
- **Cross-browser Compatible**

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd interior-design-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Build for Production
``` bash
# Create production build
npm run build

# Preview production build
npm run preview
```


## 📁 Project Structure

``` bash
interior-design-app/
├── public/
│ ├── index.html
│ └── vite.svg
├── src/
│ ├── components/
│ │ ├── layout/ # Navigation, Footer, Layout
│ │ ├── ui/ # Reusable UI components
│ │ ├── sections/ # Page sections
│ │ └── auth/ # Authentication forms
│ ├── pages/ # Route components
│ ├── context/ # React context providers
│ ├── hooks/ # Custom React hooks
│ ├── utils/ # Utilities and constants
│ ├── styles/ # CSS and styling
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Pages & Routes

- **`/`** - Home page with hero carousel and featured sections
- **`/about`** - About us with team, timeline, and company values
- **`/services`** - Complete service catalog with pricing
- **`/projects`** - Project portfolio with filtering
- **`/contact`** - Contact form and company information
- **`/login`** - User authentication (Login)
- **`/register`** - User registration

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (`#0ea5e9` to `#0c4a6e`)
- **Secondary**: Purple/Pink tones (`#d946ef` to `#701a75`)
- **Dark Mode**: Sophisticated grays (`#18181b` to `#fafafa`)

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (content)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
All components are built with:
- Consistent spacing using Tailwind's scale
- Hover effects and micro-interactions
- Dark mode support
- Accessibility features

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend framework | 18.2+ |
| **Vite** | Build tool | 5.0+ |
| **Tailwind CSS** | Styling framework | 3.3+ |
| **Framer Motion** | Animation library | 10.16+ |
| **React Router** | Navigation | 6.20+ |
| **React Hook Form** | Form handling | 7.48+ |
| **Material-UI Icons** | Icon library | 5.14+ |


## 📈 Performance Optimizations

- **Code Splitting** with React.lazy()
- **Image Optimization** with proper formats
- **Bundle Analysis** with Vite's built-in tools
- **Tree Shaking** for minimal bundle size
- **Lazy Loading** for images and components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **Unsplash** for high-quality images
- **Tailwind CSS** team for the amazing framework
- **Framer Motion** for smooth animations
- **React** team for the excellent framework