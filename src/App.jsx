import { useEffect, useState } from "react";
import { Download, ExternalLink, Github, GraduationCap, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
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

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [dark]);
  return [dark, setDark];
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-12 sm:py-16">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">{title}</h2>
      {children}
    </section>
  );
}

function ButtonLink({ href, icon: Icon, children, primary = false, download }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={
        "inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-colors " +
        (primary
          ? "bg-accent text-white hover:bg-accent-strong"
          : "border border-line text-fg hover:border-accent hover:text-accent")
      }
    >
      <Icon size={16} aria-hidden="true" />
      {children}
    </a>
  );
}

function TextLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
    >
      {children}
      <ExternalLink size={13} aria-hidden="true" />
    </a>
  );
}

function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-semibold text-fg">
          Maha Trabelsi
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm text-muted hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="rounded-md p-2 text-muted hover:text-accent"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-muted hover:text-accent md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line px-4 py-2 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-fg hover:text-accent"
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
    <div id="top" className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:py-20">
      {profile.photo && (
        <img
          src={asset(profile.photo)}
          alt={profile.name}
          className="h-28 w-28 shrink-0 rounded-full object-cover sm:h-36 sm:w-36"
        />
      )}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">{profile.name}</h1>
        <p className="mt-2 text-lg text-muted">{profile.title}</p>
        <p className="mt-4 rounded-md border-l-4 border-accent bg-accent-soft px-4 py-2 text-sm text-fg">
          {profile.current}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <ButtonLink href={asset(profile.cvPath)} icon={Download} primary download>
            Download CV
          </ButtonLink>
          <ButtonLink href={links.scholar} icon={GraduationCap}>
            Google Scholar
          </ButtonLink>
          <ButtonLink href={links.github} icon={Github}>
            GitHub
          </ButtonLink>
          <ButtonLink href={links.linkedin} icon={Linkedin}>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={`mailto:${links.email}`} icon={Mail}>
            Email
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ title, org, period, children }) {
  return (
    <li className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-4">
      <div>
        <h3 className="font-semibold text-fg">{title}</h3>
        <p className="text-sm text-muted">{org}</p>
        {children && <p className="mt-2 text-[0.95rem] leading-relaxed text-fg/90">{children}</p>}
      </div>
      <p className="order-first text-sm text-muted sm:order-none sm:text-right sm:whitespace-nowrap">{period}</p>
    </li>
  );
}

export default function App() {
  const [dark, setDark] = useTheme();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header dark={dark} setDark={setDark} />
      <main className="mx-auto max-w-4xl px-4 sm:px-6">
        <Hero />

        <Section id="about" title="About">
          <div className="space-y-4 text-[1.05rem] leading-relaxed">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.interests.map((i) => (
              <li key={i} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                {i}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="publications" title="Publications">
          <ol className="space-y-6">
            {publications.map((pub) => (
              <li key={pub.title}>
                <h3 className="font-semibold leading-snug text-fg">{pub.title}</h3>
                <p className="mt-1 text-sm text-muted">{pub.authors}</p>
                <p className="text-sm font-medium text-accent">{pub.venue}</p>
                {pub.note && <p className="mt-2 text-[0.95rem] leading-relaxed">{pub.note}</p>}
                {pub.links.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-4">
                    {pub.links.map((l) => (
                      <TextLink key={l.url} href={l.url}>
                        {l.label}
                      </TextLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Section>

        <Section id="research" title="Research experience">
          <ol className="space-y-8 border-l-2 border-line pl-5">
            {research.map((r) => (
              <TimelineItem key={r.title} title={r.title} org={r.org} period={r.period}>
                {r.description}
              </TimelineItem>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Selected projects">
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="flex flex-col overflow-hidden rounded-lg border border-line bg-card transition-shadow hover:shadow-md"
              >
                <img
                  src={asset(p.image)}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  className="aspect-video w-full border-b border-line object-cover object-top"
                />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold text-fg">{p.name}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded bg-accent-soft px-2 py-0.5 text-xs text-accent">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <TextLink href={p.repo}>View on GitHub</TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6">
            <TextLink href={`${links.github}?tab=repositories`}>More projects on GitHub</TextLink>
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-6">
            {experience.map((e) => (
              <TimelineItem key={e.role} title={e.role} org={e.org} period={e.period}>
                {e.description}
              </TimelineItem>
            ))}
          </ol>
        </Section>

        <Section id="cv" title="Education & CV">
          <ol className="space-y-6">
            {education.map((e) => (
              <TimelineItem key={e.degree} title={e.degree} org={e.org} period={e.period}>
                {e.detail}
              </TimelineItem>
            ))}
          </ol>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-fg">Awards</h3>
              <ul className="space-y-2 text-sm">
                {awards.map((a) => (
                  <li key={a.title} className="flex justify-between gap-4">
                    <span>{a.title}</span>
                    {a.year && <span className="shrink-0 text-muted">{a.year}</span>}
                  </li>
                ))}
              </ul>
              <h3 className="mb-3 mt-8 font-semibold text-fg">Training</h3>
              <ul className="space-y-2 text-sm">
                {training.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-fg">Leadership & community</h3>
              <ul className="list-disc space-y-2 pl-4 text-sm marker:text-muted">
                {leadership.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <ButtonLink href={asset(profile.cvPath)} icon={Download} primary download>
              Download full CV (PDF)
            </ButtonLink>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="mb-5 max-w-2xl leading-relaxed">
            I am looking for a funded PhD position starting in Fall 2027. The best way to reach me is by email.
          </p>
          <dl className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[auto_1fr]">
            <dt className="text-muted">Email</dt>
            <dd>
              <a href={`mailto:${links.email}`} className="font-medium text-accent hover:underline">
                {links.email}
              </a>
            </dd>
            <dt className="text-muted">LinkedIn</dt>
            <dd>
              <TextLink href={links.linkedin}>maha-trabelssi</TextLink>
            </dd>
            <dt className="text-muted">GitHub</dt>
            <dd>
              <TextLink href={links.github}>mahatrabelsi1</TextLink>
            </dd>
            <dt className="text-muted">Google Scholar</dt>
            <dd>
              <TextLink href={links.scholar}>Profile</TextLink>
            </dd>
            <dt className="text-muted">ORCID</dt>
            <dd>
              <TextLink href={links.orcid}>{links.orcidId}</TextLink>
            </dd>
          </dl>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </div>
  );
}
