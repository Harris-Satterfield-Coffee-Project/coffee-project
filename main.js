"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex flex-column align-items-center">';
    // html += '<div>' + coffee.id + '</>';
    html += '<div class="mx-4 pt-2">' + '<h3>' + coffee.name + '</h3>' + '</div>';
    html += '<div class="pb-2 font-">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//updates coffee list!*******

var updateCoffees = function() {
<<<<<<< HEAD
    // e.preventDefault(); // don't submit the form, we just want to update the data
=======
    //e.preventDefault(); // don't submit the form, we just want to update the data
>>>>>>> 2fb437934c976f69ce0a7f15d6d277c7d3de4a68
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === 'All') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function searchCoffees(){
    console.log('I work.')
    var filteredCoffees = [];
    coffees.forEach(function (coffee){
        if(coffee.name.toLowerCase().includes(selectedCoffee.value.toLowerCase())){
            filteredCoffees.push(coffee);
        }
        tbody.innerHTML = renderCoffees(filteredCoffees);
    });
}

//adds to array of objects

var newCoffee = function (name, type){
    // var localName = localStorage.getItem('name');
    // var localRoast = localStorage.getItem('roast');

    var coffeeObj = {id: coffees.length + 1, name: name, roast: type}
    // var coffeeObj = {id: coffees.length + 1, name: localName, roast: localRoast}
    coffees.push(coffeeObj)
}
localStorage.removeItem(coffees)
localStorage.setItem('coffees',JSON.stringify(coffees))

<<<<<<< HEAD
//  var localName = localStorage.getItem("name")
// var localRoast = localStorage.getItem("roast")


=======
>>>>>>> 2fb437934c976f69ce0a7f15d6d277c7d3de4a68
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//getting info from HTML*******

var selectedCoffee = document.querySelector('#filterCoffees')
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var newCoffeeSubmit = document.querySelector('#createSubmit');



tbody.innerHTML = renderCoffees(coffees);


//event listener for search coffee****

submitButton.addEventListener('click', updateCoffees);
selectedCoffee.addEventListener('keyup', searchCoffees);


//creat coffee event listener*********

newCoffeeSubmit.addEventListener('click', function(e){
    e.preventDefault();
    var roastType = document.getElementById('add-roast');
    var coffeeName = document.getElementById("addRoast");

    localStorage.setItem('name', coffeeName.value);
    localStorage.setItem('roast', roastType.value);

    var localName = localStorage.getItem('name');
    var localRoast = localStorage.getItem('roast');

    // var coffeeFromDb = localStorage.getItem('coffees');
    // window.onload = (coffeeFromDb) => {
    //     console.log('page is fully loaded');
    // };
    //  JSON.parse(localStorage.getItem('coffees'))



    if(coffeeName !== " ") {
        newCoffee(coffeeName.value, roastType.value);
        updateCoffees();
    }
})