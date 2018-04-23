export const createEventDetail = (event) =>
  `<div>
  <div class= "column event" style="background-image: url('${event.eventPicture}')">
  </div>
  <div class="attendees">${event.attendees}</div>
  <h2 class="title">${event.title}</h2>
  <p class="date">${event.startingTime}</p>
  <p class="location">${event.location}</p>
  <p class="description">${event.description}</p>

  </div>
  `
