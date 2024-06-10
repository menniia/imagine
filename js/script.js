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
