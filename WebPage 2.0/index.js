/*--------------------------------------------------------DOM------------------------------------------------------*/

// console.log(document);

// console.dir(document);

// document.title = "I am a new title";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
// console.dir(document);

// const userName = `Bro Code`;
// const userName = ``;
// const welcomeMessage = document.getElementById(`welcome-msg`);
// welcomeMessage.textContent += userName === `` ? ` Guest` : ` ${userName}`;

/*------------------------------------------------Element Selectors------------------------------------------------*/

// document.getElementById() => element or null
// const myHeading = document.getElementById(`my-heading`);
// // const myHeading = document.getElementById(`my-headingg`);
// myHeading.style.backgroundColor = `hsl(0, 0%, 95%)`;
// myHeading.style.textAlign = `center`;
// console.log(myHeading);

// document.getElementsByClassName() => HTMLCollection
// const fruits = document.getElementsByClassName(`fruits`);
// fruits[0].style.backgroundColor = `hsl(0, 0%, 95%)`;
// fruits[1].style.backgroundColor = `hsl(0, 0%, 95%)`;
// fruits[2].style.backgroundColor = `hsl(0, 0%, 95%)`;
// for (let fruit of fruits) {
//   fruit.style.backgroundColor = `hsl(0, 0%, 95%)`;
// }
// // fruits.forEach(); // TypeError: fruits.forEach is not a function
// Array.from(fruits).forEach(
//   (fruit) => (fruit.style.backgroundColor = `hsl(0, 0%, 95%)`)
// );
// console.log(fruits);

// document.getElementsByTagName() => HTMLCollection
// const h4Elements = document.getElementsByTagName(`h4`);
// const liElements = document.getElementsByTagName(`li`);
// h4Elements[0].style.backgroundColor = `hsl(0, 0%, 95%)`;
// h4Elements[1].style.backgroundColor = `hsl(0, 0%, 95%)`;
// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = `yellow`;
// }
// for (let liElement of liElements) {
//   liElement.style.backgroundColor = `lightgreen`;
// }
// Array.from(h4Elements).forEach(
//   (h4Element) => (h4Element.style.backgroundColor = `yellow`)
// );
// Array.from(liElements).forEach(
//   (liElement) => (liElement.style.backgroundColor = `lightgreen`)
// );
// console.log(h4Elements);

// document.querySelector() => first element or null
// const element = document.querySelector(`ul`);
// const element = document.querySelector(`ol`);
// console.log(element);
// const element = document.querySelector(`.fruits`);
// const element = document.querySelector(`h4`);
// const element = document.querySelector(`li`);
// const element = document.querySelector(`ul`);
// element.style.backgroundColor = `hsl(0, 0%, 95%)`;

// document.querySelectorAll() => NodeList (same as array) but no filter / map / reduce / forEach
// const fruits = document.querySelectorAll(`.fruits`);
// fruits[0].style.backgroundColor = `hsl(0, 0%, 95%)`;
// fruits[1].style.backgroundColor = `hsl(0, 0%, 95%)`;
// fruits[2].style.backgroundColor = `hsl(0, 0%, 95%)`;
// fruits.forEach((fruit) => (fruit.style.backgroundColor = `hsl(0, 0%, 95%)`));
// const foods = document.querySelectorAll(`li`);
// foods[0].style.backgroundColor = `hsl(0, 0%, 95%)`;
// foods[1].style.backgroundColor = `hsl(0, 0%, 95%)`;
// foods[2].style.backgroundColor = `hsl(0, 0%, 95%)`;
// foods[3].style.backgroundColor = `hsl(0, 0%, 95%)`;
// foods[4].style.backgroundColor = `hsl(0, 0%, 95%)`;
// foods[5].style.backgroundColor = `hsl(0, 0%, 95%)`;
// foods.forEach((food) => (food.style.backgroundColor = `hsl(0, 0%, 95%)`));

/*-------------------------------------------------DOM Navigation--------------------------------------------------*/

