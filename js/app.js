'use strict';

//global variables
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
// var storeInfo = [];
// var salesTable = document.getElementById('sales');

//variables for event listening
// var dataForm = document.getElementById('data-form');

//Sams's code
Store.storeInfo = [];
Store.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; //
Store.salesTable = document.getElementById('sales');
Store.dataForm = document.getElementById('data-form');


//CONSTRUCTOR FUNCTION
function Store(location, minCust, maxCust, avgCookieSale) {

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.customersPerHour = []; //sams code example
  this.cookiesPerHour = [];
  this.dailySales = 0;
  Store.storeInfo.push(this);
  this.calcCustomersPerHour();
  this.calcCookiesPerHour(); //sams code example
}

//Method using random number to calculate Customers Per Hour
Store.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < Store.hours.length; i++){
    // console.log('customersPH: ',this.customersPerHour);
    // console.log('random', (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    // this.customersPerHour.push(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    // console.log('customersPH 2: ',this.customersPerHour);
  }
};

//Method to calculate Cookies Per Hour
Store.prototype.calcCookiesPerHour = function() {
  // console.log('CustomersPH: ',this.customersPerHour);
  // console.log('CPH 1 : ',this.cookiesPerHour);
  // this.calcCustomersPerHour();
  this.dailySales = 0;
  for (var i = 0; i < Store.hours.length; i++) {
    // console.log('CPH 2 : ',this.customersPerHour);
    var eachHour = (Math.floor(this.customersPerHour[i] * this.avgCookieSale));
    // console.log('AVG C : ',this.avgCookieSale);
    // console.log('eachhour : ',eachHour);
    // console.log('CustomersPH 3 : ',this.customersPerHour);
    this.cookiesPerHour.push(eachHour);
    // console.log('CPH final : ',this.cookiesPerHour);
    this.dailySales += eachHour;
    // console.log('array:', this.cookiesPerHour);
  }
};

// Method to Render function to create TD elements for table in HTML
Store.prototype.render = function() {

  //SAM has a helper function creating the new elements
  // create tr element for the object
  var trEl = document.createElement('tr');
  //create and append td element to above tr for the Location Names needed on for Column
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  //Loop needed to populate 2nd and follow on td elements for the above tr in table
  for (var i = 0; i < Store.hours.length; i++) {
    var tdEl = document.createElement('td');
    // give that element content
    tdEl.textContent = this.cookiesPerHour[i];
    // console.log(this.cookiesPerHour);
    // append tha element to the right spot in the DOM
    trEl.appendChild(tdEl);
  }

  //Add dailySales for each store to Daily Totals Column
  thEl = document.createElement('th');// could do th for styling purposes
  thEl.textContent = this.dailySales;
  trEl.appendChild(thEl);

  //add this tr to the table!
  Store.salesTable.appendChild(trEl);
};


//Function for Event Handler of New Data Submission
Store.handleNewStoreEntry = function(event) {
  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

  // Validation to prevent empty form fields
  if (!event.target.location.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookieSale.value) {
    return alert('Fields cannot be empty!');
  }

  var newLoc = event.target.location.value;
  var newMin = parseInt(event.target.minCust.value);
  var newMax = parseInt(event.target.maxCust.value);
  var newAvg = parseInt(event.target.avgCookieSale.value);

  for (var i = 0; i < Store.storeInfo.length; i++){
    if(newLoc === Store.storeInfo[i].location){
      //reassign the starting properties
      Store.storeInfo[i].minCust = newMin;
      Store.storeInfo[i].maxCust = newMax;
      Store.storeInfo[i].avgCookieSale = newAvg;

      //resetting calculations
      Store.storeInfo[i].customersPerHour = [];
      Store.storeInfo[i].cookiesPerHour = [];
      Store.storeInfo[i].dailySales = 0;

      //calculating new results
      Store.storeInfo[i].calcCookiesPerHour();
      // document.getElementById('data-form').reset();
      event.target.location.value = null;
      event.target.minCust.value = null;
      event.target.maxCust.value = null;
      event.target.avgCookieSale.value = null;
      Store.cookiesTotalRender();
      console.log('GEET HERE TOO');
      return;
    }
  }
  new Store(newLoc, newMin, newMax, newAvg);
};



//HELPER FUNCTIONS
//function to draw header row
Store.makeHeaderRow = function() {
  // create tr
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);

  //for loop to create all the data td's
  for (var i = 0; i < Store.hours.length; i++) {
    // create td
    thEl = document.createElement('th');
    // give td content (Name for an individual cat)
    thEl.textContent = Store.hours[i];
    // console.log(i);
    // append the td
    trEl.appendChild(thEl);
  }
  //create and append th element to above tr for the last td to 'Display Totals'
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);

  // append the tr to the table
  Store.salesTable.appendChild(trEl);
};

Store.makeHourlyRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  // var = allTotals = 0;
  var hourlyTotals = 0;

  for (var i = 0; i < Store.hours.length; i++) {
    hourlyTotals = 0;
    for (var j in Store.storeInfo.length) {
      hourlyTotals += Store.storeInfo[j].cookiesPerHour[i];
      // allTotals += Store.storeInfo[j].cookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotals;
    trEl.appendChild(thEl);
  }
};

//function to calculate cookies per hour, calculate total and render
Store.cookiesTotalRender = function() {
  Store.salesTable.innerHTML = '';
  Store.makeHeaderRow();
  // console.log(Store.storeInfo.length);

  for (var i = 0; i < Store.storeInfo.length; i++){
    // console.log(Store.storeInfo.length);
    // console.log(Store.storeInfo[i]);
    Store.storeInfo[i].render();
  }
  // console.log('Get to THIS ROW!');
  Store.makeHourlyRow();
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 24, 65, 1.2);
new Store('Seattle Center', 38, 65, 3.7);
new Store('Capitol Hill', 38, 65, 2.3);
new Store('Alki', 23, 16, 4.6);

//need new method/function to append new tr & tds
//should add new store using constructor function and store in storeInfo array.

Store.cookiesTotalRender();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener data submission
Store.dataForm.addEventListener('submit', Store.handleNewStoreEntry);
