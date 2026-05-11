import { useState, useEffect } from 'react'

/**
 * Animates typing of an array of strings in sequence.
 * @param {string[]} texts   - Array of strings to cycle through
 * @param {number}   speed   - Ms per character while typing
 * @param {number}   pause   - Ms to hold the completed string
 * @param {number}   delSpeed- Ms per character while deleting
 */
export function useTypewriter(texts, speed = 60, pause = 2200, delSpeed = 35) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase]         = useState('typing')   // typing | pausing | deleting
  const [textIdx, setTextIdx]     = useState(0)
  const [charIdx, setCharIdx]     = useState(0)

  useEffect(() => {
    const current = texts[textIdx]

    if (phase === 'typing') {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, speed)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pausing'), pause)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), 300)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, delSpeed)
        return () => clearTimeout(t)
      } else {
        setTextIdx(i => (i + 1) % texts.length)
        setPhase('typing')
      }
    }
  }, [phase, charIdx, textIdx, texts, speed, pause, delSpeed])

  return displayed
}
