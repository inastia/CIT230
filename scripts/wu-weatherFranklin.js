//populate City Pages with data from Underground Weather site
var weatherFranklin = new XMLHttpRequest();

weatherFranklin.open('GET', 'https://api.wunderground.com/api/15342b83d4c08511/conditions/q/MN/Franklin.json', true);
weatherFranklin.send();

weatherFranklin.onload = function() {
  var weatherInfo = JSON.parse(weatherFranklin.responseText);
  console.log(weatherInfo);

  document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;
  document.getElementById('w-icon').src = weatherInfo.current_observation.icon_url;
  document.getElementById('weatherString').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;
} //end of onload

var temperatureFranklin = new XMLHttpRequest();

temperatureFranklin.open('GET','https://api.wunderground.com/api/15342b83d4c08511/forecast/q/MN/Franklin.json', true);
temperatureFranklin.send();

temperatureFranklin.onload = function() {
  var temperatureInfo = JSON.parse(temperatureFranklin.responseText);
  console.log(temperatureInfo);

  document.getElementById('highT').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
  document.getElementById('lowT').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

}
