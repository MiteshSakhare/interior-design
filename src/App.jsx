import React from 'react';
// --- 1. UPDATE YOUR IMPORTS ---
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Calculator from './pages/Calculator';
import './styles/index.css';

// --- 2. DEFINE YOUR ROUTES USING THE NEW METHOD ---
// This creates a "data router" which automatically handles scroll restoration.
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Auth Routes (without Layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Main Routes (with Layout) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
      
      {/* 404 Route */}
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-100 dark:to-dark-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Page not found</p>
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Go Home
            </a>
          </div>
        </div>
      } />
    </>
  )
);

function App() {
  // --- 3. SIMPLIFY THE APP COMPONENT ---
  // The ThemeProvider remains, but the Router is now handled by RouterProvider.
  // You no longer need the <ScrollRestoration /> component; it's built-in now.
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;