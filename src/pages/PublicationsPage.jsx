// src/pages/PublicationsPage.jsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Link as MuiLink,
} from '@mui/material';

// Assuming publications data is defined here or imported
// Updated publications data based on user input
export const publications = [
  // Journals
  {
    id: 1, // From user list [1]
    type: 'journal',
    authors: 'Gulfam Ahmed Saju, Alan Okinaka, Marjan Akhi and Yuchou Chang',
    title:
      'An ensemble approach for accelerated and noise-resilient parallel MRI reconstruction utilizing CycleGANs',
    journal: 'Machine Vision and Applications',
    volume: '35',
    issue: '', // Article 136 might go here or in pages depending on journal style
    month: '', // Month not specified, inferred from year
    year: 2024,
    pages: 'Article 136', // Using pages for article number
    url: 'https://link.springer.com/article/10.1007/s00138-024-01617-0', // Left blank as requested
    doi: '10.1007/s00138-024-01617-0',
  },
  {
    id: 2, // From user list [2]
    type: 'journal',
    authors:
      'Gulfam Ahmed Saju, Zhiqiang Li, Hui Mao, Tianming Liu, and Yuchou Chang',
    title: 'Suppressing image blurring of PROPELLER MRI via untrained method',
    journal: 'Physics in Medicine and Biology',
    volume: '68', // Not specified in text
    issue: '17', // Not specified in text
    month: 'August', // Not specified in text
    year: 2023,
    pages: '', // Not specified in text
    url: 'https://iopscience.iop.org/article/10.1088/1361-6560/acebb1/meta', // Left blank as requested
    doi: '10.1088/1361-6560/acebb1', // Corrected DOI from list
  },
  {
    id: 3, // From user list [3]
    type: 'journal',
    authors: 'Gulfam Ahmed Saju, Zhiqiang Li and Yuchou Chang',
    title: 'Improving Deep PROPELLER MRI via Synthetic Blade Augmentation and Enhanced Generalization',
    journal: 'Magnetic Resonance Imaging',
    volume: '108', // Not specified in text
    issue: '', // Not specified in text
    month: 'May', // Not specified in text
    year: 2024,
    pages: '', // Not specified in text
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0730725X24000237', // Left blank as requested
    doi: '10.1016/j.mri.2024.01.017',
  },
  {
    id: 4, // From user list [4]
    type: 'journal',
    authors: 'Yuchou Chang, Zhiqiang Li, Gulfam Ahmed Saju, Hui Mao, and Tianming Liu',
    title: 'Deep Learning-Based Rigid Motion Correction for Magnetic Resonance Imaging: A Survey',
    journal: 'Meta-Radiology',
    volume: '1', // Not specified in text
    issue: '1', // Not specified in text
    month: 'June', // Not specified in text
    year: 2023,
    pages: '', // Not specified in text
    url: 'https://www.sciencedirect.com/science/article/pii/S2950162823000012', // Left blank as requested
    doi: '10.1016/j.metrad.2023.100001',
  },
  // Conferences
  {
    id: 1, // From user list [1] - Conference IDs restart
    type: 'conference',
    authors: 'Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang',
    title: 'Large Multimodal Model for Simulating Big Training Data in Deep PROPELLER MRI',
    journal: '28th IEEE High Performance Extreme Computing (HPEC)', // Conference name in 'journal' field
    volume: '',
    issue: '',
    month: '',
    year: 2024,
    pages: '',
    url: 'https://ieee-hpec.org/wp-content/uploads/2025/02/HPEC2024-89.pdf', // Left blank as requested
    doi: '', // Not specified
  },
  {
    id: 2, // From user list [2]
    type: 'conference',
    authors: 'Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang',
    title: 'Evaluating the Impact of Noisy Blades on PROPELLER MRI Reconstruction Quality',
    journal: '28th IEEE High Performance Extreme Computing (HPEC)',
    volume: '',
    issue: '',
    month: '',
    year: 2024,
    pages: '',
    url: 'https://ieee-hpec.org/wp-content/uploads/2025/02/HPEC2024-85.pdf', // Left blank as requested
    doi: '', // Not specified
  },
  {
    id: 3, // From user list [3]
    type: 'conference',
    authors: 'Yuchou Chang, Huy Anh Pham, Gulfam Ahmed Saju',
    title: 'LLM-Based Task Planning for Navigating Companion Robot from Emotion Signals',
    journal: '28th IEEE High Performance Extreme Computing (HPEC)',
    volume: '',
    issue: '',
    month: '',
    year: 2024,
    pages: '',
    url: 'https://ieee-hpec.org/wp-content/uploads/2025/02/70.pdf', // Left blank as requested
    doi: '', // Not specified
  },
  {
    id: 4, // From user list [4]
    type: 'conference',
    authors: 'Girish Babu Reddy, Gulfam Ahmed Saju, Yi Liu, Yuchou Chang',
    title: 'Quantum Computing for Data Calibration in Parallel Magnetic Resonance Imaging Reconstruction',
    journal: '28th IEEE High Performance Extreme Computing (HPEC)',
    volume: '',
    issue: '',
    month: '',
    year: 2024,
    pages: '',
    url: 'https://ieeexplore.ieee.org/abstract/document/10938445', // Left blank as requested
    doi: '10.1109/HPEC62836.2024.10938445', // Not specified
  },
  {
    id: 5, // From user list [5]
    type: 'conference',
    authors: 'Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang',
    title: 'Transfer Learning Assisted Parameter Selection for Water-Fat Separation in Dixon MRI',
    journal: '28th IEEE High Performance Extreme Computing (HPEC)',
    volume: '',
    issue: '',
    month: '',
    year: 2024,
    pages: '',
    url: '', // Left blank as requested
    doi: '', // Not specified
  },
  {
    id: 6, // From user list [6]
    type: 'conference',
    authors: 'Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang',
    title: 'Ensemble CycleGAN for Retrospective Rigid Motion Correction in MRI',
    journal: '46th IEEE Engineering in Medicine and Biology Conference (EMBC)',
    volume: '',
    issue: '',
    month: 'July',
    year: 2024,
    pages: '',
    url: 'https://ieeexplore.ieee.org/abstract/document/10782023', // Left blank as requested
    doi: '10.1109/EMBC53108.2024.10782023', // Not specified
  },
  {
    id: 7, // From user list [7]
    type: 'conference',
    authors: 'Yuchou Chang, Zhiqiang Li, Huy Anh Pham, Gulfam Ahmed Saju',
    title: 'Intelligent Agent Planning for Optimizing Parallel MRI Reconstruction via a Large Language Model',
    journal: '46th IEEE Engineering in Medicine and Biology Conference (EMBC)',
    volume: '',
    issue: '',
    month: '',
    year: 2024,
    pages: '',
    url: 'https://ieeexplore.ieee.org/abstract/document/10782629', // Left blank as requested
    doi: '10.1109/EMBC53108.2024.10782629', // Not specified
  },
  {
    id: 8, // From user list [8]
    type: 'conference',
    authors: 'Gulfam Ahmed Saju, Alan Okinaka, Yuchou Chang',
    title: 'Exploiting Generative Adversarial Networks in Joint Sen-sitivity Encoding for Enhanced MRI Reconstruction',
    journal: '18th International Symposium on Visual Computing (ISVC)',
    volume: '',
    issue: '',
    month: '',
    year: 2023,
    pages: '', // Could parse from DOI link if needed
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-47966-3_35', // Left blank as requested
    doi: '10.1007/978-3-031-47966-3_35',
  },
  {
    id: 9, // From user list [9]
    type: 'conference',
    authors: 'Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang',
    title: 'Automating Kernel Size Selection in MRI Reconstruction via a Transparent and Interpretable Search Approach',
    journal: '18th International Symposium on Visual Computing (ISVC)',
    volume: '',
    issue: '',
    month: '',
    year: 2023,
    pages: '',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-47966-3_33', // Left blank as requested
    doi: '10.1007/978-3-031-47966-3_33',
  },
  {
    id: 10, // From user list [10]
    type: 'conference',
    authors: 'Alan Okinaka, Gulfam Ahmed Saju, Yuchou Chang',
    title: 'Enhancing Image Reconstruction via Phase-Constrained Data in an Iterative Process',
    journal: '18th International Symposium on Visual Computing (ISVC)',
    volume: '',
    issue: '',
    month: '',
    year: 2023,
    pages: '',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-47969-4_32', // Left blank as requested
    doi: '10.1007/978-3-031-47969-4_32',
  },
   {
    id: 11, // From user list [11]
    type: 'conference', // Or book chapter depending on context
    authors: 'Gulfam Ahmed Saju, Nazrul Islam, Md. Moshgul Bhuiyan, Narayan Ranjan Chakraborty, Bimal Chandra Das, and Manoranjan Dash',
    title: 'RECH-LEACH: A New Cluster Head Selection Algorithm of LEACH on the Basis of Residual Energy for WIRELESS Sensor Network',
    journal: 'Soft Computing and Signal Processing: Proceedings of 3rd ICSCSP 2020', // Proceedings title
    volume: '', // Part of book series?
    issue: '',
    month: '',
    year: 2020, // Year inferred from proceedings title
    pages: '', // Could parse from DOI link if needed
    url: 'https://link.springer.com/chapter/10.1007/978-981-33-6912-2_47', // Left blank as requested
    doi: '10.1007/978-981-33-6912-2_47',
  },
  // Add 'under-review' items here if needed, e.g.:
  // {
  //   id: 1, // Restart ID for this type
  //   type: 'under-review',
  //   authors: 'Gulfam Ahmed Saju, Author X',
  //   title: 'Exciting New Research Title',
  //   journal: 'Journal of Future Studies (Under Review)', // Indicate status
  //   volume: '', issue: '', month: '', year: '', pages: '', url: '', doi: '',
  // },
  {
    id: 1, // Restart ID for this type
    type: 'under-review',
    authors: 'Gulfam Ahmed Saju, Zhiqiang Li, Marjan Akhi, Yuchou Chang',
    title: 'Attention-UNN: Attention-Enhanced Untrained Neural Networks for Accelerated MRI Reconstruction',
    journal: 'Journal of Imaging Informatics in Medicine', // Indicate status
    volume: '', issue: '', month: '', year: '', pages: '', url: '', doi: '',
  },
  {
    id: 2, // Restart ID for this type
    type: 'under-review',
    authors: 'Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang',
    title: 'AgentMRI: A Vison Language Model-Powered AI System for Self-Regulating MRI Reconstruction with Multiple Degradations',
    journal: 'Journal of Imaging Informatics in Medicine', // Indicate status
    volume: '', issue: '', month: '', year: '', pages: '', url: '', doi: '',
  },
  {
    id: 3, // Restart ID for this type
    type: 'under-review',
    authors: 'Gulfam Ahmed Saju, Marjan Akhi, Yuchou Chang',
    title: 'MRI-AgentNet: A Vision Language Models-Based Multi-Agent AI System for Solving Inverse Problems in MRI',
    journal: 'International Conference on Computer Vision (ICCV)', // Indicate status
    volume: '', issue: '', month: '', year: '2025', pages: '', url: '', doi: '',
  },
  // --- Conference Abstracts ---
  {
    id: 1, // Restart ID for this type
    type: 'abstract',
    authors: 'Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang',
    title: 'Joint Estimation of Coil Sensitivity and Image by Using Untrained Neural Network without External Training Data',
    journal: 'International Society for Magnetic Resonance in Medicine Annual Meeting', // Conference name
    volume: '', issue: '', month: '',
    year: '2023',
    pages: 'Abstract: 3893', // Abstract number
    url: '', doi: '',
  },
  {
    id: 2,
    type: 'abstract',
    authors: 'Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang',
    title: 'Improving JSENSE Using an Initial Reconstruction with an Unrolled Deep Network Prior',
    journal: 'International Society for Magnetic Resonance in Medicine Annual Meeting',
    volume: '', issue: '', month: '',
    year: '2023',
    pages: 'Abstract: 4037',
    url: '', doi: '',
  },
  {
    id: 3,
    type: 'abstract',
    authors: 'Gulfam Ahmed Saju, Zhiqiang Li, Reza Abiri, Tianming Liu, and Yuchou Chang',
    title: 'Incorporating Untrained Neural Network Prior in PROPELLER Imaging',
    journal: 'International Society for Magnetic Resonance in Medicine Annual Meeting',
    volume: '', issue: '', month: '',
    year: '2023',
    pages: 'Abstract: 4038',
    url: '', doi: '',
  },
  {
    id: 4,
    type: 'abstract',
    authors: 'Yuchou Chang, Gulfam Ahmed Saju, Jasina Yu, Reza Abiri, Zhiqiang Li, and Tianming Liu',
    title: 'Suppressing MRI Background Noise via Modeling Phase Variations',
    journal: 'International Society for Magnetic Resonance in Medicine Annual Meeting',
    volume: '', issue: '', month: '',
    year: '2023',
    pages: 'Abstract: 2031',
    url: '', doi: '',
  },
  {
    id: 5,
    type: 'abstract',
    authors: 'Yuchou Chang, Gulfam Ahmed Saju, Jasina Yu, Reza Abiri, Zhiqiang Li, and Tianming Liu',
    title: 'Phase-Constrained Reconstruction for Enhancing PROPELLER SNR',
    journal: 'International Society for Magnetic Resonance in Medicine Annual Meeting',
    volume: '', issue: '', month: '',
    year: '2023',
    pages: 'Abstract: 2004',
    url: '', doi: '',
  },
  {
    id: 6,
    type: 'abstract',
    authors: 'Gulfam Ahmed Saju, Huy Anh Pham, Yuchou Chang',
    title: 'A Triple CycleGAN Model Ensemble for Motion Correction in 7T MR Brain Images',
    journal: '14th Scientific Symposium on Clinical Needs, Research Promises and Technical Solutions in Ultrahigh Field Magnetic Resonance',
    volume: '', issue: '', month: '',
    year: '', // Year not specified in text
    pages: '', // Abstract number not specified
    url: '', doi: '',
  },
];


