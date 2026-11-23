import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Github, GraduationCap, Linkedin, Mail, Menu, X } from "lucide-react";
import { HeroArt, Sparkle } from "./components/HeroArt.jsx";
import {
  awards,
  education,
  experience,
  leadership,
  links,
  nav,
  profile,
  projects,
  publications,
  research,
  training,
} from "./data/portfolio.js";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Stripes({ className = "", color = "bg-white" }) {
  return (
    <div className={`flex gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className={`h-7 w-[7px] -skew-x-[22deg] rounded-sm ${color}`} />
      ))}
    </div>
  );
}

function SectionTitle({ num, kicker, title }) {
  return (
    <div className="reveal mb-10 flex items-end gap-4 sm:gap-6">
      <span className="outline-num font-display text-6xl font-bold leading-none sm:text-8xl">{num}</span>
      <div className="pb-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-peri">{kicker}</p>
        <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      </div>
    </div>
  );
}

function Pill({ href, icon: Icon, children, variant = "glass", download }) {
  const external = href.startsWith("http");
  const styles = {
    dark: "bg-ink text-white hover:bg-peri",
    glass: "bg-white/60 text-ink ring-1 ring-ink/10 backdrop-blur hover:bg-white",
  };
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${styles[variant]}`}
    >
      <Icon size={16} aria-hidden="true" />
      {children}
    </a>
  );
}

