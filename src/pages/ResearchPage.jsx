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
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const cardSx = {
  backgroundColor: "var(--panel)",
  border: "1px solid var(--panel-border)",
  borderRadius: "16px",
  boxShadow: "var(--shadow)",
  backdropFilter: "blur(10px)",
};

function ProjectCard({ title, text, tags }) {
  return (
    <Card sx={cardSx}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 900, color: "var(--text)" }}>
          {title}
        </Typography>
        <Typography sx={{ color: "rgba(148,163,184,0.95)", mt: 1, lineHeight: 1.85 }}>
          {text}
        </Typography>

        {tags?.length ? (
          <>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 2 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.14)",
                    color: "rgba(226,232,240,0.92)",
                    "& .MuiChip-label": { fontWeight: 800 },
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
      <Box sx={{ color: "var(--text)" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.3 }}>
          Research
        </Typography>

        <Typography sx={{ color: "var(--muted)", mt: 1, maxWidth: 980, lineHeight: 1.9 }}>
          My research advances MRI through modern AI methods, with emphasis on robust reconstruction, motion artifact
          correction, and automated pipelines that reduce manual intervention. A key goal is improving reliability under
          realistic degradations while maintaining clinically meaningful image quality.
        </Typography>

        <Stack spacing={3} sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 900 }}>
            Ongoing Projects
          </Typography>

          <ProjectCard
            title="Generative AI for Motion Correction in MRI"
            text="Motion artifacts are a major source of quality degradation in clinical MRI. I study generative and physics-guided approaches to correct motion-induced artifacts and improve robustness, with the practical objective of reducing rescans and stabilizing downstream analysis."
            tags={["Motion Correction", "Generative Models", "Robustness", "Clinical MRI"]}
          />

          <ProjectCard
            title="Foundation Models for AI Agents in MRI Reconstruction"
            text="I investigate agentic systems that can interpret MRI data, identify corruption types, and select appropriate reconstruction or correction strategies. The broader objective is an automated pipeline that integrates foundation models with specialized domain experts."
            tags={["Foundation Models", "AI Agents", "Automated Pipelines", "MRI Reconstruction"]}
          />

          <ProjectCard
            title="Spiking Neural Networks for Efficient AI"
            text="I explore spiking neural networks and related efficient inference strategies to improve compute and energy efficiency for temporal data. This work targets next-generation efficient learning and inference, including potential integration with imaging workloads."
            tags={["Spiking Neural Networks", "Efficient Inference", "Temporal Models"]}
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
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
              See Publications
            </Button>

            <Button
              component={RouterLink}
              to="/contact"
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
              Contact for Collaboration
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
