const sortBy = (key: string) => {
  return (objA, objB) => {
    if (objA[key] < objB[key]) {
      return -1
    } else if (objA[key] > objB[key]) {
      return 1
    } else {
      return 0
    }
  }
}

// Sort incomplete projects before complete projects
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
