'use strict';

console.log('sales.js loaded');

window.addEventListener('load', builtTableOnLoad);

var newLocation = document.getElementById('newLocation');
var newAddress = document.getElementById('newAddress');
var newOpenHour = document.getElementById('newOpenHour');
var newCloseHour = document.getElementById('newCloseHour');
var newMinHourlyCustomers = document.getElementById('newMinHourlyCustomers');
var newMaxHourlyCustomers = document.getElementById('newMaxHourlyCustomers');
var newAvgCookiesPerSale = document.getElementById('newAvgCookiesPerSale');
var createLocationButton = document.getElementById('createLocationButton');

createLocationButton.addEventListener('click', function(event){
  console.log('preventedSubmit');
  buildCookieStore();
  event.preventDefault();
});

function buildCookieStore(){
  var newCookieStore = new CookieStore(newLocation.value,newAddress.value,[newOpenHour.value,newCloseHour.value],newMinHourlyCustomers.value,newMaxHourlyCustomers.value,newAvgCookiesPerSale.value);
  console.log(newCookieStore);
}

function builtTableOnLoad(){
  buildHeader();
  var rowPosition = document.getElementById('cookie_sale_body'); //where do we want to put the data rows
  buildDataRows(rowPosition);
}

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
  var newElement = document.createElement('th'); //blank space
  var newTHPosition = document.getElementById('cookie_sale_head');
  newTHPosition.appendChild(newElement);
  for(var i = 0; i < getLongestHoop().length; i++){ //the hours
    var newElement = document.createElement('th');
    newElement.textContent = getLongestHoop()[i];
    var newTHPosition = document.getElementById('cookie_sale_head');
    newTHPosition.appendChild(newElement);
  }
  var newElement = document.createElement('th');// total header
  newElement.textContent = 'Total Cookies';
  var newTHPosition = document.getElementById('cookie_sale_head');
  newTHPosition.appendChild(newElement);
}

function buildDataRows(rowPosition){
  for(var i = 0; i < locations.length; i++){
    locations[i].renderRow(rowPosition);
  }
}
