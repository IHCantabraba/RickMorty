import { ApiReq } from '../utils/peticion'
import './locations.css'

export const Locations = async () => {
  /* petición a la API */
  const locations = await ApiReq('location')
}
