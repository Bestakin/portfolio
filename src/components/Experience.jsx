import { experience } from '../data/profile';
import { Reveal, SectionTitle } from './ui';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 pt-20" aria-labelledby="exp-title">
      <Reveal>
        <SectionTitle id="exp-title">Experience</SectionTitle>
      </Reveal>
      <ol className="mt-8 border-l border-line-2 pl-7 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              className="absolute top-2 -left-[37px] h-3.5 w-3.5 rounded-full border-2 border-neon bg-ink sm:-left-[41px]"
              aria-hidden="true"
            />
            <Reveal>
              <article className="glow-card rounded-2xl border border-line bg-panel p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="mt-1 font-semibold text-neon">{job.company}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-soft">
                    <p className="rounded-full border border-line-2 px-3 py-1">{job.dates}</p>
                    {job.location && <p className="mt-1.5 text-muted">{job.location}</p>}
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-soft">{job.summary}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
