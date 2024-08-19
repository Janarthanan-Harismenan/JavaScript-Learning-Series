// console.log(`Hello`);

// window.alert(`This is an alert`);
// window.alert(`I like pizza`);

// This is a comment

/*
    This
    is
    a
    comment
*/

// document.getElementById(`myH1`).textContent = `Hello`;
// document.getElementById(`myP`).textContent = `I love pizza!`;

// let x;
// x = 100;
// console.log(x);

// let x = 100;
// console.log(x);

// let age = 25;
// console.log(typeof age);
// console.log(`I am ${age} years old`);

// let firstname = `Bro`;
// let email = `bro@email.com`;
// console.log(typeof firstname);
// console.log(`My name is ${firstname}`);
// console.log(`My email is ${email}`);

// let online = false;
// console.log(typeof online);
// console.log(`Am I online? ${online}`);

// let fullname = `Bro Code`;
// let age = 25;
// let online = false;

// document.getElementById(`p1`).textContent = `Your full name is ${fullname}`;
// document.getElementById(`p2`).textContent = `You are ${age} years old`;
// document.getElementById(`p3`).textContent = `Are you online? ${online}`;

// let students = 30;
// students = students + 10;
// students = students - 10;
// students = students * 10;
// students = students / 10;
// students = students ** 2;
// let remainingStudents = students % 4;
// students += 10;
// students -= 10;
// students *= 10;
// students /= 10;
// students **= 2;
// students++;
// students--;
// console.log(students);
// console.log(remainingStudents);

// operator precedence
// 1. paranthese ()
// 2. exponentiation **
// 3. multiplication * division / remainder %
// 4. addition + subtraction -

// Easy way
// let username;
// username = window.prompt(`Enter your name`);
// console.log(username);

// Propper way
// let username;
// document.getElementById(`Mybutton`).onclick = function () {
//   username = document.getElementById(`Myinput`).value;
//   document.getElementById(`Mylabel`).textContent = `Hello, ${username}!`;
// };

/*----------------------------------------Type Conversion-------------------------------------*/

// let age = window.prompt("What's your age??");
// age = Number(age);
// age += 1;
// console.log(age);

// let x = `pizza`;
// let y = `pizza`;
// let z = `pizza`;
// x = Number(x);   Nan
// y = String(y);   pizza
// z = Boolean(z);  true
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// let x = `0`;     0
// let y = `0`;     0
// let z = `0`;     true
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// let x = ``;     0
// let y = ``;
// let z = ``;     false
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// let x;      NaN
// let y;      undefined
// let z;      false
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/*-------------------------------------------Constants-----------------------------------------*/

// let pie = 3.142;
// const PIE = 3.142;
// let radius;
// let circumference;
// radius = window.prompt(`Enter the value of the radius`);
// radius = Number(radius);
// circumference = 2 * PIE * radius;
// console.log(circumference);

// let pie = 3.142;
// const PIE = 3.142;
// let radius;
// let circumference;
// document.getElementById(`myButton`).onclick = function () {
//   radius = document.getElementById(`myText`).value;
//   radius = Number(radius);
//   circumference = 2 * PIE * radius;
//   document.getElementById(`myH3`).textContent = `${circumference} cm`;
// };

/*----------------------------------------Counter Program-------------------------------------*/

// let incrementButton = document.getElementById(`increment`);
// let decrementButton = document.getElementById(`decrement`);
// let resetButton = document.getElementById(`reset`);
// let counter = document.getElementById(`counterlabel`);
// let count = 0;

// incrementButton.onclick = function () {
//   count++;
//   counter.textContent = count;
// };

// decrementButton.onclick = function () {
//   count--;
//   counter.textContent = count;
// };

// resetButton.onclick = function () {
//   count = 0;
//   counter.textContent = count;
// };

/*-----------------------------------------Math Object----------------------------------------*/

// console.log(Math.PI);
// console.log(Math.E);

// let X = 0;
// let Y = 2;
// let z;

// z = Math.round(X);
// z = Math.floor(X);
// z = Math.ceil(X);
// z = Math.trunc(X);
// z = Math.pow(X, Y);
// z = Math.sqrt(X);
// z = Math.log(X);
// z = Math.sin(X);
// z = Math.cos(X);
// z = Math.tan(X);
// z = Math.abs(X);
// z = Math.sign(X);
// console.log(z);

// let max = Math.max(1, 2, 3, 4, 5);
// let min = Math.min(1, 2, 3, 4, 5);

// console.log(max);
// console.log(min);

/*----------------------------------Random Number Generator-----------------------------------*/

// let randomNum = Math.random();
// let randomNum = Math.floor(Math.random() * 10) + 1;
// let min = 50;
// let max = 100;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;;
// console.log(randomNum);

// let myButton = document.getElementById(`button`);
// let Mylabel1 = document.getElementById(`label1`);
// let Mylabel2 = document.getElementById(`label2`);
// let Mylabel3 = document.getElementById(`label3`);

// myButton.onclick = function () {
//   let min = 1;
//   let max = 6;
//   let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
//   let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
//   let randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
//   Mylabel1.textContent = randomNum1;
//   Mylabel2.textContent = randomNum2;
//   Mylabel3.textContent = randomNum3;
// };

/*--------------------------------------If Statement------------------------------------------*/

// let age = 25;

// if (age >= 18) {
//   console.log(`You are an adult`);
// } else {
//   console.log(`You are a minor`);
// }

// let time = 12;

// if (time < 12) {
//   console.log(`Good Morning`);
// } else {
//   console.log(`Good Afternoon`);
// }

// let isStudent = false;

// if (isStudent) {
//   console.log(`You are a student`);
// } else {
//   console.log(`You are not a student`);
// }

// let age = 15;
// let hasLicense = false;

// if (age > 16) {
//   console.log(`You can drive`);
//   if (hasLicense) {
//     console.log(`You have a license`);
//   } else {
//     console.log(`You do not have a license`);
//   }
// } else {
//   console.log(`You are too young to drive`);
// }

// let age = 10;

