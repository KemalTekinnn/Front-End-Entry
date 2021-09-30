"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest === true) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) console.log("You can drive");

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} Apples and ${oranges} Oranges`;
//   return juice;
// }

// const anan = fruitProcessor(5, 6);
// console.log(anan);

// function calcAge1(year) {
//   return 2021 - year;
// }

// const age1 = calcAge1(2000);
// console.log(age1);

// const calcAge2 = function calcAge1(year) {
//   return 2021 - year;
// };

// const age2 = calcAge2(2000);
// console.log(age2);

// var average = (a, b, c) => (a + b + c) / 3;

// const dolpins1 = 85;
// const dolpins2 = 54;
// const dolpins3 = 41;

// const koala1 = 23;
// const koala2 = 34;
// const koala3 = 27;

// let avgDolphins = average(dolpins1, dolpins2, dolpins3);
// let avgKoala = average(koala1, koala2, koala3);

// function checkWinner() {
//   if (avgDolphins >= avgKoala * 2) {
//     console.log(
//       `Dolphins win with ${avgDolphins} Score And Koalas lose with ${avgKoala}`
//     );
//   } else {
//     if (avgKoala >= avgDolphins * 2) {
//       console.log(
//         `Koalas win with ${avgKoala} Score And Dolphins lose with ${avgDolphins}`
//       );
//     } else {
//       console.log("No one win");
//     }
//   }
// }

// console.log(checkWinner());

// const kemal = ["Kemal", 21, "BA", "Athlete"];
// console.log(kemal);

// const friend = ["Micheal", "Steven", "Peter"];

// const newLength = friend.push("jay");
// console.log(friend);
// console.log(newLength);

// friend.pop();
// const popped = friend.pop();
// console.log(popped);
// console.log(friend);

// friend.shift();
// console.log(friend);

// console.log(friend.indexOf("Steven"));
// console.log(friend.indexOf("Bob"));

// console.log(friend.includes("Steven"));

// const tips = [];
// const total = [];
// let tipV;
// function calcTip(bill) {
//   if (50 <= bill && bill <= 300) {
//     tipV = bill * 0.15;
//     tips.push(tipV);
//   } else {
//     tipV = bill * 0.2;
//     tips.push(tipV);
//   }
//   const tot = bill + tipV;
//   total.push(tot);
//   return tot;
// }

// calcTip(125);
// calcTip(555);
// calcTip(44);

// console.log(tips);
// console.log(total);

// const kemal = {
//   name: "Kemal",
//   surname: "Tekin",
//   job: "student",
//   birthyear: 2000,
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthyear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.name} is a ${this.calcAge()} year old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(kemal.job);
// console.log(kemal["job"]);
// console.log(kemal.calcAge());
// const interestedIn = prompt("age,job,name,surname");
// if (kemal[interestedIn]) {
//   console.log(kemal[interestedIn]);
// } else {
//   console.log("Error");
// }
// if (kemal.hasDriversLicense) {
//   console.log(
//     `${kemal.name} is a ${kemal.calcAge()} years old ${
//       kemal.job
//     } and he has a driver's license`
//   );
// } else {
//   console.log(
//     `${kemal.name} is a ${kemal.calcAge()} years old ${
//       kemal.job
//     } and he has no driver's license`
//   );
// }

// console.log(kemal.getSummary());

// const Mark = {
//   fullName: "Mark Miller",
//   height: 1.69,
//   mass: 78,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const John = {
//   fullName: "John Smith",
//   height: 1.95,
//   mass: 150,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// console.log(Mark.calcBMI(), John.calcBMI());
// if (Mark.calcBMI() > John.calcBMI()) {
//   console.log(
//     `${Mark.fullName}'s BMI ${Mark.calcBMI()} higher than ${
//       John.fullName
//     }'s ${John.calcBMI()}'`
//   );
// } else {
//   if (Mark.calcBMI() === John.calcBMI()) {
//     console.log("Equal");
//   } else {
//     console.log(
//       `${John.fullName}'s BMI ${John.bmi} higher than ${Mark.fullName}'s ${Mark.bmi}`
//     );
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Litfing weights repetition ${rep}`);
// }

// const kemal = ["Kemal", "Tekin", 2021 - 2000, ["Bora", "Betül", "Seda"]];

// for (let i = 0; i < kemal.length; i++) {
//   console.log(kemal[i]);
// }

// const years = [1991, 2000, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// const kemal = ["Kemal", "Tekin", 2021 - 2000, ["Bora", "Betül", "Seda"]];

// for (let i = kemal.length - 1; i >= 0; i--) {
//   console.log(kemal[i]);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let tipV;
let total;

function calcTip(bill) {
  if (50 <= bill && bill <= 300) {
    tipV = bill * 0.15;
    tips.push(tipV);
  } else {
    tipV = bill * 0.2;
    tips.push(tipV);
  }
  total = bill + tipV;
  totals.push(total);
}

for (let i = 0; i <= bills.length - 1; i++) {
  console.log(bills[i]);
  calcTip(bills[i]);
}
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
