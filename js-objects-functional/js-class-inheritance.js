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

let audi = new Car('Audi', 'e-tron', 'ABC-123');
audi.displayInformation();
audi.increaseSpeed();
audi.displayInformation();

let f1 = new RaceCar('Mercedes', 'F1', '-');
f1.displayInformation();
f1.increaseSpeed();
f1.displayInformation();
f1.startRace();