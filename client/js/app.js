/* global fetch */
fetch('http://localhost:3248/events')
  .then(res => res.json())
