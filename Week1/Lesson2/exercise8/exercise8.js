const data = require('./y77d-th95.json')
// console.log(data)

function printNames(array) {
  array.forEach(element => {
    return element.name
  })
}

printNames(data)