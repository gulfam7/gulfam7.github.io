// src/pages/HomePage.jsx
import React, { useCallback } from 'react';
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
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

// Icons
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

// Particles
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function HomePage() {
  const theme = useTheme();

  // Accent consistent with your cyan UI
  const ACCENT = '#22d3ee';
  // WashU (approx. brand red used on many official assets)
  const WASHU_RED = '#A51417';

  const name = 'Gulfam Ahmed Saju, PhD';
  const role = 'Postdoctoral Research Associate';
  const institution = 'Washington University in St. Louis';

  const summary =
    'I develop AI systems for medical imaging and efficient intelligence. My work spans foundation-model-driven agents, MRI reconstruction and artifact correction, and brain-inspired spiking neural networks for compute-efficient inference.';

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Lighter particles for a white background
  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 110, duration: 0.35 },
      },
    },
    particles: {
      color: { value: '#64748b' }, // slate-500
      links: {
        color: '#94a3b8', // slate-400
        distance: 160,
        enable: true,
        opacity: 0.12,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: true,
        speed: 0.7,
        straight: false,
      },
      number: { density: { enable: true, area: 950 }, value: 38 },
      opacity: { value: 0.28 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  const chipSx = {
    borderColor: alpha(ACCENT, 0.35),
    backgroundColor: alpha(ACCENT, 0.08),
    '&:hover': { backgroundColor: alpha(ACCENT, 0.12) },
  };

  const cardSx = {
    height: '100%',
    borderRadius: 3,
    border: `1px solid ${alpha('#0f172a', 0.08)}`,
    boxShadow: `0 10px 30px ${alpha('#0f172a', 0.08)}`,
    transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      borderColor: alpha(ACCENT, 0.35),
      boxShadow: `0 14px 40px ${alpha('#0f172a', 0.12)}`,
    },
  };

  return (
    <Box
      sx={{
        // IMPORTANT: removes the visible white gutter caused by Layout's `p: 4`
        // If you later set Layout's content padding to 0, remove these two lines.
        mx: { xs: -4, md: -4 },
        my: { xs: -4, md: -4 },

        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#ffffff',
        minHeight: '100%',
      }}
    >
      {/* Subtle background tint */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(900px 420px at 18% 14%, ${alpha(
            ACCENT,
            0.10
          )} 0%, rgba(255,255,255,0) 55%),
                       radial-gradient(700px 360px at 85% 22%, ${alpha(
                         '#3b82f6',
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
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 5, md: 7 } }}>
        {/* Hero */}
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha('#0f172a', 0.08)}`,
            background: `linear-gradient(180deg, ${alpha('#ffffff', 0.92)} 0%, ${alpha(
              '#f8fafc',
              0.92
            )} 100%)`,
            boxShadow: `0 18px 55px ${alpha('#0f172a', 0.10)}`,
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 5 },
          }}
        >
          <Stack spacing={1.2}>
            <Typography variant="overline" sx={{ color: alpha('#0f172a', 0.60), letterSpacing: 2 }}>
              AI • Medical Imaging • Efficient Inference
            </Typography>

            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 900, lineHeight: 1.08, color: '#0f172a' }}
            >
              {name}
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 700, color: alpha('#0f172a', 0.85) }}>
              {role}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: alpha('#0f172a', 0.72),
                maxWidth: 980,
                lineHeight: 1.75,
                fontSize: '1.05rem',
              }}
            >
              <Box component="span" sx={{ color: WASHU_RED, fontWeight: 800 }}>
                {institution}
              </Box>
              {' — '}
              {summary}
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
              <Chip label="Foundation-Model Agents" size="small" variant="outlined" sx={chipSx} />
              <Chip label="MRI Reconstruction" size="small" variant="outlined" sx={chipSx} />
              <Chip label="Motion / Artifact Correction" size="small" variant="outlined" sx={chipSx} />
              <Chip label="Spiking Neural Networks" size="small" variant="outlined" sx={chipSx} />
              <Chip label="Efficient Inference" size="small" variant="outlined" sx={chipSx} />
            </Stack>

            <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>
              <Button
                component={RouterLink}
                to="/research"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 2.6,
                  py: 1.15,
                  fontWeight: 800,
                  backgroundColor: alpha(ACCENT, 0.95),
                  color: '#061018',
                  '&:hover': { backgroundColor: ACCENT },
                }}
              >
                Research
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
                  fontWeight: 800,
                  borderColor: alpha('#0f172a', 0.18),
                  color: alpha('#0f172a', 0.80),
                  '&:hover': {
                    borderColor: alpha(ACCENT, 0.55),
                    backgroundColor: alpha(ACCENT, 0.06),
                  },
                }}
              >
                Publications
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
                  fontWeight: 800,
                  color: alpha('#0f172a', 0.78),
                  '&:hover': { backgroundColor: alpha('#0f172a', 0.04) },
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
                  fontWeight: 800,
                  color: alpha('#0f172a', 0.78),
                  '&:hover': { backgroundColor: alpha('#0f172a', 0.04) },
                }}
              >
                Contact
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: alpha('#0f172a', 0.10), my: 4 }} />

        {/* Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={cardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                  <ScienceRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 900 }}>
                    Research Focus
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha('#0f172a', 0.72), lineHeight: 1.75 }}>
                  AI-enabled medical imaging, with emphasis on robust reconstruction and automated
                  decision-making using modern foundation models.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={cardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                  <AutoAwesomeRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 900 }}>
                    Foundation-Model Agents
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha('#0f172a', 0.72), lineHeight: 1.75 }}>
                  Agentic pipelines that classify corruption, plan corrective actions, and orchestrate
                  specialized models for end-to-end MRI workflows.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={cardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                  <BoltRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 900 }}>
                    Efficient Intelligence
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha('#0f172a', 0.72), lineHeight: 1.75 }}>
                  Spiking neural networks and compute-aware inference strategies for efficient,
                  reliable, and deployable AI systems.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Skills */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle2" sx={{ color: alpha('#0f172a', 0.70), fontWeight: 900, mb: 1.5 }}>
            Core Skills
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {[
              'Python',
              'PyTorch',
              'TensorFlow',
              'MUI',
              'HPC',
              'Medical Image Analysis',
              'MRI Reconstruction',
              'Generative Models',
              'Foundation Models',
              'AI Agents',
              'Spiking Neural Networks',
            ].map((s) => (
              <Chip
                key={s}
                label={s}
                size="small"
                variant="outlined"
                sx={{
                  ...chipSx,
                  color: alpha('#0f172a', 0.75),
                  borderColor: alpha('#0f172a', 0.12),
                  backgroundColor: alpha(ACCENT, 0.06),
                  '&:hover': { backgroundColor: alpha(ACCENT, 0.10) },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;

