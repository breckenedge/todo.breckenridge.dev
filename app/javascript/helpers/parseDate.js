export default function parseDate(string) {
  let [y, m, d] = string.split('-').map((i) => parseInt(i))
  return new Date(y, m - 1, d)
}
