'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Developpement Web',
    description: 'Applications web sur mesure, sites e-commerce et plateformes SaaS. Nous concevons des solutions robustes et evolutives adaptees a vos besoins specifiques.',
    features: [
      'Sites web et applications React/Next.js',
      'Applications SaaS sur mesure',
      'Integrations API et automatisations',
      'Progressive Web Apps (PWA)',
      'WordPress Headless',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/developpement',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    title: 'E-commerce PrestaShop',
    description: 'Expert PrestaShop Niveau 2. Creation de boutiques e-commerce performantes, modules sur mesure et accompagnement complet de votre activite en ligne.',
    features: [
      'Creation de boutique PrestaShop',
      'Modules et themes sur mesure',
      'Migration depuis autres plateformes',
      'Optimisation performance et SEO',
      'Maintenance et support',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: '/services/prestashop',
    gradient: 'from-pink-500 to-pink-600',
    badge: 'Expert Niveau 2',
  },
  {
    title: 'Sites WordPress',
    description: 'Creation de sites vitrines, blogs et portails sur mesure avec WordPress. Developpement de plugins, migration, optimisation et maintenance.',
    features: [
      'Sites vitrines WordPress sur mesure',
      'Plugins et extensions personnalises',
      'Migration vers WordPress',
      'WordPress Headless (Next.js)',
      'Maintenance et support',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services/wordpress',
    gradient: 'from-[#21759b] to-[#1a5f80]',
    badge: 'CMS #1 mondial',
  },
  {
    title: 'Debugging & Optimisation',
    description: 'Resolution de bugs complexes et optimisation des performances. Notre expertise technique vous aide a maintenir des applications stables et rapides.',
    features: [
      'Analyse et resolution de bugs critiques',
      'Optimisation des performances (Core Web Vitals)',
      'Audit de securite et corrections',
      'Refactoring et dette technique',
      'Monitoring et alerting',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/services/debugging',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Consulting Technique',
    description: 'Accompagnement strategique pour vos projets digitaux. Nous vous aidons a prendre les bonnes decisions techniques pour votre croissance.',
    features: [
      'Choix d\'architecture et de stack technique',
      'Revue de code et bonnes pratiques',
      'Formation des equipes techniques',
      'Strategie de migration et modernisation',
      'Definition de roadmap technique',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: '/services/consulting',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Audit Technique & Logs',
    description: 'Analyse approfondie de vos infrastructures et applications. Nous identifions les problemes et proposons des solutions concretes.',
    features: [
      'Audit SEO technique complet',
      'Analyse des logs serveurs',
      'Audit de performance',
      'Audit d\'accessibilite',
      'Rapport detaille et plan d\'action',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/services/audit',
    gradient: 'from-green-500 to-emerald-500',
  },
]

const process = [
  {
    step: '01',
    title: 'Decouverte',
    description: 'Nous analysons vos besoins, objectifs et contraintes pour definir le perimetre du projet.',
  },
  {
    step: '02',
    title: 'Proposition',
    description: 'Nous elaborons une proposition technique et commerciale detaillee avec planning.',
  },
  {
    step: '03',
    title: 'Realisation',
    description: 'Developpement iteratif avec points reguliers et livraisons incrementales.',
  },
  {
    step: '04',
    title: 'Deploiement',
    description: 'Mise en production, formation et accompagnement post-livraison.',
  },
]

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="badge mb-6">Nos services</span>
            <h1 className="heading-xl text-white mb-6">
              Expertise technique au service de votre{' '}
              <span className="gradient-text">croissance</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              De la conception au deploiement, nous vous accompagnons avec une approche
              technique rigoureuse et une vision strategique claire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group h-full p-8 lg:p-10 card-interactive">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-200`}>
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold text-white group-hover:text-accent-400 transition-colors">
                        {service.title}
                      </h2>
                      {'badge' in service && service.badge && (
                        <span className="px-2 py-0.5 bg-pink-500/20 border border-pink-500/30 text-pink-400 text-xs font-medium rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-dark-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-dark-300 text-sm">
                          <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-accent-400 font-medium group-hover:text-accent-300">
                      En savoir plus
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Process */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge mb-4">Notre methode</span>
            <h2 className="heading-lg text-white mb-4">
              Un processus eprouve
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Une approche structuree pour garantir la reussite de vos projets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-dark-700 to-transparent" />
                )}
                <div className="text-5xl font-bold gradient-text mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-dark-400 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-12 text-center"
          >
            <h2 className="heading-md text-white mb-4">
              Un projet en tete ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Discutons de vos besoins et voyons comment nous pouvons vous aider.
            </p>
            <Link href="/contact" className="group btn-primary">
              Planifier un appel
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
