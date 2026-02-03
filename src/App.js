import React from "react";

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] },
    },
  };

  // const floatingVariants = {
  //   animate: {
  //     y: [0, -20, 0],
  //     transition: {
  //       duration: 4,
  //       repeat: Infinity,
  //       ease: 'easeInOut',
  //     },
  //   },
  // };

  const projects = [
    {
      id: 1,
      title: 'SmartNotesX',
      description: 'AI-powered note-making application with automated note and assignment generation. Built with MERN stack and Groq AI integration.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Groq AI', 'TailwindCSS'],
      achievements: ['30% user efficiency improvement', '3-member team collaboration', 'AI text generation integration'],
      github: '#',
      live: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Digital Library Management System',
      description: 'Full-stack library system with Admin and Student dashboards. Features JWT authentication and optimized MongoDB queries.',
      tags: ['React.js', 'Express.js', 'MongoDB', 'JWT Auth', 'TailwindCSS'],
      achievements: ['25% database performance improvement', 'Role-based access control', 'Responsive UI design'],
      github: '#',
      live: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const skills = {
    'Frontend': ['React.js', 'HTML5', 'CSS3', 'TailwindCSS', 'JavaScript ES6+'],
    'Backend': ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
    'Database': ['MongoDB', 'Query Optimization', 'Database Indexing'],
    'Tools & Others': ['Git/GitHub', 'Postman', 'VS Code', 'DSA', 'OOP Principles'],
  };

  const certificates = [
    { name: 'Cybersecurity Foundation', issuer: 'Palo Alto Networks', year: '2024' },
    { name: 'Spring Boot Development', issuer: 'Infosys', year: '2024' },
    { name: 'Data Structures Foundations', issuer: 'LinkedIn Learning', year: '2024' },
    { name: 'HTML, CSS & Generative AI', issuer: 'LinkedIn Learning', year: '2024' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            AC
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'projects', 'skills', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item);
                }}
                whileHover={{ color: '#22d3ee', scale: 1.05 }}
                className={`capitalize transition-colors ${
                  activeSection === item ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800"
            >
              <div className="px-6 py-4 space-y-4">
                {['home', 'projects', 'skills', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    onClick={() => {
                      setActiveSection(item);
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ x: 10 }}
                    className="block capitalize text-slate-300 hover:text-cyan-400"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex items-center justify-center px-6 relative overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full text-center z-10"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-cyan-500/30 text-sm text-cyan-300">
              👋 Welcome to my portfolio
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Anirudra
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
          >
            Full Stack Developer | MERN Stack Specialist | AI Integration Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            I build scalable, user-centric web applications with modern technologies. Passionate about solving complex problems and creating impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              View My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: '#22d3ee' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-600 rounded-lg font-semibold hover:border-cyan-400 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            <p className="text-slate-400 mt-4">Showcasing my best work and technical expertise</p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${project.color} p-0.5 rounded-2xl overflow-hidden`}>
                  <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-slate-300">{project.description}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="text-slate-400 group-hover:text-cyan-400 transition-colors"
                      >
                        <ArrowRight size={28} />
                      </motion.div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                        >
                          <p className="text-sm text-cyan-400 font-semibold">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 rounded-full bg-slate-800 text-sm text-cyan-400 border border-cyan-500/30"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                      >
                        <Github size={20} /> Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg transition-all"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            <p className="text-slate-400 mt-4">Technologies I work with and continuously learning</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 group-hover:border-cyan-500/50 rounded-xl p-8 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-6 text-cyan-400">{category}</h3>
                  <div className="space-y-3">
                    {skillList.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 8, color: '#22d3ee' }}
                        className="flex items-center gap-3 text-slate-300 transition-colors"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                        />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(34, 211, 238, 0.1)' }}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all"
                >
                  <p className="font-semibold text-white">{cert.name}</p>
                  <p className="text-sm text-slate-400">{cert.issuer}</p>
                  <p className="text-xs text-cyan-400 mt-2">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '2+', label: 'Projects Completed' },
              { number: '30%', label: 'Efficiency Improvement' },
              { number: '25%', label: 'Performance Gain' },
              { number: '8.45', label: 'SGPA' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.p>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
        <div className="max-w-4xl w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-12">
              I'm always open to new opportunities and interesting projects. Feel free to reach out!
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <motion.a
                href="mailto:anirudrachauhan2004@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Mail size={24} className="text-cyan-400" />
                anirudrachauhan2004@gmail.com
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6 mb-12"
            >
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:anirudrachauhan2004@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-slate-800 hover:bg-slate-700 rounded-full text-cyan-400 transition-colors"
                  title={label}
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="mailto:anirudrachauhan2004@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-bold text-lg hover:shadow-2xl transition-all"
            >
              Send me an Email
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-slate-400 text-sm"
          >
            © 2024 Anirudra Singh Chauhan. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-slate-400 text-sm"
          >
            Designed & Built with React, Tailwind & Framer Motion
          </motion.p>
        </div>
      </footer>
    </div>
  );
}