import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { Play } from 'lucide-react';

/**
 * Real demo recording with a clean play overlay.
 * - Before play: shows the poster (a real frame). With `autoPreview`, a short
 *   muted loop plays while the video is on screen (never with sound, and never
 *   for visitors who prefer reduced motion).
 * - On click: swaps to the full video with native controls
 *   (play/pause, mute, fullscreen, replay) and sound.
 */
export default function VideoShowcase({ video, title, autoPreview = false, className = '' }) {
  const [started, setStarted] = useState(false);
  const reduce = useReducedMotion();
  const wrap = useRef(null);
  const previewRef = useRef(null);
  const fullRef = useRef(null);

  // Move keyboard focus to the player once it starts, so its controls are reachable.
  useEffect(() => {
    if (started) fullRef.current?.focus();
  }, [started]);

  // Only run the muted preview while it's actually visible.
  useEffect(() => {
    if (!autoPreview || reduce || started || !video.preview) return;
    const el = previewRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(wrap.current);
    return () => io.disconnect();
  }, [autoPreview, reduce, started, video.preview]);

  return (
    <div ref={wrap} className={`relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-black ${className}`}>
      {started ? (
        <video
          key="full"
          ref={fullRef}
          title={`${title} demo`}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="h-full w-full"
          aria-label={`${title} demo video`}
        />
      ) : (
        <>
          {autoPreview && !reduce && video.preview ? (
            <video
              ref={previewRef}
              src={video.preview}
              poster={video.poster}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          ) : (
            <img src={video.poster} alt={`${title} demo preview`} loading="lazy" className="h-full w-full object-cover" />
          )}

          <button
            type="button"
            onClick={() => setStarted(true)}
            className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/55 via-black/10 to-transparent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neon focus-visible:ring-inset"
            aria-label={`Play ${title} demo video${video.duration ? `, ${video.duration}` : ''}`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-neon text-ink shadow-[0_6px_24px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-105">
              <Play size={26} className="ml-1" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2.5 py-1 font-mono text-xs text-white">
              ▶ Watch demo{video.duration ? ` · ${video.duration}` : ''}
            </span>
          </button>
        </>
      )}
    </div>
  );
}
