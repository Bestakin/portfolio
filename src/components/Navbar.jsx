import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = useLocation().pathname === '/';
  const lockUntil = useRef(0);

  // Highlight the section in view, based on scroll position.
  // Skills shares a row with Experience, so the two share one scroll region.
  // At the very bottom of the page, Contact is active even if it can't reach the top.
  useEffect(() => {
    if (!onHome) return;
    const sections = ['home', 'projects', 'experience', 'contact'];
    const update = () => {
      if (Date.now() < lockUntil.current) return; // a nav click is scrolling us there
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = 'home';
      if (atBottom) current = 'contact';
      else {
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
        }
      }
      setActive((prev) => (current === 'experience' && prev === 'skills' ? 'skills' : current));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [onHome]);

  // Clicking a link highlights it right away, even when the page can't scroll further.
  const onNavClick = (id) => {
    setOpen(false);
    if (!onHome) return;
    setActive(id);
    lockUntil.current = Date.now() + 900;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const href = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main">
        <Link to="/" className="inline-flex min-h-11 min-w-11 items-center text-2xl font-extrabold tracking-tight text-white" aria-label="Best Akinlabi, home">
          BA<span className="text-neon">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ id, label }) => {
            const isActive = onHome && active === id;
            return (
              <li key={id}>
                <a
                  href={href(id)}
                  onClick={() => onNavClick(id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`inline-flex min-h-11 items-center rounded-lg px-3.5 text-sm font-semibold transition-colors ${
                    isActive ? 'border border-neon/60 bg-neon/10 text-neon' : 'text-soft hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download={profile.resumeFileName}
            className="glow-btn hidden min-h-11 items-center gap-2 rounded-lg border border-line-2 px-4 text-sm font-semibold hover:border-neon hover:text-neon sm:inline-flex"
          >
            Resume <Download size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line-2 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden px-5 pb-4 lg:hidden"
          >
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={href(id)}
                  onClick={() => onNavClick(id)}
                  className={`flex min-h-12 items-center border-b border-line font-semibold ${
                    onHome && active === id ? 'text-neon' : 'text-soft'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href={profile.resume} download={profile.resumeFileName} className="inline-flex min-h-11 items-center gap-2 font-semibold text-neon">
                Download Resume <Download size={16} aria-hidden="true" />
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
