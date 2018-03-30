// Utilisation du package http-server
const http = require('http')
// Utilisatio de express depuis le fichier app.js
const app = require('./app')

// Déffinition du serveur
const port = 3000

// Définition du serveur
const server = http.createServer(app)

// Lancer le serveur
server.listen(port, () => console.log(`Let's work on est connecté sur le port ${port}`))
