'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Animated Visual Components
function BugsVisual() {
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-red-950/50 to-dark-900 rounded-2xl border border-dark-700 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />

      <div className="relative p-6 h-full flex flex-col">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-dark-500 text-xs font-mono">error-logs.tsx</span>
        </div>

        {/* Error logs */}
        <div className="flex-1 font-mono text-xs space-y-3 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-3 bg-red-950/50 border border-red-500/30 rounded-lg"
          >
            <div className="flex items-center gap-2 text-red-400 mb-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>TypeError: Cannot read property 'map' of undefined</span>
            </div>
            <div className="text-dark-500 pl-6">at ProductList.tsx:42</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-3 bg-yellow-950/50 border border-yellow-500/30 rounded-lg"
          >
            <div className="flex items-center gap-2 text-yellow-400 mb-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Warning: Memory leak detected</span>
            </div>
            <div className="text-dark-500 pl-6">useEffect cleanup missing in Dashboard.tsx</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-3 bg-red-950/50 border border-red-500/30 rounded-lg"
          >
            <div className="flex items-center gap-2 text-red-400 mb-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Uncaught ReferenceError: data is not defined</span>
            </div>
            <div className="text-dark-500 pl-6">at CartContext.tsx:28</div>
          </motion.div>

          {/* Arrow animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center py-4"
          >
            <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>

          {/* Fixed code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="p-3 bg-green-950/50 border border-green-500/30 rounded-lg"
          >
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>All errors resolved</span>
            </div>
            <div className="text-green-300/70 text-xs">
              <div>+ Added null check: products?.map()</div>
              <div>+ Added useEffect cleanup</div>
              <div>+ Fixed variable scope</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function PerformanceVisual() {
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-orange-950/50 to-dark-900 rounded-2xl border border-dark-700 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative p-6 h-full flex flex-col">
        {/* Lighthouse header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold">Lighthouse Audit</div>
            <div className="text-dark-400 text-xs">Performance Report</div>
          </div>
        </div>

        {/* Score circles */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Performance', before: 45, after: 98, color: 'green' },
            { label: 'Accessibility', before: 72, after: 100, color: 'green' },
            { label: 'Best Practices', before: 67, after: 95, color: 'green' },
            { label: 'SEO', before: 58, after: 100, color: 'green' },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="relative w-16 h-16 mx-auto mb-2">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <motion.circle
                    cx="32" cy="32" r="28" fill="none"
                    stroke="#22c55e"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={175.9}
                    initial={{ strokeDashoffset: 175.9 }}
                    whileInView={{ strokeDashoffset: 175.9 - (175.9 * metric.after / 100) }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  />
                </svg>
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  {metric.after}
                </motion.span>
              </div>
              <div className="text-dark-400 text-xs">{metric.label}</div>
              <div className="text-green-400 text-xs">+{metric.after - metric.before}</div>
            </motion.div>
          ))}
        </div>

        {/* Core Web Vitals */}
        <div className="flex-1 space-y-4">
          <div className="text-sm text-dark-300 font-medium">Core Web Vitals</div>
          {[
            { name: 'LCP', before: '4.2s', after: '1.2s', label: 'Largest Contentful Paint' },
            { name: 'FID', before: '280ms', after: '12ms', label: 'First Input Delay' },
            { name: 'CLS', before: '0.25', after: '0.02', label: 'Cumulative Layout Shift' },
            { name: 'TTFB', before: '1.8s', after: '0.3s', label: 'Time to First Byte' },
          ].map((vital, i) => (
            <motion.div
              key={vital.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-4 p-3 bg-dark-800/50 rounded-lg"
            >
              <div className="w-12 text-accent-400 font-mono text-sm font-bold">{vital.name}</div>
              <div className="flex-1">
                <div className="text-dark-500 text-xs mb-1">{vital.label}</div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-red-400 line-through">{vital.before}</span>
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-green-400 font-semibold">{vital.after}</span>
                </div>
              </div>
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RefactoringVisual() {
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-purple-950/50 to-dark-900 rounded-2xl border border-dark-700 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold">Code Refactoring</div>
            <div className="text-dark-400 text-xs">diff --git a/src/utils.ts</div>
          </div>
        </div>

        {/* Code diff */}
        <div className="flex-1 font-mono text-xs overflow-hidden">
          {/* Before section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <div className="text-red-400 mb-2 text-xs">// Before - Spaghetti code</div>
            <div className="bg-red-950/30 p-3 rounded-lg border border-red-500/20 space-y-1">
              <div className="text-red-300/70">- function getData(id, callback, opts) {'{'}</div>
              <div className="text-red-300/70">-   if (id) {'{'}</div>
              <div className="text-red-300/70">-     fetch('/api/' + id).then(r =&gt; {'{'}</div>
              <div className="text-red-300/70">-       if (opts && opts.format) {'{'}</div>
              <div className="text-red-300/70">-         callback(format(r));</div>
              <div className="text-red-300/70">-       {'}'} else callback(r);</div>
              <div className="text-red-300/70">-     {'}'}).catch(e =&gt; callback(null, e));</div>
              <div className="text-red-300/70">-   {'}'}</div>
              <div className="text-red-300/70">- {'}'}</div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center py-2"
          >
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>

          {/* After section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-green-400 mb-2 text-xs">// After - Clean, typed, async</div>
            <div className="bg-green-950/30 p-3 rounded-lg border border-green-500/20 space-y-1">
              <div className="text-green-300/70">+ interface Options {'{'}</div>
              <div className="text-green-300/70">+   format?: boolean;</div>
              <div className="text-green-300/70">+ {'}'}</div>
              <div className="text-green-300/70">+</div>
              <div className="text-green-300/70">+ async function getData&lt;T&gt;(</div>
              <div className="text-green-300/70">+   id: string,</div>
              <div className="text-green-300/70">+   options?: Options</div>
              <div className="text-green-300/70">+ ): Promise&lt;T&gt; {'{'}</div>
              <div className="text-green-300/70">+   const response = await fetch(`/api/${'{'} id {'}'}`);</div>
              <div className="text-green-300/70">+   const data = await response.json();</div>
              <div className="text-green-300/70">+   return options?.format ? format(data) : data;</div>
              <div className="text-green-300/70">+ {'}'}</div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 flex gap-4 text-xs"
          >
            <span className="text-green-400">+12 lines</span>
            <span className="text-red-400">-9 lines</span>
            <span className="text-purple-400">100% typed</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SEOVisual() {
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-blue-950/50 to-dark-900 rounded-2xl border border-dark-700 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold">SEO Technique</div>
            <div className="text-dark-400 text-xs">Technical Audit Report</div>
          </div>
        </div>

        {/* SEO Checklist */}
        <div className="flex-1 space-y-3">
          {[
            { item: 'Meta titles optimises', status: 'fixed', detail: '45/45 pages' },
            { item: 'Meta descriptions', status: 'fixed', detail: '45/45 pages' },
            { item: 'Balises H1 uniques', status: 'fixed', detail: 'Structure corrigee' },
            { item: 'Images alt text', status: 'fixed', detail: '128/128 images' },
            { item: 'Schema.org markup', status: 'fixed', detail: 'Product, FAQ, Breadcrumb' },
            { item: 'Canonical URLs', status: 'fixed', detail: 'Doublons elimines' },
            { item: 'Sitemap XML', status: 'fixed', detail: 'Auto-genere' },
            { item: 'Robots.txt', status: 'fixed', detail: 'Optimise' },
          ].map((check, i) => (
            <motion.div
              key={check.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex items-center gap-3 p-2 bg-dark-800/30 rounded-lg"
            >
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">{check.item}</div>
                <div className="text-dark-500 text-xs">{check.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SERP Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 p-4 bg-white/5 rounded-xl border border-dark-700"
        >
          <div className="text-xs text-dark-500 mb-2">SERP Preview</div>
          <div className="text-blue-400 text-sm font-medium hover:underline cursor-pointer">
            Votre Site | Expert E-commerce
          </div>
          <div className="text-green-400 text-xs mb-1">https://votresite.fr</div>
          <div className="text-dark-400 text-xs line-clamp-2">
            Description optimisee avec mots-cles strategiques pour maximiser le CTR...
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MigrationVisual() {
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-emerald-950/50 to-dark-900 rounded-2xl border border-dark-700 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold">Migration & Updates</div>
            <div className="text-dark-400 text-xs">Version Upgrades</div>
          </div>
        </div>

        {/* Migration paths */}
        <div className="flex-1 space-y-4">
          {[
            { from: 'React 17', to: 'React 18', status: 'done', features: ['Concurrent Mode', 'Automatic Batching', 'Suspense SSR'] },
            { from: 'Next.js 12', to: 'Next.js 14', status: 'done', features: ['App Router', 'Server Components', 'Turbopack'] },
            { from: 'Node 16', to: 'Node 20', status: 'done', features: ['Native Fetch', 'Test Runner', 'ESM Support'] },
            { from: 'TypeScript 4', to: 'TypeScript 5', status: 'done', features: ['Decorators', 'const Type Params', 'Satisfies'] },
          ].map((migration, i) => (
            <motion.div
              key={migration.from}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="p-4 bg-dark-800/50 rounded-xl border border-dark-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-dark-500 text-sm font-mono">{migration.from}</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded"
                />
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="text-emerald-400 text-sm font-mono font-semibold">{migration.to}</span>
                <div className="ml-auto w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {migration.features.map((feature) => (
                  <span key={feature} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-md">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ReviewVisual() {
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-amber-950/50 to-dark-900 rounded-2xl border border-dark-700 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />

      <div className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold">Code Review</div>
            <div className="text-dark-400 text-xs">PR #142 - Feature/checkout</div>
          </div>
        </div>

        {/* PR Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mb-4 text-xs"
        >
          <span className="text-green-400">+342 additions</span>
          <span className="text-red-400">-89 deletions</span>
          <span className="text-dark-400">12 files</span>
        </motion.div>

        {/* Review comments */}
        <div className="flex-1 space-y-3 overflow-hidden">
          {[
            { type: 'suggestion', file: 'checkout.ts:42', comment: 'Consider using optional chaining here to prevent null reference errors.', code: 'user?.address?.city' },
            { type: 'issue', file: 'payment.ts:78', comment: 'This function lacks error handling. API calls should be wrapped in try/catch.', code: null },
            { type: 'approval', file: 'cart.ts:15', comment: 'Clean implementation of the cart reducer. Well structured!', code: null },
            { type: 'suggestion', file: 'api.ts:23', comment: 'Add request timeout to prevent hanging requests.', code: 'timeout: 5000' },
            { type: 'issue', file: 'auth.ts:56', comment: 'Token should be stored in httpOnly cookie, not localStorage.', code: null },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`p-3 rounded-lg border ${
                review.type === 'approval'
                  ? 'bg-green-950/30 border-green-500/30'
                  : review.type === 'issue'
                    ? 'bg-red-950/30 border-red-500/30'
                    : 'bg-amber-950/30 border-amber-500/30'
              }`}
            >
              <div className="flex items-start gap-2">
                {review.type === 'approval' && (
                  <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {review.type === 'issue' && (
                  <svg className="w-4 h-4 text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                {review.type === 'suggestion' && (
                  <svg className="w-4 h-4 text-amber-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                )}
                <div className="flex-1">
                  <div className="text-dark-500 text-xs font-mono mb-1">{review.file}</div>
                  <div className="text-white text-xs">{review.comment}</div>
                  {review.code && (
                    <div className="mt-2 p-2 bg-dark-900/50 rounded text-amber-300 text-xs font-mono">
                      {review.code}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 flex items-center justify-between p-3 bg-green-950/30 rounded-lg border border-green-500/30"
        >
          <span className="text-green-400 text-sm font-medium">Review Complete</span>
          <span className="text-dark-400 text-xs">5 comments addressed</span>
        </motion.div>
      </div>
    </div>
  )
}

const services = [
  {
    title: 'Resolution de bugs',
    description: 'Identification et correction rapide des bugs critiques qui impactent vos utilisateurs.',
    visual: <BugsVisual />,
  },
  {
    title: 'Optimisation des performances',
    description: 'Analyse et amelioration des temps de chargement, Core Web Vitals et experience utilisateur.',
    visual: <PerformanceVisual />,
  },
  {
    title: 'Refactoring de code',
    description: 'Restructuration et modernisation de votre codebase pour une meilleure maintenabilite.',
    visual: <RefactoringVisual />,
  },
  {
    title: 'Optimisation SEO technique',
    description: 'Amelioration du SEO technique : vitesse, structure, indexation et donnees structurees.',
    visual: <SEOVisual />,
  },
  {
    title: 'Migration & Mise a jour',
    description: 'Migration vers les dernieres versions de frameworks et resolution des breaking changes.',
    visual: <MigrationVisual />,
  },
  {
    title: 'Code review',
    description: 'Revue de code approfondie avec recommandations d\'amelioration et bonnes pratiques.',
    visual: <ReviewVisual />,
  },
]

const process = [
  {
    step: '01',
    title: 'Diagnostic',
    description: 'Analyse approfondie de votre application pour identifier les problemes et leur origine.',
  },
  {
    step: '02',
    title: 'Proposition',
    description: 'Rapport detaille avec solutions proposees, priorites et estimation du temps necessaire.',
  },
  {
    step: '03',
    title: 'Intervention',
    description: 'Correction des problemes avec tests rigoureux et documentation des changements.',
  },
  {
    step: '04',
    title: 'Suivi',
    description: 'Verification post-deploiement et accompagnement pour prevenir les regressions.',
  },
]

export default function DebuggingPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link href="/services" className="inline-flex items-center text-dark-400 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tous les services
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Debugging &{' '}
              <span className="gradient-text">Optimisation</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Votre application a des bugs ? Des lenteurs ? Nous intervenons rapidement
              pour diagnostiquer et resoudre vos problemes techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un diagnostic
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services with Visuals */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-white mb-4">
              Nos interventions
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Des solutions concretes pour chaque type de probleme.
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-dark-400 text-lg leading-relaxed">{service.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  {service.visual}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-white mb-4">
              Notre processus
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Une approche methodique pour des resultats durables.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8"
              >
                <span className="text-accent-400 text-sm font-mono mb-4 block">{item.step}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-12 text-center"
          >
            <h2 className="heading-md text-white mb-4">
              Un bug vous bloque ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              N'attendez pas que le probleme s'aggrave. Contactez-nous pour un diagnostic rapide.
            </p>
            <Link href="/contact" className="group btn-primary">
              Obtenir de l'aide
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
