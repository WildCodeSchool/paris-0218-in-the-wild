const express = require('express')

// require de nos Mocks //
const event1 = require('../mocks/events/1.json')
const event2 = require('../mocks/events/2.json')

const events = [event1, event2]

console.log(event1.id)

// const server = http.createServer((request, response) => {//
// console.log("j'ai une requête")//
// response.end("ok")//
// })//
// server.listen(3247, () => console.log("j'écoute sur le port 3247"))//

const app = express()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (request, response) => {
  response.send('Ok')
})

app.get('/events', (request, response) => {
  response.json(events)
})

app.listen(3248, () => console.log("j'écoute sur le port 3247"))

// Création des routes //

app.get('/', (request, response) => {
  response.send('Ok')
})

app.get('/events', (request, response) => {
  response.json(events)
})




