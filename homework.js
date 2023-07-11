class Hamster{
    constructor(owner,name, price){
        this.owner = owner;
        this.name = name;
        this.price = price;
    }

    wheelRun(){
        console.log('squeak squeak')
    }
    eatFood(){
        console.log('nibble nibble')    
    }
    getPrice(){
         return this.price
    }
}

const hammy = new Hamster("john", "wheels", 200)
hammy.wheelRun()
hammy.eatFood()
const price = hammy.getPrice() 
console.log(price)
// hammy.getPrice()