import { ApiReq } from '../utils/peticion'
import './episodes.css'

export const Episodes = async () => {
  /* petición a la API */
  const episodes = await ApiReq('episode')
}
