'use strict';

console.log('locations.js loaded');

var locations = [
  '1st and Pike'
  ,'SeaTac Airport'
  ,'Seattle Center'
  ,'Capitol Hill'
  ,'Alki'
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

function randCustomersEachHour(){
  var max = this.maxHourlyCustomers;
  var min = this.minHourlyCustomers;
  var startHoop = this.hoursOfOperation[0];
  var endHoop = this.hoursOfOperation[1];
  var customers = [];
  for(var i = 0; i < getEachHourOfOperation(startHoop,endHoop).length; i++){
    customers[i] = randCustomersPerHour(min,max);
  }
  return customers;
}

function randCookesEachHour(){
  var startHoop = this.hoursOfOperation[0];
  var endHoop = this.hoursOfOperation[1];
  var cookies = [];
  for(var i = 0; i < getEachHourOfOperation(start,end).length; i++){
    cookes[i] = this.customersEachHour[i] * this.avgCookiesPerSale;
  }
  return cookies;
}

var firstAndPike = {
  location: '1st and Pike'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,20] //right now HooP functions only works if you start ON the hour.  no opening at 8:30!
  ,minHourlyCustomers: 23
  ,maxHourlyCustomers: 65
  ,avgCookiesPerSale: 6.3
  ,customersEachHour: randCustomersEachHour()
  ,cookesEachHour: randCookesEachHour()
};
