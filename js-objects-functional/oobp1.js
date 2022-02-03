
let countryName = "Finland";
let capital = "Helsinki";
let population = 5536146;
let gdp = 257; // bn
let area = 338455; //km2

let countryNameGermany = "Germany";
let capitalGermany = "Berlin";
let populationGermany = 83190556;
let gdpGermany = 4743;
let areaGermany = 357022;

let countryNameFrance = "France";


function findBiggestPopulation(population1, countryName1, population2, countryName2) {

    if(population1 > population2) {
        console.log("Biggest population " + population1 + " is at " + countryName1);

    }
    else {
        console.log("Biggest population " + population2 + " is at " + countryName2);
    }
}

findBiggestPopulation(population, countryName, populationGermany, countryNameGermany);


let finland = {
    countryName: "Finland",
    capital: "Helsinki",
    population: 5536146,
    gdp: 257,
    area: 338455,
    languages: ['Finnish', 'Swedish', 'Saami']
};

let germany = {
    countryName: "Germany",
    capital: "Berlin",
    population: 83190556,
    gdp: 4743,
    area: 357022
}

let russia = {
    countryName: "Russian Federation",
    capital: "Moscow",
    population: 1467171015,
    gdp: 1710,
    area: 17098246
};

console.log(countryName);
console.log(finland.countryName);
console.log(finland.gdp);
console.log(germany.population)

function findBiggestPopulation2(country1, country2) {
    if(country1.population > country2.population) {
        console.log(country1.countryName + ' population is bigger than ' + country2.countryName)
    } else {
        console.log(country2.countryName + ' population is bigger than ' + country1.countryName)
    }
}

findBiggestPopulation2(russia, germany);

function countryPrinter(countryInformation) {
    console.log(countryInformation.countryName + ', population ' + countryInformation.population);
}

countryPrinter(finland);
countryPrinter(germany);
countryPrinter(russia);

let foods = ['bread', 'bananas', 'beer', 'carrots'];
let languages = ['Dutch', 'French', 'German'];



let a = 5;
let b = 6;

function sum(number1, number2) {
    return number1+number2;
}

let c = sum(a, b);




let personArray = [
    {
        name: "John Doe",
        address: "Example street"
    },
    {
        name: "Mary Doe",
        address: "Example street"
    }
];

for (let index = 0; index < personArray.length; index++) {
    
    console.log(personArray[index].name);
    
}
