const user = {
  userName: "John",
  age: 30,
  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to the website`);
    // this gives us the current context
    // console.log(this);
  },
};

user.welcomeMessage();
user.userName = "Juan";
user.welcomeMessage();
//console.log(this); // o/p - {}
function one() {
  const userName = "jane";
  console.log(this.userName, "asd"); // o/p -> undefined
}
one();

const two = function () {
  const userName = "jane";
  console.log(this.userName, "asd"); // o/p -> undefined
};
two();

const three = () => {
  const userName = "three";
  console.log(this);
};
three();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "Jondo" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
