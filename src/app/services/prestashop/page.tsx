'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Création de boutique PrestaShop',
    description: 'Développement de boutiques e-commerce sur mesure avec PrestaShop 8 & 9. Design personnalisé, configuration complète et mise en production.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Modules PrestaShop sur mesure',
    description: 'Développement de modules personnalisés pour étendre les fonctionnalités de votre boutique. Intégrations API, automatisations, fonctionnalités métier.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Migration vers PrestaShop',
    description: 'Migration de votre boutique depuis WooCommerce, Magento, Shopify ou autre CMS vers PrestaShop. Conservation des données produits, clients et commandes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Optimisation & Performance',
    description: 'Audit et optimisation de votre boutique existante. Amélioration des temps de chargement, SEO technique, Core Web Vitals et conversion.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Intégration paiement & logistique',
    description: 'Intégration de solutions de paiement (Stripe, PayPal, Mollie) et de transporteurs (Colissimo, Mondial Relay, Chronopost, DHL).',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description: 'Contrats de maintenance pour garder votre boutique à jour, sécurisée et performante. Support réactif et mises à jour régulières.',
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
    title: 'Open Source & Flexible',
    description: 'PrestaShop est 100% open source, sans frais de licence. Vous gardez le contrôle total de votre boutique et de vos données.',
  },
  {
    title: 'Made in France',
    description: 'Solution française avec une communauté active. Conformité RGPD native et support en français.',
  },
  {
    title: 'Scalable',
    description: 'De quelques produits à plusieurs milliers, PrestaShop s\'adapte à votre croissance sans limites.',
  },
  {
    title: 'SEO Optimisé',
    description: 'Architecture optimisée pour le référencement naturel. URLs propres, méta-données, sitemap automatique.',
  },
]

const stats = [
  { value: '300K+', label: 'Boutiques actives dans le monde' },
  { value: '#1', label: 'CMS e-commerce en Europe' },
  { value: '80+', label: 'Moyens de paiement disponibles' },
  { value: '200+', label: 'Transporteurs intégrés' },
]

const faqs = [
  {
    question: 'Combien coûte la création d\'une boutique PrestaShop ?',
    answer: 'Le coût varie selon la complexité du projet. Une boutique standard démarre aux alentours de 3 000 €, tandis qu\'un projet sur mesure avec modules personnalisés peut aller de 8 000 € à 25 000 €. Nous établissons un devis précis après étude de vos besoins.',
  },
  {
    question: 'Quelle est la durée de développement d\'une boutique PrestaShop ?',
    answer: 'Une boutique PrestaShop standard peut être livrée en 4 à 6 semaines. Les projets plus complexes avec des fonctionnalités sur mesure nécessitent généralement 2 à 4 mois de développement.',
  },
  {
    question: 'PrestaShop ou WooCommerce, que choisir ?',
    answer: 'PrestaShop est plus adapté pour les boutiques e-commerce dédiées avec un catalogue important. WooCommerce convient mieux pour un site WordPress existant avec une dimension e-commerce secondaire. Nous vous conseillons selon votre contexte spécifique.',
  },
  {
    question: 'Proposez-vous la maintenance après livraison ?',
    answer: 'Oui, nous proposons des contrats de maintenance incluant les mises à jour de sécurité, la surveillance des performances, les sauvegardes automatiques et un support prioritaire. Les tarifs démarrent à 200 €/mois.',
  },
  {
    question: 'Pouvez-vous migrer ma boutique existante vers PrestaShop ?',
    answer: 'Oui, nous réalisons des migrations depuis WooCommerce, Magento, Shopify, OpenCart et autres plateformes. Nous préservons vos produits, clients, commandes et le référencement existant.',
  },
  {
    question: 'Est-ce que PrestaShop est adapté pour le B2B ?',
    answer: 'PrestaShop dispose de fonctionnalités B2B natives (groupes clients, tarifs personnalisés, devis). Nous pouvons également développer des modules sur mesure pour des besoins spécifiques : accès restreint, commandes en gros, etc.',
  },
]

