
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

    var hourKey = weatherResponse.current_weather.hour.replace(':','H');
    weatherResponse.current_weather.temperature = response.fcst_day_0.hourly_data[hourKey].TMP2m;

    return weatherResponse;
};