import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the standard ReactDOM import
import App from './App.jsx'; // Import App component ONCE
import './index.css'; // Import global styles
// --- Use HashRouter for GitHub Pages compatibility ---
import { HashRouter } from 'react-router-dom'; // Import HashRouter

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    {/* --- Use HashRouter --- */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
