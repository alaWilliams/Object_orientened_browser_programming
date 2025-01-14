// Use the same dataset as in 8. Create functions to get biggest, smallest meteorites by mass. Create function to get biggest meteorite from a given decade, where decade is given as a parameter. 

const data = require('./y77d-th95.json')


//Creating function for finding and printing biggest
function printBiggestMeteorite(data) {
  let biggest = data[0]
  data.forEach(element => {
    if (Number(element.mass) > Number(biggest.mass)) {
      biggest = element
    }
  })
  return `Biggest meteorite is ${biggest.name} with a mass ${biggest.mass}.`
}

//Creating function for finding and printing smallest
function printSmallestMeteorite(data) {
  let smallest = data[0]
  data.forEach(element => {
    if (Number(element.mass) < Number(smallest.mass)) {
      smallest = element
    }
  })
  return `Smallest meteorite is ${smallest.name} with a mass ${smallest.mass}.`
}


function makeYearIntoDecade(number) {
  return Math.floor(number/10) * 10
}


// Create function to get biggest meteorite from a given decade, where decade is given as a parameter. 
function printBiggestFromDecade(data, year){
let meteoritesFromSameDecade = [];
// converting given year into decade
let yearInDecade = makeYearIntoDecade(year);

data.forEach(element => {
//making a condition if year exists 
  if (element.year) {
    // converting meteorite year into decade
    let date = element.year;
    let meteoriteYear = Number(date.slice(0,4));
    let meteoriteDecade = makeYearIntoDecade(meteoriteYear)

    
    

    if (meteoriteDecade === yearInDecade) {
      meteoritesFromSameDecade.push(element)
   }
   }
  
  })
  //compare mass of meteorites 
  let biggest = meteoritesFromSameDecade[0]
  meteoritesFromSameDecade.forEach(element => {
    if (Number(element.mass) > Number(biggest.mass)) {
      biggest = element
    }
  })
  return `The biggest meteorites from this decade is ${biggest.name}. It's mass was ${biggest.mass}.`
}
  

console.log(printBiggestFromDecade(data, 2000))

console.log(printBiggestMeteorite(data))
console.log(printSmallestMeteorite(data))