import { Characters } from './src/components/Characters/Characters'
import { Header } from './src/components/Header/header'
import './style.css'
/* Peticiones a la API de Rick & Morty */
// //https://rickandmortyapi.com/api/

const divApp = document.querySelector('#app')
/* insertar dos elementos de forma rápida */
divApp.innerHTML = `<header id="header"></header>
<main id="main"></main>`

/* Instanciar la función del header */
Header()
Characters()
