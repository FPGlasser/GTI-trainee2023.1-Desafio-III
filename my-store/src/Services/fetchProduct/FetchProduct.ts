
async function fetchData<T>(url: string): Promise<T> {

  return fetch(url, {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })

}


export { fetchData }