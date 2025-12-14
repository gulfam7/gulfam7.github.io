import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  TextField,
  MenuItem,
  Link as MuiLink,
  Divider,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const cardSx = {
  backgroundColor: "var(--panel)",
  border: "1px solid var(--panel-border)",
  borderRadius: "16px",
  boxShadow: "var(--shadow)",
  backdropFilter: "blur(10px)",
};

const MY_NAME = "Gulfam Ahmed Saju";

export const publications = [
  // ---- (keep your existing publications array exactly as you provided) ----
  // I am not repeating it here to keep this file readable.
];

function toYearNumber(y) {
  if (y === null || y === undefined || y === "") return null;
  const n = Number(y);
  return Number.isFinite(n) ? n : null;
}

function matchesQuery(pub, q) {
  if (!q) return true;
  const hay = `${pub.authors || ""} ${pub.title || ""} ${pub.journal || ""} ${pub.doi || ""}`.toLowerCase();
  return hay.includes(q.toLowerCase());
}

function formatAuthors(authors) {
  const parts = String(authors || "").split(",").map((s) => s.trim()).filter(Boolean);
  return parts.map((name, i) => (
    <Box key={`${name}-${i}`} component="span">
      <Box component="span" sx={{ fontWeight: name === MY_NAME ? 900 : 600, color: "var(--text)" }}>
        {name}
      </Box>
      {i < parts.length - 1 ? ", " : ". "}
    </Box>
  ));
}

function PubLine({ pub }) {
  const year = pub.year ? String(pub.year) : "";
  const venue = pub.journal || "";

  return (
    <Typography sx={{ color: "rgba(226,232,240,0.92)", lineHeight: 1.8 }}>
      {formatAuthors(pub.authors)}
      <Box component="span" sx={{ color: "rgba(226,232,240,0.92)" }}>
        “{pub.title}.”
      </Box>{" "}
      <Box component="span" sx={{ fontStyle: "italic", color: "rgba(226,232,240,0.92)" }}>
        {venue}
        {pub.volume ? `, vol. ${pub.volume}` : ""}
        {pub.issue ? `, no. ${pub.issue}` : ""}
        {pub.pages ? `, ${pub.pages}` : ""}
      </Box>
      {pub.month ? `, ${pub.month}` : ""}{year ? `, ${year}.` : "."}{" "}
      {pub.url ? (
        <MuiLink
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: "var(--accent)", fontWeight: 800, ml: 0.5 }}
        >
          Link
        </MuiLink>
      ) : null}
      {pub.doi ? (
        <MuiLink
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: "var(--accent)", fontWeight: 800, ml: 1 }}
        >
          DOI
        </MuiLink>
      ) : null}
    </Typography>
  );
}

function Section({ title, items, badge }) {
  if (!items.length) return null;

  return (
    <Card sx={{ ...cardSx, mt: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 900, color: "var(--text)" }}>
            {title}
          </Typography>
          {badge ? (
            <Chip
              label={badge}
              size="small"
              sx={{
                backgroundColor: "rgba(34,211,238,0.10)",
                border: "1px solid rgba(34,211,238,0.25)",
                color: "rgba(34,211,238,0.95)",
                fontWeight: 800,
              }}
            />
          ) : null}
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

        <Stack spacing={2}>
          {items.map((pub) => (
            <Box
              key={`${pub.type}-${pub.id}-${pub.doi || pub.title}`}
              sx={{
                pl: 2,
                borderLeft: "2px solid rgba(34,211,238,0.28)",
              }}
            >
              <PubLine pub={pub} />
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function PublicationsPage() {
  const safe = Array.isArray(publications) ? publications : [];

  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");

  const years = useMemo(() => {
    const ys = safe
      .map((p) => toYearNumber(p.year))
      .filter((x) => x !== null)
      .sort((a, b) => b - a);
    return ["All", ...Array.from(new Set(ys)).map(String)];
  }, [safe]);

  const filtered = useMemo(() => {
    return safe
      .filter((p) => matchesQuery(p, query))
      .filter((p) => year === "All" || String(p.year) === year)
      .sort((a, b) => (toYearNumber(b.year) || 0) - (toYearNumber(a.year) || 0));
  }, [safe, query, year]);

  const journals = filtered.filter((p) => p.type === "journal");
  const conferences = filtered.filter((p) => p.type === "conference");
  const abstracts = filtered.filter((p) => p.type === "abstract");
  const underReview = filtered.filter((p) => p.type === "under-review");

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ color: "var(--text)" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.3 }}>
          Publications
        </Typography>
        <Typography sx={{ color: "var(--muted)", mt: 1, maxWidth: 900 }}>
          Peer-reviewed journal articles, conference papers, abstracts, and manuscripts under review.
        </Typography>

        {/* Controls */}
        <Card sx={{ ...cardSx, mt: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, author, venue, or DOI"
                size="small"
                sx={{
                  minWidth: { xs: "100%", sm: 420 },
                  input: { color: "var(--text)" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.15)" },
                }}
                InputProps={{
                  startAdornment: (
                    <Box sx={{ mr: 1, display: "flex", alignItems: "center", color: "rgba(148,163,184,0.95)" }}>
                      <SearchIcon fontSize="small" />
                    </Box>
                  ),
                }}
              />

              <TextField
                select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                size="small"
                label="Year"
                sx={{
                  width: 140,
                  "& .MuiInputLabel-root": { color: "rgba(148,163,184,0.95)" },
                  "& .MuiSelect-select": { color: "var(--text)" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.15)" },
                }}
              >
                {years.map((y) => (
                  <MenuItem key={y} value={y}>
                    {y}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </CardContent>
        </Card>

        {/* Sections */}
        <Section title="Peer-Reviewed Journal Articles" items={journals} badge={journals.length} />
        <Section title="Peer-Reviewed Conference Papers" items={conferences} badge={conferences.length} />
        <Section title="Conference Abstracts" items={abstracts} badge={abstracts.length} />
        <Section title="Under Review" items={underReview} badge={underReview.length} />
      </Box>
    </Container>
  );
}
