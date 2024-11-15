import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SEO from './SEO';
import seoConfig from '../constants/seo';

function Layout() {
  const location = useLocation();
  const path = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const currentSeoConfig = seoConfig[path];

  return (
    <>
      <SEO {...currentSeoConfig} />
      <Outlet />
    </>
  );
}

export default Layout; 