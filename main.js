"use strict"
//populates coffee list on html***
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

//searches non-case sensitive for coffees in list******
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
var newCoffee = function (name, type) {
    var selectedRoast = roastType.value;
    var coffeeName = newCoffeeName.value;
    var coffeeID = coffees.length + 1;
    var coffeeObj = {id: coffeeID, name: coffeeName, roast: selectedRoast}
    coffees.push(coffeeObj)
    console.log(localStorage.getItem('coffees').toUpperCase())
    localStorage.removeItem('coffees')
    localStorage.setItem('coffees', JSON.stringify(coffees))
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Afternoon', roast: 'light'},
    {id: 2, name: 'Mountain View', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'Nicaraguan', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'Costa Rican', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//getting info from HTML*******
var selectedCoffee = document.getElementById('filterCoffees')
var tbody = document.getElementById('coffees');
var submitButton = document.getElementById('submit');
var roastSelection = document.getElementById('roast-selection');
var newCoffeeSubmit = document.getElementById('createSubmit');
tbody.innerHTML = renderCoffees(coffees);


//event listener for search coffee****
submitButton.addEventListener('click', updateCoffees);
selectedCoffee.addEventListener('keyup', searchCoffees);


//creat coffee event listener*********
var roastType = document.getElementById('add-roast');
var newCoffeeName = document.getElementById("addRoast");

newCoffeeSubmit.addEventListener('click', function(e){
    e.preventDefault();
    if(newCoffeeName !== " ") {
        newCoffee(newCoffeeName.value, roastType.value);
        updateCoffees();
    }
});


//gets items from local storage*******
window.onload = () =>{
    if (!(localStorage.getItem('coffees') === null)){
        coffees = JSON.parse(localStorage.getItem('coffees'));
        updateCoffees()
        console.log('coffees loaded')
    } else {
        localStorage.setItem('coffees', JSON.stringify(coffees));

        console.log('coffees created')
    }
}
