import { ArrowDown, ArrowRight } from 'lucide-react';

/** Left-to-right pipeline on desktop, top-to-bottom on mobile. */
export default function ArchitectureFlow({ steps }) {
  return (
    <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center" aria-label="Architecture flow">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row">
          <span
            className={`flex w-full min-h-14 items-center justify-center rounded-xl border px-3 py-3 text-center text-sm font-semibold lg:min-h-16 ${
              i === steps.length - 1 ? 'border-neon/60 bg-neon/10 text-neon' : 'border-line-2 bg-panel-2 text-soft'
            }`}
          >
            <span className="mr-2 font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
            {s}
          </span>
          {i < steps.length - 1 && (
            <>
              <ArrowDown size={16} className="shrink-0 text-neon lg:hidden" aria-hidden="true" />
              <ArrowRight size={16} className="hidden shrink-0 text-neon lg:block" aria-hidden="true" />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}
