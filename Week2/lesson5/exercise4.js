// Exercise 4 (objects/exercises/4-classes.js): Create a class for Food which allows the user to set the type of food and quantity. The class should have a method, which can be used to eat the food and quantity will decrease accordingly and a method to be able to describe what type of food it is.

class Food {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }
  whatIsThis() { 
    return this.type
  };
  eatOne() {
    if (this.quantity === 0) {
      return `Sorry, no more ${this.type.toLowerCase()}s remaining!`
    }
    this.quantity--
    return `Slurp! One ${this.type.toLowerCase()} eaten. ${this.quantity} remaining`
  }
}

let banana = new Food('Banana', 4)
 
console.log(banana.whatIsThis());
console.log(banana.eatOne());
console.log(banana.eatOne());
console.log(banana.eatOne());
console.log(banana.eatOne());
console.log(banana.eatOne());