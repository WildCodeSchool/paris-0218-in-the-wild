import {api} from './server.js'
import {createEventDetail} from './components/createEventDetail.js'
import {createHeader, createSidebar} from './components/nav.js'
import {createAttendees} from './components/createAttendees.js'

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

if (!id) {
  // rediriger vers la page d'accueil
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
        .catch(err => {

        })
    })
  })


const headerEl = document.getElementById('header')
headerEl.innerHTML = createHeader({})


const sideEl = document.getElementById('sidebar')
sideEl.innerHTML = createSidebar({})
