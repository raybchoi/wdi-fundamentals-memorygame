// holds all the cards (these are global scope variables)
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// needs to come before the flipCard function and call otherwise will get an error
// steps related to matching the two together
var checkForMatch = function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

// function that stores all steps related to selecting / flipping over a card
var flipCard = function(cardId) {
	console.log('User flipped ' + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
flipCard(1);
