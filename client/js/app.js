import {createHeader, createSidebar} from './components/nav.js'

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})

const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})
