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
    countryCode: 'RU'
};

let countries = [finland, germany, russia, belgium];


function sortByGdp(countryArray) {
    let newCountryArray = [];
    do {
        let i = 0;
        let biggestGdpCountry = null;     
        let biggestGdpCountryIndex = null;   
        for(let j = 0; j < countryArray.length; j++) {
            if(biggestGdpCountry == null || countryArray[j].gdp > biggestGdpCountry.gdp) {
                biggestGdpCountry = countryArray[j];     
                biggestGdpCountryIndex = j;           
            }
        }
        countryArray.splice(biggestGdpCountryIndex, 1);
        newCountryArray.push(biggestGdpCountry);
        
    } while(countryArray.length > 0);
    return newCountryArray;
}

function bubbleSortGdp(countries) {
    const arrayLength = countries.length;
    let noSwaps = null;
    do {
        noSwaps = true;
        for(let i = 1; i < arrayLength; i++) {
            if(countries[i-1].gdp > countries[i].gdp) {
                let first = countries[i];
                let second = countries[i-1];
                countries[i] = second;
                countries[i-1] = first;
                noSwaps = false;
            }
        }

    } while(noSwaps == false)
}

//let sortResult = sortByGdp(countries);
bubbleSortGdp(countries);
console.log(countries);