const Location = require('../models/Location.js');

const postLocation = (req, res) => {
  let newLocation = new Location({
   name:req.body.name,
   description:req.body.description
  });
  newLocation.save()
  .then(result => {
      res.set('content-location',`/api/locations/${newLocation._id}`);
      res.json({
         data: newLocation,
         url: `/api/locations/${newLocation._id}`
      });
    })
    .catch(error => res.status(500).send(error));
}

const getLocation = (res,req) =>{
    Location.find({'_id':req.params.id}).exec()
    .then(result => {
      res.json(result);
    })
    .catch(error => res.status(500).send(error));
}


const getLocations = (res,req)=>{
    Location.find({}).exec()
    .then(results => {
      res.json(results);
    })
    .catch(error => res.status(500).send(error));
};


  module.exports ={
    postLocation,
    getLocation,
    getLocations
  }