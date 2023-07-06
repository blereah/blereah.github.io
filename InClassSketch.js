let ellipseX = 300;
let furby;

function preload(){
		furby = loadImage("furby.png")

}
function setup(){
	
	createCanvas(windowWidth, windowHeight)
	

}

function draw(){

print(mouseX, mouseY)
imageMode(CENTER)

if (keyIsPressed == true){
	background(187, 77, 209);
	//ellipseX = 800
} else {

	background(200, 180, 100)
    // ellipseX = 300
}



for (let i = 0; i < windowWidth; i=i+10){
	print(i)
	line(i, 0, i, windowHeight)
}



textSize(40)
text("Brandon", 200, 200);
}

image(furby, mouseX, mouseY, 30, 30)
function mouseClicked(){
	if(ellipseX == 300){
	   eclipseX = 800
	
	}

	if(ellipseX == 800){
	   ellipseX = 300
	}
}