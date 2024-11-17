import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Tailwind
import 'tailwindcss/tailwind.css';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import custom styles
import './styles/colors.css';
import './styles/index.css';

import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
