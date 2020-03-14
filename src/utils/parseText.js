export default function parseText(value) {
  return value === '' ? '' : isNaN(value) ? value : parseInt(value)
}
