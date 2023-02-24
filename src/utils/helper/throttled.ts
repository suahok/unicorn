export function throttled(func: any, wait: number) {
  let timer: any = null
  return function () {
    const context = this
    const args = arguments

    if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args)
        timer = null
      }, wait)
    }
  }
}
