const person = {
  fname: "John",
  lname: "Doe",
  age: 25
};

/* for (let x in person) {
  txt = person[x];
  console.log(txt);
} */

// add property
person.gender = 'male';

console.log(person);

delete person.age;

console.log(person);

// ************ Object.values() converts an object into an array ************
console.log(Object.values(person));