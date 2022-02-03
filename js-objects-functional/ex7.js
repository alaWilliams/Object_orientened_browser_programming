

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

let countryArray = [ finland ];

function countryPrinter(arrayOfCountries) {
    for(let i = 0; i < arrayOfCountries.length; i++) {
        console.log('Name: ' + arrayOfCountries[i].countryName);
        console.log('Population: ' + arrayOfCountries[i].population);
        

        let cityPopulationSum = 0;
        for(let city = 0; city < arrayOfCountries[i].largestCities.length; city++) {
            console.log('City nr.' + (city+1)+ ' , ' + arrayOfCountries[i].largestCities[city].name + ', population: ' + arrayOfCountries[i].largestCities[city].population);
            cityPopulationSum += arrayOfCountries[i].largestCities[city].population;
        }
        console.log('Sum of population in five biggest cities ' + cityPopulationSum);
        console.log('Percentage of population in five biggest cities ' + cityPopulationSum / arrayOfCountries[i].population * 100 + "%");
    }
}

countryPrinter(countryArray);