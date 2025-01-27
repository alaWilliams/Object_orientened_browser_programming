class Car {
	constructor(brand, registration) {
		this.brand = brand;
		this.registration = registration;
		this.speed = 0;
	}

	increaseSpeed() {
		this.speed += 5;
	}

	displaySpeed() {
		console.log(`${this.registration} speed is ${this.speed}.`);
	}
}
let audi = new Car('audi', 'abc-123');
let bmw = new Car('bmw', 'zxc-345');

class RaceCar extends Car {
	constructor(type, brand, registration) {
		super(brand, registration);
		this.type = type;
	}
	increaseSpeed() {
		this.speed += 10;
	}
	makeNoise() {
		console.log('BRUM BRUM!!!!!!');
	}
}

let raceCar = new RaceCar('F1', 'ferrari', '098-pol');

console.log(raceCar);

raceCar.increaseSpeed();
raceCar.increaseSpeed();
raceCar.displaySpeed();
raceCar.makeNoise();
