const sortBy = (key: string) => {
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

export const reverseSortBy = (key: string) => {
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


// Sort incomplete items before complete items
export const sortByStatus = (objA, objB): (-1 | 0 | 1) => {
  if (objA.status === objB.status) {
  } else if (objA.status === "complete" && objB.status !== "complete") {
    return 1
  } else if (objA.status !== "complete" && objB.status === "complete") {
    return -1
  } else {
    return 0
  }
}

export default sortBy
