import {
  BrainCircuit,
  Code2,
  GraduationCap,
  HandHeart,
  Palette,
} from "lucide-react";

export const profile = {
  name: "Maha Trabelsi",
  title: "Data Science Master's Student | Developer | Scout Leader | Graphic Designer",
  location: "Tunisia",
  email: "maha.21.trabelsi@gmail.com",
  phone: "+216 21 535 271",
  cvPath: "Maha_Trabelsi_CV_Rech.pdf",
  heroImage: "images/profile/maha-mahaverse-hero.png",
  intro:
    "I build impact-first tech and visual stories at the intersection of AI, development, youth leadership, and design. The short version: I can debug a React interface, study graph neural networks, facilitate a room of 100+ scouts, design the event visuals, and still somehow start a new idea at 2AM.",
  stats: [
    { value: "100+", label: "Workshop participants guided" },
    { value: "80+", label: "Girls led in regional camp" },
    { value: "4", label: "Maha modes unlocked" },
    { value: "∞", label: "Ideas started after midnight" },
  ],
};

export const portals = [
  {
    id: "student",
    title: "Student Maha",
    icon: GraduationCap,
    color: "from-mint to-plasma",
    tagline: "Research mode, notebooks open, curiosity fully charged.",
    unlock: "Decode the learning path",
    sections: ["Education", "Research", "Certifications", "Skills"],
  },
  {
    id: "builder",
    title: "Developer Maha",
    icon: Code2,
    color: "from-neon to-amber",
    tagline: "React, Flutter, FastAPI, AI systems, and the sacred art of shipping.",
    unlock: "Compile the project engine",
    sections: ["Projects", "Hackathons", "Experience", "Tech Stack"],
  },
  {
    id: "scout",
    title: "Scout & Volunteer Maha",
    icon: HandHeart,
    color: "from-amber to-mint",
    tagline: "Leadership, safeguarding, community work, and youth empowerment.",
    unlock: "Light the camp signal",
    sections: ["Scouts", "Clubs", "Red Crescent", "Workshops"],
  },
  {
    id: "designer",
    title: "Graphic Designer Maha",
    icon: Palette,
    color: "from-plasma to-neon",
    tagline: "Visual systems, event communication, print work, club design, and brand energy.",
    unlock: "Open the design board",
    sections: ["Graphic Design", "Print", "Clubs", "Creative Direction"],
  },
];

export const education = [
  {
    school: "Higher Institute of Computer Science Ariana (ISI Ariana)",
    degree: "Master's Degree (Research) in Data Science",
    focus: "Artificial Intelligence, Machine Learning, Data Analysis",
    place: "Ariana, Tunisia",
  },
  {
    school: "Higher Institute of Computer Science Ariana (ISI Ariana)",
    degree: "Bachelor's Degree in Computer Science",
    focus: "Software Engineering and Information Systems",
    place: "Ariana, Tunisia",
  },
  {
    school: "Taha Hussein Megrine High School",
    degree: "Baccalaureate in Informatics",
    focus: "Computer science foundations",
    place: "Megrine, Tunisia",
  },
];

