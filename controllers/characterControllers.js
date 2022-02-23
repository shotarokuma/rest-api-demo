const postCharacter = (req, res) => {
  let newCharacter = new Character ({
    /////
    ///////
  });
  newCharacter.save()
    .then(result => {
      res.json({
        data: newCharacter,
      });
    })
    .catch(error => res.status(500).send(error));
}

const getCharacter = (res,req) =>{
    Character.find({'_id':req.params.id}).exec()
    .then(result => {
      res.json(result);
    })
    .catch(error => res.status(500).send(error));
}


const getCharacters = (res,req)=>{
    Character.find({}).exec()
    .then(results => {
      res.json(results);
    })
    .catch(error => res.status(500).send(error));
};


  module.exports ={
    postCharacter,
    getCharacter,
    getCharacters,
  }