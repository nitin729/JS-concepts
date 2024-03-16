const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.getDate());
// console.log(myDate.getDay());

//For month we need to add + 1 bcoz getMonth() returns the monthIndex
console.log(myDate.getMonth() + 1);
// console.log(myDate.getUTCDay());

//let myCreatedDate = new Date(2024, 1, 30);
//let myCreatedDate = new Date(2024, 1, 30, 5, 4);
//let myCreatedDate = new Date("2024-02-30");
//let myCreatedDate = new Date("02-30-2023");

// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toISOString());
// console.log(myCreatedDate.toJSON());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myDate.getTime());

//Interview question -- convert the date into seconds

console.log(Math.floor(Date.now() / 1000));

myDate.toLocaleString("default", {
  weekday: "long",
});