export const projects = [
  {
    name: "AI-Based Medical Triage System",
    type: "AI for Healthcare",
    category: "Healthcare AI",
    repo: "https://github.com/mahatrabelsi1/rural-triage-kiosk",
    image: "images/projects/rural-triage-kiosk.png",
    description:
      "An AI-assisted decision-support kiosk for low-resource healthcare settings, with a multi-step patient flow, symptom capture, clarification, result guidance, and a virtual nurse companion panel.",
    tags: ["NLP", "Decision Support", "Healthcare AI", "Virtual Nurse", "Triage"],
  },
  {
    name: "Critical Power Intelligence System",
    type: "Resource Optimization",
    category: "Civic + Sustainability",
    repo: "https://github.com/mahatrabelsi1/stitch_critical_power_triage_system",
    image: "images/projects/critical-power-cpis.jpeg",
    description:
      "A critical power intelligence dashboard for reserve outlook, solar forecasting, battery status, demand trends, and recommended actions during constrained infrastructure scenarios.",
    tags: ["FastAPI", "React", "Optimization", "Solar Forecast", "Resilience"],
  },
  {
    name: "DiaGraph",
    type: "Graph Machine Learning",
    category: "AI / ML",
    repo: "https://github.com/mahatrabelsi1/GNN-MVP-Node-Classification-Under-Noise",
    description:
      "A graph ML framework for node classification under noisy and imbalanced conditions, with reproducible benchmarks and GitHub Actions leaderboard automation.",
    tags: ["GNN", "Macro F1", "GitHub Actions", "Research"],
  },
  {
    name: "SMS Spam Classifier",
    type: "NLP Pipeline",
    category: "AI / ML",
    repo: "https://github.com/mahatrabelsi1/sms-spam-classifier",
    image: "images/projects/sms-spam-classifier.png",
    description:
      "A deployed SMS classification app on Hugging Face Spaces using TF-IDF and Logistic Regression, with message input, examples, prediction flow, and a clear spam-score intuition.",
    tags: ["Python", "TF-IDF", "Logistic Regression", "Hugging Face", "Gradio"],
  },
  {
    name: "EcoHunt AR",
    type: "Mobile + AR",
    category: "Web + Mobile",
    repo: "https://github.com/mahatrabelsi1/EcoHunt-AR",
    image: "images/projects/ecohunt-ar-3d.png",
    description:
      "A Flutter-based AR experience with environmental exploration energy, camera interaction, and 3D objects that appear in the real world for playful discovery moments.",
    tags: ["Dart", "Flutter", "AR", "3D Objects", "Mobile"],
  },
  {
    name: "GreenChemAI",
    type: "AI + Sustainability",
    category: "Civic + Sustainability",
    repo: "https://github.com/mahatrabelsi1/GreenChemAI",
    image: "images/projects/greenchem-ai-solvents.png",
    description:
      "A Python project connecting AI with green chemistry ideas, molecule rendering, SMILES analysis, and solvent scoring across green score, toxicity, biodegradability, and regulatory risk.",
    tags: ["Python", "AI", "Chemistry", "Sustainability", "RDKit"],
  },
  {
    name: "SmartCities",
    type: "Civic Tech",
    category: "Civic + Sustainability",
    repo: "https://github.com/mahatrabelsi1/SmartCities",
    description:
      "A JavaScript project exploring smarter city concepts through interactive web development and urban-tech thinking.",
    tags: ["JavaScript", "Smart Cities", "Web", "Civic Tech"],
  },
  {
    name: "Pneumonia CNN Project",
    type: "Computer Vision",
    category: "Healthcare AI",
    repo: "https://github.com/mahatrabelsi1/pneumonia_cnn_project",
    description:
      "A medical imaging project using convolutional neural networks to explore pneumonia detection workflows.",
    tags: ["Python", "CNN", "Medical Imaging", "Deep Learning"],
  },
  {
    name: "SurveillancePLUS",
    type: "AI / Security",
    category: "AI / ML",
    repo: "https://github.com/mahatrabelsi1/SurveillancePLUS",
    description:
      "A Python project exploring intelligent surveillance concepts and computer-vision-style monitoring workflows.",
    tags: ["Python", "AI", "Security", "Computer Vision"],
  },
  {
    name: "AI Voice Call Assistant",
    type: "AI Assistant",
    category: "AI / ML",
    repo: null,
    description:
      "A private Python project experimenting with AI-powered voice call assistant flows and conversational automation.",
    tags: ["Python", "Voice AI", "Assistant", "Private Repo"],
  },
  {
    name: "DecodeLabs Internship",
    type: "Data / Notebook Work",
    category: "Data",
    repo: "https://github.com/mahatrabelsi1/DecodeLabs-Internship",
    description:
      "A Jupyter Notebook-based internship workspace for technical exploration, analysis, and applied learning.",
    tags: ["Jupyter Notebook", "Data", "Internship", "Python"],
  },
  {
    name: "MarkiNharek",
    type: "Java App",
    category: "Apps",
    repo: "https://github.com/mahatrabelsi1/MarkiNharek",
    description:
      "A Java project focused on application logic, structured programming, and practical software engineering foundations.",
    tags: ["Java", "App", "Software Engineering"],
  },
  {
    name: "Handwriting Detection",
    type: "Computer Vision",
    category: "AI / ML",
    repo: "https://github.com/mahatrabelsi1/HandwritingDetection",
    description:
      "A Jupyter Notebook project exploring handwriting recognition and detection through machine-learning experimentation.",
    tags: ["Jupyter Notebook", "Computer Vision", "ML"],
  },
  {
    name: "TPC Project",
    type: "Frontend Platform",
    category: "Web + Mobile",
    repo: "https://github.com/mahatrabelsi1/TPC_PROJECT",
    description:
      "Tournament/event platform work connected to the TPC Tennis Tournament frontend experience.",
    tags: ["Frontend", "Tournament", "UI", "React"],
  },
];

