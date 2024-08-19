function rollDice() {
  const numberOfDice = document.getElementById("numberOfDice");
  const diceResults = document.getElementById("diceResults");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numberOfDice.value; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="diceImages/${value}.jpg" alt="Dice ${value}" >`);
  }

  diceResults.textContent = `Results: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
