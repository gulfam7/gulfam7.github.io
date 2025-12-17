// Sidebar.jsx – modern slate/cyan style (MUI-only; safe copy-paste)
// Keeps exports: drawerWidth, collapsedWidth (Layout.jsx compatible)

import React from "react";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
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

export const drawerWidth = 260;
export const collapsedWidth = 84;

const WASHU_RED = "#0f172a";
const CYAN = "#22d3ee";
const PAPER_BG = "#0f172a";

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

  const border = alpha(theme.palette.common.white, 0.06);
  const muted = alpha(theme.palette.common.white, 0.62);

  const itemSx = {
    borderRadius: 3,
    mx: collapsed ? 1 : 1.5,
    my: 0.5,
    px: collapsed ? 1 : 1.5,
    py: 1,
    justifyContent: collapsed ? "center" : "flex-start",
    color: muted,
    transition: theme.transitions.create(["background-color", "color", "transform"], {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      bgcolor: alpha(theme.palette.common.white, 0.05),
      color: CYAN,
    },
    "&:hover .sidebar-icon": {
      color: CYAN,
    },
    "&:hover .chev": {
      opacity: 1,
      transform: "translateX(2px)",
    },
  };

  const iconBoxSx = {
    minWidth: collapsed ? 0 : 40,
    mr: collapsed ? 0 : 1.25,
    display: "grid",
    placeItems: "center",
    color: alpha(theme.palette.common.white, 0.55),
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
    }),
  };

  const SectionLabel = ({ label }) =>
    collapsed ? null : (
      <Typography
        variant="overline"
        sx={{
          px: 3,
          mt: 2,
          mb: 0.75,
          fontSize: 10,
          letterSpacing: 2,
          fontWeight: 800,
          color: alpha(theme.palette.common.white, 0.35),
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
          backgroundColor: PAPER_BG,
          borderRight: `1px solid ${border}`,
          overflowX: "hidden",
          transition: theme.transitions.create("width", {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        },
      }}
    >
      {/* Profile */}
      <Box
        sx={{
          pt: 3,
          pb: 2,
          px: collapsed ? 1 : 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={user.img}
          alt={user.name}
          sx={{
            width: collapsed ? 48 : 92,
            height: collapsed ? 48 : 92,
            mb: 1.5,
            border: `2px solid ${alpha(CYAN, 0.35)}`,
            boxShadow: `0 0 18px ${alpha(CYAN, 0.16)}`,
          }}
        />

        {!collapsed && (
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: -0.2,
                lineHeight: 1.15,
              }}
            >
              {user.name}
            </Typography>

            <Typography sx={{ color: CYAN, fontSize: 12, fontWeight: 600, mt: 0.5 }}>
              {user.title}
            </Typography>

            <Typography
              sx={{
                color: alpha(theme.palette.common.white, 0.55),
                fontSize: 11,
                mt: 0.75,
                fontWeight: 700,
              }}
            >
              {user.institute}
            </Typography>

            <Typography
              sx={{
                color: WASHU_RED,
                fontSize: 11,
                mt: 0.35,
                fontWeight: 800,
                letterSpacing: 0.2,
              }}
            >
              {user.org}
            </Typography>
          </Box>
        )}
      </Box>

      <Divider sx={{ borderColor: border }} />

      {/* Content */}
      <Box sx={{ flex: 1, py: 1.5 }}>
        <SectionLabel label="Account" />

        <Box sx={{ mt: 0.5 }}>
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
                    sx: { color: "inherit", fontWeight: 600 },
                    noWrap: true,
                  }}
                />
              )}
            </ListItemButton>
          </WithTooltip>

          <WithTooltip title={user.loc}>
            <ListItemButton disableRipple sx={itemSx} aria-label={`Location ${user.loc}`}>
              <ListItemIcon sx={iconBoxSx}>
                <LocationOnIcon className="sidebar-icon" fontSize="small" />
              </ListItemIcon>

              {!collapsed && (
                <ListItemText
                  primary={user.loc}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: { color: "inherit", fontWeight: 600 },
                    noWrap: true,
                  }}
                />
              )}
            </ListItemButton>
          </WithTooltip>
        </Box>

        {!collapsed && (
          <Box sx={{ px: 3, mt: 2 }}>
            <Box sx={{ height: 1, bgcolor: border, width: "100%", mb: 2 }} />
          </Box>
        )}

        <SectionLabel label="Profiles" />

        <Box sx={{ mt: 0.5 }}>
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
                  <Box className="sidebar-icon" sx={{ display: "grid", placeItems: "center" }}>
                    {link.icon}
                  </Box>
                </ListItemIcon>

                {!collapsed && (
                  <>
                    <ListItemText
                      primary={link.text}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: { color: "inherit", fontWeight: 600 },
                      }}
                    />
                    <Box
                      className="chev"
                      sx={{
                        ml: "auto",
                        opacity: 0,
                        transform: "translateX(0px)",
                        transition: theme.transitions.create(["opacity", "transform"], {
                          duration: theme.transitions.duration.shortest,
                        }),
                        color: alpha(CYAN, 0.9),
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

      {/* Footer */}
      {!collapsed && (
        <Box sx={{ p: 2.5, borderTop: `1px solid ${border}` }}>
          <Typography
            sx={{
              fontSize: 10,
              color: alpha(theme.palette.common.white, 0.3),
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} G. A. Saju
          </Typography>
        </Box>
      )}
    </Drawer>
  );
}
