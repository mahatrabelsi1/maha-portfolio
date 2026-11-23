// All site content lives here. Edit this file to update the portfolio.
// Paths to files in /public are written without a leading slash
// (e.g. "images/projects/foo.png") so they work under the /maha-portfolio/ base.

export const profile = {
  name: "Maha Trabelsi",
  title: "Research Master's Student in Computer Science · AI for Medical Imaging & Trustworthy ML",
  current:
    "Currently: DAAD AI GlobalMinds exchange researcher at TU Chemnitz, Germany. Seeking a funded PhD from Fall 2027.",
  location: "Chemnitz, Germany · Tunis, Tunisia",
  cvPath: "Maha_Trabelsi_CV_Rech.pdf",
  // Optional professional headshot, e.g. "images/profile/maha.jpg". Leave empty for no photo.
  photo: "",
  about: [
    "I am a research Master's student in Intelligent Systems in Imaging and Artificial Vision at the University of Tunis El Manar, currently a DAAD-funded exchange researcher at TU Chemnitz.",
    "My work centres on how AI systems are evaluated and made safe enough for clinical use: benchmark design for ML models and LLMs, robustness to noisy or missing data, and interpretable, safety-first decision support.",
    "My research interests are model evaluation and benchmarking, trustworthy AI, multimodal learning with missing modalities, medical image analysis, and biomedical signal processing.",
  ],
  interests: [
    "Model evaluation & benchmarking",
    "Trustworthy, safety-first AI",
    "Multimodal learning with missing modalities",
    "Medical image analysis",
    "Biomedical signals (PPG, BVP, blood pressure)",
  ],
};

export const links = {
  email: "maha.21.trabelsi@gmail.com",
  scholar: "https://scholar.google.com/citations?user=T8kj95EAAAAJ",
  github: "https://github.com/mahatrabelsi1",
  linkedin: "https://www.linkedin.com/in/maha-trabelssi-48bb02206",
  orcid: "https://orcid.org/0009-0000-1735-4014",
  orcidId: "0009-0000-1735-4014",
};

export const publications = [
  {
    title: "GNN-CB: A Graph Neural Network Competition Benchmark for Human and LLM Evaluation",
    authors: "Co-author",
    venue: "EMNLP 2026 (Main Conference)",
    year: "2026",
    note: "Designed and built the “Node Classification Under Noise” competition, one of 18 benchmark tasks used in both the human- and LLM-evaluation tracks (9 LLMs compared with human participants).",
    links: [
      { label: "Competition code", url: "https://github.com/mahatrabelsi1/GNN-MVP-Node-Classification-Under-Noise" },
    ],
  },
  {
    title:
      "A Rule-Based, NLP-Assisted Triage Support System with Safety-First Design for Low-Resource Clinical Settings",
    authors: "M. Trabelsi (sole author)",
    venue: "ICAAD 2026, International Conference on AI Across Disciplines · Health Sciences track, #103",
    year: "2026",
    note: "Abstract accepted and presented; full paper submitted to the proceedings.",
    links: [{ label: "Code", url: "https://github.com/mahatrabelsi1/rural-triage-kiosk" }],
  },
  {
    title:
      "Deep learning for multimodal Alzheimer's disease neuroimaging under missing modalities: a systematic review",
    authors: "M. Trabelsi, I. Lassoued",
    venue: "In preparation",
    year: "",
    note: "",
    links: [],
  },
];

export const research = [
  {
    title: "Emotion recognition from physiological signals",
    org: "TU Chemnitz, Chair of Measurement and Sensor Technology (Prof. Olfa Kanoun) · DAAD AI GlobalMinds",
    period: "Nov 2026 – Mar 2027",
    description:
      "Recognising emotional states from blood pressure, PPG and BVP signals: signal preprocessing and filtering, heart-rate and pulse-wave feature extraction, and ML classification.",
  },
  {
    title: "Extending GNN-CB to computer vision",
    org: "Collaborative project · advisor Dr. Islem Rekik (BASIRA Lab, Imperial College London)",
    period: "Oct 2026 – present",
    description:
      "Building image-based competitions to compare LLMs and agentic AI with human participants, including blood-cell detection (BCCD) and hippocampus segmentation (Medical Segmentation Decathlon, Task 04).",
  },
  {
    title: "Systematic review: deep learning for Alzheimer's disease",
    org: "ISI / LIMTIC Laboratory · supervisor Dr. Imen Lassoued",
    period: "2026 – present",
    description:
      "PRISMA-based review of how multimodal neuroimaging models (MRI, PET) handle missing modalities, how robustness is validated, and whether uncertainty or explanations are reported. 1,695 records screened.",
  },
  {
    title: "RISE: Graph Neural Networks for Rising Stars",
    org: "Dr. Islem Rekik, BASIRA Lab, Imperial College London (online)",
    period: "Jan – Mar 2026",
    description:
      "Completed with Highest Distinction (top 10%). Designed DiaGraph, a node-classification competition under noisy and imbalanced labels, later adopted in GNN-CB (EMNLP 2026).",
  },
];

