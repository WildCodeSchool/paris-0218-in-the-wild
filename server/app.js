// Utilisation de Express
const express = require('express')
const app = express()

// Définition de nos routes
const usersRoutes = require('./routes/users/users')
const eventsRoutes = require('./routes/events/events')
const livecodingRoutes = require('./routes/events/livecoding')
const userCrudRoutes = require('./routes/crud/users')

// Routes Crud
app.use('/in-the-wild', userCrudRoutes)
// Routes Users
app.use('/in-the-wild', usersRoutes)

// Routes events
app.use('/in-the-wild', eventsRoutes)

// Routes events de type livecoding
app.use('/in-the-wild/events', livecodingRoutes)

module.exports = app
