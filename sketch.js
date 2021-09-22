var space,rocket;
var rocketImg,spaceImg;

function preload(){

  rocketImg = loadImage("Rocket.png");
  spaceImg = loadImage("space.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  space=createSprite(400,200);
  space.addImage(spaceImg);
  space.velocityY = 5;
  space.scale=2;
  
  rocket = createSprite(130,200,30,30);
  rocket.addImage("movingrocket",rocketImg);
  rocket.scale =0.25;
  
}

function draw() {
  background(0);
  space.velocityY = 3;


  if(space.y > 380){
    space.y = space.width/6;
  }

 
  drawSprites();
}