// js in the DOM
const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
};

// variables
const pi = 3.14;
let username = "donatus";
let age = 54;
let present = false;

// object
const person = {
    username: 'donatus',
    age: 101,
    present: false,
    child: {
        name: 'a name',
        friend: {
            friendName: 'another name'
        }
    }
}
person.age = 67;

console.log(person)

// string
let fullName = "Donatus Mennia-Quansah";
fullName.length;

fullName.toUpperCase();
fullName.toLowerCase();
fullName.replace('Mennia', 'Menniia');
fullName.slice(5, 15);
fullName.split("");
fullName.indexOf("h");

// Math
const myAge = 87
const friendAge = 64

const totalAge = myAge + friendAge
console.log(totalAge)

// write a function that will add a participant to our Google Classroom

const existingUser = []
  
function addUser(email) {
  existingUser.push(email);
}

addUser('another@email.com')
existingUser;


const users = [
  {
    username: 'name',
    password: 'aPasswrodWxample',
    email: 'anEmailExample'
  },
   {
    username: 'anotherName',
    password: 'anotherPassword',
    email: 'alsoAnotherEmail'
  }
]

// write a function that will take a user with
// firstname, lastname and return fullname

const userName = {
  userFirstName: 'Donatus',
  userLastName: 'Mennia'
}

function fullName(userName){
  return  `${userName.userFirstName} ${userName.userLastName}`;
}

fullName(userName)

// array map
const users = [
  {firstName: 'Donatus', lastName: 'Mennia'},
  {firstName: 'Newname',lastName: 'lastnname'}
]

users.map(fullName);


// write a function that will take a user with
// firstname, lastname and return fullname using spread

const userName1 = {
  userFirstName: 'Donatus',
  userLastName: 'Mennia'
}

function fullName(userName1){
  return  {
    ...users1,
    fullName: `${userName1.userFirstName} ${userName1.userLastName}`;
  };
}

fullName(userName1)

// array map
const users1 = [
  {firstName: 'Donatus', lastName: 'Mennia'},
  {firstName: 'Newname',lastName: 'lastnname'}
]

users.map(fullName);

function squared(num) {
  return num * num;
}

squared(3)

// write a function that will allow a user to reset their password

const user = {
  email: 'myemail@gmail.com',
  password: 1234
}

function resetPassword(email, password) {
  if (user.email === email & user.password === password) {
    return 'correct password - login successful';
  } else if (user.email === email & user.password !== password) {
    user['password'] = password;
    return password;
  } else if (user.email !== email) {
    return 'invalid email'
  }
}

resetPassword('myemail@gmail.com', 1235)
user

// you have been given an array of students with some of them marked as absent and others marked as present. 
// write a function that returns the total number of students present.

const students = [
  {id1: 1, present: true},
  {id1: 2, present: true},
  {id1: 3, present: false},
  {id1: 4, present: true},
  {id1: 5, present: false}
]

function studentsPresent(students) {
  let totalNumber = 0
  for(let i = 0; i < students.length; i++) {
    if(students[i].present) totalNumber++
  }
  return totalNumber;
}

studentsPresent(students)

// classes in javascript
class Laptop {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

const laptop1 = new Laptop('dell', 'black');
const laptop2 = new Laptop('HP', 'silver');
laptop1.brand;
laptop2.color;