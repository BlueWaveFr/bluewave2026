import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de Confidentialite',
  description: 'Politique de confidentialite de Bluewave. Decouvrez comment nous collectons, utilisons et protegeons vos donnees personnelles.',
  alternates: {
    canonical: 'https://bluewave.fr/confidentialite',
  },
}

export default function ConfidentialitePage() {
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
                <li className="text-dark-300">Politique de confidentialite</li>
              </ol>
            </nav>
            <h1 className="heading-xl text-white mb-6">Politique de confidentialite</h1>
            <p className="text-dark-300 text-lg">
              Derniere mise a jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose-dark space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="heading-md text-white mb-6">Introduction</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed">
                  BW Design SARL (ci-apres "Bluewave", "nous", "notre") s'engage a proteger votre vie privee.
                  Cette politique de confidentialite explique comment nous collectons, utilisons, stockons et
                  protegeons vos informations personnelles lorsque vous utilisez notre site web bluewave.fr.
                </p>
              </div>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="heading-md text-white mb-6">Responsable du traitement</h2>
              <div className="card p-8">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-dark-400 text-sm">Raison sociale</dt>
                    <dd className="text-white font-medium">BW Design SARL</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">SIRET</dt>
                    <dd className="text-white font-mono">951 453 646 00014</dd>
                  </div>
                  <div>
                    <dt className="text-dark-400 text-sm">Contact</dt>
                    <dd>
                      <Link href="/contact" className="text-accent-400 hover:text-accent-300 transition-colors">
                        Formulaire de contact
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* Donnees collectees */}
            <section>
              <h2 className="heading-md text-white mb-6">Donnees collectees</h2>
              <div className="card p-8 space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Donnees fournies directement</h3>
                  <ul className="text-dark-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-400 mt-1">•</span>
                      <span>Nom et prenom (via le formulaire de contact)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-400 mt-1">•</span>
                      <span>Adresse email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-400 mt-1">•</span>
                      <span>Numero de telephone (optionnel)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-400 mt-1">•</span>
                      <span>Contenu des messages envoyes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Donnees collectees automatiquement</h3>
                  <ul className="text-dark-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-400 mt-1">•</span>
                      <span>Adresse IP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-400 mt-1">•</span>
                      <span>Type de navigateur et systeme d'exploitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-400 mt-1">•</span>
                      <span>Pages consultees et duree de visite</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalites */}
            <section>
              <h2 className="heading-md text-white mb-6">Finalites du traitement</h2>
              <div className="card p-8">
                <ul className="text-dark-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Repondre a vos demandes de contact et de devis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Ameliorer notre site web et nos services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Vous envoyer notre newsletter (avec votre consentement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Respecter nos obligations legales</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Base legale */}
            <section>
              <h2 className="heading-md text-white mb-6">Base legale du traitement</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed">
                  Le traitement de vos donnees personnelles est fonde sur :
                </p>
                <ul className="text-dark-300 space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">Votre consentement</strong> : pour l'envoi de newsletters et communications marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">L'execution d'un contrat</strong> : pour la gestion de vos demandes de devis et projets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">Notre interet legitime</strong> : pour l'amelioration de nos services et la securite du site</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conservation */}
            <section>
              <h2 className="heading-md text-white mb-6">Duree de conservation</h2>
              <div className="card p-8">
                <ul className="text-dark-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Donnees de contact : 3 ans apres le dernier contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Donnees de navigation : 13 mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Donnees contractuelles : 10 ans (obligations legales)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="heading-md text-white mb-6">Vos droits</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed mb-4">
                  Conformement au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="text-dark-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">Droit d'acces</strong> : obtenir une copie de vos donnees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">Droit de rectification</strong> : corriger vos donnees inexactes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">Droit a l'effacement</strong> : demander la suppression de vos donnees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">Droit a la portabilite</strong> : recevoir vos donnees dans un format structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">Droit d'opposition</strong> : vous opposer au traitement de vos donnees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span><strong className="text-white">Droit de retrait du consentement</strong> : retirer votre consentement a tout moment</span>
                  </li>
                </ul>
                <p className="text-dark-300 leading-relaxed mt-6">
                  Pour exercer ces droits, contactez-nous via notre{' '}
                  <Link href="/contact" className="text-accent-400 hover:text-accent-300 transition-colors">
                    formulaire de contact
                  </Link>.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="heading-md text-white mb-6">Cookies</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed">
                  Notre site utilise des cookies techniques necessaires au fonctionnement du site.
                  Ces cookies ne necessitent pas votre consentement. Nous n'utilisons pas de cookies
                  publicitaires ou de tracage tiers.
                </p>
              </div>
            </section>

            {/* Securite */}
            <section>
              <h2 className="heading-md text-white mb-6">Securite</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed">
                  Nous mettons en oeuvre des mesures techniques et organisationnelles appropriees pour
                  proteger vos donnees personnelles contre la destruction accidentelle ou illicite,
                  la perte, l'alteration, la divulgation ou l'acces non autorises.
                </p>
              </div>
            </section>

            {/* Reclamation */}
            <section>
              <h2 className="heading-md text-white mb-6">Reclamation</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed">
                  Si vous estimez que le traitement de vos donnees personnelles constitue une violation
                  du RGPD, vous avez le droit d'introduire une reclamation aupres de la CNIL
                  (Commission Nationale de l'Informatique et des Libertes) :{' '}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="heading-md text-white mb-6">Contact</h2>
              <div className="card p-8">
                <p className="text-dark-300 leading-relaxed mb-4">
                  Pour toute question relative a cette politique de confidentialite :
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
