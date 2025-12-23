'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const services = [
  {
    title: 'Developpement Web',
    description: 'Applications web sur mesure, sites e-commerce et plateformes SaaS performantes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/developpement',
    gradient: 'from-accent-500 to-accent-600',
  },
  {
    title: 'Debugging & Optimisation',
    description: 'Resolution de bugs complexes, optimisation des performances et de la stabilite.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/services/debugging',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Consulting Technique',
    description: 'Accompagnement strategique pour vos projets digitaux et transformation numerique.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: '/services/consulting',
    gradient: 'from-accent-400 to-cyan-500',
  },
  {
    title: 'Audit Technique & Logs',
    description: 'Analyse approfondie de vos infrastructures, audit SEO technique et monitoring.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/services/audit',
    gradient: 'from-cyan-400 to-accent-500',
  },
]

const stats = [
  { value: '150+', label: 'Projets livres' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '10+', label: 'Annees experience' },
  { value: '<24h', label: 'Temps de reponse' },
]

const technologies = [
  { name: 'Next.js', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'MongoDB', category: 'data' },
  { name: 'Docker', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'Vercel', category: 'devops' },
  { name: 'WordPress', category: 'cms' },
  { name: 'Prestashop', category: 'ecommerce' },
  { name: 'Claude AI', category: 'ai' },
]

