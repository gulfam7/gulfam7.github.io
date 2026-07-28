// src/components/PageShell.jsx
//
// One page wrapper for every route. Previously half the pages used a
// `mx: -4, my: -4` hack to escape the Layout's padding while the other half
// didn't, so the site alternated between full-bleed and inset. Layout no
// longer pads its content area — each page owns its own chrome through here.

import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { C, MONO } from "../theme";

export default function PageShell({
  eyebrow,
  title,
  intro,
  accent = C.accent,
  maxWidth = "lg",
  glow = true,
  grid = false,
  children,
  headerExtra,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100%",
        bgcolor: C.bg,
        overflow: "hidden",
      }}
    >
      {glow ? (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `
              radial-gradient(ellipse 70% 50% at 6% 0%, ${alpha(accent, 0.1)}, transparent 55%),
              radial-gradient(ellipse 55% 40% at 100% 12%, ${alpha(C.violet, 0.07)}, transparent 50%)
            `,
          }}
        />
      ) : null}

      {grid ? (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.25,
            backgroundImage: `linear-gradient(${alpha("#fff", 0.028)} 1px, transparent 1px),
              linear-gradient(90deg, ${alpha("#fff", 0.028)} 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
            maskImage: "linear-gradient(180deg, #000 0%, transparent 65%)",
            WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 65%)",
          }}
        />
      ) : null}

      <Container
        maxWidth={maxWidth}
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 4, md: 6 },
          px: { xs: 2.5, sm: 3, md: 4 },
        }}
      >
        {(eyebrow || title || intro) && (
          <Stack spacing={1.1} sx={{ mb: { xs: 3.5, md: 4.5 } }}>
            {eyebrow ? (
              <Typography
                component="p"
                sx={{
                  fontFamily: MONO,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2.6,
                  color: alpha(accent, 0.9),
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </Typography>
            ) : null}

            {title ? (
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  fontSize: { xs: "2rem", sm: "2.35rem", md: "2.7rem" },
                  lineHeight: 1.08,
                  color: C.textPrimary,
                }}
              >
                {title}
              </Typography>
            ) : null}

            {intro ? (
              <Typography
                sx={{
                  color: C.textSecondary,
                  maxWidth: 720,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.98rem", md: "1.04rem" },
                  pt: 0.25,
                }}
              >
                {intro}
              </Typography>
            ) : null}

            {headerExtra}
          </Stack>
        )}

        {children}
      </Container>
    </Box>
  );
}
