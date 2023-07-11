class Hamster{
    constructor(owner,name, price= 15){
        this.owner = "";
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

const hammy = new Hamster("john", "wheels", 15)
hammy.wheelRun()
hammy.eatFood()
const price = hammy.getPrice() 
console.log(price)
// hammy.getPrice()

class Person {
    constructor(name, age=0, height=0, weight=0, mood=0,hamsters= [], bankAccount=0){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;

    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getWeight(){
        return this.weight
    }

    greet(){
        console.log(`hello ${this.name}`)
    }

    eat(){
        this.weight++
        this.mood++
        console.log(this.weight)
        console.log(this.mood)
    }
    exercise(){
        this.weight--
        console.log(this.weight)
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
        console.log(this.age)
        console.log(this.height)
        console.log(this.weight)
        console.log(this.mood)
        console.log(this.bankAccount)
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood +=10
        this.bankAccount -= hamster.getPrice();
        console.log(this.hamsters)
        console.log(this.mood)
        console.log(this.bankAccount)

    }
}

const bob = new Person('bob', 25, 66, 155, 10, ['gubby'], 100 )
console.log(bob.getName())
console.log(bob.getAge())
console.log(bob.getWeight())
bob.greet()
console.log(bob.eat())
console.log(bob.exercise())
console.log(bob.ageUp())
console.log(bob.buyHamster(hammy))