import { motion } from 'motion/react';
import { GraduationCap, Target, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            
            {/* Short Bio */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Short Bio</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I'm Saranya, a fresher with a strong foundation in Java and modern web technologies, aspiring to build a career as a Software Developer, DevOps Engineer, or AWS Developer. I enjoy creating solutions for real-world problems and am passionate about writing clean, efficient, and scalable code.
                </p>
              </div>
            </div>

            {/* Career Goal */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Career Goal</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  My goal is to secure a role as a Software Developer, DevOps Engineer, or AWS Developer where I can contribute to innovative projects, enhance my technical expertise, and build scalable and impactful digital solutions.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-xl">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Bachelor of Engineering in Computer Science and Design (2022 - 2026)<br />
                  CGPA: 9.14 / 10.0
                </p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-3xl border-2 border-primary/10 shadow-xl">
              
              <h3 className="text-2xl font-display font-bold mb-6">Quick Facts</h3>

              <ul className="space-y-4">
                
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 font-medium">Name</span>
                  <span className="font-semibold">Saranya</span>
                </li>

                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 font-medium">Role</span>
                  <span className="font-semibold">
                    Aspiring Full Stack Developer | AWS & DevOps Enthusiast
                  </span>
                </li>

                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 font-medium">Experience</span>
                  <span className="font-semibold">Fresher</span>
                </li>

                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 font-medium">Location</span>
                  <span className="font-semibold">India</span>
                </li>

                <li className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Availability</span>
                  <span className="text-green-500 font-bold uppercase text-xs px-2 py-1 bg-green-500/10 rounded-full">
                    Immediate
                  </span>
                </li>

              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}