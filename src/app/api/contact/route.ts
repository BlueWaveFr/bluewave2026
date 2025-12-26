import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company?: string
  budget?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Veuillez entrer une adresse email valide.' },
        { status: 400 }
      )
    }

    // Format email content
    const emailContent = `
Nouveau message de contact - Bluewave

Nom: ${data.name}
Email: ${data.email}
Entreprise: ${data.company || 'Non renseigné'}
Budget: ${data.budget || 'Non renseigné'}

Message:
${data.message}

---
Envoyé depuis le formulaire de contact bluewave.fr
    `.trim()

    // Send email via Resend, SendGrid, or another service
    // For now, we'll use a simple mailto fallback or environment-based sending

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@bluewave.fr'

    if (RESEND_API_KEY) {
      // Send via Resend
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Bluewave Contact <noreply@bluewave.fr>',
          to: [CONTACT_EMAIL],
          reply_to: data.email,
          subject: `[Contact] Nouveau message de ${data.name}`,
          text: emailContent,
        }),
      })

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json()
        console.error('Resend error:', errorData)
        return NextResponse.json(
          { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
          { status: 500 }
        )
      }
    } else {
      // Fallback: log to console (for development)
      console.log('=== NEW CONTACT FORM SUBMISSION ===')
      console.log(emailContent)
      console.log('===================================')

      // In production without Resend, you could:
      // - Send to a webhook (Slack, Discord, etc.)
      // - Store in a database
      // - Use another email service
    }

    return NextResponse.json(
      { success: true, message: 'Votre message a bien été envoyé. Nous vous répondrons sous 24h.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
