'use strict';

console.log('locations.js loaded');

var locations = [
  '1st and Pike'
  ,'SeaTac Airport'
  ,'Seattle Center'
  ,'Capitol Hill'
  ,'Alki'
];

function getEachHourOfOperation(start,end){ //oh noes only works with start/end hoops ON the hour. don't actually need this right now, but may be of use later
  var eachHoop = [];
  var indexPos = 0;
  for(var i = start; i <= end; i++){
    eachHoop[indexPos] = i;
    indexPos++;
  }
  console.log('eachHoop :: ' + eachHoop);
  return eachHoop;
}

function randCustomersPerHour(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randCustomersEachHour(minCust,maxCust,startHoop,endHoop){ //don't actually need this right now, but may be of use later
  var customers = [];
  for(var i = 0; i < (endHoop - startHoop); i++){
    customers[i] = randCustomersPerHour(minCust,maxCust);
  }
  console.log('customers :: ' + customers);
  return customers;
}

var firstAndPike = {
  location: '1st and Pike'
  ,address: '123 Seasame St. Someplace, IA'
  ,hoursOfOperation: [8,20] //right now HooP functions only works if you start ON the hour.  no opening at 8:30!
  ,minHourlyCustomers: 23
  ,maxHourlyCustomers: 65
  ,avgCookiesPerSale: 6.3

  ,randCookiesEachHour: function(){
    var minCust = this.minHourlyCustomers;
    var maxCust = this.maxHourlyCustomers;
    var startHoop = this.hoursOfOperation[0];
    var endHoop = this.hoursOfOperation[1];
    var cookies = [];
    for(var i = 0; i < (endHoop - startHoop); i++){
      cookies[i] = randCustomersPerHour(minCust,maxCust) * this.avgCookiesPerSale;
    }
    return cookies;
  }
};
