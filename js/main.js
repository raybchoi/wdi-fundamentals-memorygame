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
// 4. Check to see if the cardsInPlay array length === 2
// 5. If it is and both cards side match (will be have the words queen or king)
// 6. then show one alert other wise show the other
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
// taking the index from flipCard(0) is telling it where to pick up the .rank from
// by taking in flipCard(0) you are doing the following:
// 1. run the function and use to 0 to and go into the array cards and then use .rank, .cardImage, and .suit to get the key value
// 2. push the cards rank into the cards in play
// 3. run the function checkForMatch();
var flipCard = function(cardId) {
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log('Card Img: ' + cards[cardId].cardImage);
	console.log('Card Suit: ' + cards[cardId].suit);
	checkForMatch();
}
flipCard(0);
flipCard(3);
