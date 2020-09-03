/*1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

```js
(function () {
  var a = (b = 3);
})();
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));
```

2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
*/
//Task #1 :::
(function () {
  var a = (b = 3);
  console.log(a); /*This shows that a === 3 inside the function*/
  console.log(b);
})();
console.log(
  "a defined? " + (typeof a !== "undefined")
); /* should show as 'a defined? false' - Because A is not defined outside of the function. */
console.log("b defined? " + (typeof b !== "undefined"));
console.log(
  b
); /* should show as 'b defined? true' - Because B is defined as 3 in the global scope.*/

// Task #2 :::
function createBase(baseNum) {
  return function (num) {
    console.log(baseNum + num);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(21);
addSix(47);

function createBase2(baseNum) {
  return function (num) {
    console.log(baseNum + num * 5);
  };
}
var logicRiddle = createBase2(4);
logicRiddle(3);
logicRiddle(4);
logicRiddle(5);

//Task #3 :::

//information from: https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526#:~:text=Both%20Functional%20programming%20and%20object,data%20is%20stored%20in%20objects. //
const functionalProg = [
  {
    definition: "emphasizes on evaluation of functions.",
    data: "uses immutable data",
    model: "does follow declarative programming model.",
    support: "parallel programming supported",
    execution: "the statements can be executed in any order",
    iteration: "recursion is used for iterative data",
    element: "the basic elements are variables and functions",
    use:
      "used when there are a few things with more operations -- function driven",
    pros:
      "reusable, flexible, allows for heavy function use, supports parallel programming",
    cons: "not ideal for unique data, immutable",
  },
];
const objectOrientedProg = [
  {
    definition: "based on concept of objects",
    data: "uses mutable data",
    model: "follows imperative programming model",
    support: "does NOT support parallel programming",
    execution: "statements should be executed in a particular order",
    iteration: "loops are used for iterative data",
    element: "the basic elements are objects and methods",
    use: "used when there are many thing with few operations -- data driven",
    pros:
      "uses mutable data, uses objects and other forms of data, ideal for unique 'project based' programming",
    cons:
      "not reusable programming, would need to create a newly brand new code for every project, parallel programming is not supported",
  },
];
const prosCons = function (object1, object2) {
  console.log(`Functional Programming >>>`);
  console.log(object1);
  console.log(`Object Oriented Programming >>>`);
  console.log(object2);
};
prosCons(functionalProg, objectOrientedProg);

//Just playing around//
const nelsonFam = ["Alex", "Amanda", "Clementine", "Kiwi"];
const whosFault = function (array, index) {
  console.log(`It's always ${array[index]}'s fault.`);
};
whosFault(nelsonFam, 3);