// Composant visuel PrestaShop Dashboard
function PrestashopDashboardVisual() {
  return (
    <div className="relative w-full h-[500px] bg-dark-900/50 rounded-2xl border border-dark-800/50 overflow-hidden">
      <div className="absolute inset-0 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">PS</span>
            </div>
            <div>
              <span className="text-white font-medium">PrestaShop 8</span>
              <p className="text-dark-500 text-xs">Back Office</p>
            </div>
          </div>
          <motion.div
            className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            8 nouvelles commandes
          </motion.div>
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
            <p className="text-dark-500 text-xs mb-1">Chiffre d'affaires</p>
            <p className="text-accent-400 font-bold text-2xl">45 280 €</p>
            <p className="text-green-400 text-xs mt-1">+18.5% ce mois</p>
          </motion.div>
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-dark-500 text-xs mb-1">Commandes</p>
            <p className="text-green-400 font-bold text-2xl">312</p>
            <p className="text-green-400 text-xs mt-1">+24 aujourd'hui</p>
          </motion.div>
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-dark-500 text-xs mb-1">Taux conversion</p>
            <p className="text-purple-400 font-bold text-2xl">3.8%</p>
            <p className="text-purple-400 text-xs mt-1">+0.5% vs moyenne</p>
          </motion.div>
        </div>

        {/* Recent orders */}
        <div className="mb-6">
          <p className="text-dark-400 text-sm mb-3">Dernières commandes</p>
          <div className="space-y-2">
            {[
              { id: '#PS-8521', client: 'Marie D.', amount: '189 €', status: 'Livrée' },
              { id: '#PS-8520', client: 'Jean P.', amount: '342 €', status: 'Expédiée' },
              { id: '#PS-8519', client: 'Sophie L.', amount: '67 €', status: 'En préparation' },
            ].map((order, i) => (
              <motion.div
                key={order.id}
                className="flex items-center justify-between p-3 bg-dark-800/30 rounded-lg"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-dark-500 text-xs font-mono">{order.id}</span>
                  <span className="text-white text-sm">{order.client}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent-400 text-sm font-medium">{order.amount}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    order.status === 'Livrée' ? 'bg-green-500/20 text-green-400' :
                    order.status === 'Expédiée' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>{order.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div>
          <p className="text-dark-400 text-sm mb-3">Ventes (30 derniers jours)</p>
          <div className="flex items-end gap-1.5 h-24">
            {[40, 55, 45, 60, 50, 75, 65, 80, 70, 85, 75, 90, 80, 95, 85, 100, 90, 88, 92, 85, 95, 88, 92, 98, 90, 95, 88, 92, 95, 98].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-pink-500/60 to-pink-400/40 rounded-t"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
    </div>
  )
}

export default function PrestashopPage() {
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center">
                  <span className="text-2xl font-bold">PS</span>
                </div>
                <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 text-pink-400 text-sm font-medium rounded-full">
                  Expert Niveau 2
                </span>
              </div>
              <h1 className="heading-xl text-white mb-6">
                Agence{' '}
                <span className="text-pink-400">PrestaShop</span>{' '}
                <br />Création de Boutique E-commerce
              </h1>
              <p className="text-xl text-dark-300 leading-relaxed mb-8">
                Développement de boutiques PrestaShop sur mesure, modules personnalisés
                et accompagnement e-commerce complet. Plus de 10 ans d'expérience sur la plateforme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
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
              <PrestashopDashboardVisual />
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
                <div className="text-3xl lg:text-4xl font-bold text-pink-400 mb-2">
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
              Nos services PrestaShop
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour votre projet e-commerce, de la conception à la maintenance.
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
                className="card p-8 hover:border-pink-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6">
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

      {/* Pourquoi PrestaShop */}
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
                <span className="text-pink-400">PrestaShop</span> ?
              </h2>
              <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                PrestaShop est la solution e-commerce leader en Europe, utilisée par plus de 300 000 boutiques.
                Open source, flexible et puissante, elle s'adapte à tous les projets e-commerce.
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
                    <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="ml-2 text-dark-500 text-xs font-mono">CustomModule.php</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-1">
                    <p><span className="text-dark-500">{'<?php'}</span></p>
                    <p><span className="text-purple-400">class</span> <span className="text-yellow-300">CustomModule</span> <span className="text-purple-400">extends</span> <span className="text-cyan-300">Module</span></p>
                    <p><span className="text-dark-400">{'{'}</span></p>
                    <p className="pl-4"><span className="text-purple-400">public function</span> <span className="text-yellow-300">__construct</span><span className="text-dark-400">()</span></p>
                    <p className="pl-4"><span className="text-dark-400">{'{'}</span></p>
                    <p className="pl-8"><span className="text-cyan-300">$this</span><span className="text-dark-400">-&gt;</span><span className="text-white">name</span> <span className="text-dark-400">=</span> <span className="text-green-400">'custommodule'</span><span className="text-dark-400">;</span></p>
                    <p className="pl-8"><span className="text-cyan-300">$this</span><span className="text-dark-400">-&gt;</span><span className="text-white">version</span> <span className="text-dark-400">=</span> <span className="text-green-400">'1.0.0'</span><span className="text-dark-400">;</span></p>
                    <p className="pl-8"><span className="text-cyan-300">$this</span><span className="text-dark-400">-&gt;</span><span className="text-white">author</span> <span className="text-dark-400">=</span> <span className="text-green-400">'Bluewave'</span><span className="text-dark-400">;</span></p>
                    <p className="pl-8"><span className="text-purple-400">parent</span><span className="text-dark-400">::</span><span className="text-yellow-300">__construct</span><span className="text-dark-400">();</span></p>
                    <p className="pl-4"><span className="text-dark-400">{'}'}</span></p>
                    <p className="mt-2 pl-4"><span className="text-purple-400">public function</span> <span className="text-yellow-300">install</span><span className="text-dark-400">()</span></p>
                    <p className="pl-4"><span className="text-dark-400">{'{'}</span></p>
                    <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-purple-400">parent</span><span className="text-dark-400">::</span><span className="text-yellow-300">install</span><span className="text-dark-400">()</span></p>
                    <p className="pl-12"><span className="text-dark-400">&amp;&amp;</span> <span className="text-cyan-300">$this</span><span className="text-dark-400">-&gt;</span><span className="text-yellow-300">registerHook</span><span className="text-dark-400">(</span><span className="text-green-400">'actionCartSave'</span><span className="text-dark-400">);</span></p>
                    <p className="pl-4"><span className="text-dark-400">{'}'}</span></p>
                    <p><span className="text-dark-400">{'}'}</span></p>
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
                <span className="text-green-400 text-xs font-medium">PrestaShop 8 Ready</span>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
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
              Les réponses aux questions les plus courantes sur nos services PrestaShop.
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
              Agence PrestaShop près de chez vous
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Nous intervenons dans tout le Sud-Ouest de la France. Rencontrons-nous pour discuter de votre projet e-commerce.
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
                  href={`/services/prestashop/${item.slug}`}
                  className="block p-5 bg-dark-900/50 rounded-xl border border-dark-800/50 hover:border-pink-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold group-hover:text-pink-400 transition-colors">
                      PrestaShop {item.city}
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
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-pink-500 to-purple-500" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="heading-lg text-white mb-6">
                Lancez votre boutique PrestaShop
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Discutons de votre projet e-commerce et obtenez un devis personnalisé
                sous 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-dark-100 transition-all duration-150 shadow-lg hover:shadow-xl active:scale-[0.98]"
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
