// src/pages/ActivitiesPage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import RateReviewIcon from "@mui/icons-material/RateReview";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const peerReviewData = {
  journals: [
    "Medical Image Analysis",
    "Physics in Medicine and Biology",
    "Computational and Structural Biotechnology Journal",
    "Magnetic Resonance Imaging",
    "Physica Scripta",
    "Signal, Image and Video Processing",
    "Engineering Research Express",
    "Meta-Radiology",
  ],
  conferences: [
    "Medical Image Computing and Computer-Assisted Intervention (MICCAI), 2024, 2025",
    "IEEE International Symposium on Biomedical Imaging (ISBI) 2024",
  ],
};

const teachingMentoringData = [
  "Research Mentor, NSF Research Experiences for Undergraduates (REU), UMass Dartmouth, Summer 2023",
  "Graduate Mentor, Computer and Information Science (CIS) Department, UMass Dartmouth (Fall 2024)",
  "Instructor, International English Language Testing System (IELTS), 2021",
];

const affiliationsData = [
  "Abstract Committee Member, ISMRM / ISMRT Section, 2025 Annual Meeting",
  "Member, IEEE (Institute of Electrical and Electronics Engineers)",
  "Member, ISMRM (International Society for Magnetic Resonance in Medicine)",
  "Member, MICCAI Society",
  "Member, IEEE Engineering in Medicine and Biology Society (EMBS)",
];

const BG = "#0a0e14";
const ACCENT = "#58a6ff";
const VIOLET = "#a371f7";
const MUTED = "#8b949e";
const BORDER = "rgba(48, 54, 61, 0.85)";

function SplitFirstComma({ text }) {
  const commaIndex = text.indexOf(",");
  const role = commaIndex === -1 ? text : text.slice(0, commaIndex);
  const details = commaIndex === -1 ? "" : text.slice(commaIndex);

  return (
    <Typography sx={{ color: alpha("#e6edf3", 0.88), lineHeight: 1.72, fontSize: "0.92rem" }}>
      <Box component="span" sx={{ fontWeight: 750, color: "#f0f3f6" }}>
        {role}
      </Box>
      <Box component="span" sx={{ color: MUTED, fontWeight: 450 }}>
        {details}
      </Box>
    </Typography>
  );
}

function SectionHeader({ icon: Icon, title, subtitle, accent }) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 2.5 }}>
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2.5,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
          background: `linear-gradient(145deg, ${alpha(accent, 0.22)}, ${alpha(accent, 0.06)})`,
          border: `1px solid ${alpha(accent, 0.3)}`,
          boxShadow: `0 10px 28px -14px ${alpha(accent, 0.55)}`,
        }}
      >
        <Icon sx={{ color: accent, fontSize: 24 }} />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.2rem", md: "1.35rem" }, letterSpacing: "-0.03em" }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography sx={{ color: MUTED, mt: 0.4, fontSize: "0.9rem", lineHeight: 1.55 }}>
            {subtitle}
          </Typography>
        ) : null}
      </Box>
    </Stack>
  );
}

function TimelineItem({ children, accent, isLast }) {
  return (
    <Box sx={{ display: "flex", gap: 2, position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 14,
          flexShrink: 0,
          pt: 0.35,
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: accent,
            boxShadow: `0 0 0 4px ${alpha(accent, 0.18)}, 0 0 20px -4px ${alpha(accent, 0.6)}`,
          }}
        />
        {!isLast ? (
          <Box
            sx={{
              width: 2,
              flex: 1,
              minHeight: 16,
              mt: 0.75,
              borderRadius: 1,
              background: `linear-gradient(180deg, ${alpha(accent, 0.45)}, transparent)`,
            }}
          />
        ) : null}
      </Box>
      <Box sx={{ pb: isLast ? 0 : 2, flex: 1, minWidth: 0 }}>{children}</Box>
    </Box>
  );
}

