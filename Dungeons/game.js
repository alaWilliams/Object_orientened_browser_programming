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
	'It is a long, dark hallway with dark pools of water on the floor and some fungus growing on the walls.'
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
player.lookAround()
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
		await gameLoop(); // Ensure gameLoop is awaited here
	}
}

// process.stdout.write('\033c'); // clear screen on windows
// console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!');
// console.log('================================================');
// console.log('You walk down the stairs to the dungeons');
// gameLoop();
