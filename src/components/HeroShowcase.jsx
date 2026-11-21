import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

/** A real StatCourt frame in a clean laptop mockup. */
export default function HeroShowcase() {
  const reduce = useReducedMotion();
  return (
    <figure className="relative mx-auto w-full max-w-[620px]">
      <div className="pointer-events-none absolute inset-x-[12%] top-[18%] h-[60%] rounded-full bg-neon/10 blur-[80px]" aria-hidden="true" />

      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* screen */}
        <div className="relative mx-[6%] rounded-t-[18px] border border-[#2E3532] bg-[#0B0E0D] p-[2.2%] pb-[2.6%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
          <span className="absolute top-[0.9%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1E2421]" aria-hidden="true" />
          <div className="overflow-hidden rounded-[6px] bg-black">
            <img
              src="/media/statcourt-shot-1.webp"
              alt="StatCourt basketball head-to-head comparison screen"
              width="1600"
              height="900"
              fetchPriority="high"
              className="block aspect-video w-full object-cover"
            />
          </div>
        </div>
        {/* base */}
        <div className="relative h-[14px] rounded-b-[14px] bg-gradient-to-b from-[#3A413E] to-[#1B201E] sm:h-[18px]" aria-hidden="true">
          <span className="absolute top-0 left-1/2 h-[5px] w-[16%] -translate-x-1/2 rounded-b-md bg-[#141917]" />
        </div>
        <div className="mx-auto h-3 w-[80%] rounded-[50%] bg-black/60 blur-md" aria-hidden="true" />
      </motion.div>

      <figcaption className="mt-3 flex justify-center">
        <a
          href="https://getstatcourt.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-2 bg-panel/80 px-4 font-mono text-xs text-soft transition-colors hover:border-neon hover:text-neon"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon" aria-hidden="true" />
          StatCourt · live at getstatcourt.com
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
