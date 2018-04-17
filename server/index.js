const express = require('express')
// require des Mocks Boire un coup
const category1 = require('../mocks/categories/category1.json')
const category2 = require('../mocks/categories/category2.json')
const category3 = require('../mocks/categories/category3.json')
const category4 = require('../mocks/categories/category4.json')
const event1 = require('../mocks/events/1.json')
const event2 = require('../mocks/events/2.json')
const event3 = require('../mocks/events/3.json')
const event4 = require('../mocks/events/4.json')
const event5 = require('../mocks/events/5.json')
const event6 = require('../mocks/events/6.json')
const event7 = require('../mocks/events/7.json')
const event8 = require('../mocks/events/8.json')
const event9 = require('../mocks/events/9.json')
const event10 = require('../mocks/events/10.json')
const event11 = require('../mocks/events/11.json')
const event12 = require('../mocks/events/12.json')
const event13 = require('../mocks/events/13.json')
const event14 = require('../mocks/events/14.json')
const event15 = require('../mocks/events/15.json')
const event16 = require('../mocks/events/16.json')
const event17 = require('../mocks/events/17.json')
const event18 = require('../mocks/events/18.json')
const event19 = require('../mocks/events/19.json')
const event20 = require('../mocks/events/20.json')
const event21 = require('../mocks/events/21.json')
const event22 = require('../mocks/events/22.json')

const events = [event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, event13, event14, event15, event16, event17, event18, event19, event20, event21, event22]
const categories = [category1, category2, category3, category4]
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

app.get('/events/category/:category', (request, response) => {
  const selectedEvents = events
    .filter(event => event.category === request.params.category)

  response.json(selectedEvents)
})

app.get('/events/:id', (request, response) => {
  // Parametre url à récupérer depuis notre client
  const event = 1 // Au lieu d'avoir une valeur en dure, on aura notre req.params
  const soutien = events.find(elem => elem.id === event)

  console.log(soutien)
  response.json(soutien)
})

app.get('/categories', (request, response) => {
  response.json(categories)
})

app.listen(3248, () => console.log("j'écoute sur le port 3248"))
