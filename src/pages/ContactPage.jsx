import React from 'react';
import { Box, Typography, Container, Link as MuiLink } from '@mui/material';

function ContactPage() {
  // Reuse info or define here
  const email = 'gulfamahmedsaju@gmail.com'; // Replace with your actual email

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" paragraph>
          I am always open to discussing research, potential collaborations, or opportunities.
          The best way to reach me is via email.
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          <strong>Email:</strong>{' '}
          <MuiLink href={`mailto:${email}`}>{email}</MuiLink>
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          You can also connect with me on LinkedIn.
        </Typography>
        {/* Optional: Add a simple contact form later if desired using MUI TextField, Button etc. */}
      </Box>
    </Container>
  );
}
export default ContactPage;