// src/pages/HomePage.jsx
import React, { useCallback } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Chip,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

// Icons
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

// Particles
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function HomePage() {
  const theme = useTheme();

  // Color Palette
  const ACCENT = "#22d3ee";
  const WASHU_RED = "#BA0C2F";
  const DARK_TEXT = "#0f172a";

  const name = "Gulfam Ahmed Saju, PhD";
  const role = "Postdoctoral Research Associate";
  const institution = "Washington University in St. Louis";
  const school = "School of Medicine";

  const summary =
    "I develop AI systems for medical imaging and efficient intelligence. My work spans foundation-model-driven agents, MRI reconstruction and artifact correction, and brain-inspired spiking neural networks for compute-efficient inference.";

  // --- Particles Config (Kept safe & optimized) ---
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 110, duration: 0.35 },
      },
    },
    particles: {
      color: { value: "#64748b" },
      links: {
        color: "#94a3b8",
        distance: 160,
        enable: true,
        opacity: 0.12,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.7,
        straight: false,
      },
      number: { density: { enable: true, area: 950 }, value: 38 },
      opacity: { value: 0.28 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // --- Modern Styles ---

  // "Glass" Card Style
  const glassCardSx = {
    background: "rgba(255, 255, 255, 0.65)", // High transparency
    backdropFilter: "blur(12px)", // The frosted glass effect
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: 4,
    border: `1px solid ${alpha("#ffffff", 0.6)}`,
    boxShadow: `0 8px 32px 0 ${alpha("#0f172a", 0.05)}`,
    transition: "all 0.3s ease",
  };

  // Interactive Card Style (extends glass)
  const interactiveCardSx = {
    ...glassCardSx,
    height: "100%",
    background: "rgba(255, 255, 255, 0.75)",
    "&:hover": {
      transform: "translateY(-5px)",
      borderColor: alpha(ACCENT, 0.5),
      boxShadow: `0 15px 40px -10px ${alpha(ACCENT, 0.15)}`,
    },
  };

  const chipBaseSx = {
    fontWeight: 600,
    border: `1px solid ${alpha(DARK_TEXT, 0.08)}`,
    backgroundColor: alpha("#ffffff", 0.5),
    backdropFilter: "blur(4px)",
    color: alpha(DARK_TEXT, 0.8),
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: alpha(ACCENT, 0.1),
      borderColor: alpha(ACCENT, 0.3),
      transform: "translateY(-1px)",
    },
  };

  return (
    <Box
      sx={{
        mx: { xs: -4, md: -4 },
        my: { xs: -4, md: -4 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#f8fafc", // Very slight grey base
        minHeight: "100%",
      }}
    >
      {/* Dynamic Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "50%",
            height: "50%",
            background: `radial-gradient(circle, ${alpha(ACCENT, 0.15)} 0%, rgba(0,0,0,0) 70%)`,
            filter: "blur(60px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "-5%",
            width: "40%",
            height: "40%",
            background: `radial-gradient(circle, ${alpha("#3b82f6", 0.1)} 0%, rgba(0,0,0,0) 70%)`,
            filter: "blur(60px)",
          }}
        />
      </Box>

      {/* Particles Layer */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 5, md: 8 } }}>
        
        {/* --- Hero Section --- */}
        <Box sx={{ ...glassCardSx, px: { xs: 3, md: 6 }, py: { xs: 5, md: 6 }, mb: 6 }}>
          <Stack spacing={2}>
            
            {/* Status Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                width: "fit-content",
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                border: `1px solid ${alpha(ACCENT, 0.3)}`,
                backgroundColor: alpha(ACCENT, 0.08),
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: ACCENT,
                  boxShadow: `0 0 10px ${ACCENT}`,
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%": { boxShadow: `0 0 0 0 ${alpha(ACCENT, 0.4)}` },
                    "70%": { boxShadow: `0 0 0 6px rgba(0, 0, 0, 0)` },
                    "100%": { boxShadow: `0 0 0 0 rgba(0, 0, 0, 0)` },
                  },
                }}
              />
              <Typography sx={{ fontSize: 12, fontWeight: 800, color: alpha(DARK_TEXT, 0.8), letterSpacing: 0.5 }}>
                OPEN TO COLLABORATIONS
              </Typography>
            </Box>

            {/* Name & Title */}
            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  color: DARK_TEXT,
                  letterSpacing: "-0.03em",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 1,
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  color: alpha(DARK_TEXT, 0.8),
                  mb: 1,
                }}
              >
                {role}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: alpha(DARK_TEXT, 0.9),
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <span style={{ color: WASHU_RED }}>{institution}</span>
                <span style={{ color: alpha(DARK_TEXT, 0.4), fontWeight: 300 }}>|</span>
                <span style={{ color: alpha(DARK_TEXT, 0.6) }}>{school}</span>
              </Typography>
            </Box>

            {/* Summary */}
            <Box sx={{ display: "flex", gap: 3, pt: 2 }}>
              <Box
                sx={{
                  width: 3,
                  borderRadius: 2,
                  background: `linear-gradient(180deg, ${ACCENT} 0%, ${alpha(ACCENT, 0.1)} 100%)`,
                }}
              />
              <Typography
                sx={{
                  color: alpha(DARK_TEXT, 0.7),
                  maxWidth: 800,
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                {summary}
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Stack direction="row" spacing={2} sx={{ pt: 3 }} flexWrap="wrap" useFlexGap>
              <Button
                component={RouterLink}
                to="/research"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 700,
                  backgroundColor: DARK_TEXT,
                  color: "#fff",
                  boxShadow: `0 10px 20px -5px ${alpha(DARK_TEXT, 0.3)}`,
                  "&:hover": { 
                    backgroundColor: alpha(DARK_TEXT, 0.9),
                    transform: "translateY(-2px)",
                    boxShadow: `0 15px 30px -5px ${alpha(DARK_TEXT, 0.4)}`,
                  },
                  transition: "all 0.2s ease"
                }}
              >
                Explore Research
              </Button>

              <Button
                component={RouterLink}
                to="/publications"
                variant="outlined"
                sx={{
                  borderRadius: 999,
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 700,
                  borderColor: alpha(DARK_TEXT, 0.2),
                  color: DARK_TEXT,
                  borderWidth: "1.5px",
                  "&:hover": {
                    borderColor: ACCENT,
                    backgroundColor: alpha(ACCENT, 0.05),
                    borderWidth: "1.5px",
                  },
                }}
              >
                Publications
              </Button>
              
              <Stack direction="row" spacing={0}>
                  <Button component={RouterLink} to="/cv" sx={{ color: alpha(DARK_TEXT, 0.7), fontWeight: 600 }}>CV</Button>
                  <Button component={RouterLink} to="/contact" sx={{ color: alpha(DARK_TEXT, 0.7), fontWeight: 600 }}>Contact</Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* --- Research Areas Cards --- */}
        <Grid container spacing={3}>
          {[
            {
              icon: <ScienceRoundedIcon fontSize="large" sx={{ color: ACCENT }} />,
              title: "Accelerated MRI",
              desc: "AI methods to accelerate MRI reconstruction while preserving clinically meaningful structure and quantitative fidelity.",
            },
            {
              icon: <AutoFixHighRoundedIcon fontSize="large" sx={{ color: ACCENT }} />,
              title: "Motion / Artifact Correction",
              desc: "Robust correction of motion and real-world degradations to reduce rescans and stabilize downstream analysis.",
            },
            {
              icon: <PsychologyRoundedIcon fontSize="large" sx={{ color: ACCENT }} />,
              title: "Alzheimer’s / CNS AI",
              desc: "Learning-based detection and characterization for Alzheimer’s disease and related CNS conditions using brain imaging.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={interactiveCardSx}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ 
                    mb: 2, 
                    p: 1.5, 
                    width: "fit-content", 
                    borderRadius: 3, 
                    bgcolor: alpha(ACCENT, 0.1) 
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ color: DARK_TEXT, fontWeight: 800, mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: alpha(DARK_TEXT, 0.65), lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* --- Skills Section --- */}
        <Box sx={{ mt: 6 }}>
          <Divider sx={{ mb: 4, borderColor: alpha(DARK_TEXT, 0.08) }} />
          <Typography variant="subtitle2" sx={{ color: alpha(DARK_TEXT, 0.5), fontWeight: 800, mb: 2, textTransform: "uppercase", letterSpacing: 1 }}>
            Technical Arsenal
          </Typography>

          <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
            {[
              "Python", "PyTorch", "TensorFlow", "MUI", "HPC",
              "Medical Image Analysis", "MRI Reconstruction",
              "Motion Correction", "Neuroimaging",
              "Foundation Models", "AI Agents"
            ].map((s) => (
              <Chip key={s} label={s} size="medium" sx={chipBaseSx} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
