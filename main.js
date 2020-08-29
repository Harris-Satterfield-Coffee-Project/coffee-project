"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</>';
    html += '<div>' + '<h2>' + coffee.name +'</h2>'+'</div>';
    html += '<div>' + coffee.roast + '</div>';
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
    // e.preventDefault(); // don't submit the form, we just want to update the data
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
    var coffeeObj = {id: coffees.length + 1, name: name, roast: type}

    coffees.push(coffeeObj)
}




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
    var roastType = document.querySelector("#add-roast");
    var coffeeName = document.querySelector("#addRoast");

    if(coffeeName !== " ") {
        newCoffee(coffeeName.value, roastType.value);
        updateCoffees();
    }
})