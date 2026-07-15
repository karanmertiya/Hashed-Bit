/**
 * JS Practice 1 - Delta
 */

// 1. Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function scopeDifference() {
    var a = "var is function-scoped (or globally scoped if declared outside a function). It can be redeclared and updated.";
    let b = "let is block-scoped. It can be updated but not redeclared within the same scope.";
    const c = "const is block-scoped. It cannot be updated or redeclared, and must be initialized upon declaration.";
    console.log(a, b, c);
}

// 2. Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
function getSecondFruit() {
    return fruits[1];
}

// 3. Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}

// 4. Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
const numbersArray = [1, 2, 3, 4, 5];
function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}

// 5. Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers.
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}

// 6. Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};
function greetPerson(p) {
    console.log(`Hello! My name is ${p.name}. I am ${p.age} years old and I work as a ${p.occupation}.`);
}

// 7. Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}

// 8. Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// 9. Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// 10. Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
const numberList = [10, 20, 30, 40, 50];
function calculateSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Testing output examples (verification)
console.log("Q1 Scope Difference:");
scopeDifference();
console.log("\nQ2 Second Fruit:", getSecondFruit());
console.log("\nQ3 Modified Array:", modifyArray([1, 2, 3]));
console.log("\nQ4 Squared:", squareNumbers(numbersArray));
console.log("\nQ5 Filtered Odds:", filterEvenNumbers(numbersArray));
console.log("\nQ6 Greet Person:");
greetPerson(person);
console.log("\nQ7 Area:", calculateArea({ width: 5, height: 10 }));
console.log("\nQ8 Object Keys:", getObjectKeys({ a: 1, b: 2, c: 3 }));
console.log("\nQ9 Merged Object:", mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log("\nQ10 Sum:", calculateSum(numberList));
