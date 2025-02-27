//variable for initial sun position
//point below horizon
let sunHeight = 600;

//variables for color change
let redVal = 0;
let greenVal = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Draw the sky
  sky();

  // Draw a sun
  sun();

  // Draw some mountains 
  mountains();

  // // draw two trees
  // tree(150, 320, 10)
  // tree(210, 320, 10)

  // call trees() function
  trees();

  // reduce sunHeight by 2 until it reaches 130
  if (sunHeight > 130) {
    sunHeight -= 2;


    // increase color variables by 4 or 1 during sunrise
    if (sunHeight < 480) {
      redVal += 4;
      greenVal += 1;
    }
  }
  if (mouseIsPressed == true) {
    background(0);
  }
}


//fill background based on custom variables
//the value of blue is set to 0 and will not change
function sky() {
  background(redVal, greenVal, 0);
}

//draw a sun
function sun() {
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);
}

//drawing mountains
function mountains() {
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110, 95, 20);
  triangle(200, 400, 520, 253, 350, 400);

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);

  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);

}

//A function to draw trees with different x and y and size
function tree(x, y, size) {
  // Draw a tree.
  fill(80, 30, 20);
  rect(x - size, y, size * 2, size * 6);
  fill(20, 130, 5);
  triangle(x - size * 3, y, x, y - size * 8, x + size * 3, y)
}

function treeLine(x) {
  let y = -0.7 * x + 450;
  return y;
}

function trees() {
  // First tree
  let x = 150;
  let y = treeLine(x);
  tree(x, y, 5);

  // Second tree
  x = 180;
  y = treeLine(x);
  tree(x, y, 5);

  // Third tree
  x = 210;
  y = treeLine(x);
  tree(x, y, 5);
}

function keyPressed() {
  redVal = 0;
  greenVal = 0;
  sunHeight = 600;
}