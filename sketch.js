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
  //fill background based on custom variables
  //the value of blue is set to 0 and will not change
  background(redVal, greenVal, 0);

  //sun
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);

  //mountains
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
