// src/pages/NotFoundPage.jsx
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import PageShell from "../components/PageShell";
import { C, MONO } from "../theme";

export default function NotFoundPage() {
  return (
    <PageShell eyebrow="Error 404" title="Page not found" accent={C.keyword}>
      <Box
        sx={{
          bgcolor: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 2,
          p: { xs: 2.5, md: 3 },
          maxWidth: 620,
        }}
      >
        <Box
          component="pre"
          sx={{
            m: 0,
            fontFamily: MONO,
            fontSize: { xs: 12, md: 13 },
            lineHeight: 1.9,
            color: C.textPrimary,
            whiteSpace: "pre-wrap",
          }}
        >
          <span style={{ color: C.comment }}>{"// the requested route does not exist"}</span>
          {"\n"}
          <span style={{ color: C.keyword }}>throw new</span>{" "}
          <span style={{ color: C.func }}>NotFoundError</span>
          {"("}
          <span style={{ color: C.string }}>&quot;no such page&quot;</span>
          {");"}
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 3 }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ fontFamily: MONO }}
          >
            ./home
          </Button>
          <Button
            component={RouterLink}
            to="/publications"
            variant="outlined"
            sx={{ fontFamily: MONO }}
          >
            ./publications
          </Button>
        </Stack>

        <Typography sx={{ mt: 2.5, color: C.textMuted, fontFamily: MONO, fontSize: 11.5 }}>
          tip: press ⌘K / Ctrl-K to search every page and publication.
        </Typography>
      </Box>
    </PageShell>
  );
}
