
//On document ready :
$(function() {

    updateWeather();

});

var updateWeather = function(){

    $.get( '/weather' , function(data){
        $(".weather_module").remove();
        $('#modules').append( data );
    } );
    setTimeout( updateWeather , 2000 );
};
