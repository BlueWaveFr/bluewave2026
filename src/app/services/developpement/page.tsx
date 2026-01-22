'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    title: 'Applications React & Next.js',
    description: 'Interfaces modernes et performantes avec les frameworks JavaScript les plus populaires. SSR, SSG et ISR pour des performances optimales.',
    visual: 'react',
    link: '/services/developpement/react',
    linkText: 'En savoir plus',
  },
  {
    title: 'E-commerce Prestashop',
    description: 'Expert Prestashop certifie. Boutiques en ligne performantes, modules sur mesure et integrations paiement securisees.',
    visual: 'prestashop',
    link: '/services/prestashop',
    linkText: 'Notre expertise PrestaShop',
  },
  {
    title: 'SaaS & Plateformes',
    description: 'Applications multi-utilisateurs avec authentification, abonnements Stripe et tableaux de bord temps reel.',
    visual: 'saas',
    link: '/services/developpement/saas',
    linkText: 'En savoir plus',
  },
  {
    title: 'API & Integrations',
    description: 'Developpement d\'APIs RESTful et GraphQL, integrations tierces (CRM, ERP, paiement) et automatisations.',
    visual: 'api',
    link: '/services/developpement/api',
    linkText: 'En savoir plus',
  },
  {
    title: 'Progressive Web Apps',
    description: 'Applications web installables fonctionnant hors ligne avec notifications push et experience native.',
    visual: 'pwa',
    link: '/services/developpement/pwa',
    linkText: 'En savoir plus',
  },
  {
    title: 'Sites WordPress',
    description: 'Sites vitrines et blogs avec WordPress headless, themes sur mesure et optimisation SEO avancee.',
    visual: 'wordpress',
    link: '/services/developpement/wordpress',
    linkText: 'En savoir plus',
  },
]

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Prestashop', category: 'E-commerce' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Vercel', category: 'Hosting' },
  { name: 'AWS', category: 'Hosting' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
]

