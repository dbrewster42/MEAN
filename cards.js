// var vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// var suits = ["Clubs", "Hearts", "Diamonds", "Spades"]
// var names = ["Ace","Two", "Three", Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]

class Card {
    constructor(suit, name, val){
        this.suit = suit;
        this.name = name;
        this.val = val;
    }
    show(){
        console.log("This card is a " + this.name + " of " + this.suit);
        return this;
    }
}
class Deck {
    constructor(){
        this.cards = [];
        this.shuffle();
        this.deal();
        this.newDeck();
    }
    newDeck(){
    //     // var cards = [];
        var vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        var suits = ["Clubs", "Hearts", "Diamonds", "Spades"]
        var names = ["Ace","Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
        
        for (let i=0; i< 4; i++){
            for (let a=0; a < 13; a++){
                var card = new Card(suits[i], names[a], vals[a]);
                console.log(card);
                this.cards.push(card);
                // this.cards.push(card);
            }
        }
        return this.cards;
    }
    shuffle(){
        var m = this.cards.length, t, i;        
        while (m) {             
          i = Math.floor(Math.random() * m--);                
          t = this.cards[m];
          this.cards[m] = this.cards[i];
          this.cards[i] = t;
        }      
        return this;        
    }
    deal(){
        var c = this.cards.pop();
        // Card.show(c);
        console.log("You have been dealt a " + c)
        // c.show();
        return c;
    }
    reset(){
        this.cards = newDeck();
        return this
    }
}
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(deck){
        let newDraw = deck.deal();
        this.hand.push(newDraw);
            // var card = new Card(deck.deal());
            // console.log("You have been dealt  " + card[i]);
        
        return this;
    }
    discard(){
        this.hand.pop();
    }    
}
var deck = new Deck();
deck.shuffle();
var devon = new Player("Devon");
devon.draw(deck);
devon.draw(deck);
devon.draw(deck);
devon.draw(deck);
devon.draw(deck);
console.log(devon.hand)
