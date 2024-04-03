import { Episode } from '../Episode/episode'
import { Pagination } from '../Pagination/pagination'
import { ApiReq } from '../utils/peticion'
import './episodes.css'

export const Episodes = async () => {
  /* petición a la API */
  const episodes = await ApiReq('episode')
  const main = document.querySelector('#main')
  main.innerHTML = ''
  const divEpisodes = document.createElement('section')
  divEpisodes.className = 'Episodes'
  for (const episode of episodes) {
    console.log(episode)
    divEpisodes.innerHTML += Episode(episode)
  }
  main.append(divEpisodes)
  main.append(Pagination(episodesPage))
}

export let episodesPage = {
  page: 2,
  component: Episodes
}
