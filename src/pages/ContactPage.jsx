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
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const cardSx = {
  backgroundColor: "var(--panel)",
  border: "1px solid var(--panel-border)",
  borderRadius: "16px",
  boxShadow: "var(--shadow)",
  backdropFilter: "blur(10px)",
};

export default function ContactPage() {
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
      // no-op (clipboard can fail in some browsers)
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ color: "var(--text)" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.3 }}>
          Contact
        </Typography>
        <Typography sx={{ color: "var(--muted)", mt: 1, maxWidth: 860 }}>
          For research discussions, collaborations, or speaking invitations, email is the most reliable channel.
        </Typography>

        <Stack spacing={3} sx={{ mt: 4, maxWidth: 840 }}>
          <Card sx={cardSx}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1 }}>
                <EmailIcon sx={{ color: "var(--accent)" }} />
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Email
                </Typography>
              </Box>

              <Typography sx={{ color: "rgba(226,232,240,0.92)", mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 800 }}>
                  {email}
                </Box>
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  variant="contained"
                  startIcon={<EmailIcon />}
                  href={`mailto:${email}`}
                  sx={{
                    backgroundColor: "var(--accent)",
                    color: "#0b1220",
                    fontWeight: 800,
                    "&:hover": { backgroundColor: "rgba(34,211,238,0.9)" },
                  }}
                >
                  Compose Email
                </Button>

                <Tooltip title={copied ? "Copied" : "Copy email"}>
                  <IconButton
                    onClick={onCopy}
                    sx={{
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "var(--text)",
                      width: 44,
                      height: 44,
                    }}
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 2.5 }} />

              <Typography sx={{ color: "var(--muted)", mb: 1.5 }}>
                Profiles
              </Typography>

              <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
                {links.map((l) => (
                  <Button
                    key={l.href}
                    variant="outlined"
                    endIcon={<OpenInNewIcon fontSize="small" />}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: "rgba(255,255,255,0.15)",
                      color: "rgba(226,232,240,0.92)",
                      "&:hover": { borderColor: "rgba(34,211,238,0.5)" },
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    {l.label}
                  </Button>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
