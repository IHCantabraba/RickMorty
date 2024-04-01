import { Characters } from '../Characters/Characters'
import { Episodes } from '../Episodes/episodes'
import { Locations } from '../Locations/locations'

/* creo un array de objetos que en componnet llaman a la función fetch de cada tipo */
export const navLinks = [
  {
    text: 'Characters',
    component: Characters,
    color: 'black'
  },
  { text: 'Locations', component: Locations, color: 'black' },
  { text: 'Episodes', component: Episodes, color: 'black' }
]
