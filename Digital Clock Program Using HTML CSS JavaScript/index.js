// function updateClock() {
//   let now = new Date();
//   let hours = now.getHours().toString().padStart(2, `0`);
//   let minutes = now.getMinutes().toString().padStart(2, `0`);
//   let seconds = now.getSeconds().toString().padStart(2, `0`);
//   let time = `${hours}:${minutes}:${seconds}`;
//   document.getElementById(`clock`).textContent = time;
// }
function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let meridiem = hours >= 12 ? `PM` : `AM`;
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, `0`);
  const minutes = now.getMinutes().toString().padStart(2, `0`);
  const seconds = now.getSeconds().toString().padStart(2, `0`);
  const time = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById(`clock`).textContent = time;
}
updateClock();
setInterval(updateClock, 1000);
