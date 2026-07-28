// src/components/CommandPalette.jsx
//
// ⌘K / Ctrl-K quick navigation — the natural companion to the site's VS Code
// metaphor. Jumps to any page, any external profile, or any publication
// (deep-linking into the publications list and highlighting the entry).

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Dialog, Typography, InputBase } from "@mui/material";
import { alpha } from "@mui/material/styles";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { publications } from "../data/publications";
import { C, MONO } from "../theme";

const PAGES = [
  { label: "home",         hint: "overview",              path: "/",             icon: HomeRoundedIcon },
  { label: "about",        hint: "experience, education", path: "/about",        icon: PersonRoundedIcon },
  { label: "research",     hint: "projects, animations",  path: "/research",     icon: ScienceRoundedIcon },
  { label: "publications", hint: "papers, BibTeX",        path: "/publications", icon: LibraryBooksRoundedIcon },
  { label: "activities",   hint: "service, peer review",  path: "/activities",   icon: EventNoteRoundedIcon },
  { label: "cv",           hint: "download PDF",          path: "/cv",           icon: DescriptionRoundedIcon },
  { label: "contact",      hint: "email, profiles",       path: "/contact",      icon: EmailRoundedIcon },
];

const EXTERNAL = [
  { label: "Google Scholar", url: "https://scholar.google.com/citations?user=qewXRr4AAAAJ" },
  { label: "ORCID",          url: "https://orcid.org/0009-0007-7391-0485" },
  { label: "GitHub",         url: "https://github.com/gulfam7" },
  { label: "LinkedIn",       url: "https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/" },
  { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Gulfam-Saju" },
];

/** Subsequence match — "agmri" finds "AgentMRI". Returns null when no match. */
function fuzzyScore(query, text) {
  if (!query) return 0;
  const q = query.toLowerCase();
  const s = text.toLowerCase();
  const direct = s.indexOf(q);
  if (direct >= 0) return 1000 - direct; // contiguous matches rank highest
  let qi = 0;
  let score = 0;
  let prev = -1;
  for (let i = 0; i < s.length && qi < q.length; i++) {
    if (s[i] === q[qi]) {
      score += prev === i - 1 ? 5 : 1;
      prev = i;
      qi++;
    }
  }
  return qi === q.length ? score : null;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const listRef = useRef(null);

  // ⌘K / Ctrl-K anywhere; Escape closes.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = useMemo(() => {
    const all = [
      ...PAGES.map((p) => ({
        kind: "page",
        key: `page:${p.path}`,
        title: `${p.label}`,
        sub: p.hint,
        icon: p.icon,
        run: () => navigate(p.path),
      })),
      ...EXTERNAL.map((l) => ({
        kind: "link",
        key: `ext:${l.url}`,
        title: l.label,
        sub: "external profile",
        icon: OpenInNewRoundedIcon,
        run: () => window.open(l.url, "_blank", "noopener,noreferrer"),
      })),
      ...publications.map((p, i) => ({
        kind: "pub",
        key: `pub:${i}`,
        title: p.title,
        sub: [p.journal, p.year].filter(Boolean).join(" · "),
        icon: ArticleRoundedIcon,
        run: () => navigate(`/publications?q=${encodeURIComponent(p.title.slice(0, 48))}`),
      })),
    ];

    if (!query.trim()) {
      return all.filter((i) => i.kind !== "pub").slice(0, 12);
    }

    return all
      .map((item) => {
        const s = Math.max(
          fuzzyScore(query, item.title) ?? -1,
          (fuzzyScore(query, item.sub || "") ?? -1) * 0.5
        );
        return s >= 0 ? { ...item, score: s } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 14);
  }, [query, navigate]);

  useEffect(() => setActive(0), [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = items[active];
      if (item) {
        item.run();
        close();
      }
    } else if (e.key === "Escape") {
      close();
    }
  };

  // keep the highlighted row in view when arrowing past the fold
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <Dialog
      open={open}
      onClose={close}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            bgcolor: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 2,
            mt: -10,
            overflow: "hidden",
          },
        },
        backdrop: { sx: { backgroundColor: alpha("#010409", 0.72) } },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          px: 2,
          py: 1.5,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <SearchRoundedIcon sx={{ fontSize: 18, color: C.comment }} />
        <InputBase
          autoFocus
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Jump to a page, profile or publication…"
          inputProps={{ "aria-label": "Search pages and publications" }}
          sx={{ fontFamily: MONO, fontSize: 14, color: C.textPrimary }}
        />
        <Typography
          sx={{
            fontFamily: MONO,
            fontSize: 10,
            color: C.textMuted,
            border: `1px solid ${C.border}`,
            borderRadius: 0.75,
            px: 0.75,
            py: 0.25,
            flex: "0 0 auto",
          }}
        >
          esc
        </Typography>
      </Box>

      <Box ref={listRef} sx={{ maxHeight: 360, overflowY: "auto", py: 0.75 }}>
        {items.length === 0 ? (
          <Typography
            sx={{ px: 2, py: 3, color: C.textMuted, fontFamily: MONO, fontSize: 13 }}
          >
            no matches for “{query}”
          </Typography>
        ) : (
          items.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;
            return (
              <Box
                key={item.key}
                data-idx={i}
                role="button"
                tabIndex={-1}
                onMouseEnter={() => setActive(i)}
                onClick={() => {
                  item.run();
                  close();
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 1,
                  cursor: "pointer",
                  bgcolor: isActive ? alpha(C.accent, 0.12) : "transparent",
                  borderLeft: `2px solid ${isActive ? C.accent : "transparent"}`,
                }}
              >
                <Icon sx={{ fontSize: 16, color: isActive ? C.accent : C.comment, flex: "0 0 auto" }} />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: item.kind === "pub" ? "inherit" : MONO,
                      fontSize: 13,
                      color: C.textPrimary,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.sub ? (
                    <Typography
                      sx={{
                        fontSize: 11,
                        color: C.textMuted,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.sub}
                    </Typography>
                  ) : null}
                </Box>
                {isActive ? (
                  <Typography sx={{ fontFamily: MONO, fontSize: 10, color: C.textMuted }}>
                    ↵
                  </Typography>
                ) : null}
              </Box>
            );
          })
        )}
      </Box>
    </Dialog>
  );
}
