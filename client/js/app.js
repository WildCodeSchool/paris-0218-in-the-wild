import { init } from './eventProposition/eventForm.js'
import {form} from './components/eventProposition.js'

/* global fetch */
fetch('http://localhost:3248/events')
  .then(res => res.json())

// injection des components

// form

const formContainer = document.querySelector('.container')
formContainer.innerHTML = form()

init()
