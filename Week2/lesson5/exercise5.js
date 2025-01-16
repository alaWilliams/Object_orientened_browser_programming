// Exercise 5: Create a class for Refrigerator which is capable of storing food. The class should have couple of different methods.
// · putFood – stores food in refrigerator
// · getAndEatFood – gets and consumes the specified food and amount from refrigerator, indicates if there is no such food available, indicates if last food of the type was eaten
// · getContents – display list of what food and how many is inside the refrigerator
// Fill your refrigerator with different Foods and then eat them. Validate the everything works as intended.

class Refrigerator {
  constructor() {
    this.storage = [];

  }
  putFood(food) {
    this.storage.push(food);
  }
  getContents() {
    console.log(`-----------`);
    this.storage.forEach(food => console.log(`| ${food.name} ${food.quantity}`))
    console.log(`-----------`);
  }
  getAndEatFood(foodName){
    // this is homework
    let found = this.storage.find(food => food.name === foodName);
    if (!found) {
      console.log(`Oh no! No ${foodName.toLowerCase()} here.`)
    } else if (found.quantity === 0) {
      console.log(`Sorry, no more ${found.name.toLowerCase()}s remaining!`)
    } else {
      found.eatOne()
    }
    this.storage = this.storage.filter(food => food.quantity > 0)
  }
}

class Food {
  constructor(name, quantity){
    this.name = name;
    this.quantity = quantity;
  }
  eatOne() {
    if (this.quantity === 0) {
      return `Sorry, no more ${this.name.toLowerCase()}s remaining!`
    }
    this.quantity--
    return `Slurp! One ${this.name.toLowerCase()} eaten. ${this.quantity} remaining`
  }
}


let r = new Refrigerator();
let apple = new Food('Apple', 2);
let bananas = new Food('Banana', 3);
let strawberry = new Food('Strawberry', 0)

r.putFood(apple);
r.putFood(bananas);
r.putFood(strawberry)
r.getContents();
r.getAndEatFood('Apple');
r.getAndEatFood('Strawberry');
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple');
r.getContents();
r.getAndEatFood('Banana');
r.getContents();