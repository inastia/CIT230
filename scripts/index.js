//populate Home page with city info
var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var townInfo = request.response;
  showTowns(townInfo);
}

function showTowns(jsonObj) {
  var town = jsonObj['towns'];

for( var i = 0; i <town.length; i++){
  if (town[i].name == "Franklin" || town[i].name == "Springfield" || town[i].name == "Greenville" ){
  var myArticle = document.createElement(town[i].name);
  var myH3 = document.createElement('h3');
  var myH4 = document.createElement('h4');
  var myPara2 = document.createElement('p');
  var myPara3 = document.createElement('p');
  var myPara4 = document.createElement('p');
  var myList = document.createElement('p');

  myH3.textContent = town[i].name;
  myH4.textContent = town[i].motto;
  myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
  myPara3.textContent = 'Current Population: ' + town[i].currentPopulation;
  myPara4.textContent = 'Average Rainfall: ' + town[i].averageRainfall;
  myList.textContent = 'Events: ';

  var eventList = town[i].events;

  for (var j = 0; j < eventList.length; j++) {
    var listItem = document.createElement('ul');
    listItem.textContent = eventList[j];
    myList.appendChild(listItem);
  }

  myArticle.appendChild(myH3);
  myArticle.appendChild(myH4);
  myArticle.appendChild(myPara2);
  myArticle.appendChild(myPara3);
  myArticle.appendChild(myPara4);
  myArticle.appendChild(myList);

  section.appendChild(myArticle);
}}
}
