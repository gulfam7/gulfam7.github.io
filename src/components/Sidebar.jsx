import React from 'react';
import {
  Drawer, Box, Avatar, Typography, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Divider, Link as MuiLink // Renamed Link to avoid conflict
} from '@mui/material';
// Import necessary icons from @mui/icons-material
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School'; // Example for Scholar
// Import icons from react-icons if needed (as shown in user's provided code)
import { FaResearchgate, FaOrcid } from 'react-icons/fa';

// Import your local image
// Replace 'Gulfam-saju.jpg' with the actual filename if different
import profilePic from './IMG_7270.jpg';

// Define sidebar width as a constant
export const drawerWidth = 256; // 16rem * 16px/rem = 256px (adjust if needed)

// Profile data with specific icon colors
const profileData = {
  name: 'Gulfam Ahmed Saju',
  title: 'PhD Candidate | Graduate Research Assistant',
  organization: 'University of Massachusetts Dartmouth',
  imageUrl: profilePic,
  email: 'gsaju@umassd.edu',
  location: 'Dartmouth, MA, USA',
  links: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/',
      // Apply color using sx prop for MUI icons
      icon: <LinkedInIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} /> // Keep brand color or make light
    },
    {
      name: 'Scholar',
      url: 'https://scholar.google.com/citations?user=qewXRr4AAAAJ&hl=en&inst=8491034277084204831&oi=ao',
      icon: <SchoolIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} /> // Keep brand color or make light
    },
    {
      name: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Gulfam-Saju',
      // Apply color using style prop for react-icons
      icon: <FaResearchgate size={24} style={{ color: 'rgba(255, 255, 255, 0.7)' }} /> // Keep brand color or make light
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gulfam7',
      // Adjust GitHub icon color for dark background
      icon: <GitHubIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} /> // White icon
    },
    {
      name: 'ORCID',
      url: 'https://orcid.org/0009-0007-7391-0485', // Replace XXXX with actual ORCID parts
      icon: <FaOrcid size={24} style={{ color: 'rgba(255, 255, 255, 0.7)' }} /> // Keep brand color or make light
    },
  ],
};

function Sidebar() {
  const drawerContent = (
    // Add overall padding and ensure center alignment for top content
    // Adjust text color for dark background
    <Box sx={{ p: 2, textAlign: 'center', color: '#ffffff' }}> {/* Default text color white */}
      {/* Profile Section */}
      <Avatar
        alt={profileData.name}
        src={profileData.imageUrl}
        sx={{
          width: 96, // Slightly smaller avatar
          height: 96,
          mx: 'auto', // Center horizontally
          mb: 2, // Margin bottom
          // Use a light border against dark background
          border: `2px solid rgba(255, 255, 255, 0.3)`,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)', // Enhanced shadow
        }}
      />
      {/* Ensure text colors are appropriate */}
      <Typography variant="h6" component="h1" sx={{ fontWeight: 600, mb: 0.5, color: 'inherit' }}>
        {profileData.name}
      </Typography>
      {/* Title - slightly more prominent */}
      <Typography variant="body1" sx={{ mb: 0.25, color: 'rgba(255, 255, 255, 0.9)' }}>
        {profileData.title}
      </Typography>
      {/* Organization - slightly less prominent */}
      <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)' }}>
        {profileData.organization}
      </Typography>

      {/* Contact Info Section - Glassy Card Style */}
      <Box sx={{
          bgcolor: 'rgba(255, 255, 255, 0.08)', // Very subtle light background
          p: 1.5,
          borderRadius: 2,
          mb: 2,
          backdropFilter: 'blur(5px)', // Slightly less blur for inner cards
          border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <List dense disablePadding>
          <ListItem disableGutters sx={{ px: 1 }}>
            <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5, color: 'rgba(255, 255, 255, 0.7)' }}>
              <EmailIcon fontSize="small"/>
            </ListItemIcon>
            <MuiLink href={`mailto:${profileData.email}`} variant="body2" underline="hover" sx={{ color: '#ffffff', wordBreak: 'break-all' }}>
              {profileData.email}
            </MuiLink>
          </ListItem>
          <ListItem disableGutters sx={{ px: 1 }}>
            <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5, color: 'rgba(255, 255, 255, 0.7)' }}>
              <LocationOnIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText
                primary={profileData.location}
                primaryTypographyProps={{ variant: 'body2', color: 'rgba(255, 255, 255, 0.7)' }}
            />
          </ListItem>
        </List>
      </Box>

      {/* Links Section - Glassy Card Style */}
      <Box sx={{
          bgcolor: 'rgba(255, 255, 255, 0.08)', // Very subtle light background
          p: 1.5,
          borderRadius: 2,
          backdropFilter: 'blur(5px)', // Slightly less blur for inner cards
          border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <List dense disablePadding>
          {profileData.links.map((link) => (
            <ListItem key={link.name} disablePadding>
              <ListItemButton
                component={MuiLink}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    borderRadius: 1,
                    py: 0.5,
                     // Adjust hover effect for dark theme
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5 }}>
                  {/* Icon color is set in profileData */}
                  {link.icon}
                </ListItemIcon>
                {/* Ensure link text is white/light */}
                <ListItemText primary={link.name} primaryTypographyProps={{ variant: 'body2', color: '#ffffff' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="permanent" // Always visible
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0, // Prevent drawer from shrinking
        '& .MuiDrawer-paper': { // Target the paper inside the drawer
          width: drawerWidth,
          boxSizing: 'border-box',
          // --- Glassmorphism Styles ---
          // Dark semi-transparent background
          backgroundColor: 'rgba(40, 40, 50, 0.65)', // Adjust color & opacity as needed
          // Backdrop blur effect
          backdropFilter: 'blur(10px)',
          // Remove default border, add a subtle light one if desired
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          // Ensure content scrolls if needed
          overflowY: 'auto',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}

export default Sidebar;
