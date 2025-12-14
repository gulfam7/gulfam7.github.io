import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

// Keep your routes exactly the same
const navItems = [
  { label: 'Home', path: '/', icon: <HomeRoundedIcon fontSize="small" /> },
  { label: 'Research', path: '/research', icon: <ScienceRoundedIcon fontSize="small" /> },
  { label: 'Publications', path: '/publications', icon: <ArticleRoundedIcon fontSize="small" /> },
  { label: 'Activities', path: '/activities', icon: <EventNoteRoundedIcon fontSize="small" /> },
  { label: 'CV', path: '/cv', icon: <PictureAsPdfRoundedIcon fontSize="small" /> },
  { label: 'About', path: '/about', icon: <InfoRoundedIcon fontSize="small" /> },
  { label: 'Contact', path: '/contact', icon: <MailRoundedIcon fontSize="small" /> },
];

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 48,
  '& .MuiTabs-indicator': { display: 'none' }, // removes the “line” behavior entirely
  '& .MuiTabs-flexContainer': { gap: 6 },
  '& .MuiTabs-scrollButtons': {
    color: alpha(theme.palette.common.white, 0.7),
    '&.Mui-disabled': { opacity: 0.2 },
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: 40,
  padding: theme.spacing(0.75, 1.25),
  borderRadius: 999,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.9rem',
  letterSpacing: '0.2px',
  color: alpha(theme.palette.common.white, 0.72),
  transition: 'all 180ms ease',
  '& .MuiTab-iconWrapper': {
    marginRight: 8,
    color: alpha(theme.palette.common.white, 0.55),
    transition: 'color 180ms ease',
  },
  '&:hover': {
    backgroundColor: alpha('#22d3ee', 0.10),
    color: alpha(theme.palette.common.white, 0.95),
    '& .MuiTab-iconWrapper': { color: alpha('#22d3ee', 0.9) },
  },
  '&.Mui-selected': {
    backgroundColor: alpha('#22d3ee', 0.14),
    border: `1px solid ${alpha('#22d3ee', 0.25)}`,
    color: alpha('#22d3ee', 0.95),
    '& .MuiTab-iconWrapper': { color: alpha('#22d3ee', 0.95) },
  },
}));

function TopNavbar() {
  const theme = useTheme();
  const location = useLocation();

  const currentValue = navItems.some((x) => x.path === location.pathname)
    ? location.pathname
    : false;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'linear-gradient(160deg, rgba(31,41,55,0.92) 0%, rgba(17,24,39,0.92) 100%)',
        backdropFilter: 'blur(10px)',
        // Replace the “black line” with a subtle modern separator
        boxShadow: `0 1px 0 ${alpha(theme.palette.common.white, 0.08)}`,
      }}
    >
      <Toolbar sx={{ minHeight: 56, px: 2 }}>
        <Box sx={{ width: '100%' }}>
          <StyledTabs
            value={currentValue}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="navigation tabs"
          >
            {navItems.map((item) => (
              <StyledTab
                key={item.path}
                value={item.path}
                label={item.label}
                icon={item.icon}
                iconPosition="start"
                component={RouterLink}
                to={item.path}
              />
            ))}
          </StyledTabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavbar;