export const projects = [
  {
    name: "Rural Triage Kiosk",
    image: "images/projects/rural-triage-kiosk.png",
    description:
      "Offline voice/text triage kiosk for rural clinics: auditable rule engine plus negation-aware NLP. 78 automated tests, including 24 safety-regression tests; runs on CPU only.",
    tags: ["FastAPI", "React", "NLP", "Whisper"],
    repo: "https://github.com/mahatrabelsi1/rural-triage-kiosk",
  },
  {
    name: "DiaGraph",
    image: "images/projects/diagraph.svg",
    description:
      "Kaggle-style node-classification competition under noisy, imbalanced labels with Macro-F1 scoring and an automated GitHub Actions leaderboard. Adopted in GNN-CB.",
    tags: ["GNN", "PyTorch Geometric", "GitHub Actions"],
    repo: "https://github.com/mahatrabelsi1/GNN-MVP-Node-Classification-Under-Noise",
  },
  {
    name: "Pneumonia Detection with CNNs",
    image: "images/projects/pneumonia-cnn.svg",
    description:
      "Chest X-ray classification pipeline covering preprocessing, augmentation, CNN training and evaluation.",
    tags: ["Python", "CNN", "Medical Imaging"],
    repo: "https://github.com/mahatrabelsi1/pneumonia_cnn_project",
  },
  {
    name: "GreenChemAI",
    image: "images/projects/greenchem-ai-solvents.png",
    description:
      "SMILES parsing, molecule rendering and solvent scoring for toxicity, biodegradability and regulatory risk. 1st place, InNOChem Hackathon 2026.",
    tags: ["Python", "RDKit", "AI for Chemistry"],
    repo: "https://github.com/mahatrabelsi1/GreenChemAI",
  },
  {
    name: "SMS Spam Classifier",
    image: "images/projects/sms-spam-classifier.png",
    description: "TF-IDF and logistic regression classifier, deployed as a Gradio app on Hugging Face Spaces.",
    tags: ["scikit-learn", "Gradio", "Hugging Face"],
    repo: "https://github.com/mahatrabelsi1/sms-spam-classifier",
  },
];

export const experience = [
  {
    role: "AI & Computer Science Instructor",
    org: "Tunisian Order of Engineers, Tunis",
    period: "Jul 2026 – present",
    description: "Teaching artificial intelligence and computer science courses to engineering trainees.",
  },
  {
    role: "Mobile & AR Development Intern (Final Year Project)",
    org: "Octomiro, Tunis",
    period: "Feb – Jun 2025",
    description: "Cross-platform mobile features with Flutter and Unity, AR integration and real-time data with Firebase. Graded 18.83/20.",
  },
  {
    role: "Frontend Developer Intern",
    org: "SASCODE, Tunis",
    period: "Mar – Aug 2024",
    description: "React.js interfaces for booking and tournament-management platforms, integrated with backend APIs.",
  },
];

export const education = [
  {
    degree: "Research Master's in Computer Science: Intelligent Systems in Imaging and Artificial Vision (SIIVA)",
    org: "Higher Institute of Computer Science (ISI), University of Tunis El Manar",
    period: "2025 – Jun 2027 (expected)",
    detail: "Ranked 7th of 27 in year 1. Thesis supervisor: Dr. Imen Lassoued.",
  },
  {
    degree: "Exchange Student, Computer Science",
    org: "Chemnitz University of Technology (TU Chemnitz), Germany",
    period: "Winter term 2026/27",
    detail: "Alongside the DAAD-funded AI GlobalMinds research stay.",
  },
  {
    degree: "Bachelor's in Computer Science: Software Engineering and Information Systems",
    org: "Higher Institute of Computer Science (ISI), University of Tunis El Manar",
    period: "2022 – 2025",
    detail: "Final-year average 15.31/20.",
  },
];

export const training = [
  "DAAD Arab-German Summer School on Biomedical Imaging with Deep Learning (BILD 2025)",
];

export const awards = [
  { title: "Highest Distinction (top 10%), RISE GNN programme, Imperial College London", year: "2026" },
  { title: "DAAD scholarship, AI GlobalMinds research stay, TU Chemnitz", year: "2026" },
  { title: "1st Place, InNOChem Hackathon (AI for Chemistry)", year: "2026" },
  { title: "1st Place, WIE Wave Challenge, IEEE WIE Affinity Group", year: "2024" },
  { title: "2nd Place, Healthcare track, “L'idée à la Startup” Hackathon", year: "" },
  { title: "3rd Place, Hult Prize ISI OnCampus", year: "" },
];

export const leadership = [
  "Tunisian Scouts: youth programme facilitator and member of the National International Relations Committee.",
  "WAGGGS: contributing writer for the World Thinking Day 2026–2027 activity pack.",
  "Chairwoman, ISI Geeks · General Secretary, IEEE ISI Student Branch.",
  "Tunisian Red Crescent volunteer, including national COVID-19 response logistics.",
  "Graphic design for print and digital materials (layout, typography, visual communication).",
];

export const nav = [
  { id: "about", label: "About" },
  { id: "publications", label: "Publications" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];
