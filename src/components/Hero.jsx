import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { about, highlights, profile } from '../data/profile';
import { featuredProjects } from '../data/projects';
import { GhostLink, GithubIcon, Icon, LinkedinIcon, PrimaryLink } from './ui';
import OrbitGlobe from './OrbitGlobe';

export default function Hero() {
  const reduce = useReducedMotion();
  const up = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-[1.35fr_1fr]">
        <div className="flex flex-col gap-5">
          <motion.span {...up(0)} className="self-start rounded-full border border-line-2 bg-panel-2 px-3.5 py-1.5 text-sm text-soft">
            Hey, I'm
          </motion.span>

          <motion.h1 {...up(0.06)} className="text-[clamp(2.9rem,8vw,5.25rem)] leading-[0.98] font-extrabold tracking-[-0.04em]">
            {profile.name}
          </motion.h1>

          <motion.p {...up(0.12)} className="text-lg font-medium text-soft sm:text-xl">{profile.roleLine}</motion.p>

          {/* Two-sentence intro */}
          <motion.p {...up(0.18)} className="max-w-xl text-[17px] leading-relaxed text-muted">{about[0]}</motion.p>

          <motion.div {...up(0.24)} className="flex flex-wrap items-center gap-3 pt-1">
            <PrimaryLink href="#projects">View my projects <ArrowRight size={18} aria-hidden="true" /></PrimaryLink>
            <GhostLink href={profile.resume} download={profile.resumeFileName}>
              Resume <Download size={17} aria-hidden="true" />
            </GhostLink>
            <span className="flex items-center">
              {profile.github && <SocialLink href={profile.github} label="GitHub"><GithubIcon size={20} /></SocialLink>}
              {profile.linkedin && <SocialLink href={profile.linkedin} label="LinkedIn"><LinkedinIcon size={19} /></SocialLink>}
              <SocialLink href="#contact" label="Email me"><Mail size={21} aria-hidden="true" /></SocialLink>
            </span>
          </motion.div>

          {/* Direct routes into the work */}
          <motion.nav {...up(0.3)} aria-label="Featured projects" className="flex flex-wrap items-center gap-2 text-sm">
            <span className="mr-1 text-muted">Explore:</span>
            {featuredProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-panel px-3 font-semibold text-soft transition-colors hover:border-neon/50 hover:text-neon"
              >
                <Icon name={p.icon} size={15} className="text-neon" /> {p.name}
              </Link>
            ))}
          </motion.nav>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto hidden w-full max-w-[380px] sm:block"
        >
          <OrbitGlobe />
        </motion.div>
      </div>

      {/* Verified highlights strip */}
      <div className="mx-auto mt-8 max-w-6xl px-5">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-5 lg:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.value} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-panel-2 text-neon">
                <Icon name={h.icon} size={20} />
              </span>
              <span className="min-w-0">
                <span className="block font-bold leading-tight">{h.value}</span>
                <span className="block text-[13px] text-muted">{h.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-soft transition-colors hover:bg-neon/10 hover:text-neon"
    >
      {children}
    </a>
  );
}
