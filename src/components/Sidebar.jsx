// -----------------------------------------------------------------------------
// Sidebar.jsx – modern pastel-glass design
// -----------------------------------------------------------------------------
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

// ---------------- constants ----------------
export const drawerWidth = 260;
export const collapsedWidth = 84;

// ---------------- data ----------------
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
    { text: 'GitHub',   url: 'https://github.com/gulfam7', icon: <GitHubIcon /> },
    { text: 'ORCID',    url: 'https://orcid.org/0009-0007-7391-0485', icon: <FaOrcid size={20} /> },
  ],
};

// ---------------- component ----------------
function Sidebar() {
  const theme = useTheme();
  const collapsed = useMediaQuery('(max-width:900px)');
  const width = collapsed ? collapsedWidth : drawerWidth;

  // pastel accent for icon badge on hover
  const hoverBg = alpha(theme.palette.primary.main, 0.08);

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
          bgcolor: 'rgba(255,255,255,0.6)',
          backgroundImage:
            'linear-gradient(120deg, rgba(255,255,255,0.65) 0%, rgba(245,245,255,0.55) 100%)',
          backdropFilter: 'blur(14px)',
          borderRight: `1px solid ${alpha(theme.palette.grey[400], 0.2)}`,
          transition: 'width .25s',
        },
      }}
    >
      {/* ---------- avatar / header ---------- */}
      <Box textAlign="center" sx={{ px: 1 }}>
        <Avatar
          src={user.img}
          alt={user.name}
          sx={{
            width: 78,
            height: 78,
            mx: 'auto',
            mb: 1.5,
            boxShadow: theme.shadows[4],
          }}
        />
        {!collapsed && (
          <>
            <Typography variant="subtitle1" fontWeight={600}>
              {user.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {user.title}
            </Typography>
            <Typography variant="caption" display="block" color="text.secondary" mb={1}>
              {user.org}
            </Typography>
          </>
        )}
      </Box>

      {/* ---------- account section ---------- */}
      {!collapsed && (
        <>
          <Divider sx={{ my: 1.5 }} />
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', pl: 2, letterSpacing: 1 }}
          >
            Account
          </Typography>
        </>
      )}

      <Box sx={{ px: collapsed ? 0 : 1 }}>
        {/* email */}
        <ListItemButton
          component={MuiLink}
          href={`mailto:${user.email}`}
          sx={{
            borderRadius: 2,
            mx: collapsed ? 0 : 1,
            '&:hover .MuiListItemIcon-root': { bgcolor: hoverBg },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 36,
              bgcolor: alpha(theme.palette.primary.main, 0.15),
              color: theme.palette.primary.main,
              p: 0.7,
              borderRadius: 2,
              mr: collapsed ? 0 : 2,
              transition: '.2s',
            }}
          >
            <EmailIcon fontSize="small" />
          </ListItemIcon>
          {!collapsed && (
            <ListItemText primary={user.email} primaryTypographyProps={{ variant: 'body2' }} />
          )}
        </ListItemButton>

        {/* location */}
        <ListItemButton
          disableRipple
          sx={{
            borderRadius: 2,
            mx: collapsed ? 0 : 1,
            mt: 0.5,
            '&:hover .MuiListItemIcon-root': { bgcolor: hoverBg },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 36,
              bgcolor: alpha(theme.palette.success.main, 0.15),
              color: theme.palette.success.main,
              p: 0.7,
              borderRadius: 2,
              mr: collapsed ? 0 : 2,
              transition: '.2s',
            }}
          >
            <LocationOnIcon fontSize="small" />
          </ListItemIcon>
          {!collapsed && (
            <ListItemText primary={user.loc} primaryTypographyProps={{ variant: 'body2' }} />
          )}
        </ListItemButton>
      </Box>

      {/* ---------- links ---------- */}
      {!collapsed && (
        <>
          <Divider sx={{ my: 1.5 }} />
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', pl: 2, letterSpacing: 1 }}
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
              '&:hover .MuiListItemIcon-root': { bgcolor: hoverBg },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 36,
                bgcolor: alpha(theme.palette.info.main, 0.15),
                color: theme.palette.info.main,
                p: 0.7,
                borderRadius: 2,
                mr: collapsed ? 0 : 2,
                transition: '.2s',
              }}
            >
              {l.icon}
            </ListItemIcon>
            {!collapsed && (
              <ListItemText primary={l.text} primaryTypographyProps={{ variant: 'body2' }} />
            )}
          </ListItemButton>
        ))}
      </Box>

      {/* ---------- footer ---------- */}
      {!collapsed && (
        <Typography
          variant="caption"
          sx={{
            mt: 'auto',
            pb: 2,
            px: 2,
            color: 'text.disabled',
          }}
        >
          © {new Date().getFullYear()} G. A. Saju
        </Typography>
      )}
    </Drawer>
  );
}

export default Sidebar;
