// src/data/publications.js
// Publication records + citation helpers. Kept out of the page component so
// the command palette and any future export can share exactly one source.

export const publications = [
  // ── Journals ──────────────────────────────────────────────────────────
  {
    type: "journal",
    authors: "Gulfam Ahmed Saju, Marjan Akhi and Yuchou Chang",
    title:
      "AgentMRI: A Vison Language Model-Powered AI System for Self-regulating MRI Reconstruction with Multiple Degradations",
    journal: "Journal of Imaging Informatics in Medicine",
    volume: "",
    issue: "",
    month: "",
    year: 2025,
    pages: "",
    url: "https://link.springer.com/epdf/10.1007/s10278-025-01617-0",
    doi: "10.1007/s10278-025-01617-0",
  },
  {
    type: "journal",
    authors: "Gulfam Ahmed Saju, Alan Okinaka, Marjan Akhi and Yuchou Chang",
    title:
      "An ensemble approach for accelerated and noise-resilient parallel MRI reconstruction utilizing CycleGANs",
    journal: "Machine Vision and Applications",
    volume: "35",
    issue: "",
    month: "",
    year: 2024,
    pages: "Article 136",
    url: "https://link.springer.com/article/10.1007/s00138-024-01617-0",
    doi: "10.1007/s00138-024-01617-0",
  },
  {
    type: "journal",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Hui Mao, Tianming Liu, and Yuchou Chang",
    title: "Suppressing image blurring of PROPELLER MRI via untrained method",
    journal: "Physics in Medicine and Biology",
    volume: "68",
    issue: "17",
    month: "August",
    year: 2023,
    pages: "",
    url: "https://iopscience.iop.org/article/10.1088/1361-6560/acebb1/meta",
    doi: "10.1088/1361-6560/acebb1",
  },
  {
    type: "journal",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li and Yuchou Chang",
    title:
      "Improving Deep PROPELLER MRI via Synthetic Blade Augmentation and Enhanced Generalization",
    journal: "Magnetic Resonance Imaging",
    volume: "108",
    issue: "",
    month: "May",
    year: 2024,
    pages: "",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0730725X24000237",
    doi: "10.1016/j.mri.2024.01.017",
  },
  {
    type: "journal",
    authors: "Yuchou Chang, Zhiqiang Li, Gulfam Ahmed Saju, Hui Mao, and Tianming Liu",
    title:
      "Deep Learning-Based Rigid Motion Correction for Magnetic Resonance Imaging: A Survey",
    journal: "Meta-Radiology",
    volume: "1",
    issue: "1",
    month: "June",
    year: 2023,
    pages: "",
    url: "https://www.sciencedirect.com/science/article/pii/S2950162823000012",
    doi: "10.1016/j.metrad.2023.100001",
  },

  // ── Conferences ───────────────────────────────────────────────────────
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Anton Spirkin, Felipe Marcelino, Yuchou Chang",
    title:
      "STEG-AIW: Spatio-Temporal Gating and Adaptive-Timestep Inference for Efficient Spiking Neural Networks",
    journal: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2026",
    month: "March",
    year: 2026,
    pages: "",
    url: "https://openaccess.thecvf.com/content/WACV2026/papers/Saju_STEG-AIW_Spatio-Temporal_Gating_and_Adaptive-Timestep_Inference_for_Efficient_Spiking_Neural_WACV_2026_paper.pdf",
    doi: "10.1109/WACV61042.2026.00407",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title: "Large Multimodal Model for Simulating Big Training Data in Deep PROPELLER MRI",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieee-hpec.org/wp-content/uploads/2025/02/HPEC2024-89.pdf",
    doi: "",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title: "Evaluating the Impact of Noisy Blades on PROPELLER MRI Reconstruction Quality",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieee-hpec.org/wp-content/uploads/2025/02/HPEC2024-85.pdf",
    doi: "",
  },
  {
    type: "conference",
    authors: "Yuchou Chang, Huy Anh Pham, Gulfam Ahmed Saju",
    title: "LLM-Based Task Planning for Navigating Companion Robot from Emotion Signals",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieee-hpec.org/wp-content/uploads/2025/02/70.pdf",
    doi: "",
  },
  {
    type: "conference",
    authors: "Girish Babu Reddy, Gulfam Ahmed Saju, Yi Liu, Yuchou Chang",
    title:
      "Quantum Computing for Data Calibration in Parallel Magnetic Resonance Imaging Reconstruction",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieeexplore.ieee.org/abstract/document/10938445",
    doi: "10.1109/HPEC62836.2024.10938445",
  },
  {
    type: "conference",
    authors: "Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang",
    title: "Transfer Learning Assisted Parameter Selection for Water-Fat Separation in Dixon MRI",
    journal: "28th IEEE High Performance Extreme Computing (HPEC)",
    month: "",
    year: 2024,
    pages: "",
    url: "",
    doi: "",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title: "Ensemble CycleGAN for Retrospective Rigid Motion Correction in MRI",
    journal: "46th IEEE Engineering in Medicine and Biology Conference (EMBC)",
    month: "July",
    year: 2024,
    pages: "",
    url: "https://ieeexplore.ieee.org/abstract/document/10782023",
    doi: "10.1109/EMBC53108.2024.10782023",
  },
  {
    type: "conference",
    authors: "Yuchou Chang, Zhiqiang Li, Huy Anh Pham, Gulfam Ahmed Saju",
    title:
      "Intelligent Agent Planning for Optimizing Parallel MRI Reconstruction via a Large Language Model",
    journal: "46th IEEE Engineering in Medicine and Biology Conference (EMBC)",
    month: "",
    year: 2024,
    pages: "",
    url: "https://ieeexplore.ieee.org/abstract/document/10782629",
    doi: "10.1109/EMBC53108.2024.10782629",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Alan Okinaka, Yuchou Chang",
    title:
      "Exploiting Generative Adversarial Networks in Joint Sensitivity Encoding for Enhanced MRI Reconstruction",
    journal: "18th International Symposium on Visual Computing (ISVC)",
    month: "",
    year: 2023,
    pages: "",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-47966-3_35",
    doi: "10.1007/978-3-031-47966-3_35",
  },
  {
    type: "conference",
    authors: "Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang",
    title:
      "Automating Kernel Size Selection in MRI Reconstruction via a Transparent and Interpretable Search Approach",
    journal: "18th International Symposium on Visual Computing (ISVC)",
    month: "",
    year: 2023,
    pages: "",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-47966-3_33",
    doi: "10.1007/978-3-031-47966-3_33",
  },
  {
    type: "conference",
    authors: "Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang",
    title: "Enhancing Image Reconstruction via Phase-Constrained Data in an Iterative Process",
    journal: "18th International Symposium on Visual Computing (ISVC)",
    month: "",
    year: 2023,
    pages: "",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-47969-4_32",
    doi: "10.1007/978-3-031-47969-4_32",
  },
  {
    type: "conference",
    authors:
      "Gulfam Ahmed Saju, Nazrul Islam, Md. Moshgul Bhuiyan, Narayan Ranjan Chakraborty, Bimal Chandra Das, and Manoranjan Dash",
    title:
      "RECH-LEACH: A New Cluster Head Selection Algorithm of LEACH on the Basis of Residual Energy for Wireless Sensor Network",
    journal: "Soft Computing and Signal Processing: Proceedings of 3rd ICSCSP 2020",
    month: "",
    year: 2020,
    pages: "",
    url: "https://link.springer.com/chapter/10.1007/978-981-33-6912-2_47",
    doi: "10.1007/978-981-33-6912-2_47",
  },
  {
    type: "conference",
    authors: "Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang",
    title:
      "MRI-AgentNet: A Vision Language Models-Based Multi-Agent AI System for Solving Inverse Problems in MRI",
    journal: "2026 IEEE International Conference on AI and Data Analytics (ICAD)",
    month: "",
    year: 2026,
    pages: "",
    url: "",
    doi: "",
  },

  // ── Under review ──────────────────────────────────────────────────────
  {
    type: "under-review",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Marjan Akhi, Yuchou Chang",
    title:
      "Attention-UNN: Attention-Enhanced Untrained Neural Networks for Accelerated MRI Reconstruction",
    journal: "Magnetic Resonance Materials in Physics, Biology and Medicine (Under Review)",
    month: "",
    year: "",
    pages: "",
    url: "",
    doi: "",
  },

  // ── Abstracts ─────────────────────────────────────────────────────────
  {
    type: "abstract",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang",
    title:
      "Joint Estimation of Coil Sensitivity and Image by Using Untrained Neural Network without External Training Data",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 3893",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang",
    title: "Improving JSENSE Using an Initial Reconstruction with an Unrolled Deep Network Prior",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 4037",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang",
    title: "Incorporating Untrained Neural Network Prior in PROPELLER Imaging",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 4038",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Yuchou Chang, Gulfam Ahmed Saju, Jasina Yu, Reza Abiri, Zhiqiang Li, and Tianming Liu",
    title: "Suppressing MRI Background Noise via Modeling Phase Variations",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 2031",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Yuchou Chang, Gulfam Ahmed Saju, Jasina Yu, Reza Abiri, Zhiqiang Li, and Tianming Liu",
    title: "Phase-Constrained Reconstruction for Enhancing PROPELLER SNR",
    journal: "International Society for Magnetic Resonance in Medicine Annual Meeting",
    month: "",
    year: 2023,
    pages: "Abstract: 2004",
    url: "",
    doi: "",
  },
  {
    type: "abstract",
    authors: "Gulfam Ahmed Saju, Huy Anh Pham, Yuchou Chang",
    title: "A Triple CycleGAN Model Ensemble for Motion Correction in 7T MR Brain Images",
    journal:
      "14th Scientific Symposium on Clinical Needs, Research Promises and Technical Solutions in Ultrahigh Field Magnetic Resonance",
    month: "",
    year: "",
    pages: "",
    url: "",
    doi: "",
  },
];

