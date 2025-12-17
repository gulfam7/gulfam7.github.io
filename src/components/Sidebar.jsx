// src/components/Sidebar.jsx
import React from "react";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { FaResearchgate, FaOrcid } from "react-icons/fa";
import profilePic from "./IMG_7270.jpg";

// Keep exports consistent for Layout.jsx
export const drawerWidth = 280;
export const collapsedWidth = 90;

const WASHU_RED = "#b50505";
const CYAN = "#22d3ee";
const GLASS_BG = alpha("#0f172a", 0.95);

const user = {
  name: "Gulfam Ahmed Saju, PhD",
  title: "Postdoctoral Research Associate",
  institute: "Mallinckrodt Institute of Radiology",
  org: "WASHINGTON UNIVERSITY IN ST. LOUIS",
  email: "gsaju@wustl.edu",
  loc: "St. Louis, MO",
  img: profilePic,
  links: [
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/",
      icon: <LinkedInIcon fontSize="small" />,
    },
    {
      text: "Scholar",
      url: "https://scholar.google.com/citations?user=qewXRr4AAAAJ",
      icon: <SchoolIcon fontSize="small" />,
    },
    {
      text: "ResearchGate",
      url: "https://www.researchgate.net/profile/Gulfam-Saju",
      icon: <FaResearchgate size={18} />,
    },
    {
      text: "GitHub",
      url: "https://github.com/gulfam7",
      icon: <GitHubIcon fontSize="small" />,
    },
    {
      text: "ORCID",
      url: "https://orcid.org/0009-0007-7391-0485",
      icon: <FaOrcid size={18} />,
    },
  ],
};

