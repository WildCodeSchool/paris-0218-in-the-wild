import {createNewEvent} from './components/event.js'
import {showCategory} from './components/show-category.js'
import {createHeader} from './components/nav.js'


/* global fetch */
fetch('http://localhost:3248/events')
  .then(res => res.json())
  .then(events => {
    const eventElement = document.getElementById('event')
    const eventElements = events.map(createNewEvent).join('')
    eventElement.innerHTML = eventElements
  })

fetch('http://localhost:3248/categories')
  .then(res => res.json())
  .then(categories => {
    const eventCategory = document.getElementById('category')
    const eventCategories = showCategory(categories[0])
    eventCategory.innerHTML = eventCategories
  })

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})
