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

var seaTac = {
  minCust: 23,
  maxCust: 65,
  averageCookieSale: 6.3,
  // customerEachHour: [],
  seaTacData: [],
  //Calc Total Cookies
  totalCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.seaTacData.length; i++){
      sum += this.seaTacData[i];
    }
    // console.log(sum);
    return sum;
  },
  //calculated data with methods
  // customersHour
  // customersHour: function() {
  //   for (var i = 0; i < hours.length; i++) {
  //     //add a random number to customerHour Array
  //     console.log('Customer Each Hour: ' + random(seaTac.minCust, seaTac.maxCust));
  // this.customerEachHour.push(Math.floor(random(seaTac.minCust, seaTac.maxCust)));
  // }
  // console.log(this.customerEachHour);
  // },

  // Render function to create LISTS in HTML
  renderHourly: function(){
    // console.log(seaTac.minCust);
    for (var i = 0; i < hours.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      //store the cookies per hour for  use in multiple places
      var hourlyCookies = Math.floor(random(this.minCust, this.maxCust) * this.averageCookieSale);

      // push cookies per hour data into array;
      this.seaTacData.push(hourlyCookies);

      // give that element content
      liEl.textContent = hours[i] + ': ' + hourlyCookies + ' cookies';

      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var seaTacUl = document.getElementById('seaTac');
      seaTacUl.appendChild(liEl);
    }
  },

  renderTotal: function() {
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies() + ' cookies';
    var seaTacUl = document.getElementById('seaTacTotal');
    seaTacUl.appendChild(liEl);
    // console.log(this.totalCookies());
  }
};

var seattleCenter = {
  minCust: 23,
  maxCust: 65,
  averageCookieSale: 6.3,
  // customerEachHour: [],
  seattleCenterData: [],
  //Calc Total Cookies
  totalCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.seattleCenterData.length; i++){
      sum += this.seattleCenterData[i];
    }
    // console.log(sum);
    return sum;
  },
  //calculated data with methods
  // customersHour
  // customersHour: function() {
  //   for (var i = 0; i < hours.length; i++) {
  //     //add a random number to customerHour Array
  //     console.log('Customer Each Hour: ' + random(seattleCenter.minCust, seattleCenter.maxCust));
  // this.customerEachHour.push(Math.floor(random(seattleCenter.minCust, seattleCenter.maxCust)));
  // }
  // console.log(this.customerEachHour);
  // },

  // Render function to create LISTS in HTML
  renderHourly: function(){
    // console.log(seattleCenter.minCust);
    for (var i = 0; i < hours.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      //store the cookies per hour for  use in multiple places
      var hourlyCookies = Math.floor(random(this.minCust, this.maxCust) * this.averageCookieSale);

      // push cookies per hour data into array;
      this.seattleCenterData.push(hourlyCookies);

      // give that element content
      liEl.textContent = hours[i] + ': ' + hourlyCookies + ' cookies';

      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var seattleCenterUl = document.getElementById('seattleCenter');
      seattleCenterUl.appendChild(liEl);
    }
  },

  renderTotal: function() {
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies() + ' cookies';
    var seattleCenterUl = document.getElementById('seattleCenterTotal');
    seattleCenterUl.appendChild(liEl);
    // console.log(this.totalCookies());
  }
};

var capHill = {
  minCust: 23,
  maxCust: 65,
  averageCookieSale: 6.3,
  // customerEachHour: [],
  capHillData: [],
  //Calc Total Cookies
  totalCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.capHillData.length; i++){
      sum += this.capHillData[i];
    }
    // console.log(sum);
    return sum;
  },
  //calculated data with methods
  // customersHour
  // customersHour: function() {
  //   for (var i = 0; i < hours.length; i++) {
  //     //add a random number to customerHour Array
  //     console.log('Customer Each Hour: ' + random(capHill.minCust, capHill.maxCust));
  // this.customerEachHour.push(Math.floor(random(capHill.minCust, capHill.maxCust)));
  // }
  // console.log(this.customerEachHour);
  // },

  // Render function to create LISTS in HTML
  renderHourly: function(){
    // console.log(capHill.minCust);
    for (var i = 0; i < hours.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      //store the cookies per hour for  use in multiple places
      var hourlyCookies = Math.floor(random(this.minCust, this.maxCust) * this.averageCookieSale);

      // push cookies per hour data into array;
      this.capHillData.push(hourlyCookies);

      // give that element content
      liEl.textContent = hours[i] + ': ' + hourlyCookies + ' cookies';

      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var capHillUl = document.getElementById('capHill');
      capHillUl.appendChild(liEl);
    }
  },

  renderTotal: function() {
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies() + ' cookies';
    var capHillUl = document.getElementById('capHillTotal');
    capHillUl.appendChild(liEl);
    // console.log(this.totalCookies());
  }
};

var alki = {
  minCust: 23,
  maxCust: 65,
  averageCookieSale: 6.3,
  // customerEachHour: [],
  alkiData: [],
  //Calc Total Cookies
  totalCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.alkiData.length; i++){
      sum += this.alkiData[i];
    }
    // console.log(sum);
    return sum;
  },
  //calculated data with methods
  // customersHour
  // customersHour: function() {
  //   for (var i = 0; i < hours.length; i++) {
  //     //add a random number to customerHour Array
  //     console.log('Customer Each Hour: ' + random(alki.minCust, alki.maxCust));
  // this.customerEachHour.push(Math.floor(random(alki.minCust, alki.maxCust)));
  // }
  // console.log(this.customerEachHour);
  // },

  // Render function to create LISTS in HTML
  renderHourly: function(){
    // console.log(alki.minCust);
    for (var i = 0; i < hours.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      //store the cookies per hour for  use in multiple places
      var hourlyCookies = Math.floor(random(this.minCust, this.maxCust) * this.averageCookieSale);

      // push cookies per hour data into array;
      this.alkiData.push(hourlyCookies);

      // give that element content
      liEl.textContent = hours[i] + ': ' + hourlyCookies + ' cookies';

      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var alkiUl = document.getElementById('alki');
      alkiUl.appendChild(liEl);
    }
  },

  renderTotal: function() {
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies() + ' cookies';
    var alkiUl = document.getElementById('alkiTotal');
    alkiUl.appendChild(liEl);
    // console.log(this.totalCookies());
  }
};



//Output / render method for all objects/lists
pike.renderHourly();
pike.renderTotal();

seaTac.renderHourly();
seaTac.renderTotal();

seattleCenter.renderHourly();
seattleCenter.renderTotal();

capHill.renderHourly();
capHill.renderTotal();

alki.renderHourly();
alki.renderTotal();

console.log('PikeData Array: ' + pike.pikeData);

console.log('Pike Total Cookies; ' + pike.totalCookies());
