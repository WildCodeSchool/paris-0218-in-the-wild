export const createNewEvent = (event) =>
  `
  <a href="event.html?id=${event.id}">
  <div class="event" style="background-image: url('${event.eventPicture}')">
  <p class="date">${event.startingTime}</p>
  <h2 class="title">${event.title}</h2>
  </div>
  </a>
  `
