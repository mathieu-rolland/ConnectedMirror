
//On document ready :
$(function() {

    updateWeather();
    updateMovies();

});

var updateWeather = function(){

    $.get( '/weather' , function(data){

        $(".weather_module").removeClass('rotatein');
        $(".weather_module").addClass('rotateout');
        
        setTimeout( function(){
            $(".weather_module").remove();
            $('#modules').append( data );
            $(".weather_module").addClass('rotatein');
        } , 2000 );

    });

    setTimeout( updateWeather , 60*5000 );
    //setTimeout( updateWeather , 5 * 60 * 1000 );

};

var updateMovies = function(){

    $.get( '/movies' , function(data){
        
            setTimeout( function(){
                $(".module_movies").remove();
                $('#modules').append( data );
                //$(".movies").addClass('rotatein');
            } , 2000 );
    
        } );
    
        setTimeout( updateMovies , 60*5000 );
        //setTimeout( updateWeather , 5 * 60 * 1000 );
    

};