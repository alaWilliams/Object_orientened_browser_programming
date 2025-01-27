// Use the same array of countries as in exercise 3. Write a function which calculates and returns the sum of the populations of the countries in the array.  


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


function sumOfPopulation(array) {
  let sum = 0
  array.forEach(element => sum += element.population);
  return sum;
}

console.log(sumOfPopulation(arrayOfCountries))