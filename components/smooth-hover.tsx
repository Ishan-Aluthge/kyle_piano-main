"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SmoothHoverProps {
  children: ReactNode
  className?: string
  scale?: number
  lift?: boolean
}

/**
 * Wrapper component for adding smooth hover animations
 */
export function SmoothHover({ children, className = "", scale = 1.05, lift = false }: SmoothHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        y: lift ? -5 : 0,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
