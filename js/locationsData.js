'use strict';

console.log('locations.js loaded');

var locations = [
  '1st and Pike'
  ,'SeaTac Airport'
  ,'Seattle Center'
  ,'Capitol Hill'
  ,'Alki'
];

function getEachHourOfOperation(){
  //do stuff here
}

function randCustomersPerHour(){
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
}

function cookiesSold(){
  return randCustomersPerHour() * this.avgCookiesPerSale;
}

function randCustomersEachHour(){
  //do a thing here
}

function randCookesEachHour(){
  //do a thing here
}

var firstAndPike = {
  location: '1st and Pike'
  ,address: ''
  ,hoursOfOperation: [8,20]
  ,minHourlyCustomers: ''
  ,maxHourlyCustomers: ''
  ,avgCookiesPerSale: ''
  ,eachHourOfOperation: []
  ,customersEachHour: randCustomersEachHour()
  ,cookesEachHour: randCookesEachHour()
};