// .firstElementChild => Element
// .lastElementChild => Element
// .nextElementSibling => Element
// .previousElementSibling => Element
// .parentElement => Element
// .children => HTMLCollection

// --------------------------------------------------------------------------------------------

// const elements = document.getElementById(`fruits`);
// const elements = document.getElementById(`vegetables`);
// const elements = document.getElementById(`deserts`);
// const firstChild = elements.firstElementChild;
// firstChild.style.backgroundColor = `lightblue`;

// const ulElements = document.querySelectorAll(`ul`);
// for (let ulElement of ulElements) {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = `lightblue`;
// }

// --------------------------------------------------------------------------------------------

// const elements = document.getElementById(`fruits`);
// const elements = document.getElementById(`vegetables`);
// const elements = document.getElementById(`deserts`);
// const lastChild = elements.lastElementChild;
// lastChild.style.backgroundColor = `lightblue`;

// const ulElements = document.querySelectorAll(`ul`);
// for (let ulElement of ulElements) {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = `lightblue`;
// }

// --------------------------------------------------------------------------------------------

// const elements = document.getElementById(`fruits`);
// const elements = document.getElementById(`vegetables`);
// const elements = document.getElementById(`deserts`); // Doesn't work
// const nextSibiling = elements.nextElementSibling;
// nextSibiling.style.backgroundColor = `pink`;

// const ulElements = document.querySelectorAll(`ul`);
// for (let ulElement of ulElements) {
//   const nextSibiling = ulElement.nextElementSibling;
//   nextSibiling.style.backgroundColor = `lightblue`;
// }

// const element = document.getElementById(`apple`);
// const element = document.getElementById(`orange`);
// const element = document.getElementById(`banana`); // Doesn't work
// const element = document.getElementById(`carrots`);
// const element = document.getElementById(`onions`);
// const element = document.getElementById(`potatoes`); // Doesn't work
// const element = document.getElementById(`cake`);
// const element = document.getElementById(`pie`);
// const element = document.getElementById(`ice-cream`); // Doesn't work
// const nextSibiling = ulElement.nextElementSibling;
// nextSibiling.style.backgroundColor = `lightblue`;

// --------------------------------------------------------------------------------------------

// const elements = document.getElementById(`fruits`); // Doesn't work
// const elements = document.getElementById(`vegetables`);
// const elements = document.getElementById(`deserts`);
// const previousSibiling = elements.previousElementSibling;
// previousSibiling.style.backgroundColor = `lightblue`;
// const ulElements = document.querySelectorAll(`ul`);

// for (let ulElement of ulElements) {
//   const nextSibiling = ulElement.nextElementSibling;
//   nextSibiling.style.backgroundColor = `orange`;
// }

// const element = document.getElementById(`apple`); // Doesn't work
// const element = document.getElementById(`orange`);
// const element = document.getElementById(`banana`);
// const element = document.getElementById(`carrots`); // Doesn't work
// const element = document.getElementById(`onions`);
// const element = document.getElementById(`potatoes`); // Doesn't work
// const element = document.getElementById(`cake`);
// const element = document.getElementById(`pie`);
// const element = document.getElementById(`ice-cream`);
// const previousSibiling = element.previousElementSibling;
// previousSibiling.style.backgroundColor = `lightblue`;

// --------------------------------------------------------------------------------------------

// const element = document.getElementById(`apple`);
// const element = document.getElementById(`orange`);
// const element = document.getElementById(`banana`);
// const element = document.getElementById(`carrots`);
// const element = document.getElementById(`onions`);
// const element = document.getElementById(`potatoes`);
// const element = document.getElementById(`cake`);
// const element = document.getElementById(`pie`);
// const element = document.getElementById(`ice-cream`);
// const parentElement = element.parentElement;
// parentElement.style.backgroundColor = `lightblue`;

// --------------------------------------------------------------------------------------------

// const elements = document.getElementById(`fruits`);
// const elements = document.getElementById(`vegetables`);
// const elements = document.getElementById(`deserts`);
// const childElements = elements.children;

// Array.from(childElements).forEach((childElement) => {
//   childElement.style.backgroundColor = `lightblue`;
// });

