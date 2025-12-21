'use client'

import { useState, useEffect } from 'react'

interface TypeWriterProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

export default function TypeWriter({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = '' 
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimeout)
    }

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[charIndex])
        setCharIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }

    if (!isDeleting && charIndex === currentText.length) {
      setIsPaused(true)
      return
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
        setCharIndex(prev => prev - 1)
      }, deleteSpeed)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex(prev => (prev + 1) % texts.length)
    }
  }, [charIndex, isDeleting, isPaused, textIndex, texts, speed, deleteSpeed, pauseTime])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-cyber-cyan">|</span>
    </span>
  )
}
