var express = require('express');
var router = express.Router();
var weatherController = require('../controllers/WeatherController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather' , weatherController.getActualWeather );

module.exports = router;
