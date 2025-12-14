// src/components/TopNavbar.jsx
// Modern dark-glass + icons, consistent with sidebar, with Profile right after Home.
import React, { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Box, useMediaQuery } from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';

// MUI Icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const ACCENT = '#22d3ee';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 48,
  '& .MuiTabs-flexContainer': { gap: 6 },
  '& .MuiTabs-indicator': { height: 0 }, // remove underline
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: 44,
  padding: theme.spacing(0, 1.5),
  borderRadius: 999,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.92rem',
  letterSpacing: '0.2px',
  color: alpha('#ffffff', 0.78),
  transition: 'background-color 200ms ease, color 200ms ease, transform 200ms ease',

  '& .MuiTab-iconWrapper': {
    marginRight: theme.spacing(1),
    marginBottom: 0,
    opacity: 0.95,
  },

  '&:hover': {
    backgroundColor: alpha('#ffffff', 0.06),
    color: '#ffffff',
  },

  '&.Mui-selected': {
    backgroundColor: alpha(ACCENT, 0.16),
    color: ACCENT,
    fontWeight: 700,
  },

  '&:active': { transform: 'translateY(1px)' },
}));

export default function TopNavbar() {
  const theme = useTheme();
  const location = useLocation();
  const compact = useMediaQuery('(max-width:600px)');

  const navItems = useMemo(
    () => [
      { label: 'Home', path: '/', icon: <HomeRoundedIcon fontSize="small" /> },

      // Profile right after Home (uses AboutPage component routed as /profile)
      { label: 'Profile', path: '/about', icon: <PersonRoundedIcon fontSize="small" /> },

      { label: 'Research', path: '/research', icon: <ScienceRoundedIcon fontSize="small" /> },
      { label: 'Publications', path: '/publications', icon: <LibraryBooksRoundedIcon fontSize="small" /> },
      { label: 'Activities', path: '/activities', icon: <EventNoteRoundedIcon fontSize="small" /> },
      { label: 'CV', path: '/cv', icon: <DescriptionRoundedIcon fontSize="small" /> },
      { label: 'Contact', path: '/contact', icon: <EmailRoundedIcon fontSize="small" /> },
    ],
    []
  );

  const [value, setValue] = useState(false);

  useEffect(() => {
    const idx = navItems.findIndex((item) => item.path === location.pathname);
    setValue(idx !== -1 ? idx : false);
  }, [location.pathname, navItems]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'linear-gradient(160deg, rgba(31,41,55,0.86) 0%, rgba(17,24,39,0.86) 100%)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        borderBottom: 'none',
        boxShadow: `0 1px 0 ${alpha('#ffffff', 0.08)}`, // subtle separation line (not thick/black)
      }}
    >
      <Toolbar sx={{ minHeight: 56, px: 2 }}>
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <StyledTabs
            value={value}
            onChange={(_, v) => setValue(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="navigation tabs"
          >
            {navItems.map((item, idx) => (
              <StyledTab
                key={item.label}
                value={idx}
                component={RouterLink}
                to={item.path}
                icon={item.icon}
                iconPosition="start"
                label={compact ? '' : item.label}
                aria-label={item.label}
              />
            ))}
          </StyledTabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
