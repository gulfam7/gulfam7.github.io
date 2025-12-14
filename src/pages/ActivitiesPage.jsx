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
} from "@mui/material";
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
  "Abstract Committee Member, International Society for Magnetic Resonance in Medicine (ISMRM) / International Society for MR Radiographers & Technologists (ISMRT) Section, 2025 Annual Meeting",
  "Member, IEEE (Institute of Electrical and Electronics Engineers)",
  "Member, ISMRM (International Society for Magnetic Resonance in Medicine)",
  "Member, Medical Image Computing and Computer-Assisted Intervention (MICCAI) Society",
  "Member, IEEE Engineering in Medicine and Biology Society (EMBS)",
];

const cardSx = {
  backgroundColor: "var(--panel)",
  border: "1px solid var(--panel-border)",
  borderRadius: "16px",
  boxShadow: "var(--shadow)",
  backdropFilter: "blur(10px)",
};

function CardHeader({ icon: Icon, title, subtitle }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
        <Icon sx={{ color: "var(--accent)" }} />
        <Typography variant="h5" sx={{ fontWeight: 800, color: "var(--text)" }}>
          {title}
        </Typography>
      </Box>
      {subtitle ? (
        <Typography sx={{ color: "var(--muted)", mt: 0.5 }}>{subtitle}</Typography>
      ) : null}
    </Box>
  );
}

function SplitFirstComma({ text }) {
  const commaIndex = text.indexOf(",");
  const role = commaIndex === -1 ? text : text.slice(0, commaIndex);
  const details = commaIndex === -1 ? "" : text.slice(commaIndex);

  return (
    <Typography sx={{ color: "rgba(226,232,240,0.92)" }}>
      <Box component="span" sx={{ fontWeight: 800, color: "var(--text)" }}>
        {role}
      </Box>
      <Box component="span" sx={{ color: "rgba(148,163,184,0.95)" }}>
        {details}
      </Box>
    </Typography>
  );
}

function BulletList({ items }) {
  return (
    <Stack spacing={1.1}>
      {items.map((x, i) => (
        <Box key={i} sx={{ display: "flex", gap: 1.25 }}>
          <Box
            sx={{
              mt: "0.55rem",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              opacity: 0.85,
              flex: "0 0 auto",
            }}
          />
          <Typography sx={{ color: "rgba(226,232,240,0.92)" }}>{x}</Typography>
        </Box>
      ))}
    </Stack>
  );
}

export default function ActivitiesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ color: "var(--text)" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.3 }}>
          Professional Activities
        </Typography>
        <Typography sx={{ color: "var(--muted)", mt: 1, maxWidth: 900 }}>
          Peer review, teaching and mentoring, and professional affiliations.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {/* Peer Review */}
          <Grid item xs={12}>
            <Card sx={cardSx}>
              <CardContent>
                <CardHeader icon={RateReviewIcon} title="Peer Review" />
                <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

                <Grid container spacing={2.5}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 800, color: "var(--text)", mb: 1 }}>
                      Journals
                    </Typography>
                    <BulletList items={peerReviewData.journals} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 800, color: "var(--text)", mb: 1 }}>
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
              <CardContent>
                <CardHeader icon={SchoolIcon} title="Teaching & Mentoring" />
                <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />
                <Stack spacing={1.2}>
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
              <CardContent>
                <CardHeader icon={GroupIcon} title="Affiliations & Service" />
                <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />
                <Stack spacing={1.2}>
                  {affiliationsData.map((a, i) => (
                    <SplitFirstComma key={`aff-${i}`} text={a} />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
