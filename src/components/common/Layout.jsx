import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Absolute imports
import SEO from 'components/common/SEO';
import seoConfig from 'constants/seo';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

function Layout() {
  const location = useLocation();
  const path = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const currentSeoConfig = seoConfig[path];

  return (
    <>
      <SEO {...currentSeoConfig} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;