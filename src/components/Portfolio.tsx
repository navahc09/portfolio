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
import pfpImage from "@/images/portfolio_pfp.jpeg";
import pipelineLogo from "@/images/pipeline_logo.png";
import raftLogo from "@/images/raft_77_logo.jfif";
import deepmindLogo from "@/images/deepmind-color.png";
import hermesLogo from "@/images/hermes-agent.png";
import polychatLogo from "@/images/polychat_logo.png";
import sqlAgentLogo from "@/images/text-to-sql-agent.jpeg";
import iicpcLogo from "@/images/IICPC.png";
import leetcodeLogo from "@/images/LeetCode_logo_black.png";
import codeforcesLogo from "@/images/codeforces.png";
import incPradnyaLogo from "@/images/inc_pradnya.png";

const openSource = [
  {
    org: "Google DeepMind | Concordia",
    title: "Migrated Gemini API integration to unified SDK",
    blurb:
      "Authored and merged Pull Requests modernizing Concordia's Gemini integration onto the unified SDK, improving maintainability and consistency across model calls.",
    logo: deepmindLogo,
  },
  {
    org: "Hermes Agent",
    title: "Documentation Improvements",
    blurb:
      "Identified and resolved friction points in the Slack integration documentation to streamline deployments for future users.",
    logo: hermesLogo,
  },
];

const featured = [
  {
    name: "PolyChat",
    tag: "AI · Realtime · MERN",
    desc: "AI-powered real-time chat platform with 90%+ accurate dynamic cross-lingual translation built on Socket.io.",
    logo: polychatLogo,
    github: "https://github.com/navahc09/PolyChat-real-time-translation",
    demo: "https://polychat-translation.vercel.app",
  },
  {
    name: "Conversational Text-to-SQL Agent",
    tag: "LLM · Flask · Streamlit",
    desc: "Full-stack platform using a multi-layered Gemini API pipeline with dynamic schema injection for natural language database querying.",
    logo: sqlAgentLogo,
    github: "https://github.com/navahc09/Conversational-Text-to-SQL-Agent",
    demo: "https://conversational-text-to-sql-agent.streamlit.app",
  },
  {
    name: "IICPC Anti-Cheat System",
    tag: "C++ · Windows API",
    desc: "Low-level system utility leveraging Windows APIs, RDTSC jitter analysis, and registry artifact inspection to detect virtualized environments.",
    logo: iicpcLogo,
    github: "https://github.com/navahc09/IICPC-AntiCheat-System",
  },
];

