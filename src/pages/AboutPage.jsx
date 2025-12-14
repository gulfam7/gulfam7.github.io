// src/pages/AboutPage.jsx  (you can rename this file later if you want)
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const experienceData = [
  {
    role: "Postdoctoral Research Associate",
    institution: "Washington University School of Medicine",
    location: "St. Louis, MO, USA",
    years: "2025 – Present",
    details:
      "Develop AI systems for medical imaging and efficient inference, spanning foundation-model-driven agents, MRI reconstruction and artifact correction, and brain-inspired spiking neural networks.",
  },
  {
    role: "Graduate Research Assistant (GRA)",
    institution: "University of Massachusetts Dartmouth",
    location: "Dartmouth, MA, USA",
    years: "2022 – 2025",
    details:
      "Conduct research in AI and medical imaging, including automated AI agents for MRI workflows and compute-efficient learning/inference. Develop and evaluate deep learning models using Python and modern frameworks.",
  },
];

const educationData = [
  {
    degree: "PhD in Computer Science and Information Systems",
    institution: "University of Massachusetts Dartmouth, Dartmouth, MA, USA",
    years: "Jan 2022 – 2025",
    details: "Dissertation Focus: Leveraging AI for Solving Inverse Problems in MRI",
  },
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "Daffodil International University, Dhaka, Bangladesh",
    years: "2016 – 2019",
    details: "",
  },
];

const awardsData = [
  "Computer & Information Science (CIS) Graduate Research Award – University of Massachusetts Dartmouth (2024)",
  "IEEE EMBC NextGen Scholar Award – 46th IEEE Engineering in Medicine and Biology Conference (EMBC) (2024)",
  "Recipient of Graduate Student Travel Grant (GSTG) – University of Massachusetts Dartmouth (2024)",
  "Scholarship from Daffodil International University for outstanding result in a single semester (2017)",
  "Honorary award from Prothom Alo for HSC examination result (2014)",
];

function SectionTitle({ icon: Icon, title }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2 }}>
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: 2,
          display: "grid",
          placeItems: "center",
          backgroundColor: alpha(theme.palette.primary.main, 0.10),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
        }}
      >
        <Icon sx={{ color: theme.palette.primary.main }} fontSize="small" />
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
        {title}
      </Typography>
    </Box>
  );
}

function TimelineItem({ title, subtitle, meta, details }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box
        sx={{
          position: "relative",
          width: 14,
          flex: "0 0 14px",
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main,
            mt: "6px",
            ml: "2px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 18,
            bottom: 0,
            left: 6,
            width: 2,
            backgroundColor: alpha(theme.palette.text.primary, 0.08),
            borderRadius: 99,
          }}
        />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontWeight: 900, lineHeight: 1.25 }}>
          {title}
        </Typography>

        {subtitle ? (
          <Typography sx={{ color: "text.secondary", mt: 0.35, lineHeight: 1.4 }}>
            {subtitle}
          </Typography>
        ) : null}

        {meta ? (
          <Typography
            sx={{
              mt: 0.65,
              fontSize: 13,
              color: alpha(theme.palette.text.secondary, 0.95),
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            }}
          >
            {meta}
          </Typography>
        ) : null}

        {details ? (
          <Typography sx={{ mt: 1.0, color: "text.secondary", lineHeight: 1.8 }}>
            {details}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

export default function AboutPage() {
  const theme = useTheme();

  const pageSx = {
    py: { xs: 5, md: 7 },
  };

  const headerSx = {
    fontWeight: 950,
    letterSpacing: -0.5,
    lineHeight: 1.08,
  };

  const cardSx = {
    borderRadius: 3,
    border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
    backgroundColor: alpha(theme.palette.background.paper, 0.92),
    backdropFilter: "blur(6px)",
    boxShadow: `0 18px 50px ${alpha("#000", 0.08)}`,
  };

  return (
    <Container maxWidth="lg" sx={pageSx}>
      <Box>
        <Typography variant="h4" sx={headerSx}>
          Profile
        </Typography>
        <Typography sx={{ mt: 1, maxWidth: 920, color: "text.secondary", lineHeight: 1.7 }}>
          Professional experience, academic background, and selected recognitions.
        </Typography>

        <Stack spacing={3} sx={{ mt: 4 }}>
          {/* Work Experience */}
          <Card sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <SectionTitle icon={WorkOutlineIcon} title="Work Experience" />
              <Divider sx={{ mb: 2, borderColor: alpha(theme.palette.text.primary, 0.08) }} />
              <Stack spacing={2.25}>
                {experienceData.map((exp, idx) => (
                  <TimelineItem
                    key={`exp-${idx}`}
                    title={exp.role}
                    subtitle={`${exp.institution}${exp.location ? ` · ${exp.location}` : ""}`}
                    meta={exp.years}
                    details={exp.details}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>

          {/* Education */}
          <Card sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <SectionTitle icon={SchoolIcon} title="Education" />
              <Divider sx={{ mb: 2, borderColor: alpha(theme.palette.text.primary, 0.08) }} />
              <Stack spacing={2.25}>
                {educationData.map((edu, idx) => (
                  <TimelineItem
                    key={`edu-${idx}`}
                    title={edu.degree}
                    subtitle={edu.institution}
                    meta={edu.years}
                    details={edu.details}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>

          {/* Awards */}
          <Card sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <SectionTitle icon={EmojiEventsIcon} title="Awards & Honors" />
              <Divider sx={{ mb: 2, borderColor: alpha(theme.palette.text.primary, 0.08) }} />
              <Stack spacing={1.25}>
                {awardsData.map((award, idx) => (
                  <Typography key={`award-${idx}`} sx={{ color: "text.secondary", lineHeight: 1.75 }}>
                    • {award}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
