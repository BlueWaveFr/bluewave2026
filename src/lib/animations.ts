import { Variants } from 'framer-motion'

// Animation timing - Linear.app style (snappy, quick)
export const timing = {
  fast: 0.15,
  normal: 0.2,
  slow: 0.3,
}

// Easing curves - Linear.app uses quick, snappy easings
export const easing = {
  smooth: [0.25, 0.1, 0.25, 1],
  snappy: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
}

// Fade in from bottom - most common animation
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timing.normal,
      ease: easing.snappy,
    }
  },
}

// Fade in without movement
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: timing.normal,
      ease: easing.smooth,
    }
  },
}

// Scale in - for cards and interactive elements
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: timing.fast,
      ease: easing.snappy,
    }
  },
}

// Stagger container - for lists of items
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// Stagger item - used inside stagger container
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timing.normal,
      ease: easing.snappy,
    }
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -24
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: timing.normal,
      ease: easing.snappy,
    }
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 24
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: timing.normal,
      ease: easing.snappy,
    }
  },
}

// Viewport settings for whileInView
export const viewportOnce = { once: true, margin: '-50px' }

// Common transition for inline use
export const quickTransition = {
  duration: timing.fast,
  ease: easing.snappy,
}

export const normalTransition = {
  duration: timing.normal,
  ease: easing.snappy,
}
