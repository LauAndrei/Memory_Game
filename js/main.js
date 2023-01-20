const cardArray = [
  {
    name: "fries",
    img: "img/fries.png"
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png"
  },
  {
    name: "hotdog",
    img: "img/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png"
  },
  {
    name: "milkshake",
    img: "img/milkshake.png"
  },
  {
    name: "pizza",
    img: "img/pizza.png"
  },
  {
    name: "fries",
    img: "img/fries.png"
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png"
  },
  {
    name: "hotdog",
    img: "img/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png"
  },
  {
    name: "milkshake",
    img: "img/milkshake.png"
  },
  {
    name: "pizza",
    img: "img/pizza.png"
  }
];

cardArray.sort(() => 0.5 - Math.random()); //nice way of sorting an array randomly
let pairsFound = 0;
//grab the element with the id grid
const gridDisplay = document.querySelector("#grid")//the # means that we are looking for an id
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];

function createBoard() {
  for (let index in cardArray) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", index);
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');

  if (cards[cardsChosenIds[0]] === cards[cardsChosenIds[1]]) {
    cards[cardsChosenIds[0]].setAttribute('src', 'img/white.png');
    cards[cardsChosenIds[1]].setAttribute('src', 'img/white.png');
    alert("You have clicked the same image!");
  }

  if (cardsChosen[0] === cardsChosen[1]) {
    cards[cardsChosenIds[0]].setAttribute('src', 'img/white.png');
    cards[cardsChosenIds[1]].setAttribute('src', 'img/white.png');
    cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
    cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
    pairsFound++;
    resultDisplay.textContent = pairsFound;
  } else {
    cards[cardsChosenIds[0]].setAttribute('src', 'img/blank.png');
    cards[cardsChosenIds[1]].setAttribute('src', 'img/blank.png');
  }
  cardsChosen = [];
  cardsChosenIds = [];
  if(pairsFound === cardArray.length / 2){
      resultDisplay.textContent = "Congrats! You found all pairs!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 200);
  }
}
