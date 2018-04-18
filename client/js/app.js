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



document.getElementById('regForm').addEventListener('submit', event=> {
 event.preventDefault()
  const firstNameUsers = document.getElementById('fname').value
  const lastNameUsers = document.getElementById('lsname').value
  const username = document.getElementById('Username').value
  const mail = document.getElementById('mailing').value
  const schoolist = document.getElementById('school').value
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('yourpass').value
 
fetch('http://localhost:3248/users', {
 method: 'post',
 body: JSON.stringify({
  firstName: firstNameUsers,
  lastName: lastNameUsers,
  pseudo: username,
  email: mail,
  schoolName: schoolist,
  password: password,
  validePassword : confirmPassword,
 })
    }).then(res => console.log(res.status, res.statusCode))
})

