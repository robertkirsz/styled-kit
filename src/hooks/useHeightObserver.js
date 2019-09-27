import { useEffect, useState } from 'react'

const useHeightObserver = node => {
  const [height, changeHeight] = useState(null)

  useEffect(() => {
    const element = node.current

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (!entry) return

      changeHeight(Math.round(entry.contentRect.height))
    })

    resizeObserver.observe(element)

    return () => resizeObserver.unobserve(element)
  }, [node])

  return height
}

export default useHeightObserver
