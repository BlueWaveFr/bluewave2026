'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

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
        <form onSubmit={handleSubmit} className="card p-8">
          <div className="space-y-6">
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
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
            >
              Envoyer le message
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <p className="text-dark-500 text-sm text-center">
              En soumettant ce formulaire, vous acceptez notre{' '}
              <a href="/confidentialite" className="text-accent-400 hover:underline">
                politique de confidentialite
              </a>.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
