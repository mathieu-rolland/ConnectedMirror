var express = require('express');
var router = express.Router();

/* Custom  controllers */
var weatherController = require('../controllers/WeatherController');
var movieController   = require('../controllers/MovieController');
var mapsController   = require('../controllers/MapsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather' , weatherController.getActualWeather );
router.get('/weather/module_desc' , weatherController.getControllerParameter );

router.get('/movies' , movieController.getMovies );

router.get( '/maps' , mapsController.getMaps );

module.exports = router;
