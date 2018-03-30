// Require du fichier de config
const router = require('../config')

// Créer un user
router.post('/sign-in', (req, res, next) => {

  // Réupérer données du formulaires fetch méthod post avec en paramétre notre objet des données user
  // Contrôler les champs.
  // L'insérer dans notre fichier mock ou en db
})

// Consulter tous les users
router.get('/users', (req, res, next) => {
  res.json()
})

// Consulter un user
router.get('/:userId', (req, res, next) => {
  let user = req.params.userId

  res.json()
})

// Modifier un user
router.post('/my-profil', (req, res, next) => {

  // Réupérer données du formulaires fetch méthod post avec en paramétre notre objet des données user
  // Contrôler les champs.
  // L'insérer dans notre fichier mock ou en db

})

module.exports = router
