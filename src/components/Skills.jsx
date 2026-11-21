import { skills } from '../data/profile';
import { Icon, Reveal, SectionTitle } from './ui';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 pt-20" aria-labelledby="skills-title">
      <Reveal>
        <SectionTitle id="skills-title">Technical Skills</SectionTitle>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.06}>
            <div className="glow-card h-full rounded-2xl border border-line bg-panel p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon/10 text-neon">
                  <Icon name={g.icon} size={20} />
                </span>
                <h3 className="font-bold">{g.group}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl border border-line bg-panel-2 px-2 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-neon/60 hover:shadow-[0_0_24px_rgba(112,255,101,0.15)]"
                  >
                    <span className="font-mono text-sm font-medium text-neon">{monogram(t)}</span>
                    <span className="text-xs text-soft">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Short code shown above each name. Swap for real icons (e.g. devicon) if you like.
function monogram(name) {
  const special = { 'Spring Boot': 'Sb', 'React Native': 'RN', 'REST APIs': '{ }', 'GitHub Actions': 'GA', Kubernetes: 'K8s', JavaScript: 'JS', MySQL: 'My', SQLite: 'SQ', YOLOv8: 'v8', OpenCV: 'CV', FastAPI: 'Fa', 'Google Cloud': 'GC' };
  return special[name] ?? name.slice(0, 2);
}
