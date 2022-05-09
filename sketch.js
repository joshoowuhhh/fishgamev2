let pink;

var ballx = 300;
var bally = 300;
var ballSize = 45;
var score = 0;
var gameState = "L1";

function preload() {
  clean = loadImage('assets/bkclean.png');
  stage = loadImage('assets/bkground.png');
  pink = loadImage('assets/pinkfish.png');
  coin = loadImage('assets/fishcoin.png');
  bkclean = loadImage('assets/bkclean.png');
  bk2 = loadImage('assets/bk2.png');
  bk3 = loadImage('assets/bk3.png');
  bk4 = loadImage('assets/bk4.png');
  bk5 = loadImage('assets/bk5.png');
  bk6 = loadImage('assets/bk6.png');
  bk7 = loadImage('assets/bk7.png');
}


function setup() {
  createCanvas(600, 600);
  noCursor();
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLDITALIC);
  text('Font Style Bold Italic', 10, 90);
} // end of seutup

function draw() {
  image(pink, mouseX, mouseY, 20, 20);
  background(clean);
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "L4") {
    levelFour();
  }
  if (gameState == "L5") {
    levelFive();
  }
  if (gameState == "L6") {
    levelSix();
  }
  if (gameState == "L7") {
    levelSeven();
  }
  if (gameState == "L8") {
    levelEight();
  }
  if (gameState == "L9") {
    Win();
  }
  text(("Fish Coins Collected: " + score), width / 2, 40);
  image(pink, mouseX, mouseY, 50, 50);
} // end of draw ===================================

function levelOne() {
  background(clean);
  text("Level 1", width / 2, 70);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 1) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score >= 5) {
    gameState = "L2";
  }

  image(coin, ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);

} // end of Level 1 ================================

function levelTwo() {
  background(stage);
  text("Level 2", width / 2, 70);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 4) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score >= 10) {
    gameState = "L3";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(coin, ballx, bally, ballSize, ballSize);

} // end of Level 2 ================================

function levelThree() {
  background(bk2);
  text("Level 3", width / 2, 70);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 4) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score >= 15) {
    gameState = "L4";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(coin, ballx, bally, ballSize, ballSize);

} // end of Level 3 ================================

function levelFour() {
  background(bk3);
  text("Level 4", width / 2, 70);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 4) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 1;
  }

  if (score >= 20) {
    gameState = "L5";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(coin, ballx, bally, ballSize, ballSize);

} // end of Level 4 ================================

function levelFive() {
  background(bk4);
  text("Level 5", width / 2, 70);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 1;
  }

  if (score >= 25) {
    gameState = "L6";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(coin, ballx, bally, ballSize, ballSize);

} // end of Level 5 ================================

function levelSix() {
  background(bk5);
  text("Level 6", width / 2, 70);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 4) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 1;
  }

  if (score >= 25) {
    gameState = "L7";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(coin, ballx, bally, ballSize, ballSize);

} // end of Level 6 ================================

function levelSeven() {
  background(bk6);
  text("Level 7", width / 2, 70);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 4) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 1;
  }

  if (score >= 30) {
    gameState = "L8";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(coin, ballx, bally, ballSize, ballSize);

} // end of Level 7 ================================

function levelEight() {
  background(bk7);
  fill(255, 255, 255);
  text("Level 8", width / 2, 70);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 4) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 1;
  }

  if (score >= 35) {
    gameState = "L9";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(coin, ballx, bally, ballSize, ballSize);

} // end of Level 8 ================================

function Win() {
  background(coin);
  fill(255, 255, 255);
  textSize(25);
  text("Nice! You win!", width / 2, 70);
  text("But with all the trash in the sea...", width / 2, 100)
  text("did you really win?", width / 2, 130);

}
