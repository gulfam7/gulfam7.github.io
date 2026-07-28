import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import ScrollToTop from './ScrollToTop';
import CommandPalette from './CommandPalette';
import { C, MONO } from '../theme';

function Layout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Keyboard users can jump past the sidebar and tab bar. */}
      <Box component="a" href="#main-content" className="skip-link">
        skip to content
      </Box>

      <ScrollToTop />
      <CommandPalette />

      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          bgcolor: 'background.default',
        }}
      >
        <TopNavbar />

        {/* No padding here — PageShell owns each page's own chrome, and the
            document (not an inner div) does the scrolling so that sticky
            positioning, scroll restoration and mobile URL-bar behaviour all
            work the way the browser intends. */}
        <Box component="main" id="main-content" sx={{ flexGrow: 1, minWidth: 0 }}>
          <Outlet />
        </Box>

        <Box
          component="footer"
          sx={{
            py: 1.4,
            px: 3,
            mt: 'auto',
            bgcolor: C.bgDeep,
            borderTop: `1px solid ${C.borderSub}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: C.textMuted, fontFamily: MONO, fontSize: 11 }}
          >
            © {new Date().getFullYear()} Gulfam Ahmed Saju · All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
