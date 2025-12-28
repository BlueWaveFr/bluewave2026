'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check stored consent
    const stored = localStorage.getItem('cookie-consent')
    if (stored === 'accepted') {
      updateConsent(true)
      setShowBanner(false)
    } else if (stored === 'refused') {
      updateConsent(false)
      setShowBanner(false)
    } else {
      // No choice yet, show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const updateConsent = (granted: boolean) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      })
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    updateConsent(true)
    setShowBanner(false)
  }

  const refuseCookies = () => {
    localStorage.setItem('cookie-consent', 'refused')
    updateConsent(false)
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-900/95 backdrop-blur-xl border border-dark-700 rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">
                    Nous respectons votre vie privee
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    Nous utilisons des cookies pour analyser le trafic et ameliorer votre experience.
                    Vous pouvez accepter ou refuser ces cookies.{' '}
                    <a
                      href="/confidentialite"
                      className="text-accent-400 hover:text-accent-300 underline"
                    >
                      En savoir plus
                    </a>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:flex-shrink-0">
                  <button
                    onClick={refuseCookies}
                    className="px-5 py-2.5 text-sm font-medium text-dark-300 hover:text-white border border-dark-600 hover:border-dark-500 rounded-lg transition-colors"
                  >
                    Refuser
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-accent-600 hover:bg-accent-500 rounded-lg transition-colors"
                  >
                    Accepter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
