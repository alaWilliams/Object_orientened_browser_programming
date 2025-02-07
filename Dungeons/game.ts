const prompts = require('prompts');
const { list } = require('prompts/dist/prompts');

class Room {
	name: string;
	description: string;
	connectingRooms: Room[];
	enemies: Enemy[];

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
		this.connectingRooms = [];
		this.enemies = []

	}

	addNewRoomConnection(roomToAdd: Room) {
		this.connectingRooms.push(roomToAdd);
	}

	getNamesOfConnectingRooms(): string[] {
		return this.connectingRooms.map((room) => room.name);
	};

	getConnectingRooms() {
		return this.connectingRooms;
	}

	addEnemy(enemy: Enemy) {
		this.enemies.push(enemy);
	}
	getEnemiesNames() {
		let names: string[] = []
		this.enemies.forEach(enemy => names.push(enemy.name));
		return names;
	}

}
class Enemy {
	name: string;
	constructor(name: string) {
		this.name = name;
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
const chamber = new Room(
	'Chamber',
	'A big cavernous chamber with a high ceiling clouded in mist.'
);
const portal = new Room(
	'Portal',
	'A portal to another dimension.'
)

const rat = new Enemy('Sewer Rat');
const rat2 = new Enemy('Small Sewer Rat')
const dragon = new Enemy('Giant Dragon');

entrance.addNewRoomConnection(hallway);
hallway.addNewRoomConnection(chamber);
hallway.addNewRoomConnection(entrance)
chamber.addNewRoomConnection(hallway);
chamber.addNewRoomConnection(portal);


hallway.addEnemy(rat);
hallway.addEnemy(rat2);
chamber.addEnemy(dragon);

class Player {
	location: Room | undefined;

	constructor() {
		this.location = undefined;
	}

	setLocation(room: Room) {
    this.location = room;
  }

  getLocation(): Room | undefined {
    return this.location;
  }
	lookAround() {
		if (this.location == undefined) {
			console.log(`Location in undefined`);
			return;
		}
		console.log(
			`You look around.\n You are in the ${this.location.name.toLowerCase()}. ${this.location.description
			} \nThere are doorways leading to:`
		);
		let roomNames = this.location.getNamesOfConnectingRooms();
		roomNames.forEach(roomName => 
			console.log(`${roomName}`));
		
		const enemiesName = this.location.getEnemiesNames();
		
		if (enemiesName.length === 0) {
			return 'There is no enemy here'
		} else {
			return `Enemies: ${enemiesName.join(', ')}`;
		}
	}

	move(roomName: string) {
		if (this.location === undefined) {
			console.log('Player location is undefined');
			return;
		}

		const nextRoom = this.location.getConnectingRooms().find(room => room.name === roomName);
		if (nextRoom) {
			this.setLocation(nextRoom);
		}
	}
}


const player = new Player()
player.setLocation(entrance)

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
			if (player.location === portal) {
				console.log(`You've reached the portal. You won!`)
				continueGame = false;
			}
			break;



		case 'attack':
			const attackChoices = []
			const listOfEnemies = player.getLocation().getEnemiesNames();
			console.log(listOfEnemies)

			const attackOptions = listOfEnemies.map(enemy => ({
				title: enemy,
				value: enemy
			}));
			attackChoices.push(...attackOptions);

			const attackResponse = await prompts({
				type: 'select',
				name: 'value',
				message: 'Which enemy do you want to attack?',
				choices: attackChoices
			});

			player.move(attackResponse.value);
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
