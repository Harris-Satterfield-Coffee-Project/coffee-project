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

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//======== Create NEW COFFEE ========//
function newCoffee(name, type){
    var addNewRoast = {id: coffees.length + 1, name: name, roast: type};
    coffees.push(addNewRoast)

}


// var newCoffee = function (type, name) {
//     var newCoffeeObj = {id: coffees.length + 1, name: name, roast: type};
//     console.log(newCoffeeObj);
//     coffees.push(newCoffeeObj);
//     console.log(coffees);
// };



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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var addRoast = document.querySelector('#add-roast')
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
