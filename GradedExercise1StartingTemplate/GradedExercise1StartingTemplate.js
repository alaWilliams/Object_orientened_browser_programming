const prompts = require('prompts');


class Room {
  constructor (name,numOfDoorways, enemies) {
    this.name = name;
    this.numOfDoorways = numOfDoorways;
    this.enemies = enemies;
  }
}

class Player {
  constructor () {
    this.hitPoints = 10;
    this.attackDamage = 2;
    this.attackChance = Math.floor(Math.random() * 100);
  }
  move() {}
  lookAround() {}
  attack(){
    this.attackChance = Math.floor(Math.random() * 100)
    if (this.attackChance <= 75) {
      console.log('Succesfull attack')
    } else {
      console.log('Not succesfull')
    }
  }
  exit(){}
}

class Enemy {
  constructor(name, hitPoints, attackDamage, attackChance) {
    this.name = name;
    this.location = location;
    this.hitPoints = hitPoints;
    this.attackChance = attackChance;
    this.attackDamage = attackDamage;
  }
  attack(){}
}


const player = new Player()

const entrance = new Room('Entrance', 1, []);
const hallway = new Room('Hallway', 2, 1);
const chamber = new Room('Chamber', 2, 1);
const portal = new Room('Portal', 0, 0);

console.log(entrance)
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
        { title: 'Attack', value: 'attack'},
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
        player.attack();
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