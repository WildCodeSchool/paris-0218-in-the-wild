// Utilisation de express
const router = require('../config')

// Afficher tous les events
router.get('/events', (req, res, next) => {
  res.json({'message': 'je suis une get method'})
})

// Afficher un meetup
router.get('/:eventId', (req, res, next) => {

})

module.exports = router
