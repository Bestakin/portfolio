import { Sparkles } from 'lucide-react';
import { experience, interests, skills } from '../data/profile';
import { Icon, Reveal, SectionTitle } from './ui';

// Monogram + colour for each tech tile (Violet Orbit style). Swap for real logos any time.
const tile = {
  Java: ['Jv', '#FB923C'], 'Spring Boot': ['Sb', '#4ADE80'], Python: ['Py', '#FACC15'], FastAPI: ['Fa', '#2DD4BF'],
  'REST APIs': ['{ }', '#C4B5FD'], React: ['Re', '#67E8F9'], 'React Native': ['RN', '#67E8F9'], JavaScript: ['JS', '#FDE047'],
  MySQL: ['My', '#60A5FA'], SQLite: ['SQ', '#93C5FD'], Firebase: ['Fb', '#FBBF24'], Docker: ['Dk', '#60A5FA'],
  Kubernetes: ['K8', '#818CF8'], 'GitHub Actions': ['GA', '#D8D4F5'], 'Google Cloud': ['GC', '#F87171'],
  OpenCV: ['CV', '#A3E635'], YOLOv8: ['Yo', '#F472B6'],
};

/** Experience timeline (left) and tech stack grid (right); stacks on mobile. */
export default function ExperienceSkills() {
  const stack = [...new Set(skills.flatMap((g) => g.items))];

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 pt-12" aria-labelledby="exp-title">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <Reveal>
          <SectionTitle id="exp-title">Experience</SectionTitle>
          <ol className="mt-6">
            {experience.map((job) => (
              <li key={job.company} className="flex gap-4">
                <div className="flex flex-col items-center" aria-hidden="true">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-2 bg-panel-2 text-lg font-extrabold text-neon">
                    {job.company.charAt(0)}
                  </span>
                  <span className="mt-2 w-px flex-1 bg-line-2" />
                </div>
                <article className="flex-1 pb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-bold">{job.company}</h3>
                    <span className="rounded-full bg-panel-2 px-3 py-1 text-xs font-medium text-neon">{job.dates}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{job.role}{job.location ? ` · ${job.location}` : ''}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-soft">{job.summary}</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>

          {/* Beyond the code: a short personal note */}
          <div className="mt-6 rounded-2xl border border-line bg-panel p-5">
            <h3 className="flex items-center gap-2.5 text-lg font-bold">
              <Sparkles size={18} className="text-neon" aria-hidden="true" /> Beyond the code
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{interests.text}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {interests.tags.map((t) => (
                <li key={t.label} className="inline-flex items-center gap-1.5 rounded-full bg-panel-2 px-3 py-1.5 text-sm font-medium text-soft">
                  <Icon name={t.icon} size={15} className="text-neon" /> {t.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div id="skills" className="scroll-mt-24">
            <SectionTitle>Tech Stack</SectionTitle>
            <ul className="mt-6 grid grid-cols-4 gap-2 sm:gap-2.5 xl:grid-cols-5" aria-label="Technologies I work with">
              {stack.map((t) => {
                const [code, color] = tile[t] ?? [t.slice(0, 2), '#C4B5FD'];
                return (
                  <li
                    key={t}
                    className="flex aspect-[1/0.9] flex-col items-center justify-center gap-1.5 rounded-[14px] border border-line bg-panel px-1 text-center transition-colors hover:border-neon/50"
                  >
                    <span className="font-mono text-base font-medium" style={{ color }}>{code}</span>
                    <span className="text-[11.5px] leading-tight text-soft">{t}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
