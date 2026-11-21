# Best Akinlabi — Portfolio

My personal portfolio: a fast, responsive single-page site with in-depth case studies for my main projects.

**Live site:** _coming soon_

## Featured work

- **[StatCourt](https://getstatcourt.com)**: basketball and soccer analytics platform (React, FastAPI, Python, SQLite). Includes a 60-second demo video.
- **[ParkSenseAI](https://github.com/ParkSenseAI/ParkSenseAI)**: smart parking with YOLOv8 vehicle detection and a React Native app (team capstone).
- **[UniTrack](https://github.com/Bestakin/UniTrack)**: university enrollment platform built on FastAPI microservices.

Each project has a case-study page covering the problem, solution, architecture, engineering challenges and key features.

## Built with

- React + Vite
- Tailwind CSS
- Motion (scroll and entrance animations, with reduced-motion support)
- React Router (case-study pages)
- Lucide icons

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Project structure

```
src/
  data/profile.js      # bio, links, experience, skills
  data/projects.js     # project cards and case-study content
  components/          # homepage sections and shared UI
  pages/               # Home, CaseStudy, NotFound
public/
  media/               # StatCourt demo video and screenshots
  images/              # project previews
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` so case-study URLs work on refresh.

## Contact

[LinkedIn](https://www.linkedin.com/in/best-akinlabi-817416251/) · [GitHub](https://github.com/Bestakin) · akinlabibest@gmail.com
