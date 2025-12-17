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

  const ACCENT = "#22d3ee";
  // Use your project-wide WashU red (consistent with your sidebar usage)
  const WASHU_RED = "#BA0C2F";

  const name = "Gulfam Ahmed Saju, PhD";
  const role = "Postdoctoral Research Associate";
  const institution = "Washington University in St. Louis";
  const school = "School of Medicine";

  // Keep EXACT summary text as you provided
  const summary =
    "I develop AI systems for medical imaging and efficient intelligence. My work spans foundation-model-driven agents, MRI reconstruction and artifact correction, and brain-inspired spiking neural networks for compute-efficient inference.";

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

  const chipBaseSx = {
    borderColor: alpha("#0f172a", 0.12),
    color: alpha("#0f172a", 0.76),
    backgroundColor: alpha(ACCENT, 0.06),
    "&:hover": { backgroundColor: alpha(ACCENT, 0.10) },
    "& .MuiChip-label": { fontWeight: 800 },
  };

  const cardSx = {
    height: "100%",
    borderRadius: 3,
    border: `1px solid ${alpha("#0f172a", 0.08)}`,
    background: "linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)",
    boxShadow: `0 10px 30px ${alpha("#0f172a", 0.08)}`,
    transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      borderColor: alpha(ACCENT, 0.35),
      boxShadow: `0 14px 40px ${alpha("#0f172a", 0.12)}`,
    },
  };

  return (
    <Box
      sx={{
        // Removes visible gutter if Layout uses content padding (p: 4)
        mx: { xs: -4, md: -4 },
        my: { xs: -4, md: -4 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#ffffff",
        minHeight: "100%",
      }}
    >
      {/* Subtle background tint */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(900px 420px at 18% 14%, ${alpha(
            ACCENT,
            0.10
          )} 0%, rgba(255,255,255,0) 55%),
                       radial-gradient(700px 360px at 85% 22%, ${alpha(
                         "#3b82f6",
                         0.06
                       )} 0%, rgba(255,255,255,0) 58%)`,
          zIndex: 0,
        }}
      />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 5, md: 7 } }}>
        {/* Hero */}
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha("#0f172a", 0.08)}`,
            background: `linear-gradient(180deg, ${alpha("#ffffff", 0.94)} 0%, ${alpha(
              "#f8fafc",
              0.94
            )} 100%)`,
            boxShadow: `0 18px 55px ${alpha("#0f172a", 0.10)}`,
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 5 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Sleek “upper portion” treatment (keeps your colors) */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `radial-gradient(520px 260px at 12% 18%, ${alpha(
                ACCENT,
                0.14
              )} 0%, rgba(255,255,255,0) 62%),
                           radial-gradient(520px 280px at 88% 22%, ${alpha(
                             WASHU_RED,
                             0.08
                           )} 0%, rgba(255,255,255,0) 60%)`,
            }}
          />

          <Stack spacing={1.15} sx={{ position: "relative" }}>
            {/* Small status pill (like your reference), but using your palette */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                width: "fit-content",
                px: 1.4,
                py: 0.6,
                borderRadius: 999,
                border: `1px solid ${alpha(ACCENT, 0.35)}`,
                backgroundColor: alpha(ACCENT, 0.06),
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: ACCENT,
                  boxShadow: `0 0 0 4px ${alpha(ACCENT, 0.12)}`,
                }}
              />
              <Typography sx={{ fontSize: 13, fontWeight: 900, color: alpha("#0f172a", 0.78) }}>
                Open to collaborations
              </Typography>
            </Box>

            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 900,
                lineHeight: 1.08,
                color: "#0f172a",
                letterSpacing: -0.6,
              }}
            >
              {name}
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 750, color: alpha("#0f172a", 0.86) }}>
              {role}
            </Typography>

            {/* Make WashU bigger + keep separate from summary */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                lineHeight: 1.25,
                fontSize: { xs: "1.12rem", md: "1.28rem" }, // increased
                color: alpha("#0f172a", 0.90),
              }}
            >
              <Box component="span" sx={{ color: WASHU_RED }}>
                {institution}
              </Box>
              <Box component="span" sx={{ color: alpha("#0f172a", 0.55), fontWeight: 800 }}>
                {" "}
                | {school}
              </Box>
            </Typography>

            {/* Summary on its own line (as you requested) */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mt: 0.5 }}>
              <Box
                sx={{
                  width: 4,
                  borderRadius: 999,
                  backgroundColor: alpha(ACCENT, 0.55),
                  mt: 0.4,
                  alignSelf: "stretch",
                  minHeight: 68,
                }}
              />
              <Typography
                sx={{
                  color: alpha("#0f172a", 0.72),
                  maxWidth: 980,
                  lineHeight: 1.85,
                  fontSize: "1.03rem",
                }}
              >
                {summary}
              </Typography>
            </Box>

            {/* Current focus (WashU work) */}
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.2 }}>
              <Chip label="Accelerated MRI" size="small" variant="outlined" sx={chipBaseSx} />
              <Chip label="Motion Artifact Correction" size="small" variant="outlined" sx={chipBaseSx} />
              <Chip label="Neuroimaging AI (CNS)" size="small" variant="outlined" sx={chipBaseSx} />
              <Chip label="Alzheimer’s Disease" size="small" variant="outlined" sx={chipBaseSx} />
            </Stack>

            {/* Expertise / interests (keep SNN as interest area, not framed as current postdoc work) */}
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              <Chip label="Foundation Models" size="small" variant="outlined" sx={chipBaseSx} />
              <Chip label="AI Agents" size="small" variant="outlined" sx={chipBaseSx} />
              <Chip label="Spiking Neural Networks" size="small" variant="outlined" sx={chipBaseSx} />
            </Stack>

            <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mt: 2.3 }}>
              <Button
                component={RouterLink}
                to="/research"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 2.6,
                  py: 1.15,
                  fontWeight: 900,
                  backgroundColor: alpha(ACCENT, 0.95),
                  color: "#061018",
                  "&:hover": { backgroundColor: ACCENT },
                }}
              >
                Explore Research
              </Button>

              <Button
                component={RouterLink}
                to="/publications"
                variant="outlined"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 2.6,
                  py: 1.15,
                  fontWeight: 900,
                  borderColor: alpha("#0f172a", 0.18),
                  color: alpha("#0f172a", 0.82),
                  "&:hover": {
                    borderColor: alpha(ACCENT, 0.55),
                    backgroundColor: alpha(ACCENT, 0.06),
                  },
                }}
              >
                View Publications
              </Button>

              <Button
                component={RouterLink}
                to="/cv"
                variant="text"
                startIcon={<DescriptionRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 2.0,
                  py: 1.15,
                  fontWeight: 900,
                  color: alpha("#0f172a", 0.80),
                  "&:hover": { backgroundColor: alpha("#0f172a", 0.04) },
                }}
              >
                CV
              </Button>

              <Button
                component={RouterLink}
                to="/contact"
                variant="text"
                startIcon={<EmailRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 2.0,
                  py: 1.15,
                  fontWeight: 900,
                  color: alpha("#0f172a", 0.80),
                  "&:hover": { backgroundColor: alpha("#0f172a", 0.04) },
                }}
              >
                Contact
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: alpha("#0f172a", 0.10), my: 4 }} />

        {/* Cards (aligned with your new postdoc focus) */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={cardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                  <ScienceRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 900 }}>
                    Accelerated MRI
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha("#0f172a", 0.72), lineHeight: 1.75 }}>
                  AI methods to accelerate MRI reconstruction while preserving clinically meaningful structure and
                  quantitative fidelity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={cardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                  <AutoFixHighRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 900 }}>
                    Motion / Artifact Correction
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha("#0f172a", 0.72), lineHeight: 1.75 }}>
                  Robust correction of motion and real-world degradations to reduce rescans and stabilize downstream
                  analysis.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={cardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                  <PsychologyRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 900 }}>
                    Alzheimer’s / CNS AI
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha("#0f172a", 0.72), lineHeight: 1.75 }}>
                  Learning-based detection and characterization for Alzheimer’s disease and related CNS conditions
                  using brain imaging.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Skills */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle2" sx={{ color: alpha("#0f172a", 0.72), fontWeight: 900, mb: 1.5 }}>
            Core Skills
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {[
              "Python",
              "PyTorch",
              "TensorFlow",
              "MUI",
              "HPC",
              "Medical Image Analysis",
              "MRI Reconstruction",
              "Motion Correction",
              "Neuroimaging",
              "Foundation Models",
              "AI Agents",
            ].map((s) => (
              <Chip key={s} label={s} size="small" variant="outlined" sx={chipBaseSx} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
