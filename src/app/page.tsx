'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const services = [
  {
    title: 'Développement Web',
    description: 'Applications web sur mesure, sites e-commerce et plateformes SaaS performantes.',
    longDescription: 'De la conception à la mise en production, nous développons des applications modernes avec React, Next.js et les dernières technologies. Performance, accessibilité et SEO sont au coeur de chaque projet.',
    features: ['Applications React & Next.js', 'E-commerce Prestashop', 'Plateformes SaaS', 'API & Integrations'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/developpement',
    gradient: 'from-accent-500 to-accent-600',
    image: '/images/services/developpement.webp',
  },
  {
    title: 'Debugging & Optimisation',
    description: 'Resolution de bugs complexes, optimisation des performances et de la stabilite.',
    longDescription: 'Votre application a des bugs ou des lenteurs ? Nous intervenons rapidement pour diagnostiquer et resoudre vos problemes techniques. Core Web Vitals, performance et stabilite garantis.',
    features: ['Resolution de bugs', 'Optimisation performance', 'Refactoring de code', 'Migration & mise a jour'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/services/debugging',
    gradient: 'from-orange-500 to-red-500',
    image: '/images/services/debugging.webp',
  },
  {
    title: 'Consulting Technique',
    description: 'Accompagnement strategique pour vos projets digitaux et transformation numerique.',
    longDescription: 'Beneficiez de notre expertise pour prendre les bonnes decisions techniques. Architecture, choix technologiques, formation d\'equipe et accompagnement sur mesure.',
    features: ['Conseil en architecture', 'Choix technologiques', 'Formation equipe', 'CTO as a Service'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: '/services/consulting',
    gradient: 'from-purple-500 to-pink-500',
    image: '/images/services/consulting.webp',
  },
  {
    title: 'Audit Technique & Logs',
    description: 'Analyse approfondie de vos infrastructures, audit SEO technique et monitoring.',
    longDescription: 'Un diagnostic complet de votre application : performance, SEO technique, securite et qualite de code. Rapport detaille avec plan d\'action priorise.',
    features: ['Audit de performance', 'Audit SEO technique', 'Audit de securite', 'Configuration monitoring'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/services/audit',
    gradient: 'from-green-500 to-emerald-500',
    image: '/images/services/audit.webp',
  },
]

const stats = [
  { value: '150+', label: 'Projets livres' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '10+', label: 'Annees experience' },
  { value: '<24h', label: 'Temps de reponse' },
]

const technologies = [
  {
    name: 'Next.js',
    category: 'frontend',
    icon: (
      <svg viewBox="0 0 180 180" fill="currentColor" className="w-8 h-8">
        <mask id="mask0_408_134" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black"/>
        </mask>
        <g mask="url(#mask0_408_134)">
          <circle cx="90" cy="90" r="90" fill="currentColor"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"/>
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'React',
    category: 'frontend',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 7.5c3.866 0 7.272.658 9.536 1.674C23.804 10.19 25 11.44 25 12.75s-1.196 2.56-3.464 3.576C19.272 17.342 15.866 18 12 18s-7.272-.658-9.536-1.674C.196 15.31-1 14.06-1 12.75s1.196-2.56 3.464-3.576C4.728 8.158 8.134 7.5 12 7.5Zm0 1.5c-3.672 0-6.84.622-8.864 1.537C1.113 11.45.5 12.282.5 12.75c0 .468.613 1.3 2.636 2.213C5.16 15.878 8.328 16.5 12 16.5s6.84-.622 8.864-1.537c2.023-.913 2.636-1.745 2.636-2.213 0-.468-.613-1.3-2.636-2.213C18.84 9.622 15.672 9 12 9Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.382 10.125c1.933-3.352 4.39-6.023 6.46-7.22 2.073-1.2 3.84-1.058 4.848.687 1.007 1.746.49 4.118-.737 6.493a.75.75 0 0 1-1.32-.717c1.09-2.11 1.434-4.04.837-5.075-.598-1.036-2.009-1.06-3.684-.09-1.673.968-3.897 3.352-5.71 6.493-1.814 3.14-2.808 6.137-2.91 8.063-.101 1.928.506 2.847 1.504 3.424.998.577 2.56.445 4.33-.573a.75.75 0 1 1 .748 1.3c-2.073 1.19-4.203 1.48-5.76.58-1.558-.9-2.356-2.696-2.23-5.117.125-2.418 1.24-5.648 3.204-9.048Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.382 15.375c-1.933-3.352-3.33-6.63-3.454-9.048-.125-2.421.671-4.217 2.23-5.117 1.556-.9 3.686-.61 5.759.58a.75.75 0 0 1-.748 1.3c-1.77-1.018-3.332-1.15-4.33-.573-.998.577-1.605 1.496-1.504 3.424.102 1.926 1.096 4.923 2.91 8.063 1.813 3.14 4.037 5.525 5.71 6.493 1.675.97 3.086.946 3.684-.09.597-1.035.253-2.965-.837-5.075a.75.75 0 0 1 1.32-.717c1.227 2.375 1.744 4.747.737 6.493-1.008 1.745-2.775 1.887-4.848.688-2.07-1.198-4.527-3.869-6.46-7.221Z"/>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    )
  },
  {
    name: 'Node.js',
    category: 'backend',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242L12.135 1.6a.271.271 0 0 0-.27 0L3.078 6.68a.282.282 0 0 0-.14.243v10.15c0 .099.053.19.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.076.242a1.925 1.925 0 0 1 1.846 0l8.794 5.076c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078a1.851 1.851 0 0 1-.924.247zm2.715-6.996c-3.857 0-4.664-1.77-4.664-3.255 0-.141.113-.253.254-.253h1.137c.126 0 .232.091.251.215.172 1.161.684 1.746 3.022 1.746 1.858 0 2.65-.42 2.65-1.406 0-.569-.225-.99-3.114-1.274-2.415-.238-3.909-.772-3.909-2.702 0-1.78 1.5-2.84 4.016-2.84 2.824 0 4.222.979 4.398 3.082a.256.256 0 0 1-.063.19.259.259 0 0 1-.186.081h-1.143a.252.252 0 0 1-.246-.196c-.273-1.213-.937-1.601-2.76-1.601-2.034 0-2.27.709-2.27 1.24 0 .644.28.832 3.017 1.196 2.713.36 4.003.871 4.003 2.765 0 1.922-1.603 3.012-4.393 3.012z"/>
      </svg>
    )
  },
  {
    name: 'Python',
    category: 'backend',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    )
  },
  {
    name: 'PHP',
    category: 'backend',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <ellipse cx="12" cy="12" rx="12" ry="6.5"/>
        <text x="12" y="14.5" textAnchor="middle" fill="#0d0d0f" fontSize="7" fontWeight="bold" fontFamily="sans-serif">php</text>
      </svg>
    )
  },
  {
    name: 'PostgreSQL',
    category: 'data',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M23.557 14.573c-.533-.453-1.283-.682-2.014-.681-.438.001-.853.063-1.233.18a4.633 4.633 0 0 0 .27-2.213 6.735 6.735 0 0 0-.238-1.156c-.544-1.948-1.694-3.659-3.283-5.03-1.575-1.362-3.59-2.263-5.784-2.538a10.478 10.478 0 0 0-3.907.254C5.08 3.91 3.088 5.22 1.661 6.995.245 8.757-.362 10.983.19 13.198c.217.87.614 1.68 1.174 2.372a5.681 5.681 0 0 0-.182 1.454c0 1.625.68 3.093 1.78 4.138A5.85 5.85 0 0 0 7.025 23c.496 0 .98-.064 1.442-.186.34.12.717.186 1.109.186 1.028 0 1.965-.392 2.671-1.033.706.641 1.643 1.033 2.67 1.033.392 0 .77-.066 1.11-.186.462.122.945.186 1.441.186a5.851 5.851 0 0 0 4.063-1.838c1.1-1.045 1.78-2.513 1.78-4.138 0-.488-.063-.961-.182-1.412.276-.338.503-.724.681-1.15.41-.986.555-2.154.235-3.275-.17-.595-.493-1.131-.965-1.555a3.16 3.16 0 0 0-1.523-.843zm-1.413 3.708a3.52 3.52 0 0 1-.382.674c.075.3.116.613.116.932 0 1.155-.484 2.2-1.265 2.941a4.163 4.163 0 0 1-2.888 1.306c-.343 0-.677-.043-.994-.123a2.85 2.85 0 0 1-1.614.499c-.73 0-1.395-.274-1.9-.724a2.78 2.78 0 0 1-1.9.724 2.85 2.85 0 0 1-1.614-.499 4.083 4.083 0 0 1-.994.123 4.163 4.163 0 0 1-2.888-1.306c-.78-.74-1.265-1.786-1.265-2.94 0-.32.041-.632.116-.932-.145-.214-.27-.44-.382-.675-.383-.813-.514-1.73-.314-2.7.419-2.035 2.115-3.532 4.155-4.177a8.792 8.792 0 0 1 3.28-.214c1.948.244 3.708 1.041 5.08 2.227 1.384 1.195 2.368 2.7 2.836 4.381.06.216.104.435.14.655.45.115.88.307 1.246.575.284.208.512.46.68.744.29.492.385 1.105.243 1.748a2.4 2.4 0 0 1-.478 1.156z"/>
      </svg>
    )
  },
  {
    name: 'MongoDB',
    category: 'data',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    )
  },
  {
    name: 'Docker',
    category: 'devops',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
      </svg>
    )
  },
  {
    name: 'AWS',
    category: 'devops',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.319-.79 1.03-2.57.695-2.994z"/>
      </svg>
    )
  },
  {
    name: 'Vercel',
    category: 'devops',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    )
  },
  {
    name: 'WordPress',
    category: 'cms',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.034 1.232-.105 1.232-.105.582-.07.514-.925-.068-.892 0 0-1.748.138-2.877.138-1.06 0-2.84-.138-2.84-.138-.582-.033-.649.857-.067.891 0 0 .546.07 1.128.105l1.674 4.595-2.351 7.058-3.911-11.653c.649-.034 1.233-.105 1.233-.105.581-.07.513-.925-.068-.892 0 0-1.749.138-2.878.138-.202 0-.44-.005-.693-.014C5.88 3.817 8.842 1.786 12.288 1.786c2.572 0 4.914.986 6.67 2.596-.043-.003-.085-.01-.128-.01-1.06 0-1.812.924-1.812 1.914 0 .892.515 1.646 1.062 2.537.412.72.89 1.644.89 2.977 0 .924-.356 1.997-.822 3.49l-1.08 3.61-3.91-11.636zm-4.67 14.39l3.303-9.595.004-.015c.336-.897.56-1.723.697-2.434L12.288 24c-1.199 0-2.355-.166-3.454-.467zm10.23-9.093c.662-1.619.875-2.93.875-4.087 0-.452-.032-.873-.09-1.263 1.088 1.974 1.71 4.255 1.71 6.68 0 3.424-1.406 6.515-3.675 8.734l2.18-8.064z"/>
      </svg>
    )
  },
  {
    name: 'Prestashop',
    category: 'ecommerce',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.391 0c-.328.016-.637.064-.92.139-.426.115-.8.287-1.108.51a2.705 2.705 0 0 0-.746.822c-.186.33-.301.717-.34 1.152v.004c-.04.435-.006.922.099 1.454.107.543.287 1.13.537 1.757.251.629.572 1.295.96 1.996.387.699.84 1.431 1.357 2.19.28.41.578.826.89 1.248l-.127.107a18.31 18.31 0 0 0-1.932 1.916c-.59.666-1.122 1.37-1.59 2.107a13.43 13.43 0 0 0-1.135 2.316 10.484 10.484 0 0 0-.568 2.492 8.86 8.86 0 0 0 .072 2.445c.115.68.305 1.318.564 1.906.26.59.589 1.13.98 1.612.39.482.844.906 1.356 1.264.51.357 1.078.647 1.698.861.619.215 1.288.355 2.004.412.717.057 1.481.03 2.293-.084.81-.113 1.668-.31 2.572-.59.607-.187 1.178-.41 1.71-.668a10.467 10.467 0 0 0 1.484-.873c.459-.326.88-.688 1.264-1.082.385-.395.73-.822 1.037-1.279.307-.457.574-.945.8-1.459.228-.515.416-1.057.563-1.621.147-.565.252-1.152.313-1.76.061-.607.078-1.234.049-1.875a14.7 14.7 0 0 0-.225-1.977 15.62 15.62 0 0 0-.498-1.957 16.22 16.22 0 0 0-.756-1.855 15.48 15.48 0 0 0-1.006-1.72 13.507 13.507 0 0 0-1.225-1.526 11.16 11.16 0 0 0-1.414-1.293 8.653 8.653 0 0 0-1.566-1.008 6.316 6.316 0 0 0-1.678-.646 4.6 4.6 0 0 0-1.748-.193c-.363.016-.707.07-1.025.158a3.382 3.382 0 0 0-.892.377 2.718 2.718 0 0 0-.695.59 2.31 2.31 0 0 0-.441.795 2.345 2.345 0 0 0-.133.922c.02.301.092.598.215.883.122.283.295.554.516.805.222.252.494.484.813.69.32.206.686.389 1.098.537.41.149.863.264 1.359.343a12.37 12.37 0 0 0 1.568.119c.547 0 1.111-.04 1.686-.119.576-.08 1.163-.196 1.758-.352a18.39 18.39 0 0 1 1.799-.449c.6-.127 1.19-.213 1.77-.256a9.6 9.6 0 0 1 1.702.01c.555.054 1.074.16 1.557.318.481.158.92.369 1.318.629.397.262.75.574 1.06.936.31.363.576.777.797 1.238.221.463.396.973.527 1.527.13.556.213 1.158.248 1.803.034.645.02 1.336-.047 2.07-.065.732-.18 1.506-.34 2.322a25.1 25.1 0 0 1-.625 2.473c-.26.842-.571 1.676-.936 2.498a20.96 20.96 0 0 1-1.232 2.414c-.462.78-.98 1.522-1.549 2.218a14.56 14.56 0 0 1-1.854 1.916c-.67.594-1.398 1.127-2.176 1.598a14.49 14.49 0 0 1-2.463 1.199c-.875.342-1.803.602-2.779.779a16.65 16.65 0 0 1-3.06.248c-1.035 0-2.039-.1-3.01-.3a12.73 12.73 0 0 1-2.736-.86c-.86-.38-1.654-.846-2.38-1.395a10.45 10.45 0 0 1-1.914-1.877 9.285 9.285 0 0 1-1.377-2.32 9.117 9.117 0 0 1-.744-2.696 9.597 9.597 0 0 1 .01-2.914c.127-.974.367-1.92.719-2.832a13.16 13.16 0 0 1 1.291-2.633c.52-.834 1.131-1.625 1.828-2.367a17.54 17.54 0 0 1 2.305-2.1l.313-.238c.578.73 1.19 1.425 1.834 2.082a22.43 22.43 0 0 0 2.049 1.836c.723.572 1.478 1.088 2.266 1.541.786.453 1.604.842 2.449 1.162a14.44 14.44 0 0 0 2.601.754c.896.17 1.811.256 2.746.256.938 0 1.893-.088 2.865-.262a17.11 17.11 0 0 0 2.867-.77c.949-.345 1.875-.77 2.777-1.273a19.19 19.19 0 0 0 2.578-1.73c.824-.64 1.604-1.346 2.34-2.113a20.52 20.52 0 0 0 2.023-2.414c.615-.869 1.168-1.79 1.657-2.76a19.87 19.87 0 0 0 1.217-3.004c.32-1.035.559-2.107.713-3.213a20.3 20.3 0 0 0 .172-3.38c-.043-1.137-.17-2.234-.383-3.288a15.52 15.52 0 0 0-.838-2.98 12.06 12.06 0 0 0-1.352-2.608 9.57 9.57 0 0 0-1.854-2.127 7.72 7.72 0 0 0-2.318-1.502 6.75 6.75 0 0 0-2.735-.713 6.73 6.73 0 0 0-2.896.453c-.48.183-.94.418-1.377.702a8.02 8.02 0 0 0-1.225.957 9.43 9.43 0 0 0-1.06 1.166 11.45 11.45 0 0 0-.884 1.328c-.26.455-.49.926-.688 1.41a14.32 14.32 0 0 0-.477 1.461c-.127.488-.224.979-.29 1.471-.066.492-.1.985-.102 1.477-.001.492.031.982.098 1.473.067.49.166.976.299 1.46.133.485.297.963.494 1.434.197.471.426.932.686 1.382.26.45.551.886.875 1.307.323.42.678.824 1.064 1.207.386.383.804.746 1.252 1.084.449.339.929.653 1.439.938a15.57 15.57 0 0 0 3.256 1.35c1.148.338 2.365.52 3.654.541 1.288.02 2.65-.121 4.09-.426 1.439-.305 2.956-.773 4.553-1.406a38.5 38.5 0 0 0 2.648-1.13c.887-.416 1.74-.867 2.553-1.35.814-.484 1.586-1 2.316-1.547a20.79 20.79 0 0 0 2.022-1.73"/>
      </svg>
    )
  },
  {
    name: 'Claude AI',
    category: 'ai',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
]

