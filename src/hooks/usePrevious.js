import { useEffect, useRef } from 'react'

export default value => {
  const ref = useRef()

  const storeRef = () => {
    ref.current = value
  }

  useEffect(storeRef)

  return ref.current
}
