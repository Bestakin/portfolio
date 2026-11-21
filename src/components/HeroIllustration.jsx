import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';

// Want a cinematic rendered image instead? Put it in public/images and set this,
// e.g. '/images/hero-workspace.webp'. The illustrated scene below is the fallback.
const HERO_IMAGE = null;

const code = [
  [['k', '@app'], ['t', '.post('], ['s', '"/verify"'], ['t', ')']],
  [['k', 'async def '], ['f', 'verify_product'], ['t', '(scan: Scan):']],
  [['i', '    '], ['t', 'product = '], ['k', 'await '], ['f', 'repo.find'], ['t', '(scan.code)']],
  [['i', '    '], ['k', 'if not '], ['t', 'product:']],
  [['i', '        '], ['k', 'raise '], ['f', 'HTTPException'], ['t', '('], ['n', '404'], ['t', ')']],
  [['i', '    '], ['t', 'scan.status = '], ['f', 'check_state'], ['t', '(product)']],
  [['i', '    '], ['k', 'return '], ['s', '{"verified": True}']],
];
const color = { k: 'text-[#C792EA]', f: 'text-[#82AAFF]', s: 'text-neon', n: 'text-[#F78C6C]', t: 'text-soft', i: '' };

export default function HeroIllustration() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 80, damping: 20 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  if (HERO_IMAGE) {
    return (
      <img src={HERO_IMAGE} alt="" className="mx-auto w-full max-w-xl rounded-2xl" fetchPriority="high" />
    );
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[560px] [perspective:1200px]"
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      aria-hidden="true"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-[28%] left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-neon/20 blur-[90px]" />

      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* lamp */}
        <svg viewBox="0 0 160 220" className="absolute top-[2%] left-0 w-[26%]">
          <defs>
            <radialGradient id="lampLight" cx="0.5" cy="0" r="1">
              <stop offset="0" stopColor="#70FF65" stopOpacity="0.55" />
              <stop offset="1" stopColor="#70FF65" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d="M108 70 L150 210 L40 210 Z" fill="url(#lampLight)" />
          <rect x="18" y="200" width="56" height="10" rx="5" fill="#1B2320" />
          <path d="M46 200 L46 120 L96 60" stroke="#28322E" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="46" cy="120" r="7" fill="#323E39" />
          <path d="M80 44 L128 62 L112 84 L66 64 Z" fill="#2E8A2A" />
          <path d="M84 50 L122 64 L114 76 L74 60 Z" fill="#70FF65" />
        </svg>

        {/* laptop */}
        <div className="relative z-10 mt-16 mr-[15%] ml-auto w-[62%]">
          <div className="rounded-t-xl border-2 border-[#26302C] bg-[#0F1412] p-2 shadow-[0_0_70px_rgba(112,255,101,0.25)]">
            <div className="rounded-md bg-[#070A09] px-3 py-3 font-mono text-[9px] leading-[1.8] sm:text-[11px]">
              <div className="mb-1.5 flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-[8px] text-muted sm:text-[9px]">verify.py</span>
              </div>
              {code.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  <span className="mr-3 text-[#3D4A45]">{i + 1}</span>
                  {line.map(([t, txt], j) => <span key={j} className={color[t]}>{txt}</span>)}
                </div>
              ))}
              <div className="mt-1 text-neon">
                ✓ 200 OK <span className="cursor-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-neon" />
              </div>
            </div>
          </div>
          <div className="mx-[-8%] h-3 rounded-b-xl border border-[#2A3430] bg-gradient-to-b from-[#232B28] to-[#141A18]" />
          <div className="mx-auto h-1 w-1/4 rounded-b bg-[#0D110F]" />
        </div>

        {/* mug */}
        <div className="absolute right-[6%] bottom-[7%] z-20 h-10 w-8 rounded-b-md rounded-t-sm border border-[#2A3430] bg-[#141A18] sm:h-12 sm:w-10">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] text-neon">&lt;/&gt;</span>
          <span className="absolute top-2 -right-2.5 h-5 w-3 rounded-r-full border-2 border-l-0 border-[#2A3430]" />
        </div>

        {/* plant */}
        <svg viewBox="0 0 120 160" className="absolute right-[-4%] bottom-[6%] z-0 w-[22%] sm:right-[-2%]">
          <path d="M60 110 C40 80 20 70 10 40 C35 50 52 70 60 110Z" fill="#1F5A1C" />
          <path d="M60 110 C80 76 98 66 112 30 C86 44 68 68 60 110Z" fill="#2E8A2A" />
          <path d="M60 110 C56 70 58 40 64 8 C74 40 70 72 60 110Z" fill="#3FAF38" />
          <path d="M32 106 L88 106 L80 156 L40 156 Z" fill="#1B2320" stroke="#2A3430" strokeWidth="2" />
        </svg>

        {/* desk */}
        <div className="relative z-0 mx-[-4%] mt-[-2px] h-5 rounded-md border-t border-[#2A3430] bg-gradient-to-b from-[#161D1A] to-[#0B0F0D]" />
        <div className="mx-auto h-10 w-[90%] bg-gradient-to-b from-[#0B0F0D] to-transparent" />
      </motion.div>
    </div>
  );
}
