export function currying(func: any, ...rest: any[]) {
  const length = func.length
  const args = rest
  return function () {
    const context = this
    const newArgs = args.concat(Array.from(arguments))
    if (newArgs.length < length) {
      return currying.call(context, func, newArgs)
    } else {
      return func.apply(context, newArgs)
    }
  }
}
