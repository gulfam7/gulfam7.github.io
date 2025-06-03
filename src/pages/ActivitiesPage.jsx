// src/pages/ActivitiesPage.jsx
import React from 'react';
import {
  Box, Typography, Container, List, ListItem, ListItemText,
  Divider, Card, CardContent, Grid // Added Card, CardContent, Grid
} from '@mui/material';
// Import icons for visual flair (optional)
import RateReviewIcon from '@mui/icons-material/RateReview';
import SchoolIcon from '@mui/icons-material/School'; // Reusing for Mentoring
import GroupIcon from '@mui/icons-material/Group'; // Example for Affiliations

// --- Peer Review Data ---
const peerReviewData = {
  journals: [
    "Medical Image Analysis",
    "Physics in Medicine and Biology",
    "Computational and Structural Biotechnology Journal",
    "Magnetic Resonance Imaging",
    "Physica Scripta",
    "Signal, Image and Video Processing",
    "Engineering Research Express",
    "Meta-Radiology"
    // Add more journals if needed
  ],
  conferences: [
    "Medical Image Computing and Computer-Assisted Intervention (MICCAI), 2024, 2025",
    "IEEE International Symposium on Biomedical Imaging (ISBI) 2024",
    // Add more conferences if needed
  ]
};

// --- Teaching/Mentoring Data (Replace with your actual activities) ---
const teachingMentoringData = [
  "Research Mentor, NSF Research Experiences for Undergraduates (REU), UMass Dartmouth, Summer 2023",
  "Graduate Mentor, Computer and Information Science (CIS) Department, UMass Dartmouth (Fall 2024)",
  "Instructor, International English Language Testing System (IELTS), 2021",
  // Add more items like: "Teaching Assistant, Course Name, University (Semester/Year)"
];

// --- Affiliations Data ---
const affiliationsData = [
  "Abstract Committee Member, International Society for Magnetic Resonance in Medicine (ISMRM) / International Society for MR Radiographers & Technologists (ISMRT) Section, 2025 Annual Meeting",
  "Member, IEEE (Institute of Electrical and Electronics Engineers)",
  "Member, ISMRM (International Society for Magnetic Resonance in Medicine)",
  "Member, Medical Image Computing and Computer-Assisted Intervention (MICCAI) Society",
  "Member, IEEE Engineering in Medicine and Biology Society (EMBS)",
  // Add more affiliations/service roles
];
// --- End Data Definitions ---


function ActivitiesPage() {
  return (
    <Container maxWidth="lg">
       <Box sx={{ my: 4 }}> {/* Consistent vertical margin */}
        <Typography variant="h4" component="h1" gutterBottom>
          Professional Activities
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          My involvement in peer review, teaching, mentoring, and professional affiliations.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* --- Peer Review Section --- */}
        <Card variant="outlined" sx={{ mb: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <RateReviewIcon color="action" sx={{ mr: 1.5 }} />
              <Typography variant="h5" component="h2">
                Peer Review
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {/* Journals Subsection */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.1rem', fontWeight: 500 }}>
                  Reviewed for Journals
                </Typography>
                <List dense disablePadding>
                  {peerReviewData.journals.map((journal, index) => (
                    <ListItem key={`journal-${index}`} sx={{ py: 0.25 }}>
                      <ListItemText primary={journal} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              {/* Conferences Subsection */}
              <Grid item xs={12} md={6}>
                 <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.1rem', fontWeight: 500 }}>
                  Reviewed for Conferences
                </Typography>
                <List dense disablePadding>
                  {peerReviewData.conferences.map((conf, index) => (
                    <ListItem key={`conf-${index}`} sx={{ py: 0.25 }}>
                      <ListItemText primary={conf} primaryTypographyProps={{ variant: 'body2' }}/>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* --- Teaching & Mentoring Section --- */}
        <Card variant="outlined" sx={{ mb: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }}>
          <CardContent>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
               <SchoolIcon color="action" sx={{ mr: 1.5 }} />
               <Typography variant="h5" component="h2">
                 Teaching & Mentoring
               </Typography>
             </Box>
            {/* --- Corrected List Rendering Logic --- */}
            <List dense disablePadding>
              {teachingMentoringData.map((activity, index) => {
                // Find the first comma to separate role from details
                const commaIndex = activity.indexOf(',');
                let role = activity; // Default to the whole string
                let details = '';

                if (commaIndex !== -1) {
                  role = activity.substring(0, commaIndex);
                  details = activity.substring(commaIndex); // Keep the comma in details
                }

                return (
                  <ListItem key={`teach-${index}`} sx={{ py: 0.25 }}>
                    <ListItemText
                      primary={
                        // Render JSX instead of just the string
                        <>
                          <Typography component="span" sx={{ fontWeight: 600 }}>
                            {role}
                          </Typography>
                          {/* Render the rest of the details (includes the comma) */}
                          <Typography component="span" variant="body2">
                            {details}
                          </Typography>
                        </>
                      }
                      // primaryTypographyProps={{ variant: 'body2' }} // Can likely be removed now
                    />
                  </ListItem>
                );
              })}
            </List>
            {/* --- End Corrected List Rendering Logic --- */}
          </CardContent>
        </Card>

        {/* --- Affiliations Section --- */}
        <Card variant="outlined" sx={{ mb: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
               <GroupIcon color="action" sx={{ mr: 1.5 }} />
               <Typography variant="h5" component="h2">
                 Affiliations & Service
               </Typography>
             </Box>
            {/* --- Updated List Rendering Logic for Affiliations --- */}
            <List dense disablePadding>
               {affiliationsData.map((affiliation, index) => {
                 // Find the first comma to separate role/title from details
                 const commaIndex = affiliation.indexOf(',');
                 let role = affiliation; // Default to the whole string
                 let details = '';

                 if (commaIndex !== -1) {
                   role = affiliation.substring(0, commaIndex);
                   details = affiliation.substring(commaIndex); // Keep the comma in details
                 }

                 return (
                   <ListItem key={`affil-${index}`} sx={{ py: 0.25 }}>
                     <ListItemText
                       primary={
                         // Render JSX instead of just the string
                         <>
                           <Typography component="span" sx={{ fontWeight: 600 }}>
                             {role}
                           </Typography>
                           {/* Render the rest of the details (includes the comma) */}
                           <Typography component="span" variant="body2">
                             {details}
                           </Typography>
                         </>
                       }
                       // primaryTypographyProps={{ variant: 'body2' }} // Can likely be removed now
                     />
                   </ListItem>
                 );
               })}
            </List>
             {/* --- End Updated List Rendering Logic --- */}
          </CardContent>
        </Card>

      </Box>
    </Container>
  );
}
export default ActivitiesPage;
