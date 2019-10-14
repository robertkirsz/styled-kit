export default (firstObject, secondObject) => {
  for (const key in firstObject) {
    if (!(key in secondObject) || firstObject[key] !== secondObject[key]) return false
  }

  for (const key in secondObject) {
    if (!(key in firstObject) || firstObject[key] !== secondObject[key]) return false
  }

  return true
}
