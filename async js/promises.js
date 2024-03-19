/* const promiseOne = new Promise((resolve, reject) => {
  //DO an async task
  //DB Calls, cryptography oprs, network calls etc.

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => console.log("Promise consumed"));

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    resolve();
  }, 2000);
}).then(() => console.log("Promise 2 consumed"));

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ userName: "John", email: "john@example.com" });
  }, 2000);
});
promiseThree.then((value) => console.log(value));

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Jane", email: "john@example.com" });
    } else {
      reject("Promise rejected");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => console.log(userName))
  .catch((err) => console.log(err))
  .finally(() => console.log("The Promise is either resolved or rejected")); */

/* const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Javascript", password: "123456" });
    } else {
      reject("Promise rejected");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive(); */

/* async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data, "userData");
  } catch (error) {
    console.log(error);
  }
} */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//getAllUser();
