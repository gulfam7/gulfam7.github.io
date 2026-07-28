// src/pages/ActivitiesPage.jsx
import React from "react";
import { Box, Typography, Grid, Stack, Chip } from "@mui/material";
import { alpha } from "@mui/material/styles";

import RateReviewIcon from "@mui/icons-material/RateReview";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { C, MONO } from "../theme";

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

function SplitFirstComma({ text }) {
  const commaIndex = text.indexOf(",");
  const role = commaIndex === -1 ? text : text.slice(0, commaIndex);
  const details = commaIndex === -1 ? "" : text.slice(commaIndex);

  return (
    <Typography sx={{ color: alpha(C.textPrimary, 0.88), lineHeight: 1.72, fontSize: "0.92rem" }}>
      <Box component="span" sx={{ fontWeight: 700, color: "#f0f3f6" }}>
        {role}
      </Box>
      <Box component="span" sx={{ color: C.comment, fontWeight: 400 }}>
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
          width: 46,
          height: 46,
          borderRadius: 2.5,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
          background: `linear-gradient(145deg, ${alpha(accent, 0.22)}, ${alpha(accent, 0.06)})`,
          border: `1px solid ${alpha(accent, 0.3)}`,
          boxShadow: `0 10px 28px -14px ${alpha(accent, 0.55)}`,
        }}
      >
        <Icon sx={{ color: accent, fontSize: 23 }} />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 800, fontSize: { xs: "1.15rem", md: "1.3rem" }, letterSpacing: "-0.025em" }}
        >
          {title}
        </Typography>
        {subtitle ? (
          <Typography sx={{ color: C.comment, mt: 0.4, fontSize: "0.88rem", lineHeight: 1.55 }}>
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
            boxShadow: `0 0 0 4px ${alpha(accent, 0.18)}`,
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
        background: alpha(C.surface, 0.55),
        border: `1px solid ${C.border}`,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

const panelLabel = {
  fontFamily: MONO,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 2,
  color: C.comment,
  textTransform: "uppercase",
  mb: 1.75,
};

export default function ActivitiesPage() {
  return (
    <PageShell
      eyebrow="Service & community"
      title="Professional Activities"
      intro="Peer review, teaching and mentoring, and professional affiliations."
      accent={C.accent}
      grid
    >
      <Grid container spacing={2.5}>
        {/* Peer review — hero panel */}
        <Grid size={{ xs: 12 }}>
          <Reveal>
            <Box
              sx={{
                borderRadius: 4,
                p: { xs: 2.5, md: 3.25 },
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(135deg, ${alpha(C.surface, 0.92)} 0%, ${alpha(C.bg, 0.88)} 100%)`,
                border: `1px solid ${C.border}`,
                boxShadow: `0 24px 64px -32px rgba(0,0,0,0.65), inset 0 1px 0 ${alpha("#fff", 0.04)}`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${C.accent}, ${C.violet}, ${alpha(C.cyan, 0.9)})`,
                },
              }}
            >
              <SectionHeader
                icon={RateReviewIcon}
                title="Peer Review"
                subtitle="Journals and conferences where I have served as a reviewer."
                accent={C.accent}
              />

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, md: 7 }}>
                  <GlassPanel>
                    <Typography sx={panelLabel}>Journals</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {peerReviewData.journals.map((j) => (
                        <Chip
                          key={j}
                          label={j}
                          sx={{
                            borderRadius: 2,
                            fontWeight: 600,
                            fontSize: 12.5,
                            height: "auto",
                            py: 1,
                            px: 0.25,
                            lineHeight: 1.35,
                            bgcolor: alpha(C.accent, 0.08),
                            border: `1px solid ${alpha(C.accent, 0.22)}`,
                            color: alpha(C.textPrimary, 0.95),
                            transition: "all 0.18s ease",
                            "&:hover": {
                              bgcolor: alpha(C.accent, 0.14),
                              borderColor: alpha(C.accent, 0.4),
                              transform: "translateY(-1px)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </GlassPanel>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                  <GlassPanel sx={{ height: "100%" }}>
                    <Typography sx={panelLabel}>Conferences</Typography>
                    <Stack spacing={0}>
                      {peerReviewData.conferences.map((c, i) => (
                        <TimelineItem
                          key={c}
                          accent={C.violet}
                          isLast={i === peerReviewData.conferences.length - 1}
                        >
                          <Stack direction="row" alignItems="flex-start" spacing={1}>
                            <ArrowForwardIosRoundedIcon
                              sx={{ fontSize: 12, color: alpha(C.violet, 0.75), mt: 0.6, flexShrink: 0 }}
                            />
                            <Typography
                              sx={{ color: alpha(C.textPrimary, 0.9), lineHeight: 1.7, fontSize: "0.92rem" }}
                            >
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
          </Reveal>
        </Grid>

        {/* Teaching */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Reveal delay={70}>
            <Box
              sx={{
                height: "100%",
                borderRadius: 4,
                p: { xs: 2.5, md: 3 },
                background: `linear-gradient(160deg, ${alpha(C.surface, 0.75)} 0%, ${alpha(C.bg, 0.55)} 100%)`,
                border: `1px solid ${C.border}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  borderColor: alpha(C.violet, 0.35),
                  boxShadow: `0 20px 48px -28px ${alpha(C.violet, 0.25)}`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <SectionHeader
                icon={SchoolIcon}
                title="Teaching & Mentoring"
                subtitle="Roles supporting students and trainees."
                accent={C.violet}
              />
              <Stack spacing={0}>
                {teachingMentoringData.map((t, i) => (
                  <TimelineItem
                    key={`teach-${i}`}
                    accent={C.violet}
                    isLast={i === teachingMentoringData.length - 1}
                  >
                    <SplitFirstComma text={t} />
                  </TimelineItem>
                ))}
              </Stack>
            </Box>
          </Reveal>
        </Grid>

        {/* Affiliations */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Reveal delay={140}>
            <Box
              sx={{
                height: "100%",
                borderRadius: 4,
                p: { xs: 2.5, md: 3 },
                background: `linear-gradient(200deg, ${alpha(C.surface, 0.75)} 0%, ${alpha(C.bg, 0.55)} 100%)`,
                border: `1px solid ${C.border}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  borderColor: alpha(C.cyan, 0.35),
                  boxShadow: `0 20px 48px -28px ${alpha(C.cyan, 0.2)}`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <SectionHeader
                icon={GroupIcon}
                title="Affiliations & Service"
                subtitle="Societies, membership, and committee work."
                accent={C.cyan}
              />
              <Stack spacing={0}>
                {affiliationsData.map((a, i) => (
                  <TimelineItem
                    key={`aff-${i}`}
                    accent={C.cyan}
                    isLast={i === affiliationsData.length - 1}
                  >
                    <SplitFirstComma text={a} />
                  </TimelineItem>
                ))}
              </Stack>
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </PageShell>
  );
}
