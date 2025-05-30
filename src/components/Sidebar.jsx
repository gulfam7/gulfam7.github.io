// -----------------------------------------------------------------------------
// Sidebar.jsx – clean, sectioned layout
// -----------------------------------------------------------------------------
import React from 'react';
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Link as MuiLink,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import { FaResearchgate, FaOrcid } from 'react-icons/fa';
import profilePic from './IMG_7270.jpg';

// constants
export const drawerWidth = 260;
export const collapsedWidth = 80;

// data
const profileData = {
  name: 'Gulfam Ahmed Saju',
  title: 'PhD Candidate · GRA',
  organization: 'UMass Dartmouth',
  email: 'gsaju@umassd.edu',
  location: 'Dartmouth, MA',
  imageUrl: profilePic,
  links: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/', icon: <LinkedInIcon /> },
    { name: 'Scholar', url: 'https://scholar.google.com/citations?user=qewXRr4AAAAJ', icon: <SchoolIcon /> },
    { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Gulfam-Saju', icon: <FaResearchgate size={22} /> },
    { name: 'GitHub', url: 'https://github.com/gulfam7', icon: <GitHubIcon /> },
    { name: 'ORCID', url: 'https://orcid.org/0009-0007-7391-0485', icon: <FaOrcid size={22} /> },
  ],
};

function Sidebar() {
  const theme = useTheme();
  const isCollapsed = useMediaQuery('(max-width:900px)');
  const width = isCollapsed ? collapsedWidth : drawerWidth;

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
          bgcolor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.divider}`,
          overflowY: 'auto',
          transition: 'width .3s',
        },
      }}
    >
      {/* Avatar & name */}
      <Box sx={{ px: 3, pt: 3, pb: 2, textAlign: 'center' }}>
        <Avatar
          src={profileData.imageUrl}
          alt={profileData.name}
          sx={{ width: 72, height: 72, mx: 'auto', mb: 1 }}
        />
        {!isCollapsed && (
          <>
            <Typography variant="subtitle1" fontWeight={600}>
              {profileData.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {profileData.title}
            </Typography>
            <Typography variant="caption" display="block" color="text.secondary">
              {profileData.organization}
            </Typography>
          </>
        )}
      </Box>

      {/* ACCOUNT SECTION */}
      <Typography
        variant="overline"
        sx={{ pl: 3, mb: 0.5, color: 'text.secondary', letterSpacing: 1 }}
      >
        Account
      </Typography>
      <Box sx={{ px: 0.5 }}>
        <ListItemButton
          component={MuiLink}
          href={`mailto:${profileData.email}`}
          sx={{ borderRadius: 2, mx: 2, mb: 0.5 }}
        >
          <ListItemIcon sx={{ minWidth: 32, color: 'text.secondary' }}>
            <EmailIcon fontSize="small" />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary={profileData.email} primaryTypographyProps={{ variant: 'body2' }} />}
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: 2, mx: 2, mb: 1 }}>
          <ListItemIcon sx={{ minWidth: 32, color: 'text.secondary' }}>
            <LocationOnIcon fontSize="small" />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary={profileData.location} primaryTypographyProps={{ variant: 'body2' }} />}
        </ListItemButton>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* LINKS SECTION */}
      <Typography
        variant="overline"
        sx={{ pl: 3, mb: 0.5, color: 'text.secondary', letterSpacing: 1 }}
      >
        Profiles
      </Typography>
      <Box sx={{ px: 0.5, mb: 2 }}>
        {profileData.links.map((link) => (
          <ListItemButton
            key={link.name}
            component={MuiLink}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: 2,
              mx: 2,
              mb: 0.5,
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32, color: 'text.secondary' }}>
              {link.icon}
            </ListItemIcon>
            {!isCollapsed && (
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{ variant: 'body2' }}
              />
            )}
          </ListItemButton>
        ))}
      </Box>

      {!isCollapsed && (
        <Typography variant="caption" sx={{ mt: 'auto', pb: 2, pl: 3, color: 'text.disabled' }}>
          © {new Date().getFullYear()} G. A. Saju
        </Typography>
      )}
    </Drawer>
  );
}

export default Sidebar;
