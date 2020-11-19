var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,100, 50, 50);
  movingRect = createSprite(600,700,60,80);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;
}

function draw() {
  background(0);  
  // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 ){
    //fixedRect.shapeColor = "red";
    //movingRect.shapeColor = "red";
    movingRect.velocityX = (-1)*movingRect.velocityX;
    fixedRect.velocityX = (-1)*fixedRect.velocityX;
  }
  if(movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = (-1)*movingRect.velocityY;
      fixedRect.velocityY = (-1)*fixedRect.velocityY;
  }
  /*else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }*/
  drawSprites();
}