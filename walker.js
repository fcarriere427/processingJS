// Adapted from Dan Shiffman, natureofcode.com


let a = 80; // Create a global variable "a"

function setup() {
  createCanvas(1450, 700);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {
  // Draw a line using the global variable "a"
  line(a, 0, a, height);

  // Use a local variable a in for loop
  for (let a = 120; a < 200; a += 3) {
    line(a, 0, a, height);
  }

  // Make a call to the custom function drawAnotherLine()
  drawAnotherLine();

  // Make a call to the custom function drawYetAnotherLine()
  drawYetAnotherLine();
}

function drawAnotherLine() {
  // Create a new variable "a" local to this function
  let a = 320;
  // Draw a line using the local variable "a"
  line(a, 0, a, height);
}

function drawYetAnotherLine() {
  // Because no new local variable "a" is set,
  // this line draws using the original global
  // variable "a" which is set to the value 20.
  line(a + 3, 0, a + 3, height);
}


//////////////

// var Walker = function() {
//     this.x = width/2;
//     this.y = height/2;
// };
//
// Walker.prototype.display = function() {
//     stroke(0, 0, 0);
//     point(this.x, this.y);
// };
//
// // Randomly move up, down, left, right, or stay in one place
// Walker.prototype.walk = function() {
//     var choice = floor(random(4));
//     if (choice === 0) {
//         this.x++;
//     } else if (choice === 1) {
//         this.x--;
//     } else if (choice === 2) {
//         this.y++;
//     } else {
//         this.y--;
//     }
// };
//
// var w = new Walker();
//
// var draw = function() {
//     w.walk();
//     w.display();
// };
