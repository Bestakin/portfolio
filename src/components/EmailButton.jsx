import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { profile } from '../data/profile';

/**
 * Plain "mailto:" links silently do nothing when the visitor has no mail app set up.
 * This copies the email address and shows a visible confirmation, then offers
 * the visitor's mail app and Gmail as explicit choices.
 */
export default function EmailButton({ label = 'Get in Touch', icon }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard blocked (e.g. non-https): fall back to a hidden textarea.
      const t = document.createElement('textarea');
      t.value = profile.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand('copy');
      t.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 4000);
  };

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="glow-btn inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-neon px-5 py-3 text-sm font-bold text-ink hover:bg-[#8dff84]"
      >
        {copied ? <Check size={18} aria-hidden="true" /> : icon}
        {copied ? 'Email copied!' : label}
      </button>

      <p role="status" aria-live="polite" className={`text-sm transition-opacity ${copied ? 'text-neon opacity-100' : 'opacity-0'}`}>
        {copied ? `${profile.email} is on your clipboard` : ' '}
      </p>

      <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-semibold">
        <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-1.5 text-soft hover:text-neon">
          <Mail size={16} aria-hidden="true" /> Open mail app
        </a>
        <a href={gmail} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-soft hover:text-neon">
          <Mail size={16} aria-hidden="true" /> Compose in Gmail
        </a>
        <button type="button" onClick={copy} className="inline-flex min-h-11 items-center gap-1.5 text-soft hover:text-neon">
          <Copy size={16} aria-hidden="true" /> {profile.email}
        </button>
      </div>
    </div>
  );
}
