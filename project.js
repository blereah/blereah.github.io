let Canvas;
let playButton;
let numbers;
let guessInput;
let message;
let secretNumber;
let maxTries = 5;
let tries = 0;

function preload() {
  image = loadImage("numbers.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playButton = createButton("Play");
  playButton.position(50, 30);
  playButton.mousePressed(startGame);
  guessInput = createInput();
  guessInput.position(50, 80);
  guessInput.hide();
  message = createElement("h2");
  message.position(50, 120);
  imageMode(CENTER);
}

function draw() {
  background(50, 88, 168);
  textSize(40);
  text("Welcome to Number Guesser", 500, 50);
  
  textSize(20);
  text("Press button to begin", 50, 150);

  image(numbers, mouseX, mouseY, 100, 30);
}

function startGame() {
    secretNumber = Math.floor(Math.random() * (100 - 1 +1)) +1;
    tries = maxTries;
    playButton.hide();
    guessInput.show();
    message.html(`You have ${tries} tries left`);
}

function keyPressed() {
    if (keyCode === ENTER) {
        let guess = parseInt(guessInput.value());
        tries--;
        if (guess === secretNumber) {
            message.html(`You won! The secret number was ${secretNumber}`);
            endGame();
        } else if (tries === 0) {
            message.html(`You lost! The secret number was ${secretNumber}`);
            endGame();
        } else if (guess > secretNumber) {
            message.html(`Your guess is too high. You have ${tries} tries left`);
        } else if (guess < secretNumber) {
            message.html(`Your guess is too low. You have ${tries} tries left`);
        }
    }
}

function endGame() {
    playButton.show();
    guessInput.hide();
}