// if (age > 100) {
//   console.log("You are too old to enter this website");
// } else if (age >= 18) {
//   console.log("Welcome to the website");
// } else if (age == 0) {
//   console.log("You just born now you can't enter this website");
// } else if (age < 0) {
//   console.log("Age can't be negative");
// } else {
//   console.log("You are too young to enter this website");
// }

// let input = document.getElementById(`myInput`);
// let button = document.getElementById(`myButton`);
// let output = document.getElementById(`myOutput`);

// button.onclick = function () {
//   let age = input.value;
//   age = Number(age);
//   if (age > 100) {
//     output.textContent = `You are too old to enter this website`;
//   } else if (age >= 18) {
//     output.textContent = `Welcome to the website`;
//   } else if (age == 0) {
//     output.textContent = `You just born now you can't enter this website`;
//   } else if (age < 0) {
//     output.textContent = `Age can't be negative`;
//   } else {
//     output.textContent = `You are too young to enter this website`;
//   }
// };

/*--------------------------------------Checked Property--------------------------------------*/

// let checkbox = document.getElementById(`myCheckBox`);
// let visaCard = document.getElementById(`visaCard`);
// let masterCard = document.getElementById(`masterCard`);
// let payPal = document.getElementById(`payPal`);
// let mySubmit = document.getElementById(`mySubmit`);
// let submitResult = document.getElementById(`submitResult`);
// let paymentMethod = document.getElementById(`paymentMethod`);

// mySubmit.onclick = function () {
//   if (checkbox.checked) {
//     submitResult.textContent = `You are subscribed`;
//   } else {
//     submitResult.textContent = `You are not subscribed`;
//   }

//   if (visaCard.checked) {
//     paymentMethod.textContent = `You are paying with Visa Card`;
//   } else if (masterCard.checked) {
//     paymentMethod.textContent = `You are paying with Master Card`;
//   } else if (payPal.checked) {
//     paymentMethod.textContent = `You are paying with PayPal`;
//   } else {
//     paymentMethod.textContent = `Please select a payment method`;
//   }
// };

/*--------------------------------------Ternary operator--------------------------------------*/

// let age = 15;
// let message = age >= 18 ? `You are an adult` : `You are a minor`;
// console.log(message);

// let time = 11;
// let greeting = time < 12 ? `Good Morning` : `Good Afternoon`;
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? `You are a student` : `You are not a student`;
// console.log(message);

// let purchaseAmount = 100;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// let paymentAmount = purchaseAmount * (1 - discount / 100);
// console.log(`You have to pay ${paymentAmount}`);

/*--------------------------------------Switches--------------------------------------*/

// let day = `Milo`;

// switch (day) {
//   case 1:
//     console.log(`Monday`);
//     break;
//   case 2:
//     console.log(`Tuesday`);
//     break;
//   case 3:
//     console.log(`Wednesday`);
//     break;
//   case 4:
//     console.log(`Thursday`);
//     break;
//   case 5:
//     console.log(`Friday`);
//     break;
//   case 6:
//     console.log(`Saturday`);
//     break;
//   case 7:
//     console.log(`Sunday`);
//     break;
//   default:
//     console.log(`${day} is not a valid day`);
// }

// let testScore = 100;
// let grade;

// switch (true) {
//   case testScore >= 90:
//     grade = `A`;
//     break;
//   case testScore >= 80:
//     grade = `B`;
//     break;
//   case testScore >= 70:
//     grade = `C`;
//     break;
//   case testScore >= 60:
//     grade = `D`;
//     break;
//   default:
//     grade = `F`;
// }

// console.log(`Your grade is ${grade}`);

/*--------------------------------------String methods--------------------------------------*/

// let myString = `      Hello World      `;
// console.log(myString.trim());

// let myString = `Hello World`;

// console.log(myString.charAt(0));
// console.log(myString.indexOf(`o`));
// console.log(myString.lastIndexOf(`o`));
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.repeat(3));
// console.log(myString.startsWith(` `));

// if (myString.startsWith(`H`)) {
//   console.log(`Yes it starts with H`);
// } else {
//   console.log(`No it does not start with H`);
// }

// console.log(myString.endsWith(` `));
// console.log(myString.includes(` `));

// let phoneNum = `123-456-7890`;
// console.log(phoneNum.replaceAll(`-`, ` `));
// console.log(phoneNum.padStart(20, `*`));
// console.log(phoneNum.padEnd(20, `*`));

/*--------------------------------------String slicing--------------------------------------*/

// let fullname = `Bro Code`;

// let firstName = fullname.slice(0, 3);
// console.log(firstName);

// let lastName = fullname.slice(4);
// console.log(lastName);

// let firstLetter = fullname.slice(0, 1);
// console.log(firstLetter);

// let lastLetter = fullname.slice(-1);
// console.log(lastLetter);

// let lastFourLetters = fullname.slice(-4);
// console.log(lastFourLetters);

// let firstName = fullname.slice(0, fullname.indexOf(` `));
// console.log(firstName);

// let lastName = fullname.slice(fullname.indexOf(` `) + 1);
// console.log(lastName);

// let email = `bro1@gmail.com`;

// let username = email.slice(0, email.indexOf(`@`));
// console.log(username);

// let domain = email.slice(email.indexOf(`@`) + 1);
// console.log(domain);

/*--------------------------------------Method chaining--------------------------------------*/

// let userName = window.prompt(`Enter your name`);
// userName = userName.trim();
// let firstLetter = userName.charAt(0);
// firstLetter = firstLetter.toUpperCase();
// let restOfName = userName.slice(1);
// restOfName = restOfName.toLowerCase();
// let fullName = firstLetter + restOfName;
// console.log(fullName);

// let userName = window.prompt(`Enter your name`);
// userName =
//   userName.trim().charAt(0).toUpperCase() +
//   userName.trim().slice(1).toLowerCase();
// console.log(userName);

/*--------------------------------------Logical Operators--------------------------------------*/

// let temperature = 250;

// if (temperature > 0 && temperature <= 30) {
//   console.log(`The temperature is good`);
// } else {
//   console.log(`The temperature is not good`);
// }

// if (temperature <= 0 || temperature > 30) {
//   console.log(`The temperature is not good`);
// } else {
//   console.log(`The temperature is good`);
// }

// let isSunny = true;

