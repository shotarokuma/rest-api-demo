const heroRouter  = require('express').Router();
const villainRouter  = require('express').Router();
const {getCharacter,getHeros,postHero,getVillains,postVillain} = require('../controllers/characterControllers.js');


heroRouter.get('/',getHeros);
heroRouter.get('/:id',getCharacter);
heroRouter.post('/',postHero);
villainRouter.get('/',getVillains);
villainRouter.get('/:id',getCharacter);
villainRouter.post('/',postVillain);


module.exports = heroRouter;
module.exports = villainRouter;