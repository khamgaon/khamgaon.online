import React from 'react';
import ReactDOM from 'react-dom/client';

// Absolute imports
import App from 'App';
import reportWebVitals from 'reportWebVitals';

// Styles and fonts
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'styles/colors.css';
import 'styles/index.css';

// Fonts
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
