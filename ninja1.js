function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    
    this.sayName = function(){
        console.log("My name is " + this.name)
    }
    Ninja.prototype.showStats = function(){
        console.log("Name: "+ this.name + ", Health:" + this.health + ", Speed:" + speed + ", Strength:" + strength)
        return this;
    }
    Ninja.prototype.drinkSake = function(){
        this.health += 10;
        return this;
    }
    Ninja.prototype.punch = function(target){
        if(!(target instanceof Ninja)){
			console.log(target + " is not a Ninja!");
		}
		else {
            target.health -= 5;
            console.log(target.name + " was punched by " + this.name + " and lost 5 health!");
    }}
    Ninja.prototype.kick = function(target){
        var power = strength * 15;
        if (target instanceof Ninja){
            target.health -= power;
            console.log(target.name + " was kicked by " + this.name + " and lost " + power + " health!");			
		}
		else 
            console.log(target + " is not a Ninja!");
    }
}
var ninja1 = new Ninja("Naoki");
ninja1.sayName();
ninja1.showStats().drinkSake().showStats()
var ninja2 = new Ninja("Target");
ninja1.punch(ninja2);
ninja2.kick(ninja1);
ninja1.showStats();
ninja1.kick("Bill");