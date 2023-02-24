export function deepClone(source: any, hash = new WeakMap()) {
  if (source === null) return source
  if (source instanceof RegExp) return new RegExp(source)
  if (source instanceof Date) return new Date(source)
  if (typeof source !== 'object') return source
  if (hash.get(source)) return hash.get(source)
  const target = new source.constructor()
  hash.set(source, target)
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = deepClone(source[key], hash)
    }
  }
  return target
}
