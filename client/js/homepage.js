import {createHeader, createSidebar} from './components/nav.js'
import {api} from './server.js'

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})

api(`currentuserpic`)
  .then(url => document.getElementById('logo-img').src = url)

const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})

api(`events/category/get-together`)
  .then(events => {
    const getTogetherCountPLace = document.getElementById('get-together-count')
    const getTogetherCountNumber = events.length
    console.log({ events, getTogetherCountNumber })
    getTogetherCountPLace.innerHTML = getTogetherCountNumber
  })

api(`events/category/boire-un-coup`)
  .then(events => {
    const getTogetherCountPLace = document.getElementById('boire-un-coup-count')
    const getTogetherCountNumber = events.length
    console.log({ events, getTogetherCountNumber })
    getTogetherCountPLace.innerHTML = getTogetherCountNumber
  })

api(`events/category/cours-de-soutien`)
  .then(events => {
    const getTogetherCountPLace = document.getElementById('cours-de-soutien-count')
    const getTogetherCountNumber = events.length
    console.log({ events, getTogetherCountNumber })
    getTogetherCountPLace.innerHTML = getTogetherCountNumber
  })

api(`events/category/live-coding`)
  .then(events => {
    const getTogetherCountPLace = document.getElementById('live-coding-count')
    const getTogetherCountNumber = events.length
    console.log({ events, getTogetherCountNumber })
    getTogetherCountPLace.innerHTML = getTogetherCountNumber
  })

const reload = () => {
  if (!window.location.hash) {
    window.location = window.location + '#loaded'
    setTimeout(window.location.reload(), 1000)
  }
}

window.onload = reload()
