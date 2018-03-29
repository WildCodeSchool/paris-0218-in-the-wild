// Utilisation de Express
const express = require ('express');

// Utilisation du routeur Express
const router = express.Router();

// Indique les headers à utiliser pour nos en-têtes
router.use((req, res, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })


// Homepage du site pour charger tous les meetups en cours
router.get( "/",(req,res,next) => {

    res.json(
        {
            "message" : "je suis une eéponse"
        }   
    )
})
  

