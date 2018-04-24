export const createEventDetail = (event) =>
  `
  <div class="content">

  <div class="left-box">
  <div class="image" style="background-image: url('${event.eventPicture}')"></div>
  <div class="attendees">${event.attendees}</div>
  </div>

  <div class="right-box">
  <div class="title">${event.title}</div>
  <p class="date">${event.startingTime}</p>
  <p class="location">${event.location}</p>
  <p class="description">${event.description}</p>
  </div>

  </div>
  `
