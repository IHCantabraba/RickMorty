import { ApiReq } from '../utils/peticion'
import { Character } from './Character/character'
import './Characters.css'

export const Characters = async () => {
  /* petición a la API */
  const characters = await ApiReq('character')
  const main = document.querySelector('#main')
  const divCharacters = document.createElement('section')
  divCharacters.className = 'Characters'
  for (const character of characters) {
    divCharacters.innerHTML += Character(character)
  }

  main.append(divCharacters)
}
