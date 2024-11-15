import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import HomePage from './components/HomePage';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';

import './styles/index.css';


import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';

const seoConfig = {
  home: {
    title: 'Khamgaon.online - Connecting Khamgaon like never before!',
    description: 'Khamgaon.online is your one-stop platform for exploring Khamgaon, connecting residents with local businesses and community events.',
    image: '/images/logo.png',
    url: 'https://khamgaon.online'
  },
  terms: {
    title: 'Terms and Conditions - Khamgaon.online',
    description: 'Read our terms and conditions to understand how to use Khamgaon.online platform and services.',
    image: '/images/logo.png',
    url: 'https://khamgaon.online/terms'
  },
  privacy: {
    title: 'Privacy Policy - Khamgaon.online',
    description: 'Learn about how we collect, use, and protect your data at Khamgaon.online.',
    image: '/images/logo.png',
    url: 'https://khamgaon.online/privacy'
  }
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <SEO {...seoConfig.home} />
                  <HomePage />
                </>
              } 
            />
            <Route 
              path="/terms" 
              element={
                <>
                  <SEO {...seoConfig.terms} />
                  <Terms />
                </>
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <>
                  <SEO {...seoConfig.privacy} />
                  <PrivacyPolicy />
                </>
              } 
            />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;