const testimonials = [
  {
    content: "Bluewave a transforme notre presence digitale. Leur expertise technique et leur approche strategique ont fait toute la difference.",
    author: "Marie Dupont",
    role: "CEO, TechStartup",
  },
  {
    content: "Une equipe reactive et professionnelle. Notre site e-commerce performe au-dela de nos attentes.",
    author: "Jean Martin",
    role: "Directeur Digital, E-Commerce Pro",
  },
  {
    content: "L'audit technique realise par Bluewave nous a permis d'identifier et corriger des problemes critiques.",
    author: "Sophie Bernard",
    role: "CTO, FinanceApp",
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={fadeIn} className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-success-500 mr-2 animate-pulse" />
                  Disponible pour nouveaux projets
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeIn}
                className="heading-xl text-white mb-6"
              >
                Nous construisons des{' '}
                <span className="gradient-text">experiences digitales</span>{' '}
                exceptionnelles
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeIn}
                className="text-xl text-dark-300 mb-10 max-w-2xl leading-relaxed"
              >
                Agence digitale specialisee en developpement web, SEO technique et solutions IA.
                Nous transformons vos ambitions en produits performants.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all duration-200"
                >
                  <span className="relative z-10">Demarrer un projet</span>
                  <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 rounded-xl bg-accent-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-dark-700 text-white font-medium rounded-xl hover:bg-dark-800/50 hover:border-dark-600 transition-all duration-200"
                >
                  Decouvrir nos services
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - Terminal Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-dark-800/50 bg-dark-950/90 backdrop-blur-xl shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-800/50 bg-dark-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-dark-500 text-xs font-mono">bluewave ~ </span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-cyan-400">$</span>
                      <span className="text-dark-300"> npx create-next-app@latest</span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-success-400"
                    >
                      Success! Created my-project
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      <span className="text-cyan-400">$</span>
                      <span className="text-dark-300"> npm run dev</span>
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="text-dark-400 space-y-1"
                    >
                      <p>- Local: <span className="text-accent-400">http://localhost:3000</span></p>
                      <p>- Ready in <span className="text-success-400">2.1s</span></p>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-cyan-400">$</span>
                      <span className="text-dark-300">_</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-2 h-4 bg-accent-400 inline-block"
                      />
                    </motion.p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
              </div>

              {/* Tech stack badges floating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-4 top-1/4 px-3 py-2 bg-dark-900/90 border border-dark-700/50 rounded-lg text-xs font-medium text-dark-300 backdrop-blur-sm"
              >
                React + Next.js
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/2 px-3 py-2 bg-dark-900/90 border border-dark-700/50 rounded-lg text-xs font-medium text-dark-300 backdrop-blur-sm"
              >
                TypeScript
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -left-2 bottom-1/4 px-3 py-2 bg-dark-900/90 border border-dark-700/50 rounded-lg text-xs font-medium text-dark-300 backdrop-blur-sm"
              >
                Prestashop Expert
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 rounded-full bg-dark-400"
                animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge mb-4">Nos expertises</span>
            <h2 className="heading-lg text-white mb-4">
              Des solutions pour chaque defi
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Une approche technique et strategique pour propulser votre presence digitale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group h-full p-8 card-interactive">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-dark-400 mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-accent-400 text-sm font-medium group-hover:text-accent-300">
                      En savoir plus
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding border-y border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-md text-white mb-4">
              Stack technique moderne
            </h2>
            <p className="text-dark-400">
              Les meilleures technologies pour des solutions performantes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-5 py-2.5 bg-dark-900/50 border border-dark-800/50 rounded-lg text-dark-300 text-sm font-medium hover:border-accent-500/30 hover:text-white hover:bg-dark-800/50 transition-all duration-200 cursor-default"
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Development Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge mb-6">Innovation</span>
              <h2 className="heading-lg text-white mb-6">
                Developpement assiste par{' '}
                <span className="gradient-text">Intelligence Artificielle</span>
              </h2>
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                Nous exploitons la puissance de l'IA pour accelerer le developpement,
                ameliorer la qualite du code et resoudre des problemes complexes plus rapidement.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Generation de code optimise et revue automatique',
                  'Debugging intelligent et analyse de logs',
                  'Documentation et tests automatises',
                  'Refactoring et optimisation de performance',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-dark-300"
                  >
                    <svg className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
              >
                Decouvrir notre approche
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Code Visual - Linear style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-dark-800/50 bg-dark-950/80 backdrop-blur-xl shadow-2xl">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-800/50 bg-dark-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-dark-500 text-xs font-mono">ai-assistant.ts</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-1">
                    <p><span className="text-purple-400">import</span> <span className="text-cyan-300">{'{ Claude }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@anthropic/sdk'</span></p>
                    <p className="text-dark-600">{'// Analyse et optimise le code automatiquement'}</p>
                    <p className="mt-4"><span className="text-purple-400">async function</span> <span className="text-yellow-300">analyzeCode</span><span className="text-dark-300">(</span><span className="text-orange-300">code</span><span className="text-dark-500">: string</span><span className="text-dark-300">)</span> <span className="text-dark-300">{'{'}</span></p>
                    <p className="pl-4"><span className="text-purple-400">const</span> <span className="text-cyan-300">analysis</span> <span className="text-dark-300">=</span> <span className="text-purple-400">await</span> <span className="text-cyan-300">claude</span><span className="text-dark-300">.</span><span className="text-yellow-300">analyze</span><span className="text-dark-300">(</span><span className="text-dark-300">{'{'}</span></p>
                    <p className="pl-8"><span className="text-cyan-300">code</span><span className="text-dark-300">,</span></p>
                    <p className="pl-8"><span className="text-cyan-300">focus</span><span className="text-dark-300">:</span> <span className="text-dark-300">[</span><span className="text-green-400">'performance'</span><span className="text-dark-300">,</span> <span className="text-green-400">'security'</span><span className="text-dark-300">],</span></p>
                    <p className="pl-8"><span className="text-cyan-300">suggest</span><span className="text-dark-300">:</span> <span className="text-orange-300">true</span></p>
                    <p className="pl-4"><span className="text-dark-300">{'}'}</span><span className="text-dark-300">)</span></p>
                    <p className="pl-4 mt-2"><span className="text-purple-400">return</span> <span className="text-cyan-300">analysis</span><span className="text-dark-300">.</span><span className="text-cyan-300">suggestions</span></p>
                    <p><span className="text-dark-300">{'}'}</span></p>
                  </div>
                </div>

                {/* AI suggestion overlay */}
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="p-4 rounded-lg bg-accent-500/10 border border-accent-500/20 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-accent-400 text-xs font-medium mb-1">Suggestion IA</p>
                        <p className="text-dark-300 text-xs">Ajouter un cache pour optimiser les requetes repetees (+40% perf)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge mb-4">Temoignages</span>
            <h2 className="heading-lg text-white mb-4">
              Ils nous font confiance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 card"
              >
                <svg className="w-8 h-8 text-accent-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-dark-300 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-dark-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-600 via-accent-500 to-cyan-500" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="heading-lg text-white mb-6">
                Pret a lancer votre projet ?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Discutons de vos ambitions et voyons comment nous pouvons vous accompagner
                dans votre transformation digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-600 font-semibold rounded-xl hover:bg-dark-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Planifier un appel
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  Voir nos services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
