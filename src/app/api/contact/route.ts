import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company?: string
  budget?: string
  message: string
  recaptchaToken?: string
}

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY not configured, skipping verification')
    return { success: true }
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return { success: data.success && data.score >= 0.5, score: data.score }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return { success: false }
  }
}

// Email de confirmation pour le visiteur (HTML)
function getConfirmationEmailHtml(name: string): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <img src="https://bluewave.fr/images/logo.webp" alt="Bluewave" style="height: 40px; width: auto;" />
    </div>

    <!-- Content -->
    <div style="background: linear-gradient(135deg, #12121a 0%, #1a1a2e 100%); border: 1px solid #2a2a3e; border-radius: 16px; padding: 40px;">
      <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">
        Bonjour ${name},
      </h1>

      <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Nous avons bien recu votre demande et nous vous en remercions.
      </p>

      <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Notre equipe analyse votre projet et reviendra vers vous sous <strong style="color: #ffffff;">24 heures ouvrées</strong> avec une premiere reponse personnalisée.
      </p>

      <div style="background: #1e1e2e; border-left: 3px solid #6366f1; padding: 20px; border-radius: 8px; margin: 30px 0;">
        <p style="color: #ffffff; font-size: 14px; margin: 0 0 10px 0; font-weight: 500;">
          En attendant, vous pouvez :
        </p>
        <ul style="color: #a1a1aa; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li>Découvrir nos <a href="https://bluewave.fr/services" style="color: #6366f1; text-decoration: none;">services</a></li>
          <li>Consulter nos <a href="https://bluewave.fr/guides" style="color: #6366f1; text-decoration: none;">guides techniques</a></li>
          <li>Lire notre <a href="https://bluewave.fr/blog" style="color: #6366f1; text-decoration: none;">blog</a></li>
        </ul>
      </div>

      <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0;">
        A très bientot,<br />
        <strong style="color: #ffffff;">L'équipe Bluewave</strong>
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #2a2a3e;">
      <p style="color: #52525b; font-size: 12px; margin: 0 0 10px 0;">
        Bluewave - Agence Developpement Web & SEO Technique
      </p>
      <p style="color: #52525b; font-size: 12px; margin: 0;">
        <a href="https://bluewave.fr" style="color: #6366f1; text-decoration: none;">bluewave.fr</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // reCAPTCHA verification
    if (data.recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(data.recaptchaToken)
      if (!recaptchaResult.success) {
        console.log('reCAPTCHA failed, score:', recaptchaResult.score)
        return NextResponse.json(
          { error: 'Verification anti-spam echouee. Veuillez reessayer.' },
          { status: 400 }
        )
      }
    }

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

    // Format notification email for Bluewave team
    const notificationContent = `
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

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@bluewave.fr'

    if (RESEND_API_KEY) {
      // 1. Send notification to Bluewave team
      const notificationResponse = await fetch('https://api.resend.com/emails', {
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
          text: notificationContent,
        }),
      })

      if (!notificationResponse.ok) {
        const errorData = await notificationResponse.json()
        console.error('Resend notification error:', errorData)
        return NextResponse.json(
          { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
          { status: 500 }
        )
      }

      // 2. Send confirmation email to the visitor
      const confirmationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Bluewave <noreply@bluewave.fr>',
          to: [data.email],
          subject: `${data.name}, nous avons bien recu votre demande`,
          html: getConfirmationEmailHtml(data.name),
        }),
      })

      if (!confirmationResponse.ok) {
        // Log but don't fail - the main notification was sent
        const errorData = await confirmationResponse.json()
        console.error('Resend confirmation error:', errorData)
      }
    } else {
      // Fallback: log to console (for development)
      console.log('=== NEW CONTACT FORM SUBMISSION ===')
      console.log(notificationContent)
      console.log('===================================')
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
