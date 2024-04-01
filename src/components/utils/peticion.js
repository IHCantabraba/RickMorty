export const ApiReq = async (endPoint) => {
  const response = await fetch(`https://rickandmortyapi.com/api/${endPoint}`)
  const responseJSN = await response.json()
  return responseJSN.results
}
