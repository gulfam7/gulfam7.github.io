// src/components/Sidebar.jsx  â€”  VS Code Explorer aesthetic
import React from "react";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { NavLink, useLocation } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { FaResearchgate, FaOrcid } from "react-icons/fa";
import profilePic from "./IMG_7270.jpg";

export const drawerWidth   = 270;
export const collapsedWidth = 60;

// â”€â”€ Colour tokens â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const BG      = "#010409";
const SURFACE = "#0d1117";
const BORDER  = "#21262d";
const ACCENT  = "#58a6ff";
const GREEN   = "#7ee787";
const STR     = "#a5d6ff";
const COMMENT = "#8b949e";
const KEYWORD = "#ff7b72";

const navItems = [
  { label: "home",         ext: "tsx", path: "/",            icon: <HomeRoundedIcon         fontSize="small" />, color: STR      },
  { label: "about",        ext: "md",  path: "/about",       icon: <PersonRoundedIcon       fontSize="small" />, color: ACCENT   },
  { label: "research",     ext: "py",  path: "/research",    icon: <ScienceRoundedIcon      fontSize="small" />, color: GREEN    },
  { label: "publications", ext: "bib", path: "/publications",icon: <LibraryBooksRoundedIcon fontSize="small" />, color: "#ffa657"},
  { label: "activities",   ext: "log", path: "/activities",  icon: <EventNoteRoundedIcon    fontSize="small" />, color: COMMENT  },
  { label: "cv",           ext: "pdf", path: "/cv",          icon: <DescriptionRoundedIcon  fontSize="small" />, color: KEYWORD  },
  { label: "contact",      ext: "rs",  path: "/contact",     icon: <EmailRoundedIcon        fontSize="small" />, color: "#d2a8ff"},
];

const socialLinks = [
  { text: "LinkedIn",    url: "https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/", icon: <LinkedInIcon  sx={{ fontSize: 16 }} /> },
  { text: "Scholar",     url: "https://scholar.google.com/citations?user=qewXRr4AAAAJ",  icon: <SchoolIcon    sx={{ fontSize: 16 }} /> },
  { text: "ResearchGate",url: "https://www.researchgate.net/profile/Gulfam-Saju",        icon: <FaResearchgate size={14} /> },
  { text: "GitHub",      url: "https://github.com/gulfam7",                               icon: <GitHubIcon    sx={{ fontSize: 16 }} /> },
  { text: "ORCID",       url: "https://orcid.org/0009-0007-7391-0485",                   icon: <FaOrcid       size={14} /> },
];

