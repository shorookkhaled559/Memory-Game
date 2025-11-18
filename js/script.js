const images = [
  "https://i.etsystatic.com/16060308/r/il/7d24d8/4671432189/il_1080xN.4671432189_9br4.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlW8SZXTnd2O7lZrEHhnBzhGZx7CiJsd-nHg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2UsDgMeYLGKT0pvl6xrQDnIi6PTxL7qXIg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF014diU-LjLbjuiXubDgK7RTNA6mKOyOHQK2AAas7YKnKYMAJ8hz5ogCpn-Q3pybWSfg&usqp=CAU",
];

let gameState = {
  cards: [],
  flipped: [],
  matched: [],
  isProcessing: false,
  timer: 60,
  timerInterval: null,
};

function initGame() {
  const pairs = [...images, ...images];
  gameState.cards = shuffleArray(pairs);
  gameState.flipped = [];
  gameState.matched = [];
  gameState.isProcessing = false;
  gameState.timer = 60;
  document.getElementById("timer").textContent = gameState.timer;
  renderCards();
  if (gameState.timerInterval) clearInterval(gameState.timerInterval);
  startTimer();
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function renderCards() {
  const grid = document.getElementById("cardsGrid");
  grid.innerHTML = "";
  gameState.cards.forEach((img, index) => {
    const card = document.createElement("div");
    card.className = `aspect-square bg-indigo-500 rounded-xl shadow-lg cursor-pointer flex items-center justify-center overflow-hidden transition-transform duration-300 
        ${
          gameState.flipped.includes(index) || gameState.matched.includes(index)
            ? "bg-white"
            : ""
        }`;
    card.onclick = () => flipCard(index);

    const imageEl = document.createElement("img");
    imageEl.src = img;
    imageEl.className = `w-full h-full object-cover ${
      gameState.flipped.includes(index) || gameState.matched.includes(index)
        ? "block"
        : "hidden"
    }`;
    card.appendChild(imageEl);

    grid.appendChild(card);
  });
}

function flipCard(index) {
  if (
    gameState.isProcessing ||
    gameState.flipped.includes(index) ||
    gameState.matched.includes(index)
  )
    return;
  gameState.flipped.push(index);
  renderCards();
  if (gameState.flipped.length === 2) checkMatch();
}

function checkMatch() {
  gameState.isProcessing = true;
  const [first, second] = gameState.flipped;
  const isMatch = gameState.cards[first] === gameState.cards[second];
  setTimeout(
    () => {
      if (isMatch) gameState.matched.push(first, second);
      gameState.flipped = [];
      gameState.isProcessing = false;
      renderCards();
      if (gameState.matched.length === gameState.cards.length) {
        endGame(true);
      }
    },
    isMatch ? 500 : 1000
  );
}

function startTimer() {
  gameState.timerInterval = setInterval(() => {
    gameState.timer--;
    document.getElementById("timer").textContent = gameState.timer;
    if (gameState.timer <= 0) {
      clearInterval(gameState.timerInterval);
      endGame(false);
    }
  }, 1000);
}

function endGame(won) {
  clearInterval(gameState.timerInterval);
  document.getElementById("finalTime").textContent =
    "Time Left: " + gameState.timer + "s";
  document.getElementById("winMessage").textContent = won
    ? " You matched all pairs!"
    : " Time is up!";
  document.getElementById("winModal").classList.remove("hidden");
  document.getElementById("winModal").classList.add("flex");
}

function resetGame() {
  document.getElementById("winModal").classList.remove("flex");
  document.getElementById("winModal").classList.add("hidden");
  initGame();
}

window.addEventListener("load", initGame);
