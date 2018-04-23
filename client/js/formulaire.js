import {createHeader, createSidebar} from './components/nav.js'

const params = new window.URLSearchParams(window.location.search)

const category = params.get('category')

if (!category) {
  // rediriger vers la page d'accueil
}

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})
const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})
