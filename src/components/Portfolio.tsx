import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Code2,
  Cpu,
  Server,
  Trophy,
  Award,
  Brain,
  Database,
  Terminal,
  GitPullRequest,
  ExternalLink,
  MapPin,
  Sparkles,
  Briefcase,
  Building2,
  Calendar,
  Zap,
  Coffee,
  User,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const openSource = [
  {
    org: "Google DeepMind — Concordia",
    title: "Migrated Gemini API integration to unified SDK",
    blurb:
      "Authored and merged Pull Requests modernizing Concordia's Gemini integration onto the unified SDK, improving maintainability and consistency across model calls.",
    icon: Brain,
  },
  {
    org: "Hermes Agent",
    title: "Clarified Slack thread command documentation",
    blurb:
      "Officially updated documentation to enforce '!' over '/' for thread interactions, removing a persistent source of user confusion in production deployments.",
    icon: GitPullRequest,
  },
];

const featured = [
  {
    name: "PolyChat",
    tag: "AI · Realtime · MERN",
    desc: "AI-powered real-time chat platform with 90%+ accurate dynamic cross-lingual translation built on Socket.io.",
    icon: Server,
  },
  {
    name: "Conversational Text-to-SQL Agent",
    tag: "LLM · Flask · Streamlit",
    desc: "Full-stack platform using a multi-layered Gemini API pipeline with dynamic schema injection for natural language database querying.",
    icon: Database,
  },
  {
    name: "IICPC Anti-Cheat System",
    tag: "C++ · Windows API",
    desc: "Low-level system utility leveraging Windows APIs, RDTSC jitter analysis, and registry artifact inspection to detect virtualized environments.",
    icon: Terminal,
  },
];

const achievements = [
  { label: "LeetCode", value: "Knight", sub: "Max Rating 1969", icon: Code2 },
  { label: "Codeforces", value: "Specialist", sub: "Max Rating 1420", icon: Cpu },
  { label: "Problem Setter", value: "2 Problems", sub: "PRADNYA '26 · 500+ contestants", icon: Award },
  { label: "Hackathons", value: "Top 10", sub: "IICPC Dev '25 · Adobe India R1", icon: Trophy },
];

