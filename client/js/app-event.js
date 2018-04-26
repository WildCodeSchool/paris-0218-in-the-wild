import {api} from './server.js'
import {createEventDetail} from './components/createEventDetail.js'
import {createHeader, createSidebar} from './components/nav.js'

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

if (!id) {
  // rediriger vers la page d'accueil
}

api(`events/${id}`)
  .then(event => {
    const eventElement = document.getElementById('event')
    console.log(event, createEventDetail(event))
    eventElement.innerHTML = createEventDetail(event)
  })

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})


const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})
