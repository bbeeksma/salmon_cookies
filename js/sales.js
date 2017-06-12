'use strict';

console.log('sales.js loaded');

console.log(locations);

for(var i = 0; i < locations.length; i++){
  var newHeader = document.createElement('h2');
  var newText = document.createTextNode(locations[i].location);
  newHeader.appendChild(newText);
  var position = document.getElementsByTagName('body')[0];
  position.appendChild(newHeader);
  var newUl = document.createElement('ul');
  var ulPosition = document.getElementsByTagName('h2')[i];
  ulPosition.appendChild(newUl);
}
