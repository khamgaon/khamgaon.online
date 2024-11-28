// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'design-system/foundations/ThemeProvider';

import Layout from 'components/common/Layout';
import HomePage from 'components/pages/Home';
import CategoriesPage from 'components/pages/Categories';
import CategoryPage from 'components/pages/Category';
import BusinessDetail from 'components/pages/BusinessDetail';
import FAQPage from 'components/pages/FAQ';
import ContactPage from 'components/pages/Contact';
import Terms from 'components/pages/Terms';
import PrivacyPolicy from 'components/pages/PrivacyPolicy';
import Auth from 'components/pages/Auth';
import Onboarding from 'components/pages/Onboarding';
import Profile from 'components/pages/Profile';
import { AuthProvider } from 'context/AuthContext';
import { UserProvider } from 'context/UserContext';
import { GlobalProvider } from 'context/GlobalContext';


const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <GlobalProvider>

          <ThemeProvider>
            <HelmetProvider>
              <Router>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/category/:slug" element={<CategoryPage />} />
                    <Route path="/business/:id" element={<BusinessDetail />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                  </Route>
                </Routes>
              </Router>
            </HelmetProvider>
          </ThemeProvider>
        </GlobalProvider>
      </UserProvider>
    </AuthProvider >
  );
};

export default App;