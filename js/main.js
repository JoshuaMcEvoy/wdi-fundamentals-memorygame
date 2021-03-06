var score = 0;
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
		cardsInPlay[0] === cardsInPlay[1] ? addToScore():alert("Sorry, try again.");
	}
	if (cardsInPlay.length === 3){
		cardsInPlay[0] === cardsInPlay[2] || cardsInPlay[1] === cardsInPlay[2] ? addToScore():alert("Sorry, try again.");
	}
	
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		cardsInPlay = [];
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('class','card-images');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var addToScore = function(){
	score = score + 1;
	document.getElementById('score-text').innerHTML = "Score = " + score;
	alert("You've found a match!");
}

var reset = function(){
	for (var i = 0; i < 4; i++){
		document.getElementsByTagName("img")[0].remove();
	}
	createBoard();
}

document.getElementById('reset-button').addEventListener('click', reset);

createBoard();