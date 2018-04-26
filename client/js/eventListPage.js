import {createNewEvent} from './components/event.js'
import {showCategory} from './components/show-category.js'
import {createHeader, createSidebar} from './components/nav.js'


const params = new window.URLSearchParams(window.location.search)
const category = params.get('category')

if (!category) {
  // rediriger vers la page d'accueil
}

fetch('http://localhost:3248/categories')
  .then(res => res.json())
  .then(categories => {
    // categories.map(categoryLink).join('')
    const eventCategory = document.getElementById('category')
    const matchedCategory = categories
      .find(cat => cat.normalizedTitle === category)
    const eventCategories = showCategory(matchedCategory)
    eventCategory.innerHTML = eventCategories
  })

/* global fetch */
fetch(`http://localhost:3248/events/category/${category}`)
  .then(res => res.json())
  .then(events => {
    const eventElement = document.getElementById('event')
    const eventElements = events.map(createNewEvent).join('')
    console.log({ events, eventElements })
    eventElement.innerHTML = eventElements
  })

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})


const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})
