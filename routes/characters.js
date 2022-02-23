const router = require('express').Router();
const {getCharacter,getCharacters,postCharacter} = require('./controllers/characterControllers.js');


router.get('/',getCharacters);
router.get('/:id',getCharacter);
router.post('/',postCharacter);


module.exports = router;