// childElements[0].style.backgroundColor = `lightblue`;
// childElements[1].style.backgroundColor = `lightblue`;
// childElements[2].style.backgroundColor = `lightblue`;

// for (let childElement of childElements) {
//   childElement.style.backgroundColor = `lightblue`;
// }

/*-------------------------------------------------Add & Change HTML--------------------------------------------------*/

// Step 1 : create the element
// const newH1 = document.createElement(`h1`);

// --------------------------------------------------------------------------------------------

// Step 2 : add attributes / properties
// newH1.textContent = `I am a new h1`;
// newH1.id = `new-heading`;
// newH1.style.color = `tomato`;
// newH1.style.textAlign = `center`;

// --------------------------------------------------------------------------------------------

// Step 3 : append the element to the DOM

// document.body.append(newH1);
// document.body.prepend(newH1);

// document.getElementById(`box1`).append(newH1);
// document.getElementById(`box2`).append(newH1);
// document.getElementById(`box3`).append(newH1);
// document.getElementById(`box4`).append(newH1);

// document.getElementById(`box1`).prepend(newH1);
// document.getElementById(`box2`).prepend(newH1);
// document.getElementById(`box3`).prepend(newH1);
// document.getElementById(`box4`).prepend(newH1);

// const box1 = document.getElementById(`box1`);
// const box2 = document.getElementById(`box2`);
// const box3 = document.getElementById(`box3`);
// const box4 = document.getElementById(`box4`);
// document.body.insertBefore(newH1, box1);
// document.body.insertBefore(newH1, box2);
// document.body.insertBefore(newH1, box3);
// document.body.insertBefore(newH1, box4);

// const boxes = document.querySelectorAll(`.box`);
// document.body.insertBefore(newH1, boxes[0]);
// document.body.insertBefore(newH1, boxes[1]);
// document.body.insertBefore(newH1, boxes[2]);
// document.body.insertBefore(newH1, boxes[3]);
// document.body.insertBefore(newH1, boxes[5]);

// --------------------------------------------------------------------------------------------

// Step 4 : remove the element from the DOM
// document.body.removeChild(newH1);
// document.getElementById(`box1`).removeChild(newH1);

// -------------------------------------------------------------------------------------------------

// step 1: create the element
// const newListItem = document.createElement(`li`);

// step 2: add attributes / properties
// newListItem.textContent = `Coconut`;
// newListItem.id = `coconut`;
// newListItem.style.fontWeight = `bold`;
// newListItem.style.backgroundColor = `hsl(0, 0%, 95%)`;

// step 3: append the element to the DOM

// document.body.append(newListItem);
// document.body.prepend(newListItem);

// document.getElementById(`fruits`).append(newListItem);
// document.getElementById(`fruits`).prepend(newListItem);

// const apple = document.getElementById(`apple`);
// const orange = document.getElementById(`orange`);
// const banana = document.getElementById(`banana`);
// document.getElementById(`fruits`).insertBefore(newListItem, orange);
// document.getElementById(`fruits`).insertBefore(newListItem, banana);
// document.getElementById(`fruits`).insertBefore(newListItem, apple);

// const fruits = document.querySelectorAll(`#fruits li`);
// console.log(fruits);
// document.getElementById(`fruits`).insertBefore(newListItem, fruits[0]);
// document.getElementById(`fruits`).insertBefore(newListItem, fruits[1]);
// document.getElementById(`fruits`).insertBefore(newListItem, fruits[2]);
// document.getElementById(`fruits`).insertBefore(newListItem, fruits[3]);

// step 4: remove the element from the DOM
// document.body.removeChild(newListItem);
// document.getElementById(`fruits`).removeChild(newListItem);

/*--------------------------------------------------Mouse Events---------------------------------------------------*/

// click
// mouseover
// mouseout

// const myBox = document.getElementById(`my-box`);

// function changeColor(event) {
//   //   console.log(event);
//   event.target.style.backgroundColor = `maroon`;
//   event.target.textContent = `Clicked 😎`;
// }
// myBox.addEventListener(`click`, changeColor);

