const del = (url: string, authToken: string, onSuccess: (data: any) => void) => {
  return fetch(url, {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": authToken,
    },
  })
    .then((response) => response.json())
    .then(onSuccess)
}

const get = (url: string, onSuccess: (data: any) => void) => {
  fetch(url, {
    method: "get",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then(onSuccess)
}

const getPromise = (url: string) => {
  return fetch(url, {
    method: "get",
    headers: {
      Accept: "application/json",
    }
  }).then((response) => {
    if (!response.ok) { throw new Error(`Error fetching ${url}`) }
    return response.json()
  }).then((data) => {
    return data
  })
}

const patch = (url: string, data: any, authToken: string, onSuccess: (data: any) => void) => {
  const fetchArgs = {
    method: "patch",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": authToken,
    },
  }

  if (data) {
    fetchArgs["body"] = JSON.stringify(data)
  }

  fetch(url, fetchArgs)
    .then((response) => response.json())
    .then(onSuccess)
}

const post = (url: string, data: any, authToken: string, onSuccess: (data: any) => void, onFailure?: (data: any) => void) => {
  fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": authToken,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) { throw(response) }
      return response.json()
    })
    .then(onSuccess)
    .catch(onFailure)
}

const put = (url: string, data: any, authToken: string, onSuccess: (data: any) => void) => {
  fetch(url, {
    method: "put",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": authToken,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(onSuccess)
}

export { del, get, getPromise, patch, post, put }
