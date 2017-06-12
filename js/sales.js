'use strict';

console.log('sales.js loaded');

console.log(locations);

function sellAllTheCookies(){
  for(var t = 0; t < locations.length; t++){
    locations[t].sellRandCookies();
  }
}

sellAllTheCookies();

for(var i = 0; i < locations.length; i++){
  var newHeader = document.createElement('h2');
  var newText = document.createTextNode(locations[i].location);
  newHeader.appendChild(newText);
  var position = document.getElementsByTagName('body')[0];
  position.appendChild(newHeader);
  var newUl = document.createElement('ul');
  var ulPosition = document.getElementsByTagName('h2')[i];
  ulPosition.appendChild(newUl);
  for(var j = 0; j < locations[i].eachHourOfOperation.length; j++){
    var textString = 'time: ' + locations[i].eachHourOfOperation[j] + ' :: cookies: ' + locations[i].cookiesSold[j];
    var newLi = document.createElement('li');
    var newLiText = document.createTextNode(textString);
    newLi.appendChild(newLiText);
    var liPosition = document.getElementsByTagName('ul')[i];
    liPosition.appendChild(newLi);
  }
}
