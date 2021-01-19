var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey ,monkey_running ;
var ground, groundImage ;
var banana, bananaImage, obstacle, obstacleImage
var BananaGroup, ObstacleGroup ;
var score ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  
  
  
  monkey = createSprite(100, 315, 5, 5);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.05 ;
  
  ground = createSprite(400, 500, 900, 10);
  ground.VelocityX = -4 ;
  ground.x = ground.width/2 ;
  console.log(ground.x);
  
  BananaGroup = createGroup();
  ObstacleGroup = createGroup();
  
  score = 0 ;
  
}


function draw() {
  
  background("white");
  
  
  
  
  if(ground.x<0){
    ground.x = ground.width/2 ;
  }
  
  if(keyDown("space")){
    
    monkey.velocityY = -15 ;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.80 ;
  
  monkey.collide(ground);
  

  spawnBanana();
  spawnObstacle();
  
  drawSprites();
  
  
  if(ObstacleGroup.isTouching(monkey)){
    monkey.scale = 0.05 ;
    score = 0 ;
    
  }
  
  
  if(BananaGroup.isTouching(monkey)){
    BananaGroup.destroyEach();
    score = score+2 ;
  }
  
  text("Score :" + score, 400,100);
  textSize(20);
  
   
  switch(score){
      
    case 6 : monkey.scale = 0.06 ;
             break ;
    case 12 : monkey.scale = 0.07 ;
             break ;
    case 18 : monkey.scale = 0.08 ;
             break ;
    case 24 : monkey.scale = 0.09 ;
             break ;
    case 30 : monkey.scale = 0.1 ;
             break ;
    case 70 : monkey.scale = 0.2 ;
             break ;
    case 90 : monkey.scale = 0.3 ;
             break ;
    case 100 : monkey.scale = 0.5 ;
             break ;
             
  }
  
  
  
}


function spawnBanana () {
//Write Code Here To Spawn Bananas in Group
  if(frameCount % 80 === 0){
    var banana = createSprite( 400, 280, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.1 ;
  
    
    banana.x = Math.round(random(400,600));
    
    banana.velocityX = -7;
    
    
    monkey.depth = banana.depth;
    monkey.depth +=1;
   
    //assign lifetime to the variable
    banana.lifetime = 800;
    
    
    BananaGroup.add(banana);
    
  }
}

function spawnObstacle () {
//Write Code Here To Spawn Obstacles in Group
  if(frameCount % 300 === 0){
    var obstacle = createSprite( 400, 458, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2 ;
  
    
    obstacle.x = Math.round(random(500,700));
    
    obstacle.velocityX = -5;
   
    //assign lifetime to the variable
    obstacle.lifetime = 500;
    
    
    ObstacleGroup.add(obstacle);
    
  }
}
