import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Sidebar, { drawerWidth, collapsedWidth } from './Sidebar';
import TopNavbar from './TopNavbar';

function Layout() {
  const theme = useTheme();
  const collapsed = useMediaQuery(theme.breakpoints.down('md'));
  const sideW = collapsed ? collapsedWidth : drawerWidth;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
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
          bgcolor: 'background.default',
        }}
      >
        <TopNavbar />

        <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto', overflowX: 'hidden' }}>
          <Outlet />
        </Box>

        <Box
          component="footer"
          sx={{
            py: 1.25,
            px: 3,
            mt: 'auto',
            bgcolor: '#010409',
            borderTop: '1px solid #21262d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#484f58',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
            }}
          >
            © {new Date().getFullYear()} Gulfam Ahmed Saju · All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;