// myBox.addEventListener(`click`, function (event) {
//   event.target.style.backgroundColor = `maroon`;
//   event.target.textContent = `Clicked 😎`;
// });

// myBox.addEventListener(`click`, (event) => {
//   event.target.style.backgroundColor = `maroon`;
//   event.target.textContent = `Clicked 😎`;
// });
// myBox.addEventListener(`mouseover`, (event) => {
//   event.target.style.backgroundColor = `yellow`;
//   event.target.textContent = `Don't do that!`;
// });
// myBox.addEventListener(`mouseout`, (event) => {
//   event.target.style.backgroundColor = `#4caf50`;
//   event.target.textContent = `Click Me 😁`;
// });

// --------------------------------------------------------------------------------------------

// const myBox = document.getElementById(`my-box`);
// const myButton = document.getElementById(`my-button`);

// myButton.addEventListener(`mouseover`, () => {
//   myBox.style.backgroundColor = `yellow`;
//   myBox.textContent = `Don't do that!`;
// });
// myButton.addEventListener(`mouseout`, () => {
//   myBox.style.backgroundColor = `#4caf50`;
//   myBox.textContent = `Click Me 😁`;
// });
// myButton.addEventListener(`click`, () => {
//   myBox.style.backgroundColor = `maroon`;
//   myBox.textContent = `Clicked 😎`;
// });

/*---------------------------------------------------Key Events----------------------------------------------------*/

// keydown
// keyup

// document.addEventListener(`keydown`, (event) => {
//   //   console.log(event);
//   console.log(`Down key : ${event.key}`);
// });

// document.addEventListener(`keyup`, (event) => {
//   //   console.log(event);
//   console.log(`Up key : ${event.key}`);
// });

// --------------------------------------------------------------------------------------------

// const myBox = document.getElementById(`my-box`);

// document.addEventListener(`keydown`, (event) => {
//   myBox.textContent = `🫥`;
//   myBox.style.backgroundColor = `crimson`;
// });
// document.addEventListener(`keyup`, (event) => {
//   myBox.textContent = `😎`;
//   myBox.style.backgroundColor = `aqua`;
// });

// --------------------------------------------------------------------------------------------

