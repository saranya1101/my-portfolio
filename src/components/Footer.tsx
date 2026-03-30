import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h2 className="text-2xl font-display font-bold gradient-text mb-2">Saranya</h2>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link to="home" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Projects</Link>
          <Link to="resume" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Resume</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Contact</Link>
        </div>

        <div className="text-center md:text-right">
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center justify-center md:justify-end gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> by Saranya
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">
            © {currentYear} Saranya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
