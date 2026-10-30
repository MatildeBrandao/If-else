function setup() {
  createCanvas(800, 500);
  background(20);
  noStroke();
}

function draw() {
  fill(20,20,20,25);
  rect(0,0,800,500);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
