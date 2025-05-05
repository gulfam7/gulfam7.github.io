// src/pages/AboutPage.jsx
import React from 'react';
import {
  Box, Typography, Container, List, ListItem, ListItemText,
  Card, CardContent // Only Card components needed for Education
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // Icon for Education
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Icon for Awards

// --- Updated Education Data ---
const educationData = [
  {
    degree: "PhD in Computer Science and Information System", // Updated degree
    institution: "University of Massachusetts Dartmouth, Dartmouth, MA, USA",
    years: "Jan 2022 – Present (Expected Graduation: May, 2026)", // Updated years
    details: "Dissertation Focus: Leveraging AI for Solving Inverse Problems in MRI" // Updated details
  },
  {
    degree: "BSc in Computer Science and Engineering", // Updated degree
    institution: "Daffodil International University, Dhaka, Bangladesh", // Updated institution
    years: "2016 – 2019", // Updated years
    details: "" // Optional details
  },
  // Add more degrees if applicable
];
// --- End Updated Education Data ---

// --- Awards & Honors Data ---
const awardsData = [
  "Computer & Information Science (CIS) Graduate Research Award – University of Massachusetts Dartmouth (2024)",
  "IEEE EMBC NextGen Scholar Award – 46th IEEE Engineering in Medicine and Biology Conference (EMBC) (2024)",
  "Recipient of Graduate Student Travel Grant (GSTG) – University of Massachusetts Dartmouth (2024)",
  "Scholarship from Daffodil International University for outstanding result in a single semester (2017)",
  "Honorary award from Prothom Alo for HSC examination result (2014)"
];
// --- End Awards & Honors Data ---


function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}> {/* Consistent vertical margin */}
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>

        {/* Introductory Paragraph - Can be kept or removed/simplified */}
        <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
          A brief overview of my academic background and recognitions.
        </Typography>

        {/* --- Education Section --- */}
        <Card variant="outlined" sx={{ mb: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
               <SchoolIcon color="action" sx={{ mr: 1.5 }} />
               <Typography variant="h5" component="h2">Education</Typography>
             </Box>
            <List dense disablePadding>
              {educationData.map((edu, index) => (
                <ListItem key={`edu-${index}`} sx={{ py: 0.5, alignItems: 'flex-start' }}>
                  <ListItemText
                    primary={
                      <Typography component="span" sx={{ fontWeight: 600 }}>
                        {edu.degree}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                          {edu.institution}
                        </Typography>
                        <Typography component="span" variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                          {edu.years}
                        </Typography>
                        {edu.details && (
                           <Typography component="span" variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                             {edu.details}
                           </Typography>
                        )}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* --- Awards & Honors Section --- */}
        <Card variant="outlined" sx={{ mb: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
               <EmojiEventsIcon color="action" sx={{ mr: 1.5 }} />
               <Typography variant="h5" component="h2">Awards & Honors</Typography>
             </Box>
            <List dense disablePadding>
              {awardsData.map((award, index) => (
                <ListItem key={`award-${index}`} sx={{ py: 0.25 }}>
                  {/* You can apply the same bolding logic here if needed, e.g., bolding the award name */}
                  <ListItemText primary={award} primaryTypographyProps={{ variant: 'body2' }}/>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

      </Box>
    </Container>
  );
}
export default AboutPage;