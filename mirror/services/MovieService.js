
const MAX_NB_MOVIES = 6;

exports.getToken = function( error , response, body )
{
    
    if( response && response.statusCode == 200 ){
        console.log ( "Login to mediatheque WS Successfull" + body.token );
        return body.token;
    }else if ( response && response.statusCode == 403 ) {
        console.log ( "Failed to login to mediatheque WS..." );
        return null;
    }else{
        console.log("Unknown status");
        return null;
    }

};

exports.getLatestAddedMovies = function( err , response, body ){

    var mostRecentMovies = [];

    if( response && response.statusCode == 200 ){

        if( body.length <= 0 ){
            console.log("No movies found");
            return null;
        }

        body.sort( function ( a , b ){
            return b.lastSynchronizedDate - a.lastSynchronizedDate;
        });

        for( index in body )
        {
            
            var movie = body[index];

            if( mostRecentMovies.length < MAX_NB_MOVIES ){
                mostRecentMovies.push( movie );
            }else{
                break;
            }

        }

        return mostRecentMovies;

    };

};

