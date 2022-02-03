class Animal {
    constructor(type, name, speed) {
        this.type = type;
        this.name = name;
        this.speed = speed;
    }

    makeNoise() {
        console.log('Grr');
    }

    increaseSpeed() {
        this.speed += 1;
    }
}

let cat = new Animal('cat', 'Mr. Squiqqls', 3);