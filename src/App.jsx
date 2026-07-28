import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';

// Every route except the landing page is code-split, so a first visit no
// longer downloads the publication list, the CV viewer and all four
// visualisations before it can paint.
const AboutPage        = lazy(() => import('./pages/AboutPage'));
const ResearchPage     = lazy(() => import('./pages/ResearchPage'));
const PublicationsPage = lazy(() => import('./pages/PublicationsPage'));
const ActivitiesPage   = lazy(() => import('./pages/ActivitiesPage'));
const CvPage           = lazy(() => import('./pages/CvPage'));
const ContactPage      = lazy(() => import('./pages/ContactPage'));
const NotFoundPage     = lazy(() => import('./pages/NotFoundPage'));

function RouteFallback() {
  return (
    <Box
      sx={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}
      role="status"
      aria-label="Loading page"
    >
      <CircularProgress size={26} thickness={4} />
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="about"
          element={<Suspense fallback={<RouteFallback />}><AboutPage /></Suspense>}
        />
        <Route
          path="research"
          element={<Suspense fallback={<RouteFallback />}><ResearchPage /></Suspense>}
        />
        <Route
          path="publications"
          element={<Suspense fallback={<RouteFallback />}><PublicationsPage /></Suspense>}
        />
        <Route
          path="activities"
          element={<Suspense fallback={<RouteFallback />}><ActivitiesPage /></Suspense>}
        />
        <Route
          path="cv"
          element={<Suspense fallback={<RouteFallback />}><CvPage /></Suspense>}
        />
        <Route
          path="contact"
          element={<Suspense fallback={<RouteFallback />}><ContactPage /></Suspense>}
        />
        <Route
          path="*"
          element={<Suspense fallback={<RouteFallback />}><NotFoundPage /></Suspense>}
        />
      </Route>
    </Routes>
  );
}

export default App;
