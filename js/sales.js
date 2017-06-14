'use strict';

console.log('sales.js loaded');

window.addEventListener('load', builtTableOnLoad);

var newCookieStore = {};
var newLocation = document.getElementById('newLocation');
var newAddress = document.getElementById('newAddress');
var newOpenHour = document.getElementById('newOpenHour');
var newCloseHour = document.getElementById('newCloseHour');
var newMinHourlyCustomers = document.getElementById('newMinHourlyCustomers');
var newMaxHourlyCustomers = document.getElementById('newMaxHourlyCustomers');
var newAvgCookiesPerSale = document.getElementById('newAvgCookiesPerSale');
var createLocationButton = document.getElementById('createLocationButton');

createLocationButton.addEventListener('click', function(event){
  buildCookieStore();
  buildRowForNewCookieStore();
  event.preventDefault();
});

function buildCookieStore(){
  newCookieStore = new CookieStore(
    newLocation.value
    ,newAddress.value
    ,[parseInt(newOpenHour.value),parseInt(newCloseHour.value)]
    ,parseInt(newMinHourlyCustomers.value)
    ,parseInt(newMaxHourlyCustomers.value)
    ,parseFloat(newAvgCookiesPerSale.value)
  );
  console.log(newCookieStore);
}

function buildRowForNewCookieStore(){
  var rowPosition = document.getElementById('cookie_sale_body'); //where do we want to put the data rows
  newCookieStore.renderRow(rowPosition);
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
