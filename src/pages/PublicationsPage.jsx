// src/pages/PublicationsPage.jsx
import React, { useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  Chip,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

// Icons
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";

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
    type: "under-review",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title: "MRI-AgentNet: A Vision Language Models-Based Multi-Agent AI System for Solving Inverse Problems in MRI",
    journal: "International Conference on Computer Vision (ICCV) (Under Review)",
    month: "",
    year: 2025,
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
// Helpers
// =========================
const ACCENT = "#22d3ee";

function isMyName(token) {
  const t = token.trim().toLowerCase();
  return t === "gulfam ahmed saju" || t === "gulfam a. saju";
}

function splitAuthors(authors) {
  if (!authors) return [];
  // normalize separators: " and " / ", and " / "&"
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

// =========================
// UI Components
// =========================
function SectionCard({ icon: Icon, title, items }) {
  if (!items?.length) return null;

  const cardSx = {
    borderRadius: 3,
    border: "1px solid transparent",
    background: `
      linear-gradient(${alpha("#ffffff", 0.96)}, ${alpha("#ffffff", 0.96)}) padding-box,
      linear-gradient(135deg, ${alpha(ACCENT, 0.30)}, ${alpha("#0b1220", 0.10)}) border-box
    `,
    boxShadow: `0 12px 34px ${alpha("#0b1220", 0.10)}`,
  };

  return (
    <Card sx={cardSx}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1.5 }}>
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

          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
              {title}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {items.length} item{items.length === 1 ? "" : "s"}
            </Typography>
          </Box>

          <Box sx={{ ml: "auto" }}>
            <Chip
              size="small"
              icon={<TagRoundedIcon sx={{ fontSize: 16 }} />}
              label="Citations & links"
              sx={{
                borderRadius: 999,
                backgroundColor: alpha(ACCENT, 0.10),
                border: `1px solid ${alpha(ACCENT, 0.22)}`,
                color: alpha("#0b1220", 0.80),
                fontWeight: 800,
              }}
            />
          </Box>
        </Stack>

        <Divider sx={{ borderColor: alpha("#0b1220", 0.08), mb: 2 }} />

        <Stack spacing={2}>
          {items.map((pub, idx) => (
            <Box key={`${title}-${idx}`}>
              <Typography sx={{ lineHeight: 1.75 }}>
                <Box component="span" sx={{ fontWeight: 900, mr: 0.75 }}>
                  [{idx + 1}]
                </Box>

                {/* Authors */}
                <Box component="span">
                  {splitAuthors(pub.authors).map((name, i, arr) => (
                    <React.Fragment key={`${name}-${i}`}>
                      <Box
                        component="span"
                        sx={{ fontWeight: isMyName(name) ? 900 : 500 }}
                      >
                        {name}
                      </Box>
                      {i < arr.length - 1 ? ", " : ". "}
                    </React.Fragment>
                  ))}
                </Box>

                {/* Title */}
                <Box component="span" sx={{ fontWeight: 900 }}>
                  “{pub.title}.”
                </Box>{" "}

                {/* Venue */}
                <Box component="span" sx={{ fontStyle: "italic" }}>
                  {formatVenue(pub)}
                </Box>
              </Typography>

              {/* Actions */}
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 0.75 }}>
                {pub.url ? (
                  <Button
                    size="small"
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: 999,
                      textTransform: "none",
                      fontWeight: 800,
                      borderColor: alpha("#0b1220", 0.12),
                      color: "text.primary",
                      backgroundColor: alpha("#ffffff", 0.65),
                      "&:hover": {
                        backgroundColor: alpha("#ffffff", 0.95),
                        borderColor: alpha(ACCENT, 0.40),
                      },
                    }}
                  >
                    Link
                  </Button>
                ) : null}

                {pub.doi ? (
                  <Button
                    size="small"
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: 999,
                      textTransform: "none",
                      fontWeight: 800,
                      borderColor: alpha("#0b1220", 0.12),
                      color: "text.primary",
                      backgroundColor: alpha("#ffffff", 0.65),
                      "&:hover": {
                        backgroundColor: alpha("#ffffff", 0.95),
                        borderColor: alpha(ACCENT, 0.40),
                      },
                    }}
                  >
                    DOI
                  </Button>
                ) : null}

                {/* Optional: show DOI as text (small) */}
                {pub.doi ? (
                  <Typography sx={{ color: "text.secondary", fontSize: 12, mt: 0.6 }}>
                    DOI:&nbsp;
                    <MuiLink
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ fontSize: 12 }}
                    >
                      {pub.doi}
                    </MuiLink>
                  </Typography>
                ) : null}
              </Stack>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
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

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ mb: 3.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -0.4 }}>
          Publications
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 900, lineHeight: 1.75 }}>
          Peer-reviewed journal articles, conference papers, conference abstracts, and manuscripts under review.
        </Typography>
      </Box>

      <Stack spacing={3}>
        <SectionCard icon={MenuBookRoundedIcon} title="Peer-Reviewed Journal Articles" items={grouped.journals} />
        <SectionCard icon={GroupsRoundedIcon} title="Peer-Reviewed Conference Papers" items={grouped.conferences} />
        <SectionCard icon={ScienceRoundedIcon} title="Conference Abstracts" items={grouped.abstracts} />
        <SectionCard icon={FactCheckRoundedIcon} title="Under Review" items={grouped.underReview} />
      </Stack>
    </Container>
  );
}