// if (isSunny)
//   console.log(`It's sunny, you should wear sunglasses and apply sunscreen`);
// else
//   console.log(
//     `It's not sunny, you should wear warm clothes and carry an umbrella`
//   );

// if (!isSunny)
//   console.log(
//     `It's not sunny, you should wear warm clothes and carry an umbrella`
//   );
// else console.log(`It's sunny, you should wear sunglasses and apply sunscreen`);

/*--------------------------------------Strict Equality--------------------------------------*/

// const PI = 3.142;

// if (PI == `3.142`) {
//   console.log(`Equal`);
// } else {
//   console.log(`Not Equal`);
// }

// if (PI === `3.142`) {
//   console.log(`Equal`);
// } else {
//   console.log(`Not Equal`);
// }

// if (PI == 3.142) {
//   console.log(`Equal`);
// } else {
//   console.log(`Not Equal`);
// }

// if (PI != `3.142`) {
//   console.log(`Not Equal`);
// } else {
//   console.log(`Equal`);
// }

// if (PI !== `3.142`) {
//   console.log(`Not Equal`);
// } else {
//   console.log(`Equal`);
// }

// if (PI !== 3.142) {
//   console.log(`Not Equal`);
// } else {
//   console.log(`Equal`);
// }

/*------------------------------------------While Loop----------------------------------------*/

// let userName = ``;

// if (userName === ``) {
//   console.log(`Please enter a valid username`);
// } else {
//   console.log(`Welcome, ${userName}`);
// }

// let userName = ``;

// while (userName === ``) {
//   console.log(`Please enter a valid username`);
// }
// console.log(`Welcome, ${userName}!`);

// let userName = ``;

// while (userName === ``) {
//   userName = window.prompt(`Please enter a valid username`);
// }
// console.log(`Welcome, ${userName}!`);

// let userName = ``;

// while (userName === `` || userName === null) {
//   userName = window.prompt(`Please enter a valid username`);
// }
// console.log(`Welcome, ${userName}!`);

// let userName = ``;
// let userName;

// do {
//   userName = window.prompt(`Please enter a valid username`);
// } while (userName === `` || userName === null);

// console.log(`Welcome, ${userName}!`);

// let loggedIn = false;
// let userName;
// let password;

// while (!loggedIn) {
//   userName = window.prompt(`Enter your username`);
//   password = window.prompt(`Enter your password`);

//   if (userName === `myUserName` && password === `myPassword`) {
//     loggedIn = true;
//     console.log(`Welcome, ${userName}!`);
//   } else {
//     console.log(`Invalid credentials`);
//   }
// }

/*------------------------------------------For Loop----------------------------------------*/

// for (let i = 0; i < 5; i++) {
//   console.log(`Hello`);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }
// console.log(`Lift off!`);

// for (let i = 10; i > 0; i -= 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 6) {
//     break;
//   }
//   console.log(i);
// }

/*--------------------------------------Number guessing game----------------------------------*/

// let minimum = 1;
// let maximum = 100;
// let answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = window.prompt(`Enter your guess`);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     console.log(`Please enter a valid number`);
//   } else if (guess < minimum || guess > maximum) {
//     console.log(`Please enter a number between ${minimum} and ${maximum}`);
//   } else {
//     attempts++;
//     if (guess === answer) {
//       console.log(`Congratulations! You guessed the correct number!`);
//       console.log(`It took you ${attempts} attempts`);
//       running = false;
//     } else if (guess < answer) {
//       console.log(`Try higher`);
//     } else {
//       console.log(`Try lower`);
//     }
//   }
// }

/*-------------------------------------------Function-----------------------------------------*/

// function happyBirthday() {
//   console.log(`Happy Birthday to you!`);
//   console.log(`Happy Birthday to you!`);
//   console.log(`Happy Birthday dear Bro!`);
//   console.log(`Happy Birthday to you!`);
// }

// happyBirthday();
// happyBirthday();
// happyBirthday();

// function happyBirthday(userName, userAge) {
//   console.log(`Happy Birthday to you!`);
//   console.log(`Happy Birthday to you!`);
//   console.log(`Happy Birthday dear ${userName}!`);
//   console.log(`Happy Birthday to you!`);
//   console.log(`You are ${userAge} years old!`);
// }

// happyBirthday(`Bro`, 25);
// happyBirthday(`Code`, 30);
// happyBirthday(`Bro Code`, 35);

// function add(x, y) {
//   return x + y;
// }
// console.log(add(5, 10));

// function subtract(x, y) {
//   return x - y;
// }
// console.log(subtract(10, 5));

// function multiply(x, y) {
//   return x * y;
// }
// console.log(multiply(5, 10));

