import { ApiReq } from '../utils/peticion'
import { Character } from '../Character/character'
import './Characters.css'
import { Pagination } from '../Pagination/pagination'

export const Characters = async () => {
  /* petición a la API */
  const characters = await ApiReq('character', charcatersPage.page)
  const main = document.querySelector('#main')
  main.innerHTML = ''
  const divCharacters = document.createElement('section')
  divCharacters.className = 'Characters'
  for (const character of characters) {
    divCharacters.innerHTML += Character(character)
  }
  main.append(divCharacters)
  main.append(Pagination(charcatersPage))
}
export let charcatersPage = {
  page: 1,
  component: Characters
}
