'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const localInfo = {
  city: 'Biarritz',
  region: 'Pays Basque',
  department: '64',
  description: 'station balnéaire de renommée internationale et capitale du surf',
  businessContext: 'Biarritz est une destination touristique de prestige. Les hôtels, restaurants, écoles de surf et commerces de luxe ont besoin de sites web à l\'image de la ville.',
  sectors: ['Tourisme et hôtellerie', 'Surf et sports nautiques', 'Bien-être et spa', 'Mode et luxe', 'Gastronomie'],
  stats: [
    { value: '25K+', label: 'Habitants' },
    { value: '2M+', label: 'Touristes par an' },
    { value: '#1', label: 'Spot de surf en Europe' },
    { value: '24/7', label: 'Support disponible' },
  ],
}

const services = [
  {
    title: 'Création site vitrine WordPress',
    description: `Développement de votre site vitrine WordPress à ${localInfo.city}. Design sur mesure adapté à votre image de marque et optimisé pour convertir vos visiteurs en clients.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Plugins WordPress sur mesure',
    description: `Développement de plugins personnalisés pour les entreprises de ${localInfo.city}. Fonctionnalités spécifiques, intégrations tierces et extensions sur mesure pour votre activité.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: `SEO Local ${localInfo.city}`,
    description: `Optimisation de votre référencement pour les recherches locales à ${localInfo.city} et au ${localInfo.region}. Visibilité accrue sur Google Maps et recherches géolocalisées.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'WordPress Headless',
    description: `Architecture WordPress headless pour les entreprises biarrotes de prestige. API REST, performances optimales et flexibilité totale pour votre front-end.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Formation WordPress',
    description: `Sessions de formation WordPress dans nos locaux ou directement dans votre entreprise à ${localInfo.city}. Maîtrisez la gestion de votre site en autonomie.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description: `Support réactif pour les entreprises de ${localInfo.city}. Intervention rapide, mises à jour de sécurité et accompagnement personnalisé pour votre site WordPress.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: `Pourquoi choisir une agence WordPress à ${localInfo.city} ?`,
    answer: `Travailler avec une agence locale à ${localInfo.city} vous permet de bénéficier d'un accompagnement de proximité, de réunions en présentiel et d'une parfaite connaissance du tissu économique biarrot. Nous comprenons les spécificités du marché touristique haut de gamme et pouvons vous conseiller sur les meilleures stratégies web pour la région.`,
  },
  {
    question: `Combien coûte la création d'un site WordPress à ${localInfo.city} ?`,
    answer: `Les tarifs pour un site vitrine WordPress à ${localInfo.city} démarrent à 2 000 € pour un site standard. Les projets sur mesure avec plugins personnalisés et intégrations spécifiques peuvent aller de 5 000 € à 20 000 €. Nous établissons un devis gratuit après étude de vos besoins.`,
  },
  {
    question: `Proposez-vous des rendez-vous en présentiel à ${localInfo.city} ?`,
    answer: `Oui, nous nous déplaçons régulièrement à ${localInfo.city} et dans tout le ${localInfo.region}. Nous pouvons organiser des réunions dans vos locaux ou dans un espace de coworking biarrot pour discuter de votre projet web.`,
  },
  {
    question: `Quels secteurs accompagnez-vous à ${localInfo.city} ?`,
    answer: `Nous accompagnons tous les secteurs d'activité à ${localInfo.city}, avec une expertise particulière dans le tourisme, l'hôtellerie, le surf, le bien-être et la mode. Nous comprenons les enjeux spécifiques des entreprises de prestige biarrotes.`,
  },
]

export default function WordpressBiarritzPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link href="/services/wordpress" className="inline-flex items-center text-dark-400 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Agence WordPress
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#21759b]/20 border border-[#21759b]/30 text-[#21759b] text-sm font-medium rounded-full">
                {localInfo.region} ({localInfo.department})
              </span>
              <span className="px-3 py-1 bg-accent-500/20 border border-accent-500/30 text-accent-400 text-sm font-medium rounded-full flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><text x="4" y="18" fontSize="16" fontWeight="bold" fontFamily="serif">W</text></svg>
                WordPress Expert
              </span>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Agence{' '}
              <span className="text-[#21759b]">WordPress</span>{' '}
              {localInfo.city}
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Création de sites vitrines WordPress à {localInfo.city}, {localInfo.description}.
              Nous accompagnons les professionnels du tourisme et du luxe dans leur transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-gradient-to-r from-[#21759b] to-[#1a5f80] hover:from-[#1a5f80] hover:to-[#155270]">
                Devis gratuit sous 48h
              </Link>
              <Link href="/realisations" className="btn-secondary">
                Nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats locales */}
      <section className="py-16 border-y border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {localInfo.stats.map((stat, index) => (
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

      {/* Contexte local */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg text-white mb-6">
                Le digital à{' '}
                <span className="text-[#21759b]">{localInfo.city}</span>
              </h2>
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                {localInfo.businessContext}
              </p>
              <div className="space-y-3">
                <p className="text-white font-semibold">Secteurs que nous accompagnons :</p>
                <ul className="space-y-2">
                  {localInfo.sectors.map((sector, index) => (
                    <li key={index} className="flex items-center gap-3 text-dark-300">
                      <svg className="w-5 h-5 text-[#21759b] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-dark-900/50 rounded-2xl border border-dark-800/50 p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#21759b] to-[#1a5f80] flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Intervention à {localInfo.city}</h3>
                  <p className="text-dark-400">et dans tout le {localInfo.region}</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-dark-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rendez-vous en présentiel
                  </li>
                  <li className="flex items-center gap-3 text-dark-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Formation sur site
                  </li>
                  <li className="flex items-center gap-3 text-dark-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Support réactif
                  </li>
                  <li className="flex items-center gap-3 text-dark-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Connaissance du marché local
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-4">
              Nos services WordPress à {localInfo.city}
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour les entreprises de {localInfo.city} et sa région.
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
              Questions fréquentes - WordPress {localInfo.city}
            </h2>
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

      {/* Autres villes */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-4">
              Nous intervenons également
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Bordeaux', 'Mérignac', 'Pessac', 'Libourne', 'Arcachon', 'Cognac', 'Bayonne', 'Anglet', 'Pau'].map((city) => (
              <Link
                key={city}
                href={`/services/wordpress/${city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className="px-4 py-2 bg-dark-800/50 hover:bg-dark-700/50 border border-dark-700/50 hover:border-[#21759b]/30 rounded-lg text-dark-300 hover:text-white transition-all"
              >
                {city}
              </Link>
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#21759b] via-[#1a6b94] to-blue-700" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="heading-lg text-white mb-6">
                Lancez votre site WordPress à {localInfo.city}
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Discutons de votre projet web. Devis gratuit et personnalisé sous 48h.
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
