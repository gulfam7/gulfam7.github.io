// src/pages/HomePage.jsx  â€”  VS Code / GitHub Dark coder aesthetic
import React, { useEffect, useRef } from "react";
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

// â”€â”€ Syntax colour tokens (GitHub Dark) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const KEYWORD  = "#ff7b72";  // red
const FUNC     = "#d2a8ff";  // purple
const STR      = "#a5d6ff";  // light blue
const NUM      = "#79c0ff";  // cyan
const COMMENT  = "#8b949e";  // grey
const VARIABLE = "#ffa657";  // orange
const GREEN    = "#7ee787";
const BG       = "#0d1117";
const SURFACE  = "#161b22";
const BORDER   = "#30363d";

// â”€â”€ Codeâ€‘Rain Canvas â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function CodeRainCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const FONT_SIZE = 13;
    const CHARS =
      "{}[]()<>const function return import export class async await" +
      " void let var if else for while => !== === null undefined true" +
      " false 0 1 ; : = . _ | * & ^ # @ ! // /** */";
    const charArr = CHARS.split(" ").join("").split("");

    const COLORS = [GREEN, NUM, FUNC, KEYWORD, VARIABLE, STR, COMMENT];

    let W, H, cols, drops;
    const init = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      cols  = Math.floor(W / FONT_SIZE) + 1;
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    };
    init();

    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    let frame;
    let lastTime = 0;

    const draw = (ts) => {
      frame = requestAnimationFrame(draw);
      if (ts - lastTime < 60) return; // ~16 fps for subtlety
      lastTime = ts;

      // Fade trail
      ctx.fillStyle = `rgba(13,17,23,0.12)`;
      ctx.fillRect(0, 0, W, H);

      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      drops.forEach((y, i) => {
        const ch    = charArr[Math.floor(Math.random() * charArr.length)];
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        ctx.globalAlpha = Math.random() * 0.45 + 0.15;
        ctx.fillStyle   = color;
        ctx.fillText(ch, i * FONT_SIZE, y * FONT_SIZE);
        ctx.globalAlpha = 1;

        if (y * FONT_SIZE > H && Math.random() > 0.97) drops[i] = 0;
        drops[i] += 0.55;
      });
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.38,
      }}
    />
  );
}

