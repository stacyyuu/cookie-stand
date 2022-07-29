'use strict'

let seattle = { 
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    sales: [],
    daily: 0,
    ranCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    }, 
    salesPerHour: function () {
        for (let i = 0; i < this.hours.length; i ++) {
            this.sales.push(Math.floor(this.ranCust() * this.avgCookie)); 
        }
    },
    totalSales: function () {
        let dailySales = 0;
        for (let i = 0; i < this.sales.length; i ++){
            dailySales += this.sales[i];
        }
        this.daily = dailySales;
    },
    displaySales: function () {
        let location = document.getElementById('seattle');
        for (let i = 0; i < this.hours.length; i ++) {
            let li = document.createElement('li');
            li.textContent = `${this.hours[i]}: ${this.sales[i]}`;
            location.appendChild(li);
        }
    },
    displayTotal: function () {
        let locationTotal = document.getElementById('seattle');
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.daily}`;
        locationTotal.appendChild(liTotal);
    },
};

seattle.ranCust();
seattle.salesPerHour();
seattle.totalSales();
seattle.displaySales();
seattle.displayTotal();
console.log(seattle);

let tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    sales: [],
    daily: 0,
    ranCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust +  1) + this.minCust);
    },
    salesPerHour: function () {
        for (let i = 0; i < this.hours.length; i ++) {
            this.sales.push(Math.floor(this.ranCust() * this.avgCookie)); 
        }
    },
    totalSales: function () {
        let dailySales = 0;
        for (let i = 0; i < this.sales.length; i ++){
            dailySales += this.sales[i];
        }
        this.daily = dailySales;
    },
    displaySales: function () {
        let location = document.getElementById('tokyo');
        for (let i = 0; i < this.hours.length; i ++) {
            let li = document.createElement('li');
            li.textContent = `${this.hours[i]}: ${this.sales[i]}`;
            location.appendChild(li);
        }
    },
    displayTotal: function () {
        let locationTotal = document.getElementById('tokyo');
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.daily}`;
        locationTotal.appendChild(liTotal);
    },
};

tokyo.ranCust();
tokyo.salesPerHour();
tokyo.totalSales();
tokyo.displaySales();
tokyo.displayTotal();
console.log(tokyo);


let dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    sales: [],
    daily: 0,
    ranCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    salesPerHour: function () {
        for (let i = 0; i < this.hours.length; i ++) {
            this.sales.push(Math.floor(this.ranCust() * this.avgCookie)); 
        }
    },
    totalSales: function () {
        let dailySales = 0;
        for (let i = 0; i < this.sales.length; i ++){
            dailySales += this.sales[i];
        }
        this.daily = dailySales;
    },
    displaySales: function () {
        let location = document.getElementById('dubai');
        for (let i = 0; i < this.hours.length; i ++) {
            let li = document.createElement('li');
            li.textContent = `${this.hours[i]}: ${this.sales[i]}`;
            location.appendChild(li);
        }
    },
    displayTotal: function () {
        let locationTotal = document.getElementById('dubai');
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.daily}`;
        locationTotal.appendChild(liTotal);
    },
};

dubai.ranCust();
dubai.salesPerHour();
dubai.totalSales();
dubai.displaySales();
dubai.displayTotal();
console.log(dubai);


let paris = {
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    sales: [],
    daily: 0,
    ranCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    salesPerHour: function () {
        for (let i = 0; i < this.hours.length; i ++) {
            this.sales.push(Math.floor(this.ranCust() * this.avgCookie)); 
        }
    },
    totalSales: function () {
        let dailySales = 0;
        for (let i = 0; i < this.sales.length; i ++){
            dailySales += this.sales[i];
        }
        this.daily = dailySales;
    },
    displaySales: function () {
        let location = document.getElementById('paris');
        for (let i = 0; i < this.hours.length; i ++) {
            let li = document.createElement('li');
            li.textContent = `${this.hours[i]}: ${this.sales[i]}`;
            location.appendChild(li);
        }
    },
    displayTotal: function () {
        let locationTotal = document.getElementById('paris');
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.daily}`;
        locationTotal.appendChild(liTotal);
    },
};

paris.ranCust();
paris.salesPerHour();
paris.totalSales();
paris.displaySales();
paris.displayTotal();
console.log(paris);


let lima = {
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    sales: [],
    daily: 0,
    ranCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    salesPerHour: function () {
        for (let i = 0; i < this.hours.length; i ++) {
            this.sales.push(Math.floor(this.ranCust() * this.avgCookie)); 
        }
    },
    totalSales: function () {
        let dailySales = 0;
        for (let i = 0; i < this.sales.length; i ++){
            dailySales += this.sales[i];
        }
        this.daily = dailySales;
    },
    displaySales: function () {
        let location = document.getElementById('lima');
        for (let i = 0; i < this.hours.length; i ++) {
            let li = document.createElement('li');
            li.textContent = `${this.hours[i]}: ${this.sales[i]}`;
            location.appendChild(li);
        }
    },
    displayTotal: function () {
        let locationTotal = document.getElementById('lima');
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.daily}`;
        locationTotal.appendChild(liTotal);
    },
};

lima.ranCust();
lima.salesPerHour();
lima.totalSales();
lima.displaySales();
lima.displayTotal();
console.log(lima);
