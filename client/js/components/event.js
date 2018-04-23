export const createNewEvent = (event) =>
  `<div>
<<<<<<< HEAD
  <a href="event.html/${event.id}"><div class= "column event" style="background-image: url('${event.eventPicture}')">
=======
  <a href="event.html?id=${event.id}"><div class= "column event">
>>>>>>> 67a19243a91ef3ed2960e496fa13dbf6b6d38cbb
  <p class="date">${event.startingTime}</p>
  <h2 class="title">${event.title}</h2>
  </div>
  </a>
  </div>
  `
