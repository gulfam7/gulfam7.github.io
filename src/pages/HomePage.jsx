// src/pages/HomePage.jsx
import React, { useCallback } from 'react';
import { Box, Typography, Container, Button, Divider, Grid, Chip, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScienceIcon from '@mui/icons-material/Science';
import BuildIcon from '@mui/icons-material/Build';

// --- Import Particles and Engine ---
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function HomePage() {
  const headline = "PhD Candidate specializing in Artificial Intelligence and Machine Learning";
  const jobGoal = "Seeking Research Positions in Academia or Industry";
  const cvPath = '/Gulfam_Saju_CV.pdf'; // **IMPORTANT: Update with your actual CV filename**

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: await console.log(container);
  }, []);

  // --- Enhanced Particle Configuration ---
  const particlesOptions = {
    background: {
      // Keep background transparent to show page background
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: { enable: true, mode: "repulse" }, // Keep repulse on hover
        resize: true,
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 120, duration: 0.4 }, // Slightly increased distance
      },
    },
    particles: {
      color: { value: "#999999" }, // Darker gray for particles
      links: {
        color: "#aaaaaa", // Darker gray for links
        distance: 160,    // Slightly increased distance for links
        enable: true,
        opacity: 0.35,   // Increased link opacity
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 1, // Increased particle speed
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 45, // Slightly more particles
      },
      opacity: { value: 0.45 }, // Increased particle opacity
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } }, // Slightly larger max size
    },
    detectRetina: true,
  };
  // --- End Particle Configuration ---

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      // Optional: Add a subtle gradient background for a more modern feel
      // background: 'linear-gradient(180deg, #f4f6f8 0%, #e8ecf1 100%)', // Example subtle gradient
      // If using a gradient, ensure particles are still visible and theme matches
    }}>
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
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 3, md: 5 } }}> {/* Added padding top/bottom */}
        <Box sx={{ my: 4 }}>

          <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
            {headline}
          </Typography>
          <Typography variant="h6" component="p" color="primary.main" sx={{ mb: 3, fontWeight: 500 }}>
            {jobGoal}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Welcome! I'm a final-year PhD candidate at the University of Massachusetts Dartmouth, passionate about developing and applying cutting-edge AI and machine learning techniques. My research explores areas such as automated AI agents using foundation models and brain-inspired architectures like Spiking Neural Networks, aiming to enhance intelligent systems and computational efficiency. While I have applied these techniques to areas like medical imaging, my core expertise lies in building robust AI solutions. I possess strong skills in Python, PyTorch, TensorFlow, and high-performance computing, and I am eager to leverage this expertise to solve complex problems across various domains.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={RouterLink}
              to="/research"
              endIcon={<ArrowForwardIcon />}
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
            >
              View Publications
            </Button>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Made slightly more opaque
                backdropFilter: 'blur(3px)', // Optional: subtle blur for frosted glass effect
                boxShadow: '0px 4px 15px rgba(0,0,0,0.08)', // Softer, more modern shadow
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 6px 20px rgba(0,0,0,0.1)',
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <ScienceIcon color="primary" sx={{ mr: 1.5 }} /> {/* Changed color to primary for consistency */}
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      Research Highlight
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph color="text.secondary">
                    My current research focuses on developing automated AI agents leveraging foundation models, alongside exploring brain-inspired architectures like Spiking Neural Networks (SNNs). This work aims to enhance medical imaging workflows by improving efficiency and reducing human intervention, while the exploration of SNNs targets energy-efficient, event-driven computation suitable for edge devices and real-time processing.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Made slightly more opaque
                backdropFilter: 'blur(3px)', // Optional: subtle blur for frosted glass effect
                boxShadow: '0px 4px 15px rgba(0,0,0,0.08)', // Softer, more modern shadow
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 6px 20px rgba(0,0,0,0.1)',
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <BuildIcon color="primary" sx={{ mr: 1.5 }} /> {/* Changed color to primary for consistency */}
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      Core Skills
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="Python" size="small" variant="outlined" /> {/* Added variant="outlined" for consistency */}
                    <Chip label="PyTorch" size="small" variant="outlined" />
                    <Chip label="TensorFlow" size="small" variant="outlined" />
                    <Chip label="LangChain" size="small" variant="outlined" />
                    <Chip label="Medical Image Analysis" size="small" variant="outlined" />
                    <Chip label="MRI Reconstruction" size="small" variant="outlined" />
                    <Chip label="Machine Learning" size="small" variant="outlined" />
                    <Chip label="HPC" size="small" variant="outlined" />
                    <Chip label="Foundation Models" size="small" variant="outlined" />
                    <Chip label="Spiking Neural Networks" size="small" variant="outlined" />
                    <Chip label="AI Agents" size="small" variant="outlined" />
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
