import {api} from './server.js'
import {createHeader, createSidebar} from './components/nav.js'

const params = new URLSearchParams(window.location.search)

const redirectTo = params.get('redirectTo') || '/homepage.html'


const signUpForm = document.getElementById('sign-up-form')
signUpForm.addEventListener('submit', event => {
  event.preventDefault()
  const firstNameUsers = document.getElementById('fname')
  const lastNameUsers = document.getElementById('lsname')
  const username = document.getElementById('Username')
  const mail = document.getElementById('mailing')
  const schoolist = document.getElementById('school')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('yourpass')
  // TODO: check password here

  const form = {
    firstName: firstNameUsers.value,
    lastName: lastNameUsers.value,
    pseudo: username.value,
    email: mail.value,
    schoolName: schoolist.value,
    password: password.value,
  }

  api(`users`, { method: 'post', body: JSON.stringify(form) })
    .then(result => {
      console.log(result)

      window.location = redirectTo
    })
})

const signInForm = document.getElementById('sign-in-form')
signInForm.addEventListener('submit', event => {
  event.preventDefault()
  const username = document.getElementById('sign-in-username')
  const password = document.getElementById('sign-in-password')
  const form = {
    pseudo: username.value,
    password: password.value,
  }

  api('sign-in', { method: 'post', body: JSON.stringify(form) })
    .then(result => {
      console.log(result)
      window.location = redirectTo
    })
})


const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})

const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})
