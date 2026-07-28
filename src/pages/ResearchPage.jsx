// src/pages/ResearchPage.jsx
import React from "react";
import {
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { ResearchViz, VizFrame } from "../components/viz";
import { researchAreas } from "../data/research";
import { publications } from "../data/publications";
import { C, MONO } from "../theme";

const ICONS = {
  recon: ScienceRoundedIcon,
  motion: AutoFixHighRoundedIcon,
  agents: PsychologyRoundedIcon,
  spiking: BoltRoundedIcon,
};

// Papers that back each research area, matched on title keywords so the list
// stays correct as publications are added.
const EVIDENCE = {
  recon: /reconstruction|jsense|sensitivity|untrained|attention-unn|calibration|dixon|kernel|phase-constrained/i,
  motion: /motion|propeller|blade|blurring|cyclegan|ghost/i,
  agents: /agent|language model|multimodal|llm|vision language/i,
  spiking: /spiking|steg-aiw|timestep/i,
};

function relatedCount(id) {
  return publications.filter((p) => EVIDENCE[id].test(p.title)).length;
}

function ProjectPanel({ area, index }) {
  const Icon = ICONS[area.id];
  const flip = index % 2 === 1;
  const count = relatedCount(area.id);

  return (
    <Reveal>
      <Box
        sx={{
          borderRadius: 3,
          border: `1px solid ${C.border}`,
          bgcolor: alpha(C.surface, 0.85),
          overflow: "hidden",
          transition: "border-color 200ms ease, box-shadow 200ms ease",
          "&:hover": {
            borderColor: alpha(area.accent, 0.5),
            boxShadow: `0 24px 60px -40px ${alpha(area.accent, 0.6)}`,
          },
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            insetInline: 0,
            top: 0,
            height: 2,
            background: `linear-gradient(90deg, ${area.accent}, transparent 70%)`,
          },
        }}
      >
        <Grid container spacing={0}>
          {/* ── text column ── */}
          {/* `order` is not a Grid prop in MUI v7 — it must go through sx or it
              is forwarded to the DOM and silently does nothing. */}
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ p: { xs: 2.5, md: 3.5 }, order: { xs: 2, md: flip ? 2 : 1 } }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.75 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  display: "grid",
                  placeItems: "center",
                  flex: "0 0 auto",
                  background: `linear-gradient(145deg, ${alpha(area.accent, 0.22)}, ${alpha(area.accent, 0.05)})`,
                  border: `1px solid ${alpha(area.accent, 0.3)}`,
                }}
              >
                <Icon sx={{ color: area.accent, fontSize: 21 }} />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: MONO,
                    fontSize: 10.5,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: alpha(area.accent, 0.9),
                    fontWeight: 700,
                  }}
                >
                  {`0${index + 1}`} · {count} paper{count === 1 ? "" : "s"}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}
                >
                  {area.title}
                </Typography>
              </Box>
            </Stack>

            <Typography sx={{ color: C.textSecondary, lineHeight: 1.85, fontSize: "0.96rem" }}>
              {area.long}
            </Typography>

            <Divider sx={{ my: 2.25, borderColor: C.border }} />

            <Stack direction="row" spacing={0.85} flexWrap="wrap" useFlexGap>
              {area.tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{
                    borderRadius: 999,
                    fontFamily: MONO,
                    fontSize: 11,
                    fontWeight: 600,
                    border: `1px solid ${alpha(area.accent, 0.28)}`,
                    backgroundColor: alpha(area.accent, 0.08),
                    color: alpha(C.textPrimary, 0.92),
                  }}
                />
              ))}
            </Stack>
          </Grid>

          {/* ── visualisation column ── */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              p: { xs: 2, md: 2.5 },
              display: "flex",
              alignItems: "center",
              order: { xs: 1, md: flip ? 1 : 2 },
              borderLeft: { md: flip ? "none" : `1px solid ${C.border}` },
              borderRight: { md: flip ? `1px solid ${C.border}` : "none" },
              bgcolor: alpha("#010409", 0.35),
            }}
          >
            <Box sx={{ width: "100%" }}>
              <VizFrame label={area.fn} accent={area.accent} caption={area.caption}>
                <ResearchViz viz={area.viz} accent={area.accent} height={210} />
              </VizFrame>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Reveal>
  );
}

export default function ResearchPage() {
  return (
    <PageShell
      eyebrow="Research"
      title="Solving inverse problems in MRI with AI"
      intro="My work advances MRI through modern AI methods, with emphasis on robust reconstruction, motion artifact correction, and automated pipelines that reduce manual intervention. A key goal is improving reliability under realistic degradations while maintaining clinically meaningful image quality."
      accent={C.green}
      grid
      headerExtra={
        <Typography
          sx={{
            fontFamily: MONO,
            fontSize: 11.5,
            color: C.textMuted,
            pt: 0.5,
            display: "flex",
            alignItems: "center",
            gap: 0.75,
          }}
        >
          <Box
            component="span"
            sx={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              bgcolor: C.green,
              display: "inline-block",
            }}
          />
          each panel below runs a live simulation of the method it describes
        </Typography>
      }
    >
      <Stack spacing={{ xs: 3, md: 3.5 }}>
        {researchAreas.map((area, i) => (
          <ProjectPanel key={area.id} area={area} index={i} />
        ))}
      </Stack>

      <Reveal>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 4 }}>
          <Button
            component={RouterLink}
            to="/publications"
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ borderRadius: 6, px: 2.5, py: 1.05, fontFamily: MONO, fontWeight: 700 }}
          >
            See publications
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ borderRadius: 999, px: 2.5, py: 1.05, fontFamily: MONO, fontWeight: 700 }}
          >
            Contact for collaboration
          </Button>
        </Stack>
      </Reveal>
    </PageShell>
  );
}
