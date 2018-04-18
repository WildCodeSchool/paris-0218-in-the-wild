import {createNewEvent} from './components/event.js'
import {showCategory} from './components/show-category.js'
import {createHeader} from './components/nav.js'

const params = new URLSearchParams(window.location.search)

const category = params.get('category')

if (!category) {
  // rediriger vers la page d'accueil
}

// console.log({ category })

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
    eventElement.innerHTML = eventElements
  })

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})
