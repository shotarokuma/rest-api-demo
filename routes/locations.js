const router = require('express').Router();
const {postLocation,getLocation,getLocations} = require('./controllers/locationControllers.js');

router.get('/',getLocations);
router.get('/ID',getLocation);
router.post('/',postLocation);


module.exports = router;