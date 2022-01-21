function Animal(type, name, speedo) {
    this.type = type;
    this.name = name;
    this.speedo = speedo;
    this.demo = 50;
    this.makeNoise = function() {
        console.log('Grr');
    }
    this.increaseSpeed = function() {
        this.speedo += 1;
    }
}

let cat = new Animal("cat", "Mr. Finder", 3);
let elephant = new Animal("elephant", "John", 1);

let bird = new Animal("eagle", "Sharpeyes", 10);
bird.makeNoise();
console.log(bird);
bird.increaseSpeed();
bird.speed += 1;

console.log(bird);
console.log(cat);
