export default function withUnit(value) {
  return typeof value === 'number' ? value + 'px' : value
}
