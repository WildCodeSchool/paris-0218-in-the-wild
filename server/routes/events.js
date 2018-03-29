// Utilisation de express
const router = require('./config')


// Afficher ltous es meetups
router.get('/meetups',(req,res,next)=>{

  res.json({"message":"je suis une get method"})

})

//Afficher un meetup
router.get('/:meetuId',(req,res,next)=>{


})

module.exports = router
