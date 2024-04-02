import './pagination.css'
import { changePage } from '../utils/pages'
export const Pagination = (page) => {
  const divPagination = document.createElement('div')

  const buttonPrev = document.createElement('button')
  const buttonNext = document.createElement('button')
  const pageP = document.createElement('p')

  pageP.textContent = page.page
  divPagination.className = 'pagination'
  buttonPrev.textContent = 'Previous'
  buttonNext.textContent = 'Next'

  buttonPrev.addEventListener('click', () => changePage('-', page))
  buttonNext.addEventListener('click', () => changePage('+', page))

  divPagination.append(buttonPrev)
  divPagination.append(pageP)
  divPagination.append(buttonNext)
  return divPagination
}
