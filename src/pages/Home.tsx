/**
 * Home Page
 * Main landing page with all sections
 */

import Hero from '../components/Hero';
import GitHubActivity from '../components/GitHubActivity';
import Projects from '../components/Projects';
import BuildApplySection from '../components/BuildApplySection';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <GitHubActivity />
      <Projects />
      <BuildApplySection />
      <About />
      <Contact />
    </>
  );
};

export default Home;
