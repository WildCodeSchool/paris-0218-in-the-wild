// Utilisation de Express
const express = require ('express');
const app = express();


// Définition de nos routes 
const usersRoutes = require('./routes/users')
const eventsRoutes = require ('./routes/events')
// Routes Users
app.use('/in-the-wild',usersRoutes)

// Routes Meetups
app.use('in-the-wild',eventsRoutes)

module.exports = app;