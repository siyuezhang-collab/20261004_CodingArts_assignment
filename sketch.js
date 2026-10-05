let colorPalette =['#ec2b5f', '#d33fff', '#ff6bd6', '#ff8c42', '#ffd93d', '#9ced79', '#00c2a8', '#00bcd4', '#4d96ff', '#7c4dff'];
let angle;
let r =25;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rotspeed=random(1,5);
  angle = random(1,10); 
 
}

function draw() {
  // Set background to black
  background(0,40);
  translate(width/2,height/2);
  angleMode(DEGREES);
  
  rotate(angle);  

  for(i=0;i<7;i++) 
    {
    push();
    rotate(i*360/7);
    fill(colorPalette[i]);
    noStroke();
    ellipse(0,75,50,150);
    pop();
  }

  noStroke();
  fill('white')
  circle(0,0,50,50);

  push()
  stroke('red')
  line(0,0,r,0)
  pop()

  angle+=rotspeed


}
