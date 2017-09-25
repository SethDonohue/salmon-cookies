'use strict';
var days = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

// Favorite Seattle beaches

var pike = {
  minCust:
  maxCust:
  averageCookieSale

  //calculated data with methods
	// cookiesHour

	// customersHour

	// total for day

	// name of store

	// output/render method
  
  render: function(){
    for (var i = 0; i < this.count.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      // give that element content
      liEl.textContent = days[i] + ': ' + this.count[i];
      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var alkiUl = document.getElementById('alki');
      alkiUl.appendChild(liEl);
    }
  }
};


alki.render();
