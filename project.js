let Canvas

let playButton

let numbers

let noPressure

let guessInput

let grimace

let message

let secretNumber

let maxTries = 5;

let tries = 0;

function preload() {
  numbers = loadImage('numbers.png')

  grimace = loadImage('grimace.png')

  grimaceBirthday = loadImage('grimaceBirthday.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playButton = createButton("Play");
  playButton.position(50, 30);
  playButton.mousePressed(startGame);
  guessInput = createInput();
  guessInput.position(50, 30);
  guessInput.hide();
  message = createElement("h2");
  message.position(50, 150);
  

  

}

function draw() {
  background(50, 88, 168);
  textSize(40);
  text("Welcome to Number Guesser", 500, 50);
  
  textSize(20);
  text("Press button to begin", 50, 150);

    textSize(30)
    text("The number will be in the range of 1 - 100 and you have 5 guesses.", 350, 100)

    textSize(30)
    text("No pressure", 200, 50);

    image (numbers,  750, 700, 100, 75);

  image (grimace, 250, 250, 350, 350);

  image(grimaceBirthday, 750, 150, 375, 375);

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
            message.html(`You won! You are a god. The secret number was ${secretNumber}`);
            endGame();

        } else if (tries === 0) {

            message.html(`You lost! The secret number was ${secretNumber}`);
            endGame();

        } else if (guess > secretNumber) {

            message.html(`Your guess is too high. Try again`);
        } else if (guess < secretNumber) {
            message.html(`Your guess is too low. Try again`);
        }
    }
}

function endGame() {
    playButton.show();

    guessInput.hide();
}













