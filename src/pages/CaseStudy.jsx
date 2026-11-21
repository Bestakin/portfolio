import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, ChevronDown, Globe, Info } from 'lucide-react';
import { featuredProjects } from '../data/projects';
import { GhostLink, GithubIcon, Icon, PrimaryLink, Reveal } from '../components/ui';
import ProjectMedia from '../components/ProjectMedia';
import ArchitectureFlow from '../components/ArchitectureFlow';
import NotFound from './NotFound';

// How much is visible before "Show more". The rest stays one click away.
const VISIBLE_CHALLENGES = 2;
const VISIBLE_FEATURES = 6;

export default function CaseStudy() {
  const { slug } = useParams();
  const i = featuredProjects.findIndex((p) => p.slug === slug);
  const p = featuredProjects[i];

  useEffect(() => {
    if (p) document.title = `${p.name} — Case Study · Best Akinlabi`;
  }, [p]);

  if (!p) return <NotFound />;
  const next = featuredProjects[(i + 1) % featuredProjects.length];
  const arch = p.architecture;

  return (
    <main className="mx-auto max-w-6xl px-5 pt-24 pb-16 sm:pt-28">
      <Link to="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-soft hover:text-neon">
        <ArrowLeft size={16} aria-hidden="true" /> Back to projects
      </Link>

      {/* Overview: media left, intro right (stacks on mobile) */}
      <section className="mt-3 grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10" aria-labelledby="cs-title">
        <Reveal>
          <ProjectMedia project={p} />
          {p.imageIsMockup && (
            <p className="mt-2 font-mono text-[11px] text-muted">Illustrative interface preview</p>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs tracking-[0.16em] text-neon">CASE STUDY · {p.category.toUpperCase()}</p>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
                <Icon name={p.icon} size={24} />
              </span>
              <h1 id="cs-title" className="text-[clamp(2.2rem,5vw,3.2rem)] leading-none font-extrabold tracking-tight">{p.name}</h1>
            </div>
            {p.status && (
              <p className="inline-flex items-center gap-2 font-mono text-xs text-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" aria-hidden="true" /> {p.status}
              </p>
            )}
            <p className="text-lg leading-relaxed text-soft">{p.description}</p>

            {p.facts && (
              <ul className="grid grid-cols-2 gap-2">
                {p.facts.map((f) => (
                  <li key={f} className="rounded-lg border border-line bg-panel px-3 py-2 text-sm font-semibold">{f}</li>
                ))}
              </ul>
            )}

            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
              {p.tech.map((t) => <li key={t}><TechChip>{t}</TechChip></li>)}
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              {p.links.live && <PrimaryLink href={p.links.live} external><Globe size={16} aria-hidden="true" /> Live Demo</PrimaryLink>}
              {p.links.github && <GhostLink href={p.links.github} external><GithubIcon size={16} /> GitHub</GhostLink>}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Problem / Solution */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <TextCard title="The problem" paras={p.problem} />
        <TextCard title="The solution" paras={p.solution} accent />
      </section>

      {/* Architecture: the flow first, component details under it */}
      <Section title="Technical Architecture">
        <Reveal>
          <div className="rounded-2xl border border-line bg-panel p-5 sm:p-6">
            <p className="mb-4 max-w-3xl text-sm leading-relaxed text-soft sm:text-base">{arch.summary}</p>
            <p className="mb-2 font-mono text-[11px] tracking-[0.16em] text-muted">HOW DATA FLOWS</p>
            <ArchitectureFlow steps={arch.flow} />
            <div className={`mt-5 grid gap-3 ${arch.components.length === 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3'}`}>
              {arch.components.map((c) => (
                <div key={c.title} className="rounded-xl border border-line bg-panel-2 p-4">
                  <h3 className="mb-1 text-sm font-bold">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{c.body}</p>
                </div>
              ))}
            </div>
            {arch.note && (
              <p className="mt-3 inline-flex items-start gap-2 text-sm text-muted">
                <Info size={16} className="mt-0.5 shrink-0 text-neon" aria-hidden="true" /> {arch.note}
              </p>
            )}
          </div>
        </Reveal>
      </Section>

      {/* Engineering challenges: top two, rest behind "Show more" */}
      <Section title="Engineering Challenges">
        <ExpandableList
          items={p.challenges}
          visible={VISIBLE_CHALLENGES}
          label="challenges"
          className="grid gap-4 md:grid-cols-2"
          render={(c, n) => (
            <article className="glow-card h-full rounded-2xl border border-line bg-panel p-5">
              <p className="font-mono text-xs text-neon">CHALLENGE {String(n + 1).padStart(2, '0')}</p>
              <h3 className="mt-1.5 text-lg font-bold">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.body}</p>
            </article>
          )}
          getKey={(c) => c.title}
        />
      </Section>

      {/* Key features: six, rest behind "Show more" */}
      <Section title="Key Features">
        <ExpandableList
          items={p.features}
          visible={VISIBLE_FEATURES}
          label="features"
          className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
          render={(f) => (
            <div className="flex h-full items-start gap-2.5 rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-soft">
              <Check size={16} className="mt-0.5 shrink-0 text-neon" aria-hidden="true" /> {f}
            </div>
          )}
          getKey={(f) => f}
        />
      </Section>

      {/* Screenshots (real frames, StatCourt only for now) */}
      {p.screenshots && (
        <Section title="Screenshots">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.screenshots.map((s, n) => (
              <Reveal key={s.src} delay={n * 0.04}>
                <figure className="overflow-hidden rounded-xl border border-line bg-panel">
                  <img src={s.src} alt={`${p.name}: ${s.caption}`} loading="lazy" className="aspect-video w-full object-cover" />
                  <figcaption className="px-3 py-2 text-xs text-muted">{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Next */}
      <Link
        to={`/projects/${next.slug}`}
        className="glow-card mt-10 flex items-center justify-between gap-4 rounded-2xl border border-line bg-panel p-5"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon/10 text-neon"><Icon name={next.icon} size={20} /></span>
          <span>
            <span className="block font-mono text-xs text-muted">NEXT CASE STUDY</span>
            <span className="mt-0.5 block font-display text-xl font-semibold">{next.name}</span>
          </span>
        </span>
        <ArrowRight className="text-neon" aria-hidden="true" />
      </Link>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <Reveal>
        <h2 className="mb-4 flex items-center gap-3 text-xl font-bold tracking-tight sm:text-2xl"><span className="h-[3px] w-6 rounded-full bg-neon" aria-hidden="true" /> {title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function TextCard({ title, paras, accent }) {
  return (
    <Reveal className="h-full">
      <article className={`h-full rounded-2xl border p-5 sm:p-6 ${accent ? 'border-neon/30 bg-[#16132B]' : 'border-line bg-panel'}`}>
        <h2 className="mb-2 flex items-center gap-3 text-xl font-bold tracking-tight"><span className="h-[3px] w-6 rounded-full bg-neon" aria-hidden="true" /> {title}</h2>
        <div className="flex flex-col gap-3 leading-relaxed text-soft">
          {paras.map((t) => <p key={t}>{t}</p>)}
        </div>
      </article>
    </Reveal>
  );
}

function TechChip({ children }) {
  return (
    <span className="inline-block rounded-md border border-line-2 bg-panel-2/60 px-2 py-0.5 text-[11px] font-semibold text-soft">
      {children}
    </span>
  );
}

/** Shows the first `visible` items, with a toggle for the rest. */
function ExpandableList({ items, visible, label, className, render, getKey }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const head = items.slice(0, visible);
  const tail = items.slice(visible);
  const id = `more-${label}`;

  return (
    <div>
      <ul className={className}>
        {head.map((item, n) => <li key={getKey(item)}><Reveal className="h-full" delay={n * 0.04}>{render(item, n)}</Reveal></li>)}
        <AnimatePresence initial={false}>
          {open && tail.map((item, n) => (
            <motion.li
              key={getKey(item)}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 10 }}
              transition={{ duration: 0.25, delay: n * 0.03 }}
            >
              {render(item, visible + n)}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {tail.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg border border-line-2 px-4 text-sm font-semibold text-soft transition-colors hover:border-neon hover:text-neon"
        >
          {open ? 'Show less' : `Show ${tail.length} more ${label}`}
          <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      )}
      <span id={id} className="sr-only" aria-live="polite">{open ? `All ${items.length} ${label} shown` : ''}</span>
    </div>
  );
}
