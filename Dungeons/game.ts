const prompts = require('prompts');
const { list } = require('prompts/dist/prompts');

class Room {
	name: string;
	description : string;
	connectingRooms : Room[];
	
	constructor(name : string, description : string) {
		this.name = name;
		this.description = description;
		this.connectingRooms = [];
		
	}

	addNewRoomConnection(roomToAdd : Room) {
		this.connectingRooms.push(roomToAdd);
	}

	getNamesOfConnectingRooms() : string[] {
		return this.connectingRooms.map((room) => room.name);
	};

	getConnectingRooms() {
		return this.connectingRooms;
	}
}

const entrance = new Room(
	'Entrance',
	'It is a cavern with stone stairs leading to the darkness.'
);
const hallway = new Room(
	'Hallway',
	'It is a long, dark hallway with dark pools of water on the floor and some fungus growing on the walls.'
);

entrance.addNewRoomConnection(hallway)


class Player {
	location : Room | undefined; 

  constructor() {
    this.location = undefined; 
  }

  setLocation(room : Room) // parameter is of type Room object
  {
    this.location = room;
  }

	getLocation() {
    return this.location;
  }
	lookAround() {
		if (this.location == undefined) {
			console.log(`Location in undefined`);
			return
		}
		console.log(
			`You look around.\n You are in the ${this.location.name.toLowerCase()}. ${
				this.location.description
			} \nThere are doorways leading to: \n`
		);
		let roomNames = this.location.getNamesOfConnectingRooms();
		roomNames.forEach(roomName => console.log(`${roomName}`))
		
	}
	move(roomName : string) {
			if(this.location === undefined) {
				console.log('Player location is undefined');
				return;
			}
	
			const nextRoom = this.location.getConnectingRooms().find(room => room.name === roomName);
			if (nextRoom) {
					this.setLocation(nextRoom);
			}
			}
	}
	




const player = new Player();
player.setLocation(entrance);

async function gameLoop() {
	let continueGame = true;

	// Example set of UI options for the user to select
	const initialActionChoices = [
		{ title: 'Look around', value: 'look' },
		{ title: 'Go to Room', value: 'move' },
		{ title: 'Attack', value: 'attack' },
		{ title: 'Exit game', value: 'exit' },
	];

	
	const response = await prompts({
		type: 'select',
		name: 'value',
		message: 'Choose your action',
		choices: initialActionChoices,
	});

	console.log('You selected ' + response.value);

	switch (response.value) {
		case 'look':
			console.log('You look around.')
			player.lookAround();

			break;

		case 'move':
			const moveActionChoices = [];
			const listOfRoomNames = player.getLocation().getNamesOfConnectingRooms();
			const movementOptions = listOfRoomNames.map(roomName => ({
				title: roomName,
				value: roomName
		}));
		moveActionChoices.push(...movementOptions);

		const moveResponse = await prompts({
			type: 'select',
			name: 'value',
			message: 'To which room you want to go to?',
			choices: moveActionChoices
		});

		console.log(moveResponse);
		player.move(moveResponse.value);
		break;

		

		case 'attack':
			// player.attack();

			break;

		case 'exit':
			continueGame = false;

			break;
	}

	if (continueGame) {
		await gameLoop(); 
	}
}

// process.stdout.write('\033c'); // clear screen on windows
console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!');
console.log('================================================');
console.log('You walk down the stairs to the dungeons');
gameLoop();
