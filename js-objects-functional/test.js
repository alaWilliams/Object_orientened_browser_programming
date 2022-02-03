let finland = {
    countryName: "Finland",
    capital: "Helsinki",
    population: 5536146,
    gdp: 257,
    area: 338455,
    languages: ['Finnish', 'Swedish', 'Saami'],
    countryCode: 'FI'
};

let germany = {
    countryName: "Germany",
    capital: "Berlin",
    population: 83190556,
    gdp: 4743,
    area: 357022,
    languages: ['German'],
    countryCode: 'DE'
}

let russia = {
    countryName: "Russian Federation",
    capital: "Moscow",
    population: 1467171015,
    gdp: 1710,
    area: 17098246,
    languages: ['Russia', 'Bashkir', 'Kalmyk'],
    countryCode: 'RU'
};

let belgium = {
    countryName: "Belgium",
    capital: "Brussels",
    population: 11492641,
    gdp: 503,
    area: 30689,
    languages: ['Russia', 'Bashkir', 'Kalmyk'],
    countryCode: 'BE'
};

let countryArray = [ finland, germany, russia, belgium ];

console.log(countryArray);

let temporaryCountryHolder = countryArray[2];
countryArray[2] = countryArray[1];
countryArray[1] = temporaryCountryHolder;

console.log(countryArray);



