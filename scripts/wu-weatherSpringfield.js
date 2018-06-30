//populate Springfield with data from Underground Weather site
var weatherSpringfield = new XMLHttpRequest();

weatherSpringfield.open('GET', 'https://api.wunderground.com/api/15342b83d4c08511/conditions/q/MO/Springfield.json', true);
weatherSpringfield.send();

weatherSpringfield.onload = function() {
  var weatherInfo = JSON.parse(weatherSpringfield.responseText);
  console.log(weatherInfo);

  document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;
  document.getElementById('w-icon').src = weatherInfo.current_observation.icon_url;
  document.getElementById('weatherString').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;
} 
var temperatureFranklin = new XMLHttpRequest();

temperatureFranklin.open('GET','https://api.wunderground.com/api/15342b83d4c08511/forecast/q/MO/Springfield.json', true);
temperatureFranklin.send();

temperatureFranklin.onload = function() {
  var temperatureInfo = JSON.parse(temperatureFranklin.responseText);
  console.log(temperatureInfo);

  document.getElementById('highT').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
  document.getElementById('lowT').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

}
