// src/pages/CvPage.jsx
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; // Icon for button

// --- Import the PDF from the components folder ---
// This assumes CvPage.jsx is in src/pages. Adjust path if needed.
// Make sure the filename 'Gulfam-CV.pdf' is correct.
import cvPath from '../components/Gulfam_CV.pdf';

function CvPage() {
  // The cvPath variable now holds the correct URL path processed by Vite

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          CV
        </Typography>
        <Typography variant="body1" paragraph>
          You can view or download my full, up-to-date Curriculum Vitae using the link below.
        </Typography>
        <Button
          variant="contained" // MUI filled button style
          color="primary" // Use theme's primary color
          startIcon={<DownloadIcon />} // Add download icon
          // --- Use the imported variable for href ---
          href={cvPath}
          download // Suggests the browser should download the file
          target="_blank" // Open in new tab is also good practice
          rel="noopener noreferrer"
          sx={{ mt: 2 }} // Add margin top
        >
          Download CV (PDF)
        </Button>

        {/* Optionally, add key highlights from your CV directly on this page */}
        {/*
        <Box component="section" sx={{ mt: 5 }}>
          <Typography variant="h5" component="h2" gutterBottom>Education</Typography>
          <Typography variant="body1">PhD Candidate, University Name (Expected Year)</Typography>
          <Typography variant="body1">M.S., University Name (Year)</Typography>
          <Typography variant="body1">B.S., University Name (Year)</Typography>
        </Box>
        */}
      </Box>
    </Container>
  );
}
export default CvPage;