export const hackathons = [
  {
    name: "AI for Smart Agriculture Hackathon",
    theme: "AI + Smart Agriculture",
    role: "Participant",
    status: "Codex Junior hackathon",
    description:
      "Participated in a hackathon focused on using AI for smarter, more sustainable agricultural solutions.",
    highlights: [
      "Worked in a team under challenge conditions",
      "Explored practical AI ideas for agriculture and sustainability",
      "Strengthened collaboration, pitching, and rapid problem-solving skills",
    ],
    stack: ["AI", "Smart Agriculture", "Teamwork", "Innovation"],
  },
  {
    name: "Cross-Border Hackathon",
    theme: "AI + Smart Cities + Renewable Energy",
    role: "Team participant",
    status: "Tunisia / Algeria / Libya collaboration",
    description:
      "Joined teammates from Tunisia, Algeria, and Libya to build an AI-powered solution focused on renewable energy and smarter cities.",
    highlights: [
      "Worked across borders and cultures with an international team",
      "Built around sustainable urban environments and renewable energy",
      "Practiced rapid ideation, technical collaboration, and solution pitching",
    ],
    stack: ["AI", "Smart Cities", "Renewable Energy", "Startup Thinking"],
  },
  {
    name: "Desktop Application for Automatic Exam Supervision Planning",
    theme: "Optimization + Desktop Software",
    role: "Team participant",
    status: "ISI competition, October 2025",
    description:
      "Participated in an Institut Superieur d'Informatique competition to design a desktop application for automatic exam supervision planning.",
    highlights: [
      "Modeled a combinatorial optimization problem",
      "Designed desktop software architecture and ergonomic interfaces",
      "Presented and defended the solution with teammate Rahma Harrath",
    ],
    stack: ["Optimization", "Desktop App", "UI", "Structured Data"],
  },
  {
    name: "Hult Prize ISI Ariana OnCampus",
    theme: "Startup + Social Impact",
    role: "Team participant",
    status: "3rd place",
    description:
      "Participated in the Hult Prize ISI Ariana OnCampus competition with Diabease, a project shaped around health impact and startup thinking.",
    highlights: [
      "Secured 3rd place",
      "Worked on Diabease as an impact-driven idea",
      "Practiced pitching, teamwork, and entrepreneurship under competition pressure",
    ],
    stack: ["Startup", "Healthcare", "Pitching", "Teamwork"],
  },
  {
    name: "L'idee a la Startup Hackathon",
    theme: "AI in Healthcare",
    role: "Team participant",
    status: "2nd place, Healthcare thematic",
    description:
      "Won 2nd place in the Healthcare thematic at the L'idee a la Startup hackathon organized by Tunipreneurs Polytech Intl.",
    highlights: [
      "Built around digital health and AI in healthcare",
      "Competed in a startup-style pitching environment",
      "Turned a technical idea into a healthcare impact story",
    ],
    stack: ["AI in Healthcare", "MedTech", "Startup", "Pitching"],
  },
  {
    name: "Securinets Friendly CTF",
    theme: "Cybersecurity",
    role: "Team SheCurity",
    status: "10th out of 127 participants",
    description:
      "Competed in a Securinets ISI friendly Capture The Flag competition with team SheCurity.",
    highlights: [
      "Solved cybersecurity challenges under time pressure",
      "Worked with teammates Mouna Rebai and Nour Ouni",
      "Built confidence in security thinking, persistence, and technical teamwork",
    ],
    stack: ["Cybersecurity", "CTF", "Problem Solving", "Teamwork"],
  },
  {
    name: "IEEEXtreme 17.0",
    theme: "Overnight Competitive Programming",
    role: "Team Empty Spirit",
    status: "IEEE coding competition",
    description:
      "Participated in the IEEEXtreme 17.0 overnight coding competition with Team Empty Spirit.",
    highlights: [
      "Practiced algorithmic thinking under long-format competition pressure",
      "Represented IEEE student engagement through technical challenge work",
      "Built endurance, debugging discipline, and team coordination",
    ],
    stack: ["Competitive Programming", "Algorithms", "IEEE", "Teamwork"],
  },
  {
    name: "Code Her Ways 2.0",
    theme: "Women in Tech + Coding",
    role: "Team TEAM_EGG",
    status: "Top 10",
    description:
      "Participated in Code Her Ways 2.0 with TEAM_EGG and secured a top 10 ranking.",
    highlights: [
      "Worked with Rahma Harrath and Soltani Amal",
      "Built and competed in a women-in-tech challenge environment",
      "Strengthened technical teamwork and confidence in competition settings",
    ],
    stack: ["Coding", "Women in Tech", "Teamwork", "Competition"],
  },
  {
    name: "GreenChemAI",
    theme: "AI + Sustainability Sprint",
    role: "Builder",
    status: "Challenge-style build",
    description:
      "A fast experimental build connecting AI with greener chemistry ideas, scientific analysis, and sustainability-focused problem solving.",
    highlights: [
      "Explored AI as a support layer for scientific decision-making",
      "Built around sustainability and chemistry-oriented use cases",
      "Shows the part of my brain that likes technical problems with real-world impact",
    ],
    stack: ["Python", "AI", "Sustainability", "Chemistry"],
  },
  {
    name: "EcoHunt AR",
    theme: "Mobile + AR Challenge",
    role: "Mobile / AR Builder",
    status: "Sprint-style project",
    description:
      "A mobile AR project with environmental exploration energy, combining playful camera interaction, 3D objects, and eco-awareness.",
    highlights: [
      "Built with a mobile-first Flutter workflow",
      "Uses AR discovery with 3D objects like magnets, sun, trees, bottles, and planet moments",
      "Fits the Mahaverse idea perfectly: tech, exploration, and a little chaos",
    ],
    stack: ["Dart", "Flutter", "AR", "3D Objects", "Mobile"],
  },
];

