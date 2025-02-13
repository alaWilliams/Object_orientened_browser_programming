/*
  ALL TASKS MUST BE IMPLEMENTED WITH TYPESCRIPT!
  Use interfaces and data types in all cases to explicitly specify the types
  for variables, function parameters, function return values and object structures. 
*/

/* Task 1 - Functional programming and pure functions 
  Convert the function incrementCounter to a pure function. 
  The function should not have any side effects and should return the new value of the counter variable.
  The function should deal with numbers only.

*/

let counter = 0;
function task1IncrementCounter(counter : number) : number {
  return counter +1;
}

/* Task 2 - Filter method of array
   Write a function called task2FilterEven, which takes an array of numbers as a parameter and returns a new array,
   which contains only even numbers from the given array.

    Example:
    filterEven([1, 2, 3, 4, 5, 6]), output is [2, 4, 6]    
*/
function task2FilterEven(array : number[]) : number[] {
  return array.filter(num => num % 2 === 0);

}

/* Task 3 - Filter method of array
   Write a function called task3FilterAdults, which takes an array of Person objects as a parameter and returns a new array,
   which contains only persons with age greater than 18.

    The objects in the parameter array are of the following type:

    interface Person {
      name: string;
      age: number;
    }

    The function should be named filterAdults.
    
    Example:
    filterAdults([{ name: "John", age: 20 }, { name: "Jane", age: 15 }]), output is [{ name: "John", age: 20 }]
*/

interface Person {
  name: string;
  age: number;
}

function task3FilterAdults(array : Person[]) : Person[] {
  return array.filter((element) => element.age >= 18 );
}


/* Task 4 - Map method of array
    Write a function called task4MultiplyArray, which takes the following parameters:
    - an array of numbers
    - a multiplication number

    The function should return a new array, which contains the each number from the array of numbers multiplied by the given multiplication number.
    
    Example:
    multiplyNumbers([1, 2, 3, 4, 5], 2), output is [2, 4, 6, 8, 10]
*/

function task4MultiplyArray(array : number[], num : number) {
  return array.map(element => element * num)
}
    

/* Task 5 - Map method of array
   Write a function called task5GetPersonNames, which takes an array of Person objects as a parameter and 
   returns a new array of strings, which contains only the names of the persons.

   The objects in the parameter array are of the following type:

    interface Person {
      name: string;
      age: number;
    }

    The function should be named getPersonNames.

    Example:
    getPersonNames([{ name: "John", age: 20 }, { name: "Jane", age: 25 }]), output is ["John", "Jane"]
*/


function task5GetPersonNames(array : Person[]): string[] {
  return array.map(element => element.name)
}



export { task1IncrementCounter, task2FilterEven, task3FilterAdults, task4MultiplyArray , task5GetPersonNames };
