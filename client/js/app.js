window.fetch('http://localhost:3248/events')
  .then(res => res.json())
  .then(events => {
    console.log(events)
})