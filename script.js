
// Select the input fields and result element
const presentUnitInput = document.querySelector('#present-unit-input');
const previousUnitInput = document.querySelector('#previous-unit-input');
const unitsResult = document.querySelector('#units-result');

// Add an event listener to the present unit input field
presentUnitInput.addEventListener('input', () => {
  // Retrieve the values of the present and previous units
  const presentUnit = parseFloat(presentUnitInput.value);
  const previousUnit = parseFloat(previousUnitInput.value);

  // Calculate the number of units
  let units;
  if (isNaN(presentUnit) || isNaN(previousUnit)) {
    units = 'N/A';
  } else {
    units = presentUnit - previousUnit;
  }

  // Display the number of units
  unitsResult.textContent = units;
});