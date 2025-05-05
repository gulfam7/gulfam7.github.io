import React from 'react';
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Stack
} from '@mui/material';

function ResearchPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>

        {/* Page Title */}
        <Typography variant="h4" component="h1" gutterBottom>
          Research
        </Typography>

        {/* Overview */}
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
          My research is centered on advancing Magnetic Resonance Imaging (MRI) through cutting-edge artificial intelligence approaches. I work on accelerating MRI reconstruction, correcting motion artifacts, and developing automated AI agents by leveraging generative models and large foundation models. The overarching goal is to make MRI faster, more reliable, and more accessible in clinical environments.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Ongoing Projects */}
        <Typography variant="h5" component="h2" gutterBottom>
          Ongoing Projects
        </Typography>

        {/* Project 1 */}
        <Box component="article" sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Generative AI for Motion Correction in MRI
          </Typography>
          <Typography variant="body2" paragraph>
            Motion artifacts remain a major challenge in clinical MRI, often leading to reduced image quality and diagnostic reliability. My research explores generative AI techniques to automatically correct motion-induced artifacts and enhance the robustness of MRI scans, aiming to minimize rescans and improve diagnostic workflows.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Project 2 */}
        <Box component="article" sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Foundation Models for AI Agents in MRI Reconstruction
          </Typography>
          <Typography variant="body2" paragraph>
            Building intelligent AI agents that can autonomously analyze MRI data and determine appropriate reconstruction strategies is a key direction of my research. I am investigating the use of large foundation models to classify data corruption types and automatically select and execute expert correction models, paving the way toward fully automated MRI processing pipelines.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Project 3 */}
        <Box component="article" sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Spiking Neural Networks for Efficient AI
          </Typography>
          <Typography variant="body2" paragraph>
            Inspired by the efficiency of biological neural systems, my recent work investigates Spiking Neural Networks (SNNs) for learning temporal and sparse representations. This research aims to explore how SNNs can be applied to low-power and real-time AI applications, potentially contributing to next-generation neural computing in medical imaging and beyond.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Research Interests */}
        <Box component="section">
          <Typography variant="h5" component="h2" gutterBottom>
            Research Interests
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="MRI Reconstruction" />
            <Chip label="Motion Correction" />
            <Chip label="Generative AI" />
            <Chip label="Foundation Models" />
            <Chip label="AI Agents" />
            <Chip label="Spiking Neural Networks" />
            <Chip label="Medical Image Analysis" />
            <Chip label="Deep Learning" />
          </Stack>
        </Box>

      </Box>
    </Container>
  );
}

export default ResearchPage;