// const myBox = document.getElementById(`my-box`);
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener(`keydown`, (event) => {
//   myBox.textContent = `🫥`;
//   myBox.style.backgroundColor = `crimson`;

//   if (event.key.startsWith(`Arrow`)) {
//     event.preventDefault();
//     switch (event.key) {
//       case `ArrowUp`:
//         y -= moveAmount;
//         break;
//       case `ArrowDown`:
//         y += moveAmount;
//         break;
//       case `ArrowLeft`:
//         x -= moveAmount;
//         break;
//       case `ArrowRight`:
//         x += moveAmount;
//         break;
//     }

//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });
// document.addEventListener(`keydown`, (event) => {
//   myBox.textContent = `🫥`;
//   myBox.style.backgroundColor = `crimson`;
// });
// document.addEventListener(`keydown`, (event) => {
//   if (event.key.startsWith(`Arrow`)) {
//     event.preventDefault();
//     switch (event.key) {
//       case `ArrowUp`:
//         y -= moveAmount;
//         break;
//       case `ArrowDown`:
//         y += moveAmount;
//         break;
//       case `ArrowLeft`:
//         x -= moveAmount;
//         break;
//       case `ArrowRight`:
//         x += moveAmount;
//         break;
//     }

//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });
// document.addEventListener(`keyup`, (event) => {
//   myBox.textContent = `😎`;
//   myBox.style.backgroundColor = `aqua`;
// });

/*------------------------------------------------Hide / Show HTML-------------------------------------------------*/

// const myButton = document.getElementById(`myButton`);
// const myImage = document.getElementById(`myImg`);

// Bettet for button in the top
// myButton.addEventListener(`click`, () => {
//   if (myImage.style.display === `none`) {
//     myImage.style.display = `block`;
//     myButton.textContent = `Hide`;
//   } else {
//     myImage.style.display = `none`;
//     myButton.textContent = `Show`;
//   }
// });

// Bettet for button in the top / bottom
// myButton.addEventListener(`click`, () => {
//   if (myImage.style.visibility === `hidden`) {
//     myImage.style.visibility = `visible`;
//     myButton.textContent = `Hide`;
//   } else {
//     myImage.style.visibility = `hidden`;
//     myButton.textContent = `Show`;
//   }
// });

/*----------------------------------------------------NodeList-----------------------------------------------------*/

// let buttons = document.querySelectorAll(`.myButtons`);

// console.log(buttons);

// buttons.forEach((button) => {
//   // button.style.backgroundColor = `red`;
//   // button.textContent += ` 😎`;
//   button.addEventListener(`click`, (event) => {
//     event.target.style.backgroundColor = `maroon`;
//   });
//   button.addEventListener(`mouseover`, (event) => {
//     event.target.style.backgroundColor = `hsl(211, 100%, 60%)`;
//   });
//   button.addEventListener(`mouseout`, (event) => {
//     event.target.style.backgroundColor = `hsl(211, 100%, 50%)`;
//   });
// });

// const newButton = document.createElement(`button`);
// newButton.textContent = `Button 05`;
// newButton.classList = `myButtons`;
// document.body.append(newButton);
// console.log(buttons);
// buttons = document.querySelectorAll(`.myButtons`);
// console.log(buttons);

// buttons.forEach((button) => {
//   button.addEventListener(`click`, (event) => {
//     event.target.remove();
//     console.log(buttons);
//     buttons = document.querySelectorAll(`.myButtons`);
//     console.log(buttons);
//   });
// });

/*-----------------------------------------------------Class List--------------------------------------------------*/

// add
// remove
// toggle
// replace
// contains

// const myH1 = document.getElementById(`myH1`);
// const myButton = document.getElementById(`myButton`);

// myH1.classList.add(`enabled`);
// myH1.classList.remove(`enabled`);

// myButton.classList.add(`enabled`);
// myButton.classList.remove(`enabled`);

// myButton.addEventListener(`mouseover`, (event) => {
//   event.target.classList.add(`enabled`);
// });
// myButton.addEventListener(`mouseout`, (event) => {
//   event.target.classList.remove(`enabled`);
// });

// myButton.addEventListener(`mouseover`, (event) => {
//   event.target.classList.toggle(`enabled`);
// });
// myButton.addEventListener(`mouseout`, (event) => {
//   event.target.classList.toggle(`enabled`);
// });

// myButton.classList.add(`enabled`);
// myButton.addEventListener(`click`, (event) => {
//   event.target.classList.replace(`enabled`, `disabled`);
// });

// myButton.classList.add(`enabled`);
// myButton.addEventListener(`click`, (event) => {
//   if (event.target.classList.contains(`disabled`)) {
//     event.target.textContent += `😡`;
//   } else {
//     event.target.classList.replace(`enabled`, `disabled`);
//   }
// });

// myH1.classList.add(`enabled`);
// myH1.addEventListener(`click`, (event) => {
//   if (event.target.classList.contains(`disabled`)) {
//     event.target.textContent += `😡`;
//   } else {
//     event.target.classList.replace(`enabled`, `disabled`);
//   }
// });

// --------------------------------------------------------------------------------------------

// let buttons = document.querySelectorAll(`.myButtons`);

// buttons.forEach((element) => {
//   element.classList.add(`enabled`);
// });
// // buttons.forEach((element) => {
// //   element.classList.remove(`enabled`);
// // });
// buttons.forEach((element) => {
//   element.addEventListener(`mouseover`, (event) => {
//     event.target.classList.toggle(`hovered`);
//   });
// });
// buttons.forEach((element) => {
//   element.addEventListener(`mouseout`, (event) => {
//     event.target.classList.toggle(`hovered`);
//   });
// });
// buttons.forEach((button) =>
//   button.addEventListener(`click`, (event) => {
//     if (event.target.classList.contains(`disabled`)) {
//       event.target.textContent += `😡`;
//     } else {
//       event.target.classList.replace(`enabled`, `disabled`);
//     }
//   })
// );

/*---------------------------------------------------Callback Hell-------------------------------------------------*/

// function task1() {
//   console.log(`Task 1 completed`);
// }

// function task2() {
//   console.log(`Task 2 completed`);
// }

// function task3() {
//   console.log(`Task 3 completed`);
// }

// function task4() {
//   console.log(`Task 4 completed`);
// }

// task1();
// task2();
// task3();
// task4();

// console.log(`All tasks completed`);

// --------------------------------------------------------------------------------------------

// function task1() {
//   setTimeout(() => console.log(`Task 1 completed`), 2000);
// }

// function task2() {
//   setTimeout(() => console.log(`Task 2 completed`), 1000);
// }

// function task3() {
//   setTimeout(() => console.log(`Task 3 completed`), 3000);
// }

// function task4() {
//   setTimeout(() => console.log(`Task 4 completed`), 1500);
// }

// task1();
// task2();
// task3();
// task4();

// console.log(`All tasks completed`);

// --------------------------------------------------------------------------------------------

// function task1(callback) {
//   setTimeout(() => {
//     console.log(`Task 1 completed`);
//     callback();
//   }, 2000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log(`Task 2 completed`);
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log(`Task 3 completed`);
//     callback();
//   }, 3000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log(`Task 4 completed`);
//     callback();
//   }, 1500);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log(`All tasks completed`);
//       });
//     });
//   });
// });

// task1(task2(task3(task4(console.log(`All tasks completed`))))); // Doesn't work

/*----------------------------------------------------Promises-----------------------------------------------------*/

// function walkDog(callback) {
//   setTimeout(() => {
//     console.log(`You walk the dog 🐕‍🦺`);
//     callback();
//   }, 1500);
// }

// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log(`You clean the kitchen 🧼`);
//     callback();
//   }, 2500);
// }

// function takeOutTrash(callback) {
//   setTimeout(() => {
//     console.log(`You take out the trash 🗑`);
//     callback();
//   }, 500);
// }

// walkDog(() =>
//   cleanKitchen(() => takeOutTrash(() => console.log(`All tasks completed`)))
// );

// --------------------------------------------------------------------------------------------

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`You walk the dog 🐕‍🦺`);
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`You clean the kitchen 🧼`);
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`You take out the trash 🗑`);
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log(`All tasks completed`);
//   });

