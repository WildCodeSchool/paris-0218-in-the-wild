const createNewEvent = (boireEvent) =>
  `<div>
  <div class= "column event">
  <p class="date">${boireEvent.startingTime}</p>
  <h2 class="title">${boireEvent.title}</h2>
  </div>

  </div>
  `
/* global fetch */
fetch('http://localhost:3248/events/Boire')
  .then(res => res.json())
  .then(boireEvents => {
    const eventElement = document.getElementById('event')
    const eventElements = boireEvents.map(createNewEvent).join('')
    eventElement.innerHTML = eventElements
  })
