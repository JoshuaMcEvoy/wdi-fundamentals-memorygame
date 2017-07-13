var cards = [
	{
	rank: "queen",
	suite: "hearts",
	cardImage: "images/queen-of-hearts.png"
	}, 
	{
	rank: "queen",
	suite: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suite: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suite: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	},
];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		cardsInPlay[0] === cardsInPlay[1] ? alert("You've found a match!"):alert("Sorry, try again.");
	}
}

var flipCard = function(){
	console.log('inside flipCard function');
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suite)
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
	console.log('at end of flipCard function');
}
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		console.log('cardElement = '+ cardElement);
	}
}

createBoard();