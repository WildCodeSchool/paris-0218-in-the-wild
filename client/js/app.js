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

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})
const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})
