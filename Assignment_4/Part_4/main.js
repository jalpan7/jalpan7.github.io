// Name: Jalpan Patel
// File: main.js
// Date:  01, August 2024
// Description: Part_4 Adding features to our bouncing balls demo.

// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number among the min and max.

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
// Shape class definition taken for the purpose of (parent of ball and EvilCircle classes)
class Shape {
  constructor(x, y, velX, velY) {
    // Initializing ball properties.
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    
  }

  // Added the draw() method to the ball class.
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    //used math.pi library and used arc to draw the circle 
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Update ball's position(data) and handle the wall collison with rigth, left, bottom, and top wall.
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  // Update ball's position based on itds velocity.
    this.x += this.velX;
    this.y += this.velY;
  }
// adding the collision detection it will make the output more attracting and that make sense.
// we have added the bunch of code from the MDN server website.
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        // Calculate the distance between balls using the pythagorean Theorem.
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          // If the balls are touching, change their colors
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
// EvilCircle class defination (child of shape class)
// This is the class directly inherits the properties and method from the shape class.
class EvilCircle extends Shape {
  // took Constructor to initialize EvilCircle properties.
  constructor(x, y) {
    // this will call the parents class with x and y coordinates with the parameters value of 20.
    super(x, y, 20, 20);
    // set the color of the EvilCircle to "White".
    this.color = 'white';
    // set the size of EvilCircle to the 10
    this.size = 10;
  }
  
  // Method to draw the EvilCircle on the canvas
  draw(){
    // Begin a new path for drawing
    ctx.beginPath();
    // set the line width for the circle's outline
    ctx.lineWidth = 3;
    // set the stroke color to the EvilCircle's color
    ctx.strokeStyle = this.color;
    // Draw the circle using the arc method.
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();

  }
// Now we will create an array to hold balls and populate it with the 25 random balls.
 const balls = [];


 while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      randomRGB(),
      size,
    );
  
    balls.push(ball);
  }
  // Function to run the animation loop 
  function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      // Draw each ball
      ball.draw();
      // Upadte each ball's position
      ball.update();
      // Upadte each ball's position
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }
  // Starts the animation loop  
  loop();