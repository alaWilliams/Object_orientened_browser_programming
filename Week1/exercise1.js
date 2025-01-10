// Write code, which stores information of Belgium in an object. The object information should be stored into a variable named belgium Information to be stored is the following 
// Country Belgium 
// Capital Brussels 
// Languages Dutch, French, German 
// Area 30689 km2 
// Population 11492641 
// GDP per capita $50114 
// ISO3166 code BE 

// Enhance your Exercise 1 solution by creating objects similar to Belgium for Germany, France and Sweden (country data available at wikipedia – for example https://en.wikipedia.org/wiki/Germany). 
// Next write a function, which prints the name of the country and its population in a string. “Belgium, population 11492641”. The function should accept single parameter, the object of the country information. 
// Call the function for all your countries.  


let belgium = {
  country: 'Belgium',
  capital: 'Brussels',
  languages: ['Dutch', 'French', 'German'],
  area: 30689,
  population: 11492641,
  GDPperCapita: 50115,
  ISO3166: 'BE'
}

let germany = {
  country: 'Germany',
  capital: 'Berlin',
  languages: ['German'],
  area: 357596,
  population: 82719540,
  GDPperCapita: 70930,
  ISO3166: 'DE'
}

let france = {
  country: 'France',
  capital: 'Paris',
  languages: ['French'],
  area: 643801,
  population: 68373433,
  GDPperCapita: 65940,
  ISO3166: 'FR'
}

let sweden = {
  country: 'Sweden',
  capital: 'Stockholm',
  languages: ['Swedish'],
  area: 45295,
  population: 10540886,
  GDPperCapita: 71730,
  ISO3166: 'SE'
}

function printNameAndPopulation(obj){
  console.log(`${obj.country}, population ${obj.population}.`);
}

printNameAndPopulation(belgium)
printNameAndPopulation(germany)
printNameAndPopulation(france)
printNameAndPopulation(sweden)
