// src/data/research.js
// Single definition of the research areas, shared by HomePage and ResearchPage
// so the two never drift apart. `viz` selects the canvas visualisation.

import { C } from "../theme";

export const researchAreas = [
  {
    id: "recon",
    viz: "kspace",
    fn: "acceleratedMRI",
    title: "Accelerated MRI Reconstruction",
    short:
      "AI methods that accelerate MRI acquisition while preserving clinically meaningful structure and quantitative fidelity.",
    long:
      "Undersampling k-space is the most direct way to shorten a scan, but it folds the image onto itself. I develop reconstruction methods — untrained network priors, joint sensitivity estimation, and ensemble generative models — that recover diagnostic detail from far fewer measurements, without requiring large external training corpora.",
    caption:
      "Cartesian k-space fills from the centre outward; the reconstruction resolves as the acceleration factor drops.",
    tags: ["Reconstruction", "k-space", "Undersampling", "JSENSE", "Untrained Priors"],
    accent: C.number,
  },
  {
    id: "motion",
    viz: "propeller",
    fn: "motionCorrection",
    title: "Motion & Artifact Correction",
    short:
      "Robust correction of motion-induced artifacts to reduce rescans and stabilise downstream analysis.",
    long:
      "Patient motion is a leading cause of non-diagnostic scans. I work on PROPELLER-based acquisition and generative correction — ensemble CycleGANs, synthetic blade augmentation, and physics-guided models — to suppress blurring and ghosting after the fact, so a corrupted scan can be salvaged rather than repeated.",
    caption:
      "PROPELLER blades rotate through k-space; inter-blade motion produces ghosting, then registration resolves it.",
    tags: ["PROPELLER MRI", "CycleGAN", "Generative AI", "Rigid Motion", "Robustness"],
    accent: C.func,
  },
  {
    id: "agents",
    viz: "agents",
    fn: "agentMRI",
    title: "Foundation Models & AI Agents",
    short:
      "Agentic systems that interpret MRI data, route tasks, and integrate foundation models with specialised domain experts.",
    long:
      "Reconstruction pipelines still depend on a human choosing the right method for the right corruption. AgentMRI uses a vision-language model to inspect the data, identify the degradation present, dispatch the appropriate specialist model, and verify the result — closing the loop into a self-regulating pipeline that handles multiple simultaneous degradations.",
    caption:
      "A vision-language router classifies the degradation, dispatches specialist models, and gates on reconstruction quality.",
    tags: ["Foundation Models", "VLM", "AI Agents", "Automated Pipelines", "AgentMRI"],
    accent: C.green,
  },
  {
    id: "spiking",
    viz: "spiking",
    fn: "spikeNets",
    title: "Spiking Neural Networks",
    short:
      "Brain-inspired, compute-efficient temporal inference for next-generation AI workloads.",
    long:
      "Spiking networks carry information in event timing rather than dense activations, which makes them dramatically cheaper on the right hardware. My work on spatio-temporal gating and adaptive-timestep inference lets a network spend fewer timesteps on easy inputs and more on hard ones, cutting energy without giving up accuracy.",
    caption:
      "Membrane potentials integrate toward threshold, fire, and reset — the spike raster below accumulates the events.",
    tags: ["SNN", "Efficient Inference", "Temporal Models", "STEG-AIW", "Neuromorphic"],
    accent: C.variable,
  },
];

export default researchAreas;
