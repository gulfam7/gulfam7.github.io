// src/pages/ContactPage.jsx
import React, { useMemo, useState } from "react";
import {
  Box,
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
import { alpha } from "@mui/material/styles";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import PageShell from "../components/PageShell";
import { C, MONO } from "../theme";

// The institutional address is what the sidebar, home page and structured data
// all advertise, so it is the primary here too. The personal address is kept as
// an explicit alternate rather than as a second, contradictory "the" email.
const PRIMARY_EMAIL = "gsaju@wustl.edu";
const ALT_EMAIL = "gulfamahmedsaju@gmail.com";

function EmailRow({ email, label, accent, primary }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard can be unavailable in some contexts; the mailto still works */
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: alpha(primary ? accent : "#ffffff", primary ? 0.06 : 0.03),
        border: `1px solid ${primary ? alpha(accent, 0.3) : C.border}`,
      }}
    >
      <Typography
        sx={{
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: 1.6,
          textTransform: "uppercase",
          color: primary ? accent : C.textMuted,
          fontWeight: 700,
          mb: 1,
        }}
      >
        {label}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.25}
        alignItems={{ xs: "stretch", sm: "center" }}
        justifyContent="space-between"
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: MONO,
            fontSize: { xs: "0.88rem", md: "0.95rem" },
            color: C.textPrimary,
            wordBreak: "break-all",
          }}
        >
          {email}
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ flexShrink: 0 }}>
          <Button
            variant={primary ? "contained" : "outlined"}
            size="small"
            startIcon={<EmailRoundedIcon />}
            href={`mailto:${email}`}
            sx={{ borderRadius: 999, px: 2, fontWeight: 700, fontFamily: MONO }}
          >
            Compose
          </Button>

          <Tooltip title={copied ? "Copied" : "Copy address"} arrow>
            <IconButton
              onClick={onCopy}
              aria-label={`Copy ${email}`}
              sx={{
                width: 36,
                height: 36,
                borderRadius: 999,
                border: `1px solid ${C.border}`,
                backgroundColor: alpha("#ffffff", 0.05),
                "&:hover": {
                  backgroundColor: alpha(C.accent, 0.16),
                  borderColor: alpha(C.accent, 0.4),
                },
              }}
            >
              {copied ? (
                <CheckCircleRoundedIcon fontSize="small" sx={{ color: C.green }} />
              ) : (
                <ContentCopyRoundedIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function ContactPage() {
  const ACCENT = C.func;

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

  return (
    <PageShell
      eyebrow="Get in touch"
      title="Contact"
      intro="For research discussions, collaborations, or speaking invitations, email is the most reliable channel."
      accent={ACCENT}
    >
      <Stack spacing={3} sx={{ maxWidth: 860 }}>
        <Card sx={{ bgcolor: C.surface, border: `1px solid ${C.border}`, borderRadius: 2 }}>
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
                  background: alpha(ACCENT, 0.1),
                  border: `1px solid ${alpha(ACCENT, 0.25)}`,
                }}
              >
                <EmailRoundedIcon sx={{ color: ACCENT }} />
              </Box>
              <Box>
                <Typography variant="h2" sx={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                  Email
                </Typography>
                <Typography sx={{ color: C.textSecondary, mt: 0.25, fontSize: "0.9rem" }}>
                  Typically responds within 1–2 business days.
                </Typography>
              </Box>
            </Stack>

            <Stack spacing={1.5}>
              <EmailRow
                email={PRIMARY_EMAIL}
                label="Institutional · preferred"
                accent={ACCENT}
                primary
              />
              <EmailRow email={ALT_EMAIL} label="Personal · alternate" accent={ACCENT} />
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2.5 }}>
              <LocationOnRoundedIcon sx={{ fontSize: 15, color: C.textMuted }} />
              <Typography sx={{ fontFamily: MONO, fontSize: 12, color: C.textMuted }}>
                Mallinckrodt Institute of Radiology · St. Louis, MO, USA
              </Typography>
            </Stack>

            <Divider sx={{ borderColor: C.border, my: 2.5 }} />

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
              <Typography sx={{ fontWeight: 800 }}>Profiles</Typography>
              <Chip
                size="small"
                label="External links"
                variant="outlined"
                sx={{
                  ml: 0.5,
                  fontFamily: MONO,
                  fontSize: 11,
                  borderColor: alpha(ACCENT, 0.25),
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
                    fontWeight: 700,
                    fontFamily: MONO,
                    fontSize: 12.5,
                    borderColor: C.border,
                    color: C.textPrimary,
                    backgroundColor: alpha(C.accent, 0.06),
                    "&:hover": {
                      backgroundColor: alpha(C.accent, 0.16),
                      borderColor: alpha(C.accent, 0.4),
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
    </PageShell>
  );
}
