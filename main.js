// Your code here.
console.log("1. getFirstName \n")

/* NOTES:
parameters: 1 - object {
  firstName : string,
  lastName: string
} 
return firstName */

function getFirstName(person){
  return person.firstName
}

console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Colin'
console.log(getFirstName({firstName: 'Petra', lastName: 'Solano'})) // -> 'Petra'
//-------------------------------//
console.log("\n2. getLastName \n")

function getLastName(person){
  return person.lastName
}

console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Colin'
console.log(getLastName({firstName: 'Petra', lastName: 'Solano'})) // -> 'Petra'
//-------------------------------//
console.log("\n3. getFullName \n")

function getFullName(person){
  person = person.firstName + " " + person.lastName;
  return person
}

console.log(getFullName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Colin'
console.log(getFullName({firstName: 'Petra', lastName: 'Solano'})) // -> 'Petra'
//-------------------------------//
console.log("\n4. setFirstName \n")

/* CHANGE NOT RETURN
parameters: 2 -
person = {
  firstName : string,
  lastName: string  
}
newFirstName: string

change firstName of person object to newFirstName
*/

function setFirstName(person, newFirstName){
  person.firstName = newFirstName // dot notation
  // person['firstName'] = newFirstName // <== bracket notation (both work)
}

let person1 = {firstName: 'Colin', lastName: 'Jaffe'};
let person2 = {firstName: 'Petra', lastName: 'Solano'};
setFirstName(person1, 'Redacted');
setFirstName(person2, 'Anthony');

console.log(person1);
console.log(person2);
//-------------------------------//
console.log("\n5. setAge \n")

function setAge(person, newAge){
  person.age = newAge 
}

let person3 = {firstName: 'Colin', lastName: 'Jaffe', age: 39};
let person4 = {firstName: 'Petra', lastName: 'Solano', age: 29};
setAge(person3, 45);
setAge(person4, 35);

console.log(person3);
console.log(person4);
//-------------------------------//
console.log("\n6. giveBirthday \n")
/* parameter: 1 object{
  firstName: string,
  lastName: string,
  age*: number (might not exist, if not we need to add it and set it equal to 1)
} */

function giveBirthday(person){
  if (person.age === undefined){ // undefined when property doesnt exist
    person.age = 1; // OR person.age = 0 vvv
  } else { // and no else statement vvv
  person.age = person.age + 1} // gives same result ^^^
}

let person5 = {firstName: 'Colin', lastName: 'Jaffe', age: 39};
let person6 = {firstName: 'Baby', lastName: 'Jaffe'};
giveBirthday(person5);
giveBirthday(person6);


console.log(person5);
console.log(person6);
//-------------------------------//
console.log("\n7. marry \n")

function marry(person1, person2){
  person1.married = true;
  person2.married = true;
  person1.spouseName = person2.firstName + " " + person2.lastName;
  person2.spouseName = person1.firstName + " " + person1.lastName;
}

let person7 = {firstName: 'Colin', lastName: 'Jaffe', married: false};
let person8 = {firstName: 'Petra', lastName: 'Solano', married: false};
marry(person7, person8);

console.log(person7);
console.log(person8);
//-------------------------------//
console.log("\n8. divorce \n")

function divorce(person1, person2){
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}

let person9 = {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'};
let person10 = {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'};
divorce(person9, person10);

console.log(person9);
console.log(person10);


//-------------------------------//
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
