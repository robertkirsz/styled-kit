import { useState, useEffect } from 'react'

const useIsVisible = ref => {
  const [isVisible, setIsVisible] = useState(false)

  const initializeObserver = element => {
    const options = {
      root: null,
      threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    }

    const callback = ([entry]) => {
      // console.log(entry);
      const percentageVisible = Math.floor(entry.intersectionRatio)

      if (percentageVisible >= 0.9) setIsVisible(true)
      if (percentageVisible < 0.9) setIsVisible(false)
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(element)

    return () => observer.disconnect()
  }

  const checkRef = () => {
    if (ref.current) {
      initializeObserver(ref.current)
    }
  }

  useEffect(checkRef, [ref])

  return isVisible
}

export default useIsVisible
