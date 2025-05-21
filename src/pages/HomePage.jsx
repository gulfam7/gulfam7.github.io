// -----------------------------------------------------------------------------
// src/pages/HomePage.jsx
// Design-refreshed homepage – all textual content preserved
// -----------------------------------------------------------------------------
import React, { useCallback } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Divider,
  Grid,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScienceIcon from '@mui/icons-material/Science';
import BuildIcon from '@mui/icons-material/Build';

// --- Import Particles and Engine ---
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // loads tsparticles-slim
// import { loadFull } from "tsparticles";   // alternative full bundle

function HomePage() {
  // ---------------------------------------------------------------------------
  // Immutable text content – DO NOT CHANGE
  // ---------------------------------------------------------------------------
  const headline =
    'PhD Candidate specializing in Artificial Intelligence and Machine Learning';
  const jobGoal = 'Seeking Research Positions in Academia or Industry';
  const cvPath = '/Gulfam_Saju_CV.pdf';

  // ---------------------------------------------------------------------------
  // Particle engine callbacks
  // ---------------------------------------------------------------------------
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  // ---------------------------------------------------------------------------
  // Updated particle configuration – brighter spiral & clearer links
  // ---------------------------------------------------------------------------
  const particlesOptions = {
    fpsLimit: 60,
    background: {
      color: { value: 'transparent' },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 110, duration: 0.45 },
      },
    },
    particles: {
      color: { value: '#00bcd4' }, // cyan for higher visibility
      links: {
        color: '#00bcd4',
        distance: 140,
        enable: true,
        opacity: 0.35, // stronger link opacity
        width: 1.2,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: true,
        speed: 0.8, // faster for more prominent motion
        straight: false,
      },
      number: {
        density: { enable: true, area: 700 },
        value: 45, // slightly more particles
      },
      opacity: { value: 0.45 }, // brighter particles
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  // ---------------------------------------------------------------------------
  // JSX
  // ---------------------------------------------------------------------------
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d0d14 0%, #1d2636 100%)', // subtle dark gradient
      }}
    >
      {/* --- Particles Layer --- */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* --- Main Content --- */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 6, md: 10 },
        }}
      >
        <Box sx={{ my: 4 }}>
          {/* Headline */}
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              mb: 1,
              background:
                'linear-gradient(90deg, #00bcd4 0%, #40c4ff 25%, #80d8ff 50%, #40c4ff 75%, #00bcd4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-move 8s linear infinite',
              '@keyframes gradient-move': {
                '0%': { backgroundPosition: '0% 50%' },
                '100%': { backgroundPosition: '100% 50%' },
              },
            }}
          >
            {headline}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="primary.main"
            sx={{ mb: 3, fontWeight: 500 }}
          >
            {jobGoal}
          </Typography>

          <Divider sx={{ mb: 3, opacity: 0.3 }} />

          {/* Professional Summary */}
          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#e0e0e0' }}
          >
            Welcome! I'm a final-year PhD candidate at the University of
            Massachusetts Dartmouth, passionate about developing and applying
            cutting-edge AI and machine learning techniques. My research
            explores areas such as automated AI agents using foundation models
            and brain-inspired architectures like Spiking Neural Networks,
            aiming to enhance intelligent systems and computational efficiency.
            While I have applied these techniques to areas like medical imaging,
            my core expertise lies in building robust AI solutions. I possess
            strong skills in Python, PyTorch, TensorFlow, and high-performance
            computing, and I am eager to leverage this expertise to solve
            complex problems across various domains.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={RouterLink}
              to="/research"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backdropFilter: 'blur(4px)',
                borderColor: 'rgba(0,188,212,0.6)',
                color: '#00bcd4',
                '&:hover': {
                  borderColor: '#00bcd4',
                  backgroundColor: 'rgba(0,188,212,0.1)',
                },
              }}
            >
              Explore Research
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={RouterLink}
              to="/publications"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backdropFilter: 'blur(4px)',
                borderColor: 'rgba(0,188,212,0.6)',
                color: '#00bcd4',
                '&:hover': {
                  borderColor: '#00bcd4',
                  backgroundColor: 'rgba(0,188,212,0.1)',
                },
              }}
            >
              View Publications
            </Button>
          </Box>

          <Divider sx={{ mb: 4, opacity: 0.3 }} />

          {/* Cards */}
          <Grid container spacing={4}>
            {/* Research Highlight Card */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition:
                    'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow:
                      '0 10px 20px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1.5,
                    }}
                  >
                    <ScienceIcon
                      color="action"
                      sx={{ mr: 1, color: '#00bcd4' }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 500, color: '#ffffff' }}
                    >
                      Research Highlight
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ color: '#cfd8dc' }}
                  >
                    My current research focuses on developing automated AI
                    agents leveraging foundation models, alongside exploring
                    brain-inspired architectures like Spiking Neural Networks
                    (SNNs). This work aims to enhance medical imaging workflows
                    by improving efficiency and reducing human intervention,
                    while the exploration of SNNs targets energy-efficient,
                    event-driven computation suitable for edge devices and
                    real-time processing.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Skills Snapshot Card */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition:
                    'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow:
                      '0 10px 20px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1.5,
                    }}
                  >
                    <BuildIcon
                      color="action"
                      sx={{ mr: 1, color: '#00bcd4' }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 500, color: '#ffffff' }}
                    >
                      Core Skills
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    <Chip label="Python" size="small" />
                    <Chip label="PyTorch" size="small" />
                    <Chip label="TensorFlow" size="small" />
                    <Chip label="Medical Image Analysis" size="small" />
                    <Chip label="MRI Reconstruction" size="small" />
                    <Chip label="Machine Learning" size="small" />
                    <Chip label="HPC" size="small" />
                    <Chip label="Foundation Models" size="small" />
                    <Chip label="Spiking Neural Networks" size="small" />
                    <Chip label="AI Agents" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
