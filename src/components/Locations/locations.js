import { Pagination } from '../Pagination/pagination'
import { ApiReq } from '../utils/peticion'
import './locations.css'

export const Locations = async () => {
  /* petición a la API */
  const locations = await ApiReq('location', locationsPage.page)
  const main = document.querySelector('#main')
  main.innerHTML = ''
  const divLocations = document.createElement('section')
  divLocations.className = 'locations'

  for (const location of locations) {
    console.log(location)
    divLocations.innerHTML += `
      <div>
        <div>
          <img src = 'https://images.creativefabrica.com/products/thumbnails/2023/10/10/dDUU8ZkB3/2WZVFNjX99pBCs4sqZcZtvW80Q1.png'/>
        </div>
        <h3>${location.name}</h3>
        <p>${location.dimension === 'unknown' ? '' : location.dimension}</p>
      </div>`
  }
  main.append(divLocations)
  main.append(Pagination(locationsPage))
}
export let locationsPage = {
  page: 1,
  component: Locations
}
