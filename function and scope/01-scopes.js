var c = 300;

// curly braces ({}) is the scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //console.log(a);
  //console.log(b);
}

//console.log(c);

function one() {
  const username = "John";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website); will give error
  two();
}
one();

if (true) {
  const firstName = "John";
  if (firstName) {
    const lastName = "Smith";
    console.log(firstName + "" + lastName);
  }
  // console.log(lastName); will give error
}
// console.log(firstName); will give error

/*  ------------ Interesing ------------ */

//Hoisting
addOne(5);
function addOne(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
