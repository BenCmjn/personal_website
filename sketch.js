var cnv;
let max_distance;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() { 
  // createCanvas(windowWidth, windowHeight);
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  cnv.parent('sketch-holder');

  noFill();
  noCursor();  
}

function draw() { 
  sizeX = dist(mouseX, height / 2, width / 2, height / 2);
  sizeY = dist(mouseY, height / 2, width / 2, height / 2);
  
  background(244);
  fill(0,61,217);
  ellipse(mouseX,mouseY, width/2-sizeX,width/2-sizeX);
  
  // rectMode(CENTER);
  // noFill();
  // stroke(244);
  // rect(width/4,height/2, 300,85);
  
  
  for (let j = 0; j <= height; j += 20) {
    stroke(0,61,217);
    strokeWeight(1.5);
    
    line(0, j, sizeX, j); //Gauche
    line(width, j, width-sizeX, j); //Droite
  }
}
function windowResized() {
  centerCanvas();
}