export const SECTION_THEME = {
  journal:        { color: "#58a6ff", label: "Journal" },
  conference:     { color: "#a371f7", label: "Conference" },
  abstract:       { color: "#39d0d8", label: "Abstract" },
  "under-review": { color: "#ffa657", label: "Under review" },
};

const ME = ["gulfam ahmed saju", "gulfam a. saju"];

export function isMyName(token) {
  return ME.includes(token.trim().toLowerCase());
}

/** "A, B and C" / "A & B" → ["A", "B", "C"] */
export function splitAuthors(authors) {
  if (!authors) return [];
  return authors
    .replace(/\s*&\s*/g, ", ")
    .replace(/\s+and\s+/gi, ", ")
    .replace(/\s*,\s*/g, ", ")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function formatVenue(pub) {
  const parts = [];
  if (pub.journal) parts.push(pub.journal);
  const details = [
    pub.volume ? `vol. ${pub.volume}` : "",
    pub.issue ? `no. ${pub.issue}` : "",
    pub.pages ? `pp. ${pub.pages}` : "",
  ]
    .filter(Boolean)
    .join(", ");
  if (details) parts.push(details);
  if (pub.month) parts.push(pub.month);
  if (pub.year) parts.push(String(pub.year));
  return parts.join(". ") + (parts.length ? "." : "");
}

export function sortByYearDesc(a, b) {
  return (Number(b.year) || -1) - (Number(a.year) || -1);
}

function baseCiteKey(pub) {
  const first = splitAuthors(pub.authors)[0] || "unknown";
  const last = first.split(/\s+/).pop().toLowerCase().replace(/[^a-z]/g, "");
  const year = pub.year || "nd";
  const word =
    (pub.title.match(/[A-Za-z]{4,}/g) || ["work"])[0].toLowerCase().slice(0, 12);
  return `${last}${year}${word}`;
}

// Two papers can legitimately share author+year+first-word (Saju 2024,
// "Ensemble ..." twice). BibTeX keys must be unique or the second silently
// overwrites the first, so collisions get a/b/c suffixes.
const keyMap = new WeakMap();
(function assignKeys(list) {
  const counts = new Map();
  for (const p of list) {
    const base = baseCiteKey(p);
    counts.set(base, (counts.get(base) || 0) + 1);
  }
  const seen = new Map();
  for (const p of list) {
    const base = baseCiteKey(p);
    if (counts.get(base) === 1) {
      keyMap.set(p, base);
    } else {
      const n = seen.get(base) || 0;
      seen.set(base, n + 1);
      keyMap.set(p, `${base}${String.fromCharCode(97 + n)}`); // a, b, c…
    }
  }
})(publications);

/** Stable, collision-free citation key, e.g. saju2025agentmri */
export function citeKey(pub) {
  return keyMap.get(pub) || baseCiteKey(pub);
}

/** BibTeX escaping for prose fields. Never applied to URLs or DOIs — an
 *  escaped underscore inside a URL produces a broken link. */
function bibEscape(s) {
  return String(s).replace(/([&%$#_])/g, "\\$1");
}

const RAW_FIELDS = new Set(["url", "doi"]);

export function toBibTeX(pub) {
  const kind =
    pub.type === "journal" ? "article" : pub.type === "conference" ? "inproceedings" : "misc";
  const authors = splitAuthors(pub.authors).join(" and ");

  const fields = [
    ["author", authors],
    [kind === "article" ? "journal" : "booktitle", pub.journal],
    // outer braces protect the title's capitalisation from BibTeX styles
    ["title", `{${bibEscape(pub.title)}}`],
    ["volume", pub.volume],
    ["number", pub.issue],
    ["pages", pub.pages],
    ["month", pub.month],
    ["year", pub.year],
    ["doi", pub.doi],
    ["url", pub.url],
  ].filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "");

  const body = fields
    .map(([k, v]) => {
      const val =
        k === "title" ? v : RAW_FIELDS.has(k) ? `{${v}}` : `{${bibEscape(v)}}`;
      return `  ${k.padEnd(9)} = ${val}`;
    })
    .join(",\n");

  return `@${kind}{${citeKey(pub)},\n${body}\n}`;
}

export function allBibTeX(list = publications) {
  return list.map(toBibTeX).join("\n\n");
}

export default publications;
