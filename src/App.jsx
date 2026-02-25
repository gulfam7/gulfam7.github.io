import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // We will create this next
import HomePage from './pages/HomePage'; // We will create this placeholder
import ResearchPage from './pages/ResearchPage'; // Placeholder
import PublicationsPage from './pages/PublicationsPage'; // Placeholder
import ActivitiesPage from './pages/ActivitiesPage'; // Placeholder
import CvPage from './pages/CvPage'; // Placeholder
import AboutPage from './pages/AboutPage'; // Placeholder
import ContactPage from './pages/ContactPage'; // Placeholder

function App() {
  return (
   
    <Routes>
      {/* The Layout component wraps all pages to provide the consistent sidebar and navbar */}
      <Route path="/" element={<Layout />}>
        {/* 'index' specifies the default route when the path is "/" */}
        <Route index element={<HomePage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="publications" element={<PublicationsPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="cv" element={<CvPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Add a catch-all route for 404 Not Found pages (optional) */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
