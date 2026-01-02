'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [items, setItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Parse headings from HTML content
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headings = doc.querySelectorAll('h2, h3')

    const tocItems: TOCItem[] = []
    headings.forEach((heading, index) => {
      const text = heading.textContent?.trim() || ''
      if (text) {
        const id = heading.id || `heading-${index}`
        tocItems.push({
          id,
          text,
          level: heading.tagName === 'H2' ? 2 : 3
        })
      }
    })

    setItems(tocItems)
  }, [content])

  useEffect(() => {
    // Add IDs to actual headings in the DOM and track scroll
    const headings = document.querySelectorAll('.prose-dark h2, .prose-dark h3')

    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [items])

  if (items.length < 2) {
    return null
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className="card p-6 sticky top-24">
      <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
        Sommaire
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? 'ml-4' : ''}
          >
            <button
              onClick={() => scrollToHeading(item.id)}
              className={`text-left text-sm leading-relaxed transition-colors hover:text-accent-400 ${
                activeId === item.id
                  ? 'text-accent-400 font-medium'
                  : 'text-dark-400'
              }`}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
