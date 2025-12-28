'use client'

import { useEffect } from 'react'

const GTM_ID = 'GTM-TTWNDNWF'

export function GoogleTagManagerHead() {
  useEffect(() => {
    // Consent Mode V2 - Default denied
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag

    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': 500
    })

    // GTM Script
    window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'})
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    document.head.insertBefore(script, document.head.firstChild)
  }, [])

  return null
}

export function GoogleTagManagerBody() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}
