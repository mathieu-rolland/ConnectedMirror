

var origin = new google.maps.LatLng( 48.1127054, -1.6518606);
var destination = new google.maps.LatLng( 48.132370, -1.638617 );

var myOptions = {
    zoom      : 5, // Zoom par défaut
    center    : origin, // Coordonnées de départ de la carte de type latLng 
    mapTypeId : google.maps.MapTypeId.TERRAIN, // Type de carte, différentes valeurs possible HYBRID, ROADMAP, SATELLITE, TERRAIN
    disableDefaultUI: true,
};

var mapsDom;
var direction;
var panel;

var init = function(){

    mapsDom = new google.maps.Map( $('.module_maps > .maps_panel')[0] , myOptions );

    direction = new google.maps.DirectionsRenderer({
        map   : mapsDom
    });

};

var calculate = function(){

        if(origin && destination){
            var request = {
                origin      : origin,
                destination : destination,
                travelMode  : google.maps.DirectionsTravelMode.DRIVING // Mode de conduite
            }
            var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
            directionsService.route(request, function(response, status){ // Envoie de la requête pour calculer le parcours
                if(status == google.maps.DirectionsStatus.OK){
                    direction.setDirections(response); // Trace l'itinéraire sur la carte et les différentes étapes du parcours
                    
                    //Display information on screen : 
                    $('.module_maps > .info > .duration').html( response.routes[0].legs[0].duration.text );
                    $('.module_maps > .info > .distance').html( response.routes[0].legs[0].distance.text );

                }
            });
        }
};

