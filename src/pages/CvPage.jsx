// src/pages/CvPage.jsx
import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack, Divider } from "@mui/material";
import { alpha } from "@mui/material/styles";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

import PageShell from "../components/PageShell";
import { C, MONO } from "../theme";
import cvPath from "../components/Gulfam_CV_updated.pdf";

export default function CvPage() {
  return (
    <PageShell
      eyebrow="Document"
      title="Curriculum Vitae"
      intro="View or download the most recent CV."
      accent={C.keyword}
    >
      <Card sx={{ bgcolor: C.surface, border: `1px solid ${C.border}`, borderRadius: 2, maxWidth: 1000 }}>
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2,
                display: "grid",
                placeItems: "center",
                flex: "0 0 auto",
                background: alpha(C.keyword, 0.1),
                border: `1px solid ${alpha(C.keyword, 0.25)}`,
              }}
            >
              <DescriptionRoundedIcon sx={{ color: C.keyword }} />
            </Box>

            <Box>
              <Typography variant="h2" sx={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                Gulfam_CV.pdf
              </Typography>
              <Typography sx={{ color: C.textSecondary, mt: 0.25, fontSize: "0.9rem" }}>
                Download for offline use, or open in a new tab.
              </Typography>
            </Box>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mb: 2.5 }}>
            <Button
              variant="contained"
              startIcon={<DownloadRoundedIcon />}
              href={cvPath}
              download="Gulfam_Ahmed_Saju_CV.pdf"
              sx={{ borderRadius: 999, px: 2.5, py: 1.05, fontWeight: 700, fontFamily: MONO }}
            >
              Download PDF
            </Button>

            {/* Previously this button used a near-white background with
                text.primary (#e6edf3) as its colour — light-on-light, and
                effectively invisible on the dark theme. */}
            <Button
              variant="outlined"
              endIcon={<OpenInNewRoundedIcon />}
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: 999,
                px: 2.5,
                py: 1.05,
                fontWeight: 700,
                fontFamily: MONO,
                borderColor: C.border,
                color: C.textPrimary,
                backgroundColor: alpha(C.accent, 0.06),
                "&:hover": {
                  backgroundColor: alpha(C.accent, 0.14),
                  borderColor: alpha(C.accent, 0.5),
                },
              }}
            >
              Open in New Tab
            </Button>
          </Stack>

          <Divider sx={{ borderColor: C.border, mb: 2.5 }} />

          <Box
            component="iframe"
            title="Curriculum Vitae preview"
            src={cvPath}
            sx={{
              width: "100%",
              height: { xs: 480, md: 820 },
              border: `1px solid ${C.border}`,
              borderRadius: 2,
              backgroundColor: "#20232a",
              display: "block",
            }}
          />

          <Typography sx={{ mt: 1.5, color: C.textMuted, fontFamily: MONO, fontSize: 11 }}>
            {/* iOS Safari and some mobile browsers refuse to render PDFs in an
                iframe, so the buttons above remain the reliable path there. */}
            If the preview does not load on mobile, use “Download PDF” above.
          </Typography>
        </CardContent>
      </Card>
    </PageShell>
  );
}
