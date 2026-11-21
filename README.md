# Best Akinlabi — Portfolio

React + Vite + Tailwind CSS + Motion + Lucide + React Router.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Where to edit

Almost everything you'll change is in two files:

- `src/data/profile.js`: name, links, resume, photo, highlights, experience, skills, about text
- `src/data/projects.js`: featured projects (carousel + case studies) and the "More projects" cards

Links set to `null` are hidden, so nothing shows as a broken button.

## Placeholders to fill (TODO)

- [ ] `public/resume.pdf`: add your resume (the Resume buttons download this file)
- [ ] `profile.github` and `profile.linkedin` URLs (the icons and buttons appear once set)
- [ ] `profile.photo`: headshot in `public/images/`
- [ ] DemmyPay exact dates (`experience[0].dates`)
- [ ] Screenshots: put them in `public/images/` and set each project's `image`
- [ ] GitHub links for each project
- [ ] Case-study text for each featured project: `problem`, `solution`, `architecture`, `challenges`
- [ ] UniTrack technologies
- [ ] Movie Website: set `show: true` once details are confirmed
- [ ] Optional: a rendered hero image. Set `HERO_IMAGE` in `src/components/HeroIllustration.jsx`
- [ ] Optional: `og:image` / `og:url` in `index.html` once you have a domain

## Deploy

**Vercel (recommended):** push to GitHub, then "Import Project" on vercel.com. It detects Vite automatically. `vercel.json` already handles the case-study routes.

**Render:** New → Static Site. Build command `npm install && npm run build`, publish directory `dist`. Then add a rewrite rule: source `/*`, destination `/index.html`, action Rewrite (needed so `/projects/statcourt` works on refresh).

## Notes

- Animations respect the visitor's "reduce motion" setting.
- Tech-stack cards use short monograms (Ja, Sb, K8s). Swap in real logos from a library like devicon if you want.
