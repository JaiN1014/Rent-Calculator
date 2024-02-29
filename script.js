
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

// Get a reference to the electricity input element
const electricityInput = document.querySelector('.left input');

// Add a 'unit' property to the electricity input element
electricityInput.unit = units.electricity;

// Get a reference to the water input element
const waterInput = document.querySelector('.right input');

// Add a 'unit' property to the water input element
waterInput.unit = units.water;

// Add an event listener to the electricity input element
electricityInput.addEventListener('input', () => {
  // Update the electricity value element with the input value and unit
  document.querySelector('#value').textContent = `${electricityInput.value} ${electricityInput.unit}`;
});

// Add an event listener to the water input element
waterInput.addEventListener('input', () => {
  // Update the water value element with the input value and unit
  document.querySelector('#value').textContent = `${waterInput.value} ${waterInput.unit}`;
});

// Add an event listener to the previous button
previousButton.addEventListener('click', () => {
  // Go to the previous page or state
  window.history.back();
});