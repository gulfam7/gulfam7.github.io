// src/theme.js — VS Code / GitHub Dark aesthetic
// Single source of truth for design tokens. Import `C` rather than
// re-declaring colour constants inside components.
import { createTheme } from '@mui/material/styles';

// ── Palette tokens ──────────────────────────────────────────────────────────
export const C = {
  bg:        '#0d1117',   // GitHub dark default — canonical page background
  bgDeep:    '#010409',   // chrome (sidebar, tab bar, footer)
  surface:   '#161b22',   // card / paper background
  elevated:  '#21262d',   // raised surface (nav, modals)
  border:    '#30363d',   // default border
  borderSub: '#21262d',   // subtle border

  // syntax colours (GitHub dark syntax)
  keyword:   '#ff7b72',   // red — const, function, return
  func:      '#d2a8ff',   // purple — function names
  string:    '#a5d6ff',   // light blue — string values
  number:    '#79c0ff',   // cyan — numbers / types
  comment:   '#8b949e',   // grey — comments
  variable:  '#ffa657',   // orange — variables

  // accent
  accent:    '#58a6ff',   // blue — primary interactive
  accentHi:  '#79b8ff',   // blue — hover
  green:     '#7ee787',   // green — success / active
  cyan:      '#39d0d8',   // secondary accent
  violet:    '#a371f7',   // tertiary accent

  // text
  textPrimary:   '#e6edf3',
  textSecondary: '#8b949e',
  textMuted:     '#484f58',
};

// Per-research-area accent, shared by cards, tags and canvas visualisations so
// each research theme reads as one colour system across the whole site.
export const RESEARCH_ACCENT = {
  recon:    C.number,    // Accelerated MRI reconstruction
  motion:   C.func,      // Motion & artifact correction
  agents:   C.green,     // Foundation-model agents
  spiking:  C.variable,  // Spiking neural networks
};

export const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: C.bg,
      paper:   C.surface,
    },
    primary:   { main: C.accent },
    secondary: { main: C.green  },
    error:     { main: C.keyword },
    warning:   { main: C.variable },
    info:      { main: C.number  },
    success:   { main: C.green  },
    text: {
      primary:   C.textPrimary,
      secondary: C.textSecondary,
      disabled:  C.textMuted,
    },
    divider: C.border,
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 800, letterSpacing: '-0.03em' },
    h4: { fontWeight: 800, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700, letterSpacing: '-0.01em' },
    h6: { fontWeight: 700 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: C.bg,
          color: C.textPrimary,
          scrollbarColor: `${C.border} ${C.bg}`,
          '&::-webkit-scrollbar': { width: 8 },
          '&::-webkit-scrollbar-track': { background: C.bg },
          '&::-webkit-scrollbar-thumb': {
            background: C.border,
            borderRadius: 4,
            '&:hover': { background: '#484f58' },
          },
        },
        '*::-webkit-scrollbar': { width: 6, height: 6 },
        '*::-webkit-scrollbar-track': { background: 'transparent' },
        '*::-webkit-scrollbar-thumb': {
          background: C.border,
          borderRadius: 3,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: C.surface,
          border: `1px solid ${C.border}`,
          boxShadow: 'none',
          transition: 'border-color 180ms ease, box-shadow 180ms ease',
          '&:hover': {
            borderColor: C.accent,
            boxShadow: `0 0 0 1px ${C.accent}26`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: C.surface,
          border: `1px solid ${C.border}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none', boxShadow: 'none' },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          backgroundColor: C.bgDeep,
          borderRight: `1px solid ${C.border}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: C.border },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          fontSize: '0.78rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '0.01em',
        },
        containedPrimary: {
          backgroundColor: C.accent,
          color: C.bg,
          '&:hover': { backgroundColor: C.accentHi },
        },
        outlinedPrimary: {
          borderColor: `${C.accent}66`,
          color: C.accent,
          '&:hover': {
            borderColor: C.accent,
            backgroundColor: `${C.accent}14`,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&.Mui-selected': {
            backgroundColor: `${C.accent}1a`,
            '&:hover': { backgroundColor: `${C.accent}26` },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: C.elevated,
          border: `1px solid ${C.border}`,
          color: C.textPrimary,
          fontSize: '0.78rem',
          borderRadius: 6,
        },
        arrow: { color: C.elevated },
      },
    },
  },
});

export default theme;
