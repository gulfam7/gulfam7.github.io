import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Typography } from '@mui/material';
import Sidebar, { drawerWidth } from './Sidebar';
import TopNavbar from './TopNavbar';

function Layout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          minWidth: 0,
        }}
      >
        <TopNavbar />
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
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
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Gulfam Ahmed Saju. All Rights Reserved.'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
