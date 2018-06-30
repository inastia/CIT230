//populate Greenville with data from Underground Weather site
var weatherGreenville = new XMLHttpRequest();

weatherGreenville.open('GET', 'https://api.wunderground.com/api/15342b83d4c08511/conditions/q/NC/Greenville.json', true);
weatherGreenville.send();

weatherGreenville.onload = function() {
  var weatherInfo = JSON.parse(weatherGreenville.responseText);
  console.log(weatherInfo);

  document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;
  document.getElementById('w-icon').src = weatherInfo.current_observation.icon_url;
  document.getElementById('weatherString').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;
} //end of onload
var temperatureFranklin = new XMLHttpRequest();

temperatureFranklin.open('GET','https://api.wunderground.com/api/15342b83d4c08511/forecast/q/NC/Greenville.json', true);
temperatureFranklin.send();

temperatureFranklin.onload = function() {
  var temperatureInfo = JSON.parse(temperatureFranklin.responseText);
  console.log(temperatureInfo);

  document.getElementById('highT').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
  document.getElementById('lowT').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

}