// function divide(x, y) {
//   return x / y;
// }
// console.log(divide(10, 5));

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEven(num) {
//   return num % 2 === 0 ? true : false;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(10));
// console.log(isEven(5));

// function isValidEmail(email) {
//   return email.includes(`@`);
// }

// console.log(isValidEmail(`haris@fake.com`));
// console.log(isValidEmail(`harisfake.com`));

/*---------------------------------------Variable Scope---------------------------------------*/

// let x = 100; // IMPORTANT : we have to assign before calling

// function1();
// function2();

// function function1() {
//   let x = 10;
//   console.log(x);
// }
// function function2() {
//   let x = 20;
//   console.log(x);
// }

// function function1() {
//   let x = 10;
//   console.log(y);
// }
// function function2() {
//   let y = 20;
//   console.log(x);
// }

// function function1() {
//   console.log(x);
// }
// function function2() {
//   console.log(x);
// }

// function function1() {
//   let x = 10;
//   console.log(x);
// }
// function function2() {
//   let x = 20;
//   console.log(x);
// }

/*-------------------------------------------------------Arrays----------------------------------------------------*/

// let fruits = [`Apple`, `Banana`, `Cherry`, `Date`];
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// console.log(fruits[4]);
// fruits[4] = `Elderberry`;
// console.log(fruits[4]);

// fruits.push(`Mango`);
// fruits.pop();
// fruits.unshift(`Mango`);
// fruits.shift();
// console.log(fruits);

// let numberOfFruits = fruits.length;
// console.log(numberOfFruits);

// let index = fruits.indexOf(`Cherry`);
// let index = fruits.indexOf(`Grape`);
// console.log(index);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// fruits.sort();
// fruits.sort().reverse();
// console.log(fruits);

/*-----------------------------------------------------2D-Arrays---------------------------------------------------*/

// let fruits = [
//   [`Apple`, `Banana`, `Cherry`],
//   [`Date`, `Elderberry`, `Fig`],
//   [`Grape`, `Honeydew`, `Ice Cream Bean`],
// ];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let row of fruits) {
//   console.log(row);
// }

// for (let row of fruits) {
//   let rowString = row.join(` `);
//   console.log(rowString);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let row of matrix) {
//   let rowString = row.join(` `);
//   console.log(rowString);
// }

// matrix[0][0] = `X`;
// matrix[0][1] = `0`;
// matrix[0][2] = `X`;

// matrix[1][0] = `0`;
// matrix[1][1] = `X`;
// matrix[1][2] = `0`;

// matrix[2][0] = `X`;
// matrix[2][1] = `0`;
// matrix[2][2] = `X`;

// for (let row of matrix) {
//   let rowString = row.join(` `);
//   console.log(rowString);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9],
// ];

// for (let row of matrix) {
//   let rowString = row.join(` `);
//   console.log(rowString);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [`*`, 0, `#`],
// ];

// for (let row of matrix) {
//   let rowString = row.join(` `);
//   console.log(rowString);
// }

/*---------------------------------------------------Spread Operators----------------------------------------------*/

// let numbers = [1, 2, 3, 4, 5];

// let maximum = Math.max(numbers);
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum);
// console.log(minimum);

// let userName = `BroCode`;
// let letters = [...userName].join(`-`);
// console.log(letters);

// let fruits = [`Apple`, `Banana`, `Cherry`, `Date`];
// let fruitsCopy = [...fruits];

// console.log(fruits);
// console.log(fruitsCopy);

// let fruits = [`Apple`, `Banana`, `Cherry`, `Date`];
// let vegetables = [`Carrots`, `Potattos`];

// let foods = [...fruits, ...vegetables, `Eggs`, `Milk`];
// console.log(foods);

/*---------------------------------------------------Rest parameters-----------------------------------------------*/

// function openFridge(...items) {
//   console.log(items);
//   console.log(...items);
// }
// let item1 = `Milk`;
// let item2 = `Eggs`;
// let item3 = `Cheese`;
// let item4 = `Butter`;
// openFridge(item1, item2, item3, item4);

// let item1 = `Milk`;
// let item2 = `Eggs`;
// let item3 = `Cheese`;
// let item4 = `Butter`;
// function getItems(...items) {
//   return items;
// }
// let groceries = getItems(item1, item2, item3, item4);
// console.log(groceries);

// function add(...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// function average(...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum / numbers.length;
// }
// let total = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let avg = average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(total);
// console.log(avg);

// function combineStrings(...strings) {
//   return strings.join(` `);
// }
// let fullName = combineStrings(`Mr.`, `SpongeBob`, `SquarePants`);
// console.log(fullName);

/*-------------------------------------------------------Callbacks--------------------------------------------------*/

// hello();

// function hello() {
//   console.log(`Hello`);
// }

// hello();
// goodbye();

// function hello() {
//   console.log(`Hello`);
// }
// function goodbye() {
//   console.log(`Goodbye`);
// }

// hello();
// goodbye();

// function hello() {
//   setTimeout(() => {
//     console.log(`Hello`);
//   }, 3000);
// }
// function goodbye() {
//   console.log(`Goodbye`);
// }

// hello(wait);

// function hello(callback) {
//   console.log(`Hello`);
//   callback();
// }
// function goodbye() {
//   console.log(`Goodbye`);
// }
// function leave() {
//   console.log(`Leave`);
// }
// function wait() {
//   console.log(`Wait`);
// }

// const myH1 = document.getElementById(`myH1`);
// sum(displayPage, 1, 2);
// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }
// function displayConsole(result) {
//   console.log(`The result is ${result}`);
// }
// function displayPage(result) {
//   myH1.textContent = `The result is ${result}`;
// }

/*------------------------------------------------------ForEach---------------------------------------------------*/

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// numbers.forEach(displayNumber);

// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array) {
//   array[index] = element * 3;
// }
// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }
// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }
// function displayNumber(number) {
//   console.log(number);
// }

// let fruits = [`apple`, `banana`, `cherry`, `date`];

// fruits.forEach(camelCase);
// fruits.forEach(displayFruit);

// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array) {
//   array[index] = element.toLowerCase();
// }
// function camelCase(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.slice(1).toLowerCase();
// }
// function displayFruit(fruit) {
//   console.log(fruit);
// }

/*-------------------------------------------------------Map()----------------------------------------------------*/

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);
// console.log(numbers);
// console.log(`Squared Array : ${squares}`);
// console.log(cubes);
// function square(element) {
//   return Math.pow(element, 2);
// }
// function cube(element) {
//   return Math.pow(element, 3);
// }

// const fruits = [`apple`, `banana`, `cherry`, `date`];

// const fruitsUpper = fruits.map(upperCase);
// const fruitsLower = fruits.map(lowerCase);

// console.log(fruitsUpper);
// console.log(fruitsLower);

// function upperCase(element) {
//   return element.toUpperCase();
// }
// function lowerCase(element) {
//   return element.toLowerCase();
// // }

// const dates = [`2024-5-30`, `2024-4-12`, `2012-12-12`];

// const formattedDates = dates.map(formatDate);
// console.log(formattedDates);

// function formatDate(element) {
//   let parts = element.split(`-`);
//   return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

/*-----------------------------------------------------Filter()---------------------------------------------------*/

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(even);
// console.log(evenNumbers);
// let oddNumbers = numbers.filter(odd);
// console.log(oddNumbers);
// function even(element) {
//   return element % 2 === 0;
// }
// function odd(element) {
//   return element % 2 !== 0;
// }

// const ages = [16, 17, 18, 19, 20, 21];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);
// console.log(adults);
// console.log(children);
// function isAdult(element) {
//   return element >= 18;
// }
// function isChild(element) {
//   return element < 18;
// }

