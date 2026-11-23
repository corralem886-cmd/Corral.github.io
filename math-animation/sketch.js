let orbitAngle = 0;
let angularSpeed = 0.03;
let orbitRadius = 110;
let isPaused = false;

function setup() {
  createCanvas(600, 420);
}

function draw() {
  background(24, 28, 36);

  let centerX = width / 2;
  let centerY = height / 2 + 15;

  noFill();
  stroke(70, 85, 110);
  strokeWeight(2);
  circle(centerX, centerY, orbitRadius * 2);

  fill(255, 190, 60);
  noStroke();
  circle(centerX, centerY, 12);

  let dotX = centerX + orbitRadius * cos(orbitAngle);
  let dotY = centerY + orbitRadius * sin(orbitAngle);

  stroke(110, 180, 255, 140);
  strokeWeight(2);
  line(centerX, centerY, dotX, dotY);

  fill(80, 220, 170);
  noStroke();
  circle(dotX, dotY, 22);

  if (!isPaused) {
    orbitAngle += angularSpeed;
  }

  fill(240);
  noStroke();
  textSize(14);
  text("Orbiting Dot (x = cx + r*cos(θ), y = cy + r*sin(θ))", 16, 26);
  text("Controls: Click or SPACE = Pause/Resume | UP/DOWN = Speed", 16, 48);
  text("Status: " + (isPaused ? "Paused" : "Running") + " | Speed: " + angularSpeed.toFixed(2) + " rad/frame", 16, 70);
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    isPaused = !isPaused;
  }
}

function keyPressed() {
  if (key === " ") {
    isPaused = !isPaused;
  } else if (keyCode === UP_ARROW) {
    angularSpeed = min(0.20, angularSpeed + 0.01);
  } else if (keyCode === DOWN_ARROW) {
    angularSpeed = max(0.00, angularSpeed - 0.01);
  }
}
