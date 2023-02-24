export function toTree(source: any) {
  const map: any = {}
  const results: any[] = []
  source.forEach((item: any) => {
    Reflect.deleteProperty(item, 'children')
    map[item.id] = item
  })
  source.forEach((item: any) => {
    let curObj = map[item.pid]
    if (curObj) {
      void (curObj.children || (curObj.children = [])).push(item)
    } else {
      results.push(item)
    }
  })
  return results
}
