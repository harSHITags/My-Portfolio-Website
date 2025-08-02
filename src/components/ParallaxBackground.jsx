import { useEffect, useState } from "react"

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 opacity-60"
          style={{
            transform: `translateY(${scrollY * (0.2 + i * 0.1)}px)`,
          }}
        >
          <div
            className="absolute -top-1/4 -left-1/4 w-[140%] h-[140%] rounded-full blur-3xl"
            style={{
              background: `linear-gradient(45deg, 
                rgba(14, 165, 233, ${0.03 + i * 0.01}) 0%, 
                rgba(59, 130, 246, ${0.02 + i * 0.01}) 25%, 
                rgba(147, 51, 234, ${0.03 + i * 0.01}) 50%, 
                rgba(236, 72, 153, ${0.02 + i * 0.01}) 75%, 
                rgba(14, 165, 233, ${0.03 + i * 0.01}) 100%)`,
              backgroundSize: "400% 400%",
              animation: `gradientShift ${15 + i * 5}s ease infinite`,
              animationDelay: `${-i * 7}s`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default ParallaxBackground
