'use strict';

//global variables
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
  this.total = 0;
  storeInfo.push(this);
}

//Method using random number to calculate Customers Per Hour
Store.prototype.randomCustomers = function() {
  var customersPH = (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  // console.log('customerph:', customersPH);
  return customersPH;
};

//Method to calculate Cookies Per Hour
Store.prototype.calcCookiesPerHour = function() {
  for (var i in hours) {
    // console.log('randomCustomers:', this.randomCustomers());
    var hourlyCookies = this.randomCustomers();
    // console.log('HC:', hourlyCookies);
    this.cookiesPerHour.push(Math.floor(hourlyCookies * this.avgCookieSale));
    // console.log('array:', this.cookiesPerHour);
  }
};

// Store.prototype.calcTotal = function() {
//   var sum = 0;
//   console.log('initSum:', sum);
//   for (var i = 0; i < hours.length; i++){
//     sum += this.total[i];
//     console.log('LoopsSum:', sum);
//   }
//   console.log('FinalSum:',sum);
//   return sum;
// };

// Method to Render function to create TD elements for table in HTML
Store.prototype.render = function(){
  // create tr element for the object
  var trEl = document.createElement('tr');
  //create and append td element to above tr for the Location Names needed on for Column
  var tdEl1 = document.createElement('td');
  tdEl1.textContent = this.location;
  trEl.appendChild(tdEl1);
  var sum = 0;
  //Loop needed to populate 2nd and follow on td elements for the above tr in table
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    // give that element content
    tdEl.textContent = this.cookiesPerHour[i];
    // console.log(this.cookiesPerHour);
    // append tha element to the right spot in the DOM
    trEl.appendChild(tdEl);
    sum += this.total[i];
    console.log('Loopsum:', sum);

  };

  // sum += this.total[i];
  console.log('Finalsum:', sum);
  //Add total for each store to Daily Totals Column
  tdEl = document.createElement('td');
  tdEl.textContent = sum;
  trEl.appendChild(tdEl);

  //add this tr to the table!
  salesTable.appendChild(trEl);
};

function makeHeaderRow() {
  // create tr
  var trEl = document.createElement('tr');

  for (var i = -1; i < hours.length; i++) {
    // create td
    var thEl = document.createElement('th');
    // give td content (Name for an individual cat)
    thEl.textContent = hours[i];
    // console.log(i);
    // append the td
    trEl.appendChild(thEl);
  }
  //create and append th element to above tr for the last td to 'Display Totals'
  var thEl = document.createElement('td');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);

  // append the tr to the table
  salesTable.appendChild(trEl);
}

function saleRows() {
  for(var i = 0; i < storeInfo.length; i++){
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
// pike.calcTotal();
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
console.table(storeInfo);
// console.log(pike.cookiesPerHour)
// test();
// console.table(Store.cookiesPerHour());
