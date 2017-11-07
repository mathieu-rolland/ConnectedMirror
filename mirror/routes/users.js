var express = require('express');
var router = express.Router();
var Models = require( '../models' );

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list' , function( req , res , next ){
  
    Models.Personn.findAll().then( p => {
      res.send( p );
    });
});

module.exports = router;
