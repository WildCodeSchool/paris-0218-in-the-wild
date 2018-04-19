const express = require('express')
// require des Mocks Boire un coup
const category1 = require('../mocks/categories/category1.json')
const category2 = require('../mocks/categories/category2.json')
const category3 = require('../mocks/categories/category3.json')
const eventBoire1 = require('../mocks/events/Boire/1.json')
const eventBoire2 = require('../mocks/events/Boire/2.json')
const eventBoire3 = require('../mocks/events/Boire/3.json')
const eventBoire4 = require('../mocks/events/Boire/4.json')
const eventBoire5 = require('../mocks/events/Boire/5.json')
const eventBoire6 = require('../mocks/events/Boire/6.json')

const boireEvents = [eventBoire1, eventBoire2, eventBoire3, eventBoire4, eventBoire5, eventBoire6]
const categories = [category1, category2, category3]
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

app.get('/categories', (request, response) => {
  response.json(categories)
})

app.listen(3248, () => console.log("j'écoute sur le port 3248"))
