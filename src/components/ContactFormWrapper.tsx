'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import ContactForm from './ContactForm'

export default function ContactFormWrapper() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!siteKey) {
    return <ContactForm />
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      language="fr"
      scriptProps={{
        async: true,
        defer: true,
      }}
    >
      <ContactForm />
    </GoogleReCaptchaProvider>
  )
}
