import { useState, useEffect } from 'react'

import { queries } from 'styles'

function matchMedia(query) {
  if (typeof window === 'undefined') {
    return () => ({
      matches: true,
      addListener: () => {},
      removeListener: () => {}
    })
  }

  return window.matchMedia(query)
}

function getSizeValues(mediaQueryList) {
  if (typeof window === 'undefined') return { mobile: true, desktop: false }

  return mediaQueryList.reduce(
    (previousValue, currentValue) => ({
      ...previousValue,
      [currentValue.name]: currentValue.query.matches
    }),
    {}
  )
}

export default function useScreenSize(queriesList = queries) {
  const mediaQueryList = queriesList.map(({ name, value }) => ({
    name,
    query: matchMedia(value)
  }))

  const [sizes, setSizes] = useState(getSizeValues(mediaQueryList))

  function updateSizes() {
    setSizes(getSizeValues(mediaQueryList))
  }

  useEffect(() => {
    mediaQueryList.forEach(({ query }) => query.addListener(updateSizes))

    return () => {
      mediaQueryList.forEach(({ query }) => query.removeListener(updateSizes))
    }
  }, [mediaQueryList, updateSizes])

  return sizes
}
