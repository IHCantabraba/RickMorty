import { Characters } from '../Characters/Characters'
import { Episodes } from '../Episodes/episodes'
import { Locations } from '../Locations/locations'
import './link.css'
/* función exportable para crear un li.
Recible el padre y un texto */
export const link = (parentElement, link) => {
  /* obtener los valores d¡de las keys */
  const { text, component, color } = link
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.textContent = text
  a.style.color = color
  a.href = '#'
  li.append(a)
  /* listener llama a la funcion definida en el array de objetos creado en navLinks */
  a.addEventListener('click', component)
  parentElement.append(li)
}
