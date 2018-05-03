import {api} from './server.js'

const params = new URLSearchParams(window.location.search)

const redirectTo = params.get('redirectTo') || '/homepage.html'

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
      window.location = 'homepage.html'
    })
})
