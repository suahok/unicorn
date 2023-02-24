export function isObjValueEqual(source: any, target: any) {
  if (source === target) return true
  const sourceKeys = Object.getOwnPropertyNames(source)
  const targetKeys = Object.getOwnPropertyNames(target)
  if (sourceKeys.length !== targetKeys.length) return false
  for (const key in sourceKeys) {
    if (Object.hasOwnProperty.call(target, key)) {
      if (typeof source[key] === 'object') {
        if (!isObjValueEqual(source[key], target[key])) return false
      } else if (source[key] !== target[key]) {
        return false
      }
    } else {
      return false
    }
  }
  return true
}