export default function Sidebar() {
  const theme   = useTheme();
  const location = useLocation();
  const collapsed = useMediaQuery("(max-width:900px)");
  const width  = collapsed ? collapsedWidth : drawerWidth;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          boxSizing: "border-box",
          border: "none",
          backgroundColor: BG,
          borderRight: `1px solid ${BORDER}`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition: theme.transitions.create("width", {
            duration: theme.transitions.duration.standard,
          }),
        },
      }}
    >
      {/* â”€â”€ Profile section â”€â”€ */}
      <Box
        sx={{
          px: collapsed ? 0 : 2.5,
          pt: collapsed ? 2 : 2.5,
          pb: collapsed ? 1.5 : 2,
          display: "flex",
          flexDirection: "column",
          alignItems: collapsed ? "center" : "flex-start",
          borderBottom: `1px solid ${BORDER}`,
          bgcolor: "#0d1117",
        }}
      >
        <Tooltip title={collapsed ? "Gulfam Ahmed Saju, PhD" : ""} placement="right" arrow>
          <Avatar
            src={profilePic}
            alt="Gulfam Ahmed Saju"
            sx={{
              width: collapsed ? 34 : 52,
              height: collapsed ? 34 : 52,
              border: `2px solid ${alpha(ACCENT, 0.4)}`,
              mb: collapsed ? 0 : 1.5,
              transition: "all 0.25s ease",
              "&:hover": { borderColor: ACCENT },
            }}
          />
        </Tooltip>

        {!collapsed && (
          <>
            <Typography sx={{ color: "#e6edf3", fontWeight: 700, fontSize: 14, lineHeight: 1.3, mb: 0.25 }}>
              Gulfam Ahmed Saju, PhD
            </Typography>
            <Typography sx={{ color: ACCENT, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, mb: 0.5 }}>
              Postdoctoral Researcher
            </Typography>
            <Typography sx={{ color: COMMENT, fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, lineHeight: 1.5 }}>
              Mallinckrodt Institute, WashU
            </Typography>

            {/* Contact info row */}
            <Box sx={{ mt: 1.5, display: "flex", flexDirection: "column", gap: 0.5, width: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <EmailIcon sx={{ fontSize: 12, color: COMMENT }} />
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, color: GREEN }}>
                  gsaju@wustl.edu
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <LocationOnIcon sx={{ fontSize: 12, color: COMMENT }} />
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, color: COMMENT }}>
                  St. Louis, MO
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>

      {/* â”€â”€ Navigation (file tree) â”€â”€ */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          py: 1,
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {!collapsed && (
          <Typography
            sx={{
              px: 2.5,
              py: 0.5,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10,
              color: COMMENT,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            &gt; gulfam7.github.io
          </Typography>
        )}

        {navItems.map((item) => {
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

          return (
            <Tooltip
              key={item.path}
              title={collapsed ? `${item.label}.${item.ext}` : ""}
              placement="right"
              arrow
            >
              <Box
                component={NavLink}
                to={item.path}
                end={item.path === "/"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: collapsed ? 0 : 1.25,
                  px: collapsed ? 0 : 2.5,
                  py: 0.6,
                  mx: 0,
                  textDecoration: "none",
                  cursor: "pointer",
                  position: "relative",
                  color: isActive ? "#e6edf3" : COMMENT,
                  bgcolor: isActive ? `${ACCENT}16` : "transparent",
                  borderLeft: isActive ? `2px solid ${ACCENT}` : "2px solid transparent",
                  justifyContent: collapsed ? "center" : "flex-start",
                  transition: "all 160ms ease",
                  "&:hover": {
                    bgcolor: `${ACCENT}10`,
                    color: "#e6edf3",
                  },
                }}
              >
                {/* file icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isActive ? item.color : COMMENT,
                    transition: "color 160ms",
                    flex: "0 0 auto",
                    "& svg, & .file-icon": { fontSize: 16 },
                  }}
                >
                  {item.icon}
                </Box>

                {!collapsed && (
                  <>
                    <Typography
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 13,
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                      <Box component="span" sx={{ color: item.color, fontSize: 11.5 }}>
                        .{item.ext}
                      </Box>
                    </Typography>
                    {isActive && (
                      <ChevronRightIcon sx={{ fontSize: 14, color: ACCENT, opacity: 0.7 }} />
                    )}
                  </>
                )}
              </Box>
            </Tooltip>
          );
        })}
      </Box>

      {/* â”€â”€ Social links (bottom) â”€â”€ */}
      {!collapsed && (
        <Box
          sx={{
            px: 2.5,
            py: 1.75,
            borderTop: `1px solid ${BORDER}`,
            bgcolor: "#0d1117",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10,
              color: COMMENT,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              mb: 1,
              fontWeight: 700,
            }}
          >
            Profiles
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {socialLinks.map((link) => (
              <Tooltip key={link.text} title={link.text} placement="top" arrow>
                <Box
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: 1.5,
                    bgcolor: SURFACE,
                    border: `1px solid ${BORDER}`,
                    color: COMMENT,
                    textDecoration: "none",
                    transition: "all 160ms ease",
                    "&:hover": {
                      color: ACCENT,
                      borderColor: `${ACCENT}66`,
                      bgcolor: `${ACCENT}12`,
                    },
                  }}
                >
                  {link.icon}
                </Box>
              </Tooltip>
            ))}
          </Box>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 9.5,
              color: alpha(COMMENT, 0.4),
              mt: 1.5,
            }}
          >
            © {new Date().getFullYear()} G. A. Saju
          </Typography>
        </Box>
      )}

      {/* Collapsed: social icons stacked */}
      {collapsed && (
        <Box
          sx={{
            py: 1.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.75,
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          {socialLinks.map((link) => (
            <Tooltip key={link.text} title={link.text} placement="right" arrow>
              <Box
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: 1.5,
                  color: COMMENT,
                  textDecoration: "none",
                  transition: "color 160ms",
                  "&:hover": { color: ACCENT },
                }}
              >
                {link.icon}
              </Box>
            </Tooltip>
          ))}
        </Box>
      )}
    </Drawer>
  );
}
