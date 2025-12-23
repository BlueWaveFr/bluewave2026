# Bluewave

Site marketing Next.js avec WordPress headless.

## Stack

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS + Framer Motion
- **CMS**: WordPress + WPGraphQL
- **Hébergement**: Vercel (frontend) + o2switch (WordPress)
- **DNS**: Cloudflare

## Installation

### 1. Cloner et installer

```bash
git clone <ton-repo>
cd bluewave
npm install
```

### 2. Configuration environnement

```bash
cp .env.local.example .env.local
```

Modifier `.env.local` avec tes URLs.

### 3. Lancer WordPress local (Docker)

```bash
docker-compose up -d
```

- WordPress: http://localhost:8080
- phpMyAdmin: http://localhost:8081

### 4. Lancer Next.js

```bash
npm run dev
```

Site accessible sur http://localhost:3000

## Plugins WordPress requis

1. **WPGraphQL** - API GraphQL
2. **WPGraphQL for ACF** - Champs personnalisés (optionnel)
3. **Yoast SEO** + **WPGraphQL Yoast SEO** - SEO

## Déploiement

### Vercel (automatique)
Chaque push sur `main` déclenche un déploiement.

### WordPress (o2switch)
Exporter la base locale et l'importer sur o2switch.

## Structure

```
bluewave/
├── src/
│   ├── app/           # Pages Next.js
│   ├── components/    # Composants React
│   └── lib/           # Utilitaires (Apollo, etc.)
├── wordpress/         # Volume Docker WP
├── docker-compose.yml
└── next.config.js
```

## Scripts

```bash
npm run dev      # Développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Linter
```
