// Sidebar.jsx – modern dark gradient sidebar with responsive collapse + tooltips
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
  Tooltip,
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
    { text: 'Scholar', url: 'https://scholar.google.com/citations?user=qewXRr4AAAAJ', icon: <SchoolIcon /> },
    { text: 'ResearchGate', url: 'https://www.researchgate.net/profile/Gulfam-Saju', icon: <FaResearchgate size={20} /> },
    { text: 'GitHub', url: 'https://github.com/gulfam7', icon: <GitHubIcon /> },
    { text: 'ORCID', url: 'https://orcid.org/0009-0007-7391-0485', icon: <FaOrcid size={20} /> },
  ],
};

export default function Sidebar() {
  const theme = useTheme();
  const collapsed = useMediaQuery('(max-width:900px)');
  const width = collapsed ? collapsedWidth : drawerWidth;

  const paperBorder = alpha(theme.palette.common.white, 0.08);
  const textMuted = alpha(theme.palette.common.white, 0.68);
  const hoverBg = alpha(theme.palette.common.white, 0.10);
  const iconBg = alpha(theme.palette.common.white, 0.12);

  const iconWrapSx = {
    minWidth: 40,
    width: 40,
    height: 40,
    borderRadius: 2,
    bgcolor: iconBg,
    color: '#fff',
    display: 'grid',
    placeItems: 'center',
    transition: theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.shortest,
    }),
  };

  const itemSx = {
    borderRadius: 2,
    mx: collapsed ? 0.5 : 1,
    my: 0.5,
    px: collapsed ? 0.5 : 1,
    py: 0.75,
    justifyContent: collapsed ? 'center' : 'flex-start',
    '&:hover': { bgcolor: hoverBg },
    '&:hover .MuiListItemIcon-root > *': {
      bgcolor: alpha(theme.palette.common.white, 0.16),
      transform: 'translateY(-1px)',
    },
  };

  const SectionHeader = ({ label }) =>
    collapsed ? null : (
      <>
        <Divider sx={{ my: 1.5, borderColor: paperBorder }} />
        <Typography
          variant="overline"
          sx={{
            color: textMuted,
            pl: 2,
            letterSpacing: 1,
          }}
        >
          {label}
        </Typography>
      </>
    );

  const WrapTooltip = ({ title, children }) => (
    <Tooltip
      title={title}
      placement="right"
      arrow
      disableHoverListener={!collapsed}
      disableFocusListener={!collapsed}
      disableTouchListener={!collapsed}
    >
      <Box>{children}</Box>
    </Tooltip>
  );

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
          overflowX: 'hidden',
          py: 3,
          px: collapsed ? 0 : 2,
          background: 'linear-gradient(160deg, #0F172A 0%, #111827 55%, #0B1220 100%)',
          color: alpha(theme.palette.common.white, 0.92),
          backdropFilter: 'blur(12px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        },
      }}
    >
      {/* Profile Header */}
      <Box textAlign="center" sx={{ px: 1 }}>
        <Avatar
          src={user.img}
          alt={user.name}
          sx={{
            width: collapsed ? 54 : 78,
            height: collapsed ? 54 : 78,
            mx: 'auto',
            mb: 1.5,
            border: `1px solid ${paperBorder}`,
            boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
          }}
        />
        {!collapsed && (
          <>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, lineHeight: 1.2 }}>
              {user.name}
            </Typography>
            <Typography variant="caption" sx={{ color: textMuted, display: 'block', mt: 0.25 }}>
              {user.title}
            </Typography>
            <Typography variant="caption" sx={{ color: textMuted, display: 'block', mt: 0.25 }}>
              {user.org}
            </Typography>
          </>
        )}
      </Box>

      <SectionHeader label="Account" />

      <Box sx={{ px: collapsed ? 0.5 : 1 }}>
        <WrapTooltip title={user.email}>
          <ListItemButton
            component={MuiLink}
            href={`mailto:${user.email}`}
            underline="none"
            sx={itemSx}
            aria-label={`Email ${user.email}`}
          >
            <ListItemIcon sx={{ minWidth: collapsed ? 0 : 48, mr: collapsed ? 0 : 1.5 }}>
              <Box sx={iconWrapSx}>
                <EmailIcon fontSize="small" />
              </Box>
            </ListItemIcon>

            {!collapsed && (
              <ListItemText
                primary={user.email}
                primaryTypographyProps={{ variant: 'body2', sx: { color: '#fff', fontWeight: 500 } }}
              />
            )}
          </ListItemButton>
        </WrapTooltip>

        <WrapTooltip title={user.loc}>
          <ListItemButton disableRipple sx={itemSx} aria-label={`Location ${user.loc}`}>
            <ListItemIcon sx={{ minWidth: collapsed ? 0 : 48, mr: collapsed ? 0 : 1.5 }}>
              <Box sx={iconWrapSx}>
                <LocationOnIcon fontSize="small" />
              </Box>
            </ListItemIcon>

            {!collapsed && (
              <ListItemText
                primary={user.loc}
                primaryTypographyProps={{ variant: 'body2', sx: { color: '#fff', fontWeight: 500 } }}
              />
            )}
          </ListItemButton>
        </WrapTooltip>
      </Box>

      <SectionHeader label="Profiles" />

      <Box sx={{ px: collapsed ? 0.5 : 1, mb: 1 }}>
        {user.links.map((l) => (
          <WrapTooltip key={l.text} title={l.text}>
            <ListItemButton
              component={MuiLink}
              href={l.url}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={itemSx}
              aria-label={l.text}
            >
              <ListItemIcon sx={{ minWidth: collapsed ? 0 : 48, mr: collapsed ? 0 : 1.5 }}>
                <Box sx={iconWrapSx}>{l.icon}</Box>
              </ListItemIcon>

              {!collapsed && (
                <ListItemText
                  primary={l.text}
                  primaryTypographyProps={{ variant: 'body2', sx: { color: '#fff', fontWeight: 500 } }}
                />
              )}
            </ListItemButton>
          </WrapTooltip>
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
            color: alpha(theme.palette.common.white, 0.5),
          }}
        >
          © {new Date().getFullYear()} G. A. Saju
        </Typography>
      )}
    </Drawer>
  );
}
