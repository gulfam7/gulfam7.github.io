// TopNavbar.jsx (modern + icons, MUI-only)
import React, { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';

// Icons (MUI)
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

// --- Modern Tabs (pill tabs + subtle glow indicator) ---
const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 48,
  '& .MuiTabs-flexContainer': {
    gap: 6,
  },
  '& .MuiTabs-indicator': {
    height: 0, // we use pill highlight instead of indicator bar
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: 44,
  padding: theme.spacing(0, 1.5),
  textTransform: 'none',
  borderRadius: 999,
  fontWeight: 500,
  fontSize: '0.92rem',
  letterSpacing: '0.2px',
  color: alpha(theme.palette.text.primary, 0.75),
  transition: 'background-color 200ms ease, color 200ms ease, transform 200ms ease',
  '& .MuiTab-iconWrapper': {
    marginRight: theme.spacing(1),
    marginBottom: 0,
    opacity: 0.9,
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    color: theme.palette.primary.main,
  },
  '&.Mui-selected': {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
}));

export default function TopNavbar() {
  const theme = useTheme();
  const location = useLocation();

  // Keep icons when possible; if you want, you can hide labels on very small screens.
  const isCompact = useMediaQuery('(max-width:600px)');

  const navItems = useMemo(
    () => [
      { label: 'Home', path: '/', icon: <HomeRoundedIcon fontSize="small" /> },
      { label: 'Research', path: '/research', icon: <ScienceRoundedIcon fontSize="small" /> },
      { label: 'Publications', path: '/publications', icon: <LibraryBooksRoundedIcon fontSize="small" /> },
      { label: 'Activities', path: '/activities', icon: <EventNoteRoundedIcon fontSize="small" /> },
      { label: 'CV', path: '/cv', icon: <DescriptionRoundedIcon fontSize="small" /> },
      { label: 'About', path: '/about', icon: <InfoRoundedIcon fontSize="small" /> },
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
        backgroundColor: alpha(theme.palette.background.paper, 0.72),
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
      }}
    >
      <Toolbar
        sx={{
          minHeight: 56,
          px: 2,
          gap: 1,
        }}
      >
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
                label={isCompact ? '' : item.label}
                aria-label={item.label}
              />
            ))}
          </StyledTabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
