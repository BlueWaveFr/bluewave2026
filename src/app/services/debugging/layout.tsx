import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Debugging & Optimisation',
  description: 'Service de debugging et optimisation de vos applications web. Resolution de bugs critiques, amelioration des performances et refactoring de code.',
  alternates: {
    canonical: 'https://bluewave.fr/services/debugging',
  },
}

export default function DebuggingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
