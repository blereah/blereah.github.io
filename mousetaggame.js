//  game object
let furby


// variables for the position and speed of the game object
let xPos 
let yPos 

let xSpeed = 2
let ySpeed = 2


// calculate mouse distance from game object
let mouseDist
//
let score = 0

let startBool = true
let winBool = false

let rotation
	furby = loadImage('furby.png')


function setup(){
	createCanvas(windowWidth, windowHeight)
 	xPos = random(15, windowWidth - 15)
 	yPos = random(15, windowHeight - 15)

 	imageMode(CENTER)
}


function draw(){
	background(0)
	if(startBool == true){
		start()
	}
	if(winBool == true){
		winScreen()
	}
}

function winScreen(){
	background(200, 30, 100)
	fill(255)
	textSize(40)
	text("You won!!!", windowWidth/2, 50)


	push()
	translate(windowWidth/2, windowHeight/2)
	rotate(radians(rotation))
	image(furby, 0, 0)

	pod()
}


function start(){
	fill(255)
	textSize(40)
	text("Your Score is: " + score, windowWidth/2, 50)
		image(furby, xPos, yPos, 30, 30)
	// update x and y position every frame
    xPos = xPos - xSpeed
    yPos = yPos - ySpeed

// if furby hits edge of screen reverse speed
    if(xPos >= windowWidth - 15|| xPos <= 15){
    	xSpeed = xSpeed* -1

    }
    if(yPos >= windowHeight - 15|| yPos <= 15){
    	ySpeed = ySpeed* -1

    }
	mouseDist = dist(mouseX, mouseY, xPos, yPos)

	if(mouseDist <= 15){
 	xPos = random(15, windowWidth - 15)
 	yPos = random(15, windowHeight - 15)
 	xSpeed = xSpeed * 1.2
 	ySpeed = xSpeed * 1.2
 	score++		

	}

	if(score == 20){
		startBool = false
		winBool = true

	}

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}