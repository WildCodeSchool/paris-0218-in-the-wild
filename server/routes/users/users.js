// Require du fichier de config
const router = require('../config')

// Afficher tous les users inscrits
router.get( "/users",(req,res,next) => {

    res.json(
        {
            "message" : "je suis une réponse"
        }
    )
})

// Afficher un user
router.get("/users/:userId",(req,res,next)=>{

  let user = req.params.userId

    res.send(`id user est ${user}`) // renvoi la réponse
})

// Insérer un nouvel user.
router.post("/users/sign-up",(req,res,next)=>{

    // Objet json test
    let user = {

        "firstname" : "Sammy",
        "lastname" : "kacemi",
        "mail" : "sammy@wcs.com"
    }

    // Test de la réponse
    res.json(`Bienvenue ${user.firstname} à In The Wild`)

})

// Modifier un user
router.put("/users/update",(req,res,next)=>{


})

module.exports = router


