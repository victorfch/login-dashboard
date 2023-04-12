export const loginUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.username == "useradmin" && user.password == "1234") {
        return resolve({
          okey: true
        })
      } 
      return reject({
        okey: false
      })
    }, 2000)
  })
}

export const getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/?page=4")
  const {results} = await res.json()

  return results
}

export const getSingleCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await res.json()

  return data
}