var player;
var bulletGroup,enmiesGroup;
var score;
var enmies;
var backgroundImg,playerImg,enemy1,enemy2,enemy3,enemy4,enemy5;

function preload(){
  backgroundImg=loadImage("background.jpg");
  playerImg=loadImage("player.png");
  enemy1=loadImage("alien/enemy1.png");
  enemy2=loadImage("alien/enemy2.png");
  enemy3=loadImage("alien/enemy3.png");
  enemy4=loadImage("alien/enemy4.png");
  enemy5=loadImage("alien/enemy5.png");
}

function setup(){
  createCanvas(1200,650);
  player=createSprite(500,400);
  player.addImage(playerImg);
  player.scale=0.7;
  bulletGroup = new Group();
  enmiesGroup = new Group();
  score=0;
}



function draw() {
  
 background(backgroundImg);
 player.x=mouseX;
 player.y=mouseY;
  
  if (keyDown("space")) {
    createBullet();
  }
  createEmies();
  if (bulletGroup.isTouching(enmiesGroup)){
    bulletGroup.destroyEach();
    enmiesGroup.destroyEach();
    score=score+1;
    
  }
  drawSprites();
   textSize(30);
   fill("white");
  text("Score:"+score,900,30);
}
function createBullet() {
  var laser=createSprite(player.x,player.y,5,20);
  laser.velocityY=-5;
  laser.shapeColor="red";
  bulletGroup.add(laser);
  
}

function createEmies() {
  if (frameCount%100===0) {
  enmies=createSprite(1200,300,50,50);
  var rand=Math.random(1,5);
  switch(rand){
    case 1:enmies.addImage(enemy1);
    break;
    case 2:enmies.addImage(enemy2);
    break;
    case 3:enmies.addImage(enemy3);
    break;
    case 4:enmies.addImage(enemy4);
    break;
    case 5:enmies.addImage(enemy5);
    break;
    default: break;
  }
  enmies.scale=0.5;
  enmies.velocityX=-(5+score/10);
  enmies.depth=player.depth;
  player.depth=player.depth+1;
  enmiesGroup.add(enmies);
  }
  
}