// const fruits = [`apple`, `banana`, `cherry`, `date`];
// let shortFruits = fruits.filter(short);
// let longFruits = fruits.filter(long);
// console.log(shortFruits);
// console.log(longFruits);
// function short(element) {
//   return element.length <= 4;
// }
// function long(element) {
//   return element.length > 4;
// }

/*-----------------------------------------------------Reduce()---------------------------------------------------*/

// const prices = [150, 340, 125, 250];
// const total = prices.reduce(sum);
// console.log(`Rs ${total.toFixed(2)}`);
// function sum(accumulator, element) {
//   return accumulator + element;
// }

// const grades = [45, 56, 67, 78, 89, 90, 100, 56];
// const maxGrade = grades.reduce(getMax);
// const minGrade = grades.reduce(getMin);
// console.log(`Maximum Grade : ${maxGrade}`);
// console.log(`Minimum Grade : ${minGrade}`);
// function getMax(accumulator, element) {
//   return Math.max(accumulator, element);
// }
// function getMin(accumulator, element) {
//   return Math.min(accumulator, element);
// }

/*-----------------------------------------------Function Expressions---------------------------------------------*/

// funcion declaration
// function hello() {
//   console.log(`Hello`);
// }
// hello();
// setTimeout(hello, 3000);

// function expressions

// function as variable
// let hello = function () {
//   console.log(`Hello`);
// };
// hello();
// setTimeout(hello, 3000);

// function as value
// setTimeout(function () {
//   console.log(`hello`);
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(square);
// console.log(squaredNumbers);
// function square(element) {
//   return Math.pow(element, 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });
// console.log(squaredNumbers);
// const cubedNumbers = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });
// console.log(cubedNumbers);
// const evenNumbers = numbers.filter(function (element) {
//   return element % 2 === 0;
// });
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(function (element) {
//   return element % 2 !== 0;
// });
// console.log(oddNumbers);
// const total = numbers.reduce(function (accumulator, element) {
//   return accumulator + element;
// });
// console.log(total);

/*-------------------------------------------------Arrow Functions------------------------------------------------*/

// function hello() {
//   console.log(`Hello`);
// }
// let hello = function () {
//   console.log(`Hello`);
// };
// let hello = () => console.log(`Hello`);
// hello();

// let hello = (name) => console.log(`Hello ${name}!`);
// hello(`Haris`);

// let hello = (name) => {
//   console.log(`Hello ${name}!`);
//   console.log(`you are old`);
// };
// hello(`Haris`);

// let hello = (name, age) => {
//   console.log(`Hello ${name}!`);
//   console.log(`you are ${age} years old`);
// };
// hello(`Haris`, 22);

// function hello() {
//   console.log(`Hello`);
// }
// let hello = function () {
//   console.log(`Hello`);
// };
// setTimeout(hello, 3000);

// setTimeout(function () {
//   console.log(`Hello`);
// }, 3000);
// setTimeout(() => {
//   console.log(`Hello`);
// });

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares);
// const cubes = numbers.map((element) => Math.pow(element, 3));
// console.log(cubes);
// const evens = numbers.filter((element) => element % 2 === 0);
// console.log(evens);
// const odds = numbers.filter((element) => element % 2 !== 0);
// console.log(odds);
// const total = numbers.reduce((accumulator, element) => accumulator + element);
// console.log(total);

/*-----------------------------------------------JavaScript Objects-----------------------------------------------*/

// const person1 = {
//   firstName: `Haris`,
//   lastName: `Menan`,
//   age: 22,
//   isEmployed: false,
//   sayHello: function () {
//     console.log(`Hello....`);
//   },
//   sayBye: () => console.log(`Bye....`),
// };

// const person2 = {
//   firstName: `Hari`,
//   lastName: `Ni`,
//   age: 16,
//   isEmployed: false,
//   sayHello: function () {
//     console.log(`Helloooooooooo!`);
//   },
//   sayBye: () => console.log(`Byeeeeeeeee!`),
// };

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.sayBye();

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();
// person2.sayBye();

/*--------------------------------------------------What is THIS--------------------------------------------------*/

// const person1 = {
//   firstName: `Haris`,
//   lastName: `Menan`,
//   age: 22,
//   isEmployed: false,
//   sayHello: function () {
//     console.log(`Hellooooooo, This is ${firstName}!`);
//   },
// };

// const person1 = {
//   firstName: `Harismenan`,
//   favFood: `Briyani`,
//   sayHello: function () {
//     console.log(`Hellooooooo, This is ${this.firstName}!`);
//   },
//   eat: function () {
//     console.log(`I'm eating ${this.favFood}`);
//   },
// };

// person1.sayHello();
// person1.eat();

// console.log(this);

// this will not work properly inside arrow functions

/*--------------------------------------------------Constructors--------------------------------------------------*/

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`You are driving ${this.model}`);
//   };
// }
// function Car(a, b, c, d) {
//   this.make = a;
//   this.model = b;
//   this.year = c;
//   this.color = d;
// }

// const car1 = new Car(`Ford`, `mustang`, `2021`, `Red`);
// const car2 = new Car(`Toyota`, `CH-R`, `2021`, `White`);
// const car3 = new Car(`Ford`, `F150`, `2024`, `White`);

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);
// car3.drive();

