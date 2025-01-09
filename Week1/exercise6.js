// Use the same array of countries as in exercise 3. Write a function which accepts the array of countries as parameter. The function should print out a list of countries ordered by their GDP. Biggest should be first and smallest should be last. Print out only the name of the country and the GDP.  
// Do this exercise WITHOUT looking for help from the internet or AI about sorting algorithms.  
// First implement your own solution for this. Then you research about existing sorting algorithms, choose one and make an implementation of it. 


let arrayOfCountries = [{
  country: 'Belgium',
  capital: 'Brussels',
  languages: ['Dutch', 'French', 'German'],
  area: 30689,
  population: 11492641,
  GDPperCapita: 50115,
  ISO3166: 'BE'
}, 
{
  country: 'Germany',
  capital: 'Berlin',
  languages: ['German'],
  area: 357596,
  population: 82719540,
  GDPperCapita: 70930,
  ISO3166: 'DE'
},
{
  country: 'France',
  capital: 'Paris',
  languages: ['French'],
  area: 643801,
  population: 68373433,
  GDPperCapita: 65940,
  ISO3166: 'FR'
},
{
  country: 'Sweden',
  capital: 'Stockholm',
  languages: ['Swedish'],
  area: 45295,
  population: 10540886,
  GDPperCapita: 71730,
  ISO3166: 'SE'
}];

function printCountriesByGDP(array) {
  let sortedArray = array.sort((a, b) => a.GDPperCapita - b.GDPperCapita);
  sortedArray.forEach(element => console.log(`${element.country} : ${element.GDPperCapita}`));
}

printCountriesByGDP(arrayOfCountries);