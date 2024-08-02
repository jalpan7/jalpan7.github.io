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
    // Position and velociy of the shape.
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}
// Ball class definition extending shape
class Ball extends Shape {
  constructor(x, y, velX, velY, size, color) {
    // it calls shape constructor.
    super(x, y, velX, velY);
    // Size of the Ball
    this.size = size;
    // colour of Ball
    this.color = color;
    // Initialize exists.
    this.exists = true;
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
    // Check if the ball hits the right or left edge of the canvas
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -this.velX;
    }
    // Check if the ball hits the top or bottom edge of the canvas.
    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -this.velY;
    }
    // Update the ball's position by adding velocity.
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

    // Added an event listener for the keydown events on the window 
    window.addEventListener("keydown", (e) => {
      // Used a switch statement to check which key was pressed.
      switch (e.key) {
        // If 'a' is pressed, this move the object left by subtracting velX from x
        case "a":
          this.x -= this.velX;
          break;
          // If 'd' is pressed, this move th eobject right by adding velX to x 
        case "d":
          this.x += this.velX;
          break;
          // If 'w' is pressed, move the object up by subtracting velY from y 
        case "w":
          this.y -= this.velY;
          break;
          // If 's' is pressed, move the object down by adding velY to y
        case "s":
          this.y += this.velY;
          break;
      }
    });
  }

  // Method to draw the EvilCircle on the canvas
  draw() {
    // Begin a path for drawing
    ctx.beginPath();
    // set the stroke color to the EvilCircle's color
    ctx.strokeStyle = this.color;
    // set the line width for the circle's outline
    ctx.lineWidth = 3;
    // set the stroke color to the EvilCircle's color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();

  }

  // Checkbound Method to check and update boundary collisions for the EvilCircle
  checkBounds() {
    if (this.x + this.size > width) {
      this.x = width - this.size;
    } else if (this.x - this.size < 0) {
      this.x = this.size;
    }

    if (this.y + this.size > height) {
      this.y = height - this.size;
    } else if (this.y - this.size < 0) {
      this.y = this.size;
    }
  }
  // Check for collision with balls
  collisionDetect() {
    // used the for loop which goes through the all the balls
    for (const ball of balls) {
      // check if the ball exists
      if (ball.exists) {
        // calculate horizontal distance 
        const dx = this.x - ball.x;
        // calculate vertical distance
        const dy = this.y - ball.y;
        // calculate distance between the balls.
        const distance = Math.sqrt(dx * dx + dy * dy);
        // If collision detected, ball disappears 
        if (distance < this.size + ball.size) {
          ball.exists = false; 
        }
      }
    }
  }
}

  // Now we will create an array to hold balls and populate it with the 25 random balls.
  const balls = [];

  // loop until there are 25 balls. 
  while (balls.length < 25) {
  // Generate the random size to the ball.
    const size = random(10, 20);
    const ball = new Ball(
  // ball position always drawn at least one ball width
  // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      // size of the ball.
      size,
      // random ball to the array.
      randomRGB(),
    );
  // adding the ball to the array.
    balls.push(ball);
  }

  // Create an EvilCircle instance with the starting point 50.
  const evilCircle = new EvilCircle(50, 50);

  // Create a score counter element
  // Creating a paragraph element for the score.
  const scoreElement = document.createElement('p');
  scoreElement.textContent = `Ball count: ${balls.length}`;
  // adding the score elemetnto the document
  document.body.appendChild(scoreElement);

  // Function to run the animation loop 
  function loop() {
  // Clear the canvas with a semi-transparent black rectangle
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  // Draw, Update, and check collision for each ball on the window.
  for (const ball of balls) {
    if (ball.exists) {
      // Draw each ball
      ball.draw();
      // Upadte each ball's position
      ball.update();
      // Upadte each ball's position
      ball.collisionDetect();
    }
  }
  // EvilCircle used for Draw, Check bounds, and check collision.
  // drawing evilCircle
  evilCircle.draw();
  // making sure to stay evilCircle within canvas
  evilCircle.checkBounds();
  // looking for checking collision.
  evilCircle.collisionDetect();

  // Update score
  scoreElement.textContent = `Ball count: ${balls.filter(ball => ball.exists).length}`;
  // Repeat the loop
  requestAnimationFrame(loop);
  }

  // Begin the animation loop  
  loop();
