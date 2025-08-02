
import { useEffect } from "react"

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Linkedin%20Profile%20pic%20-jKIlXHyQSz4tvR9kaJG7fy9swMtC0F.png",
      ]

      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize scroll performance
    let scrollTimeout
    const optimizeScroll = () => {
      document.body.style.pointerEvents = "none"
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        document.body.style.pointerEvents = "auto"
      }, 50)
    }

    // Debounced resize handler
    let resizeTimeout
    const optimizeResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        // Trigger reflow optimizations
        window.dispatchEvent(new Event("optimizedResize"))
      }, 100)
    }

    // Initialize optimizations
    preloadCriticalResources()

    // Add event listeners
    window.addEventListener("scroll", optimizeScroll, { passive: true })
    window.addEventListener("resize", optimizeResize, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener("scroll", optimizeScroll)
      window.removeEventListener("resize", optimizeResize)
      clearTimeout(scrollTimeout)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return null
}
