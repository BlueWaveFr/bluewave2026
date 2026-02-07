'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const localInfo = {
  city: 'Arcachon',
  region: 'Gironde',
  department: '33',
  description: 'station balneaire prestigieuse du Bassin d\'Arcachon',
  businessContext: 'Arcachon est une destination touristique majeure avec une economie axee sur le tourisme, l\'ostreiculture et l\'immobilier de prestige. Le e-commerce local se developpe rapidement.',
  sectors: ['Tourisme et hotellerie', 'Ostreiculture', 'Immobilier de luxe', 'Nautisme', 'Gastronomie et produits de la mer'],
  stats: [
    { value: '12K+', label: 'Habitants' },
    { value: '2M+', label: 'Touristes/an' },
    { value: '#1', label: 'Station balneaire' },
    { value: '+25%', label: 'E-commerce local' },
  ],
}

const services = [
  {
    title: 'Creation de boutique PrestaShop',
    description: `Developpement de votre boutique e-commerce a ${localInfo.city}. Design sur mesure adapte a votre marche local et integration avec les specificites regionales.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Modules PrestaShop sur mesure',
    description: `Developpement de modules personnalises pour les commercants de ${localInfo.city}. Integrations avec les transporteurs locaux et solutions de paiement regionales.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'SEO Local Arcachon',
    description: `Optimisation de votre referencement pour les recherches locales a ${localInfo.city} et sur le Bassin d'Arcachon. Visibilite accrue sur Google Maps et recherches geolocalisees.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Integration Click & Collect',
    description: `Mise en place de solutions Click & Collect pour vos clients arcachonnais. Retrait en magasin, points relais locaux et livraison express sur le Bassin.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Formation PrestaShop',
    description: `Sessions de formation PrestaShop dans nos locaux ou directement dans votre entreprise a ${localInfo.city}. Maitrisez la gestion de votre boutique en autonomie.`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description: `Support reactif pour les e-commercants de ${localInfo.city}. Intervention rapide, mises a jour de securite et accompagnement personnalise.`,
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
    question: `Pourquoi choisir une agence PrestaShop a ${localInfo.city} ?`,
    answer: `Travailler avec une agence locale a ${localInfo.city} vous permet de beneficier d'un accompagnement de proximite, de reunions en presentiel et d'une parfaite connaissance du tissu economique du Bassin d'Arcachon. Nous comprenons les specificites du marche local, notamment le tourisme et l'ostreiculture, et pouvons vous conseiller sur les meilleures strategies e-commerce pour la region.`,
  },
  {
    question: `Combien coute la creation d'une boutique PrestaShop a ${localInfo.city} ?`,
    answer: `Les tarifs pour une boutique PrestaShop a ${localInfo.city} demarrent a 3 000 EUR pour une boutique standard. Les projets sur mesure avec modules personnalises et integrations specifiques peuvent aller de 8 000 EUR a 25 000 EUR. Nous etablissons un devis gratuit apres etude de vos besoins.`,
  },
  {
    question: `Proposez-vous des rendez-vous en presentiel a ${localInfo.city} ?`,
    answer: `Oui, nous nous deplacons regulierement a ${localInfo.city} et sur tout le Bassin d'Arcachon. Nous pouvons organiser des reunions dans vos locaux ou dans un espace de coworking pour discuter de votre projet e-commerce.`,
  },
  {
    question: `Quels secteurs accompagnez-vous a ${localInfo.city} ?`,
    answer: `Nous accompagnons tous les secteurs d'activite a ${localInfo.city}, avec une expertise particuliere dans le tourisme, l'ostreiculture, le nautisme, l'immobilier de prestige et la gastronomie. Nous comprenons les enjeux specifiques du commerce sur le Bassin d'Arcachon.`,
  },
]

export default function PrestashopArcachonPage() {
  return (
    <main className="pt-20">
      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `Agence PrestaShop ${localInfo.city} - Bluewave`,
            description: `Creation de boutiques PrestaShop a ${localInfo.city}. Expert e-commerce sur le Bassin d'Arcachon.`,
            url: `https://bluewave.fr/services/prestashop/${localInfo.city.toLowerCase()}`,
            telephone: '+33 5 XX XX XX XX',
            address: {
              '@type': 'PostalAddress',
              addressLocality: localInfo.city,
              addressRegion: localInfo.region,
              postalCode: localInfo.department + '120',
              addressCountry: 'FR',
            },
            areaServed: {
              '@type': 'City',
              name: localInfo.city,
            },
            priceRange: '€€€',
          }),
        }}
      />

      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link href="/services/prestashop" className="inline-flex items-center text-dark-400 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Agence PrestaShop
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 text-pink-400 text-sm font-medium rounded-full">
                {localInfo.region} ({localInfo.department})
              </span>
              <span className="px-3 py-1 bg-accent-500/20 border border-accent-500/30 text-accent-400 text-sm font-medium rounded-full flex items-center gap-1"><svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                Expert PrestaShop
              </span>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Agence{' '}
              <span className="text-pink-400">PrestaShop</span>{' '}
              {localInfo.city}
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Creation de boutiques e-commerce PrestaShop a {localInfo.city}, {localInfo.description}.
              Nous accompagnons les commercants et entreprises du Bassin d'Arcachon dans leur transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
                Devis gratuit sous 48h
              </Link>
              <Link href="/realisations" className="btn-secondary">
                Nos realisations
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
                <div className="text-3xl lg:text-4xl font-bold text-pink-400 mb-2">
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
                Le e-commerce a{' '}
                <span className="text-pink-400">{localInfo.city}</span>
              </h2>
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                {localInfo.businessContext}
              </p>
              <div className="space-y-3">
                <p className="text-white font-semibold">Secteurs que nous accompagnons :</p>
                <ul className="space-y-2">
                  {localInfo.sectors.map((sector, index) => (
                    <li key={index} className="flex items-center gap-3 text-dark-300">
                      <svg className="w-5 h-5 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Intervention a {localInfo.city}</h3>
                  <p className="text-dark-400">et sur tout le Bassin d'Arcachon</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-dark-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rendez-vous en presentiel
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
                    Support reactif
                  </li>
                  <li className="flex items-center gap-3 text-dark-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Connaissance du marche local
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
              Nos services PrestaShop a {localInfo.city}
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour les e-commercants de {localInfo.city} et du Bassin d'Arcachon.
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
              Questions frequentes - PrestaShop {localInfo.city}
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
              Nous intervenons egalement
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Bordeaux', 'Merignac', 'Pessac', 'Libourne', 'Bayonne', 'Biarritz', 'Anglet', 'Pau'].map((city) => (
              <Link
                key={city}
                href={`/services/prestashop/${city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className="px-4 py-2 bg-dark-800/50 hover:bg-dark-700/50 border border-dark-700/50 hover:border-pink-500/30 rounded-lg text-dark-300 hover:text-white transition-all"
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
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-pink-500 to-purple-500" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="heading-lg text-white mb-6">
                Lancez votre boutique PrestaShop a {localInfo.city}
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Discutons de votre projet e-commerce. Devis gratuit et personnalise sous 48h.
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
