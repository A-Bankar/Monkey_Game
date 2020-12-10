var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var invisibleGround


function preload() {



  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(800, 400);
  
  monkey = createSprite(100, 300, 20, 20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  var survivalTime = 0;
  
  obstacleGroup=createGroup;
  FoodGroup = createGroup;

}


function draw() {
  background(255);

  //creating invisible ground
  invisibleGround = createSprite(200, height-64, 400, 10);
  invisibleGround.visible = false;
  
  ground = createSprite(400, 340, 800, 20);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  if (keyDown("space")&&monkey.y<=400) {
    monkey.velocityY = -12;
  }
  monkey.velocityY=monkey.velocityY+0.8 ;  
  
    monkey.collide(invisibleGround);
  
  
  
  stroke("black"); 
  textSize(20);
   fill("black"); 
  survivalTime=Math.ceil(frameCount/frameRate()); 
  text("Survival Time "+ survivalTime,50,40);

  createObstacles();
  spawnFood();  
  
  

  drawSprites();
}



function spawnFood(){
  if (frameCount%80===0){
    banana=createSprite(800,140,20,20);
    banana.velocityX=-5;
    banana.addImage("bananaImage",bananaImage);
    banana.scale=0.15
    banana.lifetime=170;
    
    banana.y= Math.round(random(100,200));
    
    
  }
}


function createObstacles(){
  if (frameCount%130===0){
    obstacle=createSprite(800,310,20,20);
    obstacle.addImage("obstacleImage",obstacleImage)
    obstacle.scale=0.2; 
    obstacle.velocityX = -5;
    obstacle.lifetime=170;
    
  }
}

