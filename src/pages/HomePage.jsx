// src/pages/HomePage.jsx
import React, { useCallback } from 'react'; // Added useCallback
import { Box, Typography, Container, Button, Divider, Grid, Chip, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScienceIcon from '@mui/icons-material/Science';
import BuildIcon from '@mui/icons-material/Build';

// --- Import Particles and Engine ---
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// Or if you installed the full tsparticles package:
// import { loadFull } from "tsparticles";

function HomePage() {
  // Replace placeholders with your actual details
  const headline = "PhD Candidate specializing in Artificial Intelligence and Machine Learning";
  const jobGoal = "Seeking Research Positions in Academia or Industry";
  const cvPath = '/Gulfam_Saju_CV.pdf'; // **IMPORTANT: Update with your actual CV filename**

  // --- Particle Initialization Callback ---
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine); // Debugging
    // Load the slim preset (or full if you installed that)
    await loadSlim(engine);
    // Or: await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container); // Debugging
  }, []);

  // --- Particle Configuration ---
  const particlesOptions = {
    background: {
      // Keep background transparent to show page background
      // color: { value: "#ffffff", },
    },
    fpsLimit: 60, // Lower FPS limit for performance if needed
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push", }, // Optional: push particles on click
        onHover: { enable: true, mode: "repulse", }, // Optional: repulse particles on hover
        resize: true,
      },
      modes: {
        push: { quantity: 2, },
        repulse: { distance: 100, duration: 0.4, }, // Adjust distance/duration
      },
    },
    particles: {
      color: { value: "#aaaaaa", }, // Particle color (light gray)
      links: {
        color: "#bbbbbb", // Link color (slightly lighter gray)
        distance: 150, // Max distance for links
        enable: true,
        opacity: 0.15, // Low opacity for subtlety
        width: 1,
      },
      collisions: { enable: false, }, // Disable collisions for smoother flow
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce", }, // Bounce off edges
        random: true, // Random movement direction
        speed: 0.5, // Slow speed
        straight: false,
      },
      number: {
        density: { enable: true, area: 800, }, // Adjust area for density
        value: 35, // Number of particles (adjust for performance/look)
      },
      opacity: { value: 0.2, }, // Low particle opacity
      shape: { type: "circle", },
      size: { value: { min: 1, max: 3 }, }, // Small particle size
    },
    detectRetina: true, // Improves rendering on high-DPI screens
  };
  // --- End Particle Configuration ---


  return (
    // Add a wrapper Box for positioning context
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* --- Particles Component --- */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        // Style to place it behind content
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0 // Place behind the container
        }}
      />

      {/* --- Main Content Container --- */}
      {/* Needs position relative and higher z-index to be above particles */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ my: 4 }}> {/* Consistent vertical margin */}

          {/* Headline Section */}
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
            {headline}
          </Typography>
          <Typography variant="h6" component="p" color="primary.main" sx={{ mb: 3, fontWeight: 500 }}>
            {jobGoal}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Professional Summary */}
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
             Welcome! I'm a final-year PhD candidate at the University of Massachusetts Dartmouth, passionate about developing and applying cutting-edge AI and machine learning techniques. My research explores areas such as automated AI agents using foundation models and brain-inspired architectures like Spiking Neural Networks, aiming to enhance intelligent systems and computational efficiency. While I have applied these techniques to areas like medical imaging, my core expertise lies in building robust AI solutions. I possess strong skills in Python, PyTorch, TensorFlow, and high-performance computing, and I am eager to leverage this expertise to solve complex problems across various domains.
          </Typography>

          {/* Call to Action Buttons */}
         {/* Call to Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          {/* The Download CV Button has been removed from here */}
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

          {/* Research Highlights / Skills Snapshot using Cards */}
          <Grid container spacing={4}>
            {/* Research Highlight Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.07), 0px 1px 10px 0px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0px 3px 6px -1px rgba(0,0,0,0.12), 0px 5px 8px 0px rgba(0,0,0,0.08), 0px 1px 12px 0px rgba(0,0,0,0.07)',
                }
              }}> {/* Slightly transparent card */}
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <ScienceIcon color="action" sx={{ mr: 1 }} /> {/* Icon */}
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

            {/* Skills Snapshot Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.07), 0px 1px 10px 0px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0px 3px 6px -1px rgba(0,0,0,0.12), 0px 5px 8px 0px rgba(0,0,0,0.08), 0px 1px 12px 0px rgba(0,0,0,0.07)',
                }
              }}> {/* Slightly transparent card */}
                <CardContent>
                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <BuildIcon color="action" sx={{ mr: 1 }} /> {/* Icon */}
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      Core Skills
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="Python" size="small" />
                    <Chip label="PyTorch" size="small" />
                    <Chip label="TensorFlow" size="small" />
                    <Chip label="Medical Image Analysis" size="small"  />
                    <Chip label="MRI Reconstruction" size="small"  />
                    <Chip label="Machine Learning" size="small"  />
                    <Chip label="HPC" size="small"  />
                    <Chip label="Foundation Models" size="small"  />
                    <Chip label="Spiking Neural Networks" size="small"  />
                    <Chip label="AI Agents" size="small"  />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </Box>
      </Container>
    </Box> // End of wrapper Box
  );
}
export default HomePage;



