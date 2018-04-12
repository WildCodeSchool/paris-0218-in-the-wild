const express = require('express')
// require de nos Mocks
const eventBoire1 = require('../mocks/events/Boire/1.json')
const eventBoire2 = require('../mocks/events/Boire/2.json')
const eventBoire3 = require('../mocks/events/Boire/3.json')
const eventBoire4 = require('../mocks/events/Boire/4.json')
const eventBoire5 = require('../mocks/events/Boire/5.json')
const eventBoire6 = require('../mocks/events/Boire/6.json')

const boireEvents = [eventBoire1, eventBoire2, eventBoire3, eventBoire4, eventBoire5, eventBoire6]
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

app.get('/events/Boire', (request, response) => {
  response.json(boireEvents)
})

app.listen(3248, () => console.log("j'écoute sur le port 3248"))