const achievements = [
  { label: "LeetCode", value: "Knight", sub: "Max Rating 2024", logo: leetcodeLogo, url: "https://leetcode.com/u/shubwins/" },
  { label: "Codeforces", value: "Specialist", sub: "Max Rating 1421", logo: codeforcesLogo, url: "https://codeforces.com/profile/navahc09" },
  { label: "Problem Setter", value: "2 Problems", sub: "PRADNYA '26 · CP contest under PICT's annual INC", logo: incPradnyaLogo },
  { label: "Hackathons", value: "Top 10", sub: "IICPC Dev Hackathon '25", logo: iicpcLogo },
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
                Portfolio
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
                I build scalable backend systems, architect AI agents, and leetcode hard problems.
                When I'm not coding, I'm usually reading about economics, following geopolitics, or
                staying up way too late for a great TV show.{" "}
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
                  href="#open-source"
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
            <div className="relative mx-auto w-48 sm:w-56 md:w-64 rounded-2xl">
              <div className="absolute -inset-3 -z-10 bg-ink opacity-90 rounded-2xl" />
              <div className="aspect-square overflow-hidden border-2 border-accent bg-muted rounded-xl">
                <img
                  src={pfpImage}
                  alt="Shubham Chavan"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE — stacked, current role featured */}
      <section id="experience" className="border-t border-hair">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <SectionHeader index="01" eyebrow="Experience" title="Where I've built." />

          {/* CURRENT — light, transitions to purple text & off-white bg on hover */}
          <Reveal>
            <article className="group relative mt-20 overflow-hidden border border-hair bg-background p-8 text-foreground transition-all duration-300 hover:bg-muted/80 hover:border-accent md:p-14">
              <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-accent font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Current
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-foreground/50 transition-colors group-hover:text-accent/80">
                  <Calendar size={12} /> April 2026 — Present
                </span>
              </div>

              <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center border border-hair bg-muted transition-colors group-hover:border-accent/30 overflow-hidden">
                    <img src={pipelineLogo} alt="Pipeline AI" className="h-full w-full object-contain p-2" />
                  </div>
                  <div>
                    <h3 className="font-serif text-4xl md:text-5xl transition-colors group-hover:text-accent">Pipeline AI</h3>
                    <p className="mt-2 flex flex-wrap items-center gap-y-1 text-xs uppercase tracking-[0.28em] text-accent/80 transition-colors group-hover:text-accent font-semibold">
                      <span>Backend Engineering Intern</span>
                      <span className="mx-2 text-foreground/30 group-hover:text-accent/30">/</span>
                      <span>Remote (San Francisco, US)</span>
                      <span className="mx-2 text-foreground/30 group-hover:text-accent/30">/</span>
                      <span>UC Berkeley SkyDeck Backed</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "MongoDB", "Azure", "AI Agents"].map((t) => (
                    <span
                      key={t}
                      className="border border-hair px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground/60 transition-colors group-hover:border-accent/30 group-hover:text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="relative mt-10 space-y-5 text-foreground/75 transition-colors group-hover:text-accent/90">
                {[
                  "Engineered an automated AI meeting booking agent leveraging LLMs & prospect context, reducing average response times from 10 hours to under 5 minutes and boosting booked rates from 16% to 60%+.",
                  "Deployed the Hermes AI agent on Azure VMs integrated with Model Context Protocols (MCPs for Slack, MongoDB, Fireflies) to automate complex customer success queries, and contributed a documentation PR to the official Hermes open-source repository.",
                  "Architected a fully autonomous AI-driven ETL pipeline cron job that automates the extraction of actionable business insights from raw unstructured data, cutting manual workflow times by 50%.",
                  "Established the backend repo's automated testing suite using pytest and GitHub Actions, achieving 70% test coverage and designing self-learning Cursor skills (with @ reference) for automated test updates.",
                  "Designed and served high-throughput backend APIs for CRM dashboard lead enrichment and rep performance leaderboards, implementing Webhooks fallbacks to resolve critical live chat synchronization bugs.",
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
                  <Calendar size={12} /> 2025
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center border border-hair bg-muted overflow-hidden">
                    <img src={raftLogo} alt="Rachana Finance" className="h-full w-full object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl">Rachana Finance Pvt Ltd</h3>
                    <p className="mt-2 flex flex-wrap items-center gap-y-1 text-xs uppercase tracking-[0.28em] text-accent font-semibold">
                      <span>Software Engineer Intern</span>
                      <span className="mx-2 text-foreground/30">/</span>
                      <span>Remote (Bangalore, India)</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "PostgreSQL", "Redis", "WebSockets"].map((t) => (
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
                  "Architected an optimized asynchronous task queue using Redis Streams and WebSockets, successfully deduplicating requests and reducing redundant API calls by 40%.",
                  "Collaborated on designing a decoupled microservices architecture for LLM transcription workloads, optimizing compute efficiency for concurrent users to process 100+ audio clips per hour.",
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
              return (
                <Reveal key={o.title} delay={i * 140}>
                  <article className="group relative h-full border border-hair bg-background p-10 transition-all duration-500 hover:border-accent hover:-translate-y-1 hover:shadow-ink">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center border border-hair bg-muted transition-colors group-hover:border-accent overflow-hidden">
                        <img src={o.logo} alt={o.org} className="h-full w-full object-contain p-1.5" />
                      </div>
                      <GitPullRequest size={18} className="text-foreground/30 transition-colors group-hover:text-hover-lavender" />
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
              return (
                <Reveal key={p.name} delay={i * 120}>
                  <article className="group relative flex h-full flex-col bg-background p-10 transition-colors duration-500 hover:bg-ink hover:text-background">
                    <div className="flex h-14 w-14 items-center justify-center border border-hair transition-colors group-hover:border-background/30 overflow-hidden">
                      <img src={p.logo} alt={p.name} className="h-full w-full object-contain p-1.5" />
                    </div>
                    <p className="mt-10 text-[10px] uppercase tracking-[0.28em] text-foreground/50 transition-colors group-hover:text-background/60">{p.tag}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-snug">{p.name}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70 transition-colors group-hover:text-hover-light">{p.desc}</p>
                    <div className="mt-10 flex flex-wrap items-center text-xs uppercase tracking-[0.22em]">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-accent transition-colors hover:text-foreground/80 group-hover:text-hover-lavender group-hover:hover:text-background"
                        >
                          GitHub <ArrowUpRight size={14} />
                        </a>
                      )}
                      {p.github && p.demo && (
                        <span className="mx-3 text-foreground/20 transition-colors group-hover:text-background/20">/</span>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-accent transition-colors hover:text-foreground/80 group-hover:text-hover-lavender group-hover:hover:text-background"
                        >
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="border-t border-hair bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <SectionHeader index="04" eyebrow="Achievements" title="Competitive milestones." />
          <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => {
              const CardContent = (
                <>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-hair bg-muted transition-colors group-hover:border-background/30 overflow-hidden">
                      <img src={a.logo} alt={a.label} className="h-full w-full object-contain p-1.5" />
                    </div>
                    {a.url && (
                      <ArrowUpRight size={18} className="text-foreground/30 transition-colors group-hover:text-hover-lavender" />
                    )}
                  </div>
                  <div className="mt-12">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/50 transition-colors group-hover:text-hover-light/60">
                      {a.label}
                    </p>
                    <p className="mt-3 font-serif text-3xl leading-tight">{a.value}</p>
                    <p className="mt-2 text-sm text-foreground/60 transition-colors group-hover:text-hover-light/80">{a.sub}</p>
                  </div>
                </>
              );

              const cardClass = "group flex h-full flex-col justify-between bg-background p-10 transition-colors hover:bg-ink hover:text-background text-left";

              return (
                <Reveal key={a.label} delay={i * 100}>
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
                      {CardContent}
                    </a>
                  ) : (
                    <div className={cardClass}>
                      {CardContent}
                    </div>
                  )}
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
            <span>© 2026 Shubham Chavan</span>
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
      className="group flex items-center justify-between bg-background p-8 transition-all hover:bg-ink hover:text-hover-light"
    >
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/50 transition-colors group-hover:text-hover-light/60">{label}</p>
        <p className="mt-3 truncate font-serif text-lg transition-colors group-hover:text-hover-lavender">
          {value}
        </p>
      </div>
      <div className="ml-4 flex shrink-0 items-center gap-3 text-foreground/60 transition-colors group-hover:text-hover-lavender">
        <Icon size={20} strokeWidth={1.6} />
        <ExternalLink size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </a>
  );
}
