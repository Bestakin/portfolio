import { moreProjects } from '../data/projects';
import { GithubIcon, Icon, Reveal } from './ui';

/** One compact row per additional project. */
export default function MoreProjects() {
  if (moreProjects.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-5 pt-6" aria-labelledby="more-title">
      <Reveal>
        <div className="rounded-2xl border border-line bg-panel px-5 py-2">
          <h3 id="more-title" className="pt-2 font-mono text-xs tracking-[0.16em] text-muted">MORE PROJECTS</h3>
          <ul className="divide-y divide-line">
            {moreProjects.map((p) => (
              <li key={p.name} className="flex flex-wrap items-center gap-x-4 gap-y-1 py-3">
                <Icon name={p.icon} size={18} className="text-neon" />
                <span className="font-semibold">{p.name}</span>
                {p.note && <span className="rounded-full bg-[#2A2410] px-2 py-0.5 text-xs font-semibold text-[#F2C14E]">{p.note}</span>}
                <span className="text-sm text-muted">{p.tech.slice(0, 3).join(' · ')}</span>
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-neon hover:underline"
                    aria-label={`${p.name} on GitHub`}
                  >
                    <GithubIcon size={16} /> GitHub
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
