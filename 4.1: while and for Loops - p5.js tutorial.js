function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  var x = 0;
  
  while (x <= width) {
    fill(0, 150, 200);
    ellipse(x, 200, 25, 25);
    x = x + 50;
  }
  
  for (var x = 0; x < width; x += 50 /* also written as x = x + 50 */) {
    fill(255, 0, 230);
  ellipse (x, 300, 25, 25)
  }
}
