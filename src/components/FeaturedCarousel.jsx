import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Globe } from 'lucide-react';
import { featuredProjects } from '../data/projects';
import { Badge, GhostLink, GithubIcon, Icon, Reveal, SectionTitle } from './ui';
import ProjectMedia from './ProjectMedia';

export default function FeaturedCarousel() {
  const [[index, dir], setState] = useState([0, 0]);
  const reduce = useReducedMotion();
  const n = featuredProjects.length;
  const p = featuredProjects[index];

  const go = useCallback((d) => setState(([i]) => [(i + d + n) % n, d]), [n]);
  const jump = (i) => setState([i, i > index ? 1 : -1]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  const variants = {
    enter: (d) => (reduce ? { opacity: 0 } : { opacity: 0, x: d >= 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => (reduce ? { opacity: 0 } : { opacity: 0, x: d >= 0 ? -40 : 40 }),
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 pt-20" aria-labelledby="projects-title">
      <Reveal>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTitle id="projects-title">Featured Projects</SectionTitle>
            <p className="mt-2 text-muted">Things I've designed, built and shipped.</p>
          </div>
          <div className="flex items-center gap-2">
            <ArrowButton label="Previous project" onClick={() => go(-1)}><ArrowLeft size={18} aria-hidden="true" /></ArrowButton>
            <ArrowButton label="Next project" onClick={() => go(1)}><ArrowRight size={18} aria-hidden="true" /></ArrowButton>
          </div>
        </div>

        {/* project tabs */}
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Featured projects">
          {featuredProjects.map((fp, i) => (
            <button
              key={fp.slug}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => jump(i)}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg border px-4 text-sm font-semibold transition-colors ${
                i === index ? 'border-neon/60 bg-neon/10 text-neon' : 'border-line text-soft hover:border-line-2 hover:text-white'
              }`}
            >
              <Icon name={fp.icon} size={16} />
              {fp.name}
            </button>
          ))}
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-line bg-panel"
          role="tabpanel"
          aria-roledescription="carousel"
          aria-label={`${p.name}, ${index + 1} of ${n}`}
          tabIndex={0}
          onKeyDown={onKey}
        >
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.article
              key={p.slug}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-8"
            >
              <ProjectMedia project={p} autoPreview />

              <div className="flex flex-col gap-4 px-1 pb-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight font-semibold">{p.name}</h3>
                    <p className="text-xs text-muted">{p.category}</p>
                  </div>
                </div>
                {p.status && (
                  <p className="inline-flex items-center gap-2 font-mono text-xs text-neon">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon" aria-hidden="true" /> {p.status}
                  </p>
                )}
                <p className="leading-relaxed text-soft">{p.description}</p>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tech.slice(0, 6).map((t) => <li key={t}><Badge>{t}</Badge></li>)}
                </ul>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    to={`/projects/${p.slug}`}
                    className="glow-btn inline-flex min-h-11 items-center gap-2 rounded-lg bg-neon px-5 py-3 text-sm font-bold text-ink hover:bg-[#8dff84]"
                  >
                    View Case Study <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  {p.links.live && (
                    <GhostLink href={p.links.live} external><Globe size={16} aria-hidden="true" /> Live Demo</GhostLink>
                  )}
                  {p.links.github && (
                    <GhostLink href={p.links.github} external><GithubIcon size={16} /> GitHub</GhostLink>
                  )}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}

function ArrowButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="glow-btn inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-2 hover:border-neon hover:text-neon"
    >
      {children}
    </button>
  );
}
