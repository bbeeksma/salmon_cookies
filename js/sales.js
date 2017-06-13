'use strict';

console.log('sales.js loaded');

console.log(locations);

sellAllTheCookies(); //generates the random cookie values on the objects

function getLongestHoop(){
  var LongestLocationHoop;
  for(var i = 0; i < locations.length; i++){
    if (!LongestLocationHoop || locations[i].eachHourOfOperation.length > LongestLocationHoop.length){
      LongestLocationHoop = locations[i].eachHourOfOperation;
    }
  }
  return LongestLocationHoop;
}

function buildHeader(){
  for(var i = 0; i < getLongestHoop().length; i++){
    var newElement = document.createElement('th');
    newElement.textContent = getLongestHoop()[i];
    var newTHPosition = document.getElementById('cookie_sale_head');
    newTHPosition.appendChild(newElement);
  }
}

/*
for(var i = 0; i < locations.length; i++){
  var newHeader = document.createElement('h2');
  var newText = document.createTextNode(locations[i].location);
  newHeader.appendChild(newText);
  var position = document.getElementsByTagName('body')[0];
  position.appendChild(newHeader);
  var newUl = document.createElement('ul');
  var ulPosition = document.getElementsByTagName('body')[0];
  ulPosition.appendChild(newUl);
  for(var j = 0; j < locations[i].eachHourOfOperation.length; j++){
    var textString = '' + locations[i].eachHourOfOperation[j] + ': ' + locations[i].cookiesSold[j] + ' cookies';
    var newLi = document.createElement('li');
    var newLiText = document.createTextNode(textString);
    newLi.appendChild(newLiText);
    var liPosition = document.getElementsByTagName('ul')[i];
    liPosition.appendChild(newLi);
  }
}
*/
