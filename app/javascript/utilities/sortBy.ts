const sortBy = (key: SortKey) => {
  return (objA, objB) => {
    const valA = objA[key] || ""
    const valB = objB[key] || ""

    if (valA < valB) {
      return -1
    } else if (valA > valB) {
      return 1
    } else {
      return 0
    }
  }
}

export const reverseSortBy = (key: SortKey) => {
  return (objA, objB) => {
    const valA = objA[key] || ""
    const valB = objB[key] || ""

    if (valA < valB) {
      return 1
    } else if (valA > valB) {
      return -1
    } else {
      return 0
    }
  }
}

export default sortBy

export type SortDir = "asc" | "desc"

export type SortKey = "created_at" | "due_date" | "name"
