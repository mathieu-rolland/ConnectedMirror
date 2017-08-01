//Libraries :
var requestLib = require('request'); 
var weatherService = require('../../services/WeatherParserResponse');

//Local static variables
var WEATHER_SERVICE_URL = "http://www.prevision-meteo.ch/services/json/";
var WEATHER_SERVICE_LATITUDE_PARAM = "48.1119800";
var WEATHER_SERVICE_LONGITUDE_PARAM = "-1.6742900";
var WEATHER_SERVICE_CITY_PARAM = "Rennes";

//Get weather informations:
exports.getActualWeather = function( request , response )
{
 
    requestLib.get( WEATHER_SERVICE_URL + "lat=" + WEATHER_SERVICE_LATITUDE_PARAM + "lng=" + WEATHER_SERVICE_LONGITUDE_PARAM, 
        function(err, res, body){

            if( body !== undefined && body != null ) {
                var displayElement = weatherService.parseWeatherResponse( JSON.parse(body) );

                displayElement.title = "Météo du jour";
                displayElement.city_info.localisastion = WEATHER_SERVICE_CITY_PARAM;

                console.log( displayElement );
                response.render( 'index',  displayElement );
            }

        }
    );



    /*var renderVariables = { 
            title: 'Connected Mirror',
            localisation: 'Rennes' 
        };

    response.render( 'index', renderVariables );
    */
}
