```jsx
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

// Particles (keep your existing dependency)
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function HomePage() {
  const theme = useTheme();

  // Keep these consistent with your dark sidebar/topbar palette
  const ACCENT = '#22d3ee'; // cyan
  const BG_TOP = '#1F2937';
  const BG_BOTTOM = '#111827';

  const headline = 'Postdoctoral Research Associate';
  const subline = 'Washington University School of Medicine';
  const summary =
    'I develop AI systems for medical imaging and efficient intelligence. My work spans foundation-model-driven agents, MRI reconstruction and artifact correction, and brain-inspired spiking neural networks for compute-efficient inference.';

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

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
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#94a3b8' }, // slate-400
      links: {
        color: '#64748b', // slate-500
        distance: 160,
        enable: true,
        opacity: 0.22,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: true,
        speed: 0.9,
        straight: false,
      },
      number: { density: { enable: true, area: 900 }, value: 42 },
      opacity: { value: 0.35 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  const glassCardSx = {
    height: '100%',
    borderRadius: 3,
    backgroundColor: alpha('#0b1220', 0.55),
    border: `1px solid ${alpha('#ffffff', 0.10)}`,
    backdropFilter: 'blur(10px)',
    boxShadow: `0 18px 50px ${alpha('#000', 0.25)}`,
    transition: 'transform 220ms ease, border-color 220ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: alpha(ACCENT, 0.35),
    },
  };

  const chipSx = {
    borderColor: alpha(ACCENT, 0.35),
    color: alpha('#ffffff', 0.82),
    backgroundColor: alpha(ACCENT, 0.10),
    '&:hover': { backgroundColor: alpha(ACCENT, 0.16) },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 56px)',
        background: `radial-gradient(1100px 500px at 25% 15%, ${alpha(
          ACCENT,
          0.18
        )} 0%, rgba(0,0,0,0) 55%),
                     linear-gradient(160deg, ${BG_TOP} 0%, ${BG_BOTTOM} 70%)`,
        borderRadius: 3,
      }}
    >
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 5, md: 7 } }}>
        {/* Hero */}
        <Box sx={{ mb: 5 }}>
          <Stack spacing={1.2}>
            <Typography
              variant="overline"
              sx={{ color: alpha('#ffffff', 0.65), letterSpacing: 2 }}
            >
              AI • Medical Imaging • Efficient Inference
            </Typography>

            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.08,
                color: '#fff',
              }}
            >
              Gulfam Ahmed Saju
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: alpha('#ffffff', 0.86),
              }}
            >
              {headline}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: alpha('#ffffff', 0.72),
                maxWidth: 920,
                lineHeight: 1.75,
                fontSize: '1.05rem',
              }}
            >
              <Box component="span" sx={{ color: ACCENT, fontWeight: 700 }}>
                {subline}
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
                  px: 2.5,
                  py: 1.1,
                  fontWeight: 700,
                  backgroundColor: alpha(ACCENT, 0.9),
                  color: '#081018',
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
                  px: 2.5,
                  py: 1.1,
                  fontWeight: 700,
                  borderColor: alpha('#ffffff', 0.22),
                  color: alpha('#ffffff', 0.9),
                  '&:hover': {
                    borderColor: alpha(ACCENT, 0.55),
                    backgroundColor: alpha('#ffffff', 0.06),
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
                  py: 1.1,
                  fontWeight: 700,
                  color: alpha('#ffffff', 0.88),
                  '&:hover': { backgroundColor: alpha('#ffffff', 0.06) },
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
                  py: 1.1,
                  fontWeight: 700,
                  color: alpha('#ffffff', 0.88),
                  '&:hover': { backgroundColor: alpha('#ffffff', 0.06) },
                }}
              >
                Contact
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: alpha('#ffffff', 0.10), mb: 4 }} />

        {/* Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={glassCardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                  <ScienceRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800 }}>
                    Research Focus
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha('#ffffff', 0.72), lineHeight: 1.75 }}>
                  AI-enabled medical imaging, with emphasis on robust reconstruction and automated
                  decision-making using modern foundation models.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={glassCardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                  <AutoAwesomeRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800 }}>
                    Foundation-Model Agents
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha('#ffffff', 0.72), lineHeight: 1.75 }}>
                  Agentic pipelines that classify corruption, plan corrective actions, and orchestrate
                  specialized models for end-to-end MRI workflows.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={glassCardSx}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                  <BoltRoundedIcon sx={{ color: ACCENT }} />
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800 }}>
                    Efficient Intelligence
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha('#ffffff', 0.72), lineHeight: 1.75 }}>
                  Spiking neural networks and compute-aware inference strategies for efficient,
                  reliable, and deployable AI systems.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Skills / tags */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: alpha('#ffffff', 0.72), fontWeight: 800, mb: 1.5 }}
          >
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
              <Chip key={s} label={s} size="small" variant="outlined" sx={chipSx} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
```