function GlassPanel({ children, sx = {} }) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        p: { xs: 2.25, md: 2.75 },
        background: "rgba(22, 27, 34, 0.55)",
        border: `1px solid ${BORDER}`,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default function ActivitiesPage() {
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
            radial-gradient(ellipse 70% 50% at 8% 0%, ${alpha(ACCENT, 0.12)}, transparent 52%),
            radial-gradient(ellipse 55% 40% at 100% 15%, ${alpha(VIOLET, 0.11)}, transparent 48%),
            radial-gradient(ellipse 45% 30% at 40% 100%, ${alpha("#39d0d8", 0.07)}, transparent 50%)
          `,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.3,
          backgroundImage: `linear-gradient(${alpha("#fff", 0.028)} 1px, transparent 1px),
            linear-gradient(90deg, ${alpha("#fff", 0.028)} 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

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
            Service & community
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
            Professional Activities
          </Typography>
          <Typography sx={{ color: MUTED, maxWidth: 600, lineHeight: 1.75, fontSize: "1.02rem" }}>
            Peer review, teaching and mentoring, and professional affiliations.
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {/* Peer review — bento hero */}
          <Grid item xs={12}>
            <Box
              sx={{
                borderRadius: 4,
                p: { xs: 2.5, md: 3.25 },
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(135deg, ${alpha("#161b22", 0.92)} 0%, ${alpha("#0d1117", 0.88)} 100%)`,
                border: `1px solid ${BORDER}`,
                boxShadow: `0 24px 64px -32px rgba(0,0,0,0.65), inset 0 1px 0 ${alpha("#fff", 0.04)}`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${ACCENT}, ${VIOLET}, ${alpha("#39d0d8", 0.9)})`,
                  opacity: 0.95,
                },
              }}
            >
              <SectionHeader
                icon={RateReviewIcon}
                title="Peer Review"
                subtitle="Journals and conferences where I have served as a reviewer."
                accent={ACCENT}
              />

              <Grid container spacing={2.5}>
                <Grid item xs={12} md={7}>
                  <GlassPanel>
                    <Typography
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 2,
                        color: MUTED,
                        textTransform: "uppercase",
                        mb: 1.75,
                      }}
                    >
                      Journals
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {peerReviewData.journals.map((j) => (
                        <Chip
                          key={j}
                          label={j}
                          size="medium"
                          sx={{
                            borderRadius: 2,
                            fontWeight: 600,
                            fontSize: 12.5,
                            height: "auto",
                            py: 1,
                            px: 0.25,
                            lineHeight: 1.35,
                            bgcolor: alpha(ACCENT, 0.08),
                            border: `1px solid ${alpha(ACCENT, 0.22)}`,
                            color: alpha("#e6edf3", 0.95),
                            transition: "all 0.18s ease",
                            "&:hover": {
                              bgcolor: alpha(ACCENT, 0.14),
                              borderColor: alpha(ACCENT, 0.4),
                              transform: "translateY(-1px)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </GlassPanel>
                </Grid>
                <Grid item xs={12} md={5}>
                  <GlassPanel sx={{ height: "100%" }}>
                    <Typography
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 2,
                        color: MUTED,
                        textTransform: "uppercase",
                        mb: 1.75,
                      }}
                    >
                      Conferences
                    </Typography>
                    <Stack spacing={0}>
                      {peerReviewData.conferences.map((c, i) => (
                        <TimelineItem key={c} accent={VIOLET} isLast={i === peerReviewData.conferences.length - 1}>
                          <Stack direction="row" alignItems="flex-start" spacing={1}>
                            <ArrowForwardIosRoundedIcon
                              sx={{ fontSize: 12, color: alpha(VIOLET, 0.75), mt: 0.6, flexShrink: 0 }}
                            />
                            <Typography sx={{ color: alpha("#e6edf3", 0.9), lineHeight: 1.7, fontSize: "0.92rem" }}>
                              {c}
                            </Typography>
                          </Stack>
                        </TimelineItem>
                      ))}
                    </Stack>
                  </GlassPanel>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Teaching */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                borderRadius: 4,
                p: { xs: 2.5, md: 3 },
                background: `linear-gradient(160deg, ${alpha("#161b22", 0.75)} 0%, ${alpha("#0d1117", 0.55)} 100%)`,
                border: `1px solid ${BORDER}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  borderColor: alpha(VIOLET, 0.35),
                  boxShadow: `0 20px 48px -28px ${alpha(VIOLET, 0.25)}`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <SectionHeader
                icon={SchoolIcon}
                title="Teaching & Mentoring"
                subtitle="Roles supporting students and trainees."
                accent={VIOLET}
              />
              <Stack spacing={0}>
                {teachingMentoringData.map((t, i) => (
                  <TimelineItem
                    key={`teach-${i}`}
                    accent={VIOLET}
                    isLast={i === teachingMentoringData.length - 1}
                  >
                    <SplitFirstComma text={t} />
                  </TimelineItem>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Affiliations */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                borderRadius: 4,
                p: { xs: 2.5, md: 3 },
                background: `linear-gradient(200deg, ${alpha("#161b22", 0.75)} 0%, ${alpha("#0d1117", 0.55)} 100%)`,
                border: `1px solid ${BORDER}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  borderColor: alpha("#39d0d8", 0.35),
                  boxShadow: `0 20px 48px -28px ${alpha("#39d0d8", 0.2)}`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <SectionHeader
                icon={GroupIcon}
                title="Affiliations & Service"
                subtitle="Societies, membership, and committee work."
                accent="#39d0d8"
              />
              <Stack spacing={0}>
                {affiliationsData.map((a, i) => (
                  <TimelineItem
                    key={`aff-${i}`}
                    accent="#39d0d8"
                    isLast={i === affiliationsData.length - 1}
                  >
                    <SplitFirstComma text={a} />
                  </TimelineItem>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