/*----------------------------------------------------Classes-----------------------------------------------------*/

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   display() {
//     console.log(
//       `The product name is ${this.name} and the price is ${this.price}`
//     );
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const salesTax = 0.1;

// const product1 = new Product(`Laptop`, 50000);
// let total1 = product1.calculateTotal(salesTax);
// product1.display();
// console.log(`The total price of the product is ${total1}`);

// const product2 = new Product(`Mobile`, 20000);
// let total2 = product2.calculateTotal(salesTax);
// product2.display();
// console.log(`The total price of the product is ${total2}`);

// const product3 = new Product(`Tablet`, 10000);
// let total3 = product3.calculateTotal(salesTax);
// product3.display();
// console.log(`The total price of the product is ${total3}`);

/*------------------------------------------------Static Keyword--------------------------------------------------*/

// class MathUtility {
//   static PI = 3.142;
//   static getDiameter(radius) {
//     return 2 * radius;
//   }
//   static getCircumference(radius) {
//     return 2 * MathUtility.PI * radius;
//   }
//   static getArea(radius) {
//     return MathUtility.PI * Math.pow(radius, 2);
//   }
// }
// console.log(MathUtility.PI);
// console.log(MathUtility.getDiameter(10));
// console.log(MathUtility.getCircumference(10));
// console.log(MathUtility.getArea(10));

// class User {
//   static userCount = 0;
//   constructor(name) {
//     this.name = name;
//     User.userCount++;
//   }
//   sayHello() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
//   static displayUserCount() {
//     console.log(`There are ${User.userCount} users`);
//   }
// }
// const user1 = new User(`Haris`);
// const user2 = new User(`Menan`);
// const user3 = new User(`Harismenan`);
// console.log(User.userCount);
// console.log(user1.userCount); // It will not work
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// User.displayUserCount();

/*---------------------------------------------------Inheritance--------------------------------------------------*/

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`${this.name} is sleeping`);
//   }
// }
// class Dog extends Animal {
//   name = `Dog`;

//   bark() {
//     console.log(`Woof Woof`);
//   }
// }
// class Cat extends Animal {
//   name = `Cat`;

//   meow() {
//     console.log(`Meow Meow`);
//   }
// }
// class Hawk extends Animal {
//   name = `Hawk`;

//   fly() {
//     console.log(`Hawk is flying`);
//   }
// }
// const dog = new Dog();
// const cat = new Cat();
// const hawk = new Hawk();
// cat.alive = false;
// console.log(dog.alive);
// dog.eat();
// dog.sleep();
// dog.bark();
// console.log(cat.alive);
// cat.eat();
// cat.sleep();
// cat.meow();
// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();

/*---------------------------------------------------SUPER Keyword--------------------------------------------------*/

// class Animal {
//   constructor() {}
// }
// class Rabbit extends Animal {
//   constructor(name, age, runningspeed) {
//     super();
//     this.name = name;
//     this.age = age;
//     this.runningspeed = runningspeed;
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimingspeed) {
//     super();
//     this.name = name;
//     this.age = age;
//     this.swimingspeed = swimingspeed;
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flyingspeed) {
//     super();
//     this.name = name;
//     this.age = age;
//     this.flyingspeed = flyingspeed;
//   }
// }
// const rabbit = new Rabbit(`Rabbit`, 2, 10);
// const fish = new Fish(`Fish`, 1, 5);
// const hawk = new Hawk(`Hawk`, 3, 15);

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`${this.name} is moving at ${speed} km/hr`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, runningspeed) {
//     super(name, age);
//     this.runningspeed = runningspeed;
//   }
//   run() {
//     console.log(`${this.name} can run`);
//     super.move(this.runningspeed);
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimingspeed) {
//     super(name, age);
//     this.swimingspeed = swimingspeed;
//   }
//   swim() {
//     console.log(`${this.name} can swim`);
//     super.move(this.swimingspeed);
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flyingspeed) {
//     super(name, age);
//     this.flyingspeed = flyingspeed;
//   }
//   fly() {
//     console.log(`${this.name} can fly`);
//     super.move(this.flyingspeed);
//   }
// }
// const rabbit = new Rabbit(`Rabbit`, 2, 10);
// const fish = new Fish(`Fish`, 1, 5);
// const hawk = new Hawk(`Hawk`, 3, 15);
// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runningspeed);
// rabbit.run();
// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimingspeed);
// fish.swim();
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flyingspeed);
// hawk.fly();

/*-----------------------------------------------Getters and Setters----------------------------------------------*/

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }
// const rectangle = new Rectangle(-100000, `pizza`);
// console.log(rectangle.width);
// console.log(rectangle.height);

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newWidth) {
//     if (newWidth < 0 || typeof newWidth !== `number`) {
//       console.error(`Width must be a number and cannot be negative`);
//     } else {
//       this._width = newWidth;
//     }
//   }
//   set height(newHeight) {
//     if (newHeight < 0 || typeof newHeight !== `number`) {
//       console.error(`Height must be a number and cannot be negative`);
//     } else {
//       this._height = newHeight;
//     }
//   }
//   get width() {
//     return this._width.toFixed(1);
//   }
//   get height() {
//     return this._height.toFixed(1);
//   }
//   get area() {
//     return (this._width * this._height).toFixed(1);
//   }
// }
// const rectangle = new Rectangle(-100000, `pizza`);
// const rectangle = new Rectangle(10, 20);
// rectangle.width = 100000;
// rectangle.height = 200000;
// rectangle.width = -100000;
// rectangle.height = `pizza`;
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }
// const person = new Person(12, 33, `Pizza`);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   set firstName(newFirstName) {
//     if (typeof newFirstName === `string` && newFirstName !== ``) {
//       this._firstName = newFirstName;
//     } else {
//       console.error(`First name must be a non empty string`);
//     }
//   }
//   set lastName(newLastName) {
//     if (typeof newLastName === `string` && newLastName !== ``) {
//       this._lastName = newLastName;
//     } else {
//       console.error(`Last name must be a non empty string`);
//     }
//   }
//   set age(newAge) {
//     if (typeof newAge === `number` && newAge > 0) {
//       this._age = newAge;
//     } else {
//       console.error(`Age must be a positive number`);
//     }
//   }
//   get firstName() {
//     return this._firstName;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }
//   get age() {
//     return this._age;
//   }
// }
// const person = new Person(12, 33, `Pizza`);
// const person = new Person(`Haris`, `Menan`, 22);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);

/*--------------------------------------------------Destucturing--------------------------------------------------*/

// 1. swap the value of two variables
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// 2. swap two element in an array
// let numbers = [1, 2, 3, 4, 5];
// [numbers[0], numbers[1]] = [numbers[1], numbers[0]];
// console.log(numbers);

// 3. Assign array elements to variables
// let numbers = [1, 2, 3, 4, 5];
// let [first, second, third, ...remainingNummbers] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(remainingNummbers);

