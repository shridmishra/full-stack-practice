const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 17, isActive: false },
  { id: 3, name: "Charlie", age: 32, isActive: true },
  { id: 4, name: "David", age: 29, isActive: false },
  { id: 5, name: "Eve", age: 21, isActive: true },
];

const isActiveArray = users.filter((user) => user.isActive);
console.log("Active Users:", isActiveArray);

const mappedArr = users.map((user) => user.name);
console.log("All User Names:", mappedArr);

const lessThanEighteen = users.find((user) => user.age <= 18);
console.log(lessThanEighteen);

let ActiveUsersAge = users
  .filter((user) => user.isActive)
  .reduce((sum, user) => sum + user.age, 0);

console.log(ActiveUsersAge);

let older = users.
    filter((user) => user.isActive && user.age >= 25)
    .map((user) => user.name);
console.log(older);