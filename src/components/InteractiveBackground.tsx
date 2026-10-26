import { useEffect, useRef } from 'react'

interface TrailPoint {
  x: number
  y: number
  alpha: number
  radius: number
}

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const revealGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Respect accessibility preference for reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    const revealEl = revealGridRef.current
    if (!revealEl) return

    let mouseX = -1000
    let mouseY = -1000
    let headX = -1000
    let headY = -1000
    let lastDropX = -1000
    let lastDropY = -1000

    let currentOpacity = 0
    let targetOpacity = 0
    let rafId: number
    let idleTimeout: ReturnType<typeof setTimeout> | null = null

    // Trail storage for fluid droplets
    const trail: TrailPoint[] = []
    const MAX_TRAIL_POINTS = 7

    const handlePointerMove = (e: PointerEvent) => {
      // Ignore touch gestures so mobile behavior remains clean
      if (e.pointerType === 'touch') return

      mouseX = e.clientX
      mouseY = e.clientY
      targetOpacity = 1

      // If initial move, place head immediately
      if (headX < -500) {
        headX = mouseX
        headY = mouseY
        lastDropX = mouseX
        lastDropY = mouseY
      }

      // Reset idle timer: fade back to dark after 2.5s without movement
      if (idleTimeout) clearTimeout(idleTimeout)
      idleTimeout = setTimeout(() => {
        targetOpacity = 0
      }, 2500)
    }

    const handlePointerLeave = () => {
      targetOpacity = 0
    }

    const handlePointerEnter = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      targetOpacity = 1
    }

    const render = (timestamp: number) => {
      // Time variable for undulating liquid harmonics
      const t = timestamp * 0.002

      // 1. Smoothly interpolate head position towards mouse
      headX += (mouseX - headX) * 0.18
      headY += (mouseY - headY) * 0.18

      // 2. Smoothly fade opacity in and out
      currentOpacity += (targetOpacity - currentOpacity) * 0.06

      // 3. Drop trailing fluid points when cursor moves sufficient distance
      const dist = Math.hypot(headX - lastDropX, headY - lastDropY)
      if (dist > 20 && targetOpacity > 0.3) {
        trail.push({
          x: headX,
          y: headY,
          alpha: 0.8,
          radius: 280,
        })
        if (trail.length > MAX_TRAIL_POINTS) {
          trail.shift()
        }
        lastDropX = headX
        lastDropY = headY
      }

      // 4. Decay and prune trail droplets
      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].alpha *= 0.87
        if (trail[i].alpha < 0.02) {
          trail.splice(i, 1)
        }
      }

      // 5. Build dynamic liquid mask with undulating organic harmonics (pure reveal, no glow)
      if (currentOpacity > 0.01 && headX > -500) {
        // Multi-node harmonic calculation for fluid/liquid amoeba boundary:
        // Core breathing center
        const r0 = 300 + Math.sin(t * 1.8) * 35
        const x0 = headX + Math.cos(t * 1.3) * 35
        const y0 = headY + Math.sin(t * 1.6) * 35

        // Organic orbital bulges deforming the perimeter
        const r1 = 260 + Math.cos(t * 2.1 + 1.2) * 35
        const x1 = headX + Math.cos(t * 1.1 + 0.7) * 90
        const y1 = headY + Math.sin(t * 1.4 + 0.4) * 80

        const r2 = 270 + Math.sin(t * 1.7 + 2.5) * 40
        const x2 = headX + Math.cos(t * 0.9 + 3.1) * 95
        const y2 = headY + Math.sin(t * 1.2 + 2.6) * 85

        const r3 = 240 + Math.cos(t * 2.3 + 4.0) * 30
        const x3 = headX + Math.cos(t * 1.6 + 4.8) * 85
        const y3 = headY + Math.sin(t * 1.5 + 4.1) * 90

        const r4 = 250 + Math.sin(t * 1.9 + 5.2) * 35
        const x4 = headX + Math.cos(t * 1.2 + 2.2) * 85
        const y4 = headY + Math.sin(t * 1.7 + 1.8) * 80

        const maskGradients: string[] = [
          // Primary liquid nucleus
          `radial-gradient(${r0.toFixed(0)}px circle at ${x0.toFixed(1)}px ${y0.toFixed(1)}px, rgba(0,0,0,${currentOpacity.toFixed(3)}) 0%, rgba(0,0,0,${(0.45 * currentOpacity).toFixed(3)}) 50%, transparent 100%)`,
          // Morphing liquid bulges
          `radial-gradient(${r1.toFixed(0)}px circle at ${x1.toFixed(1)}px ${y1.toFixed(1)}px, rgba(0,0,0,${(0.85 * currentOpacity).toFixed(3)}) 0%, rgba(0,0,0,${(0.35 * currentOpacity).toFixed(3)}) 50%, transparent 100%)`,
          `radial-gradient(${r2.toFixed(0)}px circle at ${x2.toFixed(1)}px ${y2.toFixed(1)}px, rgba(0,0,0,${(0.85 * currentOpacity).toFixed(3)}) 0%, rgba(0,0,0,${(0.35 * currentOpacity).toFixed(3)}) 50%, transparent 100%)`,
          `radial-gradient(${r3.toFixed(0)}px circle at ${x3.toFixed(1)}px ${y3.toFixed(1)}px, rgba(0,0,0,${(0.75 * currentOpacity).toFixed(3)}) 0%, rgba(0,0,0,${(0.3 * currentOpacity).toFixed(3)}) 50%, transparent 100%)`,
          `radial-gradient(${r4.toFixed(0)}px circle at ${x4.toFixed(1)}px ${y4.toFixed(1)}px, rgba(0,0,0,${(0.75 * currentOpacity).toFixed(3)}) 0%, rgba(0,0,0,${(0.3 * currentOpacity).toFixed(3)}) 50%, transparent 100%)`,
        ]

        // Trailing fluid droplets with organic oscillation
        for (let i = 0; i < trail.length; i++) {
          const pt = trail[i]
          const effectiveAlpha = pt.alpha * currentOpacity
          if (effectiveAlpha > 0.02) {
            const trX = pt.x + Math.sin(t * 2.2 + i * 1.4) * 15
            const trY = pt.y + Math.cos(t * 1.9 + i * 1.4) * 15
            const trR = pt.radius * (0.85 + Math.sin(t * 2.5 + i) * 0.15)
            maskGradients.push(
              `radial-gradient(${trR.toFixed(0)}px circle at ${trX.toFixed(1)}px ${trY.toFixed(1)}px, rgba(0,0,0,${(effectiveAlpha * 0.65).toFixed(3)}) 0%, transparent 100%)`
            )
          }
        }

        const maskString = maskGradients.join(', ')
        revealEl.style.webkitMaskImage = maskString
        revealEl.style.maskImage = maskString
        revealEl.style.opacity = '1'
      } else {
        revealEl.style.opacity = '0'
      }

      rafId = requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('mouseleave', handlePointerLeave)
    document.addEventListener('mouseenter', handlePointerEnter)

    rafId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('mouseleave', handlePointerLeave)
      document.removeEventListener('mouseenter', handlePointerEnter)
      if (idleTimeout) clearTimeout(idleTimeout)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full"
    >
      {/* Pure liquid reveal grid: undulating organic fluid mask, no colored lamp glow */}
      <div
        ref={revealGridRef}
        className="absolute inset-0 bg-grid-reveal pointer-events-none opacity-0 transition-opacity duration-300"
      />
    </div>
  )
}
