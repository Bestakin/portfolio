import { motion, useReducedMotion } from 'motion/react';
import {
  Brain, Briefcase, Car, ChartColumn, Circle, Cloud, Code2, Database, Globe, GraduationCap, HardDrive, Layers, LayoutGrid, Server, ShieldCheck, Trophy, ChartLine, BrainCircuit,
} from 'lucide-react';

// Icons referenced by name in src/data. Add an import here if you use a new one.
const Icons = { Brain, Briefcase, Car, ChartColumn, Cloud, Code2, Database, Globe, GraduationCap, HardDrive, Layers, LayoutGrid, Server, ShieldCheck, Trophy, ChartLine, BrainCircuit };

export function Icon({ name, ...props }) {
  const Cmp = Icons[name] ?? Circle;
  return <Cmp aria-hidden="true" {...props} />;
}

// Lucide has no brand logos, so these two are inline SVGs.
export function GithubIcon({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/** Fades a block up into view as you scroll (skipped for reduced motion). */
export function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ children, id, kicker }) {
  return (
    <div>
      {kicker && <p className="mb-2 font-mono text-xs tracking-[0.18em] text-neon">{kicker}</p>}
      <h2 id={id} className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
        <span className="h-[3px] w-6 shrink-0 rounded-full bg-neon" aria-hidden="true" /> {children}
      </h2>
    </div>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-block rounded-md bg-[#1C1B2E] px-2.5 py-1 text-xs font-medium text-soft">
      {children}
    </span>
  );
}

const base =
  'glow-btn inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold';

export function PrimaryLink({ href, children, external, ...rest }) {
  return (
    <a
      href={href}
      className={`${base} bg-neon text-ink hover:bg-[#C4B5FD]`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function GhostLink({ href, children, external, ...rest }) {
  return (
    <a
      href={href}
      className={`${base} border border-line-2 text-white hover:border-neon hover:text-neon`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
