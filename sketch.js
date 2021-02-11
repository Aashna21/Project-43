var hr, mn, sc, scAngle, hrAngle, mnAngle;
var middle; 

function setup() {
  createCanvas(400,400);
  //createSprite(200, 200, 10, 10);

  angleMode(DEGREES)
}

function draw() {
  background(46, 46, 29);  

  //Translation and rotation 
  translate(200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 12, 0, 72)
  mnAngle = map(mn, 0, 60, 0, 360)

  //hours
  stroke(47, 82, 43);
  strokeWeight(7); 
  line(0, 0, 50, 0)

  //minutes
  rotate(mnAngle);
  stroke(48, 25, 66);
  strokeWeight(7); 
  line(0, 0, 75, 0) 

  //seconds
  push();
  rotate(scAngle);
  stroke(225, 0, 0);
  strokeWeight(7); 
  line(0, 0, 100, 0)
  pop(); 

  drawSprites();
}