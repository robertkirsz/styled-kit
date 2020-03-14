export default function camelToKebab(value) {
  if (typeof value !== 'string') return value
  return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}
