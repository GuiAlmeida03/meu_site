import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const trailRef = useRef([])
  const pos      = useRef({ x: -100, y: -100 })
  const ring     = useRef({ x: -100, y: -100 })
  const animId   = useRef(null)
  const [hovered, setHovered]   = useState(false)
  const [clicking, setClicking] = useState(false)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    // Hide default cursor
    document.body.style.cursor = 'none'

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }
    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)
    const onDown   = () => setClicking(true)
    const onUp     = () => setClicking(false)

    // Detect hoverable elements
    const onOver = (e) => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')
      setHovered(!!el)
    }

    document.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseover',  onOver,  { passive: true })

    // Animation loop — ring follows with lag
    const lerp = (a, b, t) => a + (b - a) * t
    const loop = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }

      // Trail particles
      trailRef.current.forEach((p, i) => {
        if (!p) return
        const delay = (i + 1) * 0.06
        const tx = lerp(parseFloat(p.dataset.x || pos.current.x), pos.current.x, delay)
        const ty = lerp(parseFloat(p.dataset.y || pos.current.y), pos.current.y, delay)
        p.dataset.x = tx
        p.dataset.y = ty
        p.style.transform = `translate(${tx}px, ${ty}px)`
        p.style.opacity   = String((1 - i / trailRef.current.length) * 0.25)
      })

      animId.current = requestAnimationFrame(loop)
    }
    animId.current = requestAnimationFrame(loop)

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      document.removeEventListener('mouseover',  onOver)
      cancelAnimationFrame(animId.current)
    }
  }, [])

  const opacity = visible ? 1 : 0

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={el => trailRef.current[i] = el}
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
          style={{
            width:  `${6 - i * 0.5}px`,
            height: `${6 - i * 0.5}px`,
            marginLeft: `${-(3 - i * 0.25)}px`,
            marginTop:  `${-(3 - i * 0.25)}px`,
            background: `rgba(139,92,246,0.6)`,
            opacity: 0,
            transition: 'opacity 0.1s',
          }}
        />
      ))}

      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border transition-all duration-150"
        style={{
          width:       hovered ? '48px' : '36px',
          height:      hovered ? '48px' : '36px',
          marginLeft:  hovered ? '-24px' : '-18px',
          marginTop:   hovered ? '-24px' : '-18px',
          borderColor: hovered ? 'rgba(34,211,238,0.7)' : 'rgba(139,92,246,0.5)',
          background:  hovered ? 'rgba(34,211,238,0.05)' : 'transparent',
          opacity,
          transform:   clicking ? 'scale(0.85)' : 'scale(1)',
          boxShadow:   hovered
            ? '0 0 12px rgba(34,211,238,0.3)'
            : '0 0 8px rgba(139,92,246,0.2)',
        }}
      />

      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-100"
        style={{
          width:      clicking ? '4px' : '6px',
          height:     clicking ? '4px' : '6px',
          marginLeft: clicking ? '-2px' : '-3px',
          marginTop:  clicking ? '-2px' : '-3px',
          background: hovered
            ? 'rgba(34,211,238,0.9)'
            : 'rgba(167,139,250,0.9)',
          boxShadow: hovered
            ? '0 0 8px rgba(34,211,238,0.8)'
            : '0 0 6px rgba(139,92,246,0.8)',
          opacity,
        }}
      />
    </>
  )
}