// --------------------------------------------------------------------------------------------

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   const dogWalked = true;
//       const dogWalked = false;
//       if (dogWalked) {
//         resolve(`You walk the dog 🐕‍🦺`);
//       } else {
//         reject(`You failed to walk the dog 🐕‍🦺`);
//       }
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve(`You clean the kitchen 🧼`);
//       } else {
//         reject(`You failed to clean the kitchen 🧼`);
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   const trashTakenOut = true;
//       //   const trashTakenOut = false;
//       if (trashTakenOut) {
//         resolve(`You take out the trash 🗑`);
//       } else {
//         reject(`You failed to take out the trash 🗑`);
//       }
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log(`All tasks completed`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

/*---------------------------------------------------Async/Await---------------------------------------------------*/

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   const dogWalked = true;
//       const dogWalked = false;
//       if (dogWalked) {
//         resolve(`You walk the dog 🐕‍🦺`);
//       } else {
//         reject(`You failed to walk the dog 🐕‍🦺`);
//       }
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve(`You clean the kitchen 🧼`);
//       } else {
//         reject(`You failed to clean the kitchen 🧼`);
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakenOut = true;
//       //   const trashTakenOut = false;
//       if (trashTakenOut) {
//         resolve(`You take out the trash 🗑`);
//       } else {
//         reject(`You failed to take out the trash 🗑`);
//       }
//     }, 500);
//   });
// }

// async function doAllTasks() {
//   try {
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);
//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);
//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult);
//     console.log(`All tasks completed`);
//   } catch (error) {
//     console.error(error);
//   }
// }

// doAllTasks();

