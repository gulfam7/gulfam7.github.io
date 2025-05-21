// -----------------------------------------------------------------------------
// Sidebar.jsx – sleek, gradient-glass sidebar
// -----------------------------------------------------------------------------

import React from 'react';
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Link as MuiLink,
  useMediaQuery,
  Stack,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import { FaResearchgate, FaOrcid } from 'react-icons/fa';
import profilePic from './IMG_7270.jpg';

// -----------------------------------------------------------------------------
// CONSTANTS
// -----------------------------------------------------------------------------
export const drawerWidth = 260;               // open width
export const collapsedWidth = 80;             // auto-collapse width

// -----------------------------------------------------------------------------
// DATA
// -----------------------------------------------------------------------------
const profileData = {
  name: 'Gulfam Ahmed Saju',
  title: 'PhD Candidate · GRA',
  organization: 'UMass Dartmouth',
  email: 'gsaju@umassd.edu',
  location: 'Dartmouth, MA',
  imageUrl: profilePic,
  links: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/',
      icon: <LinkedInIcon />,
    },
    {
      name: 'Scholar',
      url: 'https://scholar.google.com/citations?user=qewXRr4AAAAJ',
      icon: <SchoolIcon />,
    },
    {
      name: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Gulfam-Saju',
      icon: <FaResearchgate size={22} />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gulfam7',
      icon: <GitHubIcon />,
    },
    {
      name: 'ORCID',
      url: 'https://orcid.org/0009-0007-7391-0485',
      icon: <FaOrcid size={22} />,
    },
  ],
};

// -----------------------------------------------------------------------------
// COMPONENT
// -----------------------------------------------------------------------------
function Sidebar() {
  const theme = useTheme();
  const autoCollapse = useMediaQuery('(max-width:900px)');    // simple rule
  const width = autoCollapse ? collapsedWidth : drawerWidth;

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
          // glass + gradient
          background: 'linear-gradient(160deg, rgba(30,30,40,0.85), rgba(50,50,70,0.85))',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255,255,255,0.12)',
          color: theme.palette.grey[50],
          overflowY: 'auto',
          transition: 'width 0.3s ease',
        },
      }}
    >
      {/* ------------------------------------------------------------------ */}
      {/*  PROFILE HEADER                                                   */}
      {/* ------------------------------------------------------------------ */}
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar
          src={profileData.imageUrl}
          alt={profileData.name}
          sx={{
            width: autoCollapse ? 48 : 96,
            height: autoCollapse ? 48 : 96,
            mx: 'auto',
            mb: 2,
            boxShadow: '0 3px 12px rgba(0,0,0,0.25)',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />
        {!autoCollapse && (
          <>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.3 }}>
              {profileData.name}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              {profileData.title}
            </Typography>
            <Typography variant="caption" sx={{ mb: 2, display: 'block', opacity: 0.7 }}>
              {profileData.organization}
            </Typography>
          </>
        )}
      </Box>

      {/* ------------------------------------------------------------------ */}
      {/*  CONTACT CARD                                                     */}
      {/* ------------------------------------------------------------------ */}
      <Box
        sx={{
          mx: 2,
          mb: 2,
          p: 1.5,
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <List dense disablePadding>
          <ListItem disableGutters sx={{ px: 1 }}>
            <ListItemIcon
              sx={{
                minWidth: 'auto',
                mr: 1.5,
                bgcolor: 'rgba(255,255,255,0.16)',
                p: 0.6,
                borderRadius: '50%',
              }}
            >
              <EmailIcon fontSize="small" />
            </ListItemIcon>
            {!autoCollapse && (
              <MuiLink
                href={`mailto:${profileData.email}`}
                underline="hover"
                sx={{ color: 'inherit', wordBreak: 'break-all' }}
                variant="body2"
              >
                {profileData.email}
              </MuiLink>
            )}
          </ListItem>
          <ListItem disableGutters sx={{ px: 1, mt: 0.5 }}>
            <ListItemIcon
              sx={{
                minWidth: 'auto',
                mr: 1.5,
                bgcolor: 'rgba(255,255,255,0.16)',
                p: 0.6,
                borderRadius: '50%',
              }}
            >
              <LocationOnIcon fontSize="small" />
            </ListItemIcon>
            {!autoCollapse && (
              <ListItemText
                primary={profileData.location}
                primaryTypographyProps={{ variant: 'body2', opacity: 0.8 }}
              />
            )}
          </ListItem>
        </List>
      </Box>

      {/* ------------------------------------------------------------------ */}
      {/*  LINKS                                                            */}
      {/* ------------------------------------------------------------------ */}
      <Box
        sx={{
          mx: 2,
          mb: 3,
          p: 1.5,
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <List dense disablePadding>
          {profileData.links.map((link) => (
            <ListItem key={link.name} disablePadding>
              <ListItemButton
                component={MuiLink}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 1.5,
                  px: 1,
                  py: 0.7,
                  transition: 'background-color 0.25s ease, transform 0.2s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 'auto',
                    mr: autoCollapse ? 0 : 1.5,
                    color: 'inherit',
                    bgcolor: 'rgba(255,255,255,0.16)',
                    p: 0.6,
                    borderRadius: '50%',
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                {!autoCollapse && (
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* ------------------------------------------------------------------ */}
      {/*  FOOTER (optional)                                                */}
      {/* ------------------------------------------------------------------ */}
      {!autoCollapse && (
        <Typography
          variant="caption"
          sx={{ textAlign: 'center', width: '100%', opacity: 0.6, mb: 2 }}
        >
          © {new Date().getFullYear()} G. A. Saju
        </Typography>
      )}
    </Drawer>
  );
}

export default Sidebar;
