let Canvas

let playButton

let numbers

let upArrows


function preload(){
image = loadImage(numbers.png)

image = loadImage(upArrows.png)
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  playButton = createButton("Play")
  playButton.position(50, 30)
  imageMode(CENTER)
}


function draw() {

background(50, 88, 168)
textSize(40)
text("Welcome to Number Guesser", 500, 50);

textSize(25)
text("Press play button to begin", 50, 150)
}