// holds all the cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = []; 
var cardOne = cards[0];
var cardTwo = cards[3];
// assinging the latest cards in play
cardsInPlay.push(cardOne, cardTwo);

// testing which cards have been flipped
console.log("User flipped cardOne " + cardOne);
console.log("User flipped cardTwo " + cardTwo);
// console.log('User filpped ' + cardsInPlay);

// checking to see how many cards are in play - if two cards are in play
// check to see if they match values
// if they do return alert
// if not then say other alert
if ( cardsInPlay.length === 2 ) {
	if ( cardsInPlay[0] === cardsInPlay[1] ) {
		alert ('You found a match!');
	} else {
		alert ('Sorry, try again');
	}
} else {
	alert ('Pick two cards');
}