/*import {createHeader, createSidebar} from '../components/nav.js'

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})

const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})*/

document.getElementById('reg-form').addEventListener('submit', event => {
  event.preventDefault()
  const title = document.getElementById('title')
  const location = document.getElementById('location')
  const startingTime = document.getElementById('startingTime')
  const description = document.getElementById('description')
  const category = document.getElementById('category')

  const form = {
    title: title.value,
    location: location.value,
    startingTime: startingTime.value,
    description: description.value,
    category: category.value,
  }

  fetch('http://localhost:3248/events', {
    method: 'post',
    body: JSON.stringify(form)
  })
    .then(res => console.log(res.status, res.statusCode))
})
