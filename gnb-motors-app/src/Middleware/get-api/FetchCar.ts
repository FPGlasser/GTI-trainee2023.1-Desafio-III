const FetchCar = async () => {
  return fetch('https://apitrainees.herokuapp.com/carros')
    .then(res => {
      if (!res.ok) {
        throw new Error('Erro na requisição')
      } else {
        return res.json()
      }
    })
}

export default FetchCar;