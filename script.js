let width = 1500;
let height = 750;
let zoom = 1.001;

function setup() {
  createCanvas(width, height);
  background(255);
}

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    var choice = floor(random(4));
    if (choice === 0) {
        this.x = (this.x+1) * zoom;
    } else if (choice === 1) {
        this.x = (this.x-1) * zoom;
    } else if (choice === 2) {
        this.y = (this.y+1) * zoom;
    } else {
        this.y = (this.y-1) * zoom;
    }
};

var w = new Walker();

var draw = function() {
    w.walk();
    w.display();
};


//////// exemple qui fonctionne

// let a = 80; // Create a global variable "a"
//
// function draw() {
//   // Draw a line using the global variable "a"
//   line(a, 0, a, height);
//
//   // Use a local variable a in for loop
//   for (let a = 120; a < 200; a += 3) {
//     line(a, 0, a, height);
//   }
//
//   // Make a call to the custom function drawAnotherLine()
//   drawAnotherLine();
//
//   // Make a call to the custom function drawYetAnotherLine()
//   drawYetAnotherLine();
// }
//
// function drawAnotherLine() {
//   // Create a new variable "a" local to this function
//   let a = 320;
//   // Draw a line using the local variable "a"
//   line(a, 0, a, height);
// }
//
// function drawYetAnotherLine() {
//   // Because no new local variable "a" is set,
//   // this line draws using the original global
//   // variable "a" which is set to the value 20.
//   line(a + 3, 0, a + 3, height);
// }
