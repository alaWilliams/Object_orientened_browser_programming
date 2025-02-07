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
	description: string;
	weapon: string;
	hitPoints: number;
	attackDamage: number;
	chanceOfAttackHit: number;
	player: Player;

	constructor(name: string, description: string, weapon: string, hitPoints: number, attackDamage: number, chanceOfAttackHit: number) {
		this.name = name;
		this.description = description;
		this.weapon = weapon;
		this.hitPoints = hitPoints;
		this.attackDamage = attackDamage;
		this.chanceOfAttackHit = chanceOfAttackHit;
	}


	attack(player: Player) {
		let attackPoints = Math.floor(Math.random() * 100);
		
		if (attackPoints < this.chanceOfAttackHit) {
			player.hitPoints -= this.attackDamage
			if (player.hitPoints <= 0) {
				console.log(`The attack of ${this.name} was fatal. You've died`)
			} else {
				console.log(`${this.name} attacks you with ${this.weapon.toLocaleLowerCase()}! \n The attack was successful and you are hit. The ${this.name.toLowerCase()} causes ${this.attackDamage} damage, you have ${player.hitPoints} health points left`)
			}
			
		} else {
			console.log(`${this.name} attacks you with ${this.weapon.toLowerCase()}! \n The attack failed, you've defended yourself.`)
		}
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
	'Glowing portal',
	'A portal to another dimension.'
)

const rat = new Enemy('Sewer Rat', 'A scrappy, disease-ridden rodent scurrying through the damp, filthy tunnels, always ready to bite.', 'Sharp teeth', 2, 1, 50);
const rat2 = new Enemy('Small Sewer Rat', 'A tiny, quick rodent with beady eyes and a knack for darting into dark corners to avoid danger.', 'Small sharp teeth', 2, 1, 25)
const dragon = new Enemy('Giant Dragon', 'Towering above, this fearsome dragon breathes fire, its scales glistening like molten lava as it guards the deepest secrets of the sewer.', 'Sharp claws and fire breath', 4, 8, 80);

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
	weapon: string;
	hitPoints: number;
	attackDamage: number;
	chanceOfAttackHit: number;

	constructor(weapon: string, hitPoints: number, attackDamage: number, chanceOfAttackHit: number) {
		this.location = undefined;
		this.weapon = weapon;
		this.hitPoints = hitPoints;
		this.attackDamage = attackDamage;
		this.chanceOfAttackHit = chanceOfAttackHit;
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
		

		if (enemiesName.length > 0) {
			console.log(`You see an enemy ${enemiesName.join(', ')}.`)
			console.log(this.location.enemies.map(enemy => `${enemy.name} is ${enemy.description.toLowerCase()}`).join('\n'))
			
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

	attack(enemiesName: string) {
		console.log('Attacking' + enemiesName)
		let attackDamage = Math.floor(Math.random() * 100);
		if (attackDamage > this.chanceOfAttackHit) {
			console.log('The attack was successful')
		} else {
			console.log('The attack failed')
		}
	}
}


const player = new Player('Sharp sword', 10, 2, 75)
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
			if (player.location.enemies.length > 0) {
				player.location.enemies[0].attack(player);
			}
			if (player.hitPoints <= 0) {
				console.log(`The game has ended`)
				continueGame = false
			}

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

			player.attack(attackResponse.value);
			if (player.hitPoints <= 0) {
				console.log(`The game has ended`)
				continueGame = false
			}
		

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
