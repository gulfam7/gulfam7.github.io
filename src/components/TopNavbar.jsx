import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// --- 1. Customize the Tabs indicator ---
const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s',
  },
}));

// --- 2. Customize each Tab for hover/active state ---
const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 400,
  fontSize: '0.9rem',
  letterSpacing: '0.5px',
  minHeight: 48,
  padding: theme.spacing(0, 2),
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&.Mui-selected': {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
}));

// Navigation items configuration
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Publications', path: '/publications' },
  { label: 'Activities', path: '/activities' },
  { label: 'CV', path: '/cv' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function TopNavbar() {
  const theme = useTheme();
  const location = useLocation();
  const [value, setValue] = useState(false);

  useEffect(() => {
    const idx = navItems.findIndex(item => item.path === location.pathname);
    setValue(idx !== -1 ? idx : false);
  }, [location.pathname]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ minHeight: 56, px: 2 }}>
        <Box sx={{ width: '100%' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="navigation tabs"
          >
            {navItems.map((item, idx) => (
              <StyledTab
                key={item.label}
                label={item.label}
                component={RouterLink}
                to={item.path}
                value={idx}
              />
            ))}
          </StyledTabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavbar;
