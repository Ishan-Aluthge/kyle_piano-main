"use client"

import { useEffect } from "react"

/**
 * Global scroll reveal hook for animating elements as they come into view
 * Usage: Add classes like 'reveal', 'reveal-left', 'reveal-right', 'reveal-zoom' to elements
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-zoom, .scroll-animate"
    )
    
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/**
 * Component wrapper for scroll reveal functionality
 */
export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal()
  return <>{children}</>
}
