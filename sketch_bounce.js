var fixedRect, movingRect;

var gameObject1;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 50, 80);
  movingRect = createSprite(700,200, 80, 50);
  fixedRect.velocityX = 5;
  movingRect.velocityX = -5;
  
  
  gameObject1= createSprite(100,50,50,50);
  movingRect.shapeColor= "red";
  fixedRect.shapeColor="blue";
  gameObject1.shapeColor="white";
}

function draw() {
  background(0);  

  
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

// function is going to accept 2 sprites as arguments 
