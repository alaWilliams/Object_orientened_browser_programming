import prompts from 'prompts';

class Room {
	name: string;
	description: string;
	connectingRooms: Room[];
	enemies: Enemy[];

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
		this.connectingRooms = [];
		this.enemies = [];
	}

	addNewRoomConnection(roomToAdd: Room) {
		this.connectingRooms.push(roomToAdd);
	}

	getNamesOfConnectingRooms(): string[] {
		return this.connectingRooms.map((room) => room.name);
	}

	getConnectingRooms() {
		return this.connectingRooms;
	}

	addEnemy(enemy: Enemy) {
		this.enemies.push(enemy);
	}

	getEnemiesNames(): string[] {
		return this.enemies.map((enemy) => enemy.name);
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
const portal = new Room('Portal', 'A portal to another dimension.');

const rat = new Enemy('Sewer Rat');
const rat2 = new Enemy('Small Sewer Rat');
const dragon = new Enemy('Giant Dragon');

entrance.addNewRoomConnection(hallway);
hallway.addNewRoomConnection(chamber);
hallway.addNewRoomConnection(entrance);
chamber.addNewRoomConnection(hallway);
chamber.addNewRoomConnection(portal);

hallway.addEnemy(rat);
hallway.addEnemy(rat2);
chamber.addEnemy(dragon);

class Player {
	location: Room;

	constructor(startingRoom: Room) {
		this.location = startingRoom;
	}

	setLocation(room: Room) {
		this.location = room;
	}

	getLocation(): Room {
		return this.location;
	}

	lookAround() {
		console.log(
			`You look around.
		You are in the ${this.location.name.toLowerCase()}. ${this.location.description}
		There are doorways leading to:`
		);
		this.location.getNamesOfConnectingRooms().forEach((roomName) => console.log(roomName));

		const enemies = this.location.getEnemiesNames();
		if (enemies.length === 0) {
			console.log('There are no enemies here.');
		} else {
			console.log(`Enemies: ${enemies.join(', ')}`);
		}
	}

	move(roomName: string) {
		const nextRoom = this.location.getConnectingRooms().find((room) => room.name === roomName);
		if (nextRoom) {
			this.setLocation(nextRoom);
			console.log(`You moved to ${nextRoom.name}.`);
		} else {
			console.log('Invalid move. No such room exists.');
		}
	}
}

const player = new Player(entrance);

async function gameLoop() {
	let continueGame = true;

	while (continueGame) {
		const response = await prompts({
			type: 'select',
			name: 'value',
			message: 'Choose your action',
			choices: [
				{ title: 'Look around', value: 'look' },
				{ title: 'Go to Room', value: 'move' },
				{ title: 'Exit game', value: 'exit' }
			]
		});

		switch (response.value) {
			case 'look':
				player.lookAround();
				break;

			case 'move':
				const moveResponse = await prompts({
					type: 'select',
					name: 'value',
					message: 'To which room do you want to go?',
					choices: player.getLocation().getNamesOfConnectingRooms().map((roomName) => ({
						title: roomName,
						value: roomName
					}))
				});

				player.move(moveResponse.value);
				if (player.getLocation() === portal) {
					console.log("You've reached the portal. You won!");
					continueGame = false;
				}
				break;

			case 'exit':
				continueGame = false;
				break;
		}
	}
}

console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!');
console.log('================================================');
console.log('You walk down the stairs to the dungeons');
gameLoop();
