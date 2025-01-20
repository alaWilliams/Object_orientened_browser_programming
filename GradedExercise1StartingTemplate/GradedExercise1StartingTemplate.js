const prompts = require('prompts');


class Room {
  constructor (name,numOfDoorways, enemies) {
    this.name = name;
    this.numOfDoorways = numOfDoorways;
    this.enemies = enemies;
  }
  createEnemy(name, hitPoints, attackDamage) {
    let enemy = new Enemy
    console.log(enemy);
  }
}

class Player {
  constructor () {
    const hitPoints = 10;
    const attackDamage = 2;
    const attackChance = Math.floor(Math.random() * 100)
  }
  move() {}
  lookAround() {}
  attack(){}
  exit(){}
}

class Enemy {
  constructor(name, hitPoints, attackDamage, attackChance, location) {
    this.name = name;
    this.location = location;
    this.hitPoints = hitPoints;
    this.attackChance = attackChance;
    this.attackDamage = attackDamage;
  }
}

const hallway = new Room('Hallway', 2, 1);
// hallway.createEnemy('Sewer Rat', 5, 1 )
const chamber = new Room('Chamber', 2, 1);
// chamber.createEnemy('Giant Dragon')
console.log(hallway)
console.log(chamber)
class Car {
  constructor(brand, model, registration) {
      this.brand = brand;
      this.model = model;
      this.registration = registration;
      this.speed = 0;
  }


  increaseSpeed() {
      this.speed += 1;
  }

  decreaseSpeed() {
      this.speed -= 1;
  }

  makeNoise() {
      console.log('prum prum');        
  }

  displayInformation() {
      console.log('Car: ' + this.brand + ', ' + this.model + ', speed: ' + this.speed);
  }
}

class RaceCar extends Car {
  constructor(brand, model, speed) {
      super(brand, model, speed);
  }

  increaseSpeed() {
      this.speed += 20;
  }

  startRace() {
      console.log('Race car enters the race!');
  }
}

// let audi = new Car('Audi', 'e-tron', 'ABC-123');
// audi.displayInformation();
// audi.increaseSpeed();
// audi.displayInformation();

// let f1 = new RaceCar('Mercedes', 'F1', '-');
// f1.displayInformation();
// f1.increaseSpeed();
// f1.displayInformation();
// f1.startRace();

/* Above the same code what was used for class inheritance demonstratino
   with Car and RaceCar classes and objects created from those two. 
   Your task is to implement the dungeon adventure. The above is just an example.*/

async function gameLoop() {
    let continueGame = true;

    // Example set of UI options for the user to select
    const initialActionChoices = [
        { title: 'Look around', value: 'accelerateEtron' },
        { title: 'Go to Room', value: 'accelerateF1' },
        { title: 'Attack', value: 'info'},
        { title: 'Exit game', value: 'exit'}
    ];

    // Show the list of options for the user.
    // The execution does not proceed from here until the user selects an option.
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices
    });

    // Deal with the selected value
    console.log('You selected ' + response.value);
    switch(response.value) {
      case 'lookAround':
        audi.increaseSpeed();
        break;
      
      case 'goToRoom':
        f1.increaseSpeed();
        break;
      
      case 'attack':
        audi.displayInformation();
        f1.displayInformation();
        break;
      
      case 'exit':
        continueGame = false;
        break;
    }
    
    if(continueGame) {
      gameLoop();
    }    
}

// process.stdout.write('\033c'); // clear screen on windows

// console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
// console.log('================================================')
// console.log('You walk down the stairs to the dungeons')
// gameLoop();

// console.log(Math.floor(Math.random() * 100))