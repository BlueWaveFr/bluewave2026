import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Legales',
  description: 'Mentions legales de Bluewave - BW Design SARL. Informations juridiques, editeur du site et hebergeur.',
  alternates: {
    canonical: 'https://bluewave.fr/mentions-legales',
  },
}

export default function MentionsLegalesPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-dark-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                </li>
                <li>/</li>
                <li className="text-dark-300">Mentions legales</li>
              </ol>
            </nav>
            <h1 className="heading-xl text-white mb-6">Mentions legales</h1>
            <p className="text-dark-300 text-lg">
              Conformement aux dispositions de la loi n 2004-575 du 21 juin 2004 pour la confiance en l'economie numerique.
            </p>
          </div>

          {/* Content */}
          <div className="prose-dark space-y-12">
            {/* Editeur */}
            <section>
              <h2 className="heading-md text-white mb-6">Editeur du site</h2>
              <div className="card p-8">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-dark-400 text-sm">Raison sociale</dt>
                    <dd className="text-white font-medium">BW Design SARL</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">Forme juridique</dt>
                    <dd className="text-white">Societe a Responsabilite Limitee (SARL)</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">Capital social</dt>
                    <dd className="text-white">1 000,00 EUR</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">SIREN</dt>
                    <dd className="text-white font-mono">951 453 646</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">SIRET</dt>
                    <dd className="text-white font-mono">951 453 646 00014</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">Numero TVA intracommunautaire</dt>
                    <dd className="text-white font-mono">FR53951453646</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">RCS</dt>
                    <dd className="text-white">951 453 646 R.C.S. Bordeaux</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">Code NAF</dt>
                    <dd className="text-white">63.12Z - Portails Internet</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">Activite</dt>
                    <dd className="text-white">Creation et maintenance de sites internet, UX design, video web, formation, hebergement</dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="heading-md text-white mb-6">Directeur de la publication</h2>
              <div className="card p-8">
                <p className="text-dark-300">
                  Le directeur de la publication est le representant legal de la societe BW Design SARL.
                </p>
              </div>
            </section>

            {/* Hebergeur */}
            <section>
              <h2 className="heading-md text-white mb-6">Hebergement</h2>
              <div className="card p-8">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-dark-400 text-sm">Hebergeur</dt>
                    <dd className="text-white font-medium">Vercel Inc.</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">Adresse</dt>
                    <dd className="text-white">340 S Lemon Ave #4133, Walnut, CA 91789, USA</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">Site web</dt>
                    <dd>
                      <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors">
                        vercel.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* Propriete intellectuelle */}
            <section>
              <h2 className="heading-md text-white mb-6">Propriete intellectuelle</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed">
                  L'ensemble du contenu de ce site (textes, images, videos, logos, icones, sons, logiciels, etc.)
                  est la propriete exclusive de BW Design SARL ou de ses partenaires et est protege par les lois
                  francaises et internationales relatives a la propriete intellectuelle.
                </p>
                <p className="text-dark-300 leading-relaxed mt-4">
                  Toute reproduction, representation, modification, publication, adaptation de tout ou partie
                  des elements du site, quel que soit le moyen ou le procede utilise, est interdite, sauf
                  autorisation ecrite prealable de BW Design SARL.
                </p>
              </div>
            </section>

            {/* Donnees personnelles */}
            <section>
              <h2 className="heading-md text-white mb-6">Protection des donnees personnelles</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed">
                  Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi
                  Informatique et Libertes, vous disposez d'un droit d'acces, de rectification, de suppression
                  et d'opposition aux donnees personnelles vous concernant.
                </p>
                <p className="text-dark-300 leading-relaxed mt-4">
                  Pour plus d'informations sur le traitement de vos donnees personnelles, veuillez consulter
                  notre{' '}
                  <Link href="/confidentialite" className="text-accent-400 hover:text-accent-300 transition-colors">
                    politique de confidentialite
                  </Link>.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="heading-md text-white mb-6">Contact</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed mb-4">
                  Pour toute question concernant ces mentions legales ou le site web, vous pouvez nous contacter :
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
                >
                  Contactez-nous
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
