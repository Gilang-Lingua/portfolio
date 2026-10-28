import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Patch GSAP ScrollTrigger to work with Lenis smooth scroll.
 * Must be called once after Lenis instance is created.
 */
export function syncGsapWithLenis(lenisInstance: { on: (event: string, cb: (e: { scroll: number; velocity: number }) => void) => void }) {
  lenisInstance.on('scroll', ({ scroll, velocity }: { scroll: number; velocity: number }) => {
    ScrollTrigger.update()
    // Feed Lenis scroll position to GSAP ScrollTrigger
    // so pin spacers and trigger positions are accurate
    void velocity
    void scroll
  })
}

/**
 * Generic hook: fade + slide up on scroll-enter, with optional stagger for children.
 * Returns a ref to attach to the container element.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(options?: {
  y?: number
  duration?: number
  stagger?: number
  delay?: number
  childSelector?: string
  refreshKey?: string | number
}) {
  const ref = useRef<T>(null)
  const {
    y = 40,
    duration = 0.8,
    stagger = 0.1,
    delay = 0,
    childSelector,
    refreshKey,
  } = options ?? {}

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = gsap.utils.toArray<HTMLElement>(
      childSelector ? el.querySelectorAll<HTMLElement>(childSelector) : el
    )
    if (!targets.length) return

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y })

      ScrollTrigger.batch(targets, {
        start: 'top 88%',
        end: 'bottom 12%',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
            overwrite: 'auto',
          })
        },
        onEnterBack: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
            overwrite: 'auto',
          })
        },
        onLeave: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: -y,
            duration: Math.min(duration, 0.35),
            ease: 'power2.in',
            overwrite: 'auto',
          })
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y,
            duration: Math.min(duration, 0.35),
            ease: 'power2.in',
            overwrite: 'auto',
          })
        },
      })
    }, el)

    return () => ctx.revert()
  }, [childSelector, delay, duration, refreshKey, stagger, y])

  return ref as React.RefObject<T>
}

export function useScrollParallax<T extends HTMLElement = HTMLElement>(distance = 28) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [distance])

  return ref as React.RefObject<T>
}

export function useScrollLinked<T extends HTMLElement = HTMLElement>(y = -10, scale = 0.985) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0, scale: 1 },
        {
          y,
          scale,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') ?? el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [scale, y])

  return ref as React.RefObject<T>
}

/**
 * Hero section: staggered entry for heading words, subtitle, and action buttons.
 * Call with the hero section root ref.
 */
export function useHeroAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Badge pill
      tl.fromTo(
        '[data-anim="badge"]',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6 },
        0
      )

      // H1 heading — stagger per child span/word if wrapped
      tl.fromTo(
        '[data-anim="heading"]',
        { opacity: 0, y: 32, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.85 },
        0.2
      )

      // Subtitle paragraph
      tl.fromTo(
        '[data-anim="subtitle"]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.45
      )

      // Description text
      tl.fromTo(
        '[data-anim="description"]',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.6
      )

      // Action buttons stagger
      tl.fromTo(
        '[data-anim="button"]',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        0.72
      )

      // Profile card slides in from right
      tl.fromTo(
        '[data-anim="profile-card"]',
        { opacity: 0, x: 40, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power4.out' },
        0.3
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return ref as React.RefObject<HTMLElement>
}
