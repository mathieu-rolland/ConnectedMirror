var dateformat = require('dateformat');


exports.parseWeatherResponse = function( response ){

    var weatherResponse = {};

    weatherResponse.city_info = {
        sunrise: response.city_info.sunrise,
        sunset: response.city_info.sunset
    };

    weatherResponse.current_weather = {
        date: response.current_condition.date,
        hour: response.current_condition.hour,
        condition: response.current_condition.condition,
        maximal: response.fcst_day_0.tmax,
        minimal: response.fcst_day_0.tmin,
        image: response.fcst_day_0.icon_big
    };

    var hourKey = dateformat( Date() , 'H' ) + 'H00';

    var data;
    if( hourKey === '0H00' ){
        data = response.fcst_day_1;
    }else{
        data = response.fcst_day_0;
    }
    
    if( data.hourly_data[hourKey] != undefined ){
        weatherResponse.current_weather.temperature = data.hourly_data[hourKey].TMP2m;
    }

    return weatherResponse;
};