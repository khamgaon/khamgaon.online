// src/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders without crashing', () => {
  const { getByText } = render(
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  );

  // Example assertion (modify according to your App content)
  expect(getByText(/Khamgaon Online/i)).toBeInTheDocument();
});