export default function memoize(func) {
  const cache = {}

  return (...args) => {
    const item = args[0]

    if (item in cache) {
      return cache[item]
    } else {
      const result = func(item)
      cache[item] = result
      return result
    }
  }
}
