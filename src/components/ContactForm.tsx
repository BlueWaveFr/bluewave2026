'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    if (!executeRecaptcha) {
      setStatus('error')
      setErrorMessage('reCAPTCHA non disponible. Veuillez rafraichir la page.')
      return
    }

    try {
      const recaptchaToken = await executeRecaptcha('contact_form')

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Une erreur est survenue.')
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', budget: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage('Impossible de contacter le serveur. Veuillez reessayer.')
    }
  }, [executeRecaptcha, formData])

  return (
    <div className="grid lg:grid-cols-2 gap-16">
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="badge mb-6">Contact</span>
        <h1 className="heading-xl text-white mb-6">
          Discutons de votre{' '}
          <span className="gradient-text">projet</span>
        </h1>
        <p className="text-xl text-dark-300 leading-relaxed mb-12">
          Partagez-nous votre vision et vos objectifs. Nous reviendrons vers vous
          sous 24h pour planifier un premier echange.
        </p>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <a href="mailto:contact@bluewave.fr" className="text-dark-400 hover:text-accent-400 transition-colors">
                contact@bluewave.fr
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Temps de reponse</h3>
              <p className="text-dark-400">Moins de 24 heures</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Localisation</h3>
              <p className="text-dark-400">France - Remote friendly</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column - Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {status === 'success' ? (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Message envoye !</h3>
            <p className="text-dark-400 mb-6">
              Merci pour votre message. Nous vous repondrons dans les 24 heures.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-accent-400 hover:text-accent-300 font-medium"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-8">
            <div className="space-y-6">
              {status === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="input-label">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="input"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="input-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="input"
                    placeholder="jean@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="input-label">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="input"
                    placeholder="Nom de l'entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="input-label">
                    Budget estime
                  </label>
                  <select
                    id="budget"
                    className="input"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    disabled={status === 'loading'}
                  >
                    <option value="">Selectionnez...</option>
                    <option value="5k-10k">5 000 - 10 000 EUR</option>
                    <option value="10k-25k">10 000 - 25 000 EUR</option>
                    <option value="25k-50k">25 000 - 50 000 EUR</option>
                    <option value="50k+">50 000 EUR +</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="input-label">
                  Decrivez votre projet *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="input resize-none"
                  placeholder="Parlez-nous de votre projet, vos objectifs et vos contraintes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-dark-500 text-sm text-center">
                En soumettant ce formulaire, vous acceptez notre{' '}
                <a href="/confidentialite" className="text-accent-400 hover:underline">
                  politique de confidentialite
                </a>.
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  )
}
