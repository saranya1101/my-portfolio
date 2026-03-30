import { motion } from 'motion/react';
import { Download, CheckCircle2, Award, Briefcase } from 'lucide-react';

const certifications = [
  { 
    name: 'AWS Academy Graduate – Cloud Foundations', 
    issuer: 'AWS Academy', 
    date: '2025' 
  },
  { 
    name: 'Java Development Certification', 
    issuer: 'Byts', 
    date: '2024' 
  },
  { 
    name: 'TechA Responsive Web Designing (HTML, CSS, JavaScript) Foundation', 
    issuer: 'Infosys', 
    date: '2025' 
  },
  { 
    name: 'Technology Job Simulation (Coding, Development)', 
    issuer: 'Deloitte', 
    date: '2026' 
  },
];

const highlights = [
  "Strong foundation in Java and Object-Oriented Programming.",
  "Proficient in building responsive UIs using React and Tailwind CSS.",
  "Experience with RESTful APIs and database management (SQL/NoSQL).",
  "Familiarity with cloud concepts and deployment on AWS.",
  "Excellent problem-solving and analytical thinking skills.",
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
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
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-2 border-primary/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold">Professional Summary</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Aspiring Full Stack Developer with a passion for creating efficient and scalable web applications. 
                Equipped with a strong technical background in Java, React, and modern web technologies. 
                Familiar with DevOps practices and AWS cloud fundamentals. 
                Eager to contribute to innovative projects as a Software Developer, DevOps Engineer, or AWS Developer.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-2 border-secondary/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">Key Highlights</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12">
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-2 border-accent/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 text-accent rounded-xl">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="border-l-2 border-accent/30 pl-4 py-1">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="https://drive.google.com/file/d/14w5npGfCOOxdgmwqi4Kl9DOtHcuiDENb/view?usp=drive_link"
                download="Saranya_Resume.pdf"
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Full Resume
              </a>

              <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest font-bold">
                ATS-Friendly PDF Format
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}