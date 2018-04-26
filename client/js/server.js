/* global fetch */

export const api = (path, opts = {}) => {
  const url = `http://localhost:3248/${path}`
  opts.credentials = 'include'

  return fetch(url, opts).then(res => {
    if (res.ok) return res.json()
    const error = Error(`Fetch: ${path}, ${res.status} - ${res.statusText}`)
    error.response = res
    throw error
  })
}
