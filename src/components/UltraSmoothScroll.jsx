
import { useEffect, useCallback, useRef } from "react";

export default function UltraSmoothScroll() {
  const animationRef = useRef(null);
  const lastScrollTarget = useRef(null);

  const smoothScrollTo = useCallback((target, duration = 800, callback) => {
    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const targetElement = typeof target === "string" ? document.querySelector(target) : target;
    if (!targetElement) return;

    // Store the current scroll target
    lastScrollTarget.current = targetElement;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    
    // If distance is very small, scroll immediately
    if (Math.abs(distance) < 5) {
      window.scrollTo(0, targetPosition);
      if (callback) callback();
      return;
    }

    let startTime = null;

    // Optimized easing function
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        animationRef.current = requestAnimationFrame(animation);
      } else {
        // Ensure we land exactly at the target position
        window.scrollTo(0, targetPosition);
        if (callback) callback();
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animation);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"], button[data-scroll-to]');
      if (!target) return;

      e.preventDefault();
      const href = target.getAttribute("href") || target.getAttribute("data-scroll-to");
      
      if (href && href.startsWith("#")) {
        // Add a small delay to allow for any state updates
        setTimeout(() => {
          smoothScrollTo(href, 600);
        }, 10);
      }
    };

    // Enhanced scroll performance with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Check if we've scrolled past the last target
          if (lastScrollTarget.current) {
            const targetRect = lastScrollTarget.current.getBoundingClientRect();
            // If target is no longer in view, reset
            if (targetRect.bottom < 0 || targetRect.top > window.innerHeight) {
              lastScrollTarget.current = null;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add event listeners
    document.addEventListener("click", handleSmoothScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
      
      // Clean up any ongoing animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [smoothScrollTo]);

  return null;
}