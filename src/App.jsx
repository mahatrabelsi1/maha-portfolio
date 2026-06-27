import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Puzzle,
} from "lucide-react";
import { PortalCard } from "./components/PortalCard.jsx";
import { SectionShell } from "./components/SectionShell.jsx";
import { Terminal } from "./components/Terminal.jsx";
import {
  certifications,
  design,
  education,
  experience,
  hackathons,
  languages,
  leadership,
  portals,
  profile,
  projects,
  research,
  skills,
  workshops,
} from "./data/portfolio.js";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

function FloatingPuzzle({ className, delay = 0 }) {
  return (
    <motion.div
      className={`floating-puzzle ${className}`}
      animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, delay }}
      aria-hidden="true"
    >
      <Puzzle size={28} />
    </motion.div>
  );
}

function Hero({ unlockedCount }) {
  return (
    <header id="home" className="relative min-h-screen overflow-hidden bg-void">
      <img
        src={assetUrl(profile.heroImage)}
        alt="Maha Trabelsi in a futuristic Mahaverse scene with AI, code, design, and puzzle visuals"
        className="hero-portrait"
      />
      <div className="absolute inset-0 hero-field" />
      <div className="scanline" />
      <FloatingPuzzle className="left-[8%] top-[18%]" />
      <FloatingPuzzle className="right-[11%] top-[24%]" delay={1.2} />
      <FloatingPuzzle className="bottom-[13%] left-[22%]" delay={2.1} />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#home" className="font-display text-xl font-black tracking-wide text-white">
          Mahaverse
        </a>
        <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          {["Hub", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href={assetUrl(profile.cvPath)} download className="icon-action" aria-label="Download CV">
          <Download size={18} />
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="hidden lg:block" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-copy"
        >
          <p className="eyebrow">Personal operating system online</p>
          <p className="hero-status">Mahaverse OS: {unlockedCount}/4 modes discovered</p>
          <h1 className="hero-title">Which Maha are you trying to discover?</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#hub" className="primary-button">
              Enter Hub <ArrowDown size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="secondary-button">
              <Mail size={18} /> Contact
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function Hub({ activePortal, unlocked, onSelect }) {
  const current = portals.find((portal) => portal.id === activePortal);

  return (
    <SectionShell id="hub" eyebrow="Mahaverse Hub" title="Choose a portal. Unlock a professional side of Maha.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {portals.map((portal) => (
          <PortalCard
            key={portal.id}
            portal={portal}
            active={portal.id === activePortal}
            unlocked={unlocked.includes(portal.id)}
            onSelect={onSelect}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="mt-8 rounded-[8px] border border-white/10 bg-white/[0.06] p-6 shadow-glow backdrop-blur-xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-mint">Active portal</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">{current.title}</h3>
              <p className="mt-3 max-w-3xl text-slate-300">{current.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {current.sections.map((section) => (
                <span key={section} className="chip">
                  {section}
                </span>
              ))}
            </div>
            <a href="#portal-content" className="primary-button">
              Open Selected Portal <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionShell>
  );
}

function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="SYSTEM BOOT: MAHA.EXE"
      title="Welcome to the Mahaverse. Part AI lab, part scout camp, part developer console, part beautiful chaos."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel">
          <p className="text-lg leading-8 text-slate-200">
            I&apos;m Maha Trabelsi - a Data Science master&apos;s student, builder, scout leader,
            and professional idea collector. I create AI tools, websites, mobile apps,
            workshops, and occasionally open 47 tabs to solve one tiny bug. This portfolio is
            not a resume; it&apos;s a puzzle version of my brain.
          </p>
          <a href="#hub" className="primary-button mt-6">
            Enter the Mahaverse <ArrowDown size={18} />
          </a>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-mint" /> {profile.location}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-mint" href={`mailto:${profile.email}`}>
              <Mail size={16} className="text-mint" /> {profile.email}
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-tile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Skills() {
  return (
    <SectionShell id="skills" eyebrow="Skills" title="The toolkit: technical stack plus human operating system.">
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="glass-panel">
            <h3 className="font-display text-xl font-bold text-white">{group}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <SectionShell id="projects" eyebrow="Developer Maha" title="Built like experiments. Written like products. Aimed at public impact.">
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-button ${activeFilter === filter ? "is-active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              layout
              key={project.name}
              className="project-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -8 }}
            >
              {project.image && (
                <img
                  src={assetUrl(project.image)}
                  alt={`${project.name} screenshot`}
                  className="project-image"
                />
              )}
              <p className="text-sm uppercase tracking-[0.18em] text-amber">{project.type}</p>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-white">{project.name}</h3>
                {project.repo ? (
                  <a
                    href={project.repo}
                    className="icon-action shrink-0"
                    aria-label={`Open ${project.name} on GitHub`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={17} />
                  </a>
                ) : (
                  <span className="chip shrink-0">Private</span>
                )}
              </div>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="chip border-mint/30 text-mint">{project.category}</span>
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <p className="mt-4 font-mono text-sm text-slate-400">
        Showing {visibleProjects.length} / {projects.length} projects
      </p>
    </SectionShell>
  );
}

function Hackathons() {
  return (
    <SectionShell id="hackathons" eyebrow="Developer Maha" title="Hackathon Arena: fast builds, weird constraints, deadline energy.">
      <div className="hackathon-shell">
        <div className="hackathon-console">
          <p className="font-mono text-sm text-mint">Projects/Hackathons/Competitions</p>
          <h3 className="mt-3 font-display text-3xl font-bold text-white">Build fast. Explain clearly. Ship something real.</h3>
          <p className="mt-4 leading-7 text-slate-300">
            This is where the portfolio keeps challenge-style work: hackathons, mini-competitions,
            prototypes built under pressure, and technical experiments with a deadline heartbeat.
          </p>
        </div>
        <div className="grid gap-4">
          {hackathons.map((event) => (
            <motion.article key={event.name} className="hackathon-card" whileHover={{ y: -6 }}>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber">{event.theme}</p>
                  <h3>{event.name}</h3>
                  <p className="mt-2 text-slate-300">{event.description}</p>
                </div>
                <div className="hackathon-badge">
                  <span>{event.role}</span>
                  <small>{event.status}</small>
                </div>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {event.highlights.map((item) => (
                  <div key={item} className="mini-card">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {event.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={`${item.role}-${item.period}`} className="timeline-item">
          <div className="timeline-dot" />
          <p className="text-sm text-mint">{item.period}</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-white">{item.role}</h3>
          <p className="mt-1 text-slate-300">
            {item.company} - {item.location}
          </p>
          <ul className="mt-4 space-y-2 text-slate-300">
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <SectionShell id="experience" eyebrow="Experience" title="Developer and design experience, from interfaces to printed visuals.">
      <Timeline items={experience} />
    </SectionShell>
  );
}

function EducationResearch() {
  const ResearchIcon = research.icon;

  return (
    <SectionShell id="education" eyebrow="Student Maha" title="Research mode: co-author, builder, learner.">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          {education.map((item) => (
            <article key={item.degree} className="glass-panel">
              <p className="text-sm uppercase tracking-[0.18em] text-mint">{item.place}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">{item.degree}</h3>
              <p className="mt-2 text-slate-300">{item.school}</p>
              <p className="mt-2 text-slate-400">{item.focus}</p>
            </article>
          ))}
        </div>
        <div id="research" className="glass-panel">
          <ResearchIcon className="text-neon" size={34} />
          <h3 className="mt-4 font-display text-2xl font-bold text-white">{research.headline}</h3>
          <p className="mt-4 leading-7 text-slate-300">{research.body}</p>
          <div className="mt-5 rounded-[8px] border border-mint/20 bg-mint/10 p-4 leading-7 text-slate-200">
            <strong className="text-mint">Research highlight:</strong> I have co-authored work on
            GNN benchmarking and evaluation, and I am currently building a systematic literature
            review on Alzheimer's disease and AI.
          </div>
          <div className="mt-6 space-y-3">
            {research.interests.map((interest) => (
              <div key={interest} className="flex gap-3 text-slate-300">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mint" />
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Leadership() {
  return (
    <SectionShell id="leadership" eyebrow="Scout & Volunteer Maha" title="Scouts, clubs, Red Crescent, facilitation, and community impact.">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="glass-panel">
          <h3 className="font-display text-2xl font-bold text-white">Leadership Missions</h3>
          <div className="mt-5 grid gap-3">
            {leadership.map((item) => (
              <article key={item.title} className="mission-card">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="glass-panel">
          <h3 className="font-display text-2xl font-bold text-white">Workshops & Field Work</h3>
          <div className="mt-5 grid gap-3">
            {workshops.map((item) => (
              <article key={item.title} className="impact-card">
                <strong>{item.metric}</strong>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Design() {
  return (
    <SectionShell id="design" eyebrow="Graphic Designer Maha" title="Visual communication for clubs, print, scouts, and community projects.">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel">
          <h3 className="font-display text-2xl font-bold text-white">{design.headline}</h3>
          <p className="mt-4 leading-7 text-slate-300">{design.body}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {design.work.map((item) => (
            <div key={item} className="mini-card">
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function CertificationsExplorer() {
  return (
    <SectionShell id="certifications" eyebrow="Certifications + Global Readiness" title="Programs, language switches, and international curiosity.">
      <div className="grid gap-5">
        <div className="glass-panel">
          <h3 className="font-display text-2xl font-bold text-white">Programs & Certifications</h3>
          <div className="cert-layout mt-5">
            {certifications.map((cert, index) => (
              <article
                key={cert.name}
                className={`cert-card ${index < 2 ? "cert-card-wide" : ""}`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber">{cert.issuer}</p>
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="glass-panel">
          <h3 className="font-display text-2xl font-bold text-white">Languages</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((language) => (
              <div key={language.name} className="language-row">
                <strong>{language.name}</strong>
                <span>{language.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Ready to collaborate, research, build, facilitate, or open a new portal.">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel">
          <h3 className="font-display text-2xl font-bold text-white">{profile.name}</h3>
          <p className="mt-3 text-slate-300">{profile.title}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="primary-button">
              <Mail size={18} /> Email Maha
            </a>
            <a href={assetUrl(profile.cvPath)} download className="secondary-button">
              <Download size={18} /> Download CV
            </a>
            <a href="#hub" className="secondary-button">
              <ExternalLink size={18} /> Choose Portal
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </SectionShell>
  );
}

function PortalWorkspace({ activePortal }) {
  const portal = portals.find((item) => item.id === activePortal);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="portal-content"
        key={activePortal}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.35 }}
      >
        {activePortal === "student" && (
          <>
            <EducationResearch />
            <CertificationsExplorer />
          </>
        )}
        {activePortal === "builder" && (
          <>
            <Skills />
            <Projects />
            <Hackathons />
            <Experience />
            <CertificationsExplorer />
          </>
        )}
        {activePortal === "scout" && <Leadership />}
        {activePortal === "designer" && (
          <>
            <Design />
            <Skills />
          </>
        )}
        <div className="portal-footer">
          <p>
            Current room: <strong>{portal.title}</strong>. Pick another portal above to switch
            the portfolio view.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [activePortal, setActivePortal] = useState("student");
  const [unlocked, setUnlocked] = useState(["student"]);

  function selectPortal(id) {
    setActivePortal(id);
    setUnlocked((current) => (current.includes(id) ? current : [...current, id]));
  }

  const unlockedCount = useMemo(() => unlocked.length, [unlocked]);

  return (
    <main>
      <Hero unlockedCount={unlockedCount} />
      <Hub activePortal={activePortal} unlocked={unlocked} onSelect={selectPortal} />
      <About />
      <PortalWorkspace activePortal={activePortal} />
      <Contact />
    </main>
  );
}



