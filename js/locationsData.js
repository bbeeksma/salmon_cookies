'use strict';

console.log('locations.js loaded');

var locations = [
  firstAndPike
  ,SeaTacAirport
  ,SeattleCenter
  ,CapitolHill
  ,Alki
];

function getEachHourOfOperation(start,end){ //oh noes only works with start/end hoops ON the hour.
  var eachHoop = [];
  var indexPos = 0;
  for(var i = start; i <= end; i++){
    eachHoop[indexPos] = i;
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

var firstAndPike = {
  location: '1st and Pike'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,20] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
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
      this.cookiesSold[i] = this.customersEachHour[i] * this.avgCookiesPerSale;
    }
  }
};

var SeaTacAirport = {
  location: 'SeaTac Airport'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,20] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
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
      this.cookiesSold[i] = this.customersEachHour[i] * this.avgCookiesPerSale;
    }
  }
};

var SeattleCenter = {
  location: 'Seattle Center'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,20] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
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
      this.cookiesSold[i] = this.customersEachHour[i] * this.avgCookiesPerSale;
    }
  }
};

var CapitolHill = {
  location: 'Capitol Hill'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,20] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
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
      this.cookiesSold[i] = this.customersEachHour[i] * this.avgCookiesPerSale;
    }
  }
};

var Alki = {
  location: 'Alki'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,20] //right now HooP functions only work if you start ON the hour.  no opening at 8:30!
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
      this.cookiesSold[i] = this.customersEachHour[i] * this.avgCookiesPerSale;
    }
  }
};
