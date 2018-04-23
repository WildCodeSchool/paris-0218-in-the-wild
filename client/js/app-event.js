import {createNewEvent} from './components/event.js'
import {createHeader} from './components/nav.js'

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

if (!id) {
  // rediriger vers la page d'accueil
}

/* global fetch */
fetch(`http://localhost:3248/events/${id}`)
  .then(res => res.json())
  .then(event => {
    const eventElement = document.getElementById('event')
    console.log(event, createNewEvent(event))
    eventElement.innerHTML = createNewEvent(event)
  })



const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})
