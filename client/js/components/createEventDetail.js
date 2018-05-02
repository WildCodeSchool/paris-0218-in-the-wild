export const createEventDetail = (event) =>
  `
  <div class="content">

  <div class="left-box">
  <div class="image" style="background-image: url('${event.eventPicture}')"></div>
  <ul id="attendees"></ul>
  </div>

  <div class="right-box">
  <div class="title">${event.title}</div>
  <p class="date">${event.startingTime}</p>
  <p class="location">${event.location}</p>
  <p class="description">${event.description}</p>
  </div>
  <div class= "btn">
    <a class="button" type="submit" href="#">Je Participe</a>
  </div>

  </div>
  `
