import { link } from '../Link/link'
import { navLinks } from '../utils/navlinks'
import './header.css'

/* función para hacer todo lor elativo al header */
export const Header = () => {
  const header = document.querySelector('#header')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  for (const linkItem of navLinks) {
    /* instanciar la función link */
    link(ul, linkItem)
  }
  /* añadir eleemntos al header */
  nav.append(ul)
  header.append(nav)
}
