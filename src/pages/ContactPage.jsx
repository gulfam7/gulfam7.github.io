// src/pages/ContactPage.jsx
import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  IconButton,
  Tooltip,
  Divider,
  Chip,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function ContactPage() {
  const theme = useTheme();
  const ACCENT = "#22d3ee";

  const email = "gulfamahmedsaju@gmail.com"; // update if needed

  const links = useMemo(
    () => [
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=qewXRr4AAAAJ" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/" },
      { label: "GitHub", href: "https://github.com/gulfam7" },
      { label: "ORCID", href: "https://orcid.org/0009-0007-7391-0485" },
      { label: "ResearchGate", href: "https://www.researchgate.net/profile/Gulfam-Saju" },
    ],
    []
  );

  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard may fail in some contexts; ignore
    }
  };

  // Modern, consistent “soft border” card (no black outline)
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

  const lightDivider = { borderColor: alpha("#0b1220", 0.08) };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ mb: 3.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -0.4 }}>
          Contact
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 860, lineHeight: 1.75 }}>
          For research discussions, collaborations, or speaking invitations, email is the most reliable channel.
        </Typography>
      </Box>

      <Stack spacing={3} sx={{ maxWidth: 920 }}>
        <Card sx={cardSx}>
          <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
            {/* Header */}
            <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1.75 }}>
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
                <EmailRoundedIcon sx={{ color: ACCENT }} />
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
                  Email
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 0.25 }}>
                  Typically responds within 1–2 business days.
                </Typography>
              </Box>
            </Stack>

            {/* Email row */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.25}
              alignItems={{ xs: "stretch", sm: "center" }}
              justifyContent="space-between"
              sx={{
                p: 2,
                borderRadius: 2.5,
                backgroundColor: alpha("#0b1220", 0.03),
                border: `1px solid ${alpha("#0b1220", 0.08)}`,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  letterSpacing: -0.1,
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }}
              >
                {email}
              </Typography>

              <Stack direction="row" spacing={1} justifyContent="flex-end">
                <Button
                  variant="contained"
                  startIcon={<EmailRoundedIcon />}
                  href={`mailto:${email}`}
                  sx={{
                    borderRadius: 999,
                    px: 2.0,
                    fontWeight: 900,
                    backgroundColor: alpha(ACCENT, 0.9),
                    color: "#081018",
                    "&:hover": { backgroundColor: ACCENT },
                  }}
                >
                  Compose
                </Button>

                <Tooltip title={copied ? "Copied" : "Copy email"} arrow>
                  <IconButton
                    onClick={onCopy}
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      border: `1px solid ${alpha("#0b1220", 0.10)}`,
                      backgroundColor: alpha("#ffffff", 0.7),
                      "&:hover": {
                        backgroundColor: alpha("#ffffff", 0.95),
                        borderColor: alpha(ACCENT, 0.35),
                      },
                    }}
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <CheckCircleRoundedIcon fontSize="small" sx={{ color: ACCENT }} />
                    ) : (
                      <ContentCopyRoundedIcon fontSize="small" />
                    )}
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Divider sx={{ ...lightDivider, my: 2.5 }} />

            {/* Profiles */}
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.25 }}>
              <Typography sx={{ fontWeight: 900, letterSpacing: -0.1 }}>Profiles</Typography>
              <Chip
                size="small"
                label="External links"
                variant="outlined"
                sx={{
                  ml: 0.5,
                  borderColor: alpha(ACCENT, 0.22),
                  backgroundColor: alpha(ACCENT, 0.05),
                }}
              />
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {links.map((l) => (
                <Button
                  key={l.href}
                  variant="outlined"
                  endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 800,
                    borderColor: alpha("#0b1220", 0.12),
                    color: "text.primary",
                    backgroundColor: alpha("#ffffff", 0.65),
                    "&:hover": {
                      backgroundColor: alpha("#ffffff", 0.95),
                      borderColor: alpha(ACCENT, 0.40),
                    },
                  }}
                >
                  {l.label}
                </Button>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
