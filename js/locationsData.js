'use strict';

console.log('locations.js loaded');

function floatSux(float){
  var decimalTens = Math.round(float * 10) / 10;
  return decimalTens;
}

function convertTimeToTwelveHr(time){
  var twelveHrTime;
  if(time > 12){
    twelveHrTime = '' + (time - 12) + 'pm';
  }
  else if (time < 12 && time !== 0){
    twelveHrTime = '' + time + 'am';
  }
  else if (time === 12){
    twelveHrTime = '' + time + 'pm';
  }
  else{
    twelveHrTime = '12am';
  }
  return twelveHrTime;
}

function getEachHourOfOperation(start,end){ //oh noes only works with start/end hoops ON the hour.
  var eachHoop = [];
  var indexPos = 0;
  for(var i = start; i <= end; i++){
    eachHoop[indexPos] = convertTimeToTwelveHr(i);
    indexPos++;
  }
  return eachHoop;
}

function randCustomersPerHour(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randCustomersEachHour(minCust,maxCust,startHoop,endHoop){
  var customers = [];
  for(var i = 0; i < (endHoop - startHoop); i++){
    customers[i] = randCustomersPerHour(minCust,maxCust);
  }
  return customers;
}

function CookieStore(location, address, hoursOfOperation, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale, eachHourOfOperation, customersEachHour, cookiesSold){
  this.location = location;
  this.address = address;
  this.hoursOfOperation = hoursOfOperation || [8,21];
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.eachHourOfOperation = eachHourOfOperation || [];
  this.customersEachHour = customersEachHour || [];
  this.cookiesSold = cookiesSold || [];

  this.sellRandCookies = function(){
    var minCust = this.minHourlyCustomers;
    var maxCust = this.maxHourlyCustomers;
    var startHoop = this.hoursOfOperation[0];
    var endHoop = this.hoursOfOperation[1];
    var customersThisHour = [];
    for(var i = 0; i < (endHoop - startHoop); i++){
      this.eachHourOfOperation[i] = getEachHourOfOperation(startHoop,endHoop)[i];
      this.customersEachHour[i] = randCustomersEachHour(minCust,maxCust,startHoop,endHoop)[i];
      this.cookiesSold[i] = floatSux(this.customersEachHour[i] * this.avgCookiesPerSale);
    }
  };
}

var firstAndPike = new CookieStore('1st and Pike','123 Seasame St. Someplace,IA',[8,21],23,65,6.3);
var seaTacAirport = new CookieStore('SeaTac Airport','123 Seasame St. Someplace,IA',[8,21],3,24,1.2);
var seattleCenter = new CookieStore('Seattle Center','123 Seasame St. Someplace,IA',[8,21],11,38,3.7);
var capitolHill = new CookieStore('Capitol Hill','123 Seasame St. Someplace,IA',[8,21],20,38,2.3);
var alki = new CookieStore('Alki','123 Seasame St. Someplace,IA',[8,21],2,16,4.6);

var locations = [
  firstAndPike
  ,seaTacAirport
  ,seattleCenter
  ,capitolHill
  ,alki
];

function sellAllTheCookies(){
  for(var t = 0; t < locations.length; t++){
    locations[t].sellRandCookies();
  }
}
