export function parse(search) {
  const result = {}
  if (!search) return result
  const queryString = search.slice(1)
  const queryArray = queryString.split('&')
  for (let query of queryArray) {
    const item = query.split('=')
    result[item[0]] = item[1]
  }
  return result
}
