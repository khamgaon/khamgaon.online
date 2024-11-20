// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Absolute imports
import Layout from 'components/common/Layout';
import HomePage from 'components/pages/Home';
import CategoriesPage from 'components/pages/Categories';
import FAQPage from 'components/pages/FAQ';
import ContactPage from 'components/pages/Contact';
import Terms from 'components/pages/Terms';
import PrivacyPolicy from 'components/pages/PrivacyPolicy';
import CategoryPage from 'components/pages/Category';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;