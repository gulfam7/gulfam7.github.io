// src/pages/AboutPage.jsx
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
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const experienceData = [
  {
    role: "Postdoctoral Research Associate",
    institution: "Washington University School of Medicine",
    location: "St. Louis, MO, USA",
    years: "January 2026 – Present",
    details:
      "Develop AI systems for medical imaging and efficient inference, spanning foundation-model-driven agents, and MRI reconstruction and artifact correction.",
  },
  {
    role: "Graduate Research Assistant (GRA)",
    institution: "University of Massachusetts Dartmouth",
    location: "Dartmouth, MA, USA",
    years: "January 2022 – December 2025",
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

const cardSx = {
  backgroundColor: "var(--panel)",
  border: "1px solid var(--panel-border)",
  borderRadius: "16px",
  boxShadow: "var(--shadow)",
  backdropFilter: "blur(10px)",
};

function SectionTitle({ icon: Icon, title }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2 }}>
      <Icon sx={{ color: "var(--accent)" }} />
      <Typography variant="h5" sx={{ color: "var(--text)", fontWeight: 800 }}>
        {title}
      </Typography>
    </Box>
  );
}

function TimelineItem({ title, subtitle, meta, details }) {
  return (
    <Box sx={{ pl: 2, borderLeft: "2px solid rgba(34, 211, 238, 0.35)" }}>
      <Typography sx={{ fontWeight: 900, color: "var(--text)", lineHeight: 1.25 }}>
        {title}
      </Typography>

      {subtitle ? (
        <Typography sx={{ color: "var(--muted)", mt: 0.4, lineHeight: 1.4 }}>
          {subtitle}
        </Typography>
      ) : null}

      {meta ? (
        <Typography
          sx={{
            color: "rgba(148,163,184,0.85)",
            mt: 0.6,
            fontSize: 13,
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          {meta}
        </Typography>
      ) : null}

      {details ? (
        <Typography sx={{ color: "rgba(148,163,184,0.92)", mt: 0.9, lineHeight: 1.75 }}>
          {details}
        </Typography>
      ) : null}
    </Box>
  );
}

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ color: "var(--text)" }}>
        <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -0.4 }}>
          Profile
        </Typography>
        <Typography sx={{ color: "var(--muted)", mt: 1, maxWidth: 920, lineHeight: 1.7 }}>
          Professional experience, academic background, and selected recognitions.
        </Typography>

        <Stack spacing={3} sx={{ mt: 4 }}>
          {/* Work Experience */}
          <Card sx={cardSx}>
            <CardContent>
              <SectionTitle icon={WorkOutlineIcon} title="Work Experience" />
              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

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
            <CardContent>
              <SectionTitle icon={SchoolIcon} title="Education" />
              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

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
            <CardContent>
              <SectionTitle icon={EmojiEventsIcon} title="Awards & Honors" />
              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

              <Stack spacing={1.25}>
                {awardsData.map((award, idx) => (
                  <Box key={`award-${idx}`} sx={{ display: "flex", gap: 1.25 }}>
                    <Box
                      sx={{
                        mt: "0.55rem",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--accent)",
                        flex: "0 0 auto",
                        opacity: 0.85,
                      }}
                    />
                    <Typography sx={{ color: "rgba(226,232,240,0.92)", lineHeight: 1.7 }}>
                      {award}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
