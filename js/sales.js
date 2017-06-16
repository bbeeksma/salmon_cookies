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
  if(breakOnEmpty()){
    alert('Please fill in the Location and Address fields.');
    return;
  }
  buildCookieStore();
  buildRowForNewCookieStore();
  event.preventDefault();
});

function breakOnEmpty(){
  if(!newLocation.value || !newAddress.value)
    return true;
}

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
  var newBlank = document.createElement('th');
  var newTHPosition = document.getElementById('cookie_sale_head');
  newTHPosition.appendChild(newBlank);
  for(var i = 0; i < getLongestHoop().length; i++){
    var newHour = document.createElement('th');
    newHour.textContent = getLongestHoop()[i];
    newTHPosition.appendChild(newHour);
  }
  var newTotal = document.createElement('th');
  newTotal.textContent = 'Total Cookies';
  newTHPosition.appendChild(newTotal);
}

function buildDataRows(rowPosition){
  for(var i = 0; i < locations.length; i++){
    locations[i].renderRow(rowPosition);
  }
}
