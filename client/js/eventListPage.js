import {createNewEvent} from './components/event.js'
import {showCategory} from './components/show-category.js'
import {createHeader, createSidebar} from './components/nav.js'
import {api} from './server.js'


const params = new window.URLSearchParams(window.location.search)
const category = params.get('category')

if (!category) {
  // rediriger vers la page d'accueil
}

api('categories')
  .then(categories => {
    // categories.map(categoryLink).join('')
    const eventCategory = document.getElementById('category')
    const matchedCategory = categories
      .find(cat => cat.normalizedTitle === category)
    const eventCategories = showCategory(matchedCategory)
    eventCategory.innerHTML = eventCategories
  })

api(`events/category/${category}`)
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
