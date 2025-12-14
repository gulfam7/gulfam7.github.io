// src/pages/ActivitiesPage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import RateReviewIcon from "@mui/icons-material/RateReview";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";

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
    <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
      <Box component="span" sx={{ fontWeight: 800, color: "text.primary" }}>
        {role}
      </Box>
      <Box component="span" sx={{ color: "text.secondary" }}>
        {details}
      </Box>
    </Typography>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  const ACCENT = "#22d3ee";

  return (
    <Box sx={{ mb: 2 }}>
      <Stack direction="row" spacing={1.25} alignItems="center">
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: 2,
            display: "grid",
            placeItems: "center",
            background: alpha(ACCENT, 0.10),
            border: `1px solid ${alpha(ACCENT, 0.22)}`,
          }}
        >
          <Icon sx={{ color: ACCENT }} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
            {title}
          </Typography>
          {subtitle ? (
            <Typography sx={{ color: "text.secondary", mt: 0.25 }}>{subtitle}</Typography>
          ) : null}
        </Box>
      </Stack>
    </Box>
  );
}

function BulletList({ items }) {
  const ACCENT = "#22d3ee";

  return (
    <Stack spacing={1.05}>
      {items.map((x, i) => (
        <Box key={i} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
          <Box
            sx={{
              mt: "0.55rem",
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: alpha(ACCENT, 0.9),
              boxShadow: `0 0 0 4px ${alpha(ACCENT, 0.10)}`,
              flex: "0 0 auto",
            }}
          />
          <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>{x}</Typography>
        </Box>
      ))}
    </Stack>
  );
}

export default function ActivitiesPage() {
  const theme = useTheme();
  const ACCENT = "#22d3ee";

  // Modern, non-dark “border”: gradient border + soft shadow
  const cardSx = {
    height: "100%",
    borderRadius: 3,
    border: "1px solid transparent",
    background: `
      linear-gradient(${alpha("#ffffff", 0.96)}, ${alpha("#ffffff", 0.96)}) padding-box,
      linear-gradient(135deg, ${alpha(ACCENT, 0.28)}, ${alpha("#0b1220", 0.10)}) border-box
    `,
    boxShadow: `0 12px 34px ${alpha("#0b1220", 0.10)}`,
    transition: "transform 220ms ease, box-shadow 220ms ease, background 220ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: `0 18px 55px ${alpha("#0b1220", 0.14)}`,
      background: `
        linear-gradient(${alpha("#ffffff", 0.98)}, ${alpha("#ffffff", 0.98)}) padding-box,
        linear-gradient(135deg, ${alpha(ACCENT, 0.40)}, ${alpha("#0b1220", 0.10)}) border-box
      `,
    },
  };

  const lightDivider = { borderColor: alpha("#0b1220", 0.08) };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ mb: 3.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -0.4 }}>
          Professional Activities
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 900, lineHeight: 1.75 }}>
          Peer review, teaching and mentoring, and professional affiliations.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Peer Review */}
        <Grid item xs={12}>
          <Card sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <SectionTitle icon={RateReviewIcon} title="Peer Review" />
              <Divider sx={{ ...lightDivider, mb: 2.5 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ fontWeight: 900, mb: 1, letterSpacing: -0.1 }}>
                    Journals
                  </Typography>

                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {peerReviewData.journals.map((j) => (
                      <Chip
                        key={j}
                        label={j}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: alpha(ACCENT, 0.22),
                          backgroundColor: alpha(ACCENT, 0.05),
                          "&:hover": { backgroundColor: alpha(ACCENT, 0.09) },
                        }}
                      />
                    ))}
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography sx={{ fontWeight: 900, mb: 1, letterSpacing: -0.1 }}>
                    Conferences
                  </Typography>
                  <BulletList items={peerReviewData.conferences} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Teaching & Mentoring */}
        <Grid item xs={12} md={6}>
          <Card sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <SectionTitle icon={SchoolIcon} title="Teaching & Mentoring" />
              <Divider sx={{ ...lightDivider, mb: 2.25 }} />
              <Stack spacing={1.25}>
                {teachingMentoringData.map((t, i) => (
                  <SplitFirstComma key={`teach-${i}`} text={t} />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Affiliations */}
        <Grid item xs={12} md={6}>
          <Card sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <SectionTitle icon={GroupIcon} title="Affiliations & Service" />
              <Divider sx={{ ...lightDivider, mb: 2.25 }} />
              <Stack spacing={1.25}>
                {affiliationsData.map((a, i) => (
                  <SplitFirstComma key={`aff-${i}`} text={a} />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
