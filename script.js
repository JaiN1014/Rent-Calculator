
// Get a reference to the container element
const container = document.querySelector('.container');

// Create a previous button element
const previousButton = document.createElement('button');
previousButton.textContent = 'Previous';
previousButton.className = 'button1';

// Add the previous button to the container
container.insertBefore(previousButton, container.firstChild);

// Create a units object
const units = {
  electricity: 'kWh',
  water: 'L'
};

console.log(units);