export const experience = [
  {
    role: "Mobile and AR Development PFE Intern",
    company: "Octomiro",
    location: "Tunis, Tunisia",
    period: "Feb 2025 - Jun 2025",
    details: [
      "Contributed to a cross-platform mobile application using Flutter and Unity.",
      "Integrated AR features and supported real-time data flows through Firebase.",
      "Built technical confidence in mobile delivery, debugging, and collaborative development.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "SASCODE",
    location: "Lac, Tunisia",
    period: "Mar 2024 - Jun 2024",
    details: [
      "Built React.js interfaces for booking and reservation platforms.",
      "Integrated backend APIs into responsive and accessible user experiences.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "SASCODE",
    location: "Tunis, Tunisia",
    period: "Jul 2024 - Aug 2024",
    details: [
      "Developed the frontend for the TPC Tennis Tournament platform.",
      "Created interactive UI components for tournament and event management workflows.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Manara Megrine Impression",
    location: "Megrine, Tunisia",
    period: "Jun 2024 - Aug 2024",
    details: [
      "Created print-ready and digital visual materials for client communication needs.",
      "Worked with layout, typography, color, and production constraints in a real print environment.",
      "Strengthened the bridge between creative direction, fast execution, and practical delivery.",
    ],
  },
];

export const leadership = [
  {
    title: "Scout command center",
    detail:
      "Vice-Group Leader at Mohamed Saad Scout Group, leading with the practical magic of planning, people, logistics, and keeping activities moving.",
  },
  {
    title: "International relations mode",
    detail:
      "Member of the Tunisian Scouts National International Relations Committee, supporting publications, communication, WAGGGS representation, and global collaboration.",
  },
  {
    title: "Safe spaces operator",
    detail:
      "National Safe from Harm media team member and representative in Our Journey to Safeguarding, focused on youth protection and safer participation.",
  },
  {
    title: "Club engine",
    detail:
      "Chairwoman of ISI Geeks and General Secretary of IEEE ISI Student Branch, coordinating student teams, events, communication, and technical initiatives.",
  },
  {
    title: "Community response",
    detail:
      "Volunteer with the Tunisian Red Crescent, including support for national COVID-19 response logistics and community service work.",
  },
  {
    title: "Design + documentation brain",
    detail:
      "Created and supported communication materials, documentation, and visual organization for scout, club, student, and volunteer activities.",
  },
];

export const workshops = [
  {
    metric: "80+",
    title: "Surf Smart 2.0",
    detail:
      "Facilitated an international online session for girls from different countries, blending digital safety, confidence, and participation.",
  },
  {
    metric: "100+",
    title: "World Thinking Day",
    detail:
      "Ran 2023 workshops in Ben Arous on girls' participation and the WAGGGS structure.",
  },
  {
    metric: "100+",
    title: "JOTA-JOTI Coding",
    detail:
      "Facilitated a coding workshop in 2025, making tech feel less scary and more like a game with a purpose.",
  },
  {
    metric: "80+ / 20",
    title: "City of Magic Camp",
    detail:
      "Led a regional Brownies camp with more than 80 girls and 20 leaders, basically a full logistics boss level.",
  },
  {
    metric: "2025",
    title: "Project Green Challenge",
    detail:
      "Headed administration and documentation, keeping the project organized, visible, and archive-ready.",
  },
];

export const certifications = [
  {
    name: "RISE - Graph Neural Networks for Rising Stars",
    issuer: "Completed Mar 1, 2026 - Highest distinction",
    description:
      "An intensive 8-week GNN program where I strengthened graph representation learning, node and edge embeddings, research-paper reading, and challenge design.",
    tags: ["GNN", "Research", "AI"],
  },
  {
    name: "DAAD Arab-German Summer School on Biomedical Imaging with Deep Learning",
    issuer: "BILD2025",
    description:
      "International training on deep learning for medical imaging, connecting my AI interests with healthcare and biomedical applications.",
    tags: ["Biomedical AI", "Deep Learning", "International"],
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    description:
      "Cloud AI foundations covering core machine learning, computer vision, NLP, and responsible AI concepts.",
    tags: ["Azure", "Cloud AI", "Responsible AI"],
  },
  {
    name: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google / Coursera",
    description:
      "A Google Data Analytics course focused on analytical thinking, asking better questions, and framing data problems clearly.",
    tags: ["Data Analytics", "Google", "Decision Making"],
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    description:
      "Foundational training in data principles, analytical workflows, and the role of data in real-world environments.",
    tags: ["Data", "Analytics", "Coursera"],
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM / Coursera",
    description:
      "Practical machine learning training with Python, model evaluation, classification, regression, and applied data workflows.",
    tags: ["Python", "ML", "Modeling"],
  },
  {
    name: "Python for Data Visualization",
    issuer: "LinkedIn Learning",
    description:
      "Focused on turning data into readable visual insights, charts, and narratives for better decision-making.",
    tags: ["Python", "Visualization", "Data"],
  },
  {
    name: "Data Literacy: Exploring and Describing Data",
    issuer: "LinkedIn Learning",
    description:
      "Training focused on understanding, describing, and communicating data in a clear and useful way.",
    tags: ["Data Literacy", "Analytics", "Communication"],
  },
  {
    name: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn Learning",
    description:
      "Introductory analytics training covering the foundations needed to reason with data and build analysis workflows.",
    tags: ["Data Analytics", "Foundations", "Learning"],
  },
  {
    name: "Understanding Artificial Intelligence",
    issuer: "DataCamp",
    description:
      "Introductory AI course covering core concepts, applications, and how AI systems fit into real-world contexts.",
    tags: ["AI", "DataCamp", "Foundations"],
  },
  {
    name: "Introduction to Python",
    issuer: "DataCamp",
    description:
      "Hands-on Python foundations covering basics, lists, functions, NumPy, and data-science readiness.",
    tags: ["Python", "NumPy", "Data Science"],
  },
  {
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    description:
      "Python certification focused on computational thinking, programming fundamentals, and problem-solving with code.",
    tags: ["Python", "Scientific Computing", "freeCodeCamp"],
  },
  {
    name: "Generative AI & Prompt Engineering",
    issuer: "Udemy",
    description:
      "Course focused on generative AI concepts and practical prompt engineering for creating clearer AI-assisted outputs.",
    tags: ["Generative AI", "Prompt Engineering", "AI"],
  },
  {
    name: "Design Thinking: Understanding the Process",
    issuer: "LinkedIn Learning",
    description:
      "Design-thinking training covering user-centered problem solving, ideation, and product-development mindset.",
    tags: ["Design Thinking", "Product", "Creativity"],
  },
  {
    name: "Entrepreneurship Foundations",
    issuer: "LinkedIn Learning",
    description:
      "Entrepreneurship fundamentals for shaping ideas, understanding value, and thinking through early-stage projects.",
    tags: ["Entrepreneurship", "Startup", "Strategy"],
  },
  {
    name: "Foundation Workshop",
    issuer: "Management 3.0",
    description:
      "Workshop focused on modern management, team engagement, collaboration, and healthier ways of working.",
    tags: ["Management 3.0", "Leadership", "Teamwork"],
  },
  {
    name: "Wood Badge",
    issuer: "Tunisian Scouts",
    description:
      "Scout leadership training that shaped how I plan, facilitate, communicate, and lead youth-centered activities.",
    tags: ["Leadership", "Scouts", "Facilitation"],
  },
  {
    name: "Safe from Harm Training",
    issuer: "Tunisia + International level, UAE",
    description:
      "Safeguarding training focused on safer youth spaces, risk awareness, protection practices, and responsible leadership.",
    tags: ["Safeguarding", "Youth Work", "Safety"],
  },
  {
    name: "Leadership Training",
    issuer: "NLT",
    description:
      "Leadership development focused on responsibility, team coordination, communication, and activity management.",
    tags: ["Leadership", "Teamwork", "Planning"],
  },
  {
    name: "WAGGGS and Campfire Facilitation Trainings",
    issuer: "WAGGGS / Campfire",
    description:
      "Non-formal education training for building interactive sessions, advocacy activities, and safe learning spaces.",
    tags: ["Facilitation", "Advocacy", "Non-formal education"],
  },
];

export const skills = {
  Programming: ["Python", "Java", "JavaScript", "SQL", "Kotlin"],
  "Data and AI": [
    "Machine Learning",
    "Statistical Modeling",
    "Data Analysis",
    "NLP",
    "scikit-learn",
    "PyTorch",
    "Keras",
    "Power BI",
    "Excel",
  ],
  Development: [
    "React.js",
    "Next.js",
    "Flutter",
    "Node.js",
    "FastAPI",
    "PHP",
    "HTML/CSS",
    "Firebase",
    "MongoDB",
    "SQLite",
    "Postman",
    "Git/GitHub",
  ],
  Design: [
    "Graphic Design",
    "Print Design",
    "Social Media Visuals",
    "Event Posters",
    "Layout",
    "Typography",
    "Brand Consistency",
    "Visual Communication",
  ],
  Humanware: [
    "Leadership",
    "Communication",
    "Project coordination",
    "Teamwork",
    "Adaptability",
    "Facilitation",
  ],
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Full professional proficiency" },
  { name: "French", level: "Working proficiency" },
  { name: "Spanish", level: "Basic knowledge / A1" },
];

export const research = {
  icon: BrainCircuit,
  headline: "Co-authoring research, not just studying it.",
  body:
    "My academic path is moving from learning AI to contributing to it. I co-authored a paper on graph neural network benchmarking and evaluation, and I am currently working on a systematic literature review around Alzheimer's disease and AI. My goal is to build research that is reproducible, useful, and connected to real-world health and public impact.",
  interests: [
    "Co-authored paper on graph neural network benchmarking and evaluation",
    "Current systematic literature review on Alzheimer's disease and AI",
    "AI-assisted medical triage for underserved communities",
    "Graph neural networks and robustness under noisy data",
    "Biomedical imaging with deep learning",
    "Resource allocation and critical infrastructure planning",
  ],
};

export const design = {
  headline: "Design Maha turns information into things people actually want to read.",
  body:
    "Beyond code and research, I have hands-on graphic design experience from Manara Megrine Impression and from clubs, scout events, student branches, and volunteer initiatives. I like visuals that are useful first, expressive second, and never boring.",
  work: [
    "Graphic designer at Manara Megrine Impression from Jun 2024 to Aug 2024",
    "Club and student organization visuals for events, announcements, and campaigns",
    "Scout and volunteer communication materials for activities, workshops, and community projects",
    "Print-aware design experience with layout, readability, and production constraints",
  ],
};
