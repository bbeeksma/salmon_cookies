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

function sellAllTheCookies(){
  for(var t = 0; t < locations.length; t++){
    locations[t].sellRandCookies();
  }
}

var firstAndPike = {
  location: '1st and Pike'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,21] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
  ,minHourlyCustomers: 23
  ,maxHourlyCustomers: 65
  ,avgCookiesPerSale: 6.3
  ,eachHourOfOperation: []
  ,customersEachHour: []
  ,cookiesSold: []
  ,sellRandCookies: function(){
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
  }
};

var seaTacAirport = {
  location: 'SeaTac Airport'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,21] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
  ,minHourlyCustomers: 3
  ,maxHourlyCustomers: 24
  ,avgCookiesPerSale: 1.2
  ,eachHourOfOperation: []
  ,customersEachHour: []
  ,cookiesSold: []
  ,sellRandCookies: function(){
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
  }
};

var seattleCenter = {
  location: 'Seattle Center'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,21] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
  ,minHourlyCustomers: 11
  ,maxHourlyCustomers: 38
  ,avgCookiesPerSale: 3.7
  ,eachHourOfOperation: []
  ,customersEachHour: []
  ,cookiesSold: []
  ,sellRandCookies: function(){
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
  }
};

var capitolHill = {
  location: 'Capitol Hill'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,21] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
  ,minHourlyCustomers: 20
  ,maxHourlyCustomers: 38
  ,avgCookiesPerSale: 2.3
  ,eachHourOfOperation: []
  ,customersEachHour: []
  ,cookiesSold: []
  ,sellRandCookies: function(){
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
  }
};

var alki = {
  location: 'Alki'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,21] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
  ,minHourlyCustomers: 2
  ,maxHourlyCustomers: 16
  ,avgCookiesPerSale: 4.6
  ,eachHourOfOperation: []
  ,customersEachHour: []
  ,cookiesSold: []
  ,sellRandCookies: function(){
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
  }
};

var locations = [
  firstAndPike
  ,seaTacAirport
  ,seattleCenter
  ,capitolHill
  ,alki
];
