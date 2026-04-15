// src/pages/PublicationsPage.jsx
import React, { useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

// =========================
// Data
// =========================
export const publications = [
  // Journals
  {
    type: "journal",
    authors: "Gulfam Ahmed Saju, Marjan Akhi and Yuchou Chang",
    title:
      "AgentMRI: A Vison Language Model-Powered AI System for Self-regulating MRI Reconstruction with Multiple Degradations",
    journal: "Journal of Imaging Informatics in Medicine",
    volume: "",
    issue: "",
    month: "",
    year: 2025,
    pages: "",
    url: "https://link.springer.com/epdf/10.1007/s10278-025-01617-0?sharing_token=fa6wcw11cACNFJi5GaA1NPe4RwlQNchNByi7wbcMAY58-OKFNqPPxq4AJD8-TBxkLaoQF6Ofmh1n14pK8aRV7ukI0vltXEgX1bHxF4h4O7HdfeXsHrFNqsM1dAztoyeCOBBAGS9sRhx4Gc1QEy__qetDO22NTLLE_SWkqrYnE64%3D",
    doi: "10.1007/s10278-025-01617-0",
  },
  {
    type: "journal",
    authors: "Gulfam Ahmed Saju, Alan Okinaka, Marjan Akhi and Yuchou Chang",
    title:
      "An ensemble approach for accelerated and noise-resilient parallel MRI reconstruction utilizing CycleGANs",
    journal: "Machine Vision and Applications",
    volume: "35",
    issue: "",
    month: "",
    year: 2024,
    pages: "Article 136",
    url: "https://link.springer.com/article/10.1007/s00138-024-01617-0",
    doi: "10.1007/s00138-024-01617-0",
  },
  {
    type: "journal",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Hui Mao, Tianming Liu, and Yuchou Chang",
    title: "Suppressing image blurring of PROPELLER MRI via untrained method",
    journal: "Physics in Medicine and Biology",
    volume: "68",
    issue: "17",
    month: "August",
    year: 2023,
    pages: "",
    url: "https://iopscience.iop.org/article/10.1088/1361-6560/acebb1/meta",
    doi: "10.1088/1361-6560/acebb1",
  },
  {
    type: "journal",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li and Yuchou Chang",
    title: "Improving Deep PROPELLER MRI via Synthetic Blade Augmentation and Enhanced Generalization",
    journal: "Magnetic Resonance Imaging",
    volume: "108",
    issue: "",
    month: "May",
    year: 2024,
    pages: "",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0730725X24000237",
    doi: "10.1016/j.mri.2024.01.017",
  },
  {
    type: "journal",
    authors: "Yuchou Chang, Zhiqiang Li, Gulfam Ahmed Saju, Hui Mao, and Tianming Liu",
    title: "Deep Learning-Based Rigid Motion Correction for Magnetic Resonance Imaging: A Survey",
    journal: "Meta-Radiology",
    volume: "1",
    issue: "1",
    month: "June",
    year: 2023,
    pages: "",
    url: "https://www.sciencedirect.com/science/article/pii/S2950162823000012",
    doi: "10.1016/j.metrad.2023.100001",
  },

  // Conferences
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Anton Spirkin, Felipe Marcelino, Yuchou Chang",
    title: "STEG-AIW: Spatio-Temporal Gating and Adaptive-Timestep Inference for Efficient Spiking Neural Networks",
    journal: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2026",
    month: "",
    year: 2026,
    pages: "",
    url: "",
    doi: "",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title: "Large Multimodal Model for Simulating Big Training Data in Deep PROPELLER MRI",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieee-hpec.org/wp-content/uploads/2025/02/HPEC2024-89.pdf",
    doi: "",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title: "Evaluating the Impact of Noisy Blades on PROPELLER MRI Reconstruction Quality",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieee-hpec.org/wp-content/uploads/2025/02/HPEC2024-85.pdf",
    doi: "",
  },
  {
    type: "conference",
    authors: "Yuchou Chang, Huy Anh Pham, Gulfam Ahmed Saju",
    title: "LLM-Based Task Planning for Navigating Companion Robot from Emotion Signals",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieee-hpec.org/wp-content/uploads/2025/02/70.pdf",
    doi: "",
  },
  {
    type: "conference",
    authors: "Girish Babu Reddy, Gulfam Ahmed Saju, Yi Liu, Yuchou Chang",
    title: "Quantum Computing for Data Calibration in Parallel Magnetic Resonance Imaging Reconstruction",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieeexplore.ieee.org/abstract/document/10938445",
    doi: "10.1109/HPEC62836.2024.10938445",
  },
  {
    type: "conference",
    authors: "Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang",
    title: "Transfer Learning Assisted Parameter Selection for Water-Fat Separation in Dixon MRI",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "",
    doi: "",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title: "Ensemble CycleGAN for Retrospective Rigid Motion Correction in MRI",
    journal: "46th IEEE Engineering in Medicine and Biology Conference (EMBC)",
    month: "July",
    year: 2024,
    pages: "",
    url: "https://ieeexplore.ieee.org/abstract/document/10782023",
    doi: "10.1109/EMBC53108.2024.10782023",
  },
  {
    type: "conference",
    authors: "Yuchou Chang, Zhiqiang Li, Huy Anh Pham, Gulfam Ahmed Saju",
    title: "Intelligent Agent Planning for Optimizing Parallel MRI Reconstruction via a Large Language Model",
    journal: "46th IEEE Engineering in Medicine and Biology Conference (EMBC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieeexplore.ieee.org/abstract/document/10782629",
    doi: "10.1109/EMBC53108.2024.10782629",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Alan Okinaka, Yuchou Chang",
    title: "Exploiting Generative Adversarial Networks in Joint Sensitivity Encoding for Enhanced MRI Reconstruction",
    journal: "18th International Symposium on Visual Computing (ISVC)",
    month: "",
    year: 2023,
    pages: "",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-47966-3_35",
    doi: "10.1007/978-3-031-47966-3_35",
  },
  {
    type: "conference",
    authors: "Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang",
    title: "Automating Kernel Size Selection in MRI Reconstruction via a Transparent and Interpretable Search Approach",
    journal: "18th International Symposium on Visual Computing (ISVC)",
    month: "",
    year: 2023,
    pages: "",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-47966-3_33",
    doi: "10.1007/978-3-031-47966-3_33",
  },
  {
    type: "conference",
    authors: "Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang",
    title: "Enhancing Image Reconstruction via Phase-Constrained Data in an Iterative Process",
    journal: "18th International Symposium on Visual Computing (ISVC)",
    month: "",
    year: 2023,
    pages: "",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-47969-4_32",
    doi: "10.1007/978-3-031-47969-4_32",
  },
  {
    type: "conference",
    authors:
      "Gulfam Ahmed Saju, Nazrul Islam, Md. Moshgul Bhuiyan, Narayan Ranjan Chakraborty, Bimal Chandra Das, and Manoranjan Dash",
    title:
      "RECH-LEACH: A New Cluster Head Selection Algorithm of LEACH on the Basis of Residual Energy for Wireless Sensor Network",
    journal: "Soft Computing and Signal Processing: Proceedings of 3rd ICSCSP 2020",
    month: "",
    year: 2020,
    pages: "",
    url: "https://link.springer.com/chapter/10.1007/978-981-33-6912-2_47",
    doi: "10.1007/978-981-33-6912-2_47",
  },

  // Under review
  {
    type: "under-review",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Marjan Akhi, Yuchou Chang",
    title: "Attention-UNN: Attention-Enhanced Untrained Neural Networks for Accelerated MRI Reconstruction",
    journal: "Magnetic Resonance Materials in Physics, Biology and Medicine (Under Review)",
    month: "",
    year: "",
    pages: "",
    url: "",
    doi: "",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title: "MRI-AgentNet: A Vision Language Models-Based Multi-Agent AI System for Solving Inverse Problems in MRI",
    journal: "2026 IEEE International Conference on AI and Data Analytics (ICAD)",
    month: "",
    year: 2026,
    pages: "",
    url: "",
    doi: "",
  },

  // Abstracts
  {
    type: "abstract",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang",
    title: "Joint Estimation of Coil Sensitivity and Image by Using Untrained Neural Network without External Training Data",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 3893",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang",
    title: "Improving JSENSE Using an Initial Reconstruction with an Unrolled Deep Network Prior",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 4037",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang",
    title: "Incorporating Untrained Neural Network Prior in PROPELLER Imaging",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 4038",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Yuchou Chang, Gulfam Ahmed Saju, Jasina Yu, Reza Abiri, Zhiqiang Li, and Tianming Liu",
    title: "Suppressing MRI Background Noise via Modeling Phase Variations",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 2031",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Yuchou Chang, Gulfam Ahmed Saju, Jasina Yu, Reza Abiri, Zhiqiang Li, and Tianming Liu",
    title: "Phase-Constrained Reconstruction for Enhancing PROPELLER SNR",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 2004",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Gulfam Ahmed Saju, Huy Anh Pham, Yuchou Chang",
    title: "A Triple CycleGAN Model Ensemble for Motion Correction in 7T MR Brain Images",
    journal: "14th Scientific Symposium on Clinical Needs, Research Promises and Technical Solutions in Ultrahigh Field Magnetic Resonance",
    month: "",
    year: "",
    pages: "",
    url: "",
    doi: "",
  },
];

