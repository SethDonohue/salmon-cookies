'use strict';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
var storeInfo = [];
var salesTable = document.getElementById('sales');

//variables for event listening
var dataForm = document.getElementById('data-form');

//CONSTRUCTOR FUNCTION
function Store(location, minCust, maxCust, avgCookieSale) {

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];
  this.dailySales = 0;
  storeInfo.push(this);
}

//Method using random number to calculate Customers Per Hour
Store.prototype.randomCustomers = function() {
  return (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  // console.log('customerph:', customersPH);
};

//Method to calculate Cookies Per Hour
Store.prototype.calcCookiesPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    // console.log('randomCustomers:', this.randomCustomers());
    this.cookiesPerHour.push(Math.floor(this.randomCustomers() * this.avgCookieSale));
    // console.log('array:', this.cookiesPerHour);
  }
};

//Method to calculate totals for each store
Store.prototype.calcTotal = function() {
  for (var i in this.cookiesPerHour) {
    this.dailySales += this.cookiesPerHour[i];
  }
};

// Method to Render function to create TD elements for table in HTML
Store.prototype.render = function() {
  // create tr element for the object
  var trEl = document.createElement('tr');
  //create and append td element to above tr for the Location Names needed on for Column
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  //Loop needed to populate 2nd and follow on td elements for the above tr in table
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    // give that element content
    tdEl.textContent = this.cookiesPerHour[i];
    // console.log(this.cookiesPerHour);
    // append tha element to the right spot in the DOM
    trEl.appendChild(tdEl);
  };

  //Add dailySales for each store to Daily Totals Column
  var thEl = document.createElement('th');// could do th for styling purposes
  thEl.textContent = this.dailySales;
  trEl.appendChild(thEl);

  //add this tr to the table!
  salesTable.appendChild(trEl);
};

//Function for Event Handler of New Data Submission
function handleNewStoreEntry(event) {
  // console.log('log of the event object', event);
  // console.log('log of the event.target', event.target);
  // console.log('log of the event.target.says', event.target.who);
  // console.log('log of the event.target.who.value', event.target.who.value);

  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

  // Validation to prevent empty form fields
  if (!event.target.location.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookieSale.value) {
    return alert('Fields cannot be empty!');
  }

  var commenter = event.target.who.value;
  var remark = event.target.says.value;

  if (commenter === 'Sam') {
    remark = '@$^#$%$^@#$%@';
  }

  if (commenter === 'Dustin') {
    remark = remark.toUpperCase();
  }

  if (commenter === 'Otis') {
    remark = '&#9835; Shama-lama-ding-dong &#9835;';
  }

  var newComment = new Comment(commenter, remark);

  // console.log('Comment by ' + event.target.who.value + ' at ' + Date());

  event.target.who.value = null;
  event.target.says.value = null;

  allComments.push(newComment);
  renderAllComments();
}


//function to draw header row
function makeHeaderRow() {
  // create tr
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);

  //for loop to create all the data td's
  for (var i in hours) {
    // create td
    thEl = document.createElement('th');
    // give td content (Name for an individual cat)
    thEl.textContent = hours[i];
    // console.log(i);
    // append the td
    trEl.appendChild(thEl);
  }
  //create and append th element to above tr for the last td to 'Display Totals'
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);

  // append the tr to the table
  salesTable.appendChild(trEl);
}

function makeHourlyRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);

  salesTable.appendChild(trEl);

}

//function to calculate cookies per hour, calculate total and render
function cookiesTotalRender() {
  for(var i = 0; i < storeInfo.length; i++){
    storeInfo[i].calcCookiesPerHour();
    storeInfo[i].calcTotal();
    storeInfo[i].render();
  }
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 24, 65, 1.2);
new Store('Seattle Center', 38, 65, 3.7);
new Store('Capitol Hill', 38, 65, 2.3);
new Store('Alki', 23, 16, 4.6);

//need new method/function to append new tr & tds
//should add new store using constructor function and store in storeInfo array.

makeHeaderRow();
cookiesTotalRender();
makeHourlyRow();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener data submission
dataForm.addEventListener('submit', handleNewStoreEntry);
