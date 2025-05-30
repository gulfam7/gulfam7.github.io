// Sidebar.jsx – dark‐slate background with white icons/text
import React from 'react';
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Link as MuiLink,
  useMediaQuery,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import { FaResearchgate, FaOrcid } from 'react-icons/fa';
import profilePic from './IMG_7270.jpg';

export const drawerWidth = 260;
export const collapsedWidth = 84;

const user = {
  name: 'Gulfam Ahmed Saju',
  title: 'PhD Candidate · GRA',
  org: 'UMass Dartmouth',
  email: 'gsaju@umassd.edu',
  loc: 'Dartmouth, MA',
  img: profilePic,
  links: [
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/', icon: <LinkedInIcon /> },
    { text: 'Scholar',  url: 'https://scholar.google.com/citations?user=qewXRr4AAAAJ', icon: <SchoolIcon /> },
    { text: 'ResearchGate', url: 'https://www.researchgate.net/profile/Gulfam-Saju', icon: <FaResearchgate size={20} /> },
    { text: 'GitHub',   url: 'https://github.com/gulfam7',     icon: <GitHubIcon /> },
    { text: 'ORCID',    url: 'https://orcid.org/0009-0007-7391-0485',      icon: <FaOrcid size={20} /> },
  ],
};

export default function Sidebar() {
  const theme = useTheme();
  const collapsed = useMediaQuery('(max-width:900px)');
  const width = collapsed ? collapsedWidth : drawerWidth;

  // Hover background uses white at 20% opacity
  const hoverBg = alpha(theme.palette.common.white, 0.2);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
          border: 'none',
          py: 3,
          px: collapsed ? 0 : 2,
          background: 'linear-gradient(160deg, #1F2937 0%, #111827 100%)',
          color: alpha(theme.palette.common.white, 0.9),
          backdropFilter: 'blur(12px)',
          transition: 'width .3s',
        },
      }}
    >
      {/* Profile Header */}
      <Box textAlign="center" sx={{ px: 1 }}>
        <Avatar
          src={user.img}
          alt={user.name}
          sx={{ width: 78, height: 78, mx: 'auto', mb: 1.5, boxShadow: theme.shadows[4] }}
        />
        {!collapsed && (
          <>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600 }}>
              {user.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              {user.title}
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
              {user.org}
            </Typography>
          </>
        )}
      </Box>

      {/* Account Section */}
      {!collapsed && (
        <>
          <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.12)' }} />
          <Typography
            variant="overline"
            sx={{ color: 'rgba(255,255,255,0.6)', pl: 2, letterSpacing: 1 }}
          >
            Account
          </Typography>
        </>
      )}
      <Box sx={{ px: collapsed ? 0 : 1 }}>
        <ListItemButton
          component={MuiLink}
          href={`mailto:${user.email}`}
          sx={{
            borderRadius: 2,
            mx: collapsed ? 0 : 1,
            '&:hover': { bgcolor: hoverBg },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 36,
              bgcolor: alpha(theme.palette.common.white, 0.15),
              color: '#fff',
              p: 0.7,
              borderRadius: 2,
              mr: collapsed ? 0 : 2,
              transition: '.2s',
            }}
          >
            <EmailIcon fontSize="small" />
          </ListItemIcon>
          {!collapsed && (
            <ListItemText
              primary={user.email}
              primaryTypographyProps={{ variant: 'body2', color: '#fff' }}
            />
          )}
        </ListItemButton>

        <ListItemButton
          disableRipple
          sx={{
            borderRadius: 2,
            mx: collapsed ? 0 : 1,
            mt: 0.5,
            '&:hover': { bgcolor: hoverBg },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 36,
              bgcolor: alpha(theme.palette.common.white, 0.15),
              color: '#fff',
              p: 0.7,
              borderRadius: 2,
              mr: collapsed ? 0 : 2,
              transition: '.2s',
            }}
          >
            <LocationOnIcon fontSize="small" />
          </ListItemIcon>
          {!collapsed && (
            <ListItemText
              primary={user.loc}
              primaryTypographyProps={{ variant: 'body2', color: '#fff' }}
            />
          )}
        </ListItemButton>
      </Box>

      {/* Profiles Section */}
      {!collapsed && (
        <>
          <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.12)' }} />
          <Typography
            variant="overline"
            sx={{ color: 'rgba(255,255,255,0.6)', pl: 2, letterSpacing: 1 }}
          >
            Profiles
          </Typography>
        </>
      )}
      <Box sx={{ px: collapsed ? 0 : 1, mb: 1 }}>
        {user.links.map((l) => (
          <ListItemButton
            key={l.text}
            component={MuiLink}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: 2,
              mx: collapsed ? 0 : 1,
              mt: 0.5,
              '&:hover': { bgcolor: hoverBg },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 36,
                bgcolor: alpha(theme.palette.common.white, 0.15),
                color: '#fff',
                p: 0.7,
                borderRadius: 2,
                mr: collapsed ? 0 : 2,
                transition: '.2s',
              }}
            >
              {l.icon}
            </ListItemIcon>
            {!collapsed && (
              <ListItemText
                primary={l.text}
                primaryTypographyProps={{ variant: 'body2', color: '#fff' }}
              />
            )}
          </ListItemButton>
        ))}
      </Box>

      {/* Footer */}
      {!collapsed && (
        <Typography
          variant="caption"
          sx={{
            mt: 'auto',
            pb: 2,
            px: 2,
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          © {new Date().getFullYear()} G. A. Saju
        </Typography>
      )}
    </Drawer>
  );
}
