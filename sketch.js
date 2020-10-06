var fixedRect, movingRect;

var gameObject1;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(100,100, 80, 50);
  gameObject1= createSprite(100,50,50,50);
  movingRect.shapeColor= "red";
  fixedRect.shapeColor="blue";
  gameObject1.shapeColor="white";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor= "green";
    fixedRect.shapeColor="green";

  }
  else{    
    movingRect.shapeColor= "red";
    fixedRect.shapeColor="blue";
  }

  if(isTouching(gameObject1, movingRect)){
    gameObject1.shapeColor = "red";
  }
  else{
    gameObject1.shapeColor = "white";
  }
  drawSprites();
}

// function is going to accept 2 sprites as arguments 
