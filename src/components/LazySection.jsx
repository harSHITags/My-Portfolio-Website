import { useEffect, useRef, useState } from "react"

export default function LazySection({
  children,
  className = "",
  threshold = 0.05,
  rootMargin = "100px 0px",
  triggerOnce = true,
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true)
          if (triggerOnce) {
            setHasTriggered(true)
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return (
    <div ref={ref} className={`lazy-render ${className} ${isVisible ? "animate-instant-fade-up" : "opacity-0"}`}>
      {isVisible ? children : <div className="h-20" />}
    </div>
  )
}