// Composant visuel animé pour React/Next.js
function ReactVisual() {
  return (
    <div className="relative w-full h-[500px] bg-dark-900/50 rounded-2xl border border-dark-800/50 overflow-hidden">
      {/* Code editor mockup */}
      <div className="absolute inset-0 p-6 font-mono text-sm">
        {/* Editor header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dark-800/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-dark-500 text-xs">page.tsx</span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <p><span className="text-dark-500">{'// Next.js 14 App Router'}</span></p>
          <p><span className="text-purple-400">import</span> <span className="text-dark-400">{'{'}</span> <span className="text-cyan-300">motion</span> <span className="text-dark-400">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'framer-motion'</span></p>
          <p className="mt-4"><span className="text-purple-400">export default</span> <span className="text-yellow-300">function</span> <span className="text-cyan-300">Page</span><span className="text-dark-400">()</span> <span className="text-dark-400">{'{'}</span></p>
          <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-dark-400">(</span></p>
          <motion.p
            className="pl-8"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-cyan-400">{'<'}</span><span className="text-green-400">main</span> <span className="text-purple-300">className</span><span className="text-dark-400">=</span><span className="text-orange-300">"container"</span><span className="text-cyan-400">{'>'}</span>
          </motion.p>
          <motion.p
            className="pl-12"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-cyan-400">{'<'}</span><span className="text-green-400">Hero</span> <span className="text-purple-300">title</span><span className="text-dark-400">=</span><span className="text-orange-300">"Bienvenue"</span> <span className="text-cyan-400">{'/>'}</span>
          </motion.p>
          <motion.p
            className="pl-12"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-cyan-400">{'<'}</span><span className="text-green-400">Features</span> <span className="text-purple-300">data</span><span className="text-dark-400">=</span><span className="text-dark-400">{'{'}</span><span className="text-cyan-300">features</span><span className="text-dark-400">{'}'}</span> <span className="text-cyan-400">{'/>'}</span>
          </motion.p>
          <motion.p
            className="pl-12"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-cyan-400">{'<'}</span><span className="text-green-400">motion.section</span>
          </motion.p>
          <motion.p
            className="pl-16"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-purple-300">initial</span><span className="text-dark-400">=</span><span className="text-dark-400">{'{'}</span><span className="text-dark-400">{'{'}</span> <span className="text-cyan-300">opacity</span><span className="text-dark-400">:</span> <span className="text-orange-300">0</span> <span className="text-dark-400">{'}'}</span><span className="text-dark-400">{'}'}</span>
          </motion.p>
          <motion.p
            className="pl-16"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-purple-300">animate</span><span className="text-dark-400">=</span><span className="text-dark-400">{'{'}</span><span className="text-dark-400">{'{'}</span> <span className="text-cyan-300">opacity</span><span className="text-dark-400">:</span> <span className="text-orange-300">1</span> <span className="text-dark-400">{'}'}</span><span className="text-dark-400">{'}'}</span>
          </motion.p>
          <motion.p
            className="pl-12"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <span className="text-cyan-400">{'>'}</span>
          </motion.p>
          <p className="pl-16"><span className="text-dark-500">{'// Contenu anime...'}</span></p>
          <p className="pl-12"><span className="text-cyan-400">{'</'}</span><span className="text-green-400">motion.section</span><span className="text-cyan-400">{'>'}</span></p>
          <p className="pl-8"><span className="text-cyan-400">{'</'}</span><span className="text-green-400">main</span><span className="text-cyan-400">{'>'}</span></p>
          <p className="pl-4"><span className="text-dark-400">)</span></p>
          <p><span className="text-dark-400">{'}'}</span></p>
        </motion.div>
      </div>
      {/* Floating React logo */}
      <motion.div
        className="absolute bottom-6 right-6 w-16 h-16 text-cyan-400 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
          <path fillRule="evenodd" d="M12 7.5c3.866 0 7.272.658 9.536 1.674C23.804 10.19 25 11.44 25 12.75s-1.196 2.56-3.464 3.576C19.272 17.342 15.866 18 12 18s-7.272-.658-9.536-1.674C.196 15.31-1 14.06-1 12.75s1.196-2.56 3.464-3.576C4.728 8.158 8.134 7.5 12 7.5Z"/>
        </svg>
      </motion.div>
      {/* Glow effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
    </div>
  )
}

// Composant visuel animé pour Prestashop
function PrestashopVisual() {
  return (
    <div className="relative w-full h-[500px] bg-dark-900/50 rounded-2xl border border-dark-800/50 overflow-hidden">
      {/* E-commerce dashboard mockup */}
      <div className="absolute inset-0 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">PS</span>
            </div>
            <div>
              <span className="text-white font-medium">Prestashop</span>
              <p className="text-dark-500 text-xs">Back Office</p>
            </div>
          </div>
          <motion.div
            className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            12 nouvelles commandes
          </motion.div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-dark-500 text-xs mb-1">Chiffre d'affaires</p>
            <p className="text-accent-400 font-bold text-2xl">24,580 EUR</p>
            <p className="text-green-400 text-xs mt-1">+12.5% vs hier</p>
          </motion.div>
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-dark-500 text-xs mb-1">Commandes</p>
            <p className="text-green-400 font-bold text-2xl">156</p>
            <p className="text-green-400 text-xs mt-1">+8 aujourd'hui</p>
          </motion.div>
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-dark-500 text-xs mb-1">Panier moyen</p>
            <p className="text-purple-400 font-bold text-2xl">157 EUR</p>
            <p className="text-purple-400 text-xs mt-1">+3.2% cette semaine</p>
          </motion.div>
        </div>

        {/* Recent orders */}
        <div className="mb-6">
          <p className="text-dark-400 text-sm mb-3">Dernieres commandes</p>
          <div className="space-y-2">
            {[
              { id: '#PS-4521', client: 'Marie D.', amount: '234 EUR', status: 'Expediee' },
              { id: '#PS-4520', client: 'Jean P.', amount: '89 EUR', status: 'En cours' },
              { id: '#PS-4519', client: 'Sophie L.', amount: '412 EUR', status: 'Payee' },
            ].map((order, i) => (
              <motion.div
                key={order.id}
                className="flex items-center justify-between p-3 bg-dark-800/30 rounded-lg"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-dark-500 text-xs font-mono">{order.id}</span>
                  <span className="text-white text-sm">{order.client}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent-400 text-sm font-medium">{order.amount}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    order.status === 'Expediee' ? 'bg-green-500/20 text-green-400' :
                    order.status === 'En cours' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>{order.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div>
          <p className="text-dark-400 text-sm mb-3">Ventes (7 derniers jours)</p>
          <div className="flex items-end gap-2 h-24">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 92, 78].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-pink-500/60 to-pink-400/40 rounded-t"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
    </div>
  )
}

// Composant visuel animé pour SaaS
function SaaSVisual() {
  return (
    <div className="relative w-full h-[500px] bg-dark-900/50 rounded-2xl border border-dark-800/50 overflow-hidden">
      {/* Dashboard mockup */}
      <div className="absolute inset-0 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-medium">Mon SaaS</span>
              <p className="text-dark-500 text-xs">Dashboard Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-dark-400 text-sm">3 utilisateurs en ligne</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Utilisateurs', value: '1,234', change: '+12%', color: 'accent' },
            { label: 'MRR', value: '8.5k EUR', change: '+8%', color: 'green' },
            { label: 'Churn', value: '2.1%', change: '-0.3%', color: 'purple' },
            { label: 'NPS', value: '72', change: '+5', color: 'cyan' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-3 bg-dark-800/50 rounded-xl border border-dark-700/30"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <p className="text-dark-500 text-xs">{stat.label}</p>
              <p className={`text-${stat.color}-400 font-bold text-lg`}>{stat.value}</p>
              <p className="text-green-400 text-xs">{stat.change}</p>
            </motion.div>
          ))}
        </div>

        {/* User list */}
        <div className="mb-6">
          <p className="text-dark-400 text-sm mb-3">Utilisateurs actifs</p>
          <div className="space-y-2">
            {[
              { name: 'Marie Dupont', role: 'Admin', email: 'marie@company.com', plan: 'Enterprise' },
              { name: 'Jean Martin', role: 'Manager', email: 'jean@startup.io', plan: 'Pro' },
              { name: 'Sophie Laurent', role: 'User', email: 'sophie@agency.fr', plan: 'Pro' },
              { name: 'Pierre Bernard', role: 'User', email: 'pierre@tech.com', plan: 'Starter' },
            ].map((user, i) => (
              <motion.div
                key={user.name}
                className="flex items-center gap-4 p-3 bg-dark-800/30 rounded-lg"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500/30 to-purple-500/30 border border-accent-500/30 flex items-center justify-center text-accent-400 font-bold">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{user.name}</p>
                  <p className="text-dark-500 text-xs">{user.email}</p>
                </div>
                <span className="text-dark-400 text-xs">{user.role}</span>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  user.plan === 'Enterprise' ? 'bg-accent-500/20 text-accent-400' :
                  user.plan === 'Pro' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-dark-700 text-dark-300'
                }`}>{user.plan}</span>
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activity graph placeholder */}
        <div className="flex items-center justify-between">
          <p className="text-dark-500 text-xs">Activite en temps reel</p>
          <div className="flex gap-1">
            {[30, 45, 25, 60, 40, 55, 35, 70, 45, 50].map((h, i) => (
              <motion.div
                key={i}
                className="w-2 bg-gradient-to-t from-purple-500/60 to-accent-500/40 rounded"
                initial={{ height: 0 }}
                whileInView={{ height: h }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05 }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
    </div>
  )
}

// Composant visuel animé pour API
function APIVisual() {
  return (
    <div className="relative w-full h-[500px] bg-dark-900/50 rounded-2xl border border-dark-800/50 overflow-hidden">
      <div className="absolute inset-0 p-6 font-mono text-sm">
        {/* API Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-medium font-sans">API REST</span>
              <p className="text-dark-500 text-xs font-sans">Documentation interactive</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-xs">v2.0</span>
        </div>

        {/* Endpoint list */}
        <div className="space-y-3 mb-6">
          {[
            { method: 'GET', path: '/api/products', status: '200 OK' },
            { method: 'POST', path: '/api/orders', status: '201 Created' },
            { method: 'PUT', path: '/api/users/:id', status: '200 OK' },
          ].map((endpoint, i) => (
            <motion.div
              key={endpoint.path}
              className="flex items-center gap-3 p-3 bg-dark-800/30 rounded-lg"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>{endpoint.method}</span>
              <span className="text-dark-300 flex-1">{endpoint.path}</span>
              <span className="text-dark-500 text-xs">{endpoint.status}</span>
            </motion.div>
          ))}
        </div>

        {/* Response example */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-bold">GET</span>
            <span className="text-dark-400">/api/products</span>
            <span className="text-dark-600 text-xs ml-auto">Response</span>
          </div>
          <motion.div
            className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-dark-500 mb-2">{'// 200 OK - 45ms'}</p>
            <p><span className="text-dark-400">{'{'}</span></p>
            <motion.p
              className="pl-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-cyan-400">"success"</span><span className="text-dark-400">:</span> <span className="text-orange-300">true</span><span className="text-dark-400">,</span>
            </motion.p>
            <motion.p
              className="pl-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
            >
              <span className="text-cyan-400">"data"</span><span className="text-dark-400">:</span> <span className="text-dark-400">[</span>
            </motion.p>
            <motion.p
              className="pl-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-dark-400">{'{'}</span>
            </motion.p>
            <motion.p
              className="pl-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
            >
              <span className="text-cyan-400">"id"</span><span className="text-dark-400">:</span> <span className="text-orange-300">1</span><span className="text-dark-400">,</span>
            </motion.p>
            <motion.p
              className="pl-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-cyan-400">"name"</span><span className="text-dark-400">:</span> <span className="text-green-400">"Premium Widget"</span><span className="text-dark-400">,</span>
            </motion.p>
            <motion.p
              className="pl-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
            >
              <span className="text-cyan-400">"price"</span><span className="text-dark-400">:</span> <span className="text-orange-300">49.99</span>
            </motion.p>
            <p className="pl-8"><span className="text-dark-400">{'}'}</span></p>
            <p className="pl-4"><span className="text-dark-400">],</span></p>
            <p className="pl-4"><span className="text-cyan-400">"meta"</span><span className="text-dark-400">:</span> <span className="text-dark-400">{'{'}</span> <span className="text-cyan-400">"total"</span><span className="text-dark-400">:</span> <span className="text-orange-300">156</span> <span className="text-dark-400">{'}'}</span></p>
            <p><span className="text-dark-400">{'}'}</span></p>
          </motion.div>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
    </div>
  )
}

// Composant visuel animé pour PWA
function PWAVisual() {
  return (
    <div className="relative w-full h-[500px] bg-dark-900/50 rounded-2xl border border-dark-800/50 overflow-hidden flex items-center justify-center">
      {/* Phone mockup - larger */}
      <motion.div
        className="relative w-56 h-[420px] bg-dark-800 rounded-[3rem] border-4 border-dark-700 overflow-hidden shadow-2xl"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Screen */}
        <div className="absolute inset-2 bg-dark-900 rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-dark-800 rounded-b-2xl" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 py-3 pt-8">
            <span className="text-dark-400 text-xs font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-dark-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C6.95 3 3 6.95 3 12s3.95 9 9 9c.9 0 1.78-.13 2.6-.39.18-.06.32-.16.4-.32.08-.16.08-.34 0-.5-.08-.16-.22-.28-.4-.34-.72-.18-1.4-.46-2.04-.82C9.76 17.7 8 15.04 8 12s1.76-5.7 4.56-7.03c.64-.36 1.32-.64 2.04-.82.18-.06.32-.18.4-.34.08-.16.08-.34 0-.5-.08-.16-.22-.26-.4-.32-.82-.26-1.7-.39-2.6-.39z"/>
              </svg>
              <svg className="w-4 h-4 text-dark-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 9v6h4l5 5V4L6 9H2zm7-3.17v12.34L5.83 15H4v-6h1.83L9 5.83zM16.5 12A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
              <div className="w-6 h-3 border border-dark-400 rounded-sm flex items-center justify-end p-0.5">
                <div className="w-4 h-2 bg-green-500 rounded-sm" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="p-6 pt-4">
            {/* App header */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-cyan-500 flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <div>
                <p className="text-white font-semibold">Mon App PWA</p>
                <p className="text-dark-500 text-xs">Application progressive</p>
              </div>
            </motion.div>

            {/* Feature cards */}
            <div className="space-y-3 mb-6">
              {[
                { icon: 'offline', label: 'Mode hors ligne', desc: 'Fonctionne sans internet' },
                { icon: 'notif', label: 'Notifications', desc: 'Alertes en temps reel' },
                { icon: 'install', label: 'Installable', desc: 'Comme une app native' },
              ].map((feature, i) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-xl"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{feature.label}</p>
                    <p className="text-dark-500 text-xs">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Install prompt */}
            <motion.div
              className="p-4 bg-gradient-to-r from-accent-500/20 to-cyan-500/20 border border-accent-500/30 rounded-2xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-white text-sm font-medium mb-2">Installer l'application</p>
              <p className="text-dark-400 text-xs mb-3">Ajoutez a votre ecran d'accueil</p>
              <div className="flex gap-2">
                <motion.button
                  className="flex-1 py-2 bg-accent-500 text-white text-xs font-medium rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Installer
                </motion.button>
                <button className="px-4 py-2 bg-dark-700 text-dark-300 text-xs rounded-lg">
                  Plus tard
                </button>
              </div>
            </motion.div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-dark-600 rounded-full" />
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        className="absolute top-6 right-6 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full flex items-center gap-2"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-green-400 text-xs font-medium">Offline Ready</span>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-6 px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span className="text-cyan-400 text-xs font-medium">Installable</span>
      </motion.div>

      {/* Glow effects */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
    </div>
  )
}

// Composant visuel animé pour WordPress
function WordPressVisual() {
  return (
    <div className="relative w-full h-[500px] bg-dark-900/50 rounded-2xl border border-dark-800/50 overflow-hidden">
      <div className="absolute inset-0 p-6">
        {/* WP Admin bar mockup */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-dark-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#21759b] flex items-center justify-center">
              <span className="text-white text-lg font-bold">W</span>
            </div>
            <div>
              <span className="text-white font-medium">WordPress Headless</span>
              <p className="text-dark-500 text-xs">CMS + Next.js Frontend</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-sm">WPGraphQL Active</span>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* WordPress side */}
          <div>
            <p className="text-dark-400 text-xs mb-3 uppercase tracking-wider">Back-end WordPress</p>
            <div className="space-y-3">
              {[
                { label: 'Articles', count: 42, icon: 'post' },
                { label: 'Pages', count: 12, icon: 'page' },
                { label: 'Medias', count: 156, icon: 'media' },
                { label: 'ACF Fields', count: 8, icon: 'acf' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center justify-between p-3 bg-dark-800/50 rounded-xl"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#21759b]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#21759b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-dark-300 text-sm">{item.label}</span>
                  </div>
                  <span className="text-accent-400 font-medium">{item.count}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next.js side */}
          <div>
            <p className="text-dark-400 text-xs mb-3 uppercase tracking-wider">Front-end Next.js</p>
            <div className="space-y-3">
              {[
                { label: 'Home', route: '/', status: 'ISR' },
                { label: 'Blog', route: '/blog', status: 'SSG' },
                { label: 'Contact', route: '/contact', status: 'Static' },
                { label: 'API', route: '/api/revalidate', status: 'Edge' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center justify-between p-3 bg-dark-800/50 rounded-xl"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 19.5h20L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-dark-300 text-sm">{item.label}</span>
                      <p className="text-dark-600 text-xs font-mono">{item.route}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    item.status === 'ISR' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'SSG' ? 'bg-blue-500/20 text-blue-400' :
                    item.status === 'Edge' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-dark-700 text-dark-300'
                  }`}>{item.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* GraphQL Query example */}
        <motion.div
          className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/30 font-mono text-xs"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-dark-500">GraphQL Query</span>
            <span className="text-green-400">23ms</span>
          </div>
          <p><span className="text-purple-400">query</span> <span className="text-yellow-300">GetPosts</span> <span className="text-dark-400">{'{'}</span></p>
          <p className="pl-4"><span className="text-cyan-400">posts</span><span className="text-dark-400">(</span><span className="text-orange-300">first: 10</span><span className="text-dark-400">) {'{'}</span></p>
          <p className="pl-8"><span className="text-cyan-400">nodes</span> <span className="text-dark-400">{'{'}</span> <span className="text-cyan-400">title</span><span className="text-dark-400">,</span> <span className="text-cyan-400">slug</span><span className="text-dark-400">,</span> <span className="text-cyan-400">excerpt</span> <span className="text-dark-400">{'}'}</span></p>
          <p className="pl-4"><span className="text-dark-400">{'}'}</span></p>
          <p><span className="text-dark-400">{'}'}</span></p>
        </motion.div>

        {/* Connection indicator */}
        <motion.div
          className="absolute bottom-6 right-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-dark-800/80 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-dark-400 text-xs">Synced</span>
          </div>
        </motion.div>
      </div>
      {/* Glow effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#21759b]/20 rounded-full blur-3xl" />
    </div>
  )
}

// Map des visuels
const visualComponents: Record<string, () => JSX.Element> = {
  react: ReactVisual,
  prestashop: PrestashopVisual,
  saas: SaaSVisual,
  api: APIVisual,
  pwa: PWAVisual,
  wordpress: WordPressVisual,
}

export default function DeveloppementPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center text-dark-400 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tous les services
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h1 className="heading-xl text-white mb-6">
                Developpement Web{' '}
                <span className="gradient-text">Sur Mesure</span>
              </h1>
              <p className="text-xl text-dark-300 leading-relaxed mb-8">
                Nous concevons et developpons des applications web performantes,
                evolutives et adaptees a vos besoins specifiques. De la startup au grand compte,
                nous accompagnons votre croissance digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Discuter de votre projet
                </Link>
                <Link href="/guides" className="btn-secondary">
                  Voir nos guides
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features with visuals */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-4">
              Ce que nous developpons
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Des solutions web modernes pour tous types de projets.
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => {
              const VisualComponent = visualComponents[feature.visual]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/20 border border-accent-500/30 text-accent-400 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-dark-400 text-lg leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-accent-400 hover:text-accent-300 font-medium group"
                      >
                        Discuter de votre projet
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      {'link' in feature && feature.link && (
                        <Link
                          href={feature.link}
                          className="inline-flex items-center px-4 py-2 bg-pink-500/20 border border-pink-500/30 text-pink-400 hover:bg-pink-500/30 font-medium rounded-lg transition-colors group"
                        >
                          {'linkText' in feature ? feature.linkText : 'En savoir plus'}
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <VisualComponent />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-white mb-4">
              Technologies utilisees
            </h2>
            <p className="text-dark-400">
              Les meilleurs outils pour des solutions performantes et maintenables.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`px-5 py-2.5 bg-dark-900/50 border border-dark-800/50 rounded-lg text-dark-300 text-sm font-medium hover:border-accent-500/30 hover:text-white transition-all duration-200 ${
                  tech.name === 'Prestashop' ? 'border-pink-500/30 text-pink-400' : ''
                }`}
              >
                {tech.name}
                {tech.name === 'Prestashop' && (
                  <span className="ml-2 text-[10px] text-pink-400 bg-pink-500/10 px-1.5 py-0.5 rounded">Expert</span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="card p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-white mb-4">
              Pret a lancer votre projet ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Discutons de vos besoins et voyons comment nous pouvons vous aider a atteindre vos objectifs.
            </p>
            <Link href="/contact" className="group btn-primary">
              Planifier un appel
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
