import { useState, useEffect } from 'react'

export default function useWindow() {
  const isClient = typeof window === 'object'

  function getCoordinates() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      offsetTop: isClient ? window.pageYOffset : undefined,
      offsetLeft: isClient ? window.pageXOffset : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getCoordinates)

  useEffect(() => {
    if (!isClient) return false

    const handleChange = () => setWindowSize(getCoordinates())

    window.addEventListener('resize', handleChange)
    window.addEventListener('scroll', handleChange)

    return () => {
      window.removeEventListener('resize', handleChange)
      window.removeEventListener('scroll', handleChange)
    }
  }, [])

  return windowSize
}