export function Portfolio() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 pt-32 pb-24 md:min-h-screen md:flex md:flex-col md:justify-center">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <Reveal>
              <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-foreground/50">
                <span className="h-px w-10 bg-accent" />
                <Sparkles size={12} className="text-accent" />
                Portfolio · 2026
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-serif text-6xl leading-[1.02] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]">
                Shubham
                <br />
                <span className="italic font-light text-accent">Chavan</span>.
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-10 max-w-2xl text-sm uppercase tracking-[0.28em] text-accent sm:text-base">
                Backend Systems <span className="mx-3 text-foreground/30">/</span> AI Agents{" "}
                <span className="mx-3 text-foreground/30">/</span> Competitive Programming
              </p>
            </Reveal>
            <Reveal delay={380}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
                I build scalable backend systems, architect autonomous AI workflow automations, and
                solve complex algorithmic problems — usually with a cup of coffee and a terminal
                full of stack traces.{" "}
                <span className="text-foreground">Currently engineering at Pipeline AI</span>{" "}
                while pursuing a B.E. in IT at PICT, Pune.
              </p>
            </Reveal>
            <Reveal delay={440}>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.24em] text-foreground/55">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={13} className="text-accent" /> Pune, India
                </span>
                <span className="inline-flex items-center gap-2">
                  <Coffee size={13} className="text-accent" /> Available for opportunities
                </span>
              </div>
            </Reveal>
            <Reveal delay={520}>
              <div className="mt-14 flex flex-wrap items-center gap-5">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm tracking-wide text-background shadow-ink transition-all duration-300 hover:-translate-y-0.5"
                >
                  View Work
                  <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border border-foreground/80 px-7 py-4 text-sm tracking-wide text-foreground/90 transition-colors hover:border-accent hover:text-accent"
                >
                  Contact
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* PFP placeholder */}
          <Reveal delay={320}>
            <div className="relative mx-auto w-48 sm:w-56 md:w-64">
              <div className="absolute -inset-3 -z-10 bg-ink opacity-90" />
              <div className="aspect-square overflow-hidden border-2 border-foreground bg-muted">
                {/* Replace src with your photo when ready */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-background">
                  <User size={64} strokeWidth={1.2} className="text-accent" />
                </div>
              </div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.28em] text-foreground/50">
                Add your photo →{" "}
                <code className="text-accent">/public/me.jpg</code>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE — stacked, current role featured */}
      <section id="experience" className="border-t border-hair">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <SectionHeader index="01" eyebrow="Experience" title="Where I've built." />

          {/* CURRENT — dark, prominent */}
          <Reveal>
            <article className="relative mt-20 overflow-hidden bg-ink p-8 text-background shadow-ink md:p-14">
              <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
              <div className="relative flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 border border-background/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-background/80">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Current
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-background/60">
                  <Calendar size={12} /> 2025 — Present
                </span>
              </div>

              <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center border border-background/30 bg-background/5">
                    <Zap size={28} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-4xl md:text-5xl">Pipeline AI</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-accent">
                      Backend Engineering Intern
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Azure", "LLMs", "GitHub Actions"].map((t) => (
                    <span
                      key={t}
                      className="border border-background/30 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-background/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="relative mt-10 space-y-5 text-background/85">
                {[
                  "Engineered an automated AI meeting booking agent utilizing LLMs, boosting booked rates from 16% to 60%+.",
                  "Deployed the Hermes AI agent on Azure VMs with production-grade reliability.",
                  "Pioneered backend CI/CD pipelines with GitHub Actions for streamlined deployments.",
                ].map((p) => (
                  <li key={p} className="flex gap-4 leading-relaxed">
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-accent" strokeWidth={2} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* PAST */}
          <Reveal delay={160}>
            <article className="group relative mt-10 border border-hair bg-background p-8 transition-colors hover:border-accent md:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 border border-foreground/20 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                  <Briefcase size={12} /> Past
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-foreground/50">
                  <Calendar size={12} /> 2024
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center border border-hair bg-muted">
                    <Building2 size={24} className="text-accent" strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl">Rachana Finance Pvt Ltd</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-accent">
                      Software Engineer Intern
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Redis Streams", "WebSockets", "Microservices"].map((t) => (
                    <span
                      key={t}
                      className="border border-hair px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Architected an optimized asynchronous task queue using Redis Streams and WebSockets, cutting redundant API calls by 30–40%.",
                  "Designed a microservices architecture for LLM transcription workloads.",
                ].map((p) => (
                  <li key={p} className="flex gap-4 leading-relaxed text-foreground/75">
                    <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section id="open-source" className="border-t border-hair bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <SectionHeader index="02" eyebrow="Open Source" title="Contributions in the wild." />
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {openSource.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={i * 140}>
                  <article className="group relative h-full border border-hair bg-background p-10 transition-all duration-500 hover:border-accent hover:-translate-y-1 hover:shadow-ink">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center border border-hair bg-muted transition-colors group-hover:border-accent">
                        <Icon size={22} className="text-accent" strokeWidth={1.5} />
                      </div>
                      <GitPullRequest size={18} className="text-foreground/30 transition-colors group-hover:text-accent" />
                    </div>
                    <p className="mt-10 text-xs uppercase tracking-[0.24em] text-foreground/50">{o.org}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-snug md:text-[1.7rem]">{o.title}</h3>
                    <p className="mt-5 leading-relaxed text-foreground/70">{o.blurb}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="border-t border-hair">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <SectionHeader index="03" eyebrow="Featured Work" title="Selected projects." />
          <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
            {featured.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.name} delay={i * 120}>
                  <article className="group relative flex h-full flex-col bg-background p-10 transition-colors duration-500 hover:bg-ink hover:text-background">
                    <div className="flex h-14 w-14 items-center justify-center border border-hair transition-colors group-hover:border-background/30">
                      <Icon size={26} strokeWidth={1.3} className="text-accent" />
                    </div>
                    <p className="mt-10 text-[10px] uppercase tracking-[0.28em] text-foreground/50 transition-colors group-hover:text-background/60">{p.tag}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-snug">{p.name}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70 transition-colors group-hover:text-background/80">{p.desc}</p>
                    <span className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent transition-colors group-hover:text-background">
                      Case Study <ArrowUpRight size={14} />
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* More Projects */}
          <div className="mt-24">
            <Reveal>
              <div className="flex items-end justify-between border-b border-hair pb-6">
                <h3 className="font-serif text-2xl md:text-3xl">More Projects</h3>
                <span className="text-xs uppercase tracking-[0.24em] text-foreground/40">Coming soon</span>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="group flex aspect-[4/3] flex-col justify-between border border-dashed border-hair p-8 transition-colors hover:border-accent">
                    <span className="text-xs uppercase tracking-[0.24em] text-foreground/40">
                      0{i + 4}
                    </span>
                    <div>
                      <p className="font-serif text-xl text-foreground/40">Placeholder</p>
                      <p className="mt-2 text-sm text-foreground/40">Project coming soon.</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="border-t border-hair bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <SectionHeader index="04" eyebrow="Achievements" title="Competitive milestones." />
          <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.label} delay={i * 100}>
                  <div className="group flex h-full flex-col justify-between bg-background p-10 transition-colors hover:bg-ink hover:text-background">
                    <div className="flex h-12 w-12 items-center justify-center border border-hair transition-colors group-hover:border-background/30">
                      <Icon size={22} strokeWidth={1.4} className="text-accent" />
                    </div>
                    <div className="mt-12">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/50 transition-colors group-hover:text-background/60">
                        {a.label}
                      </p>
                      <p className="mt-3 font-serif text-3xl leading-tight">{a.value}</p>
                      <p className="mt-2 text-sm text-foreground/60 transition-colors group-hover:text-background/70">{a.sub}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="border-t border-hair">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-foreground/50">
              <span className="h-px w-10 bg-accent" />
              Get in touch
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Let's build something <span className="italic text-accent">great</span> together.
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-16 grid gap-px border-t border-hair bg-border sm:grid-cols-3">
              <ContactLink
                href="mailto:shubham.sc0907@gmail.com"
                icon={Mail}
                label="Email"
                value="shubham.sc0907@gmail.com"
              />
              <ContactLink
                href="https://linkedin.com/in/shubhamchavan09"
                icon={Linkedin}
                label="LinkedIn"
                value="shubhamchavan09"
              />
              <ContactLink
                href="https://github.com/navahc09"
                icon={Github}
                label="GitHub"
                value="navahc09"
              />
            </div>
          </Reveal>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-hair pt-8 text-xs uppercase tracking-[0.22em] text-foreground/40 sm:flex-row">
            <span>© 2026 Shubham Chavan · Crafted with care</span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={12} className="text-accent" /> Pune, India
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <Reveal>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-b border-hair pb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-accent">{eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-6xl">{title}</h2>
        </div>
        <span className="font-serif text-2xl text-foreground/30 md:text-3xl">{index}</span>
      </div>
    </Reveal>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: any;
  label: string;
  value: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="group flex items-center justify-between bg-background p-8 transition-all hover:bg-ink hover:text-background"
    >
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/50 transition-colors group-hover:text-background/60">{label}</p>
        <p className="mt-3 truncate font-serif text-lg transition-colors group-hover:text-accent">
          {value}
        </p>
      </div>
      <div className="ml-4 flex shrink-0 items-center gap-3 text-foreground/60 transition-colors group-hover:text-accent">
        <Icon size={20} strokeWidth={1.6} />
        <ExternalLink size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </a>
  );
}
