import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the standard ReactDOM import
import App from './App.jsx'; // Import App component ONCE
import './index.css'; // Import global styles
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    {/* Wrap the entire App component with BrowserRouter to enable routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
