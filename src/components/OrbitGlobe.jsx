/** The dotted wireframe globe from the Violet Orbit design. Decorative only. */
export default function OrbitGlobe() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-auto w-full max-w-[400px] drop-shadow-[0_0_26px_rgba(167,139,250,0.16)]"
      aria-hidden="true"
    >
      <g className="orbit-spin" fill="none" stroke="#A78BFA" strokeLinecap="round" strokeWidth="3">
        <circle cx="200" cy="200" r="170" strokeDasharray="0.1 9" opacity="0.9" />
        <ellipse cx="200" cy="200" rx="170" ry="120" strokeDasharray="0.1 9" opacity="0.7" />
        <ellipse cx="200" cy="200" rx="170" ry="66" strokeDasharray="0.1 9" opacity="0.55" />
        <ellipse cx="200" cy="200" rx="120" ry="170" strokeDasharray="0.1 9" opacity="0.7" />
        <ellipse cx="200" cy="200" rx="66" ry="170" strokeDasharray="0.1 9" opacity="0.55" />
        <line x1="30" y1="200" x2="370" y2="200" strokeDasharray="0.1 9" opacity="0.45" />
        <line x1="200" y1="30" x2="200" y2="370" strokeDasharray="0.1 9" opacity="0.45" />
      </g>
      <circle cx="300" cy="96" r="6" fill="#FFFFFF" />
      <circle cx="96" cy="290" r="4" fill="#A78BFA" />
    </svg>
  );
}
