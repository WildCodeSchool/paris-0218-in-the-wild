// Utilisation de Express
const express = require('express')

// Utilisation du routeur Express
const router = express.Router()

// Indique les headers à utiliser pour nos en-têtes
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Exportation du module pour une utilisation dans nos routes
module.exports = router
