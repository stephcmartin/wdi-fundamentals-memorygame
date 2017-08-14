console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var win = 0;
var lose = 0;

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
  }

};

function isTwoCards() {
cardsInPlay.push(this.getAttribute('data-card'));
console.log("User Flipped" + " " + this.getAttribute('data-card'));
if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img src='king.png'>"; 
    } else {
        this.innerHTML = "<img src='queen.png'>"; 
    }
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
    document.getElementById("win").innerHTML = win++;
  } 
    
    else {
    alert("Sorry, try again.");
      document.getElementById("lose").innerHTML = lose++;

  }
}

function reset() {
    alert("Let's Play Again!");
     window.location.reload();
}

createBoard();