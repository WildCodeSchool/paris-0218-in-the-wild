import {createHeader, createSidebar} from '../components/nav.js'


const params = new window.URLSearchParams(window.location.search)

const category = params.get('category')

if (!category) {
  // rediriger vers la page d'accueil
}

const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})

const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})


document.getElementById('regForm').addEventListener('submit', event => {
  event.preventDefault()
  const firstNameUsers = document.getElementById('fname')
  const lastNameUsers = document.getElementById('lsname')
  const username = document.getElementById('Username')
  const mail = document.getElementById('mailing')
  const schoolist = document.getElementById('school')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('yourpass')

  const form = {
    firstName: firstNameUsers.value,
    lastName: lastNameUsers.value,
    pseudo: username.value,
    email: mail.value,
    schoolName: schoolist.value,
    password: password.value,
  }

  fetch('http://localhost:3248/users', {
    method: 'post',
    body: JSON.stringify(form)
  })
    .then(res => console.log(res.status, res.statusCode))
})



