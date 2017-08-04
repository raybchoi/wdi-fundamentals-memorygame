// holds all the cards (these are global scope variables)
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
    {
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
    },
    {
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
    },
];
var cardsInPlay = [];

// needs to come before the flipCard function and call otherwise will get an error
// steps related to matching the two together
// 10. Check to see if the cardsInPlay array length === 2
// 11. If it is and both cards  match (will either be two queens or two kings)
// 12. then show alert one other wise show the other
var checkForMatch = function() {

	// use setAttribute to update the img of the card that clicked
	// cardImage property in var cards --> update the 

	//cardElement.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

// function that stores all steps related to selecting / flipping over a card
// 6. taking the index from data-id and is teling it where to pick up the .rank from
// 7. by taking in data-id you are doing the following: run flipCard function and use to 
  // data-id to and go into the cards carray and then use .rank, .cardImage, and .suit to get the key value
// 8. push the cards rank into the cards in play
// 9. run the function checkForMatch();
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log('Card Img: ' + cards[cardId].cardImage);
	console.log('Card Suit: ' + cards[cardId].suit);

	// I don't understand why this goes here. I assume it has to do with the global scope issue
	// my other question is that don't you want the alert to come after both cards have been flipped?

	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}


// how it works:
// 1. first go through the entire for loop to create the four cards with the backs facing up
// 2. then setAttribute equal to the i which tells you which index to look at in the card array
// 3. make sure to addEventListener which on click it will call the 'filpCard' function
// 4. put these cards by right after the 'game-board' ID
var createBoard = function() {
	for ( var i = 0; i < cards.length; i++ ) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', [i]);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
} 
createBoard();

