import {createHeader} from './components/nav.js'
import {createEventDetail} from './components/createEventDetail.js'

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
    console.log(event, createEventDetail(event))
    eventElement.innerHTML = createEventDetail(event)
  })



const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})
