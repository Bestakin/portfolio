import { highlights } from '../data/profile';
import { Icon, Reveal } from './ui';

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="mx-auto max-w-6xl px-5">
      <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.value} className="flex items-center gap-4 bg-panel px-6 py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
                <Icon name={h.icon} size={20} />
              </span>
              <div>
                <p className="font-bold leading-tight">{h.value}</p>
                <p className="mt-1 text-sm text-muted">{h.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
