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

const educationData = [
  {
    degree: "PhD in Computer Science and Information System",
    institution: "University of Massachusetts Dartmouth, Dartmouth, MA, USA",
    years: "Jan 2022 – Present (Expected Graduation: May 2026)",
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
      <Typography variant="h5" sx={{ color: "var(--text)", fontWeight: 700 }}>
        {title}
      </Typography>
    </Box>
  );
}

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ color: "var(--text)" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.3 }}>
          About
        </Typography>
        <Typography sx={{ color: "var(--muted)", mt: 1, maxWidth: 860 }}>
          Academic background and selected recognitions.
        </Typography>

        <Stack spacing={3} sx={{ mt: 4 }}>
          {/* Education */}
          <Card sx={cardSx}>
            <CardContent>
              <SectionTitle icon={SchoolIcon} title="Education" />

              <Stack spacing={2}>
                {educationData.map((edu, idx) => (
                  <Box
                    key={`edu-${idx}`}
                    sx={{
                      pl: 2,
                      borderLeft: "2px solid rgba(34, 211, 238, 0.35)",
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, color: "var(--text)" }}>
                      {edu.degree}
                    </Typography>
                    <Typography sx={{ color: "var(--muted)", mt: 0.25 }}>
                      {edu.institution}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(148,163,184,0.85)",
                        mt: 0.5,
                        fontSize: 13,
                        fontFamily:
                          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                      }}
                    >
                      {edu.years}
                    </Typography>
                    {edu.details ? (
                      <Typography sx={{ color: "rgba(148,163,184,0.9)", mt: 0.5 }}>
                        {edu.details}
                      </Typography>
                    ) : null}
                  </Box>
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
                    <Typography sx={{ color: "rgba(226,232,240,0.92)" }}>
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