// 4. Extract values from an object
// let person1 = {
//   firstName: `Janar`,
//   lastName: `thanan`,
//   age: 16,
//   job: `Clark`,
// };
// let person2 = {
//   firstName: `Haris`,
//   lastName: `Menan`,
//   age: 22,
// };
// let { firstName, lastName, age, job  } = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);
// let { firstName, lastName, age, job } = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);
// let { firstName, lastName, age, job = `unemployed` } = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// 5. Distucture in function parameters
// let person1 = {
//   firstName: `Janar`,
//   lastName: `thanan`,
//   age: 16,
//   job: `Clark`,
// };
// let person2 = {
//   firstName: `Haris`,
//   lastName: `Menan`,
//   age: 22,
// };
// function displayPerson({ firstName, lastName, age, job }) {
//   console.log(`Name : ${firstName} ${lastName}`);
//   console.log(`Age : ${age}`);
//   console.log(`Job : ${job}`);
// // }
// function displayPerson({ firstName, lastName, age, job = `unemployed` }) {
//   console.log(`Name : ${firstName} ${lastName}`);
//   console.log(`Age : ${age}`);
//   console.log(`Job : ${job}`);
// }
// displayPerson(person1);
// displayPerson(person2);

/*-------------------------------------------------Nested Objects-------------------------------------------------*/

// const person = {
//   fullName: `Haris Menan`,
//   age: 22,
//   job: `Developer`,
//   hobbies: [`Coding`, `Reading`, `Gaming`],
//   address: {
//     steet: `No 14, Thulakkaddu lane`,
//     city: `Nelliady`,
//     country: `Sri Lanka`,
//   },
// };
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.job);
// console.log(person.hobbies);
// console.log(person.hobbies[0]);
// console.log(person.hobbies[1]);
// console.log(person.hobbies[2]);
// console.log(person.address);
// console.log(person.address.steet);
// console.log(person.address.city);
// console.log(person.address.country);
// // for (property in person.address) {
// //   console.log(person.address[property]);
// // }

// class Person {
//   constructor(firstName, lastName, ...address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = new Address(...address);
//   }
// }
// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }
// const person1 = new Person(
//   `Haris`,
//   `Menan`,
//   `No 14, Thulakkaddu lane`,
//   `Nelliady`,
//   `Sri Lanka`
// );
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.address);
// console.log(person1.address.street);
// console.log(person1.address.city);
// console.log(person1.address.country);
// const person2 = new Person(
//   `Janar`,
//   `Thanan`,
//   `No 14, Thulakkaddu lane`,
//   `Nelliady`,
//   `Sri Lanka`
// );
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.address);
// console.log(person2.address.street);
// console.log(person2.address.city);
// console.log(person2.address.country);

/*------------------------------------------------Array of Objects------------------------------------------------*/

// const fruits = [
//   { name: `Apple`, color: `Red`, calories: 100 },
//   { name: `Banana`, color: `Yellow`, calories: 150 },
//   { name: `Cherry`, color: `Red`, calories: 50 },
//   { name: `Date`, color: `Brown`, calories: 200 },
//   { name: `Elderberry`, color: `Black`, calories: 250 },
// ];

// console.log(fruits[0].name);
// console.log(fruits[0].color);
// console.log(fruits[0].calories);
// console.log(fruits[1].name);
// console.log(fruits[1].color);
// console.log(fruits[1].calories);
// console.log(fruits[2].name);
// console.log(fruits[2].color);
// console.log(fruits[2].calories);
// console.log(fruits[3].name);
// console.log(fruits[3].color);
// console.log(fruits[3].calories);
// console.log(fruits[4].name);
// console.log(fruits[4].color);
// console.log(fruits[4].calories);

// for (let fruit of fruits) {
//   console.log(fruit.name);
//   console.log(fruit.color);
//   console.log(fruit.calories);
// }

// fruits.push({ name: `Fig`, color: `Green`, calories: 300 });
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.splice(1, 2);
// console.log(fruits);

// fruits.forEach((fruit) => console.log(fruit));
// fruits.forEach((fruit) => {
//   console.log(fruit.name);
//   console.log(fruit.color);
//   console.log(fruit.calories);
// });

// const fruitNames = fruits.map((fruit) => fruit.name);
// console.log(fruitNames);
// const fruitColors = fruits.map((fruit) => fruit.color);
// console.log(fruitColors);
// const fruitCalories = fruits.map((fruit) => fruit.calories);
// console.log(fruitCalories);

// const redFruits = fruits.filter((fruit) => fruit.color === `Red`);
// console.log(redFruits);
// const highCalorieFruits = fruits.filter((fruit) => fruit.calories > 100);
// console.log(highCalorieFruits);

// const maxCalFruit = fruits.reduce((maxCalFruit, fruit) =>
//   fruit.calories > maxCalFruit.calories ? fruit : maxCalFruit
// );
// console.log(maxCalFruit);
// const minCalFruit = fruits.reduce((minCalFruit, fruit) =>
//   fruit.calories < minCalFruit.calories ? fruit : minCalFruit
// );
// console.log(minCalFruit);

// Note :
// forEach() => element, index, array
// filter() => element
// map() => element
// reduce() => accumulator, element

/*----------------------------------------------------Sorting-----------------------------------------------------*/

// total 4 types of sorts
// 1. .sort()
// 2. .sort((a, b) => a - b)
// 3. .sort((a, b) => b.age - a.age)
// 4. .sort((a, b) => a.name.localeCompare(b.name))

// const fruits = [`cherry`, `banana`, `apple`, `date`, `elderberry`];
// fruits.sort();
// console.log(fruits);

// const numbers = [10, 5, 20, 15, 25];
// numbers.sort(); // it will not work properly
// numbers.sort((a, b) => a - b); // ascending order
// numbers.sort((a, b) => b - a); // descending order
// console.log(numbers);

// const people = [
//   { name: `Haris`, age: 22, gpa: 3.5 },
//   { name: `Janar`, age: 16, gpa: 3.0 },
//   { name: `Thanan`, age: 18, gpa: 3.2 },
//   { name: `Menan`, age: 20, gpa: 3.4 },
// ];
// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => b.age - a.age);
// people.sort((a, b) => a.gpa - b.gpa);
// people.sort((a, b) => b.gpa - a.gpa);
// people.sort((a, b) => a.name.localeCompare(b.name));
// people.sort((a, b) => b.name.localeCompare(a.name));
// console.log(people);

