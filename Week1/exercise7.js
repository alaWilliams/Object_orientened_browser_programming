// Exercise 7 
// Use the same array of countries as in exercise 3. Modify the country information so that each country object has a new property called largestCities and the value of the property is an array of objects. The objects in the array should be formatted as follows: 
// { 
//     name: "Antwerp", 
//     population: 523248 
// } 

// The five biggest cities of each country should be recorded. Next create a function, which accepts the array of countries as parameter. The function should print out for each country  
// the name of the country,  
// the total population of the country,  
// the names of the five biggest cities in the country and their population , 
// the total sum of population in the five biggest cities  
// the percentage of the population in those cities out of the total population in the country. 


let arrayOfCountries = [{
  country: 'Belgium',
  capital: 'Brussels',
  languages: ['Dutch', 'French', 'German'],
  area: 30689,
  population: 11492641,
  GDPperCapita: 50115,
  ISO3166: 'BE',
  largestCities: [
    {
      name: 'Brussels',
      population: 1221000
    },
    {
      name: 'Antwerp',
      population: 529000
    },
    {
      name: 'Ghent',
      population: 263000
    },
    {
      name: 'Charleroi',
      population: 202000
    },
    {
      name: 'Liège',
      population: 198000
    }
  ]
}, 
{
  country: 'Germany',
  capital: 'Berlin',
  languages: ['German'],
  area: 357596,
  population: 82719540,
  GDPperCapita: 70930,
  ISO3166: 'DE',
  largestCities: [
    {
      name: 'Berlin',
      population: 3769000
    },
    {
      name: 'Hamburg',
      population: 1847000
    },
    {
      name: 'Munich',
      population: 1488000
    },
    {
      name: 'Cologne',
      population: 1087000
    },
    {
      name: 'Frankfurt',
      population: 763000
    }
  ]
},
{
  country: 'France',
  capital: 'Paris',
  languages: ['French'],
  area: 643801,
  population: 68373433,
  GDPperCapita: 65940,
  ISO3166: 'FR',
  largestCities: [
    {
      name: 'Paris',
      population: 2165000
    },
    {
      name: 'Marseille',
      population: 870000
    },
    {
      name: 'Lyon',
      population: 532000
    },
    {
      name: 'Toulouse',
      population: 493000
    },
    {
      name: 'Nice',
      population: 342000
    }
  ]
},
{
  country: 'Sweden',
  capital: 'Stockholm',
  languages: ['Swedish'],
  area: 45295,
  population: 10540886,
  GDPperCapita: 71730,
  ISO3166: 'SE',
  largestCities: [
    {
      name: 'Stockholm',
      population: 975000
    },
    {
      name: 'Gothenburg',
      population: 583000
    },
    {
      name: 'Malmö',
      population: 347000
    },
    {
      name: 'Uppsala',
      population: 177000
    },
    {
      name: 'Västerås',
      population: 154000
    }
  ]
}];


function sumCitiesPopulation(array) {
  let sum = 0
  array.forEach(city => sum += city.population);
  return sum;
}


function printCountryInfo(array) {
  array.forEach(country => {
    console.log(`Name of the country: ${country.country}`);
    console.log(`Population is: ${country.population}`);
    console.log(`Five biggest cities and their population: `);
    country.largestCities.forEach(city => console.log(`* ${city.name} - ${city.population}`))
    console.log(`The population in the five largest cities is: ${sumCitiesPopulation(country.largestCities)}`)
    let percentage = (sumCitiesPopulation(country.largestCities) / country.population * 100).toFixed(2);
    console.log(`The percentage of the population in the five largest cities out of the total population in the country is: ${percentage} %`);
    console.log('\n')
  }
    )
 
}

printCountryInfo(arrayOfCountries)