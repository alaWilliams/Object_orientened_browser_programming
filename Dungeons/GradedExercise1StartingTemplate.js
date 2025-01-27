const prompts = require('prompts');

class Room {
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.connectingRoom = [];
	}

	addNewRoomConnection(room) {
		this.connectingRoom.push(room);
	}

	getNamesOfConnectingRoom() {
		return this.connectingRoom.map((room) => room.name);
	}
}

let entrance = new Room(
	'Entrance',
	'It is a cavern with stone stairs leading to the darkness.'
);
let hallway = new Room(
	'Hallway',
	'it is a long, dark hallway with dark pools of water on the floor and some fungus growing on the walls.'
);

entrance.addNewRoomConnection(hallway);

class Character {
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}

	setLocation(room) {
		this.location = room;
	}
}

class Player extends Character {
	constructor() {
		super('Player', null);
	}

	lookAround() {
		console.log(
			`You look around.\n You are in the ${this.location.name.toLowerCase()}. ${
				this.location.description
			} \nThere are doorways leading to: \n`
		);
		// Get and print names of connected rooms
		console.log(this.location.getNamesOfConnectingRoom());
	}
	move() {
		console.log('Moving');
	}
	attack() {
		console.log('Attacking');
	}
}

const player = new Player();
player.setLocation(entrance);

// // class Player {
// // 	constructor() {
// // 		this.hitPoints = 10;
// // 		this.attackDamage = 2;
// // 		this.attackChance = Math.floor(Math.random() * 100);
// // 		this.location= entrance;
// // 	}

// 	lookAround() {
// 		console.log(`You look around.`);
// 		console.log(`You are in the ${this.location.name.toLowerCase()}. ${this.location.description}`);

// 		if (this.location.numOfDoorways > 0) {
// 			console.log(`There are doorways leading to:`);
// 			this.location.moveToRooms.forEach((element) => console.log(element));
// 		}

// 		// if (this.location.enemies.length > 0) {
// 		// 	console.log('There is an enemy here');
// 		// }
// 	}

// 	move() {
// 		//display the location options
// 		this.location.moveToRooms.forEach((element) => console.log(element));
// 		// this.location
// 	}
// 	attack() {
// 		this.attackChance = Math.floor(Math.random() * 100);
// 		if (this.attackChance <= 75) {
// 			console.log('Successful attack');
// 		} else {
// 			console.log('Not successful');
// 		}
// 	}
// 	exit() {}
// }

// class Enemy {
// 	constructor(name, location, hitPoints, attackDamage, attackChance) {
// 		this.name = name;
// 		this.location = location;
// 		this.hitPoints = hitPoints;
// 		this.attackChance = attackChance;
// 		this.attackDamage = attackDamage;
// 	}

// 	attack() {}
// }

// class Rat extends Enemy {
// 	constructor(name, location, hitPoints, attackChance, attackDamage) {
// 		super('Sewer Rat', hallway, 2, 1, 50);
// 	}
// }

// class Dragon extends Enemy {
// 	constructor(name, hitPoints, attackChance, attackDamage, location) {
// 		super();
// 		this.name = 'Giant Dragon';
// 		this.hitPoints = 4;
// 		this.attackChance = Math.floor(Math.random() * 100);
// 		this.attackDamage = 8;
// 		this.location = chamber;
// 	}
// }

// let rat = new Rat();
// console.log(rat)
// const dragon = new Dragon();

// entrance = new Room('Entrance', 1, [], ['Hallway']);
// hallway = new Room('Hallway', 2, [rat], ['Entrance', 'Chamber']);
// chamber = new Room('Chamber', 2, [dragon], ['Hallway', 'Portal']);
// portal = new Room('Portal', 0, [], []);

async function gameLoop() {
	let continueGame = true;

	// Example set of UI options for the user to select
	const initialActionChoices = [
		{ title: 'Look around', value: 'look' },
		{ title: 'Go to Room', value: 'move' },
		{ title: 'Attack', value: 'attack' },
		{ title: 'Exit game', value: 'exit' },
	];

	// Show the list of options for the user.
	// The execution does not proceed from here until the user selects an option.
	const response = await prompts({
		type: 'select',
		name: 'value',
		message: 'Choose your action',
		choices: initialActionChoices,
	});

	// Deal with the selected value
	console.log('You selected ' + response.value);
	switch (response.value) {
		case 'look':
			player.lookAround();
			break;

		case 'move':
			player.move();
			break;

		case 'attack':
			player.attack();
			break;

		case 'exit':
			continueGame = false;
			break;
	}

	if (continueGame) {
		gameLoop();
	}
}

process.stdout.write('\033c'); // clear screen on windows
console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!');
console.log('================================================');
console.log('You walk down the stairs to the dungeons');
gameLoop();
