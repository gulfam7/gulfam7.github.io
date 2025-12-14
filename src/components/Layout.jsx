// Layout.jsx (updated; responsive to collapsed sidebar width)
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Typography, useMediaQuery } from '@mui/material';
import Sidebar, { drawerWidth, collapsedWidth } from './Sidebar';
import TopNavbar from './TopNavbar';

function Layout() {
  const isCollapsed = useMediaQuery('(max-width:900px)');
  const sidebarW = isCollapsed ? collapsedWidth : drawerWidth;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${sidebarW}px)`,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          bgcolor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
        }}
      >
        <TopNavbar />

        <Box
          sx={{
            flexGrow: 1,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2, sm: 3 },
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <Outlet />
        </Box>

        <Box
          component="footer"
          sx={{
            py: 1.5,
            px: 3,
            mt: 'auto',
            bgcolor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
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
