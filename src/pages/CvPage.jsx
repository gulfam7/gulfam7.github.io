import React from "react";
import { Box, Container, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import cvPath from "../components/Gulfam_CV_updated.pdf";

const cardSx = {
  backgroundColor: "var(--panel)",
  border: "1px solid var(--panel-border)",
  borderRadius: "16px",
  boxShadow: "var(--shadow)",
  backdropFilter: "blur(10px)",
};

export default function CvPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ color: "var(--text)" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.3 }}>
          Curriculum Vitae
        </Typography>
        <Typography sx={{ color: "var(--muted)", mt: 1, maxWidth: 860 }}>
          View or download the most recent CV.
        </Typography>

        <Card sx={{ ...cardSx, mt: 4 }}>
          <CardContent>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href={cvPath}
                download
                sx={{
                  backgroundColor: "var(--accent)",
                  color: "#0b1220",
                  fontWeight: 800,
                  "&:hover": { backgroundColor: "rgba(34,211,238,0.9)" },
                }}
              >
                Download (PDF)
              </Button>

              <Button
                variant="outlined"
                endIcon={<OpenInNewIcon />}
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(226,232,240,0.92)",
                  "&:hover": { borderColor: "rgba(34,211,238,0.5)" },
                  textTransform: "none",
                  fontWeight: 800,
                }}
              >
                Open in New Tab
              </Button>
            </Stack>

            {/* Optional inline preview (keep if you like). */}
            <Box
              component="iframe"
              title="CV Preview"
              src={cvPath}
              sx={{
                width: "100%",
                height: { xs: 520, md: 820 },
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "12px",
                mt: 3,
                backgroundColor: "rgba(0,0,0,0.25)",
              }}
            />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
