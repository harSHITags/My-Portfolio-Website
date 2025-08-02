
import { useEffect, useCallback } from "react"

export default function UltraSmoothScroll() {
  const smoothScrollTo = useCallback((target, duration = 800) => {
    const targetElement = typeof target === "string" ? document.querySelector(target) : target
    if (!targetElement) return

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * ease)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"], button[data-scroll-to]')
      if (!target) return

      e.preventDefault()
      const href = target.getAttribute("href") || target.getAttribute("data-scroll-to")
      if (href && href.startsWith("#")) {
        smoothScrollTo(href, 600) // Faster scroll duration
      }
    }

    // Enhanced scroll performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Optimize scroll performance
          ticking = false
        })
        ticking = true
      }
    }

    // Add event listeners
    document.addEventListener("click", handleSmoothScroll)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.removeEventListener("click", handleSmoothScroll)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [smoothScrollTo])

  return null
}

