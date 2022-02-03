/*const plus5 = value => value + 5;
const plus10 = value => value + 10;

const plus15 = value => plus5(plus10(value));

console.log(plus15(10)); // 25*/
/*
const plusser = plusVal => value => value + plusVal;

const plus5 = plusser(5);
const plus10 = plusser(10);

const plus15 = value => (plus5(plus10(value)));
console.log(plus15(10));*/

const users = [{
    name:"John",
    age: 33
},
{
    name:"Maxine",
    age: 24
},
{
    name:"Ted",
    age: 12
},
];

const printUser = (user, index) => {
    console.log('Map printing out current element at index ' + index);
    console.log(user)
    return user.name;
}

//let results = users.map(printUser);
//let results = users.map(u => u.age);
//console.log(results);
//printUser(users[2], 2);

/*
function checkAge(user, ageLimit) { 
    return user.age >= ageLimit; 
} 

checkAge(users[0], 18); 
checkAge(users[1], 18); 
checkAge(users[2], 18); 
*/
/*
const values = [533,235,223,56,88,2,6,88,664]; 

function minValue(valuesToCheck) { 
    let min = null; 

    for(let i = 0; i < valuesToCheck.length; i++) { 
        if((min != null) || (valuesToCheck[i] < min)) { 
            min = valuesToCheck[i]; 
        } 
    } 
    return min;
} 

const minimum = minValue(values);  

console.log(minimum); // 2 */
/*
const values = [5, 11, 394, 2, 576]; 
//values.splice(2, 1); 

function pureSlice(array, startingIndex, deleteCount) {
    let newArray = [...array];
    // for(let i = 0; i < array.length; i++) {
    //     if((i < startingIndex) || (i >= (startingIndex + deleteCount))) {
    //         newArray.push(array[i]);
    //     }
    // }
    newArray.splice(startingIndex, deleteCount);


    return newArray;
}


const newValues = pureSlice(values, 2, 1);
console.log(newValues);

*/
/*
function sum(a, b) {
    return a + b;
}

const sumArrow = (a, b) => {
    return a + b;
}

const sumArrow2 = (a, b) => a + b;

function sumPlus2(a) {
    return a + 2;
}

const sumPlus2Arrow = a => a + 2;

function callbackExample(fn) {
    // ... some processing going on
    // call the user supplied callback function - fn
    fn();
}

callbackExample(function() {
    console.log("Hello world");
})
*/

// Exercise 4
//let newUsersArray = users.map(user => user.age);
//console.log(newUsersArray);

// Exercise 5
//let newUsersArray = users.map(user => { return { name: user.name + " Bundy", age: user.age}});
//console.log(newUsersArray);

// Exercise 6
//let newUsersArray = users.map((user, index) => { return {...user, id: index}});
//console.log(newUsersArray);

//const test = [1, 2, 3, 4, 5, 6, 3]
//const result = test.filter(element => element == 3);
//console.log(result);

// Exercise 7

const meteoriteData = require('./meteorite-data.json');
/*const filteredMeteorites = meteoriteData.filter(meteorite => parseInt(meteorite.mass) < 100);
console.log(meteoriteData.length);
console.log(filteredMeteorites.length);
console.log(filteredMeteorites);
*/

// Exercise 8
/*function filterByNameFirstLetter(meteorites, letter) {
  //return meteorites.filter(m => m.name[0] === letter)
  return meteorites.filter(m => m.name.startsWith(letter));
}

const testArray = [{
  name: "Foo"
},{
  name: "Bar"
}];

const result = filterByNameFirstLetter(testArray, "F");
console.log(result);
*/

// Exercise 9 - smaller than the given mass
function getMeteoritesByMass(meteorites, mass) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return meteorites
          .filter(m => parseInt(m.mass) < mass)
          .map(m => {
            const date = new Date(m.year);
            return {
              id: m.id,
              name: m.name,
              date: date.getFullYear() + " " + months[date.getMonth()],
            }
          });
}

const results = getMeteoritesByMass(meteoriteData, 10);
console.log(results);

