import {createNewEvent} from './components/event.js'
import {showCategory} from './components/showCategory.js'

/* global fetch */
fetch('http://localhost:3248/events/Boire')
  .then(res => res.json())
  .then(boireEvents => {
    const eventElement = document.getElementById('event')
    const eventElements = boireEvents.map(createNewEvent).join('')
    eventElement.innerHTML = eventElements
  })

fetch('http://localhost:3248/categories')
  .then(res => res.json())
  .then(categories => {
    const eventCategory = document.getElementById('category')
    const eventCategories = showCategory(categories[0])
    eventCategory.innerHTML = eventCategories
  })
