// src/pages/HomePage.jsx — VS Code / GitHub Dark coder aesthetic
import React, { useEffect, useRef, useState } from "react";
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
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

import { C, MONO } from "../theme";
import { researchAreas } from "../data/research";
import { publications } from "../data/publications";
import { ResearchViz, KSpaceField } from "../components/viz";
import Reveal from "../components/Reveal";
import { prefersReducedMotion } from "../lib/useCanvasAnimation";

const ICONS = {
  recon: ScienceRoundedIcon,
  motion: AutoFixHighRoundedIcon,
  agents: PsychologyRoundedIcon,
  spiking: BoltRoundedIcon,
};

// ── Terminal Window Wrapper ────────────────────────────────────────────────
function TerminalWindow({ filename, children, sx = {} }) {
  return (
    <Box
      sx={{
        bgcolor: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 2,
        overflow: "hidden",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: C.elevated,
          px: 2,
          py: 0.9,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f57" }} />
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28c840" }} />
        <Typography sx={{ ml: 1.5, color: C.comment, fontSize: 12, fontFamily: MONO }}>
          {filename}
        </Typography>
      </Box>
      {children}
    </Box>
  );
}

// ── Syntax-coloured spans ─────────────────────────────────────────────────
const K  = ({ c }) => <span style={{ color: C.keyword  }}>{c}</span>;
const Fn = ({ c }) => <span style={{ color: C.func     }}>{c}</span>;
const S  = ({ c }) => <span style={{ color: C.string   }}>{c}</span>;
const N  = ({ c }) => <span style={{ color: C.number   }}>{c}</span>;
const Cm = ({ c }) => <span style={{ color: C.comment  }}>{c}</span>;
const V  = ({ c }) => <span style={{ color: C.variable }}>{c}</span>;
const Gr = ({ c }) => <span style={{ color: C.green    }}>{c}</span>;

// ── Count-up metric ───────────────────────────────────────────────────────
function Metric({ value, label, suffix = "", colour }) {
  const [shown, setShown] = useState(prefersReducedMotion() ? value : 0);
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    let raf = 0;
    let start = null;
    let done = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done) return;
        done = true;
        io.disconnect();
        const tick = (ts) => {
          if (start === null) start = ts;
          const p = Math.min(1, (ts - start) / 900);
          // ease-out so it decelerates into the final value
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <Box ref={ref} sx={{ minWidth: 0 }}>
      <Typography
        sx={{
          fontFamily: MONO,
          fontWeight: 700,
          fontSize: { xs: "1.5rem", md: "1.8rem" },
          lineHeight: 1.1,
          color: colour,
        }}
      >
        {shown}
        {suffix}
      </Typography>
      <Typography
        sx={{
          fontFamily: MONO,
          fontSize: 10.5,
          letterSpacing: 1.2,
          textTransform: "uppercase",
          color: C.textMuted,
          mt: 0.4,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function HomePage() {
  const skills = [
    { label: "Python",            color: C.number   },
    { label: "PyTorch",           color: C.variable },
    { label: "TensorFlow",        color: C.keyword  },
    { label: "HPC / SLURM",       color: C.func     },
    { label: "MRI Physics",       color: C.green    },
    { label: "Foundation Models", color: C.string   },
    { label: "AI Agents",         color: C.number   },
    { label: "Deep Learning",     color: C.func     },
    { label: "Medical Imaging",   color: C.green    },
    { label: "Neuroimaging",      color: C.variable },
    { label: "CycleGAN",          color: C.keyword  },
    { label: "Spiking Nets",      color: C.string   },
  ];

  // derived from the real publication list, so these can never go stale
  const peerReviewed = publications.filter(
    (p) => p.type === "journal" || p.type === "conference"
  ).length;
  const venues = new Set(publications.map((p) => p.journal).filter(Boolean)).size;
  const firstAuthor = publications.filter((p) =>
    p.authors.trim().toLowerCase().startsWith("gulfam")
  ).length;

  return (
    <Box sx={{ position: "relative", overflow: "hidden", bgcolor: C.bg, minHeight: "100%" }}>
      {/* ambient k-space lattice — replaces the old generic code rain */}
      <KSpaceField />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 20% 40%, ${alpha(C.accent, 0.07)} 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 70%, ${alpha(C.green, 0.045)} 0%, transparent 70%)
          `,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 4, md: 7 },
          px: { xs: 2.5, sm: 3, md: 4 },
        }}
      >
        {/* ══════════════ HERO ══════════════ */}
        <Grid container spacing={3.5} alignItems="stretch" sx={{ mb: { xs: 4, md: 6 } }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <TerminalWindow filename="profile.ts" sx={{ height: "100%" }}>
              <Box
                component="pre"
                sx={{
                  m: 0,
                  p: { xs: 2, md: 3 },
                  fontFamily: MONO,
                  fontSize: { xs: 11.5, sm: 12.5, md: 13.5 },
                  lineHeight: 1.85,
                  color: C.textPrimary,
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                <Cm c="// researcher profile -- Washington University in St. Louis" />{"\n"}
                {"\n"}
                <K c="const" />{" "}<V c="researcher" />{" = {\n"}
                {"  "}<Gr c="name" />{":         "}<S c='"Gulfam Ahmed Saju, PhD"' />{",\n"}
                {"  "}<Gr c="role" />{":         "}<S c='"Postdoctoral Research Associate"' />{",\n"}
                {"  "}<Gr c="institute" />{":    "}<S c='"Mallinckrodt Institute of Radiology"' />{",\n"}
                {"  "}<Gr c="university" />{":   "}<S c='"Washington University in St. Louis"' />{",\n"}
                {"  "}<Gr c="location" />{":     "}<S c='"St. Louis, MO, USA"' />{",\n"}
                {"  "}<Gr c="status" />{":       "}<N c="open_to_collaborations" />{",\n"}
                {"\n"}
                {"  "}<Gr c="focus" />{": [\n"}
                {"    "}<S c='"Accelerated MRI Reconstruction"' />{",\n"}
                {"    "}<S c='"Motion & Artifact Correction"' />{",\n"}
                {"    "}<S c='"Foundation Models & AI Agents"' />{",\n"}
                {"    "}<S c='"Spiking Neural Networks"' />{",\n"}
                {"  "}{"],\n"}
                {"\n"}
                {"  "}<Fn c="contact" />{"() {\n"}
                {"    "}<K c="return" />{" "}<S c='"gsaju@wustl.edu"' />{";  "}
                <Cm c="// always open" />{"\n"}
                {"  "}{"},\n"}
                {"};"}
              </Box>
            </TerminalWindow>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                bgcolor: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 2,
                p: { xs: 2.5, md: 3.5 },
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 999,
                  bgcolor: alpha(C.green, 0.08),
                  border: `1px solid ${alpha(C.green, 0.25)}`,
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: C.green,
                    boxShadow: `0 0 8px ${C.green}`,
                    animation: "liveGlow 2s ease-in-out infinite",
                    "@keyframes liveGlow": {
                      "0%, 100%": { boxShadow: `0 0 4px ${C.green}` },
                      "50%":      { boxShadow: `0 0 12px ${C.green}` },
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.green,
                    fontFamily: MONO,
                    letterSpacing: 0.8,
                  }}
                >
                  OPEN TO COLLABORATIONS
                </Typography>
              </Box>

              <Typography variant="h1" sx={{ fontWeight: 800, mb: 0.5, lineHeight: 1.15, fontSize: { xs: "1.75rem", md: "2rem" } }}>
                Gulfam Ahmed Saju
              </Typography>
              <Typography sx={{ color: C.comment, fontFamily: MONO, fontSize: 13, mb: 2 }}>
                PhD · AI / Medical Imaging Researcher
              </Typography>

              <Typography sx={{ color: "#c9d1d9", lineHeight: 1.8, mb: 3, fontSize: "0.95rem" }}>
                I build AI systems for medical imaging — from foundation-model-driven agents
                and MRI reconstruction to brain-inspired spiking neural networks for
                compute-efficient inference.
              </Typography>

              <Stack spacing={1.5} sx={{ mb: 3 }}>
                {[
                  { label: "$ email", val: "gsaju@wustl.edu",                     color: C.green  },
                  { label: "$ org",   val: "Washington University in St. Louis",  color: C.string },
                  { label: "$ dept",  val: "Mallinckrodt Institute of Radiology", color: C.number },
                ].map((row) => (
                  <Box key={row.label} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                    <Typography
                      sx={{ fontFamily: MONO, fontSize: 12, color: C.comment, flex: "0 0 58px", pt: "1px" }}
                    >
                      {row.label}
                    </Typography>
                    <Typography sx={{ fontFamily: MONO, fontSize: 12, color: row.color, lineHeight: 1.5, minWidth: 0, wordBreak: "break-word" }}>
                      {row.val}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                <Button
                  component={RouterLink}
                  to="/research"
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  size="small"
                  sx={{ fontFamily: MONO, fontWeight: 600 }}
                >
                  ./research
                </Button>
                <Button component={RouterLink} to="/publications" variant="outlined" size="small" sx={{ fontFamily: MONO }}>
                  ./publications
                </Button>
                <Button
                  component={RouterLink}
                  to="/cv"
                  variant="outlined"
                  size="small"
                  sx={{ fontFamily: MONO, borderColor: alpha(C.comment, 0.4), color: C.comment }}
                >
                  ./cv
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* ══════════════ METRICS ══════════════ */}
        <Reveal>
          <Box
            sx={{
              bgcolor: alpha(C.surface, 0.8),
              border: `1px solid ${C.border}`,
              borderRadius: 2,
              px: { xs: 2.5, md: 3.5 },
              py: { xs: 2.25, md: 2.5 },
              mb: { xs: 4, md: 5 },
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
              gap: { xs: 2.5, md: 2 },
              backdropFilter: "blur(6px)",
            }}
          >
            <Metric value={peerReviewed} label="peer-reviewed" colour={C.accent} />
            <Metric value={firstAuthor} label="first author" colour={C.green} />
            <Metric value={venues} label="venues" colour={C.func} />
            <Metric value={5} label="years research" suffix="+" colour={C.variable} />
          </Box>
        </Reveal>

        {/* ══════════════ RESEARCH AREAS ══════════════ */}
        <Box sx={{ mb: 5 }}>
          <Typography sx={{ fontFamily: MONO, color: C.comment, fontSize: 13, mb: 2.5 }}>
            <Cm c="// research.areas.map(area => <Module />)" />
          </Typography>

          <Grid container spacing={2.5}>
            {researchAreas.map((area, i) => {
              const Icon = ICONS[area.id];
              return (
                <Grid size={{ xs: 12, sm: 6 }} key={area.id}>
                  <Reveal delay={i * 70}>
                    <Card
                      sx={{
                        height: "100%",
                        bgcolor: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: 2,
                        transition: "border-color 180ms, box-shadow 180ms, transform 180ms",
                        "&:hover": {
                          borderColor: alpha(area.accent, 0.75),
                          boxShadow: `0 0 0 1px ${alpha(area.accent, 0.2)}, 0 8px 24px ${alpha("#010409", 0.6)}`,
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      {/* live visualisation of this research area */}
                      <Box
                        sx={{
                          borderBottom: `1px solid ${C.border}`,
                          bgcolor: "#0a0e14",
                          position: "relative",
                        }}
                      >
                        <ResearchViz viz={area.viz} accent={area.accent} height={132} />
                      </Box>

                      <CardContent sx={{ p: { xs: 2.25, md: 2.75 } }}>
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1.25,
                            fontFamily: MONO,
                            fontSize: 12.5,
                            color: C.comment,
                          }}
                        >
                          <K c="function" />{" "}<Fn c={area.fn} />{"() {"}
                        </Box>

                        <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 1.5 }}>
                          <Box sx={{ mt: 0.25, flex: "0 0 auto" }}>
                            <Icon sx={{ color: area.accent }} />
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.25 }}>
                            {area.title}
                          </Typography>
                        </Stack>

                        <Typography sx={{ color: C.comment, lineHeight: 1.75, fontSize: "0.9rem", mb: 2 }}>
                          {area.short}
                        </Typography>

                        <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                          {area.tags.slice(0, 3).map((t) => (
                            <Chip
                              key={t}
                              label={t}
                              size="small"
                              sx={{
                                fontFamily: MONO,
                                fontSize: 11,
                                bgcolor: C.elevated,
                                border: `1px solid ${C.border}`,
                                color: C.string,
                              }}
                            />
                          ))}
                        </Stack>

                        <Typography sx={{ fontFamily: MONO, fontSize: 12.5, color: C.comment, mt: 1.5 }}>
                          {"}"}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Reveal>
                </Grid>
              );
            })}
          </Grid>

          <Button
            component={RouterLink}
            to="/research"
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ mt: 3, fontFamily: MONO }}
          >
            explore the research
          </Button>
        </Box>

        {/* ══════════════ SKILLS ══════════════ */}
        <Reveal>
          <Box
            sx={{
              bgcolor: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 2,
              p: { xs: 2.5, md: 3 },
            }}
          >
            <Typography sx={{ fontFamily: MONO, fontSize: 13, color: C.comment, mb: 2 }}>
              <Cm c="/** Technical stack, tools & methods */" />
            </Typography>
            <Divider sx={{ mb: 2.5, borderColor: C.border }} />
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {skills.map((s) => (
                <Chip
                  key={s.label}
                  label={s.label}
                  size="small"
                  sx={{
                    fontFamily: MONO,
                    fontSize: 12,
                    fontWeight: 500,
                    bgcolor: C.elevated,
                    border: `1px solid ${C.border}`,
                    color: s.color,
                    transition: "border-color 160ms, background 160ms",
                    "&:hover": {
                      bgcolor: alpha(s.color, 0.09),
                      borderColor: alpha(s.color, 0.4),
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