function ArrowLink({ href, children, dark = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 text-sm font-semibold ${dark ? "text-ink" : "text-peri"} hover:underline`}
    >
      {children}
      <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function TopBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-sm font-bold uppercase tracking-[0.2em]">
          Maha Trabelsi
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-1.5 text-sm text-mist transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <span className="hidden font-display text-xs tracking-[0.3em] text-mist lg:block">PhD · FALL 2027</span>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-white hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-display text-lg font-bold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pb-6 pt-4 sm:px-6">
      {/* dark swoosh behind the card */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-peri/25 blur-[120px]" />
      <Stripes className="absolute right-8 top-0 z-10 hidden sm:flex" />

      <div className="glossy relative mt-6 overflow-hidden rounded-[32px] text-ink sm:rounded-[44px]">
        <div className="relative grid items-center gap-4 p-6 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:p-14">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/70 sm:text-xs">
              Medical imaging / Biomedical signals / LLM evaluation / Trustworthy ML
            </p>
            <p className="mt-6 font-display text-lg font-bold sm:text-xl">2025 — 2027</p>

            <h1 className="relative mt-2 font-display text-[44px] font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[84px]">
              Maha
              <br />
              <span className="relative inline-block">
                Trabelsi
                <svg
                  viewBox="0 0 300 120"
                  className="pointer-events-none absolute -left-[8%] -top-[30%] h-[160%] w-[116%]"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="150"
                    cy="60"
                    rx="146"
                    ry="40"
                    transform="rotate(-8 150 60)"
                    fill="none"
                    stroke="#0a0c12"
                    strokeWidth="1.6"
                  />
                </svg>
                <Sparkle className="absolute -right-6 -top-4 h-8 w-8 text-ink sm:-right-9 sm:h-11 sm:w-11" />
              </span>
            </h1>

            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.55em] sm:text-sm sm:tracking-[0.8em]">
              Research Portfolio
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">{profile.title}</p>
            <p className="mt-3 inline-flex max-w-xl items-start gap-2 rounded-2xl bg-white/55 px-4 py-2.5 text-sm font-medium backdrop-blur">
              <span className="mt-1.5 h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-500" />
              {profile.current}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <Pill href={asset(profile.cvPath)} icon={Download} variant="dark" download>
                Download CV
              </Pill>
              <Pill href={links.scholar} icon={GraduationCap}>
                Scholar
              </Pill>
              <Pill href={links.github} icon={Github}>
                GitHub
              </Pill>
              <Pill href={links.linkedin} icon={Linkedin}>
                LinkedIn
              </Pill>
              <Pill href={`mailto:${links.email}`} icon={Mail}>
                Email
              </Pill>
            </div>
          </div>

          <HeroArt />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="font-display text-lg">
          RESEARCH <span className="text-mist">/</span> <span className="text-sm text-mist">maha</span>
        </p>
        <Stripes className="hidden sm:flex" color="bg-white/80" />
      </div>
    </section>
  );
}

function Timeline({ items }) {
  return (
    <ol className="relative space-y-5 before:absolute before:bottom-2 before:left-[9px] before:top-2 before:w-px before:bg-gradient-to-b before:from-peri before:via-violet before:to-transparent">
      {items.map((r) => (
        <li key={r.title} className="reveal relative pl-10">
          <span className="absolute left-0 top-6 h-[19px] w-[19px] rounded-full border-4 border-ink bg-peri shadow-[0_0_0_4px_rgba(109,124,255,.25)]" />
          <div className="card-glass p-5 transition-colors hover:border-peri/50 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <h3 className="font-display text-lg font-bold">{r.title}</h3>
              <span className="shrink-0 rounded-full bg-peri/15 px-3 py-1 text-xs font-semibold text-[#b9c1ff]">
                {r.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-mist">{r.org}</p>
            <p className="mt-3 leading-relaxed text-white/85">{r.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 py-20 sm:py-28">
          <SectionTitle num="01" kicker="Who I am" title="About" />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="reveal space-y-5 text-lg leading-relaxed text-white/85">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="reveal">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-mist">Research interests</p>
              <ul className="flex flex-wrap gap-2">
                {profile.interests.map((i, idx) => (
                  <li
                    key={i}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      idx % 3 === 0
                        ? "bg-peri text-white"
                        : idx % 3 === 1
                          ? "bg-white text-ink"
                          : "border border-white/20 text-white"
                    }`}
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" className="scroll-mt-20 py-12 sm:py-16">
          <SectionTitle num="02" kicker="Papers" title="Publications" />
          <ol className="space-y-5">
            {publications.map((pub, i) => (
              <li
                key={pub.title}
                className={`reveal relative overflow-hidden p-6 sm:p-8 ${i < 2 ? "card-light" : "card-glass"}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      i === 0 ? "bg-ink text-white" : i === 1 ? "bg-peri text-white" : "bg-white/10 text-mist"
                    }`}
                  >
                    {pub.venue.split(",")[0].split(" (")[0]}
                  </span>
                  {pub.year && <span className={`text-xs font-semibold ${i < 2 ? "text-ink/50" : "text-mist"}`}>{pub.year}</span>}
                </div>
                <h3 className="mt-4 max-w-4xl font-display text-xl font-bold leading-snug sm:text-2xl">{pub.title}</h3>
                <p className={`mt-2 text-sm ${i < 2 ? "text-ink/60" : "text-mist"}`}>
                  {pub.authors} · {pub.venue}
                </p>
                {pub.note && <p className={`mt-3 max-w-3xl leading-relaxed ${i < 2 ? "text-ink/80" : "text-white/80"}`}>{pub.note}</p>}
                {pub.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-5">
                    {pub.links.map((l) => (
                      <ArrowLink key={l.url} href={l.url} dark={i < 2}>
                        {l.label}
                      </ArrowLink>
                    ))}
                  </div>
                )}
                {i === 0 && (
                  <Sparkle className="absolute -right-3 -top-3 h-20 w-20 text-peri/20 sm:h-28 sm:w-28" />
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* RESEARCH */}
        <section id="research" className="scroll-mt-20 py-12 sm:py-16">
          <SectionTitle num="03" kicker="Labs & programmes" title="Research experience" />
          <Timeline items={research} />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20 py-12 sm:py-16">
          <SectionTitle num="04" kicker="Built & shipped" title="Selected projects" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`reveal group card-light flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(109,124,255,.55)] ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={asset(p.image)}
                    alt={`${p.name} preview`}
                    loading="lazy"
                    className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                      i === 0 ? "aspect-[2/1]" : "aspect-video"
                    }`}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink px-2.5 py-1 font-display text-xs font-bold text-white">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink/70">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-peri/10 px-2.5 py-0.5 text-xs font-semibold text-[#3f4bd6]">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <ArrowLink href={p.repo} dark>
                      View on GitHub
                    </ArrowLink>
                  </div>
                </div>
              </article>
            ))}
            <a
              href={`${links.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex min-h-[180px] flex-col justify-between rounded-3xl border-2 border-dashed border-white/20 p-6 transition-colors hover:border-peri hover:bg-peri/10"
            >
              <Github size={28} />
              <div>
                <p className="font-display text-xl font-bold">More projects on GitHub</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-mist group-hover:text-white">
                  github.com/mahatrabelsi1 <ArrowUpRight size={15} />
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-20 py-12 sm:py-16">
          <SectionTitle num="05" kicker="Work & teaching" title="Experience" />
          <Timeline
            items={experience.map((e) => ({ title: e.role, org: e.org, period: e.period, description: e.description }))}
          />
        </section>

        {/* EDUCATION & CV */}
        <section id="cv" className="scroll-mt-20 py-12 sm:py-16">
          <SectionTitle num="06" kicker="Education, awards, community" title="CV" />
          <div className="grid gap-5 lg:grid-cols-3">
            {education.map((e, i) => (
              <div key={e.degree} className={`reveal p-6 ${i === 0 ? "card-light" : "card-glass"}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${i === 0 ? "text-[#3f4bd6]" : "text-peri"}`}>
                  {e.period}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{e.degree}</h3>
                <p className={`mt-2 text-sm ${i === 0 ? "text-ink/60" : "text-mist"}`}>{e.org}</p>
                <p className={`mt-3 text-sm ${i === 0 ? "text-ink/80" : "text-white/80"}`}>{e.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="reveal card-glass p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold">Awards</h3>
              <ul className="mt-5 space-y-3">
                {awards.map((a) => (
                  <li key={a.title} className="flex items-start gap-3">
                    <span className="mt-0.5 text-sunny">★</span>
                    <span className="flex-1 text-sm text-white/85">{a.title}</span>
                    {a.year && <span className="shrink-0 text-xs font-semibold text-mist">{a.year}</span>}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-xl font-bold">Training</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/85">
                {training.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="reveal card-glass p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold">Leadership & community</h3>
              <ul className="mt-5 space-y-3">
                {leadership.map((l) => (
                  <li key={l} className="flex gap-3 text-sm text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-peri" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal mt-8 flex justify-center">
            <a
              href={asset(profile.cvPath)}
              download
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-peri hover:text-white"
            >
              <Download size={18} /> Download full CV (PDF)
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
          <div className="glossy reveal relative overflow-hidden rounded-[32px] p-8 text-ink sm:rounded-[44px] sm:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.55em]">07 · Contact</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-6xl">
              Let’s work together.
            </h2>
            <p className="mt-4 max-w-xl text-ink/75 sm:text-lg">
              I am looking for a funded PhD position starting in Fall 2027. Email is the best way to reach me.
            </p>
            <a
              href={`mailto:${links.email}`}
              className="mt-6 inline-block break-all font-display text-xl font-bold underline decoration-2 underline-offset-8 hover:text-[#3f4bd6] sm:text-3xl"
            >
              {links.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-2">
              <Pill href={links.linkedin} icon={Linkedin}>
                LinkedIn
              </Pill>
              <Pill href={links.github} icon={Github}>
                GitHub
              </Pill>
              <Pill href={links.scholar} icon={GraduationCap}>
                Google Scholar
              </Pill>
              <Pill href={links.orcid} icon={ArrowUpRight}>
                ORCID {links.orcidId}
              </Pill>
            </div>
            <Sparkle className="absolute -bottom-6 -right-6 h-40 w-40 text-white/70 sm:h-56 sm:w-56" />
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 pb-10 text-sm text-mist sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <Stripes color="bg-white/30" />
      </footer>
    </div>
  );
}
