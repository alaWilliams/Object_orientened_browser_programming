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

function getCountryCodesAndAreas(countryArray) {
    let newArray = [];
    for(let i = 0; i < countryArray.length; i++) {
        //console.log(countryArray[i].countryCode);
        //newArray.push(countryArray[i].countryCode)
        newArray.push({
            cc: countryArray[i].countryCode,
            ar: countryArray[i].area
        })
    }
    return newArray;
}

console.log(getCountryCodesAndAreas(countryArray));