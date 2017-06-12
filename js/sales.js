'use strict';

console.log('sales.js loaded');

for(var i = 0; i < locations.length; i++){
  var newHeader = document.createElement('h2');
  var newText = document.createTextNode(locations[i].location);
  newHeader.appendChild(newText);
  var position = document.getElementsByTagName('body')[0];
  position.appendChild(newHeader);
}
