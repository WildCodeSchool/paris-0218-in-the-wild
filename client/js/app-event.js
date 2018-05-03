import {api} from './server.js'
import {createEventDetail} from './components/createEventDetail.js'
import {createHeader, createSidebar} from './components/nav.js'
import {createAttendees} from './components/createAttendees.js'

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

if (!id) {
  window.location = `homepage.html`
}

api(`events/${id}`)
  .then(event => {
    const eventElement = document.getElementById('event')

    console.log(event, createEventDetail(event))
    eventElement.innerHTML = createEventDetail(event)

    // if(event.attendees.find(el => el === request.session.user.pseudo)){
    //   document.getElementById('btn-submit').style.visibility = "hidden"
    // }
    const attendeeList = document.getElementById('attendees')
    const attendeeLists = event.attendees.map(createAttendees).join('')
    attendeeList.innerHTML = attendeeLists
    const btn = document.getElementById("btn-submit")
    btn.addEventListener("click", ()=>{
      api(`events/${id}/attend`, {method: 'put'})
        .then(window.location.reload())
        .catch(err => {

        })
    })
  })



const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})

api(`currentuserpic`)
  .then(url => document.getElementById('logo-img').src = url)

const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})

//function utiliser pour reload la page une fois  des le debut.
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        setTimeout(window.location.reload(),1000);
    }
}