export default function Sidebar() {
  const theme = useTheme();
  const collapsed = useMediaQuery("(max-width:900px)");
  const width = collapsed ? collapsedWidth : drawerWidth;

  const border = alpha(theme.palette.common.white, 0.08);

  const itemSx = {
    borderRadius: 2,
    mx: collapsed ? 1 : 2,
    my: 0.8,
    px: collapsed ? 1 : 2,
    py: 1.2,
    justifyContent: collapsed ? "center" : "flex-start",
    color: alpha("#fff", 0.65),
    transition: "all 0.25s ease-in-out",
    border: "1px solid transparent",
    "&:hover": {
      bgcolor: alpha(CYAN, 0.08),
      color: "#fff",
      borderColor: alpha(CYAN, 0.2),
      boxShadow: `0 0 15px ${alpha(CYAN, 0.1)}`,
    },
    "&:hover .sidebar-icon": {
      color: CYAN,
      transform: "scale(1.1)",
    },
    "&:hover .chev": {
      opacity: 1,
      transform: "translateX(4px)",
    },
  };

  const iconBoxSx = {
    minWidth: collapsed ? 0 : 42,
    mr: collapsed ? 0 : 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: alpha("#fff", 0.5),
    transition: "all 0.2s ease",
    "& .sidebar-icon": {
      transition: "transform 0.2s ease, color 0.2s ease",
    },
  };

  const SectionLabel = ({ label }) =>
    collapsed ? null : (
      <Typography
        variant="overline"
        sx={{
          px: 3.5,
          mt: 3,
          mb: 1,
          display: "block",
          fontSize: 11,
          letterSpacing: 2.5,
          fontWeight: 800,
          color: alpha("#fff", 0.3),
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
    );

  const WithTooltip = ({ title, children }) => (
    <Tooltip
      title={title}
      placement="right"
      arrow
      disableHoverListener={!collapsed}
      disableFocusListener={!collapsed}
      disableTouchListener={!collapsed}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: alpha("#0f172a", 0.95),
            border: `1px solid ${alpha(CYAN, 0.2)}`,
            backdropFilter: "blur(4px)",
          },
        },
        arrow: { sx: { color: alpha("#0f172a", 0.95) } },
      }}
    >
      <Box>{children}</Box>
    </Tooltip>
  );

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
          backgroundColor: GLASS_BG,
          backdropFilter: "blur(12px)",
          borderRight: `1px solid ${border}`,
          overflow: "hidden", // Crucial: Hides scrollbar on the parent container
          transition: theme.transitions.create("width", {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        },
      }}
    >
      {/* Profile Section (Static at top) */}
      <Box
        sx={{
          pt: 5,
          pb: 2,
          px: collapsed ? 1 : 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0, // Prevent shrinking
          background: `linear-gradient(180deg, ${alpha("#ffffff", 0.03)} 0%, transparent 100%)`,
        }}
      >
        <Avatar
          src={user.img}
          alt={user.name}
          sx={{
            width: collapsed ? 50 : 100,
            height: collapsed ? 50 : 100,
            mb: 2,
            border: `2px solid ${alpha(CYAN, 0.5)}`,
            boxShadow: `0 0 25px ${alpha(CYAN, 0.25)}`,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: `0 0 35px ${alpha(CYAN, 0.4)}`,
              borderColor: CYAN,
            },
          }}
        />

        {!collapsed && (
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: 18,
                letterSpacing: -0.3,
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              {user.name}
            </Typography>

            <Typography
              sx={{
                color: CYAN,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                opacity: 0.9,
              }}
            >
              {user.title}
            </Typography>

            <Box
              sx={{
                my: 1.5,
                height: "1px",
                width: "40%",
                mx: "auto",
                bgcolor: alpha("#fff", 0.1),
              }}
            />

            <Typography
              sx={{
                color: alpha("#fff", 0.6),
                fontSize: 11,
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              {user.institute}
            </Typography>

            <Typography
              sx={{
                color: WASHU_RED,
                fontSize: 10,
                mt: 0.5,
                fontWeight: 900,
                letterSpacing: 0.5,
                textTransform: "uppercase",
              }}
            >
              {user.org}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Middle Section (Scrollable but invisible scrollbar) */}
      <Box
        sx={{
          flex: 1,
          py: 1,
          overflowY: "auto", // Allow scrolling
          overflowX: "hidden",
          // Hide Scrollbar Styling
          "&::-webkit-scrollbar": {
            display: "none", // Hide for Chrome/Safari
          },
          msOverflowStyle: "none", // Hide for Edge
          scrollbarWidth: "none", // Hide for Firefox
        }}
      >
        <SectionLabel label="Contact Info" />

        <Box>
          <WithTooltip title={user.email}>
            <ListItemButton
              component={MuiLink}
              href={`mailto:${user.email}`}
              underline="none"
              sx={itemSx}
              aria-label={`Email ${user.email}`}
            >
              <ListItemIcon sx={iconBoxSx}>
                <EmailIcon className="sidebar-icon" fontSize="small" />
              </ListItemIcon>

              {!collapsed && (
                <ListItemText
                  primary={user.email}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: {
                      fontWeight: 500,
                      fontFamily: "monospace",
                      fontSize: 13,
                    },
                    noWrap: true,
                  }}
                />
              )}
            </ListItemButton>
          </WithTooltip>

          <WithTooltip title={user.loc}>
            <ListItemButton
              disableRipple
              sx={itemSx}
              aria-label={`Location ${user.loc}`}
            >
              <ListItemIcon sx={iconBoxSx}>
                <LocationOnIcon className="sidebar-icon" fontSize="small" />
              </ListItemIcon>

              {!collapsed && (
                <ListItemText
                  primary={user.loc}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: { fontWeight: 500 },
                    noWrap: true,
                  }}
                />
              )}
            </ListItemButton>
          </WithTooltip>
        </Box>

        <SectionLabel label="Scientific Profiles" />

        <Box>
          {user.links.map((link) => (
            <WithTooltip key={link.text} title={link.text}>
              <ListItemButton
                component={MuiLink}
                href={link.url}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                sx={itemSx}
                aria-label={link.text}
              >
                <ListItemIcon sx={iconBoxSx}>
                  <Box
                    className="sidebar-icon"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {link.icon}
                  </Box>
                </ListItemIcon>

                {!collapsed && (
                  <>
                    <ListItemText
                      primary={link.text}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: { fontWeight: 600 },
                      }}
                    />
                    <Box
                      className="chev"
                      sx={{
                        ml: "auto",
                        opacity: 0,
                        transform: "translateX(-5px)",
                        transition: "all 0.3s ease",
                        color: CYAN,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ChevronRightIcon fontSize="small" />
                    </Box>
                  </>
                )}
              </ListItemButton>
            </WithTooltip>
          ))}
        </Box>
      </Box>

      {/* Footer (Static at bottom) */}
      {!collapsed && (
        <Box
          sx={{
            p: 3,
            borderTop: `1px solid ${border}`,
            flexShrink: 0, // Prevent shrinking
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              color: alpha("#fff", 0.25),
              textAlign: "center",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            © {new Date().getFullYear()} G. A. Saju
          </Typography>
        </Box>
      )}
    </Drawer>
  );
}
