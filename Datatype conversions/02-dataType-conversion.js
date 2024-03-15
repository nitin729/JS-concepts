/* Converting string to number */

let stringValue = "someString";

console.log(typeof stringValue);

let valueInNumber = Number(stringValue);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// type of NaN -> is a number

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

/* Converting string to boolean */

let isLoggedIn = "somevalue";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "someValue" => true

/* Converting Number to string */

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);
