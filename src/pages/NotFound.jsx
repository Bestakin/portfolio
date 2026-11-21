import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-xl flex-col items-center justify-center gap-5 px-5 text-center">
      <p className="font-mono text-neon">404</p>
      <h1 className="font-display text-4xl font-extrabold">Page not found<span className="cursor-blink text-neon">_</span></h1>
      <Link to="/" className="glow-btn inline-flex min-h-11 items-center rounded-lg bg-neon px-5 font-bold text-ink">Back home</Link>
    </main>
  );
}
