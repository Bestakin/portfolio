import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Globe } from 'lucide-react';
import { featuredProjects } from '../data/projects';
import { Badge, GhostLink, GithubIcon, Icon, Reveal, SectionTitle } from './ui';
import ProjectMedia from './ProjectMedia';

/**
 * StatCourt as the large lead project (with its real demo video),
 * then the other featured projects as smaller cards.
 * Full technical detail lives on each case-study page.
 */
export default function FeaturedProjects() {
  const [lead, ...rest] = featuredProjects;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 pt-12" aria-labelledby="projects-title">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle id="projects-title">Featured Projects</SectionTitle>
          <p className="text-sm text-muted">Case studies cover architecture and engineering decisions.</p>
        </div>
      </Reveal>

      {/* Lead project */}
      <Reveal>
        <article className="glow-card mt-5 grid gap-6 rounded-[20px] border border-line bg-panel p-4 sm:p-5 lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-8">
          <ProjectMedia project={lead} autoPreview />

          <div className="flex flex-col gap-4 px-1 pb-1 lg:pr-3">
            {lead.status && (
              <p className="inline-flex items-center gap-2 font-mono text-xs text-[#86EFAC]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" aria-hidden="true" /> {lead.status.toLowerCase()}
              </p>
            )}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-panel-2 text-neon">
                <Icon name={lead.icon} size={22} />
              </span>
              <h3 className="text-[1.9rem] leading-none font-extrabold tracking-tight"><Link to={`/projects/${lead.slug}`} className="inline-flex min-h-11 items-center hover:text-neon">{lead.name}</Link></h3>
            </div>
            <p className="leading-relaxed text-soft">{lead.description}</p>
            {lead.facts && (
              <ul className="grid grid-cols-2 gap-2 text-[13px]">
                {lead.facts.map((f) => (
                  <li key={f} className="rounded-lg border border-line bg-panel-2 px-3 py-2 font-semibold text-soft">{f}</li>
                ))}
              </ul>
            )}
            <ul className="flex flex-wrap gap-1.5" aria-label="Key technologies">
              {lead.keyTech.map((t) => <li key={t}><Badge>{t}</Badge></li>)}
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <CaseStudyLink slug={lead.slug} />
              {lead.links.live && (
                <GhostLink href={lead.links.live} external><Globe size={16} aria-hidden="true" /> Live demo</GhostLink>
              )}
            </div>
          </div>
        </article>
      </Reveal>

      {/* Smaller project cards */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06} className="h-full">
            <article className="glow-card flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-panel">
              <div className="p-3 pb-0">
                <ProjectMedia project={p} />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-panel-2 text-neon">
                      <Icon name={p.icon} size={18} />
                    </span>
                    <h3 className="text-xl font-bold tracking-tight"><Link to={`/projects/${p.slug}`} className="inline-flex min-h-11 items-center hover:text-neon">{p.name}</Link></h3>
                  </div>
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} on GitHub`}
                      title="View on GitHub"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-soft transition-colors hover:bg-neon/10 hover:text-neon"
                    >
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
                <ul className="flex flex-wrap gap-1.5" aria-label="Key technologies">
                  {p.keyTech.map((t) => <li key={t}><Badge>{t}</Badge></li>)}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
                  <CaseStudyLink slug={p.slug} />
                  {p.links.github && (
                    <a href={p.links.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-soft hover:text-neon">
                      <GithubIcon size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CaseStudyLink({ slug }) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="glow-btn inline-flex min-h-11 items-center gap-2 rounded-xl bg-neon px-5 text-sm font-bold text-ink hover:bg-[#C4B5FD]"
    >
      View case study <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
