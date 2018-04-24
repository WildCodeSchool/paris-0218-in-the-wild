<<<<<<< HEAD
import {createNewEvent} from './components/event.js'
import {showCategory} from './components/show-category.js'
import {createHeader} from './components/nav.js'
<<<<<<< HEAD

const params = new URLSearchParams(window.location.search)
=======
// import {form} from './components/eventProposition.js'
// import {createnavbar} from './components/nav.js'
// import { init } from './eventProposition/eventForm.js'
>>>>>>> event-form-page
=======
import {createHeader, createSidebar} from './components/nav.js'

const params = new window.URLSearchParams(window.location.search)
>>>>>>> ad2e525746dfd40f7cbadfaf0a1da9ddeccca4bb

const category = params.get('category')

if (!category) {
  // rediriger vers la page d'accueil
}

<<<<<<< HEAD:client/js/eventListPage.js
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
    console.log({ events, eventElements })
    eventElement.innerHTML = eventElements
  })

=======
>>>>>>> dev:client/js/app.js
const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})
const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})
