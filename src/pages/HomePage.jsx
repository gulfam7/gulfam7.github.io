import React, { useCallback, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ScienceIcon from "@mui/icons-material/Science";
import BuildIcon from "@mui/icons-material/Build";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const cardSx = {
  backgroundColor: "var(--panel)",
  border: "1px solid var(--panel-border)",
  borderRadius: "16px",
  boxShadow: "var(--shadow)",
  backdropFilter: "blur(10px)",
  height: "100%",
};

export default function HomePage() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: { repulse: { distance: 120, duration: 0.35 } },
      },
      particles: {
        color: { value: "#22d3ee" },
        links: {
          color: "#22d3ee",
          distance: 160,
          enable: true,
          opacity: 0.14,
          width: 1,
        },
        move: { enable: true, speed: 0.7, random: true, outModes: { default: "bounce" } },
        number: { density: { enable: true, area: 900 }, value: 40 },
        opacity: { value: 0.25 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {!reduceMotion && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 5, md: 7 } }}>
        <Box sx={{ color: "var(--text)" }}>
          {/* Hero */}
          <Box sx={{ maxWidth: 980 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.75,
                borderRadius: "999px",
                border: "1px solid rgba(34,211,238,0.25)",
                backgroundColor: "rgba(34,211,238,0.08)",
                color: "rgba(34,211,238,0.95)",
                fontWeight: 800,
                fontSize: 12,
                mb: 2,
              }}
            >
              Open to collaborations
            </Box>

            <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: -0.6 }}>
              Gulfam Ahmed Saju
            </Typography>
            <Typography sx={{ color: "rgba(148,163,184,0.95)", mt: 1, fontSize: 18 }}>
              PhD Candidate · University of Massachusetts Dartmouth
            </Typography>

            <Typography sx={{ color: "rgba(226,232,240,0.92)", mt: 2.5, fontSize: 16.5, lineHeight: 1.8 }}>
              I work on AI methods for MRI reconstruction and motion correction, and on agentic systems that automate
              decision-making in imaging pipelines. I also explore efficient learning paradigms, including spiking neural
              networks, with an emphasis on robustness and interpretability.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
              <Button
                component={RouterLink}
                to="/research"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "var(--accent)",
                  color: "#0b1220",
                  fontWeight: 900,
                  "&:hover": { backgroundColor: "rgba(34,211,238,0.9)" },
                  textTransform: "none",
                }}
              >
                Explore Research
              </Button>

              <Button
                component={RouterLink}
                to="/publications"
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(226,232,240,0.92)",
                  "&:hover": { borderColor: "rgba(34,211,238,0.5)" },
                  textTransform: "none",
                  fontWeight: 900,
                }}
              >
                View Publications
              </Button>

              <Button
                component={RouterLink}
                to="/contact"
                variant="text"
                sx={{ color: "rgba(226,232,240,0.92)", textTransform: "none", fontWeight: 900 }}
              >
                Contact
              </Button>
            </Stack>
          </Box>

          {/* Cards */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card sx={cardSx}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.5 }}>
                    <ScienceIcon sx={{ color: "var(--accent)" }} />
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      Research Highlight
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "rgba(148,163,184,0.95)", lineHeight: 1.8 }}>
                    My current work focuses on automated MRI pipelines that combine foundation models with specialized
                    reconstruction and correction modules. The goal is to reduce manual intervention while improving
                    reliability under realistic degradations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={cardSx}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.5 }}>
                    <BuildIcon sx={{ color: "var(--accent)" }} />
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      Core Skills
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {[
                      "Python",
                      "PyTorch",
                      "TensorFlow",
                      "MRI Reconstruction",
                      "Motion Correction",
                      "Medical Image Analysis",
                      "Foundation Models",
                      "AI Agents",
                      "Spiking Neural Networks",
                      "HPC",
                    ].map((x) => (
                      <Chip
                        key={x}
                        label={x}
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(255,255,255,0.14)",
                          color: "rgba(226,232,240,0.92)",
                          "& .MuiChip-label": { fontWeight: 700 },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
