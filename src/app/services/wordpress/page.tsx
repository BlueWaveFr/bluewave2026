'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Création site vitrine',
    description: 'Développement de sites vitrines sur mesure avec WordPress. Design personnalisé, responsive, optimisé SEO et configuré pour convertir vos visiteurs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Plugins sur mesure',
    description: 'Développement de plugins WordPress personnalisés pour étendre les fonctionnalités de votre site. Intégrations API, automatisations, fonctionnalités métier.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Migration vers WordPress',
    description: 'Migration de votre site depuis Wix, Squarespace, Joomla, Drupal ou autre CMS vers WordPress. Conservation du contenu, des médias et du référencement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Optimisation & Performance',
    description: 'Audit et optimisation de votre site existant. Amélioration des temps de chargement, SEO technique, Core Web Vitals et taux de conversion.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'WordPress Headless',
    description: 'Découplage du front-end avec Next.js ou React pour des performances maximales. WordPress comme CMS, interface moderne et ultra-rapide.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description: 'Contrats de maintenance pour garder votre site à jour, sécurisé et performant. Support réactif, mises à jour WordPress et plugins régulières.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const advantages = [
  {
    title: 'Open Source & Gratuit',
    description: 'WordPress est 100% open source et gratuit. Vous gardez le contrôle total de votre site et de vos données sans frais de licence.',
  },
  {
    title: 'CMS #1 mondial',
    description: 'Plus de 40% des sites web dans le monde utilisent WordPress. Une communauté immense et un écosystème incomparable.',
  },
  {
    title: 'SEO natif',
    description: 'Architecture optimisée pour le référencement naturel. URLs propres, structure sémantique et compatibilité avec les meilleurs plugins SEO.',
  },
  {
    title: 'Écosystème riche',
    description: 'Plus de 59 000 plugins et 11 000 thèmes gratuits. Des possibilités infinies pour étendre les fonctionnalités de votre site.',
  },
]

const stats = [
  { value: '40%+', label: 'Part de marché CMS' },
  { value: '810M+', label: 'Sites dans le monde' },
  { value: '59K+', label: 'Plugins disponibles' },
  { value: '11K+', label: 'Thèmes gratuits' },
]

const faqs = [
  {
    question: 'Combien coûte la création d\'un site WordPress sur mesure ?',
    answer: 'Le coût varie selon la complexité du projet. Un site vitrine standard démarre aux alentours de 2 000 €, tandis qu\'un projet sur mesure avec plugins personnalisés peut aller de 5 000 € à 20 000 €. Nous établissons un devis précis après étude de vos besoins.',
  },
  {
    question: 'Quelle est la durée de développement d\'un site WordPress ?',
    answer: 'Un site vitrine WordPress standard peut être livré en 3 à 5 semaines. Les projets plus complexes avec des fonctionnalités sur mesure nécessitent généralement 2 à 3 mois de développement.',
  },
  {
    question: 'WordPress ou PrestaShop, que choisir ?',
    answer: 'WordPress est idéal pour les sites vitrines, blogs et portails. PrestaShop est plus adapté pour les boutiques e-commerce avec un catalogue produit important. WordPress avec WooCommerce convient pour un e-commerce avec une dimension contenu forte.',
  },
  {
    question: 'Proposez-vous la maintenance après livraison ?',
    answer: 'Oui, nous proposons des contrats de maintenance incluant les mises à jour WordPress et plugins, la surveillance de sécurité, les sauvegardes automatiques et un support prioritaire. Les tarifs démarrent à 150 €/mois.',
  },
  {
    question: 'Pouvez-vous migrer mon site existant vers WordPress ?',
    answer: 'Oui, nous réalisons des migrations depuis Wix, Squarespace, Joomla, Drupal et autres plateformes. Nous préservons vos contenus, votre structure SEO et vos médias.',
  },
  {
    question: 'Qu\'est-ce que WordPress Headless et quels sont ses avantages ?',
    answer: 'WordPress Headless utilise WordPress comme back-office de gestion de contenu, couplé à un front-end moderne (React/Next.js). Cela offre des performances supérieures, une sécurité renforcée et une flexibilité totale sur le design.',
  },
]

