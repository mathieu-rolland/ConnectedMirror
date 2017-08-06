
//On document ready :
$(function() {

    updateWeather();

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

    } );

    setTimeout( updateWeather , 60*5000 );
    //setTimeout( updateWeather , 5 * 60 * 1000 );

};