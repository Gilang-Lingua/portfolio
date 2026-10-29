import { useEffect, useRef } from 'react'

interface GridPoint {
  x: number
  y: number
  offsetX: number
  offsetY: number
}

const GRID_SPACING = 32
const INTERACTION_RADIUS = 150
const MAX_DISPLACEMENT = 14

interface InteractiveBackgroundProps {
  onReady?: () => void
}

export function InteractiveBackground({ onReady }: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let rows: GridPoint[][] = []
    let pointerX: number | null = null
    let pointerY: number | null = null
    let animationFrame: number | null = null
    let frameDelay: number | null = null
    let hasDrawnInitialFrame = false
    const basePoints: number[] = []
    const highlightedPoints: number[] = []

    const draw = () => {
      animationFrame = null
      const width = window.innerWidth
      const height = window.innerHeight
      const isLightTheme = document.documentElement.dataset.theme === 'light'
      const baseColor = isLightTheme ? '71, 85, 105' : '148, 163, 184'
      const accentColor = isLightTheme ? '14, 165, 233' : '34, 211, 238'
      const scrollY = window.scrollY
      const firstRow = Math.max(0, Math.floor((scrollY - GRID_SPACING / 2) / GRID_SPACING) - 1)
      const lastRow = Math.min(
        rows.length,
        Math.ceil((scrollY + height - GRID_SPACING / 2) / GRID_SPACING) + 2
      )
      let isAnimating = false

      context.clearRect(0, 0, width, height)
      basePoints.length = 0
      highlightedPoints.length = 0

      for (let rowIndex = firstRow; rowIndex < lastRow; rowIndex += 1) {
        for (const point of rows[rowIndex]) {
          const pointY = point.y - scrollY
          let targetX = 0
          let targetY = 0

          if (pointerX !== null && pointerY !== null && !reducedMotion) {
            const dx = point.x - pointerX
            const dy = pointY - pointerY
            const distance = Math.hypot(dx, dy)

            if (distance < INTERACTION_RADIUS) {
              const influence = (1 - distance / INTERACTION_RADIUS) ** 2
              const direction = distance > 0 ? 1 / distance : 0
              targetX = dx * direction * MAX_DISPLACEMENT * influence
              targetY = dy * direction * MAX_DISPLACEMENT * influence
            }
          }

          point.offsetX += (targetX - point.offsetX) * 0.18
          point.offsetY += (targetY - point.offsetY) * 0.18

          const displacement = Math.hypot(point.offsetX, point.offsetY)
          if (
            Math.abs(targetX - point.offsetX) > 0.08 ||
            Math.abs(targetY - point.offsetY) > 0.08
          ) {
            isAnimating = true
          }

          const points = displacement > 0.4 ? highlightedPoints : basePoints
          points.push(
            point.x + point.offsetX,
            pointY + point.offsetY,
            displacement > 0.4 ? 1.5 : 1.1
          )
        }
      }

      context.beginPath()
      for (let index = 0; index < basePoints.length; index += 3) {
        const x = basePoints[index]
        const y = basePoints[index + 1]
        const radius = basePoints[index + 2]
        context.moveTo(x + radius, y)
        context.arc(x, y, radius, 0, Math.PI * 2)
      }
      context.fillStyle = `rgba(${baseColor}, 0.28)`
      context.shadowColor = `rgba(${baseColor}, 0.2)`
      context.shadowBlur = 4
      context.fill()

      if (highlightedPoints.length > 0) {
        context.beginPath()
        for (let index = 0; index < highlightedPoints.length; index += 3) {
          const x = highlightedPoints[index]
          const y = highlightedPoints[index + 1]
          const radius = highlightedPoints[index + 2]
          context.moveTo(x + radius, y)
          context.arc(x, y, radius, 0, Math.PI * 2)
        }
        context.fillStyle = `rgba(${accentColor}, 0.56)`
        context.shadowColor = `rgba(${accentColor}, 0.42)`
        context.shadowBlur = 7
        context.fill()
      }
      context.shadowBlur = 0

      if (!hasDrawnInitialFrame) {
        hasDrawnInitialFrame = true
        onReady?.()
      }

      if (isAnimating && !reducedMotion && frameDelay === null) {
        frameDelay = window.setTimeout(() => {
          frameDelay = null
          scheduleDraw()
        }, 32)
      }
    }

    const scheduleDraw = () => {
      if (frameDelay !== null) {
        window.clearTimeout(frameDelay)
        frameDelay = null
      }
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      const width = window.innerWidth
      const pageHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight)

      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(window.innerHeight * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      rows = []

      for (let y = GRID_SPACING / 2; y < pageHeight + GRID_SPACING; y += GRID_SPACING) {
        const row: GridPoint[] = []
        for (let x = GRID_SPACING / 2; x < width; x += GRID_SPACING) {
          row.push({ x, y, offsetX: 0, offsetY: 0 })
        }
        rows.push(row)
      }

      scheduleDraw()
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || reducedMotion) return
      pointerX = event.clientX
      pointerY = event.clientY
      scheduleDraw()
    }

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget !== null) return
      pointerX = null
      pointerY = null
      scheduleDraw()
    }

    const themeObserver = new MutationObserver(scheduleDraw)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const pageResizeObserver = new ResizeObserver(resize)
    pageResizeObserver.observe(document.documentElement)
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', scheduleDraw, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerout', handlePointerOut)
    resize()

    return () => {
      themeObserver.disconnect()
      pageResizeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', scheduleDraw)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerout', handlePointerOut)
      if (frameDelay !== null) window.clearTimeout(frameDelay)
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
    }
  }, [onReady])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full pointer-events-none dot-grid-canvas"
    />
  )
}
