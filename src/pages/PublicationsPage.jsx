// src/pages/PublicationsPage.jsx
import React, { useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

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
    url: "https://link.springer.com/epdf/10.1007/s10278-025-01617-0",
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
// UI Components
// =========================
function PublicationNode({ pub, index, accent }) {
  const venue = formatVenue(pub);
  const year = pub.year ? String(pub.year) : "Ongoing";

  return (
    <Box
      sx={{
        position: "relative",
        pl: { xs: 4, md: 6 },
        pb: 5,
        "&:last-of-type": { pb: 0 },
        "&:hover .timeline-dot": {
          bgcolor: accent,
          boxShadow: `0 0 12px ${alpha(accent, 0.6)}`,
          transform: "scale(1.2)",
        },
        "&:hover .pub-title": {
          color: accent,
        },
      }}
    >
      {/* The Vertical Track */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 7, md: 11 },
          top: 24,
          bottom: -24,
          width: "2px",
          bgcolor: alpha(MUTED, 0.15),
          "&:last-of-type": { display: "none" }, // Hide track after last item
        }}
      />

      {/* The Data Node (Dot) */}
      <Box
        className="timeline-dot"
        sx={{
          position: "absolute",
          left: { xs: 0, md: 0 },
          top: 6,
          width: { xs: 16, md: 24 },
          height: { xs: 16, md: 24 },
          borderRadius: "50%",
          bgcolor: "#161b22",
          border: `2px solid ${alpha(MUTED, 0.4)}`,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner micro-dot */}
        <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: alpha(MUTED, 0.6) }} />
      </Box>

      <Stack spacing={1}>
        {/* Top Metadata Row: Monospace, Terminal-like */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.8rem",
              fontWeight: 700,
              color: alpha(MUTED, 0.8),
            }}
          >
            [{String(index + 1).padStart(2, "0")}]
          </Typography>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.8rem",
              fontWeight: 600,
              color: accent,
              bgcolor: alpha(accent, 0.1),
              px: 1,
              py: 0.25,
              borderRadius: 1,
            }}
          >
            {year}
          </Typography>
        </Stack>

        {/* Title */}
        <Typography
          className="pub-title"
          sx={{
            fontWeight: 650,
            fontSize: { xs: "1.05rem", md: "1.15rem" },
            lineHeight: 1.4,
            color: "#e6edf3",
            transition: "color 0.2s ease",
            cursor: "default",
          }}
        >
          {pub.title}
        </Typography>

        {/* Authors */}
        <Typography
          sx={{
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: alpha("#e6edf3", 0.75),
          }}
        >
          {splitAuthors(pub.authors).map((name, i, arr) => (
            <React.Fragment key={`${name}-${i}`}>
              <Box
                component="span"
                sx={{
                  fontWeight: isMyName(name) ? 600 : 400,
                  color: isMyName(name) ? "#fff" : "inherit",
                }}
              >
                {name}
              </Box>
              {i < arr.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </Typography>

        {/* Venue */}
        {venue && (
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: MUTED,
              fontStyle: "italic",
            }}
          >
            {venue}
          </Typography>
        )}

        {/* Action Links */}
        {(pub.url || pub.doi) && (
          <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
            {pub.url && (
              <Typography
                component="a"
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.85rem",
                  fontFamily: '"JetBrains Mono", monospace',
                  color: alpha(MUTED, 0.9),
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": { color: accent },
                }}
              >
                <span style={{ color: accent }}>{'>'}</span> VIEW_PDF
              </Typography>
            )}
            {pub.doi && (
              <Typography
                component="a"
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.85rem",
                  fontFamily: '"JetBrains Mono", monospace',
                  color: alpha(MUTED, 0.9),
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": { color: accent },
                }}
              >
                <span style={{ color: accent }}>{'>'}</span> RESOLVE_DOI
              </Typography>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

function SectionBlock({ id, title, items, typeKey }) {
  if (!items?.length) return null;
  const theme = SECTION_THEME[typeKey] || SECTION_THEME.journal;

  return (
    <Box id={id} sx={{ scrollMarginTop: 40, mb: 8 }}>
      {/* Scientific/Data Header */}
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
        <Box
          sx={{
            width: 12,
            height: 12,
            bgcolor: theme.color,
            boxShadow: `0 0 10px ${theme.color}`,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1, height: "1px", bgcolor: alpha(theme.color, 0.2) }} />
        <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: theme.color }}>
          COUNT:{items.length}
        </Typography>
      </Stack>

      <Box sx={{ position: "relative" }}>
        {items.map((pub, idx) => (
          <PublicationNode
            key={`${title}-${idx}`}
            pub={pub}
            index={idx}
            accent={theme.color}
          />
        ))}
      </Box>
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
    { id: "pub-journals", label: "JOURNALS", count: grouped.journals.length, color: SECTION_THEME.journal.color },
    { id: "pub-conferences", label: "CONFERENCES", count: grouped.conferences.length, color: SECTION_THEME.conference.color },
    { id: "pub-abstracts", label: "ABSTRACTS", count: grouped.abstracts.length, color: SECTION_THEME.abstract.color },
    { id: "pub-review", label: "UNDER_REVIEW", count: grouped.underReview.length, color: SECTION_THEME["under-review"].color },
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
      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 5, md: 7 }, px: { xs: 2, sm: 3 } }}>
        <Stack spacing={1.25} sx={{ mb: 4 }}>
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
            System Log // Research Output
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 850,
              letterSpacing: "-0.04em",
              fontSize: { xs: "2rem", md: "2.65rem" },
              lineHeight: 1.1,
              color: "#fff"
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
            A chronological ledger of peer-reviewed journal articles, conference papers, and manuscripts currently under review.
          </Typography>
        </Stack>

        {/* Minimal Terminal-Style Navigation */}
        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          gap={3}
          sx={{ 
            mb: 6,
            pb: 2,
            borderBottom: `1px solid ${alpha(MUTED, 0.2)}`
          }}
        >
          {navItems.map((n) => (
            <Typography
              key={n.id}
              onClick={() => scrollToId(n.id)}
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.85rem",
                fontWeight: 600,
                color: MUTED,
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": {
                  color: n.color,
                },
              }}
            >
              <span style={{ color: alpha(n.color, 0.7) }}>[</span>
              {n.label} : {n.count}
              <span style={{ color: alpha(n.color, 0.7) }}>]</span>
            </Typography>
          ))}
        </Stack>

        <Stack spacing={2}>
          <SectionBlock
            id="pub-journals"
            title="Peer-Reviewed Journal Articles"
            items={grouped.journals}
            typeKey="journal"
          />
          <SectionBlock
            id="pub-conferences"
            title="Peer-Reviewed Conference Papers"
            items={grouped.conferences}
            typeKey="conference"
          />
          <SectionBlock
            id="pub-abstracts"
            title="Conference Abstracts"
            items={grouped.abstracts}
            typeKey="abstract"
          />
          <SectionBlock
            id="pub-review"
            title="Under Review"
            items={grouped.underReview}
            typeKey="under-review"
          />
        </Stack>
      </Container>
    </Box>
  );
}
