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
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
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
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
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
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
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
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    },
    {
      name: '',
      population: ''
    }
  ]
}];