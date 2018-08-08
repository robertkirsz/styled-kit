export default (firstObject, secondObject) => {
  for (let key in firstObject) {
    if (!(key in secondObject) || firstObject[key] !== secondObject[key]) return false
  }

  for (let key in secondObject) {
    if (!(key in firstObject) || firstObject[key] !== secondObject[key]) return false
  }

  return true
}
