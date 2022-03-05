const Location = require('../models/Location.js');

const postLocation = (req, res) => {
  let newLocation = new Location(req.body);
  newLocation.save()
  .then(result => {
      res.set('content-location',`/api/locations/${newLocation._id}`);
      res.status(201).json({
         data: newLocation,
         url: `/api/locations/${newLocation._id}`
      });
    })
    .catch(error => res.status(500).send(error));
}

const getLocation = (req,res) =>{
    Location.find({'_id':req.params.id}).exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => res.status(500).send(error));
}


const getLocations = (req,res)=>{
    Location.find({}).exec()
    .then(results => {
      res.status(200).json(results);
    })
    .catch(error => res.status(500).send(error));
};


  module.exports ={
    postLocation,
    getLocation,
    getLocations
  }