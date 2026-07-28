// src/components/viz/index.jsx
// Registry + shared chrome for the research visualisations.

import React from "react";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import KSpaceFill from "./KSpaceFill";
import PropellerBlades from "./PropellerBlades";
import AgentGraph from "./AgentGraph";
import SpikeRaster from "./SpikeRaster";
import KSpaceField from "./KSpaceField";
import { C, MONO } from "../../theme";

export { KSpaceFill, PropellerBlades, AgentGraph, SpikeRaster, KSpaceField };

const REGISTRY = {
  kspace: KSpaceFill,
  propeller: PropellerBlades,
  agents: AgentGraph,
  spiking: SpikeRaster,
};

/**
 * Renders the visualisation for a research area by key.
 * `height` lets the same component serve the compact Home cards and the
 * larger Research page panels.
 */
export function ResearchViz({ viz, accent, height = 200 }) {
  const Component = REGISTRY[viz];
  if (!Component) return null;
  return <Component accent={accent} height={height} />;
}

/**
 * Panel chrome around a visualisation: a terminal-ish header strip and an
 * optional caption. Keeps all four visualisations visually consistent.
 */
export function VizFrame({ label, accent = C.accent, caption, children }) {
  return (
    <Box
      sx={{
        borderRadius: 1.5,
        overflow: "hidden",
        border: `1px solid ${C.border}`,
        bgcolor: "#0a0e14",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 1.25,
          py: 0.6,
          borderBottom: `1px solid ${C.border}`,
          bgcolor: alpha(accent, 0.06),
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: accent,
            boxShadow: `0 0 6px ${accent}`,
            flex: "0 0 auto",
          }}
        />
        {/* no uppercasing — these are camelCase function names and
            ACCELERATEDMRI is unreadable */}
        <Typography
          sx={{
            fontFamily: MONO,
            fontSize: 10.5,
            letterSpacing: 0.6,
            color: alpha(accent, 0.95),
            fontWeight: 700,
          }}
        >
          {label}()
        </Typography>
      </Box>

      <Box sx={{ px: 1, py: 1 }}>{children}</Box>

      {caption ? (
        <Typography
          sx={{
            px: 1.5,
            pb: 1.25,
            pt: 0,
            fontSize: 11,
            lineHeight: 1.55,
            color: C.textMuted,
            fontFamily: MONO,
          }}
        >
          {caption}
        </Typography>
      ) : null}
    </Box>
  );
}

export default ResearchViz;