// Composant visuel WordPress Theme Code
function WordPressThemeVisual() {
  return (
    <div className="relative w-full h-[500px] bg-dark-900/50 rounded-2xl border border-dark-800/50 overflow-hidden">
      <div className="absolute inset-0 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#21759b] to-[#1a5f7a] flex items-center justify-center">
              <span className="text-white text-sm font-bold">WP</span>
            </div>
            <div>
              <span className="text-white font-medium">WordPress 6.x</span>
              <p className="text-dark-500 text-xs">Theme Development</p>
            </div>
          </div>
          <motion.div
            className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Build en cours
          </motion.div>
        </div>

        {/* File tree */}
        <div className="mb-6 p-4 bg-dark-800/50 rounded-xl border border-dark-700/30">
          <p className="text-dark-500 text-xs mb-3 font-mono">wp-content/themes/bluewave-theme/</p>
          <div className="space-y-1.5">
            {[
              { name: 'functions.php', type: 'php', color: 'text-purple-400' },
              { name: 'header.php', type: 'php', color: 'text-purple-400' },
              { name: 'style.css', type: 'css', color: 'text-blue-400' },
              { name: 'template-parts/', type: 'dir', color: 'text-yellow-400' },
              { name: 'inc/custom-post-types.php', type: 'php', color: 'text-purple-400' },
            ].map((file, i) => (
              <motion.div
                key={file.name}
                className="flex items-center gap-2 text-sm"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <span className={`${file.color} text-xs`}>
                  {file.type === 'dir' ? '📁' : '📄'}
                </span>
                <span className="text-dark-300 font-mono text-xs">{file.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-dark-500 text-xs mb-1">Lighthouse</p>
            <p className="text-green-400 font-bold text-2xl">98</p>
            <p className="text-green-400 text-xs mt-1">Performance</p>
          </motion.div>
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-dark-500 text-xs mb-1">Pages</p>
            <p className="text-[#21759b] font-bold text-2xl">24</p>
            <p className="text-dark-500 text-xs mt-1">Indexées</p>
          </motion.div>
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-dark-500 text-xs mb-1">Plugins</p>
            <p className="text-purple-400 font-bold text-2xl">12</p>
            <p className="text-purple-400 text-xs mt-1">Actifs</p>
          </motion.div>
        </div>

        {/* Recent activity */}
        <div>
          <p className="text-dark-400 text-sm mb-3">Activité récente</p>
          <div className="space-y-2">
            {[
              { action: 'Page publiée', detail: 'À propos', time: 'il y a 2 min' },
              { action: 'Plugin mis à jour', detail: 'Yoast SEO 23.x', time: 'il y a 15 min' },
              { action: 'Thème déployé', detail: 'v2.4.0', time: 'il y a 1h' },
            ].map((item, i) => (
              <motion.div
                key={item.detail}
                className="flex items-center justify-between p-3 bg-dark-800/30 rounded-lg"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-white text-sm">{item.action}</span>
                  <span className="text-[#21759b] text-xs font-mono">{item.detail}</span>
                </div>
                <span className="text-dark-500 text-xs">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#21759b]/20 rounded-full blur-3xl" />
    </div>
  )
}

export default function WordPressPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link href="/services" className="inline-flex items-center text-dark-400 hover:text-white mb-6 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tous les services
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#21759b] to-[#1a5f7a] text-white flex items-center justify-center">
                  <span className="text-2xl font-bold">WP</span>
                </div>
                <span className="px-3 py-1 bg-[#21759b]/20 border border-[#21759b]/30 text-[#21759b] text-sm font-medium rounded-full">
                  CMS #1 mondial
                </span>
              </div>
              <h1 className="heading-xl text-white mb-6">
                Agence{' '}
                <span className="text-[#21759b]">WordPress</span>{' '}
                <br />Création de Sites Vitrines Sur Mesure
              </h1>
              <p className="text-xl text-dark-300 leading-relaxed mb-8">
                Développement de sites WordPress sur mesure, plugins personnalisés
                et accompagnement complet. Plus de 10 ans d'expérience sur la plateforme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-gradient-to-r from-[#21759b] to-[#1a5f7a] hover:from-[#1a5f7a] hover:to-[#154d63]">
                  Demander un devis gratuit
                </Link>
                <Link href="/realisations" className="btn-secondary">
                  Voir nos réalisations
                </Link>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <WordPressThemeVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-dark-800/50">
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
                <div className="text-3xl lg:text-4xl font-bold text-[#21759b] mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-4">
              Nos services WordPress
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour votre projet web, de la conception à la maintenance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 hover:border-[#21759b]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#21759b]/20 text-[#21759b] flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi WordPress */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg text-white mb-6">
                Pourquoi choisir{' '}
                <span className="text-[#21759b]">WordPress</span> ?
              </h2>
              <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                WordPress propulse plus de 40% du web mondial. Open source, flexible et doté d'un écosystème
                incomparable, c'est le CMS idéal pour créer un site vitrine professionnel et évolutif.
              </p>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#21759b]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#21759b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{advantage.title}</h3>
                      <p className="text-dark-400 text-sm">{advantage.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Code visual */}
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
                  <span className="ml-2 text-dark-500 text-xs font-mono">functions.php</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-1">
                    <p><span className="text-dark-500">{'<?php'}</span></p>
                    <p><span className="text-dark-500">{'/**'}</span></p>
                    <p><span className="text-dark-500">{' * Theme: Bluewave Custom'}</span></p>
                    <p><span className="text-dark-500">{' */'}</span></p>
                    <p className="mt-2"><span className="text-purple-400">function</span> <span className="text-yellow-300">bluewave_setup</span><span className="text-dark-400">()</span> <span className="text-dark-400">{'{'}</span></p>
                    <p className="pl-4"><span className="text-yellow-300">add_theme_support</span><span className="text-dark-400">(</span><span className="text-green-400">'title-tag'</span><span className="text-dark-400">);</span></p>
                    <p className="pl-4"><span className="text-yellow-300">add_theme_support</span><span className="text-dark-400">(</span><span className="text-green-400">'post-thumbnails'</span><span className="text-dark-400">);</span></p>
                    <p className="pl-4"><span className="text-yellow-300">add_theme_support</span><span className="text-dark-400">(</span><span className="text-green-400">'custom-logo'</span><span className="text-dark-400">);</span></p>
                    <p className="pl-4 mt-2"><span className="text-yellow-300">register_nav_menus</span><span className="text-dark-400">([</span></p>
                    <p className="pl-8"><span className="text-green-400">'primary'</span> <span className="text-dark-400">=&gt;</span> <span className="text-green-400">'Menu principal'</span><span className="text-dark-400">,</span></p>
                    <p className="pl-8"><span className="text-green-400">'footer'</span>  <span className="text-dark-400">=&gt;</span> <span className="text-green-400">'Menu pied de page'</span><span className="text-dark-400">,</span></p>
                    <p className="pl-4"><span className="text-dark-400">]);</span></p>
                    <p><span className="text-dark-400">{'}'}</span></p>
                    <p><span className="text-yellow-300">add_action</span><span className="text-dark-400">(</span><span className="text-green-400">'after_setup_theme'</span><span className="text-dark-400">,</span> <span className="text-green-400">'bluewave_setup'</span><span className="text-dark-400">);</span></p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-400 text-xs font-medium">WordPress 6.x Ready</span>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#21759b]/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-4">
              Questions fréquentes
            </h2>
            <p className="text-dark-300 text-lg">
              Les réponses aux questions les plus courantes sur nos services WordPress.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group card p-6 cursor-pointer"
              >
                <summary className="flex items-center justify-between text-white font-semibold list-none">
                  {faq.question}
                  <svg className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-dark-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-4">
              Agence WordPress près de chez vous
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Nous intervenons dans tout le Sud-Ouest de la France. Rencontrons-nous pour discuter de votre projet web.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: 'Bordeaux', region: 'Gironde', slug: 'bordeaux', description: 'Métropole bordelaise et capitale du vin' },
              { city: 'Mérignac', region: 'Gironde', slug: 'merignac', description: 'Pôle économique et zone aéroportuaire' },
              { city: 'Pessac', region: 'Gironde', slug: 'pessac', description: 'Ville universitaire et viticole' },
              { city: 'Libourne', region: 'Gironde', slug: 'libourne', description: 'Capitale du Libournais et Saint-Émilion' },
              { city: 'Arcachon', region: 'Gironde', slug: 'arcachon', description: 'Bassin d\'Arcachon et station balnéaire' },
              { city: 'Cognac', region: 'Charente', slug: 'cognac', description: 'Capitale mondiale du cognac' },
              { city: 'Bayonne', region: 'Pays Basque', slug: 'bayonne', description: 'Capitale du Pays Basque' },
              { city: 'Biarritz', region: 'Pays Basque', slug: 'biarritz', description: 'Station balnéaire et capitale du surf' },
              { city: 'Anglet', region: 'Pays Basque', slug: 'anglet', description: 'Entre océan et forêts au cœur du BAB' },
              { city: 'Pau', region: 'Béarn', slug: 'pau', description: 'Ville royale au pied des Pyrénées' },
            ].map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/services/wordpress/${item.slug}`}
                  className="block p-5 bg-dark-900/50 rounded-xl border border-dark-800/50 hover:border-[#21759b]/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold group-hover:text-[#21759b] transition-colors">
                      WordPress {item.city}
                    </h3>
                    <span className="text-dark-500 text-xs bg-dark-800/50 px-2 py-1 rounded">
                      {item.region}
                    </span>
                  </div>
                  <p className="text-dark-400 text-sm">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#21759b] via-[#1a5f7a] to-[#135e80]" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="heading-lg text-white mb-6">
                Lancez votre site WordPress
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Discutons de votre projet web et obtenez un devis personnalisé
                sous 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#21759b] font-semibold rounded-xl hover:bg-dark-100 transition-all duration-150 shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  Demander un devis gratuit
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-150 active:scale-[0.98]"
                >
                  Planifier un appel
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
