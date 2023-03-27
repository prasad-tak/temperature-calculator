// Get elements from the DOM
const temperatureInput = document.getElementById('temperature-input');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertButton = document.getElementById('convert-button');
const resultDiv = document.getElementById('result');

// Function to convert between Celsius, Fahrenheit, and Kelvin
function convertTemperature(temperature, fromUnit, toUnit) {
  let result;

  // Convert from the input unit to Celsius
  switch (fromUnit) {
    case 'celsius':
      result = temperature;
      break;
    case 'fahrenheit':
      result = (temperature - 32) * 5/9;
      break;
    case 'kelvin':
      result = temperature - 273.15;
      break;
  }

  // Convert from Celsius to the output unit
  switch (toUnit) {
    case 'celsius':
      result = result;
      break;
    case 'fahrenheit':
      result = result * 9/5 + 32;
      break;
    case 'kelvin':
      result = result + 273.15;
      break;
  }

  return result;
}

// Event listener for the convert button
convertButton.addEventListener('click', () => {
  // Get the input temperature and units
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  // Convert the temperature
  const result = convertTemperature(temperature, fromUnit, toUnit);

  // Display the result
  resultDiv.textContent = `${temperature} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
});
