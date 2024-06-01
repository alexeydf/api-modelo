const db = require('../db/db');

class Modelo{

  async teste(req, res){
    try{
      res.status(200).json({msg: 'O server está OK!!'});
    }catch(err){
      console.log(err);
    }
  }
}

module.exports = new Modelo();