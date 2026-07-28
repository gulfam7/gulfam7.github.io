// src/pages/PublicationsPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  InputBase,
  Chip,
  Button,
  Tooltip,
  IconButton,
  Snackbar,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

import PageShell from "../components/PageShell";
import {
  publications,
  SECTION_THEME,
  splitAuthors,
  isMyName,
  formatVenue,
  sortByYearDesc,
  toBibTeX,
  allBibTeX,
} from "../data/publications";
import { C, MONO } from "../theme";

const ORDER = ["journal", "conference", "abstract", "under-review"];
const TITLES = {
  journal: "Peer-Reviewed Journal Articles",
  conference: "Peer-Reviewed Conference Papers",
  abstract: "Conference Abstracts",
  "under-review": "Under Review",
};

function matches(pub, q) {
  if (!q) return true;
  const hay = `${pub.title} ${pub.authors} ${pub.journal} ${pub.year}`.toLowerCase();
  // every whitespace-separated term must appear somewhere
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => hay.includes(term));
}

function PublicationNode({ pub, index, accent, onCite, isLast, highlight }) {
  const venue = formatVenue(pub);
  const year = pub.year ? String(pub.year) : "In progress";

  return (
    <Box
      sx={{
        position: "relative",
        pl: { xs: 3.5, md: 5 },
        pb: isLast ? 0 : 4.5,
        "&:hover .timeline-dot": {
          bgcolor: accent,
          boxShadow: `0 0 12px ${alpha(accent, 0.6)}`,
          transform: "scale(1.18)",
        },
        "&:hover .pub-title": { color: accent },
      }}
    >
      {/* vertical track — omitted on the last item so it doesn't dangle */}
      {!isLast && (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: { xs: 7, md: 11 },
            top: 26,
            bottom: 0,
            width: "2px",
            bgcolor: alpha(C.comment, 0.15),
          }}
        />
      )}

      <Box
        className="timeline-dot"
        aria-hidden
        sx={{
          position: "absolute",
          left: 0,
          top: 4,
          width: { xs: 16, md: 24 },
          height: { xs: 16, md: 24 },
          borderRadius: "50%",
          bgcolor: highlight ? accent : C.surface,
          border: `2px solid ${alpha(highlight ? accent : C.comment, highlight ? 1 : 0.4)}`,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: alpha(C.comment, 0.6) }} />
      </Box>

      <Stack spacing={0.9}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography sx={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: alpha(C.comment, 0.8) }}>
            [{String(index + 1).padStart(2, "0")}]
          </Typography>
          <Typography
            sx={{
              fontFamily: MONO,
              fontSize: "0.78rem",
              fontWeight: 600,
              color: accent,
              bgcolor: alpha(accent, 0.1),
              px: 1,
              py: 0.25,
              borderRadius: 1,
            }}
          >
            {year}
          </Typography>
        </Stack>

        <Typography
          className="pub-title"
          sx={{
            fontWeight: 650,
            fontSize: { xs: "1rem", md: "1.12rem" },
            lineHeight: 1.42,
            color: C.textPrimary,
            transition: "color 0.2s ease",
          }}
        >
          {pub.title}
        </Typography>

        <Typography sx={{ fontSize: "0.93rem", lineHeight: 1.6, color: alpha(C.textPrimary, 0.75) }}>
          {splitAuthors(pub.authors).map((name, i, arr) => (
            <React.Fragment key={`${name}-${i}`}>
              <Box
                component="span"
                sx={{
                  fontWeight: isMyName(name) ? 700 : 400,
                  color: isMyName(name) ? "#fff" : "inherit",
                  borderBottom: isMyName(name) ? `1px solid ${alpha(accent, 0.5)}` : "none",
                }}
              >
                {name}
              </Box>
              {i < arr.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </Typography>

        {venue && (
          <Typography sx={{ fontSize: "0.88rem", color: C.comment, fontStyle: "italic" }}>
            {venue}
          </Typography>
        )}

        <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 0.75 }} flexWrap="wrap" useFlexGap>
          {pub.url && (
            <Typography
              component="a"
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "0.82rem",
                fontFamily: MONO,
                color: alpha(C.comment, 0.9),
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": { color: accent },
              }}
            >
              <span style={{ color: accent }}>{">"}</span> VIEW_PDF
            </Typography>
          )}
          {pub.doi && (
            <Typography
              component="a"
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "0.82rem",
                fontFamily: MONO,
                color: alpha(C.comment, 0.9),
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": { color: accent },
              }}
            >
              <span style={{ color: accent }}>{">"}</span> RESOLVE_DOI
            </Typography>
          )}
          <Tooltip title="Copy BibTeX entry" arrow>
            <Typography
              component="button"
              type="button"
              onClick={() => onCite(pub)}
              sx={{
                fontSize: "0.82rem",
                fontFamily: MONO,
                color: alpha(C.comment, 0.9),
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                background: "none",
                border: "none",
                p: 0,
                cursor: "pointer",
                "&:hover": { color: accent },
              }}
            >
              <span style={{ color: accent }}>{">"}</span> CITE
            </Typography>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function PublicationsPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [types, setTypes] = useState([]);      // empty = all
  const [year, setYear] = useState(null);
  const [toast, setToast] = useState("");

  // keep ?q= in the URL so palette deep-links and browser history work
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (query) next.set("q", query);
    else next.delete("q");
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const years = useMemo(
    () =>
      [...new Set(publications.map((p) => p.year).filter(Boolean))].sort((a, b) => b - a),
    []
  );

  const filtered = useMemo(
    () =>
      publications.filter(
        (p) =>
          matches(p, query) &&
          (types.length === 0 || types.includes(p.type)) &&
          (year === null || String(p.year) === String(year))
      ),
    [query, types, year]
  );

  const grouped = useMemo(() => {
    const out = {};
    for (const key of ORDER) {
      out[key] = filtered.filter((p) => p.type === key).slice().sort(sortByYearDesc);
    }
    return out;
  }, [filtered]);

  const copy = async (text, message) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast(message);
    } catch {
      setToast("Clipboard unavailable — check browser permissions");
    }
  };

  const toggleType = (t) =>
    setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  const clearAll = () => {
    setQuery("");
    setTypes([]);
    setYear(null);
  };

  const hasFilters = Boolean(query) || types.length > 0 || year !== null;

  return (
    <PageShell
      eyebrow="System log // research output"
      title="Publications"
      intro="A chronological ledger of peer-reviewed journal articles, conference papers, abstracts, and manuscripts under review. Search by title, author, venue or year — every entry exports to BibTeX."
      accent={C.variable}
    >
      {/* ── search + filters ────────────────────────────────────────── */}
      <Box
        sx={{
          border: `1px solid ${C.border}`,
          borderRadius: 2,
          bgcolor: alpha(C.surface, 0.75),
          p: { xs: 1.75, md: 2 },
          mb: 4,
          backdropFilter: "blur(8px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            border: `1px solid ${C.border}`,
            borderRadius: 1.5,
            px: 1.5,
            py: 0.75,
            bgcolor: alpha("#010409", 0.5),
            "&:focus-within": { borderColor: C.accent },
          }}
        >
          <SearchRoundedIcon sx={{ fontSize: 18, color: C.comment }} />
          <InputBase
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, author, venue…"
            inputProps={{ "aria-label": "Search publications" }}
            sx={{ fontFamily: MONO, fontSize: 13.5, color: C.textPrimary }}
          />
          {query ? (
            <IconButton size="small" onClick={() => setQuery("")} aria-label="Clear search">
              <CloseRoundedIcon sx={{ fontSize: 15 }} />
            </IconButton>
          ) : null}
        </Box>

        <Stack direction="row" spacing={0.85} flexWrap="wrap" useFlexGap sx={{ mt: 1.75 }}>
          {ORDER.map((t) => {
            const theme = SECTION_THEME[t];
            const on = types.includes(t);
            const n = publications.filter((p) => p.type === t).length;
            return (
              <Chip
                key={t}
                label={`${theme.label} ${n}`}
                size="small"
                onClick={() => toggleType(t)}
                sx={{
                  fontFamily: MONO,
                  fontSize: 11.5,
                  cursor: "pointer",
                  borderRadius: 1.5,
                  border: `1px solid ${alpha(theme.color, on ? 0.7 : 0.25)}`,
                  bgcolor: alpha(theme.color, on ? 0.2 : 0.06),
                  color: on ? "#fff" : alpha(theme.color, 0.95),
                  "&:hover": { bgcolor: alpha(theme.color, 0.28) },
                }}
              />
            );
          })}

          <Box sx={{ width: 1, bgcolor: C.border, mx: 0.5, alignSelf: "stretch" }} />

          {years.map((y) => (
            <Chip
              key={y}
              label={y}
              size="small"
              onClick={() => setYear((cur) => (String(cur) === String(y) ? null : y))}
              sx={{
                fontFamily: MONO,
                fontSize: 11.5,
                cursor: "pointer",
                borderRadius: 1.5,
                border: `1px solid ${alpha(C.comment, String(year) === String(y) ? 0.8 : 0.22)}`,
                bgcolor: String(year) === String(y) ? alpha(C.accent, 0.2) : "transparent",
                color: String(year) === String(y) ? "#fff" : C.comment,
                "&:hover": { bgcolor: alpha(C.accent, 0.14) },
              }}
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ mt: 1.75, pt: 1.5, borderTop: `1px solid ${C.border}` }}
          flexWrap="wrap"
          useFlexGap
        >
          <Typography sx={{ fontFamily: MONO, fontSize: 11.5, color: C.textMuted }}>
            {filtered.length} of {publications.length} shown
          </Typography>

          {hasFilters ? (
            <Button
              size="small"
              onClick={clearAll}
              sx={{ fontFamily: MONO, fontSize: 11.5, color: C.comment, minWidth: 0 }}
            >
              clear filters
            </Button>
          ) : null}

          <Box sx={{ flexGrow: 1 }} />

          <Button
            size="small"
            startIcon={<ContentCopyRoundedIcon sx={{ fontSize: 14 }} />}
            onClick={() =>
              copy(allBibTeX(filtered), `Copied ${filtered.length} BibTeX entries`)
            }
            disabled={filtered.length === 0}
            sx={{ fontFamily: MONO, fontSize: 11.5 }}
          >
            copy all BibTeX
          </Button>
          <Button
            size="small"
            startIcon={<DownloadRoundedIcon sx={{ fontSize: 15 }} />}
            onClick={() => {
              const blob = new Blob([allBibTeX(filtered)], {
                type: "application/x-bibtex;charset=utf-8",
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "saju-publications.bib";
              a.click();
              URL.revokeObjectURL(url);
            }}
            disabled={filtered.length === 0}
            sx={{ fontFamily: MONO, fontSize: 11.5 }}
          >
            .bib
          </Button>
        </Stack>
      </Box>

      {/* ── results ─────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <Box
          sx={{
            border: `1px dashed ${C.border}`,
            borderRadius: 2,
            p: 5,
            textAlign: "center",
          }}
        >
          <FormatQuoteRoundedIcon sx={{ color: C.textMuted, fontSize: 30, mb: 1 }} />
          <Typography sx={{ fontFamily: MONO, color: C.comment, fontSize: 13.5 }}>
            no publications match the current filters
          </Typography>
          <Button onClick={clearAll} sx={{ mt: 1.5, fontFamily: MONO }} size="small">
            reset
          </Button>
        </Box>
      ) : (
        <Stack spacing={0}>
          {ORDER.map((key) => {
            const items = grouped[key];
            if (!items.length) return null;
            const theme = SECTION_THEME[key];
            return (
              <Box key={key} id={`pub-${key}`} sx={{ scrollMarginTop: 60, mb: 7 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3.5 }}>
                  <Box
                    sx={{
                      width: 11,
                      height: 11,
                      bgcolor: theme.color,
                      boxShadow: `0 0 10px ${theme.color}`,
                      flex: "0 0 auto",
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.05rem", md: "1.25rem" },
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      color: "#fff",
                    }}
                  >
                    {TITLES[key]}
                  </Typography>
                  <Box sx={{ flexGrow: 1, height: "1px", bgcolor: alpha(theme.color, 0.2) }} />
                  <Typography sx={{ fontFamily: MONO, color: theme.color, fontSize: 12.5 }}>
                    COUNT:{items.length}
                  </Typography>
                </Stack>

                <Box>
                  {items.map((pub, idx) => (
                    <PublicationNode
                      key={`${key}-${pub.title}`}
                      pub={pub}
                      index={idx}
                      accent={theme.color}
                      isLast={idx === items.length - 1}
                      highlight={Boolean(query) && matches(pub, query)}
                      onCite={(p) => copy(toBibTeX(p), "BibTeX entry copied")}
                    />
                  ))}
                </Box>
              </Box>
            );
          })}
        </Stack>
      )}

      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={2200}
        onClose={() => setToast("")}
        message={toast}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </PageShell>
  );
}
