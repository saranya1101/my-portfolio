import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full glass bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
}