const testimonials = [
  {
    content: "Bluewave a transforme notre presence digitale. Leur expertise technique et leur approche strategique ont fait toute la difference.",
    author: "Marie Dupont",
    role: "CEO, TechStartup",
  },
  {
    content: "Une equipe reactive et professionnelle. Notre site e-commerce performe au-dela de nos attentes.",
    author: "Jean Martin",
    role: "Directeur Digital, E-Commerce Pro",
  },
  {
    content: "L'audit technique realise par Bluewave nous a permis d'identifier et corriger des problemes critiques.",
    author: "Sophie Bernard",
    role: "CTO, FinanceApp",
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={staggerItem} className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-success-500 mr-2 animate-pulse" />
                  Disponible pour nouveaux projets
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={staggerItem}
                className="heading-xl text-white mb-6"
              >
                Nous construisons des{' '}
                <span className="gradient-text">experiences digitales</span>{' '}
                exceptionnelles
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={staggerItem}
                className="text-xl text-dark-300 mb-10 max-w-2xl leading-relaxed"
              >
                Agence digitale specialisee en developpement web, SEO technique et solutions IA.
                Nous transformons vos ambitions en produits performants.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group btn-primary">
                  <span className="relative z-10">Demarrer un projet</span>
                  <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-secondary">
                  Decouvrir nos services
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - Terminal Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-dark-800/50 bg-dark-950/90 backdrop-blur-xl shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-800/50 bg-dark-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-dark-500 text-xs font-mono">bluewave ~ </span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-cyan-400">$</span>
                      <span className="text-dark-300"> npx create-next-app@latest</span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-success-400"
                    >
                      Success! Created my-project
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      <span className="text-cyan-400">$</span>
                      <span className="text-dark-300"> npm run dev</span>
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="text-dark-400 space-y-1"
                    >
                      <p>- Local: <span className="text-accent-400">http://localhost:3000</span></p>
                      <p>- Ready in <span className="text-success-400">2.1s</span></p>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-cyan-400">$</span>
                      <span className="text-dark-300">_</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-2 h-4 bg-accent-400 inline-block"
                      />
                    </motion.p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
              </div>

              {/* Tech stack badges floating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-4 top-1/4 px-3 py-2 bg-dark-900/90 border border-dark-700/50 rounded-lg text-xs font-medium text-dark-300 backdrop-blur-sm"
              >
                React + Next.js
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/2 px-3 py-2 bg-dark-900/90 border border-dark-700/50 rounded-lg text-xs font-medium text-dark-300 backdrop-blur-sm"
              >
                TypeScript
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -left-2 bottom-1/4 px-3 py-2 bg-dark-900/90 border border-dark-700/50 rounded-lg text-xs font-medium text-dark-300 backdrop-blur-sm"
              >
                Prestashop Expert
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 rounded-full bg-dark-400"
                animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Linear style with perspective images */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="badge mb-4">Nos expertises</span>
            <h2 className="heading-lg text-white mb-4">
              Des solutions pour chaque defi
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Une approche technique et strategique pour propulser votre presence digitale.
            </p>
          </motion.div>
        </div>

        {/* Full-width service blocks with perspective images */}
        <div className="space-y-32 lg:space-y-48">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? '' : ''}`}>
                  {/* Content - spans 5 columns */}
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'}`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-5 shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-dark-400 text-base mb-5 leading-relaxed">
                      {service.longDescription}
                    </p>

                    {/* Features list - minimal style */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-dark-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient}`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="group inline-flex items-center text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Decouvrir
                      <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Image with 3D perspective - spans 7 columns */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      className="relative group"
                      style={{ perspective: '1200px' }}
                    >
                      {/* Image container with perspective transform */}
                      <motion.div
                        className={`relative ${index % 2 === 0 ? 'lg:-mr-20 xl:-mr-32' : 'lg:-ml-20 xl:-ml-32'}`}
                        whileHover={{
                          rotateY: index % 2 === 0 ? -2 : 2,
                          rotateX: 2,
                          scale: 1.02
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: `rotateY(${index % 2 === 0 ? '-8deg' : '8deg'}) rotateX(4deg)`,
                        }}
                      >
                        {/* Main image */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-dark-900/50 border border-dark-800/30">
                          {/* Actual image or gradient placeholder */}
                          <div className="aspect-[16/10] relative overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                              className="object-cover"
                              quality={80}
                            />
                            {/* Gradient overlay for polish */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
                            {/* Subtle gradient accent */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
                          </div>
                        </div>

                        {/* Reflection effect */}
                        <div
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: `linear-gradient(105deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)`,
                            pointerEvents: 'none'
                          }}
                        />
                      </motion.div>

                      {/* Ambient glow behind image */}
                      <div
                        className={`absolute -inset-4 -z-10 rounded-3xl blur-3xl opacity-30 bg-gradient-to-br ${service.gradient} group-hover:opacity-40 transition-opacity duration-500`}
                        style={{
                          transform: `rotateY(${index % 2 === 0 ? '-8deg' : '8deg'}) rotateX(4deg)`,
                        }}
                      />

                      {/* Floating accent elements */}
                      <motion.div
                        className={`absolute w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-80 shadow-lg -z-10`}
                        style={{
                          top: index % 2 === 0 ? '-10%' : 'auto',
                          bottom: index % 2 === 0 ? 'auto' : '-8%',
                          right: index % 2 === 0 ? '5%' : 'auto',
                          left: index % 2 === 0 ? 'auto' : '5%',
                        }}
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 3, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding border-y border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-md text-white mb-4">
              Stack technique moderne
            </h2>
            <p className="text-dark-400">
              Les meilleures technologies pour des solutions performantes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex flex-col items-center gap-3 p-4 bg-dark-900/50 border border-dark-800/50 rounded-xl text-white hover:border-accent-500/30 hover:bg-dark-800/50 transition-all duration-200 group"
              >
                <div className="text-dark-300 group-hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-dark-400 group-hover:text-dark-200 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Development Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge mb-6">Innovation</span>
              <h2 className="heading-lg text-white mb-6">
                Developpement assiste par{' '}
                <span className="gradient-text">Intelligence Artificielle</span>
              </h2>
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                Nous exploitons la puissance de l'IA pour accelerer le developpement,
                ameliorer la qualite du code et resoudre des problemes complexes plus rapidement.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Generation de code optimise et revue automatique',
                  'Debugging intelligent et analyse de logs',
                  'Documentation et tests automatises',
                  'Refactoring et optimisation de performance',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-dark-300"
                  >
                    <svg className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact" className="group btn-primary">
                Decouvrir notre approche
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Code Visual - Linear style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-dark-800/50 bg-dark-950/80 backdrop-blur-xl shadow-2xl">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-800/50 bg-dark-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-dark-500 text-xs font-mono">ai-assistant.ts</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-1">
                    <p><span className="text-purple-400">import</span> <span className="text-cyan-300">{'{ Claude }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@anthropic/sdk'</span></p>
                    <p className="text-dark-600">{'// Analyse et optimise le code automatiquement'}</p>
                    <p className="mt-4"><span className="text-purple-400">async function</span> <span className="text-yellow-300">analyzeCode</span><span className="text-dark-300">(</span><span className="text-orange-300">code</span><span className="text-dark-500">: string</span><span className="text-dark-300">)</span> <span className="text-dark-300">{'{'}</span></p>
                    <p className="pl-4"><span className="text-purple-400">const</span> <span className="text-cyan-300">analysis</span> <span className="text-dark-300">=</span> <span className="text-purple-400">await</span> <span className="text-cyan-300">claude</span><span className="text-dark-300">.</span><span className="text-yellow-300">analyze</span><span className="text-dark-300">(</span><span className="text-dark-300">{'{'}</span></p>
                    <p className="pl-8"><span className="text-cyan-300">code</span><span className="text-dark-300">,</span></p>
                    <p className="pl-8"><span className="text-cyan-300">focus</span><span className="text-dark-300">:</span> <span className="text-dark-300">[</span><span className="text-green-400">'performance'</span><span className="text-dark-300">,</span> <span className="text-green-400">'security'</span><span className="text-dark-300">],</span></p>
                    <p className="pl-8"><span className="text-cyan-300">suggest</span><span className="text-dark-300">:</span> <span className="text-orange-300">true</span></p>
                    <p className="pl-4"><span className="text-dark-300">{'}'}</span><span className="text-dark-300">)</span></p>
                    <p className="pl-4 mt-2"><span className="text-purple-400">return</span> <span className="text-cyan-300">analysis</span><span className="text-dark-300">.</span><span className="text-cyan-300">suggestions</span></p>
                    <p><span className="text-dark-300">{'}'}</span></p>
                  </div>
                </div>

                {/* AI suggestion overlay */}
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="p-4 rounded-lg bg-accent-500/10 border border-accent-500/20 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-accent-400 text-xs font-medium mb-1">Suggestion IA</p>
                        <p className="text-dark-300 text-xs">Ajouter un cache pour optimiser les requetes repetees (+40% perf)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge mb-4">Temoignages</span>
            <h2 className="heading-lg text-white mb-4">
              Ils nous font confiance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 card"
              >
                <svg className="w-8 h-8 text-accent-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-dark-300 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-dark-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-600 via-accent-500 to-cyan-500" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="heading-lg text-white mb-6">
                Pret a lancer votre projet ?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Discutons de vos ambitions et voyons comment nous pouvons vous accompagner
                dans votre transformation digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-accent-600 font-semibold rounded-xl hover:bg-dark-100 transition-all duration-150 shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  Planifier un appel
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-150 active:scale-[0.98]"
                >
                  Voir nos services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
