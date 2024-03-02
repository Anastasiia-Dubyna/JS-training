/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// const time = 90;
// const hour = String(Math.floor(time / 60)).padStart(2, 0);

// const minutes = String(time % 60).padStart(2, 0);

// console.log(`${hour}:${minutes}`);

// const string = "static method returns the value";
// console.log(string.split("t"));
// console.log("A", "A".charCodeAt(0));
// console.log("a", "a".charCodeAt(0));
// console.log("b", "b".charCodeAt(0));
//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log("a" < "b");
// console.log("b" < "a");
// console.log("A" < "a");
// console.log("a p p l e" < "a p p n anana");
// console.log("apple" > "yellow");
// console.log("bananana" < "apple");
// console.log(true < false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не суворе рівенство (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined === undefined);
// console.log(NaN === NaN);

// console.log('123' === 123);
//
// console.log("4" != 4);
//* && - запинається на (false)брехні
//* Якщо всі операнди були дійсними, повертається останній.
//* Якщо результат лівого операнда false, зупиняється та повертає вихідне значення цього операнда.

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "kiwi");
// console.log(true && 0 && "kiwi");

// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);

// console.log(null || (2 && 3) || 4);

//? Перетворення типів
// console.log(2 + 5 + "" + 1 + 0);
// console.log("" + 1);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("  -9  " + 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("" + 1);
// console.log(3 > 2 > 1);

// function generateLink(user) {
//   const BASE_URL = "http://www.codewars.com/users/";

//   return `${BASE_URL}${encodeURIComponent(user)}`;
//   console.log(user);
// }
// console.log(generateLink("matt c"));

// const user = {
//   name: "Mango",
//   age: "21",
// };

// for (const key of Object.keys(user)) {
//   console.log(user[key]);
// }

// const countUsers = {
//   name: "Mango",
// };
// const qwe = countUsers;
// countUsers.name = "Polly";
// console.log("countUsers:", countUsers, "qwe:", qwe);

// let a = 21;
// const b = a;
// a = 34;
// console.log("a:", a, "b:", b);
// function calculateAge(a, b) {
//   if (a < b) {
//     return `You are ${b - a} year${b - a === 1 ? "" : "s"} old.`;
//   } else if (a > b) {
//     return `You will be born in ${a - b} year${a - b === 1 ? "" : "s"}.`;
//   } else if (a === b) {
//     return `You were born this very year!`;
//   }
// }
// console.log(calculateAge(2012, 2016));
// console.log(calculateAge(2000, 1990));
// console.log(calculateAge(2012, 2012));

// function stairsIn20(s) {
//   const normalizeArr = s.flat();
//   let total = 0;
//   for (let i = 0; i < normalizeArr.length; i += 1) {
//     total += normalizeArr[i];
//   }
//   return total * 20;
// }
// stairsIn20([[1], [2], [3], [4], [5], [6], [7]]);

// const arr = [1, 11, 100, 1000, 2, 3, 1, 11, 3];
// const arr2 = [...arr].sort((a, b) => a - b);
// console.log(arr2);
// const filteredArr = arr.filter(
//   (number, index, array) => array.indexOf(number) === index
// );
// const filteredArr = arr.reduce(
//   (acc, number) => (!acc.includes(number) ? [...acc, number] : acc),
//   []
// );

// console.log(filteredArr);
// const string =
//   "(acc, number) => (!acc.includes(number) ? [...acc, number] : acc)";

// const arr = string.split("");
// console.log(arr);

// const result = arr.reduce((acc, element) => {
// if (!acc[element]) {
//   acc[element] = 1;
// } else {
//   acc[element] += 1;
// }
//   return { ...acc, [element]: acc[element] ? acc[element] + 1 : 1 };
// }, {});
// console.log(result);
// function doubleChar(str) {
//   console.log(str);
//   const arr = [];
//   for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i] + str[i]);
//     arr.push(str[i] + str[i]);
//   }
//   console.log(arr.join(""));
// }
// doubleChar("abcd");

// function pipeFix(numbers) {
//   const arr = [];
//   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i += 1) {
//     arr.push(i);
//   }
//   return arr;
// }
// pipeFix([1, 2, 3, 5, 6, 8, 9]);

