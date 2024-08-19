const textBox = document.getElementById(`textBox`);
const toFahrenheit = document.getElementById(`toFahrenheit`);
const toCelsius = document.getElementById(`toCelsius`);
const result = document.getElementById(`result`);

let value = textBox.value;

function convert() {
  if (toFahrenheit.checked) {
    result.textContent = `${((value * 9) / 5 + 32).toFixed(2)} °F`;
  } else if (toCelsius.checked) {
    result.textContent = `${(((value - 32) * 5) / 9).toFixed(2)} °C`;
  } else {
    result.textContent = `Please select the conversion type`;
  }
}
