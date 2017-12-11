//Libraries :
var requestLib = require('request'); 

var movieService = require('../services/MovieService.js');

const MEDIATHEQUE_WS_MOVIES="http://vps291163.ovh.net:8989/movies/my-movies/db/";
const MEDIATHEQUE_WS_LOGIN="http://vps291163.ovh.net:8989/user/login";

const USER='Mathieu';
const PASSWORD='';

exports.getMovies = function( request , response  )
{
    
    requestLib.debug = true;

    var optionsLogin = {
        url: MEDIATHEQUE_WS_LOGIN,
        headers: {
          'User-Agent': 'nodejs',
          'Content-Type':'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            name: USER , 
            password: PASSWORD 
        })
      };    

    requestLib.post ( optionsLogin , function( err, res , body ){
        
        var token = movieService.getToken( err, res, JSON.parse(body) );
        console.log("Token fetched : " + token);

        if( token ){
            
            var options = {
                url: MEDIATHEQUE_WS_MOVIES,
                headers: {
                    'User-Agent': 'nodejs',
                    'X-Access-Token': token
                }
            }

            requestLib.get( options , function( err , res, body ){
                var data = JSON.parse(body);
                var result = movieService.getLatestAddedMovies( err , res, data);
                response.render( 'fragment/movies' , {movies : result} );
            });

        }

    });
    
};


