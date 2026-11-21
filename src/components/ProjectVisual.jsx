/**
 * Shows the project screenshot when one is set in data/projects.js,
 * otherwise a styled placeholder mockup clearly labelled as such.
 */
export default function ProjectVisual({ project, className = '' }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        loading="lazy"
        className={`h-full w-full rounded-xl object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col gap-3 overflow-hidden rounded-xl border border-line bg-panel-2 p-5 ${className}`}
      role="img"
      aria-label={`Placeholder preview for ${project.name}`}
    >
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
      </div>
      <div className="flex flex-1" aria-hidden="true">
        {project.visual === 'chart' && <Chart />}
        {project.visual === 'parking' && <Parking />}
        {project.visual === 'qr' && <Qr />}
        {!project.visual && <Generic name={project.name} />}
      </div>
      <span className="absolute right-3 bottom-3 rounded bg-ink/80 px-2 py-1 font-mono text-[11px] text-muted">
        screenshot placeholder
      </span>
    </div>
  );
}

function Chart() {
  const bars = [35, 58, 46, 82, 64, 95, 72, 88];
  return (
    <div className="flex flex-1 items-end gap-2">
      {bars.map((h, i) => (
        <span
          key={i}
          className={`flex-1 rounded ${i === 3 || i === 5 ? 'bg-neon' : 'bg-[#1E3320]'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function Parking() {
  const open = new Set([1, 4, 7, 10, 14]);
  return (
    <div className="grid flex-1 grid-cols-8 gap-2">
      {Array.from({ length: 16 }, (_, i) => (
        <span
          key={i}
          className={`rounded-md border-2 ${open.has(i) ? 'border-neon bg-[#132A12]' : 'border-line-2'}`}
        />
      ))}
    </div>
  );
}

function Qr() {
  const on = '1101110101011101010111011';
  return (
    <div className="flex flex-1 items-center justify-center gap-6">
      <div className="grid h-32 w-32 grid-cols-5 gap-1 rounded-lg bg-white p-2.5">
        {on.split('').map((c, i) => (
          <span key={i} className={c === '1' ? 'bg-ink' : ''} />
        ))}
      </div>
      <span className="rounded-lg border border-neon bg-[#132A12] px-3 py-2 font-mono text-sm text-neon">
        ✓ authentic
      </span>
    </div>
  );
}

function Generic({ name }) {
  return (
    <div className="flex flex-1 items-center justify-center font-mono text-sm text-muted">
      [{name} screenshot]
    </div>
  );
}
