const prompts = require('prompts');


class Room {
  constructor (name,numOfDoorways, enemies, moveToRooms) {
    this.name = name;
    this.numOfDoorways = numOfDoorways;
    this.enemies = enemies;
    this.moveToRooms = moveToRooms;
  }
}

class Player {
  constructor () {
    this.hitPoints = 10;
    this.attackDamage = 2;
    this.attackChance = Math.floor(Math.random() * 100);
    this.location = hallway
  }

  lookAround() {
    console.log(`You look around.`)
    console.log(`You are in the ${this.location.name.toLowerCase()}.`)

    if(this.location.numOfDoorways > 0) {
      console.log(`There are doorways leading to:`)
      this.location.moveToRooms.forEach(element => console.log(element));
    }
    

    if (this.location.enemies.length > 0) {
      console.log('There is an enemy here')
    }
  }

  move() {
    //display the location options
    this.location.moveToRooms.forEach(element => console.log(element));
    // this.location 
    };
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
  constructor(name, location, hitPoints, attackDamage, attackChance) {
    this.name = name;
    this.location = location;
    this.hitPoints = hitPoints;
    this.attackChance = attackChance;
    this.attackDamage = attackDamage;
  }

  attack(){
    
  }
}

let entrance
let hallway = new Room('Hallway', 2, [rat], ['Entrance', 'Chamber']);
let chamber
let portal

class Rat extends Enemy {
  constructor(name, hitPoints, attackChance, attackDamage, location) {
    super();
    this.name = 'Sewer Rat';
    this.hitPoints = 2;
    this.attackChance = Math.floor(Math.random() * 100);
    this.attackDamage = 1;
    this.location = hallway;
  }}

  
  class Dragon extends Enemy {
    constructor(name, hitPoints, attackChance, attackDamage, location) {
      super();
      this.name = 'Giant Dragon';
      this.hitPoints = 4;
      this.attackChance = Math.floor(Math.random() * 100);
      this.attackDamage = 8;
      this.location = chamber;
    }}



const player = new Player()
let rat = new Rat()
const dragon = new Dragon()

console.log(hallway)
console.log(rat)

entrance = new Room('Entrance', 1, [], ['Hallway']);
// hallway = new Room('Hallway', 2, [rat], ['Entrance', 'Chamber']);
chamber = new Room('Chamber', 2, [dragon], ['Hallway', 'Portal']);
portal = new Room('Portal', 0, [], []);



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



/* Above the same code what was used for class inheritance demonstratino
   with Car and RaceCar classes and objects created from those two. 
   Your task is to implement the dungeon adventure. The above is just an example.*/

async function gameLoop() {
    let continueGame = true;

    // Example set of UI options for the user to select
    const initialActionChoices = [
        { title: 'Look around', value: 'lookAround' },
        { title: 'Go to Room', value: 'goToRoom' },
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
        player.lookAround();
        break;
      
      case 'goToRoom':

        player.move();
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
