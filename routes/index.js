const router = require('express').Router({mergeParams:true});

const characterRouter = require('./characters.js');
const locationRouter = require('./locations.js');


router.use('/heroes',characterRouter);
router.use('/villains',characterRouter);
router.use('/locations',locationRouter);

module.exports = router;