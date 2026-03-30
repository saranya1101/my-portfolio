import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Cloud, Terminal } from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: <Layout size={20} /> },
  { name: 'CSS3', icon: <Layout size={20} /> },
  { name: 'JavaScript', icon: <Code2 size={20} /> },
  { name: 'React.js', icon: <Code2 size={20} /> },

  // Programming Languages
  { name: 'Java', icon: <Terminal size={20} /> },
  { name: 'Python', icon: <Terminal size={20} /> },
  { name: 'C', icon: <Terminal size={20} /> },
  { name: 'C++', icon: <Terminal size={20} /> },

  // Backend
  { name: 'Spring Boot', icon: <Server size={20} /> },
  { name: 'Node.js', icon: <Server size={20} /> },
  { name: 'Express.js', icon: <Server size={20} /> },

  // Database
  { name: 'SQL', icon: <Database size={20} /> },
  { name: 'MongoDB', icon: <Database size={20} /> },

  // DevOps
  { name: 'AWS Basics', icon: <Cloud size={20} /> },
  { name: 'Docker', icon: <Cloud size={20} /> },
  { name: 'Linux', icon: <Terminal size={20} /> },
  { name: 'Git', icon: <Code2 size={20} /> },
  { name: 'GitHub', icon: <Code2 size={20} /> },

  { name: 'TypeScript', icon: <Code2 size={20} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass px-6 py-4 rounded-2xl flex items-center gap-3 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >

            {/* Frontend */}
            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-all group">
              <div className="p-4 bg-primary/10 text-primary rounded-xl mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Layout size={32} />
              </div>
              <h4 className="font-bold mb-2">Frontend</h4>
              <p className="text-xs text-slate-500">React, Tailwind, HTML, CSS</p>
            </div>

            {/* Backend */}
            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:border-secondary/50 transition-all group">
              <div className="p-4 bg-secondary/10 text-secondary rounded-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-all">
                <Server size={32} />
              </div>
              <h4 className="font-bold mb-2">Backend</h4>
              <p className="text-xs text-slate-500">Java, Spring Boot, Node.js, Express, Python</p>
            </div>

            {/* Database */}
            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:border-accent/50 transition-all group">
              <div className="p-4 bg-accent/10 text-accent rounded-xl mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                <Database size={32} />
              </div>
              <h4 className="font-bold mb-2">Database</h4>
              <p className="text-xs text-slate-500">SQL, MongoDB, PostgreSQL</p>
            </div>

            {/* DevOps (UPDATED) */}
            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-all group">
              <div className="p-4 bg-primary/10 text-primary rounded-xl mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Cloud size={32} />
              </div>
              <h4 className="font-bold mb-2">DevOps</h4>
              <p className="text-xs text-slate-500">AWS Basics, Git, GitHub, Docker, Linux</p>
            </div>

            {/* Programming */}
            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:border-yellow-500/50 transition-all group col-span-2">
              <div className="p-4 bg-yellow-100 text-yellow-600 rounded-xl mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                <Terminal size={32} />
              </div>
              <h4 className="font-bold mb-2">Programming</h4>
              <p className="text-xs text-slate-500">C, C++, Java, Python</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}