/*------------------------------------------------------JSON-------------------------------------------------------*/

// JSON => JavaScript Object Notation
// DOM => Document Object Model

// JSON.stringify() => converts a JSON object to a JSON string
// JSON.parse() => converts a JSON string to a JSON object

// --------------------------------------------------------------------------------------------

// const names = [`SpongeBop`, `Patrick`, `Squidward`, `Sandy`];
// const namesJSON = JSON.stringify(names);
// console.log(names);
// console.log(namesJSON);

// const person = {
//   name: "SpongeBob",
//   age: 20,
//   isEmployed: true,
//   hobbies: ["jeallyfishing", "karate", "cooking"],
// };
// const personJSON = JSON.stringify(person);
// console.log(person);
// console.log(personJSON);

// const people = [
//   {
//     name: "SpongeBob",
//     age: 20,
//     isEmployed: true,
//   },
//   {
//     name: "Patrick",
//     age: 21,
//     isEmployed: false,
//   },
//   {
//     name: "Squidward",
//     age: 22,
//     isEmployed: true,
//   },
//   {
//     name: "Sandy",
//     age: 23,
//     isEmployed: false,
//   },
// ];
// const peopleJSON = JSON.stringify(people);
// console.log(people);
// console.log(peopleJSON);

// --------------------------------------------------------------------------------------------

// const jsonNames = `["SpongeBop","Patrick","Squidward","Sandy"]`;
// const names = JSON.parse(jsonNames);
// console.log(jsonNames);
// console.log(names);

// const jsonPerson = `{"name":"SpongeBob","age":20,"isEmployed":true,"hobbies":["jeallyfishing","karate","cooking"]}`;
// const person = JSON.parse(jsonPerson);
// console.log(jsonPerson);
// console.log(person);

// const jsonPeople = `[{"name":"SpongeBob","age":20,"isEmployed":true},{"name":"Patrick","age":21,"isEmployed":false},{"name":"Squidward","age":22,"isEmployed":true},{"name":"Sandy","age":23,"isEmployed":false}]`;
// const people = JSON.parse(jsonPeople);
// console.log(jsonPeople);
// console.log(people);

// --------------------------------------------------------------------------------------------

// fetch("names.json")
//   .then((response) => response.json())
//   .then((names) => console.log(names))
//   .catch((error) => console.error(error));

// fetch("person.json")
//   .then((response) => response.json())
//   .then((person) => console.log(person))
//   .catch((error) => console.error(error));

// fetch("people.json")
//   .then((response) => response.json())
//   .then((people) => console.log(people))
//   .catch((error) => console.error(error));

// fetch("people.json")
//   .then((response) => response.json())
//   .then((people) => {
//     people.forEach((person) => {
//       //   console.log(person);
//       console.log(person.name);
//       console.log(person.age);
//       console.log(person.isEmployed);
//     });
//   })
//   .catch((error) => console.error(error));

/*----------------------------------------------Fetch Data From An API---------------------------------------------*/

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   //   .then((response) => console.log(response))
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   //   .then((data) => console.log(data.name))
//   //   .then((data) => console.log(data.weight))
//   //   .then((data) => console.log(data.id))
//   .catch((error) => console.error(error));

// --------------------------------------------------------------------------------------------

// fetch("https://pokeapi.co/api/v2/pokemon/hulk")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Couldn't fetch the result`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Couldn't fetch the result`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// --------------------------------------------------------------------------------------------

// fetchData();

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://pokeapi.co/api/v2/pokemon/typhlosion"
//     );
//     if (!response.ok) {
//       throw new Error(`Couldn't fetch the result`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// --------------------------------------------------------------------------------------------

fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById(`pokemonName`)
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error(`Couldn't fetch the result`);
    }
    const data = await response.json();
    // console.log(data);

    const pokemonImage = document.getElementById(`pokemonSprite`);
    const pokemonSprite = data.sprites.front_default;
    pokemonImage.src = pokemonSprite;
    pokemonImage.style.display = `block`;
  } catch (error) {
    console.error(error);
  }
}
