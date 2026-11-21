import { GraduationCap, MapPin } from 'lucide-react';
import { about, profile } from '../data/profile';
import { Reveal, SectionTitle } from './ui';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pt-20" aria-labelledby="about-title">
      <Reveal>
        <div className="grid items-center gap-8 rounded-2xl border border-line bg-panel p-6 sm:p-8 md:grid-cols-[200px_1fr] md:gap-10">
          <div className="mx-auto w-full max-w-[200px]">
            {profile.photo ? (
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            ) : (
              // Photo placeholder. Set profile.photo in src/data/profile.js to replace it.
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-line-2 bg-panel-2">
                <span className="font-display text-5xl font-extrabold text-neon">BA</span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <SectionTitle id="about-title">About Me</SectionTitle>
            <div className="flex max-w-2xl flex-col gap-3 text-lg leading-relaxed text-soft">
              {about.map((t) => <p key={t}>{t}</p>)}
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
              <li className="inline-flex items-center gap-2"><GraduationCap size={16} className="text-neon" aria-hidden="true" /> B.Eng. Software Engineering · Dec 2026</li>
              <li className="inline-flex items-center gap-2"><MapPin size={16} className="text-neon" aria-hidden="true" /> {profile.location}</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
