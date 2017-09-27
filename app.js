'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];


var storeInfo = [];

var salesTable = document.getElementById('sales');


//CONSTRUCTOR FUNCTION
function Store(location, minCust, maxCust, avgCookieSale) {

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];
  storeInfo.push(this);

  // console.log('TEST');
  // console.log(storeInfo[0]);
}

Store.prototype.randomCustomers = function() {
  var customersPH = (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  // console.log('customerph:', customersPH);
  return customersPH;
};

//cookies per Hour
Store.prototype.calcCookiesPerHour = function() {
  for (var i in hours) {
    // console.log('randomCustomers:', this.randomCustomers());
    var hourlyCookies = this.randomCustomers();
    // console.log('HC:', hourlyCookies);
    this.cookiesPerHour.push(Math.floor(hourlyCookies * this.avgCookieSale));
    // console.log('array:', this.cookiesPerHour);
  }
};

//Calc Total Cookies
// Store.prototype.totalCookies = function() {
//   var sum = 0;
//   for (var i = 0; i < hours.length; i++){
//     sum += this.cookiesPerHour[i];
//   }
//   return sum;
// };

// Render function to create LISTS in HTML
Store.prototype.render = function(){

  var trEl = document.createElement('tr');

  for (var i in hours) {
    var tdEl = document.createElement('td');
    // give that element content
    tdEl.textContent = this.cookiesPerHour[i];
    // console.log(this.cookiesPerHour);
    // append tha element to the right spot in the DOM
    trEl.appendChild(tdEl);
  }
  // tdEl.textContent = storeInfo.location;
  // console.log(storeInfo.location);
  // trEl.appendChild(tdEl);
  salesTable.appendChild(trEl);
  // liEl = document.createElement('li');
  // liEl.textContent = 'Total: ' + this.totalCookies() + ' cookies';
  // alkiUl = document.getElementById('alkiTotal');
  // alkiUl.appendChild(liEl);
};

function makeHeaderRow() {
  // create tr
  var trEl = document.createElement('tr');

  for (var i = 0; i < hours.length; i++) {
    // create td
    var thEl = document.createElement('th');
    // give td content (Name for an individual cat)
    thEl.textContent = hours[i];
    // append the td
    trEl.appendChild(thEl);
  }
  // append the tr to the table
  salesTable.appendChild(trEl);
}

function saleRows() {
  for(var i in storeInfo){
    storeInfo[i].render();
  }
}


// Store.prototype.randomCustomers
//   //random customers per hour
//   this.randomCustomers = function() {
//     var customersPH = (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//     customersPerHour.push(this.customersPH);
//     console.log(customersPH);
//     return customersPH;
//   };

var pike = new Store('1st and Pike', 23, 65, 6.3);
pike.calcCookiesPerHour();
var seaTac = new Store('SeaTac', 24, 65, 1.2);
seaTac.calcCookiesPerHour();
var seattleCenter = new Store('Seattle Center', 38, 65, 3.7);
seattleCenter.calcCookiesPerHour();
var capHill = new Store('Capitol Hill', 38, 65, 2.3);
capHill.calcCookiesPerHour();
var alki = new Store('Alki', 23, 16, 4.6);
alki.calcCookiesPerHour();

makeHeaderRow();
saleRows();
// console.table(storeInfo);
// console.log(pike.cookiesPerHour)
// test();
// console.table(Store.cookiesPerHour());