// function warnTheSheep(queue) {
//   const indexOfWolf = queue.indexOf("wolf");
//   if (indexOfWolf === queue.length - 1) {
//     return "Pls go away and stop eating my sheep";
//   }
//   return `Oi! Sheep number ${
//     queue.length - indexOfWolf - 1
//   }! You are about to be eaten by a wolf!`;
// }
// warnTheSheep([
//   "sheep",
//   "sheep",
//   "sheep",
//   "sheep",
//   "sheep",
//   "sheep",
//   "sheep",
//   "wolf",
// ]);
// const cannonsReady = (gunners) => {
//   const arr = Object.values(gunners);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "nay") {
//       return "Shiver me timbers!";
//     }
//     console.log(arr[i]);
//   }
//   return "Fire!";
//   // return isIncludes ? "Shiver me timbers!" : "Fire!";
// };

// let a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };

// console.log(cannonsReady(a));

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       return 0;
//   }
// }

// console.log(basicOp("+", 4, 7));

// function logicalCalc(array, op) {
//   switch (op) {
//     case "AND":
//       return array.reduce((prev, elem) => prev && elem);
//     case "OR":
//       return array.reduce((prev, elem) => prev || elem);
//     case "XOR":
//       return array.reduce((prev, elem) => prev !== elem);
//     default:
//       break;
//   }
// }
// console.log(logicalCalc([true, true, true, false]));
// const object = { "School Counselor": "Anything with Alcohol" };
// console.log(object["School Counselor"]);

// function mergeArrays(arr1, arr2) {
//   const arr3 = arr1.concat(arr2).sort((a, b) => a - b);
//   return arr3.filter((number, index, array) => array.indexOf(number) === index);
// }

// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
// function remove(string) {
//   const arr = string.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[arr.length - 1 - i] === "!") {
//       arr.pop();
//     } else {
//       return arr.join("");
//     }
//   }
// }

// console.log(remove("Hi!!!"));

// function squareOrSquareRoot(array) {
//   return array.map((el) => {
//     const sqrtEl = Math.sqrt(el);
//     if (Number.isInteger(sqrtEl)) {
//       return sqrtEl;
//     }
//     return el * el;
//   });
// }
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
// const num = 0;
// console.log(num.toString(2));
// console.log("b".charCodeAt(0));

function Car(model) {
  this.model = model;
}

Car.prototype.getModel = function () {
  // console.log(this.model);
};

const audi = new Car("audi");
// console.log(audi.__proto__ === Car.prototype); //що буде в консолі?

const volvo = new Car("volvo");
// console.log(volvo.__proto__); //що буде в консолі?

//===============================
// console.log({}.prototype === {}.__proto__);

//===============================
function Component() {}
// console.log(Component.__proto__ === Function.prototype);
// console.log(Component.prototype === Component.__proto__);
// console.log(Car.prototype);

//===============================
function ComponentB() {}
// console.log(Component.__proto__ === ComponentB.__proto__);
// console.log(Component.prototype === ComponentB.prototype);
// console.log(Component.prototype);
//===============================
const arrowAdd = () => {};
// console.log(arrowAdd.prototype === Object.prototype);
// console.log(arrowAdd.prototype);
//===============================
const valueA = 5;
// console.log(valueA.prototype === Number.prototype);
// console.log(valueA.__proto__ === Number.prototype);

//===============================
// console.log(Car.__proto__ === Function.prototype);
// console.log(Number.__proto__ === Function.prototype);
// console.log(Array.__proto__ === Function.prototype);
// console.log(Boolean.__proto__ === Function.prototype);
// console.log(Object.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
//===============================
const age = 21;
// console.log(age.__proto__ === Number.prototype);
// console.log(age.__proto__.__proto__ === Number.prototype.__proto__);
// console.log(
//   age.__proto__.__proto__.__proto__ === Number.prototype.__proto__.__proto__
// );
// console.log(Number.prototype.__proto__ === Object.prototype);
// console.log(
//   Number.prototype.__proto__.__proto__ === Object.prototype.__proto__
// );
// console.log(Object.prototype.__proto__);

// console.log(age.__proto__.__proto__.__proto__ === Object.prototype.__proto__);

//Цей запис має сенс? якщо так, то що потрібно вказати, щоб було true?

// console.log(age.__proto__.__proto__.__proto__ === null);
// console.log(6 % 6);
