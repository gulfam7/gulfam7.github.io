// src/pages/AboutPage.jsx
import React from "react";
import { Box, Typography, Card, CardContent, Stack, Divider, Grid } from "@mui/material";
import { alpha } from "@mui/material/styles";

import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { C, MONO } from "../theme";

const experienceData = [
  {
    role: "Postdoctoral Research Associate",
    institution: "Washington University School of Medicine",
    location: "St. Louis, MO, USA",
    years: "January 2026 – Present",
    details:
      "Develop AI systems for medical imaging and efficient inference, spanning foundation-model-driven agents, MRI reconstruction and artifact correction, and brain-inspired spiking neural networks.",
    current: true,
  },
  {
    role: "Graduate Research Assistant (GRA)",
    institution: "University of Massachusetts Dartmouth",
    location: "Dartmouth, MA, USA",
    years: "January 2022 – December 2025",
    details:
      "Conducted research in AI and medical imaging, including automated AI agents for MRI workflows and compute-efficient learning/inference. Developed and evaluated deep learning models using Python and modern frameworks.",
  },
];

const educationData = [
  {
    degree: "PhD in Computer Science and Information Systems",
    institution: "University of Massachusetts Dartmouth, Dartmouth, MA, USA",
    years: "January 2022 – December 2025",
    details: "Dissertation focus: Leveraging AI for Solving Inverse Problems in MRI",
  },
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "Daffodil International University, Dhaka, Bangladesh",
    years: "January 2016 – December 2019",
    details: "",
  },
];

const awardsData = [
  {
    title: "Computer & Information Science (CIS) Graduate Research Award",
    org: "University of Massachusetts Dartmouth",
    year: "2024",
  },
  {
    title: "IEEE EMBC NextGen Scholar Award",
    org: "46th IEEE Engineering in Medicine and Biology Conference (EMBC)",
    year: "2024",
  },
  {
    title: "Graduate Student Travel Grant (GSTG)",
    org: "University of Massachusetts Dartmouth",
    year: "2024",
  },
  {
    title: "Scholarship for outstanding result in a single semester",
    org: "Daffodil International University",
    year: "2017",
  },
  {
    title: "Honorary award for HSC examination result",
    org: "Prothom Alo",
    year: "2014",
  },
];

function SectionTitle({ icon: Icon, title, accent }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: 2,
          display: "grid",
          placeItems: "center",
          flex: "0 0 auto",
          background: `linear-gradient(145deg, ${alpha(accent, 0.2)}, ${alpha(accent, 0.05)})`,
          border: `1px solid ${alpha(accent, 0.28)}`,
        }}
      >
        <Icon sx={{ color: accent }} fontSize="small" />
      </Box>
      <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: "-0.02em", fontSize: "1.3rem" }}>
        {title}
      </Typography>
    </Box>
  );
}

function TimelineItem({ title, subtitle, meta, details, accent, isLast, current }) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box sx={{ position: "relative", width: 14, flex: "0 0 14px" }}>
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: accent,
            mt: "7px",
            ml: "2px",
            boxShadow: current ? `0 0 0 4px ${alpha(accent, 0.18)}` : "none",
            animation: current ? "pulseDot 2.4s ease-in-out infinite" : "none",
            "@keyframes pulseDot": {
              "0%, 100%": { boxShadow: `0 0 0 3px ${alpha(accent, 0.16)}` },
              "50%": { boxShadow: `0 0 0 6px ${alpha(accent, 0.06)}` },
            },
          }}
        />
        {!isLast && (
          <Box
            sx={{
              position: "absolute",
              top: 20,
              bottom: -4,
              left: 6,
              width: 2,
              background: `linear-gradient(180deg, ${alpha(accent, 0.4)}, ${alpha(C.textPrimary, 0.06)})`,
              borderRadius: 99,
            }}
          />
        )}
      </Box>

      <Box sx={{ minWidth: 0, pb: isLast ? 0 : 2.5 }}>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <Typography sx={{ fontWeight: 800, lineHeight: 1.3 }}>{title}</Typography>
          {current ? (
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: 1,
                color: C.green,
                border: `1px solid ${alpha(C.green, 0.35)}`,
                bgcolor: alpha(C.green, 0.1),
                px: 0.75,
                py: 0.1,
                borderRadius: 0.75,
              }}
            >
              CURRENT
            </Typography>
          ) : null}
        </Stack>

        {subtitle ? (
          <Typography sx={{ color: C.textSecondary, mt: 0.35, lineHeight: 1.5, fontSize: "0.94rem" }}>
            {subtitle}
          </Typography>
        ) : null}

        {meta ? (
          <Typography sx={{ mt: 0.6, fontSize: 12, color: C.textMuted, fontFamily: MONO }}>
            {meta}
          </Typography>
        ) : null}

        {details ? (
          <Typography sx={{ mt: 1, color: C.textSecondary, lineHeight: 1.8, fontSize: "0.92rem" }}>
            {details}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

const cardSx = {
  borderRadius: 3,
  border: `1px solid ${C.border}`,
  backgroundColor: alpha(C.surface, 0.85),
  backdropFilter: "blur(6px)",
  height: "100%",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Profile"
      title="Experience, education & recognition"
      intro="Professional experience, academic background, and selected awards."
      accent={C.accent}
    >
      <Stack spacing={3}>
        <Reveal>
          <Card sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <SectionTitle icon={WorkOutlineIcon} title="Work Experience" accent={C.accent} />
              <Divider sx={{ mb: 2.5, borderColor: C.border }} />
              <Stack spacing={0}>
                {experienceData.map((exp, idx) => (
                  <TimelineItem
                    key={`exp-${idx}`}
                    title={exp.role}
                    subtitle={`${exp.institution}${exp.location ? ` · ${exp.location}` : ""}`}
                    meta={exp.years}
                    details={exp.details}
                    accent={C.accent}
                    current={exp.current}
                    isLast={idx === experienceData.length - 1}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Reveal>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={60}>
              <Card sx={cardSx}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <SectionTitle icon={SchoolIcon} title="Education" accent={C.func} />
                  <Divider sx={{ mb: 2.5, borderColor: C.border }} />
                  <Stack spacing={0}>
                    {educationData.map((edu, idx) => (
                      <TimelineItem
                        key={`edu-${idx}`}
                        title={edu.degree}
                        subtitle={edu.institution}
                        meta={edu.years}
                        details={edu.details}
                        accent={C.func}
                        isLast={idx === educationData.length - 1}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={120}>
              <Card sx={cardSx}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <SectionTitle icon={EmojiEventsIcon} title="Awards & Honors" accent={C.variable} />
                  <Divider sx={{ mb: 2.5, borderColor: C.border }} />
                  <Stack spacing={1.75}>
                    {awardsData.map((award, idx) => (
                      <Box key={`award-${idx}`} sx={{ display: "flex", gap: 1.5 }}>
                        <Typography
                          sx={{
                            fontFamily: MONO,
                            fontSize: 11.5,
                            fontWeight: 700,
                            color: C.variable,
                            flex: "0 0 34px",
                            pt: 0.3,
                          }}
                        >
                          {award.year}
                        </Typography>
                        <Box sx={{ minWidth: 0 }}>
                          <Typography sx={{ fontWeight: 650, lineHeight: 1.45, fontSize: "0.93rem" }}>
                            {award.title}
                          </Typography>
                          <Typography sx={{ color: C.textMuted, fontSize: "0.84rem", mt: 0.2 }}>
                            {award.org}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>
        </Grid>
      </Stack>
    </PageShell>
  );
}
