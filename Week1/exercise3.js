// Create an array, which has similar country objects as in Exercise 2 and 1 as the elements of the array. The array should contain information about the same countries as  exercise 2. 
// Write a function, which accepts an array of countries as an parameter and returns the one with maximum population. 



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


function getMaxPopulationCountry(array) {
  let biggest = array[0]
  array.forEach((element) => {
    if (biggest.population < element.population ){
      biggest = element;
    }}
  )

    
    
  return biggest.country;
};

console.log(getMaxPopulationCountry(arrayOfCountries));