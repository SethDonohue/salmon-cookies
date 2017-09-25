'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];


function random(min, max){
  return (Math.random() * (max - min + 1) + min);
  // console.log('Random#: ' + x);
  // return x;
}


var pike = {
  minCust: 23,
  maxCust: 65,
  averageCookieSale: 6.3,
  customerEachHour: [],

  //calculated data with methods
  // customersHour
  customersHour: function() {
    for (var i = 0; i < hours.length; i++) {
      //add a random number to customerHour Array
      console.log('Customer Each Hour: ' + random(pike.minCust, pike.maxCust));
      this.customerEachHour.push(Math.floor(random(pike.minCust, pike.maxCust)));
    }
    console.log(this.customerEachHour);
  },



  // console.log(customerEachHour);
  // Array of Customers / Hour
  //cookies per Hour
  // cookiesHour: customerHour * averageCookieSale,

  // Render function to creat LISTS
  render: function(){
    // console.log(pike.minCust);
    for (var i = 0; i < hours.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      // give that element content
      liEl.textContent = hours[i] + ': ' + Math.floor(random(pike.minCust, pike.maxCust) * this.averageCookieSale) + ' cookies';
      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var pineUl = document.getElementById('pine');
      pineUl.appendChild(liEl);
      // console.log(pike.minCust);
      // console.log(pike.maxCust);
    }
  }
};
//output / render method
pike.customersHour();
pike.render();
