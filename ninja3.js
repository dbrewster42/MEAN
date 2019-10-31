class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("My name is " + this.name);
    }
    showStats(){
        console.log("Name: "+ this.name + ", Health:" + this.health + ", Speed:" + this.speed + ", Strength:" + this.strength)
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Wisdom is best sought at the bottom of a sake glass")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();