// src/pages/ResearchPage.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  Divider,
  Chip,
  Button,
  Grid,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import { Link as RouterLink } from "react-router-dom";

const ACCENT = "#22d3ee";

const panelSx = {
  borderRadius: 3,
  border: "1px solid transparent",
  background: `
    linear-gradient(${alpha("#ffffff", 0.98)}, ${alpha("#ffffff", 0.98)}) padding-box,
    linear-gradient(135deg, ${alpha(ACCENT, 0.30)}, ${alpha("#0b1220", 0.10)}) border-box
  `,
  boxShadow: `0 12px 34px ${alpha("#0b1220", 0.10)}`,
};

function ProjectCard({ icon: Icon, title, text, tags }) {
  return (
    <Card sx={panelSx}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1.25 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,
              display: "grid",
              placeItems: "center",
              background: alpha(ACCENT, 0.10),
              border: `1px solid ${alpha(ACCENT, 0.22)}`,
              flex: "0 0 auto",
            }}
          >
            <Icon sx={{ color: ACCENT }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 950, letterSpacing: -0.2 }}>
            {title}
          </Typography>
        </Stack>

        <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
          {text}
        </Typography>

        {tags?.length ? (
          <>
            <Divider sx={{ borderColor: alpha("#0b1220", 0.08), my: 2 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{
                    borderRadius: 999,
                    fontWeight: 800,
                    border: `1px solid ${alpha(ACCENT, 0.22)}`,
                    backgroundColor: alpha(ACCENT, 0.08),
                    color: alpha("#0b1220", 0.80),
                  }}
                />
              ))}
            </Stack>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function ResearchPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ mb: 3.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 950, letterSpacing: -0.4 }}>
          Research
        </Typography>

        <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 980, lineHeight: 1.9 }}>
          My research advances MRI through modern AI methods, with emphasis on robust reconstruction,
          motion artifact correction, and automated pipelines that reduce manual intervention. A key
          goal is improving reliability under realistic degradations while maintaining clinically meaningful
          image quality.
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Stack direction="row" spacing={1.25} alignItems="center">
          <ScienceRoundedIcon sx={{ color: ACCENT }} />
          <Typography variant="h5" sx={{ fontWeight: 950, letterSpacing: -0.2 }}>
            Ongoing Projects
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProjectCard
              icon={AutoAwesomeRoundedIcon}
              title="Generative AI for Motion Correction in MRI"
              text="Motion artifacts are a major source of quality degradation in clinical MRI. I study generative and physics-guided approaches to correct motion-induced artifacts and improve robustness, with the practical objective of reducing rescans and stabilizing downstream analysis."
              tags={["Motion Correction", "Generative Models", "Robustness", "Clinical MRI"]}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ProjectCard
              icon={ScienceRoundedIcon}
              title="Foundation Models for AI Agents in MRI Reconstruction"
              text="I investigate agentic systems that can interpret MRI data, identify corruption types, and select appropriate reconstruction or correction strategies. The broader objective is an automated pipeline that integrates foundation models with specialized domain experts."
              tags={["Foundation Models", "AI Agents", "Automated Pipelines", "MRI Reconstruction"]}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <ProjectCard
              icon={BoltRoundedIcon}
              title="Spiking Neural Networks for Efficient AI"
              text="I explore spiking neural networks and related efficient inference strategies to improve compute and energy efficiency for temporal data. This work targets next-generation efficient learning and inference, including potential integration with imaging workloads."
              tags={["Spiking Neural Networks", "Efficient Inference", "Temporal Models"]}
            />
          </Grid>
        </Grid>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 0.5 }}>
          <Button
            component={RouterLink}
            to="/publications"
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              borderRadius: 999,
              px: 2.5,
              py: 1.05,
              textTransform: "none",
              fontWeight: 900,
              borderColor: alpha("#0b1220", 0.16),
              color: "text.primary",
              backgroundColor: alpha("#ffffff", 0.65),
              "&:hover": {
                backgroundColor: alpha("#ffffff", 0.95),
                borderColor: alpha(ACCENT, 0.40),
              },
            }}
          >
            See Publications
          </Button>

          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              borderRadius: 999,
              px: 2.5,
              py: 1.05,
              textTransform: "none",
              fontWeight: 900,
              backgroundColor: alpha(ACCENT, 0.90),
              color: "#081018",
              "&:hover": { backgroundColor: ACCENT },
            }}
          >
            Contact for Collaboration
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
