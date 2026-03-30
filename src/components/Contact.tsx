import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl border-2 border-primary/10 space-y-12"
          >
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">Let's Talk!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="mailto:saranyasara1101@gmail.com" 
                className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-primary/5 transition-all"
              >
                <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Email</p>
                  <p className="text-lg font-semibold break-all">saranyasara1101@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group p-4 rounded-2xl">
                <div className="p-4 bg-secondary/10 text-secondary rounded-2xl group-hover:bg-secondary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Phone</p>
                  <p className="text-lg font-semibold">+91 86676 87022</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group p-4 rounded-2xl">
                <div className="p-4 bg-accent/10 text-accent rounded-2xl group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-lg font-semibold">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4">
                <div className="flex gap-4">
                  <a href="https://github.com/saranya1101" className="p-3 glass rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/saranya-m-ba8533255" className="p-3 glass rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all">
                    <Linkedin size={24} />
                  </a>
                  {/* <a href="https://twitter.com" className="p-3 glass rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all">
                    <Twitter size={24} />
                  </a> */}
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <a 
                href="mailto:saranyasara1101@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Send an Email <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
