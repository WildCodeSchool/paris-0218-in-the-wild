const express = require('express')
// require de nos Mocks
const event1 = require('../mocks/events/1.json')
const event2 = require('../mocks/events/2.json')

const events = [ event1, event2 ]
const app = express()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
// Création des routes
app.get('/', (request, response) => {
  response.send('Ok')
})

app.get('/events', (request, response) => {
  response.json(events)
})

app.listen(3248, () => console.log("j'écoute sur le port 3248"))