// --- Updated Section Component ---
function Section({ title, items }) {
  if (!items || !items.length) return null; // Added check for items existence

  // Determine starting ID for the section based on type
  // This assumes IDs provided by user are unique *within* each type
  const startId = items[0]?.id || 1;

  return (
    <Box sx={{ mt: 4 }}>
      {/* Section header with blue color and subtle underline */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontFamily: 'Roboto, sans-serif',
          borderBottom: '1px solid',
          borderColor: 'divider',
          pb: 1,
          color: 'primary.main', // Use MUI theme's primary blue color
          // Or use a specific blue: color: '#1976d2',
        }}
      >
        {title}
      </Typography>

      {/* List each publication */}
      {items.map((pub, index) => (
        <Box key={pub.id} sx={{ mb: 2 }}> {/* Reduced bottom margin */}
          {/* Single Typography component for the entire reference line */}
          <Typography
            variant="body1" // Use body1 for slightly larger text if desired
            sx={{
              fontFamily: 'Arial, sans-serif', // Consistent font
              lineHeight: 1.6, // Adjust line height for readability
            }}
          >
            {/* Publication ID - Use the ID from the data */}
            [{pub.id}]&nbsp;

            {/* Authors with bolding */}
            {pub.authors.split(', ').map((name, i, arr) => (
              <React.Fragment key={name + i}> {/* More robust key */}
                <Box
                  component="span"
                  sx={{ fontWeight: name === 'Gulfam Ahmed Saju' ? 700 : 'inherit' }} // Use 'inherit' or 400
                >
                  {name}
                </Box>
                {i < arr.length - 1 ? ', ' : '. '} {/* Add period after last author */}
              </React.Fragment>
            ))}

            {/* Title in quotes */}
            “{pub.title}.”{' '} {/* Add period after title */}

            {/* Journal/Conference details (italicized) */}
            <Box component="span" sx={{ fontStyle: 'italic' }}>
              {pub.journal}
              {pub.volume && `, vol. ${pub.volume}`}
              {pub.issue && `, no. ${pub.issue}`}
              {pub.pages && `, pp. ${pub.pages}`} {/* Use pp. for pages */}
            </Box>

            {/* Year and month */}
            {pub.month && `, ${pub.month}`}
            {`. ${pub.year}.`}{' '} {/* Period after year */}

            {/* Links */}
            {pub.url && pub.url !== '#' && ( // Added check for '#' url
              <MuiLink
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ fontFamily: 'inherit', fontSize: '0.9em', mx: 0.5 }} // Inherit font, adjust size/margin
              >
                [Link]
              </MuiLink>
            )}
            {pub.doi && (
              <MuiLink
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ fontFamily: 'inherit', fontSize: '0.9em', mx: 0.5 }} // Inherit font, adjust size/margin
              >
                [DOI]
              </MuiLink>
            )}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}


// --- Main Publications Page Component ---
export default function PublicationsPage() {
  // Ensure publications array exists before filtering
  const safePublications = Array.isArray(publications) ? publications : [];

  const journals = safePublications.filter(p => p.type === 'journal');
  const conferences = safePublications.filter(p => p.type === 'conference');
  // --- Filter for abstracts ---
  const abstracts = safePublications.filter(p => p.type === 'abstract');
  const underReview = safePublications.filter(p => p.type === 'under-review');

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}> {/* py adds padding top/bottom */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: 'Roboto, sans-serif' }}
      >
        Publications
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontFamily: 'Arial, sans-serif' }}>
        Below is a categorized list of my peer-reviewed journals, conference papers, conference abstracts, and manuscripts currently under review.
      </Typography>

      {/* Render sections */}
      {/* --- Updated Section Titles --- */}
      <Section title="Peer-Reviewed Journal Articles" items={journals} />
      <Section title="Peer-Reviewed Conference Papers" items={conferences} />
      {/* --- Added Abstracts Section (Corrected items prop) --- */}
      <Section title="Conference Abstracts" items={abstracts} />
      <Section title="Under Review" items={underReview} />

    </Container>
  );
}
