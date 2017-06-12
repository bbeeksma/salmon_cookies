'use strict';

console.log('locations.js loaded');

var locations = [
  '1st and Pike'
  ,'SeaTac Airport'
  ,'Seattle Center'
  ,'Capitol Hill'
  ,'Alki'
];

function getEachHourOfOperation(){ //oh noes only works with start/end hoops ON the hour.
  var startHoop = this.hoursOfOperation[0];
  var endHoop = this.hoursOfOperation[1];
  var eachHoop = [];
  var indexPos = 0;
  for(var i = startHoop; i <= endHoop; i++){
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
  var customers = [];
  for(var i = 0; i < this.eachHourOfOperation.length; i++){
    customers[i] = randCustomersPerHour(min,max);
  }
  return customers;
}

function randCookesEachHour(){
  var cookies = [];
  for(var i = 0; i < this.customersEachHour.length; i++){
    cookes[i] = this.customersEachHour[i] * this.avgCookiesPerSale;
  }
  return cookies;
}

var firstAndPike = {
  location: '1st and Pike'
  ,address: ''
  ,hoursOfOperation: [8,20] //right now HooP functions only works if you start ON the hour.  no opening at 8:30!
  ,minHourlyCustomers: ''
  ,maxHourlyCustomers: ''
  ,avgCookiesPerSale: ''
  ,eachHourOfOperation: getEachHourOfOperation()
  ,customersEachHour: randCustomersEachHour()
  ,cookesEachHour: randCookesEachHour()
};
