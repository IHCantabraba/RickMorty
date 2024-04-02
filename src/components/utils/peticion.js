export const ApiReq = async (endPoint, page) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/${endPoint}/?page=${page}`
  )
  const responseJSN = await response.json()
  return responseJSN.results
}