/*-------------------------------------------------Suffle an Array------------------------------------------------*/

// const cards = [
//   `A`,
//   `2`,
//   `3`,
//   `4`,
//   `5`,
//   `6`,
//   `7`,
//   `8`,
//   `9`,
//   `10`,
//   `J`,
//   `Q`,
//   `K`,
// ];
// cards.sort(() => Math.random() - 0.5);
// console.log(cards);

// Fisher-Yates Shuffle Algorithm
// const cards = [
//   `A`,
//   `2`,
//   `3`,
//   `4`,
//   `5`,
//   `6`,
//   `7`,
//   `8`,
//   `9`,
//   `10`,
//   `J`,
//   `Q`,
//   `K`,
// ];
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
// console.log(shuffle(cards));

/*------------------------------------------------------Dates-----------------------------------------------------*/

// const now = new Date();
// console.log(now);

// const date1 = new Date(2024, 4, 30, 12, 30, 0, 0);
// console.log(date1);

// const date2 = new Date(`2024-01-03T12:30:00Z`);
// console.log(date2);

// const date3 = new Date(17000);
// console.log(date3);

// // const date = new Date();
// console.log(`Year : ${date.getFullYear()}`);
// console.log(`Month : ${date.getMonth()}`);
// console.log(`Date : ${date.getDate()}`);
// console.log(`Day : ${date.getDay()}`);
// console.log(`Hours : ${date.getHours()}`);
// console.log(`Minutes : ${date.getMinutes()}`);
// console.log(`Seconds : ${date.getSeconds()}`);
// console.log(`Milliseconds : ${date.getMilliseconds()}`);

// const date = new Date();
// date.setFullYear(2024);
// date.setMonth(1);
// date.setDate(18);
// date.setHours(12);
// date.setMinutes(30);
// date.setSeconds(0);
// date.setMilliseconds(0);
// console.log(date);

// const date1 = new Date(`2023-12-31`);
// const date2 = new Date(`2024-01-1`);
// if (date1 < date2) {
//   console.log(`Date1 is before Date2`);
// } else if (date1 > date2) {
//   console.log(`Date1 is after Date2`);
// }

/*----------------------------------------------------Closures----------------------------------------------------*/

// function outerFunction() {
//   let outerVariable = `Outer Variable`;
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction();
// }
// outerVariable = `changed`; // it will not work
// outerFunction();

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`Incresed count : ${count}`);
//   }
//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(`The count is ${counter.getCount()}`);

// function scoreManager() {
//   let score = 0;
//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`);
//   }
//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`);
//   }
//   function getScore() {
//     return score;
//   }
//   return { increaseScore, decreaseScore, getScore };
// }

// const score = scoreManager();
// score.increaseScore(10);
// score.increaseScore(20);
// score.decreaseScore(5);
// console.log(`The score is ${score.getScore()}`);

/*--------------------------------------------------setTimeOut()--------------------------------------------------*/

// function sayHello() {
//   window.alert(`Hello`);
// }
// setTimeout(sayHello, 3000);

// setTimeout(function () {
//   window.alert(`Hello`);
// }, 3000);

// setTimeout(() => {
//   window.alert(`Hello`);
// }, 3000);

// let timeOutID = setTimeout(() => {
//   window.alert(`Hello`);
// }, 3000);
// clearTimeout(timeOutID);

// let timeOutID;
// function startTimer() {
//   timeOutID = setTimeout(() => {
//     window.alert(`Hello!`);
//   }, 3000);
//   console.log(`Started`);
// }
// function stopTimer() {
//   clearTimeout(timeOutID);
//   console.log(`Stopped`);
// }

/*---------------------------------------------------Es6 Modules--------------------------------------------------*/

// import { PIE, getArea, getCircumference, getVolume } from "./mathUtil.js";

// console.log(PIE);
// console.log(`Area : ${getArea(10).toFixed(2)}`);
// console.log(`Circumference : ${getCircumference(10).toFixed(2)}`);
// console.log(`Volume : ${getVolume(10).toFixed(2)}`);

/*-------------------------------------------------Asynchronus Code-----------------------------------------------*/

// Synchronus
// console.log(`Task 1`);
// console.log(`Task 2`);
// console.log(`Task 3`);
// console.log(`Task 4`);

// Asynchronus
// setTimeout(() => {
//   console.log(`Task 1`);
// }, 3000);
// console.log(`Task 2`);
// console.log(`Task 3`);
// console.log(`Task 4`);

// Callbacks
// function func1(callBack) {
//   setTimeout(() => {
//     console.log(`Task 1`);
//     callBack();
//   }, 3000);
// }
// function func2() {
//   console.log(`Task 2`);
//   console.log(`Task 3`);
//   console.log(`Task 4`);
// }
// func1(func2);

/*-------------------------------------------------Error Handling-------------------------------------------------*/

// No Error
// console.log(`Hello!`);
// console.log(`You have reached the end!`);

// Type Error
// console.lag(`Hello!`);
// console.log(`You have reached the end!`);

// Reference Error
// console.log(X);
// console.log(`You have reached the end!`);

// try {
//   //   console.log(X);
//   console.log(`Hello!`);
// } catch (error) {
//   //   console.log(error);
//   console.error(error);
// } finally {
//   console.log(`This always executes`);
// }
// console.log(`You have reached the end!`);

// const dividend = window.prompt(`Enter a dividend : `);
// const divisor = window.prompt(`Enter a divisor : `);
// const result = dividend / divisor;
// console.log(`Result : ${result}`);

try {
  const dividend = Number(window.prompt(`Enter a dividend : `));
  const divisor = Number(window.prompt(`Enter a divisor : `));
  if (divisor == 0) {
    throw new Error(`You can't divide by zero`);
  } else if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error(`Values must be a number`);
  }
  const result = dividend / divisor;
  //   console.lag(`Result : ${result}`);
  console.log(`Result : ${result}`);
} catch (error) {
  console.error(error);
}
console.log(`You have reached the end!`);
