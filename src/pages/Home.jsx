import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import MoreProjects from '../components/MoreProjects';
import ExperienceSkills from '../components/ExperienceSkills';
import Contact from '../components/Contact';

// Short, scannable homepage. Detailed content lives on /projects/:slug.
// (About.jsx, Highlights.jsx, FeaturedCarousel.jsx, Experience.jsx and Skills.jsx
// are no longer used here but are kept in case you want them back.)
export default function Home() {
  useEffect(() => {
    document.title = 'Best Akinlabi — Software Engineer';
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <MoreProjects />
      <ExperienceSkills />
      <Contact />
    </main>
  );
}
