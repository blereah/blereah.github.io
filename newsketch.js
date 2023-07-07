
horse = loadImage('horse.png')

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  horse = loadImage('horse.png')
}

function keyPressed(){
  if(keyisPressed){
  background(0, 3, 8)
  } else {
    background(20, 169, 250)
  }
}

function draw() {
  background(20, 169, 250);
  
 stroke(244, 252, 3)
  fill(244, 252, 3)
  ellipse(100,100, 100, 100)
  
    noStroke()
  fill(0, 255, 0)
  rect(0, 550, 730, 500)
  
   stroke(244, 252, 3)
  fill(244, 252, 3)
  ellipse(100,100, 100, 100)
  
    noStroke()
  fill(250, 245, 245)
  ellipse(300,200, 100, 100)
  
      noStroke()
  fill(250, 245, 245)
  ellipse(600,200, 100, 100)
  
      noStroke()
  fill(13, 1, 1)
  ellipse(100,400, 100, 100)
  
        noStroke()
  fill(13, 1, 1)
  ellipse(100,400, 100, 100)
  
    noStroke()
  fill(13, 1, 1)
  rect(150, 400, 200, 200)

  image(horse, mouseX, mouseY, 40, 40)
}
