/* global fetch */
fetch('http://localhost:3248/events/Boire')
  .then(res => res.json())
  .then(boireEvents => {
    const eventElement = document.getElementById('event')
    const eventElements = boireEvents.map(createNewEvent).join('')
    eventElement.innerHTML = eventElements
  })
