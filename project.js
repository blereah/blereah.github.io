let createCanvas

let playButton

function setup() {
  createCanvas(windowWidth, windowHeight);

  playButton = createButton("Play")
  playButton.position(50, 30)

}


function draw() {

background(50, 88, 168)
textSize(40)
text("Welcome to Number Guesser", 50, 50);