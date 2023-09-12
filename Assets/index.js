 // Query selecting the display id from the html
const display = document.querySelector('#display');

// console.log(display); // Testing the query selector

// Creating a function to display the value of the button clicked   
function toDisplay(value) {
    display.textContent += value;
}

// Creating a function to clear the display
function clearTheDisplay() {
    display.textContent = '';
}

// Creating a function to calculate percentage
function percentage() {
    display.textContent = display.textContent / 100;
}