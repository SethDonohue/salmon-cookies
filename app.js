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
  // customerEachHour: [],
  pikeData: [],
  //Calc Total Cookies
  totalCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.pikeData.length; i++){
      sum += this.pikeData[i];
    }
    // console.log(sum);
    return sum;
  },
  //calculated data with methods
  // customersHour
  // customersHour: function() {
  //   for (var i = 0; i < hours.length; i++) {
  //     //add a random number to customerHour Array
  //     console.log('Customer Each Hour: ' + random(pike.minCust, pike.maxCust));
  // this.customerEachHour.push(Math.floor(random(pike.minCust, pike.maxCust)));
  // }
  // console.log(this.customerEachHour);
  // },

  // Render function to create LISTS in HTML
  renderHourly: function(){
    // console.log(pike.minCust);
    for (var i = 0; i < hours.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      //store the cookies per hour for  use in multiple places
      var hourlyCookies = Math.floor(random(this.minCust, this.maxCust) * this.averageCookieSale);

      // push cookies per hour data into array;
      this.pikeData.push(hourlyCookies);

      // give that element content
      liEl.textContent = hours[i] + ': ' + hourlyCookies + ' cookies';

      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var pikeUl = document.getElementById('pike');
      pikeUl.appendChild(liEl);
    }
  },

  renderTotal: function() {
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies() + ' cookies';
    var pikeUl = document.getElementById('pikeTotal');
    pikeUl.appendChild(liEl);
    // console.log(this.totalCookies());
  }
};





//Output / render method for all objects/lists
pike.renderHourly();
pike.renderTotal();

console.log('PikeData Array: ' + pike.pikeData);

console.log('Pike Total Cookies; ' + pike.totalCookies());
