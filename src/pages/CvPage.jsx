// src/pages/CvPage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

import cvPath from "../components/Gulfam_CV_updated.pdf";

export default function CvPage() {
  const ACCENT = "#22d3ee";

  const cardSx = {
    borderRadius: 3,
    border: "1px solid transparent",
    background: `
      linear-gradient(${alpha("#ffffff", 0.96)}, ${alpha("#ffffff", 0.96)}) padding-box,
      linear-gradient(135deg, ${alpha(ACCENT, 0.28)}, ${alpha("#0b1220", 0.10)}) border-box
    `,
    boxShadow: `0 12px 34px ${alpha("#0b1220", 0.10)}`,
    transition: "transform 220ms ease, box-shadow 220ms ease, background 220ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: `0 18px 55px ${alpha("#0b1220", 0.14)}`,
      background: `
        linear-gradient(${alpha("#ffffff", 0.98)}, ${alpha("#ffffff", 0.98)}) padding-box,
        linear-gradient(135deg, ${alpha(ACCENT, 0.40)}, ${alpha("#0b1220", 0.10)}) border-box
      `,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ mb: 3.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -0.4 }}>
          Curriculum Vitae
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 860, lineHeight: 1.75 }}>
          View or download the most recent CV.
        </Typography>
      </Box>

      <Card sx={cardSx}>
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          {/* Header */}
          <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 2 }}>
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
              <DescriptionRoundedIcon sx={{ color: ACCENT }} />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
                PDF
              </Typography>
              <Typography sx={{ color: "text.secondary", mt: 0.25 }}>
                Download for offline use or open in a new tab.
              </Typography>
            </Box>
          </Stack>

          {/* Actions */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mb: 2.25 }}>
            <Button
              variant="contained"
              startIcon={<DownloadRoundedIcon />}
              href={cvPath}
              download
              sx={{
                borderRadius: 999,
                px: 2.25,
                py: 1.05,
                fontWeight: 900,
                backgroundColor: alpha(ACCENT, 0.9),
                color: "#081018",
                "&:hover": { backgroundColor: ACCENT },
              }}
            >
              Download (PDF)
            </Button>

            <Button
              variant="outlined"
              endIcon={<OpenInNewRoundedIcon />}
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: 999,
                px: 2.25,
                py: 1.05,
                fontWeight: 900,
                textTransform: "none",
                borderColor: alpha("#0b1220", 0.12),
                color: "text.primary",
                backgroundColor: alpha("#ffffff", 0.65),
                "&:hover": {
                  backgroundColor: alpha("#ffffff", 0.95),
                  borderColor: alpha(ACCENT, 0.40),
                },
              }}
            >
              Open in New Tab
            </Button>
          </Stack>

          <Divider sx={{ borderColor: alpha("#0b1220", 0.08), mb: 2.25 }} />

          {/* Inline preview */}
          <Box
            component="iframe"
            title="CV Preview"
            src={cvPath}
            sx={{
              width: "100%",
              height: { xs: 520, md: 820 },
              border: `1px solid ${alpha("#0b1220", 0.10)}`,
              borderRadius: 2.5,
              backgroundColor: alpha("#ffffff", 0.65),
            }}
          />
        </CardContent>
      </Card>
    </Container>
  );
}
