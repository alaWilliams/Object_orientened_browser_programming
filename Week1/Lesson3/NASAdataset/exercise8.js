// Take his dataset of earth meteorite landings from NASA https://data.nasa.gov/resource/y77d-th95.json . Create an application which loads the dataset as a JSON file. You can load JSON file to node application with var someObject = require('./somefile.json'). Create a function, which prints the names of all meteorites

const data = require('./y77d-th95.json')

function printNames(array) {
  array.forEach(element => {
    return element.name
  })
}

printNames(data)