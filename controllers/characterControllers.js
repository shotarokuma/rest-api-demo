const Character = require('../models/Character.js');

const postHero = (req, res) => {
  let newCharacter = new Character({
      name:req.body.name,
      powers:req.body.powers,
      type:"hero",
      hp:req.body.hp
    });
  newCharacter.save()
    .then(result => {
      res.set('content-location',`/api/heros/${newCharacter._id}`);
      res.status(201).json({
        data: newCharacter,
        url:`/api/heros/${newCharacter._id}`
      });
    })
    .catch(error => res.status(500).send(error));
}

const postVillain = (req, res) => {
  let newCharacter = new Character({
      name:req.body.name,
      powers:req.body.powers,
      type:"villain",
      hp:req.body.hp
    });
  newCharacter.save()
    .then(result => {
      res.set('content-location',`/api/villains/${newCharacter._id}`);
      res.status(201).json({
        data: newCharacter,
        url:`/api/villains/${newCharacter._id}`
      });
    })
    .catch(error => res.status(500).send(error));
}

const getCharacter = async (req,res) =>{
    Character.find({'_id':req.params.id}).exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => res.status(500).send(error));
}


const getHeros = (req,res)=>{
    Character.findByType("hero").select("name _id").exec()
    .then(allHeroes => {
      res.status(200).json(allHeroes);
    })
    .catch(error => res.status(500).send(error));
};



const getVillains = (req,res)=>{
    Character.findByType("villain").select("name _id").exec()
    .then(allVillains => {
      res.status(200).json(allVillains);
    })
    .catch(error => res.status(500).send(error));
};



  module.exports ={
    getCharacter,
    getHeros,
    getVillains,
    postHero,
    postVillain,
  }