export const createEventDetail = (event) =>
  `
  <div class="content">

  <div class="left-box">
  <div class="image" style="background-image: url('${event.eventPicture}')"></div>
  <ul id="attendees"></ul>
  </div>

  <div class="right-box">
  <div class="title"> <h1>${event.title}</h1></div>
  <div class="date"><p>C'est quand ?</p>${event.startingTime}</div>
  <div class="location"><p>C'est où?</p>${event.location}</div>
  <div class="description"><p>C'est quoi ?</p>${event.description}</div>
  <div class= "btn" id="btn-submit">
    <a class="button"  type="submit" href="#">Je Participe</a>
  </div>
  </div>


  </div>
  `
