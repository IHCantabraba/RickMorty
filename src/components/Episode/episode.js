import './episode.css'

export const Episode = (episode) => {
  return `
  <div class="episode">
    <div class = "img-wrp">
    <div class="Ename"> 
        <h3>${episode.name}</h3>
      </div>
      <div class="temporada"> 
        <h3>${episode.episode}</h3>
      </div>
      <div class="date"> 
        <h3>${episode.air_date}</h3>
      </div>
      <img src="https://res.cloudinary.com/df7b0dj9r/image/upload/v1712162705/Fotos_De_Dibujos_Animados_sykki8.jpg"/>
    </div>
    
  </div>`
}
