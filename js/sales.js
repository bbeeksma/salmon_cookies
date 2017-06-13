'use strict';

console.log('sales.js loaded');

buildHeader();
var rowPosition = document.getElementById('cookie_sale_body'); //where do we want to put the data rows
buildDataRows(rowPosition);

function getLongestHoop(){ //grab the longest hoop for header
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

function buildDataRows(rowPosition){
  for(var i = 0; i < locations.length; i++){
    locations[i].renderRow(rowPosition);
  }
}
