let finland = {
    countryName: "Finland",
    capital: "Helsinki",
    population: 5536146,
    gdp: 257,
    area: 338455,
    languages: ['Finnish', 'Swedish', 'Saami'],
    largestCities: [
        {
            name: "Helsinki",            
            population: 1000000            
        },
        {
            name: "Turku",            
            population: 500000            
        },
        {
            name: "Tampere",
            population: 450000
        }
    ],
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

function getMaxPopulationCountry(arrayOfCountries) {
    let countryWithMaxPopulation = null;

    for( let i = 0; i < arrayOfCountries.length; i++ ) {
        console.log(arrayOfCountries[i].population);
        if(countryWithMaxPopulation == null || countryWithMaxPopulation.population < arrayOfCountries[i].population) {
            countryWithMaxPopulation = arrayOfCountries[i];
        }
    }

    return countryWithMaxPopulation;
}

function getSumOfPopulations(arrayOfCountries) {
    let sumOfPopulations = 0;

    for(let i = 0; i < arrayOfCountries.length; i++) {
        sumOfPopulations += arrayOfCountries[i].population;
    }

    return sumOfPopulations;
}

let countryWithMaxPop = getMaxPopulationCountry(countryArray);
console.log(countryWithMaxPop);

console.log('Sum of populations: ' + getSumOfPopulations(countryArray));

