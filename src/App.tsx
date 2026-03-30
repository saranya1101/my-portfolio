/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden font-sans selection:bg-primary/30 selection:text-primary">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