// â”€â”€ Terminal Window Wrapper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function TerminalWindow({ filename, children, sx = {} }) {
  return (
    <Box
      sx={{
        bgcolor: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 2,
        overflow: "hidden",
        ...sx,
      }}
    >
      {/* title bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "#21262d",
          px: 2,
          py: 0.9,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f57" }} />
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28c840" }} />
        <Typography
          sx={{
            ml: 1.5,
            color: COMMENT,
            fontSize: 12,
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          {filename}
        </Typography>
      </Box>
      {children}
    </Box>
  );
}

// â”€â”€ Syntax-coloured spans â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const K  = ({ c }) => <span style={{ color: KEYWORD  }}>{c}</span>;
const Fn = ({ c }) => <span style={{ color: FUNC     }}>{c}</span>;
const S  = ({ c }) => <span style={{ color: STR      }}>{c}</span>;
const N  = ({ c }) => <span style={{ color: NUM      }}>{c}</span>;
const Cm = ({ c }) => <span style={{ color: COMMENT  }}>{c}</span>;
const V  = ({ c }) => <span style={{ color: VARIABLE }}>{c}</span>;
const Gr = ({ c }) => <span style={{ color: GREEN    }}>{c}</span>;

export default function HomePage() {
  const researchAreas = [
    {
      icon: <ScienceRoundedIcon sx={{ color: NUM }} />,
      fn: "acceleratedMRI",
      title: "Accelerated MRI",
      desc: "AI methods to accelerate MRI reconstruction while preserving clinically meaningful structure and quantitative fidelity.",
      tags: ["Reconstruction", "k-space", "Undersampling"],
    },
    {
      icon: <AutoFixHighRoundedIcon sx={{ color: FUNC }} />,
      fn: "motionCorrection",
      title: "Motion & Artifact Correction",
      desc: "Robust correction of motion-induced artifacts to reduce rescans and stabilize downstream analysis.",
      tags: ["CycleGAN", "Generative AI", "PROPELLER MRI"],
    },
    {
      icon: <PsychologyRoundedIcon sx={{ color: GREEN }} />,
      fn: "agentMRI",
      title: "Foundation Model Agents",
      desc: "Agentic systems that interpret MRI data, route tasks, and integrate foundation models with specialized domain experts.",
      tags: ["VLM", "AI Agents", "Automation"],
    },
    {
      icon: <BoltRoundedIcon sx={{ color: VARIABLE }} />,
      fn: "spikeNets",
      title: "Spiking Neural Networks",
      desc: "Brain-inspired, compute-efficient temporal inference for next-generation AI workloads.",
      tags: ["SNN", "Efficient AI", "Temporal"],
    },
  ];

  const skills = [
    { label: "Python",      color: NUM      },
    { label: "PyTorch",     color: VARIABLE },
    { label: "TensorFlow",  color: KEYWORD  },
    { label: "HPC / SLURM", color: FUNC     },
    { label: "MRI Physics", color: GREEN    },
    { label: "Foundation Models", color: STR },
    { label: "AI Agents",   color: NUM      },
    { label: "Deep Learning", color: FUNC   },
    { label: "Medical Imaging", color: GREEN },
    { label: "Neuroimaging",  color: VARIABLE },
    { label: "CycleGAN",    color: KEYWORD  },
    { label: "Spiking Nets",color: STR      },
  ];

  return (
    <Box
      sx={{
        mx: { xs: -4, md: -4 },
        my: { xs: -4, md: -4 },
        position: "relative",
        overflow: "hidden",
        bgcolor: BG,
        minHeight: "100%",
      }}
    >
      {/* â”€â”€ code-rain canvas â”€â”€ */}
      <CodeRainCanvas />

      {/* â”€â”€ subtle gradient overlay so content pops â”€â”€ */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 20% 40%, ${alpha("#58a6ff", 0.06)} 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 70%, ${alpha("#7ee787", 0.04)} 0%, transparent 70%)
          `,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: { xs: 5, md: 8 } }}>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• HERO â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <Grid container spacing={4} alignItems="flex-start" sx={{ mb: 6 }}>

          {/* â”€â”€ Left: terminal code block â”€â”€ */}
          <Grid item xs={12} md={7}>
            <TerminalWindow filename="profile.ts">
              <Box
                component="pre"
                sx={{
                  m: 0,
                  p: { xs: 2.5, md: 3 },
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: { xs: 12.5, md: 13.5 },
                  lineHeight: 1.85,
                  color: "#e6edf3",
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
                {"  "}<Gr c="institute" />{"  "}<S c='"Mallinckrodt Institute of Radiology"' />{",\n"}
                {"  "}<Gr c="university" />{": "}<S c='"Washington University in St. Louis"' />{",\n"}
                {"  "}<Gr c="location" />{":   "}<S c='"St. Louis, MO, USA"' />{",\n"}
                {"  "}<Gr c="status" />{":     "}<N c="open_to_collaborations" />{",\n"}
                {"\n"}
                {"  "}<Gr c="focus" />{":[\n"}
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

          {/* â”€â”€ Right: intro card â”€â”€ */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                bgcolor: SURFACE,
                border: `1px solid ${BORDER}`,
                borderRadius: 2,
                p: { xs: 3, md: 3.5 },
                height: "100%",
              }}
            >
              {/* live dot pill */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 999,
                  bgcolor: `${GREEN}14`,
                  border: `1px solid ${GREEN}40`,
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: GREEN,
                    boxShadow: `0 0 8px ${GREEN}`,
                    animation: "liveGlow 2s ease-in-out infinite",
                    "@keyframes liveGlow": {
                      "0%, 100%": { boxShadow: `0 0 4px ${GREEN}` },
                      "50%":      { boxShadow: `0 0 12px ${GREEN}` },
                    },
                  }}
                />
                <Typography sx={{ fontSize: 11, fontWeight: 700, color: GREEN, fontFamily: '"JetBrains Mono", monospace', letterSpacing: 0.8 }}>
                  OPEN TO COLLABORATIONS
                </Typography>
              </Box>

              <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, lineHeight: 1.15 }}>
                Gulfam Ahmed Saju
              </Typography>
              <Typography sx={{ color: COMMENT, fontFamily: '"JetBrains Mono", monospace', fontSize: 13, mb: 2 }}>
                PhD; AI / Medical Imaging Researcher
              </Typography>

              <Typography sx={{ color: "#c9d1d9", lineHeight: 1.8, mb: 3, fontSize: "0.95rem" }}>
                I build AI systems for medical imaging â€” from foundation-model-driven agents and MRI reconstruction to brain-inspired spiking neural networks for compute-efficient inference.
              </Typography>

              <Stack spacing={1.5} sx={{ mb: 3 }}>
                {[
                  { label: "$ email",   val: "gsaju@wustl.edu",                    color: GREEN    },
                  { label: "$ org",     val: "Washington University in St. Louis", color: STR      },
                  { label: "$ dept",    val: "Mallinckrodt Institute of Radiology",color: NUM      },
                ].map((row) => (
                  <Box key={row.label} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                    <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: COMMENT, flex: "0 0 60px", pt: "1px" }}>
                      {row.label}
                    </Typography>
                    <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: row.color, lineHeight: 1.5 }}>
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
                  sx={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 600 }}
                >
                  ./research
                </Button>
                <Button
                  component={RouterLink}
                  to="/publications"
                  variant="outlined"
                  size="small"
                  sx={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  ./publications
                </Button>
                <Button
                  component={RouterLink}
                  to="/cv"
                  variant="outlined"
                  size="small"
                  sx={{ fontFamily: '"JetBrains Mono", monospace', borderColor: `${COMMENT}66`, color: COMMENT }}
                >
                  ./cv
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• RESEARCH AREAS â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <Box sx={{ mb: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: COMMENT, fontSize: 13 }}>
              <Cm c="// research.areas.map(area => &lt;Module /&gt;)" />
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {researchAreas.map((area) => (
              <Grid item xs={12} sm={6} key={area.fn}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: SURFACE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 2,
                    transition: "border-color 180ms, box-shadow 180ms, transform 180ms",
                    "&:hover": {
                      borderColor: "#58a6ff",
                      boxShadow: `0 0 0 1px #58a6ff26, 0 8px 24px ${alpha("#0d1117", 0.6)}`,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* function-style header */}
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 12.5,
                        color: COMMENT,
                      }}
                    >
                      <K c="function" />{" "}
                      <Fn c={area.fn} />
                      {"() {"}
                    </Box>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 1.5 }}>
                      <Box sx={{ mt: 0.25, flex: "0 0 auto" }}>{area.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.25 }}>
                        {area.title}
                      </Typography>
                    </Stack>
                    <Typography sx={{ color: COMMENT, lineHeight: 1.75, fontSize: "0.9rem", mb: 2 }}>
                      {area.desc}
                    </Typography>
                    <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                      {area.tags.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: 11,
                            bgcolor: "#21262d",
                            border: `1px solid ${BORDER}`,
                            color: STR,
                          }}
                        />
                      ))}
                    </Stack>
                    <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12.5, color: COMMENT, mt: 1.5 }}>{"}"}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• SKILLS â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <Box
          sx={{
            bgcolor: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 2,
            p: { xs: 2.5, md: 3 },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 13,
              color: COMMENT,
              mb: 2,
            }}
          >
            <Cm c="/** Technical Stack â€” tools & methods */" />
          </Typography>
          <Divider sx={{ mb: 2.5, borderColor: BORDER }} />
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {skills.map((s) => (
              <Chip
                key={s.label}
                label={s.label}
                size="small"
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 12,
                  fontWeight: 500,
                  bgcolor: "#21262d",
                  border: `1px solid ${BORDER}`,
                  color: s.color,
                  transition: "border-color 160ms, background 160ms",
                  "&:hover": {
                    bgcolor: `${s.color}16`,
                    borderColor: `${s.color}66`,
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

      </Container>
    </Box>
  );
}