// =========================
// Design tokens
// =========================
const BG = "#0a0e14";
const SURFACE = "rgba(22, 27, 34, 0.72)";
const BORDER = "rgba(48, 54, 61, 0.85)";
const ACCENT = "#58a6ff";
const MUTED = "#8b949e";

const SECTION_THEME = {
  journal: { color: "#58a6ff", label: "Journal" },
  conference: { color: "#a371f7", label: "Conference" },
  abstract: { color: "#39d0d8", label: "Abstract" },
  "under-review": { color: "#ffa657", label: "Under review" },
};

// =========================
// Helpers
// =========================
function isMyName(token) {
  const t = token.trim().toLowerCase();
  return t === "gulfam ahmed saju" || t === "gulfam a. saju";
}

function splitAuthors(authors) {
  if (!authors) return [];
  const normalized = authors
    .replace(/\s*&\s*/g, ", ")
    .replace(/\s+and\s+/gi, ", ")
    .replace(/\s*,\s*/g, ", ");
  return normalized
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function formatVenue(pub) {
  const parts = [];
  if (pub.journal) parts.push(pub.journal);
  const vol = pub.volume ? `vol. ${pub.volume}` : "";
  const no = pub.issue ? `no. ${pub.issue}` : "";
  const pages = pub.pages ? `pp. ${pub.pages}` : "";
  const details = [vol, no, pages].filter(Boolean).join(", ");
  if (details) parts.push(details);
  if (pub.month) parts.push(pub.month);
  if (pub.year) parts.push(String(pub.year));
  return parts.join(". ") + (parts.length ? "." : "");
}

function sortByYearDesc(a, b) {
  const ya = Number(a.year) || -1;
  const yb = Number(b.year) || -1;
  return yb - ya;
}

function scrollToId(id) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// =========================
// UI
// =========================
function PublicationCard({ pub, index, accent, kindLabel }) {
  const year = pub.year ? String(pub.year) : "—";
  const venue = formatVenue(pub);

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        p: { xs: 2.25, md: 2.75 },
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
        overflow: "hidden",
        "&:hover": {
          borderColor: alpha(accent, 0.45),
          boxShadow: `0 0 0 1px ${alpha(accent, 0.12)}, 0 24px 48px -24px rgba(0,0,0,0.55)`,
          transform: "translateY(-2px)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          borderRadius: "12px 0 0 12px",
          background: `linear-gradient(180deg, ${accent}, ${alpha(accent, 0.35)})`,
        },
      }}
    >
      <Stack spacing={1.5} sx={{ pl: 0.5 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          useFlexGap
          gap={1}
        >
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" useFlexGap>
            <Chip
              label={`#${index + 1}`}
              size="small"
              sx={{
                height: 24,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                fontWeight: 700,
                bgcolor: alpha(accent, 0.12),
                color: accent,
                border: `1px solid ${alpha(accent, 0.25)}`,
              }}
            />
            <Chip
              label={year}
              size="small"
              sx={{
                height: 24,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                fontWeight: 600,
                bgcolor: alpha("#e6edf3", 0.06),
                color: "#c9d1d9",
                border: `1px solid ${alpha("#e6edf3", 0.08)}`,
              }}
            />
            <Chip
              label={kindLabel}
              size="small"
              sx={{
                height: 24,
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: 0.6,
                textTransform: "uppercase",
                bgcolor: "transparent",
                color: MUTED,
                border: `1px solid ${alpha(MUTED, 0.35)}`,
              }}
            />
          </Stack>
        </Stack>

        <Typography
          sx={{
            fontWeight: 750,
            fontSize: { xs: "1.05rem", md: "1.12rem" },
            lineHeight: 1.45,
            letterSpacing: "-0.02em",
            color: "#f0f3f6",
          }}
        >
          {pub.title}
        </Typography>

        <Typography
          component="div"
          sx={{
            fontSize: "0.9rem",
            lineHeight: 1.75,
            color: alpha("#e6edf3", 0.88),
          }}
        >
          {splitAuthors(pub.authors).map((name, i, arr) => (
            <React.Fragment key={`${name}-${i}`}>
              <Box component="span" sx={{ fontWeight: isMyName(name) ? 800 : 500, color: isMyName(name) ? "#fff" : undefined }}>
                {name}
              </Box>
              {i < arr.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </Typography>

        {venue ? (
          <Typography
            sx={{
              fontSize: "0.875rem",
              lineHeight: 1.65,
              color: MUTED,
              fontStyle: "italic",
            }}
          >
            {venue}
          </Typography>
        ) : null}

        {(pub.url || pub.doi) && (
          <Stack direction="row" flexWrap="wrap" useFlexGap gap={1} sx={{ pt: 0.5 }}>
            {pub.url ? (
              <Button
                size="small"
                variant="contained"
                disableElevation
                endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 650,
                  fontSize: 12.5,
                  px: 2,
                  bgcolor: alpha(accent, 0.22),
                  color: "#f0f6fc",
                  border: `1px solid ${alpha(accent, 0.35)}`,
                  "&:hover": {
                    bgcolor: alpha(accent, 0.32),
                  },
                }}
              >
                Open
              </Button>
            ) : null}
            {pub.doi ? (
              <Button
                size="small"
                variant="outlined"
                title={pub.doi}
                endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 12.5,
                  px: 2,
                  fontFamily: '"JetBrains Mono", monospace',
                  borderColor: alpha(MUTED, 0.45),
                  color: alpha("#e6edf3", 0.92),
                  "&:hover": {
                    borderColor: accent,
                    bgcolor: alpha(accent, 0.06),
                  },
                }}
              >
                DOI
              </Button>
            ) : null}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

function SectionBlock({ id, icon: Icon, title, items, typeKey }) {
  if (!items?.length) return null;
  const theme = SECTION_THEME[typeKey] || SECTION_THEME.journal;

  return (
    <Box id={id} sx={{ scrollMarginTop: 24 }}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        gap={2}
        flexWrap="wrap"
        sx={{ mb: 2.5 }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ minWidth: 0 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2.5,
              display: "grid",
              placeItems: "center",
              background: `linear-gradient(145deg, ${alpha(theme.color, 0.2)}, ${alpha(theme.color, 0.06)})`,
              border: `1px solid ${alpha(theme.color, 0.28)}`,
              boxShadow: `0 8px 24px -12px ${alpha(theme.color, 0.5)}`,
            }}
          >
            <Icon sx={{ color: theme.color, fontSize: 22 }} />
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.15rem", md: "1.35rem" },
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: 13.5, mt: 0.35 }}>
              {items.length} {items.length === 1 ? "entry" : "entries"}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        {items.map((pub, idx) => (
          <PublicationCard
            key={`${title}-${idx}`}
            pub={pub}
            index={idx}
            accent={theme.color}
            kindLabel={theme.label}
          />
        ))}
      </Stack>
    </Box>
  );
}

// =========================
// Page
// =========================
export default function PublicationsPage() {
  const safe = Array.isArray(publications) ? publications : [];

  const grouped = useMemo(() => {
    const journals = safe.filter((p) => p.type === "journal").slice().sort(sortByYearDesc);
    const conferences = safe.filter((p) => p.type === "conference").slice().sort(sortByYearDesc);
    const abstracts = safe.filter((p) => p.type === "abstract").slice().sort(sortByYearDesc);
    const underReview = safe.filter((p) => p.type === "under-review").slice().sort(sortByYearDesc);

    return { journals, conferences, abstracts, underReview };
  }, [safe]);

  const navItems = [
    { id: "pub-journals", label: "Journals", count: grouped.journals.length },
    { id: "pub-conferences", label: "Conferences", count: grouped.conferences.length },
    { id: "pub-abstracts", label: "Abstracts", count: grouped.abstracts.length },
    { id: "pub-review", label: "Under review", count: grouped.underReview.length },
  ].filter((x) => x.count > 0);

  return (
    <Box
      sx={{
        mx: { xs: -4, md: -4 },
        my: { xs: -4, md: -4 },
        minHeight: "100%",
        position: "relative",
        bgcolor: BG,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(ellipse 80% 55% at 12% -10%, ${alpha(ACCENT, 0.14)}, transparent 55%),
            radial-gradient(ellipse 60% 45% at 92% 8%, ${alpha("#a371f7", 0.1)}, transparent 50%),
            radial-gradient(ellipse 50% 35% at 50% 100%, ${alpha("#39d0d8", 0.06)}, transparent 45%)
          `,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.35,
          backgroundImage: `linear-gradient(${alpha("#fff", 0.03)} 1px, transparent 1px),
            linear-gradient(90deg, ${alpha("#fff", 0.03)} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 5, md: 7 }, px: { xs: 2, sm: 3 } }}>
        <Stack spacing={1.25} sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 3,
              color: alpha(ACCENT, 0.85),
              textTransform: "uppercase",
            }}
          >
            Research output
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 850,
              letterSpacing: "-0.04em",
              fontSize: { xs: "2rem", md: "2.65rem" },
              lineHeight: 1.1,
            }}
          >
            Publications
          </Typography>
          <Typography
            sx={{
              color: MUTED,
              maxWidth: 640,
              lineHeight: 1.75,
              fontSize: "1.02rem",
            }}
          >
            Peer-reviewed journal articles, conference papers, conference abstracts, and manuscripts under review.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          gap={1}
          sx={{ mb: 4 }}
        >
          {navItems.map((n) => (
            <Chip
              key={n.id}
              label={`${n.label} · ${n.count}`}
              onClick={() => scrollToId(n.id)}
              clickable
              sx={{
                borderRadius: 999,
                fontWeight: 650,
                fontSize: 12.5,
                py: 2.25,
                px: 0.5,
                bgcolor: alpha("#fff", 0.04),
                border: `1px solid ${alpha("#fff", 0.08)}`,
                color: "#e6edf3",
                transition: "all 0.18s ease",
                "&:hover": {
                  bgcolor: alpha(ACCENT, 0.12),
                  borderColor: alpha(ACCENT, 0.35),
                },
              }}
            />
          ))}
        </Stack>

        <Stack spacing={5}>
          <SectionBlock
            id="pub-journals"
            icon={MenuBookRoundedIcon}
            title="Peer-Reviewed Journal Articles"
            items={grouped.journals}
            typeKey="journal"
          />
          <SectionBlock
            id="pub-conferences"
            icon={GroupsRoundedIcon}
            title="Peer-Reviewed Conference Papers"
            items={grouped.conferences}
            typeKey="conference"
          />
          <SectionBlock
            id="pub-abstracts"
            icon={ScienceRoundedIcon}
            title="Conference Abstracts"
            items={grouped.abstracts}
            typeKey="abstract"
          />
          <SectionBlock
            id="pub-review"
            icon={FactCheckRoundedIcon}
            title="Under Review"
            items={grouped.underReview}
            typeKey="under-review"
          />
        </Stack>
      </Container>
    </Box>
  );
}
