var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; 
pooh.south = tigger;
var piglet = { character: "Piglet"};  
piglet.east = tigger.north;       
tigger.north.west = piglet; 
var bees = { character: "Bees"};
pooh.east = bees;
bees.west = tigger.north;
var cr = { character: "Christopher Robin"};
pooh.north = cr;
piglet.north.east = cr;
bees.north.west = cr;
var owl = { character: "Owl"};
cr.west = owl;
owl.south = piglet;
var rabbit = { character: "rabbit"};
var gopher = { character: "Gopher"};
var kanga = { character: "Kanga"};
cr.east = rabbit;
cr.north = kanga;
owl.east = cr;
rabbit.west = cr;
rabbit.south = bees;
rabbit.east = gopher;
gopher.west = rabbit;
var eye = { character: "Eeyore"}
var heff = { character: "Heffalumps"}
heff.west = eye;
eye.east = heff;
eye.south = kanga;
kanga.north = eye;
kanga.south = cr;
cr.west = pooh;
pooh.west = piglet;
bees.north = rabbit;
var player = {
    location: tigger
}

// function move(str){
// 	if (str == "north"){		
// 		if player.location.north == ""
// 			return "You may not go that way!" 
// 		else {
// 			player.location = player.location.north;
// 			return "You are now at " + player.location.character + "'s house";
// 		}
// 	}
// 	if (str == "south"){		
// 		if player.location.south == ""
// 			return "You may not go that way!" 
// 		else {
// 			player.location = player.location.south;
// 			return "You are now at " + player.location.character + "'s house";
// 		}
// 	}
// 	if (str == "east"){		
// 		if player.location.east == ""
// 			return "You may not go that way!" 
// 		else {
// 			player.location = player.location.east;
// 			return "You are now at " + player.location.character + "'s house";
// 		}
// 	}
// 	if (str == "west"){		
// 		if player.location.west == ""
// 			return "You may not go that way!" 
// 		else {
// 			player.location = player.location.west;
// 			return "You are now at " + player.location.character + "'s house";
// 		}
// 	}

// }