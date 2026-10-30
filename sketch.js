function setup() {
  createCanvas(800, 500);
  background(20);
  noStroke();
}

function draw() {
  fill(20,20,20,25);
  rect(0,0,800,500);
}

if(mouse < width/ 2) { 
fill(255,120,50);
ellipse(mouseX, mouseY, 40, 40)
} 
else {
fill(50,150,255);
rect(mouseX, mouseY, 40, 40);
} 

if (mouseIsPressed) {
fill(255, 255, 255, 150);
ellipse(mouseX, mouseY, 120, 120);
} 
