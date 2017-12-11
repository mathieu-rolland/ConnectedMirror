var express = require('express');
var router = express.Router();

/* Custom  controllers */
var weatherController = require('../controllers/WeatherController');
var movieController   = require('../controllers/MovieController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather' , weatherController.getActualWeather );
router.get('/weather/module_desc' , weatherController.getControllerParameter );

router.get('/movies' , movieController.getMovies );

module.exports = router;
