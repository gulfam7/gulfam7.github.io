// src/components/TopNavbar.jsx  â€”  VS Code editor tab bar
import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography, useMediaQuery } from "@mui/material";
import { alpha } from "@mui/material/styles";

import HomeRoundedIcon          from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon        from "@mui/icons-material/PersonRounded";
import ScienceRoundedIcon       from "@mui/icons-material/ScienceRounded";
import LibraryBooksRoundedIcon  from "@mui/icons-material/LibraryBooksRounded";
import EventNoteRoundedIcon     from "@mui/icons-material/EventNoteRounded";
import DescriptionRoundedIcon   from "@mui/icons-material/DescriptionRounded";
import EmailRoundedIcon         from "@mui/icons-material/EmailRounded";
import CloseRoundedIcon         from "@mui/icons-material/CloseRounded";

// â”€â”€ Colour tokens â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const BG_BAR  = "#010409";
const BG_TAB  = "#0d1117";
const BORDER  = "#21262d";
const ACCENT  = "#58a6ff";
const COMMENT = "#8b949e";

const tabColors = {
  "/":            "#a5d6ff",  // STR blue
  "/about":       ACCENT,
  "/research":    "#7ee787",  // green
  "/publications":"#ffa657",  // orange
  "/activities":  COMMENT,
  "/cv":          "#ff7b72",  // red
  "/contact":     "#d2a8ff",  // purple
};

const navItems = [
  { label: "home",         ext: "tsx", path: "/",             icon: <HomeRoundedIcon         sx={{ fontSize: 13 }} /> },
  { label: "about",        ext: "md",  path: "/about",        icon: <PersonRoundedIcon       sx={{ fontSize: 13 }} /> },
  { label: "research",     ext: "py",  path: "/research",     icon: <ScienceRoundedIcon      sx={{ fontSize: 13 }} /> },
  { label: "publications", ext: "bib", path: "/publications", icon: <LibraryBooksRoundedIcon sx={{ fontSize: 13 }} /> },
  { label: "activities",   ext: "log", path: "/activities",   icon: <EventNoteRoundedIcon    sx={{ fontSize: 13 }} /> },
  { label: "cv",           ext: "pdf", path: "/cv",           icon: <DescriptionRoundedIcon  sx={{ fontSize: 13 }} /> },
  { label: "contact",      ext: "rs",  path: "/contact",      icon: <EmailRoundedIcon        sx={{ fontSize: 13 }} /> },
];

export default function TopNavbar() {
  const location = useLocation();
  const compact  = useMediaQuery("(max-width:700px)");

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: BG_BAR,
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "40px !important",
          px: 0,
          display: "flex",
          alignItems: "stretch",
          overflowX: "auto",
          overflowY: "hidden",
          // Hide scrollbar
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {navItems.map((item) => {
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

          const color = tabColors[item.path] ?? ACCENT;

          return (
            <Box
              key={item.path}
              component={NavLink}
              to={item.path}
              end={item.path === "/"}
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                px: { xs: 1.5, md: 2 },
                minWidth: compact ? 40 : "auto",
                whiteSpace: "nowrap",
                position: "relative",
                cursor: "pointer",
                bgcolor: isActive ? BG_TAB : "transparent",
                color: isActive ? "#e6edf3" : COMMENT,
                borderRight: `1px solid ${BORDER}`,
                // top accent line for active
                "&::after": isActive
                  ? {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      bgcolor: color,
                      borderRadius: "0 0 2px 2px",
                    }
                  : {},
                transition: "background 160ms, color 160ms",
                "&:hover": {
                  bgcolor: isActive ? BG_TAB : `${ACCENT}0a`,
                  color: "#e6edf3",
                },
              }}
            >
              {/* file icon */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: isActive ? color : COMMENT,
                  transition: "color 160ms",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>

              {/* filename */}
              {!compact && (
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12.5,
                    lineHeight: 1,
                  }}
                >
                  {item.label}
                  <Box component="span" sx={{ color: isActive ? color : alpha(COMMENT, 0.6), fontSize: 11 }}>
                    .{item.ext}
                  </Box>
                </Typography>
              )}

              {/* decorative Ã— for active tab */}
              {isActive && !compact && (
                <CloseRoundedIcon
                  sx={{
                    fontSize: 12,
                    ml: 0.5,
                    color: alpha(COMMENT, 0.35),
                    flexShrink: 0,
                  }}
                />
              )}
            </Box>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
