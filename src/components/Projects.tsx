import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Lost and Found Web Portal",
    description: "A centralized platform for users to report lost items and find found belongings within a community. Features include item categorization, search, and user authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/saranya1101/lost-found-portal.git",
    // demo: "https://example.com",
    image: "https://picsum.photos/seed/lostfound/600/400"
  },
  {
    title: "Event Management System",
    description: "A web-based application designed to manage and organize events efficiently. It allows users to create, schedule, and manage events, handle registrations, and track event details in real-time.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    // demo: "https://example.com",
    image: "https://picsum.photos/seed/event/600/400"
}
//   {
//     title: "Hotel Management System",
//     description: "A comprehensive application for managing hotel operations including room booking, guest check-in/out, and billing. Includes an admin dashboard for analytics.",
//     tech: ["Java", "Swing", "MySQL", "JDBC"],
//     github: "https://github.com",
//     demo: "https://example.com",
//     image: "https://picsum.photos/seed/hotel/600/400"
//   }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all border border-white/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/saranya1101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <Code2 size={20} /> View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
