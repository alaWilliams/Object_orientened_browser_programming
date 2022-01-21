class Food {
    constructor(type, qty) {
        this.type = type;
        this.qty = qty;
    }

    whatIsThis() {
        console.log(this.type);
    }

    eatOne() {
        if(this.qty > 0) {
            this.qty -= 1;
            console.log('Slurp! One banana eaten. ' + this.qty + ' remaining');
        } else {
            console.log('Sorry, no more bananas remaining! ')
        }        
    }
}

let banana = new Food('Banana', 4); 

banana.whatIsThis(); 

banana.eatOne(); 

banana.eatOne(); 

banana.eatOne(); 

banana.eatOne(); 

banana.eatOne(); 
