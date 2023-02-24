export function debounce(func: any, wait: number) {
  let timeout: any
  return function () {
    const context = this
    const args = arguments

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}
