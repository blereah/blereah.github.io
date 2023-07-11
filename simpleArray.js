let squareNumbers = [16, 25, 36, 48, 64, 81, 100]




function setup(){
createCanvas(windowWidth, windowHeight)
for(let i=0; i < squareNumbers.length; i++){
	let posX = random(100, windowWidth-100)
	let posY = random(100, windowWidth-100)

	ellipse(posX, posY, squareNumbers[i], squareNumbers[i])
	tect(squareNumbers[i], posX, posY)

}

print(squareNumbers[6])


}