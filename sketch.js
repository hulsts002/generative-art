var canvas;
let button;
var rectR = 40;
var x, y, w, h;
var totalShapeCount = 4;
var totalStarCount = 3;
var count;
var p1 = false;
var p2 = false;
let img1;
let img2;

function preload() {
	img1 = loadImage("assets/Ball01.jpg");
	img2 = loadImage("assets/Ball02.png");
  }

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	background(255);
	rectMode(CENTER);
	index();
	frameRate(1);
}

function draw() {
	// Check if pattern 1 or 2 is on screen
	console.log("p1 " + p1);
	console.log("p2 " + p2);
}

function keyPressed() {
	if (keyCode === 49) {
		patternOneRed();
		console.log("pressed 1");
	} else if (keyCode === 50) {
		patternTwoRed();
		console.log("pressed 2");
	} else if (keyCode === 82) {
		clear();
		if (p1 == true) {
			patternOneRed()
		} else if (p2 == true) {
			patternTwoRed()
		} else if (p1 == false && p2 == false) {
			clear();
			index();
		}
		console.log("pressed r");
	} 	else if (keyCode === 66) {
		clear();
		if (p1 == true) {
			patternOneBlue()
			patternOneText();
		} else if (p1 == false && p2 == false) {
			clear();
			index();
		} else if (p2 == true) {
			clear();
			index();
		}
		console.log("pressed b");
	} else if (keyCode === 71) {
		clear();
		if (p2 == true) {
			patternTwoGreen()
			patternTwoText();
		} else if (p1 == false && p2 == false) {
			clear();
			index();
		} else if (p1 == true) {
			clear();
			index();
		}
		console.log("pressed g");
	} else if (keyCode === 27) {
		clear();
		index();
		p1 = false;
		p2 = false;
		console.log("pressed esc");
	} else if (keyCode === 187) {
		if (p1 == true) {
			rectR += 5;
			patternOneBlue();
		} else if (p2 == true) {
			clear();
			totalStarCount++;
			count = totalStarCount;
			patternTwoGreen()
		}
		console.log("pressed +");
	} else if (keyCode === 189) {
		if (p1 == true) {
			rectR -= 5;
			patternOneBlue();
		} else if (p2 == true) {
			totalStarCount--;
			count = totalStarCount;
			patternTwoGreen()
		}
		console.log("pressed -");
	}

}

function index() {
	let ballX = windowWidth / 2;
	let ballY = 260;
	let ballR = 200;
	// fill(255, 255, 255);
	// strokeWeight(1);
	// stroke(31);
	// ellipse(ballX - 150, ballY, ballR);
	// ellipse(ballX + 150, ballY, ballR);

	image(img1, ballX - 260, ballY, ballR, ballR);
	image(img2, ballX + 150, ballY, ballR, ballR);

	// Text
	fill(0, 0, 0);
	noStroke();
	textSize(20);
	text('Press 1: Pattern 1', windowWidth / 2 - 230, 220);
	textSize(20);
	text('Press 2: Pattern 2', windowWidth / 2 + 70, 220);

}

function patternOneRed() {
	clear();
	background(250);
	noStroke();
	for (let posX = 0; posX < random(12, 28); posX++) {
		fill(random(0, 256), 0, 0);
		for (let posY = 0; posY < random(6, 15); posY++) {
			square(posX * rectR, posY * rectR, rectR);
			fill(random(0, 256), 0, 0);
		}
	}
	patternOneText();

	p2 = false;
	p1 = true;

}

function patternOneBlue() {
	clear();
	background(250);
	noStroke();
	for (let posX = 0; posX < random(12, 28); posX++) {
		fill(0, 0, random(0, 256));
		for (let posY = 0; posY < random(6, 15); posY++) {
			square(posX * rectR, posY * rectR, rectR);
			fill(0, 0, random(0, 256));
		}
	}
	patternOneText();

	p2 = false;
	p1 = true;

}

function patternOneText() {

	noStroke();
	textSize(15);
	fill(0, 0, 0);
	text("Press R = Red + Reroll", 10, windowHeight - 40);

	noStroke();
	textSize(15);
	fill(0, 0, 0);
	text("Press B = Blue + Reroll", 10, windowHeight - 20);

	noStroke();
	textSize(15);
	fill(0, 0, 0);
	text("- & + = Rectangle Size", windowWidth - 200, windowHeight - 40);

	noStroke();
	textSize(15);
	fill(0, 0, 0);
	count = text(
		"Rectangle Size = " + rectR,
		windowWidth - 200,
		windowHeight - 20
	);


}

function drawRandomRectangles() {
	x = random(width);
	y = random(-200, 200);
	w = 150;
	h = 2400;

	noStroke();
	// rotate(random(-1, 1));
	rect(x, y, w, h);
}

function patternTwoRed() {
	background(138, 226, 255);

	for (var i = 0; i < totalShapeCount; i++) {
		fill(200, 10, 10, 130);
		drawRandomRectangles();
	}

	for (var t = 0; t < totalStarCount; t++) {
		push();
		fill(255, 255, 255);
		stroke("#000000");
		strokeWeight(4);
		star(
			random(70, windowWidth - 70),
			random(70, windowHeight - 70),
			40,
			130,
			5
		);
		pop();
	}

	p1 = false;
	p2 = true;

	patternTwoText()
}

function patternTwoGreen() {
	background(138, 226, 255);

	for (var i = 0; i < totalShapeCount; i++) {
		fill(25, 155, 15, 100);
		drawRandomRectangles();
	}

	for (var t = 0; t < totalStarCount; t++) {
		push();
		fill(255, 255, 255);
		stroke("#000000");
		strokeWeight(4);
		star(
			random(70, windowWidth - 70),
			random(70, windowHeight - 70),
			40,
			130,
			5
		);
		pop();
	}

	p1 = false;
	p2 = true;

	patternTwoText()
}

function patternTwoText() {
	noStroke();
	textSize(15);
	fill(0, 0, 0);
	text("Press R = Red + Reroll", 10, windowHeight - 40);

	noStroke();
	textSize(15);
	fill(0, 0, 0);
	text("Press G = Green + Reroll", 10, windowHeight - 20);

	noStroke();
	textSize(15);
	fill(0, 0, 0);
	text("- & + = Star Count", windowWidth - 170, windowHeight - 40);

	noStroke();
	textSize(15);
	fill(0, 0, 0);
	count = text(
		"Star Count = " + totalStarCount,
		windowWidth - 170,
		windowHeight - 20
	);
}

function star(x, y, radius1, radius2, npoints) {
	let angle = TWO_PI / npoints;
	let halfAngle = angle / 2.0;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius2;
		let sy = y + sin(a) * radius2;
		vertex(sx, sy);
		sx = x + cos(a + halfAngle) * radius1;
		sy = y + sin(a + halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}