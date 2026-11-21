import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Download } from 'lucide-react';
import { profile } from '../data/profile';
import { GhostLink, GithubIcon, LinkedinIcon, Reveal } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pt-12 pb-8" aria-labelledby="contact-title">
      <Reveal>
        <div className="flex flex-col gap-6 rounded-[22px] border border-[#34306A] bg-[#17142C] p-7 shadow-[inset_0_0_70px_rgba(167,139,250,0.1)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="contact-title" className="text-[clamp(1.7rem,4vw,2.3rem)] leading-tight font-extrabold tracking-tight">
              Let's build something impactful.
            </h2>
            <p className="mt-2 text-muted">Open to new grad software engineering roles in the GTA from early 2027.</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <EmailButton />
            <div className="flex flex-wrap gap-2.5">
              {profile.linkedin && <GhostLink href={profile.linkedin} external><LinkedinIcon size={16} /> LinkedIn</GhostLink>}
              {profile.github && <GhostLink href={profile.github} external><GithubIcon size={17} /> GitHub</GhostLink>}
              <GhostLink href={profile.resume} download={profile.resumeFileName}><Download size={17} aria-hidden="true" /> Resume</GhostLink>
            </div>
          </div>
        </div>
      </Reveal>
      <footer className="mt-8 text-center text-[13px] text-muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </section>
  );
}

/**
 * mailto: silently fails when no mail app is set up, so clicking also copies
 * the address and confirms it on screen.
 */
function EmailButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = () => {
    navigator.clipboard?.writeText(profile.email).catch(() => {});
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 3500);
  };

  return (
    <a
      href={`mailto:${profile.email}`}
      onClick={onClick}
      className="glow-btn inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-neon px-6 text-sm font-bold text-ink shadow-[0_0_20px_rgba(167,139,250,0.2)] hover:bg-[#C4B5FD]"
    >
      {copied ? <Check size={18} aria-hidden="true" /> : null}
      {copied ? `Copied ${profile.email}` : 'Get in touch'}
      {!copied && <ArrowRight size={18} aria-hidden="true" />}
      <span role="status" className="sr-only">{copied ? 'Email address copied to clipboard' : ''}</span>
    </a>
  );
}
