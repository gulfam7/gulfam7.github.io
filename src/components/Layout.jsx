import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Sidebar, { drawerWidth, collapsedWidth } from './Sidebar';
import TopNavbar from './TopNavbar';

function Layout() {
  const theme = useTheme();
  const collapsed = useMediaQuery(theme.breakpoints.down('md')); // md == 900px by default
  const sideW = collapsed ? collapsedWidth : drawerWidth;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${sideW}px)`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          minWidth: 0,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <TopNavbar />

        <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto', overflowX: 'hidden' }}>
          <Outlet />
        </Box>

        <Box
          component="footer"
          sx={{
            py: 1.5,
            px: 3,
            mt: 'auto',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[200] : t.palette.grey[800]),
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Gulfam Ahmed Saju. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
