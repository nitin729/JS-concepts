"use strict"; // treat all Js Code as newer version, not needed nowadays

//Focus on code readabiltiy

//converting string to number
let name = "John";
let age = 22;
let isLoggedIn = false;
let state;

// Datatype in js

//Data types are categorised on basis of how the data is stored in memory and how it is accessed in the memory

//Primitive Data types (7 types) -- call by value -
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => variables that are declared but not yet assigned any values.
// symbol => unique

console.log(typeof undefined); // undefined
console.log(typeof null); // object
/* Type of 'null' is object. In documentation it is mentioned that it is a bug which cannot be fixed.*/

//Non primitive data type
// objects
// arrays
// functions

//Symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "john",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
