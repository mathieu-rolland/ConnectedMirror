
//On document ready :
$(function() {

    $.get( '/weather' , function(data){
        console.log(data);
        $('#modules').html( data );
    } );

});
