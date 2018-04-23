export const createNewEvent = (event) =>
  `<div>
  <a href="event.html?id=${event.id}"><div class= "column event">
  <p class="date">${event.startingTime}</p>
  <h2 class="title">${event.title}</h2>
  </div>
  </a>
  </div>
  `
